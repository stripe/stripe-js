#!/usr/bin/env zx

import fs from 'fs';
import {spawn} from 'child_process';
import path from 'path';
import 'zx/globals';

const versionSnapshot = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'ts-version-snapshot.json'), 'utf8')
);

const TYPE_TESTS_DIR = `${__dirname}/..`;

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

const serializeVersion = ({major, minor, patch}) =>
  [major, minor, patch].join('.');

let isFailure = false;
for (const {typescript, nodeTypes} of versionSnapshot) {
  // Temporary fix for TS 5.2 as https://github.com/DefinitelyTyped/DefinitelyTyped/pull/73924/files
  // actually breaks with TS 5.2 and their npm is marking it as the tag for ts5.2.
  // pin to latest working version of @types/node for TS 5.2.
  const patchedNodeTypes =
    typescript.major === 5 && typescript.minor >= 2 && typescript.minor <= 5
      ? '24.10.3'
      : serializeVersion(nodeTypes);

  const typescriptVersion = `typescript@${serializeVersion(typescript)}`;
  const nodeTypesVersion = `@types/node@${patchedNodeTypes}`;

  console.log(`--- Testing with ${typescriptVersion} and ${nodeTypesVersion}`);

  await $`yarn add -s --no-progress ${typescriptVersion}`;
  await $`yarn add -s --no-progress ${nodeTypesVersion}`;

  let flags = ['--strict', '--noEmit'];

  try {
    await runTsc('src/valid.ts', flags);
    await runTsc('src/invalid.ts', flags);
  } catch (e) {
    console.error(e);
    isFailure = true;
  }
}

if (isFailure) process.exit(1);
