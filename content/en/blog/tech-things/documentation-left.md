---
date: 2022-10-08
title: "Pushing Documentation to the Left"
linkTitle: "Push Docs Left"
description: "Why you should push documentation to the left on your projects"
author: James Cacioppo
---

I spent Friday night and Saturday morning falling down the rabbit hole of broken docs.  Every time I update one code snippet I stumble on another that's broken.  I'm not mad.  I enjoy documentation.  I'm broken, I know, but I really do enjoy it.  There's no better way to solidify your knowledge on a subject than to teach others.  The medical field used to have a saying: "See one, do one, teach one."

Whether or not I'm enjoying wasting my Saturday morning fixing broken docs is irrelevant.  I'm here because I got an email from a data service provider my customer has told to integrate with my application.  This individual innocently and politely asked for help as they were attempting to use our example in our docs and it wasn't working.  After reviewing, I had to inform them in front of my customer that our docs are out of date and that he needed to change his commands.

It was a bad look and it _can_ be embarrassing.  When a dev team leaves the task of documentation for _after_ the feature development, documentation often gets forgotten or pushed to the right as more pressing matters come up. This trend continues until one day you find that more than half of your docs are out of date.

The solution is to push documentation to the left!  When are updated docs on a feature needed?  When that feature code goes live.  However, if you wait until the code goes live to publish the updated docs then you're already behind.  For this reason, we've implemented a rule that documentation must be completed before the story can be moved to done, the bug ticket can be resolved, and the PR can be merged.  In other words, documentation is _always_ part of the _acceptance criteria_.  This adds extra layers of accountability as now every reviewer is also responsible for making sure that documentation is complete before approving.

Pushing documentation to the left is, like all other things, a practice of taking a little more pain up front to avoid a lot later.  Give it a try!