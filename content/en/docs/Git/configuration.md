---
categories: ["Git"]
tags: ["git", "tag"]
title: "Git Configuration"
linkTitle: "Git Configuration"
date: 2022-04-25
weight: 1
description: >
  How to configure git.
---


## Configuration
### Git configuration location

There are three places where configuration is stored:

1) System: <code><var>path</var>/etc/gitconfig</code>
1) Global: `~/.gitconfig` or `/.config/git/config`
1) Local: <code><var>repo</var>/.git/config</code>

When using the `git config` command you can pass `--system`, `--global`, or `--local` to specify which configuration you'd like to modify.  The list above is in order of precedence from lowest to highest.  Values in the local config will override values in global and system.  Values in global will override values in system.

To show all configurations and their source execute `git config --list --show-origin`

### How to use git-config

To see the man page, which is really good for this command, execute `man git-config`.  The "name" of the option to affect is the section and key separated by a period (e.g. alias.br).

There are several options `query/set/replace/unset`.  

To create `git config alias.br 'branch -a'`

To unset `git config --unset alias.br`


### Required configurations

In order to commit in a repo you'll need to ensure that two values are set at some configuration level:

* Email: <code>git config --global user.name "<var>USER-NAME</var>"</code>
* Username: <code>git config --global user.email "<var>EMAIL</var>"</code>

### Aliases

A very useful configuration is an alias.  It allows you to create a short alias for a long command.  Another benefit is having an alias is like having notes you can look up when you forget a seldom used command.

To create an alias <code>git config --global alias.<var>ALIAS-NAME</var> <var>COMMAND</var></code>

An example would be to set `git br` to `git branch -a`
```bash
$ git config --global alias.br 'branch -a'
```