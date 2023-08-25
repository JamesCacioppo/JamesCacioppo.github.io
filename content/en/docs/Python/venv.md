---
categories: ["Development"]
tags: ["venv", "python"]
title: "venv"
linkTitle: "venv"
date: 2023-02-02
weight: 2
description: >
  venv
---

Create a dir (and any subdirs) and place a `pyvenv.cfg` as well as a `bin` dir.
<pre>python -m venv <var>PATH</var></pre>

For example:
<pre>python -m venv .venv</pre>

To activate the virtual environment:
<pre>source <var>PATH</var>/bin/activate</pre>

To deactivate the virtual environment:
<pre>deactivate</pre>