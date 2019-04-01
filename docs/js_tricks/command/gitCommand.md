# Git Command

## 配置全局命令

--global表示设置参数是全局。刚按安装完Git后需要配置用户名和email。

```bash
git config --global user.name "yourname"
git config --global user.email "yourname@yourmail"
```

利用配置命令也可以创建命令的别名。下面把status命令设置别名st。这样，可以用git st代替git status。

```bash
git config --global alias.st status
```

平常常用的命令也可以设置更短的别名以提高效率。

```bash
git config --global alias.lol "log --pretty=oneline"
```

为git 添加HTTPS和HTTP代理

```bash
git config --global https.proxy http://127.0.0.1:1080
git config --global https.proxy https://127.0.0.1:1080
```

如果取消代理

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

事实上这些修改都保存到文件~/.gitconfig中，直接修改该文件也可以:

```javascript
[user]
	email = yourname@yourmail
	name = yourname
[https]
	proxy = https://127.0.0.1:1080
[http]
    proxy = http://127.0.0.1:1080
```

## 基本用法

本节的命令需要要掌握的基本概念：工作区、版本库（包括暂存区、分支）

```bash
git init # 创建Git版本管理创库
git status # 查看创库当前状态
git add target-file # 把目标文件从工作区添加到暂存区
git add --all # 把当前工作区的所有文件添加到暂存区
git commit -m "commit file" # 把暂存区提交到当前分支
git commit -am "commit file" # 从工作区直接提交到分支
git diff target-file # 比较工作区目标文件和本文库分支中的差别
git diff HEAD --target-file # 比较工作区target-file和版本库里面最新的版本，同上
git log # 显示记录提交历史
git log --pretty=oneline # 简单显示提交历史
git log --graph # 查看分支合并情况图
git log --abbrev-commit commit-id # 以短名称显示
```

这三个log命令可以合并：

```bash
git log --graph --pretty=oneline --abbrev-commit
git reflog # 记录和本地版本库有关的操作，比如接下来的版本退回操作
git reset --hard HEAD^ # 把当前版本退回到上一个版本，如果HEAD后有两个^，就表面退回上两个本文
git reset --hard commit-id # 把本文退回到指定的commit-id版本
```

## 管理文件

```bash
git checkout -- target-file # 把工作区中的目标文件的修改（包括删除）丢弃
git reset HEAD target-file # 把暂存区的修改撤掉，把其从新放到工作区
```

当然我们也可以通过配置简单化这个命令：

```bash
git config --global alias.unstage "reset HEAD"
```

git rm target-file 把目标文件删除。被Git跟踪的文件最好使用这个命令而不是Linux中的rm命令。如果误删可以通过git checkout -- target-file 恢复

## 远程创库

```bash
git clone https://github.com/resp/resp.git # 克隆远程创库
git remote -v # 查看远程创库信息
git branch -r # 查看远程创库分支
git fetch # 拉取远程分支
git pull # 拉取远程分支内容并合并本地分支
git remote add origin https://github.com/allenwind/resp.git # 关联本地创库和远程创库resp.git
git push -u origin master # 把本地master分支推送到远程创库origin（这是远程创库的默认名字）-u用于首次推送
git checkout -b feature origin/feature # 创建远程origin的feature分支到本地
git branch --set-upstream develop origin/develop # 建立本地develop分支和远程origin/develop分支的连接
git push origin tag-name # 推送指定标签到远程创库
git push origin --tags # 推送所有标签到远程创库
git push origin :refs/tags/tagname # 删除远程创库的tagname标签
管理分支
git branch # 查看分支列表，*表示当前分支，-r参数表示远程创库分支列表
git branch develop # 创建develop分支
git branch -d develop # 删除develop分支
git branch -D develop # 强制删除develop分支，用于删除没有合并的分支
git checkout develop # 撤换到分支develop
git checkout -b develop # 创建develop分支并切换到该分支
git merge develop # 合并develop分支到当前分支，默认为fast-forward模式，即直接设置HEAD指针指向，删除分支后丢掉分支信息
git merge --no-ff -m "merge with no-ff" develop # 禁用fast-forward模式合并分支，由于要重新提交，所以要在-m参数后指定提交信息
git stash # 把工作区的内容暂存起来，用于快速恢复，不同于add到暂存区。
git stash list # 查看暂存的列表
git stash apply # 恢复暂存stash到工作区
```

如果有多个暂存stash可以指定stash：

```bash
git stash apply stash@{id}
git stash drop # 把暂存stash删掉
```

前两条命令可以合并为：

```bash
git stash pop # 恢复工作区内容并把stash删掉
```

## 设置标签

```bash
git tag # 查看标签
git tag tag-name # 在最新提交上打tag-name标签
git tag -d tag-name # 删除标签
git tag tag-name commit-id # 指定commid-id上打上tag-name标签
git show tag-name # 指定标签version上显示提交信息
git tag -a tag-name -m "tag message" commit-id # 创建带有说明的标签
```

## 更新fork创库的内容

```bash
$git remote add upstream url
$git fetch upstream
$git checkout master
$git rebase upstream/master
$git push -f origin master
```

url为创库的地址。

## 子模块

```bash
git submodule init # 初始化子模块
git submodule add # 添加子模块
git submodule update # 更新子模块
```