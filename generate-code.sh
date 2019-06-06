#!/usr/bin/env bash
set -e
FILES=./specs/*
declare -a LANGUAGES=(python javascript)

for f in $FILES
do
  echo "Processing $f file..."
  t=$(yq r $f info.title )
  v=$(yq r $f info.version )

  for i in ${!LANGUAGES[@]}
  do
    l="${LANGUAGES[$i]}"
    echo "Generating code for $t API version $v language $l"
    docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v4.0.1 generate \
        -i /local/$f \
        -g $l \
        -o /local/$l/$t \
        --package-name $t \
        --artifact-version $v \
        --generate-alias-as-model
  done
done
