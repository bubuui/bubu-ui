import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import { resolve } from 'path';
import autoprefixer from 'gulp-autoprefixer';
import fse from 'fs-extra';
import run from '../utils/run';
const pck = require('../../package.json');
const version = require('../../../../package.json').version;
// const version = require('../../package.json');
//删除easyest
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const removeDist = () => {
  return delPath(`${pkgPath}/bubu-ui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/bubu-ui/lib/src`))
    .pipe(dest(`${pkgPath}/bubu-ui/es/src`));
};

const createPackage = () => {
  let dependencies: any = [];
  Object.keys(pck.dependencies).forEach((key) =>
    dependencies.push(`"${key}": "${pck.dependencies[key]}"`)
  );
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
    "dependencies": {
      ${dependencies.join(',')}
    }
  }`;
  console.log('pck.dependencies', pck.dependencies);
  fse.outputFile(
    resolve(__dirname, '../../../bubu-ui/package.json'),
    fileStr,
    'utf-8'
  );
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
    async () => createPackage()
  )
);
