#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

# Ensure working directory is test directory
cd "$(dirname "$0")/.."

[ -f package.json ] && rm package.json
yarn init -sy

versions=(
  "next"
  "3.7.4"
  "3.6.3"
  "3.5.1"
  "3.4.4"
  "3.3.3"
  "3.2.1"
  "3.1.1"
)

for version in ${versions[@]}; do
  echo "--- Testing with TypeScript version $version"
  yarn add -s --no-progress typescript@$version
  yarn run tsc
done
