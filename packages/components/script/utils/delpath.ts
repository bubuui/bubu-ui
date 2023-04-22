import fse from 'fs-extra';
import { resolve } from 'path';
import { pkgPath } from './paths';
//保留的文件
const stayFile = ['package.json', 'README.md'];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fse.existsSync(path)) {
    files = fse.readdirSync(path);

    files.forEach(async (file) => {
      const curPath = resolve(path, file);

      if (fse.statSync(curPath).isDirectory()) {
        // recurse
        if (file != 'node_modules') await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fse.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/bubu-ui`)
      fse.rmdirSync(path, {
        recursive: true
      });
  }
};
export default delPath;
