#!/usr/bin/env bash
set -e
FILES=./specs/*

for f in $FILES
do
  echo "Processing $f file..."
  t=$(yq r $f info.title )
  v=$(yq r $f info.version )
  echo "Building $t API version $v for Python"
  pip install -r ./python/$t/requirements.txt
done
