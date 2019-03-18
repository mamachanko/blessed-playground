#!/usr/bin/env bash

set -euo pipefail

cd $(dirname $0)

rm -f *.js.log

node gitlog.js

cat gitlog.js.log
