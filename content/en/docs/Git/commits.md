---
categories: ["Docs"]
tags: ["git", "git-commit"]
title: "Git Commits"
linkTitle: "Git Commits"
date: 2022-04-25
weight: 1
description: >
  How to commit.  This is a WIP.
---

# This is a WIP

## git-add
## git-commit
## git-merge

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

