---
categories: ["Python"]
tags: ["pytest", "python"]
title: "Pytest"
linkTitle: "Pytest"
date: 2023-02-01
weight: 2
description: >
  Pytest
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

