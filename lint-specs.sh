#!/usr/bin/env bash
set -e
FILES=./specs/*
for f in $FILES
do
  echo "Processing $f file..."
  docker run \
    -v ${PWD}:/local \
    wework/speccy lint "/local/$f" --skip openapi-tags-alphabetical
done
