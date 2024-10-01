#!/usr/bin/env zx

import fs from 'fs';
import 'zx/globals';

const VERSIONS = [
  'next',
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

  // Definitely Typed only supports TS versions 2 years in the past.
  // To make this check more stable, install @types/node to match
  // the version we are testing.
  const tag = ['next', 'beta', 'latest'].includes(version)
    ? 'latest'
    : `ts${version.substring(0, 3)}`;
  await $`yarn add -s --no-progress @types/node@${tag}`;

  await $`yarn run tsc --strict --noEmit src/valid.ts`;
  await $`yarn run tsc --strict --noEmit src/invalid.ts`;
}
