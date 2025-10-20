---
date: "2002-03-28T13:20:01+02:00"
title: "Script execution"
description: "Respond to an operation by executing a JavaScript script"
related:
  - name: "The operation concept"
    rel: '/documentation/concepts/operation'
  - name: "Graal"
    rel: '/documentation/config/core/appendices/graal'
  - name: "RuleContextUtil"
    rel: '/documentation/config/core/appendices/context-util'
---

# Principle

This operation manager allows you to react to the execution of an operation by executing a JavaScript script.
The JavaScript script is executed using the [Graal] engine (broken-link.md) embedded in the FlowerDocs Core JVM.

The script is stored as the content of the document used to configure subscription to the execution of an operation.

# Variables

## Context-related

The Java API object is supplied through the `context` variable to provide information related to the context in which the operation is executed.
<br/>
When an operation is performed on a particular component (see Java API) , it is supplied through a `component` variable.
<br/>
When a search is run, the request and the response (if available) are provided using the `request` (see Java API) and `response` (see Java API) variables respectively.

## Utilities

To facilitate their development, an object accessible through the `util` variable is made available whose exposed methods are listed [here](broken-link.md).


```javascript
var folder = ComponentBuilder.folder().classId('Folder').build();
folder.setName("Dossier " + component.getName());
util.getFolderService().create(Lists.newArrayList(folder));
util.getFolderService().addChildren(folder.getId(), Lists.newArrayList(ReferenceBuilder.from(component)), false);
```




:::info
To manually define this operation handler, the `com.flower.docs.core.tsp.operation.script.ScriptOperationHandler` identifier can be used as the value of the `OperationHandler` tag.
:::