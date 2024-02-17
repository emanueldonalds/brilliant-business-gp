#!/bin/bash

ng build --base-href "https://brilliantbusiness.nu/" --output-path docs
cp CNAME docs/CNAME
cp docs/index.html docs/404.html

git add .
git commit -m "Deploy"
git push
