const { defineConfig, build } = require("vite");
const path = require("path");
const fs = require("fs-extra");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const version = require("../package.json").version;
// 基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

// 入口文件
const entryFile = path.resolve(__dirname, "./entry.ts");
// 输出目录
const outputDir = path.resolve(__dirname, "../build");
// 组件目录
const componentsDir = path.resolve(__dirname, "../src/components");
// rollup配置
const rollupOptions = {
  // 外置
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 生成package.json
const createPackageJson = (name) => {
  // 预设
  const fileStr = `{
    "name": "${name ? name : "bubu-ui"}",
    "version": "${version}",
    "main": "${name ? "index.umd.js" : "bubu-ui.umd.js"}",
    "module": "${name ? "index.mjs" : "bubu-ui.mjs"}",
    "author": "yeshaojun",
    "description": "",
    "repository": {
      "type": "git",
      "url": ""
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": ""
    }
  }`;

  if (name) {
    // 单个组件，输出对应的package.json
    fs.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      "utf-8"
    );
  } else {
    // 全量
    fs.outputFile(path.resolve(outputDir, "package.json"), fileStr, "utf-8");
  }
};

// 打包单组件
const buildSingle = async (name) => {
  // 给每个组件单独做打包
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir: path.resolve(outputDir, name),
      },
    })
  );

  createPackageJson(name);
};

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: entryFile,
          name: "bb-ui",
          fileName: "bubu-ui",
          formats: ["es", "umd"],
        },
        rollupOptions,
        outDir: outputDir,
      },
    })
  );

  // 生成package.json
  createPackageJson();
};

const buildLib = async () => {
  await buildAll();

  // 按需打包
  fs.readdirSync(componentsDir)
    .filter((name) => {
      const componentDir = path.resolve(componentsDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      await buildSingle(name);
    });
};

buildLib();
