#!/bin/bash

c-build-app
cp -R ./build/* ../craigmiller160.github.io
(cd ../craigmiller160.github.io && git add . && git commit -m "Updating site" && git push)