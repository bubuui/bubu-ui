import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import { resolve } from 'path';
import autoprefixer from 'gulp-autoprefixer';
import fse from 'fs-extra';
import run from '../utils/run';
const pck = require('../../package.json');
const version = require('../../../../package.json').version;

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const removeDist = () => {
  return delPath(`${pkgPath}/bubu-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/bubu-ui/lib/packages/components/src`))
    .pipe(dest(`${pkgPath}/bubu-ui/es/packages/components/src`));
};

export const buildFullStyle = () => {
  return src(`${componentPath}/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/bubu-ui/lib/`))
    .pipe(dest(`${pkgPath}/bubu-ui/es/`));
};

const createPackage = () => {
  const dependencies = findVersion();
  const fileStr = `{
    "name": "bubu-ui",
    "version": "${version}",
    "main": "lib/packages/components/index.js",
    "module": "es/packages/components/index.mjs",
    "author": "yeshaojun",
    "description": "基于vue3开源组件库",
    "files": [
      "es",
      "lib"
    ],
    "repository": {
      "type": "git",
      "url": "https://github.com/bubuui/bubu-ui"
    },
    "sideEffects": [
      "**/*.css"
    ],
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "types": "lib/packages/components/index.d.ts",
    "bugs": {
      "url": "https://github.com/bubuui/bubu-ui"
    },
    "peerDependencies": {
      "vue": "^3.3.9"
    },
    "dependencies": ${JSON.stringify(dependencies)}
  }`;
  fse.outputFile(
    resolve(__dirname, '../../../bubu-ui/package.json'),
    fileStr,
    'utf-8'
  );
};

const findVersion = () => {
  const packagePath = resolve(__dirname, '../../../../packages');
  const pckKeys = Object.keys(pck.dependencies);
  const dependencies = {};
  fse
    .readdirSync(packagePath)
    .filter((name) => {
      const componentDir = resolve(packagePath, name);
      const isDir = fse.lstatSync(componentDir).isDirectory();
      return isDir && fse.readdirSync(componentDir).includes('package.json');
    })
    .forEach((name) => {
      const file = require(resolve(packagePath, `${name}/package.json`));
      const obj = pckKeys.find((key) => key === file.name);
      if (obj) {
        // @ts-ignore
        dependencies[file.name] = file.version;
      }
    });
  return dependencies;
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildFullStyle(),
    async () => buildComponent(),
    async () => createPackage()
  )
) as never;
