#!/bin/bash
FILES=./specs/*
for f in $FILES
do
  echo "Processing $f file..."
  docker run \
    -v ${PWD}:/local \
    wework/speccy lint "/local/$f" --skip openapi-tags-alphabetical
done
