---
categories: ["Docs"]
tags: ["git", "git commands"]
title: "Git Commands"
linkTitle: "Git Commands"
date: 2022-04-25
weight: 1
description: >
  Various git commands.  This is a WIP.
---

# This is a WIP

## git-add
## git-commit
## git-merge

## git-log
- `git log --oneline`
- `git log --stat`
- `git log -p`
- `git shortlog` - groups commits by user
- `git log --graph --oneline --decorate` - the golden command

Additional resources:
https://www.atlassian.com/git/tutorials/git-log

## git-blame

## git-diff

## git-show
Show information about various objects

## git-restore
Restore a file from a previous commit
<pre>git restore --source <var>HEAD~1</var> <var>FILE_NAME<var></pre>

Restore a file from HEAD
<pre>git restore <var>FILE_NAME</var></pre>

Restore all files in the current directory from HEAD
<pre>git restore .</pre>

## git-reset
<pre>git reset --soft <var>COMMIT</var></pre>

<pre>git reset --hard <var>COMMIT</var></pre>
## Removing a commit

Delete the last commit: `git reset --hard HEAD~1`
Force push the changes: <code>git push -f <var>remote</var> <var>branch</var></code>

