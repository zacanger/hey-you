#!/bin/sh

rm -rf docs
mkdir -p docs
cp index.html docs/
cp words.js docs/
git commit -am "docs"
git push
