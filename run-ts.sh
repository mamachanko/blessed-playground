#!/usr/bin/env bash

set -euo pipefail

cd $(dirname $0)

rm -f *.ts.log

npx ts-node gitlog.ts

cat gitlog.ts.log
