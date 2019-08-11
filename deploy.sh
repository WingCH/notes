#!/usr/bin/env sh
# 发生错误时停止
set -e

npm run build

cd docs/.vuepress/dist
echo 'notes.wingpage.net' > CNAME

git init
git config --local user.name "WingCH"
git config --local user.email  "g1191993@study.ouhk.edu.hk"
git add -A
git commit -m 'deploy'





git push -f https://${access_token}@github.com/WingCH/notes.git master:gh-pages


cd -