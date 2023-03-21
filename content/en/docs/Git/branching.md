---
categories: ["Docs"]
tags: ["git", "branching"]
title: "Git Branching"
linkTitle: "Git Branching"
date: 2022-04-25
weight: 2
description: >
  Branching concepts and commands.
---

The first thing to understand about Git is it's a distributed Source Control Manager (SCM).  This means that the repository isn't stored in a central location.  It's stored on every developer's computer.  When it was first created this was how it was used.  We now have a feature called a _remote_ that has become ubiquitous.  A remote is commonly a Git server which can store your repository in a central place for all developers on your team to access.  The first step in working with Git is almost always cloning.

## Clone a repo

Cloning a repo is the act of downloading a copy of the repo to your local machine so you can work on it.  The `git clone` command will create a new sub directory within your present working directory and clone the repo to it.  To clone a repo using the HTTPS protocol:
```bash
$ git clone https://github.com/JamesCacioppo/git-zero-to-hero-demo.git
```

To clone a repo using SSH:
```bash
$ git clone git@github.com:JamesCacioppo/git-zero-to-hero-demo.git
```


## Remotes

Display configured remotes:
```bash
$ git remote -v
origin  git@github.com:JamesCacioppo/JamesCacioppo.github.io.git (fetch)
origin  git@github.com:JamesCacioppo/JamesCacioppo.github.io.git (push)
```

To add a remote:
<pre>git remote add upstream <var>URL</var></pre>

To change a local branch's upstream tracking:
<pre>git branch --set-upstream-to <var>REMOTE_NAME</var>/<var>BRANCH_NAME</var></pre>

```bash
$ git branch --set-upstream-to origin/main
branch 'main' set up to track 'origin/main'.
```

## Branching

When you first clone a repo you'll be in the default branch.  This was historically called _master_ and is now often named _main_.  Most organizations use a branching strategy which usually involves creating a branch, committing changes to the branch, and then merging that branch back into _main_.

### Creating Branches
The formal way to create a branch is with the _git-branch_ command:

<pre>git branch <var>BRANCH-NAME</var></pre>

However, the previous command does not place you on that branch and you'd still need to use the _git-checkout_ command to switch branches.  To create a branch and switch to it in one command use _git-checkout_:

<pre>git checkout -b <var>BRANCH-NAME</var></pre>

At this point your local repo is tracking the new branch but the remote is not.  To update the remote:

<pre>git push --set-upstream origin <var>BRANCH-NAME</var></pre>

### Useful Branching Commands
To list local branches: <code>git branch</code>

To list branches locally and remotely: <code>git branch -a</code>

To rename the current branch: <code>git branch -m <var>BRANCH-NAME</var></code>

To checkout a branch use: <code>git checkout <var>BRANCH-NAME</var></code> 

{{% alert title="git-checkout" color="info" %}}
The git-checkout command only moves the _HEAD_ pointer, not the branch pointer.  This is different from git-reset.
{{% /alert %}}

### Deleting Branches
When it comes time to delete a branch there are a few things to note.
* Deleting a branch locally is different from deleting a branch on the remote.
* There are two ways to remove a branch locally listed below.
  * The "safe" way will only remove the branch if its changes have been merged into _main_ while the "forcefull" method will remove the branch regardless of its status.
* You cannot remove a branch if you have it checked out.
* When you delete a remote branch your local repo does not know and will need to be updated.  To do this you must remove the branch refs.

To safely remove a local branch use <code>git branch -d <var>BRANCH-NAME</var></code>

To forcefully remove a local branch use <code>git branch -D <var>BRANCH-NAME</var></code>

To remove a remote branch use <code>git push origin --delete <var>BRANCH-NAME</var></code>

To remove deleted branch refs use <code>git remote prune origin</code>

## Branching Strategies
When a team is using Git, some sort of workflow or branching strategy is required for the team to develop effectively.  Junior developers need an understanding of various common strategies so they can onboard quickly to various teams and projects.  Intermediate and senior developers will need a more in-depth understanding of the common strategies, their variants, benefits and drawbacks of each, and when to choose one strategy over another.  What follows is just a brief introduction into a few common strategies.

### Gitflow
In 2010, Vincent Driessen documented [Gitflow](https://nvie.com/posts/a-successful-git-branching-model/).  In a vacuum of well documented and capable strategies, _Gitflow_ became almost ubiquitous in development teams and is still almost required knowledge.  While this strategy works well under certain conditions, _Gitflow_ has many drawbacks.  In fact, Vincent even updated his post in 2020 explaining that it shouldn't necessarily be the default or go-to for all dev teams.  We'll discuss some of the pro's and con's of _Gitflow_, but first, let's take a look at how it works.

![](https://nvie.com/img/git-model@2x.png)

Two branches live forever.  They are _develop_ and _master_.  The _develop_ branch is the branch from which almost all work is done.  Developers will create feature branches from _develop_ and merge their work back in.

Developers will also create _release_ branches from _develop_.  The purpose of creating these is to start preparing code for release or production deployment.  Once this prep work is complete, _release_ branches will be merged into _master_.

Bug and _hotfix_ branches will be created from _master_ and when complete they will be merged back into _master_ as well as _develop_.

As you can see, this is a complex strategy which can result in some interesting merge conflicts.  It also does not facilitate CI/CD.

There are circumstances, however, where releasing and deploying at a high frequency is undesirable or impossible.  In these cases, this strategy can be helpful as there's a natural delay between selecting a release candidate and a push to production.  The dedicated release branch allows developers to fix issues with the release candidate while continuing development of the baseline on _develop_.

### Github flow
_Github flow_, designed by Github, is meant to provide many of the benefits seen in _Gitflow_ while massively reducing complexity.  Their [documentation](https://docs.github.com/en/get-started/quickstart/github-flow) is clear and concise and definitely worth a look.

![](https://github.com/JamesCacioppo/jimFlow/raw/master/jimFlow.png)

In _Github flow_, there is only one long lived branch and it's the _main_ branch.  All working branches come from _main_ and merge back into _main_.  This includes branches for features, ops updates, bug and hot fixes, etc.  When a commit on master is chosen for release a version tag is applied to it.

This strategy is very flexible.  Testing can be done at any point.  In fact, we've found that it's effective to perform builds, deployments, and testing when a PR is created and on each subsequent commit which changes a PR.  Then, we perform the same and more testing when merged back into _main_, build and push artifacts, and deploy into UAT environments.

### Trunk
One of the main issues with many common strategies is the rate of integration.  Continuous Integration (CI) means integrating, or merging, code back into the mainline as frequently as possible.  In _Gitflow_, _Github flow_, and other similar strategies, developers commonly keep feature branches open for days if not entire sprints.  What often results is sometimes called "integration hell" or "merge hell" as developers attempt to merge their code, which has become further and further out of date from the mainline as time has passed.

Enter [Trunk Based](https://trunkbaseddevelopment.com/) workflows.

![](https://trunkbaseddevelopment.com/trunk1c.png)

The idea is that code is integrated into the mainline as often as every commit and at least once every 24 hours.  Small two dev teams who are paired programming may commit directly to _master_ while larger "at scale" teams will need to use feature branches.  The key difference here is that feature branches should be very short lived and should be integrated at least once every 24 hours.

In order for this to work, thorough testing must be conducted before merging using various methods such as pre-commit hooks and the baseline should be kept in good working condition.  If a bug is found in the baseline fixing it should be the priority.

A great resource is the site at [ContinuousDelivery.com](https://continuousdelivery.com).  The page on [Continuous Integration](https://continuousdelivery.com/foundations/continuous-integration/) is especially relevant to this topic.
