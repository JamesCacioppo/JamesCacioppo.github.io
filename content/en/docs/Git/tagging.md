---
categories: ["Git"]
tags: ["git", "tag"]
title: "Git Tagging"
linkTitle: "Git Tagging"
date: 2023-01-30
weight: 1
description: >
  How to create and handle tags in Git.  This page is a WIP.
---

## Creating tags

There are two types of tags, lightweight and annotated.  The following explanation was taken from a Stack Overflow post:

> A lightweight tag is very much like a branch that doesn't change - it's just a pointer to a specific commit.

> Annotated tags, however, are stored as full objects in the Git database. They’re checksummed; contain the tagger name, email, and date; have a tagging message; and can be signed and verified with GNU Privacy Guard (GPG). It’s generally recommended that you create annotated tags so you can have all this information; but if you want a temporary tag or for some reason don’t want to keep the other information, lightweight tags are available too.

### Create lightweight tag

`git tag 0.1.0`

### Create annotated tag

`git tag -a 0.1.0 -m "some message"`

## Handling tags

### Pushing new tags

`git push origin 0.1.0`

### Deleting local tags

`git tag -d 0.1.0`

### Deleting remote tags

`git push origin --delete 0.1.0`

## Listing tags

`git tag`

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
