import babel from 'rollup-plugin-babel';
import ts from 'rollup-plugin-typescript2';
import {dts} from 'rollup-plugin-dts';
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

const PLUGINS = [
  ts({
    tsconfigOverride: {exclude: ['**/*.test.ts']},
  }),
  babel({
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  }),
  replace({
    _VERSION: JSON.stringify(pkg.version),
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'},
    ],
    plugins: PLUGINS,
  },
  {
    input: 'types/index.d.ts',
    output: [
      {file: './dist/index.d.ts', format: 'cjs'},
      {file: './dist/index.d.mts', format: 'es'},
    ],
    plugins: [dts()],
  },
  {
    input: 'src/pure.ts',
    output: [
      {file: 'dist/pure.js', format: 'cjs'},
      {file: 'dist/pure.mjs', format: 'es'},
    ],
    plugins: PLUGINS,
  },
  {
    input: 'types/pure.d.ts',
    output: [
      {file: './dist/pure.d.ts', format: 'cjs'},
      {file: './dist/pure.d.mts', format: 'es'},
    ],
    plugins: [dts()],
  },
];
