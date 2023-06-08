---
title: "Scratch Pad"
linkTitle: "Scratch PAd"
date: 2023-03-07
weight: 1
description: >
  A scratch pad for random notes
---


<pre>jq '.prefixes[] | select(.region=="us-gov-east-1") | select(.service=="EC2")' < ~/Downloads/ip-ranges.json</pre>

https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html