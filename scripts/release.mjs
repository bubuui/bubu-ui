// @ts-nocheck
import fse from 'fs-extra';
import path from 'node:path';
import inquirer from 'inquirer';
import { dirname } from 'dirname-filename-esm';
import semver from 'semver';
import { execa } from 'execa';
import { simpleGit } from 'simple-git';
import log from 'npmlog';

const __dirname = dirname(import.meta);
const packagesPath = path.resolve(__dirname, '../packages');
const currentVersion = fse.readJsonSync(
  path.resolve(__dirname, '../package.json')
).version;

// packages中，不需要发布的包
const EXCLUDE = ['components'];
const versionIncrements = ['patch', 'minor', 'major'];

let packageList = [];
let selectName = '';
let selectPkgName = '';
let selectVersion = '';

let git;

function getPackagesList() {
  return fse
    .readdirSync(packagesPath)
    .map((name) => {
      const libPath = path.resolve(packagesPath, name);
      const isDir = fse.lstatSync(libPath).isDirectory();
      if (
        EXCLUDE.indexOf(name) === -1 &&
        isDir &&
        fse.readdirSync(libPath).includes('package.json')
      ) {
        const pkg = fse.readJsonSync(path.resolve(libPath, 'package.json'));
        return {
          name: pkg.name,
          version: pkg.version,
          value: pkg.name,
          pathName: name
        };
      }
    })
    .filter((_) => _);
}

async function choosePublishPackages() {
  packageList = getPackagesList();
  const answer = await inquirer.prompt([
    {
      name: 'name',
      type: 'list',
      choices: packageList,
      message: '请选择想要发布的包'
    }
  ]);
  if (answer) {
    const select = packageList.find((_) => _?.name === answer.name);
    const version = select?.version;
    selectName = select.pathName;
    selectPkgName = answer.name;
    console.log('version', version);
    await choosePublishVersion(version);
  }
}

async function choosePublishVersion(version) {
  const answer = await inquirer.prompt([
    {
      name: 'release',
      type: 'list',
      choices: versionIncrements.map((i) => ({
        name: `${i} ${semver.inc(version, i)}`,
        value: `${semver.inc(version, i)}`
      })),
      message: '请选择包版本'
    }
  ]);
  if (answer) {
    selectVersion = answer.release;
    await updatePackages();
  }
}

// 修改packages.json文件
// 查找所有packages文件，看是否有依赖，如果有，则改为最新依赖
async function updatePackages() {
  const updatePath = path.resolve(packagesPath, `${selectName}/package.json`);
  const pkgConfig = fse.readJsonSync(updatePath);
  pkgConfig.version = selectVersion;
  fse.outputJsonSync(updatePath, pkgConfig, {
    encoding: 'utf-8',
    spaces: '\t'
  });
  // 查找所有的packages下的package.json文件，如果有依赖，则修改依赖版本
  updatePackagesDep(packagesPath);
  // 把site 和 play的依赖也改一下
  updatePackagesDep(process.cwd(), ['node_modules', 'packages']);

  if (selectName === 'bubu-ui') {
    // 把最外层的package.json也改掉
    const config = fse.readJsonSync(
      path.resolve(process.cwd(), 'package.json')
    );
    config.version = selectVersion;
    fse.outputJsonSync(path.resolve(process.cwd(), 'package.json'), config, {
      encoding: 'utf-8',
      spaces: '\t'
    });
  }
}

function updatePackagesDep(pathDir, exclude = []) {
  fse.readdirSync(pathDir).forEach((name) => {
    if (exclude.indexOf(name) === -1) {
      const libPath = path.resolve(pathDir, name);
      const isDir = fse.lstatSync(libPath).isDirectory();
      if (isDir && fse.readdirSync(libPath).includes('package.json')) {
        const pkg = fse.readJsonSync(path.resolve(libPath, 'package.json'));
        const dep = Object.assign(
          pkg.dependencies || {},
          pkg.devDependencies || {}
        );
        if (Object.keys(dep).length > 0) {
          Object.keys(dep).forEach((_key) => {
            if (_key === selectPkgName) {
              pkg.dependencies[_key] = selectVersion;
            }
          });
          fse.outputJsonSync(path.resolve(libPath, 'package.json'), pkg, {
            encoding: 'utf-8',
            spaces: '\t'
          });
        }
      }
    }
  });
}

async function checkGitStatus() {
  git = simpleGit(process.cwd());
  const gitDir = path.resolve(process.cwd(), '.git');
  if (!fse.existsSync(gitDir)) {
    // 实现git初始化
    await git.init();
    log.info('完成git初始化');
  }
  const status = await git.status();
  if (status.conflicted.length > 0) {
    log.error('有冲突文件，请解决冲突之后，执行pnpm run commit进行提交');
    return;
  }

  if (
    status.not_added.length > 0 ||
    status.created.length > 0 ||
    status.deleted.length > 0 ||
    status.modified.length > 0 ||
    status.renamed.length > 0
  ) {
    await git.add(status.not_added);
    await git.add(status.created);
    await git.add(status.deleted);
    await git.add(status.modified);
    await git.add(status.renamed.map((item) => item.to));
    await execa(
      'git',
      ['commit', '-m', `build: ${selectPkgName} v${selectVersion}`],
      {
        stdio: 'inherit'
      }
    );
    log.info('本地代码提交成功');
  }
}

async function checkNeedPush() {
  const answer = await inquirer.prompt([
    {
      name: 'select',
      type: 'confirm',
      choices: packageList,
      message: '是否推送到远程仓库'
    }
  ]);
  if (answer.select) {
    log.info('开始推送github');
    if (selectName === 'bubu-ui') {
      await execa('git', ['tag', `v${selectVersion}`], {
        stdio: 'inherit'
      });
      await execa('git', ['push', 'origin', `refs/tags/v${selectVersion}`], {
        stdio: 'inherit'
      });
    }
    await execa('git', ['push'], {
      stdio: 'inherit'
    });
  }
}

async function main() {
  await choosePublishPackages();
  await execa('pnpm', ['run', 'changelog'], {
    stdio: 'inherit'
  });
  await checkGitStatus();
  await checkNeedPush();
  await execa(
    'npm',
    ['run', 'publish', '--new-version', selectVersion, '--access', 'public'],
    {
      stdio: 'pipe'
    }
  );
}

main();
