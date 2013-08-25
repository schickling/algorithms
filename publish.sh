#!/bin/sh
set -e
echo '### Checkout master ###'
git checkout master
echo '### Install dependencies ###'
npm install
bower install
echo '### Build ###'
grunt build
echo '### Copy dist folder'
cp -rf dist ../dist
echo '### Prepare branch ###'
git branch -f gh-pages master
rm -rf ./*
cp -rf ../dist/ .
echo '### Commit and push ###'
# git commit -a -m "Publish"
# git push --all