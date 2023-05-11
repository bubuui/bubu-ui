import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import path from 'path';
import { series } from 'gulp';
const execa = require('execa');
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/bubu-ui`);
};
const bin = (name: string) =>
  path.resolve(__dirname, '../../../../node_modules/.bin/' + name);
const checkStatus = async () => {
  const { stdout } = await execa('git', ['diff'], {
    stdio: 'pipe'
  });
  if (stdout) {
    // console.log('324', bin('git-cz'));
    // await execa('git', ['add', '-A']);
    // await execa('npx', ['git-cz'];
  }
  console.log('stdout', stdout);
};

export default series(
  async () => checkStatus()
  // async () => publishComponent()
);

// 希望实现的功能
// 1.pnpm commit 实现代码提交并上传到github
// 2.pnpm publish 1.先选版本 2.更新版本依赖（如果是*号就跳过，否则更新为新版本)  3.打包 4.生成changelog 5.代码commit 6.pnpm publish 7.上传到gihutb
