---
categories: ["Docs"]
tags: ["git", "git-stash", "working tree"]
title: "The Working Tree and Stashing"
linkTitle: "Working Tree and Stash"
date: 2023-03-20
weight: 1
description: >
  Working with the Working Tree and how to stash. This page is a WIP
---

- `git stash -h` - get help
- `git stash`
- `git stash -u` - also stashes untracked changes
- `git stash -a` - also stashes ignored files
- `git stash save "message"` - add annotation to stash
- `git stash list` - show all stashes
- `git stash show stash@{0}` - Show changed files in a stash
- `git stash show -p` - Shows diff
- `git stash show -v stash@{0}` - Show actual changes
- `git stash pop` - empty the stash and apply changes
- `git stash apply` - apply changes  *and*  keep them in your stash. Useful if you want to apply changes to multiple branches.
- `git stash clear` - delete all stashes
- `git stash drop stash@{0}` - delete a single stash