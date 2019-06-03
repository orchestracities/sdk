#!/bin/bash
FILES=/specs/*
for f in $FILES
do
  echo "Processing $f file..."
  npm run swagger-cli validate "$f"
done