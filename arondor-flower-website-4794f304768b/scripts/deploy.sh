#!/bin/bash

HUGO_DIR=/tmp/hugo
HUGO_VERSION=0.59.0
HUGO_BINARY="hugo_"$HUGO_VERSION"_linux-64bit"

TARGET_PATH="/var/www/site"

downloadHugo (){
        echo Downloading Hugo website generator into $HUGO_DIR
        wget https://github.com/gohugoio/hugo/releases/download/v$HUGO_VERSION/$HUGO_BINARY.tar.gz -P $HUGO_DIR
        tar xvf $HUGO_DIR/hugo*.tar.gz -C $HUGO_DIR
        rm $HUGO_DIR/$HUGO_BINARY.tar.gz
        ln -s $HUGO_DIR"/hugo_"$HUGO_VERSION"_linux_amd64/hugo_"$HUGO_VERSION"_linux_amd64" $HUGO_DIR/hugo
}


usage () { echo "Usage : $0 -s <source directory> -b <base URL>. Parameters are mandatories."; }

while getopts s:b: opt ; do
   case $opt in
      s) SRC_DIR=$OPTARG ;;
      b) BASE_URL=$OPTARG ;;
      *) usage; exit 1;;
   esac
done

# Check mandatory parameters are provided
if [ -z "$SRC_DIR" ] || [ -z "$BASE_URL" ]
then
        usage
        exit 1
fi

# Check Hugo is already downloaded/extrated otherwise download it
if [ ! -e "$HUGO_DIR/hugo" ] ; then
        echo "'hugo' executable not found into folder $HUGO_DIR"
        downloadHugo
fi


echo Building static site from source $SRC_DIR:
echo "  using Hugo binary: "$HUGO_DIR/hugo
echo "  using base url: "$BASE_URL

$HUGO_DIR/hugo -s $SRC_DIR -b $BASE_URL


echo Copying generated static site to: $TARGET_PATH
rm  -Rf $TARGET_PATH/*
mv $SRC_DIR/public/* $TARGET_PATH/
