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
git checkout gh-pages
rm -rf ./*
cp -rf ../dist/ .
echo '### Commit and push ###'
git commit -a -m "Publish"
git push
git checkout master
git reset --HARD