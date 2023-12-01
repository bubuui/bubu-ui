import inquirer from 'inquirer';
import chalk from 'chalk';
import { execa } from 'execa';
import { simpleGit } from 'simple-git';

async function checkGitStatus() {
  const git = simpleGit(process.cwd());
  const status = await git.status();
  if (
    status.not_added.length > 0 ||
    status.created.length > 0 ||
    status.deleted.length > 0 ||
    status.modified.length > 0 ||
    status.renamed.length > 0
  ) {
    return true;
  } else {
    return false;
  }
}

async function main() {
  if (!(await checkGitStatus())) {
    console.log(chalk.blue('你的代码很干净，不需要提交'));
    return;
  }
  const answer = await inquirer.prompt({
    type: 'list',
    message: '请选择commti类型',
    name: 'type',
    choices: [
      {
        name: chalk.blue('✨feat:       新功能'),
        value: 'feat'
      },
      {
        name: chalk.blue('🐛fix:        修复bug'),
        value: 'fix'
      },
      {
        name: chalk.blue('📚docs:       文档更新'),
        value: 'docs'
      },
      {
        name: chalk.blue('💎style:      代码风格'),
        value: 'style'
      },
      {
        name: chalk.blue('📦refactor:   代码重构'),
        value: 'refactor'
      },
      {
        name: chalk.blue('🚀perf:       性能提升'),
        value: 'perf'
      },
      {
        name: chalk.blue('🚨test:       测试文件'),
        value: 'test'
      },
      {
        name: chalk.blue('🛠buildr:      构建系统'),
        value: 'refactor'
      },
      {
        name: chalk.blue('⚙️ci:          配置修改'),
        value: 'ci'
      },
      {
        name: chalk.blue('🗑revert:      恢复以前的提交'),
        value: 'revert'
      }
    ]
  });
  if (answer.type) {
    const change = await inquirer.prompt({
      type: 'input',
      message: '请输入提交说明',
      name: 'subject',
      validate(v) {
        if (v.length > 2) {
          return true;
        } else {
          return chalk.red('提交说明必须为2个字符以上');
        }
      }
    });
    await execa('git', ['add', '.'], {
      stdio: 'inherit'
    });
    await execa('git', ['commit', '-m', `${answer.type}: ${change.subject}`], {
      stdio: 'inherit'
    });
    console.log(chalk.green('本地commit成功！'));
    const isPush = await inquirer.prompt({
      type: 'confirm',
      name: 'push',
      message: '是否推送到远程仓库'
    });
    if (isPush.push) {
      const info = await execa('git', ['branch'], {
        stdio: 'pipe'
      });
      const branch = info.stdout.replace('*', '').replace(' ', '');
      try {
        await execa('git', ['push', 'origin', branch], {
          stdio: 'inherit'
        });
        console.log(chalk.green(`${branch}分支推送到远程仓库成功！`));
      } catch (error) {
        console.log(chalk.red(error));
        console.log(chalk.red(`${branch}分支推送到失败，请检查网络并重试！`));
      }
    } else {
      console.log(chalk.blue(`你取消了远程仓库的推送`));
    }
  }
}

main();
