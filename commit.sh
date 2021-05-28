#!/bin/bash
branch_name=`git symbolic-ref --short -q HEAD`
echo "请输入commit 信息："
read commit_msg
git add -A
git commit -m "$commit_msg"
git push -f origin $branch_name:$branch_name