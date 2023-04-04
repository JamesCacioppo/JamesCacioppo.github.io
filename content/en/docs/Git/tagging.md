---
categories: ["Docs"]
tags: ["git", "git-tag", "tagging"]
title: "Git Tagging"
linkTitle: "Git Tagging"
date: 2023-01-30
weight: 1
description: >
  How to create and handle tags in Git.
---

## Creating tags

There are two types of tags, lightweight and annotated.  The following explanation was taken from a Stack Overflow post:

> A lightweight tag is very much like a branch that doesn't change - it's just a pointer to a specific commit.

> Annotated tags, however, are stored as full objects in the Git database. They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG). It’s generally recommended that you create annotated tags so you can have all this information; but if you want a temporary tag or for some reason don’t want to keep the other information, lightweight tags are available too.

### Create lightweight tag

<pre>git tag <var>TAG</var></pre>

### Create annotated tag

<pre>git tag -a <var>TAG</var> -m <var>COMMIT MESSAGE</var></pre>

## Handling tags

### Pushing new tags

<pre>git push origin <var>TAG</var></pre>

### Deleting local tags

<pre>git tag -d <var>TAG</var></pre>

### Deleting remote tags

<pre>git push origin --delete <var>TAG</var></pre>

## Listing tags

<pre>git tag</pre>

### Sorting output

Use the _sort_ switch `--sort=<type>`, where _type_ can be:

* `refname`: lexicographic order
* `version:refname` or `v:refname`: tag names are treated as versions
{{% alert title="Reverse order" color="info" %}}
Prepend _type_ with `-` to reverse order.
{{% /alert %}}

### Examples

Lexical sort
```bash
$ git tag -l --sort=refname "foo*"
foo1.10
foo1.3
foo1.6
```

Version sort
```bash
$ git tag -l --sort=version:refname "foo*"
foo1.10
foo1.6
foo1.3
```

Reverse version sort
```bash
$ git tag -l --sort=-version:refname "foo*"
foo1.10
foo1.6
foo1.3
```

Reverse lexical sort
```bash
$ git tag -l --sort=-refname "foo*"
foo1.6
foo1.3
foo1.10
```
