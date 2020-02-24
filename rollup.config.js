import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import ts from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    output: [
      {file: pkg.main, format: 'cjs'},
      {file: pkg.module, format: 'es'},
    ],
    plugins: [
      ts({
        tsconfigOverride: {exclude: ['**/*.test.ts']},
      }),
      babel({
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
      }),
    ],
  },
];
