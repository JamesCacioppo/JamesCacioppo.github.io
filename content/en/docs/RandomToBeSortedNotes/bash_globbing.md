---
title: "Bash Globbing'"
linkTitle: "Bash globbing"
date: 2023-09-28
weight: 1
categories: ["Docs"]
tags: ["bash", "globbing"]
description: >
  Explanation of globbing in Bash
---

{{% pageinfo color="primary" %}}
The following is a brilliant explanation from Yogesh Umesh Vaity on Stack Exchange at https://stackoverflow.com/questions/28176590/what-does-the-double-asterisk-wildcard-mean.  I have not personally validated this to do your own homework.
{{% /pageinfo %}}


### Segments and Separators (`/`)

The separator is always the `/` character. A segment is everything that comes between the two separators.

Example: `Tests/HelloWorld.js`

Here, `Tests` and `HelloWorld.js` are the segments and `/` is the separator.

### Single Asterisk (`*`)

Single Asterisk (`*`) matches zero or more characters within one segment. It is used for globbing the files within one directory.

Example: `*.js`

This glob will match files such as `HelloWorld.js` but not files like `Tests/HelloWorld.js` or `Tests/UI/HelloWorld.js`

### Double Asterisk (`**`)

Double Asterisk (`**`) matches zero or more characters across multiple segments. It is used for globbing files that are in nested directories.

Example: `Tests/**/*.js`

Here, the file selecting will be restricted to the `Tests` directory. The glob will match the files such as `Tests/HelloWorld.js`, `Tests/UI/HelloWorld.js`, `Tests/UI/Feature1/HelloWorld.js`.

### Question Mark(`?`)

Question mark(`?`) matches a single character within one segment. When some files or directories differ in their name by just one character, you can use the `?`.

Example: `tests/?at.js`

This will match files such as `tests/cat.js`, `test/Cat.js`, `test/bat.js` etc.

### Square Brackets (`[abc]`)

Square Brackets (`[...]`) globs the files with a single character mentioned in the square brackets.

Example: `tests/[CB]at.js`

This glob will match files like `tests/Cat.js` or `tests/Bat.js`

### Square Brackets Range (`[a-z]`)

Square Brackets Range (`[a-z]`), matches one character specified in the range.

Example: `tests/feature[1-9]/HelloWorld.js`

This glob will match files like `tests/feature1/HelloWorld.js`, `test/feature2/HelloWorld.js` and so on... up to `9`.

### Negation (`!`)

Negation (`!`) can be used for excluding some files.

Example 1: `tests/[!C]at.js`

This will exclude the file `tests/Cat.js` and will match files like `tests/Bat.js`, `tests/bat.js`, `tests/cat.js`.

Negation is also used in configuration files inside an array to negate or exclude some files.

Example 2: `['Tests/**/*.js', '!Tests/UI/**']`

This will exclude all files and folders from `Tests/UI` directory.