#!/bin/bash
FILES=./specs/*

for f in $FILES
do
  echo "Processing $f file..."
  t=$(yq r $f info.title )
  v=$(yq r $f info.version )
  echo "Building $t API version $v for JavaScript"
  npm install -C ./javascript/$t
  npm link -C ./javascript/$t
  npm run build -C ./javascript/$t
done
