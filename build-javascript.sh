#!/bin/bash
FILES=./specs/*

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
  echo "Building $t API version $v for JavaScript"
  npm install -C ./javascript/$t
  npm link -C ./javascript/$t
  npm run build -C ./javascript/$t
done
