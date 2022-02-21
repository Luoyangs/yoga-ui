import path from 'path';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';
import dts from 'rollup-plugin-dts';
import sourcemaps from 'rollup-plugin-sourcemaps';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const banner = `/**
 * Vue 3 Component UI Library ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;
const projectRootDir = path.resolve(__dirname);
const globals = {
  vue: 'Vue',
  mitt: 'mitt',
  uuid: 'uuid',
  dayjs: 'dayjs',
  '@popperjs/core': '@popperjs/core',
};
const commonPlugins = [
  alias({
    entries: [
      {
        find: '@base',
        replacement: path.resolve(projectRootDir, 'src/base'),
      },
      {
        find: '@theme',
        replacement: path.resolve(projectRootDir, 'src/theme'),
      },
      {
        find: '@utils',
        replacement: path.resolve(projectRootDir, 'src/utils'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(projectRootDir, 'src/hooks'),
      },
      {
        find: '@locale',
        replacement: path.resolve(projectRootDir, 'src/locale'),
      },
      {
        find: '@components',
        replacement: path.resolve(projectRootDir, 'src/components'),
      },
    ],
  }),
  scss({
    output: 'dist/yui.css',
    // outputStyle: 'compressed',
    prefix: `@use "sass:math";@use "sass:map";@import "../../../theme/var.scss";`,
    processor: () => postcss([autoprefixer()]),
    includePaths: [path.join(__dirname, '../../node_modules/'), 'node_modules/'],
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'yui',
        banner,
        globals,
      },
      {
        file: pkg.module,
        format: 'es',
        banner,
        globals,
        sourcemap: true,
      },
    ],
    external: [
      // 告诉rollup不要将此lodash打包，而作为外部依赖
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      // css({ output: 'carousel.css' }),
      ...commonPlugins,
      typescript(),
      commonjs(),
      resolve(),
      url(),
      json(),
      sourcemaps(),
      vue({
        target: 'browser',
        template: {
          isProduction: false,
        },
        preprocessStyles: false,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.types,
      format: 'es',
      banner,
    },
    plugins: [...commonPlugins, dts()],
  },
];
