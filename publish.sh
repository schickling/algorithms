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
rm -rf ../dist
cp -r dist ../dist
echo '### Prepare branch ###'
git checkout gh-pages
rm -rf ./*
cp -r ../dist/ .
echo '### Commit and push ###'
git add -A
git commit -m "Publish"
git push origin gh-pages
git checkout master
git reset HEAD~ && git clean -df