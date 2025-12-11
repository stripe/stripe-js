#!/usr/bin/env zx

import fs from 'fs';
import {spawn} from 'child_process';
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

const rootPackageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const rootTypesNodeVersion = rootPackageJson.devDependencies?.['@types/node'];

// Ensure working directory is test directory
cd(TYPE_TESTS_DIR);

if (fs.existsSync(`${TYPE_TESTS_DIR}/package.json`)) {
  await $`rm package.json`;
}

await $`yarn init -sy`;

function runTsc(filename, flags) {
  const tscArgs = [...flags, filename];
  const proc = spawn('yarn', ['run', 'tsc', ...tscArgs], {stdio: 'inherit'});

  return new Promise((resolve, reject) => {
    proc.on('error', (err) => {
      reject(err);
    });

    proc.on('close', (code) =>
      code === 0 ? resolve() : reject(new Error('tsc failed'))
    );
  });
}

for (const version of VERSIONS) {
  console.log(`--- Testing with TypeScript version ${version}`);
  await $`yarn add -s --no-progress typescript@${version}`;

  // Definitely Typed only supports TS versions 2 years in the past.
  // To make this check more stable, install @types/node to match
  // the version we are testing.
  let tag = ['next', 'beta', 'latest'].includes(version)
    ? 'latest'
    : `ts${version.substring(0, 3)}`;

  // Temporary fix for TS 5.2 as https://github.com/DefinitelyTyped/DefinitelyTyped/pull/73924/files
  // actually breaks with TS 5.2 and their npm is marking it as the tag for ts5.2.
  if (version === '5.2') {
    tag = rootTypesNodeVersion;
  }

  await $`yarn add -s --no-progress @types/node@${tag}`;

  let flags = ['--strict', '--noEmit'];

  // This option was introduced in Nov 2025 and will be required for versions
  // from here forward. This was the implicit behavior before, but now it is required
  // to maintain the same behavior. Eventually, we will be able to to set a version
  // boundary and add this flag in for all versions newer than that, but for now we'll
  // need to add `beta` then the version this actually lands in to this check.
  if (version === 'next') {
    flags.unshift('--ignoreConfig');
  }

  await runTsc('src/valid.ts', flags);
  await runTsc('src/invalid.ts', flags);
}
