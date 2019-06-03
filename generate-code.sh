#!/bin/bash
FILES=./specs/*
declare -a LANGUAGES=(python javascript)

function yaml() {
    hashdot=$(gem list hash_dot);
    if ! [ "$hashdot" != "" ]; then sudo gem install "hash_dot" ; fi
    if [ -f $1 ];then
        cmd=" Hash.use_dot_syntax = true; hash = YAML.load(File.read('$1'));";
        if [ "$2" != "" ] ;then 
            cmd="$cmd puts hash.$2;"
        else
            cmd="$cmd puts hash;"
        fi
        ruby  -r yaml -r hash_dot <<< $cmd;
    fi
}

for f in $FILES
do
  echo "Processing $f file..."
  t=$(yaml $f info.title)
  v=$(yaml $f info.version)

  for i in ${!LANGUAGES[@]}
  do
    l="${LANGUAGES[$i]}"
    echo "Generating code for $t API version $v language $l"
    docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
        -i /local/$f \
        -g $l \
        -o /local/$l/$t \
        --package-name $t \
        --artifact-version $v
  done
done
