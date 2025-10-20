---
date: "2008-01-03T13:22:01+02:00"
title: "Operation"
description: "Reacting to operations."
related:
    - name : "Subscribing to an operation"
      rel: '/documentation/config/core/operation/registration'
    - name : "Operations managers"
      rel: '/documentation/config/core/operation/handlers/drools'
---

# Principle

The [Operation API](/javadocs/operation/index.html) reacts to the execution of operations within FlowerDocs Core. A **operation** is an action performed by a user on a component. 

The **operations managers** (or Java API) are called when an operation is executed to react to it and apply specific processing. They can be called before (*pre-treatment*) or after (*post-processing*) the execution of the operation.

<br/>
The execution of an *operation* can be divided into three phases: 

1 . The **OperationHandler** recorded in the pre-processing phase are called 

2. The**Operation** is executed

3. The **OperationHandler** recorded in the pre-processing phase are called 

:::info
The following steps may be interrupted by an exception raised by an operation handler, if this behavior is enabled.
:::

# Subscription

In order for an operation manager to react to the execution of an operation, it must be subscribed to it. Subscribing to the execution of an operation involves creating a configuration document of class `OperationHandlerRegistration`. 


<br/>
In addition, the subscription determines whether the reaction to the execution of an operation is synchronous or asynchronous (executed in another thread so as not to block the operation performed by the user).

<br/>
To limit the number of calls, it is possible to define an execution filter that FlowerDocs will resolve to trigger or not the call to the operation manager depending on the context.
<br/>

* **Document, folder and virtual folder** : tag list, component class
* **Tasks** : tag list, component class, assigned user, process identifier
* **Task class** : identifier, process identifier
* **Others** : identifier
:::warning
Via the administration interface, it is possible to select other fields, notably on administration components: they will not be taken into account.
:::

# Operations Manager

An **operations Manager** (or Java API) is a code fragment called when an operation is executed.
They can be divided into three categories: 

* [native](broken-link.md) : provided natively by FlowerDocs Core and executed within its JVM
<!-- 
* specific: developed specifically and added as libraries to FlowerDocs Core (*on-premise only*)
 -->
* [hooks](broken-link.md): exposed as REST web services

<br/>
To contextualize their execution, an object Java API is provided as input. The context can be used to retrieve information concerning the execution of the operation, such as the component concerned or the modifications made.


