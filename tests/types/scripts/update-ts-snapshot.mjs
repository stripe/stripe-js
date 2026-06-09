#!/usr/bin/env zx

import 'zx/globals';
import fs from 'fs';
import path from 'path';

const allVersions = JSON.parse(await $`yarn info typescript versions --json`)
  .data;
const timestamps = JSON.parse(await $`yarn info typescript time --json`).data;
const nodeTypesTags = JSON.parse(
  await $`yarn info @types/node dist-tags --json`
).data;

const threeYearsAgo = Date.now() - 3 * 365 * 24 * 60 * 60 * 1000;

const selectedVersions = allVersions
  .filter((el) => el.match(/^\d+\.\d+\.\d+$/))
  .reverse()
  .filter((version) => {
    const releaseDate = new Date(timestamps[version]).getTime();
    return releaseDate > threeYearsAgo;
  })
  .map((tsVersion) => {
    const parseVersion = (version) => {
      const [major, minor, patch] = version.split('.');
      return {
        major: parseInt(major, 10),
        minor: parseInt(minor, 10),
        patch: parseInt(patch, 10),
      };
    };

    const typescript = parseVersion(tsVersion);

    const nodeTypesTag = `ts${typescript.major}.${typescript.minor}`;
    const nodeTypes = parseVersion(nodeTypesTags[nodeTypesTag]);

    return {
      typescript,
      nodeTypes,
    };
  })
  .reduce((acc, release) => {
    const {typescript} = release;
    const key = `${typescript.major}.${typescript.minor}`;
    if (!acc.has(key) || acc.get(key).patch < typescript.patch) {
      acc.set(key, release);
    }
    return acc;
  }, new Map())
  .values();

fs.writeFileSync(
  path.join(__dirname, 'ts-version-snapshot.json'),
  JSON.stringify(Array.from(selectedVersions), null, 2)
);
