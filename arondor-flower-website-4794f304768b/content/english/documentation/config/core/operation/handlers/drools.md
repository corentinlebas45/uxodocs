---
date: "2002-01-28T13:20:01+02:00"
title: "Decision table"
description: "React to an operation through a Drools decision table"
related:
  - name: "The concept of operation"
    rel: '/documentation/concepts/operation'
  - name: "ContextUtil"
    rel: '/documentation/config/core/appendices/context-util'
---



# Principle

This operation manager relies on the [Drools] rules engine (https://www.drools.org/) to execute a decision table.
A decision table is a Microsoft Excel file with two types of columns: 

* conditions: determines the cases in which to apply a rule 
* actions: the actions to be executed for a given rule

For each defined rule (or line), the defined actions are executed if all conditions are met. 

The decision table is stored as the content of the document used to configure subscription to the execution of an operation.

# Conditions & Actions

The conditions and actions defined must be Java code that can be compiled within FlowerDocs Core's JVM.
To facilitate their development, an object accessible through the variable `util` is made available whose exposed methods are listed [here](broken-link.md).

In order to contextualize decision-making, the `context` and `component` variables are provided when evaluating a decision table. They can therefore be used in conditions or actions. The `context` variable contains a Java API object storing the operation execution context.
<br/>
It is possible to retrieve the component before the action using the `getOld()` method available on the `UpdateComponentOperationContext` or `TaskOperationContext` type `context` variable.
<br/>
The `component` variable contains the component (see Java API) concerned by the operation (if available).

:::info
To manually define this operation handler, the `com.flower.docs.core.tsp.operation.DroolsOperationHandler` identifier can be used as the value of the `OperationHandler` tag.
:::

:::warning
Drools-type operation managers do not support certain execution contexts:
* on administration objects (component classes, security objects, etc.)
* on document version modification
:::