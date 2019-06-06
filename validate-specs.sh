#!/usr/bin/env bash
set -e
FILES=./specs/*
for f in $FILES
do
  echo "Processing $f file..."
  npm run swagger-cli:validate "$f"
done
