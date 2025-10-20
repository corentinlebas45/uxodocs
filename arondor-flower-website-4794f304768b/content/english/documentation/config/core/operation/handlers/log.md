---
date: "2009-03-28T13:20:01+02:00"
title: "Logging"
description: "Log the execution of operations."
related:
  - name: "The operation concept"
    rel: '/documentation/concepts/operation'
---

This operation manager is used to log the execution of an operation.
A message is logged in the FlowerDocs Core log file, indicating the context in which the operation is carried out.


:::info
To manually define this operation handler, the `com.flower.docs.core.tsp.operation.LogOperationHandler` identifier can be used as the value of the `OperationHandler` tag.
:::