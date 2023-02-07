---
categories: ["Python"]
tags: ["pyenv", "python"]
title: "Pyenv"
linkTitle: "Pyenv"
date: 2023-01-30
weight: 2
description: >
  Pyenv
---

Install pyenv:
```bash
brew update
brew install pyenv
```

Configure pyenv:
```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

Install build deps of MacOS: `brew install openssl readline sqlite3 xz zlib tcl-tk`

List available versions: <code>pyenv install -l</code>

Install a version: <code>pyenv install <var>version</var></code>

Set a global version to use: <code>pyenv global <var>version</var></code>

There are three ways to set the python version to be used:
* Select just for current shell session: <code>pyenv shell <var>version</var></code>
* Automatically select whenever you are in the current directory (or its subdirectories): <code>pyenv local <var>version</var></code>
* Select globally for your user account: <code>pyenv global <var>version</var></code> 