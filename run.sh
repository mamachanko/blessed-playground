#!/usr/bin/env bash

set -euxo pipefail

cd $(dirname $0)

npx ts-node gitlog.ts