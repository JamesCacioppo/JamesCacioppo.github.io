---
categories: ["Git"]
tags: ["git", "git-commit", "docs"]
title: "Git Commits"
linkTitle: "Git Commits"
date: 2022-04-25
weight: 1
description: >
  How to configure git.
---


## Configuration
### Git configuration location

There are three places where configuration is stored:

1) __System__: `[path]/etc/gitconfig`
1) __Global__: `~/.gitconfig` or `/.config/git/config`
1) __Local__: `[repo]/.git/config`

When using the `git config` command you can pass `--system`, `--global`, or `--local` to specify which configuration you'd like to modify.  The list above is in order of precedence from lowest to highest.  Values in the local config will override values in global and system.  Values in global will override values in system.

To show all configurations and their source execute `git config --list --show-origin`

### How to use git-config

To see the man page, which is really good for this command, execute `man git-config`.  The "name" of the option to affect is the section and key separated by a period (e.g. alias.br).

There are several options `query/set/replace/unset`.  
To create `git config alias.br 'branch -a'`
To unset `git config --unset alias.br`


### Required configurations

In order to commit in a repo you'll need to ensure that two values are set at some configuration level:

* __Email__: `git config --global user.name "[User Name]"`
* __Username__: `git config --global user.email "james.m.cacioppo@gmail.com"`

### Aliases

A very useful configuration is an alias.  It allows you to create a short alias for a long command.  Another benefit is having an alias is like having notes you can look up when you forget a seldom used command.

To create an alias `git config --global alias.[alias name] [command]`

An example would be to set `git br` to `git branch -a`
```bash
$ git config --global alias.br 'branch -a'
```