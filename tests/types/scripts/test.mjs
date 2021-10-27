#!/usr/bin/env zx

import fs from 'fs';
import 'zx/globals';

const VERSIONS = [
  'next',
  'beta',
  'latest',
  '3.9.7',
  // '3.8.3',
  // '3.7.4',
  // '3.6.3',
  // '3.5.1',
  // '3.4.4',
  // '3.3.3',
  // '3.2.1',
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
}
