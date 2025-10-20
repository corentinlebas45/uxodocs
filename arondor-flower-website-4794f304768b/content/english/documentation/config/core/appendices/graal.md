---
date: "2002-03-28T13:20:01+02:00"
title: "Graal"
description: "JavaScript engine included in FlowerDocs Core."
related:
  - name: "ScriptOperationHandler"
    rel: '/documentation/config/core/operation/handlers/script'
---

# Principle

The [Graal](https://www.graalvm.org/latest/reference-manual/js/) engine is used to execute scripts within the JVM. JavaScript syntax and Java classes loaded into the JVM can be used to add specific logic to a process. 

No additional Javascript module is provided.

## Instantiate an object

In order to instantiate an object or call a static method of a Java class, the full class name must be specified or a reference to the class must be obtained. 

var document = new com.flower.docs.domain.document.Document();
var Document = com.flower.docs.domain.document.Document;
var document = new Document();

To facilitate the development of scripts using the objects provided by FlowerDocs, certain classes can be directly named without using their full name or a reference.

## Restrictions

For security reasons, a specific class loader is used to execute the scripts in the JVM. Access to certain classes is therefore restricted. This can be disabled using the `secured.classloader.enabled=false` property. If required, certain classes or packages can be defined as secured using the `secured.classloader.whitelist.additional` property.

