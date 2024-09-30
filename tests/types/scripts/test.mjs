#!/usr/bin/env zx

import fs from 'fs';
import 'zx/globals';

const VERSIONS = [
  'beta',
  'latest',
  '5.2',
  '5.1.6',
  '5.0.4',
  '4.9.5',
  '4.8.4',
  '4.7.4',
  '4.6.4',
  '4.5.5',
  '4.4.4',
  '4.3.5',
  '4.2.4',
  '4.1.6',
  '4.0.6',
  '3.9.10',
  '3.8.3',
  '3.7.4',
  '3.6.3',
  '3.5.1',
  '3.4.4',
  '3.3.3',
  '3.2.1',

  // Attempting to test on 3.1.1 currently fails. I believe it is not a
  // fundamental incompatibility with the types, just some tsconfig.json changes
  // that are needed. Skipping for now
  // '3.1.1',
];

const TYPE_TESTS_DIR = `${__dirname}/..`;

// Ensure working directory is test directory
cd(TYPE_TESTS_DIR);

if (fs.existsSync(`${TYPE_TESTS_DIR}/package.json`)) {
  await $`rm package.json`;
}

await $`yarn init -sy`;

for (const version of VERSIONS) {
  console.log(`--- Testing with TypeScript version ${version}`);
  await $`yarn add -s --no-progress typescript@${version}`;
  await $`yarn run tsc --strict --noEmit src/valid.ts`;

  // TypeScript versions >= 3.9.0 support [@ts-expect-error][0], which lets us
  // write tests for types that we expect to cause errors
  //
  // [0]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
  if (version >= '3.9.0') {
    await $`yarn run tsc --strict --noEmit src/invalid.ts`;
  }
}
