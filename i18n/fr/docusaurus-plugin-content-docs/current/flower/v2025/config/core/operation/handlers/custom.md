---
date: "2010-03-28T13:20:01+02:00"
title: "Custom"
description: "Custom"
draft: "true"
related:
  - name : "Le concept d'opération"
    rel: '/documentation/concepts/operation'
  - name : "Librairie personnalisée"
    rel: '/documentation/learn/custom-lib'
---


En plus de ceux fournis nativement, il est possible de développer son propre `OperationHandler`.

```java
package com.xxx.sample;

import org.springframework.stereotype.Component;
import com.flower.docs.operation.api.OperationContext;
import com.flower.docs.operation.api.OperationHandler;

@Component
public class OperationHandlerSample implements OperationHandler
{
    public void process(OperationContext context)
    {
    }
}
```

Pour que cet ``OperationHandler`` puisse être utilisé par FlowerDocs, il est nécessaire que : 

* la classe soit présente dans le classpath de la JVM
* que le package du handler (ici ``com.xxx.sample``) soit scanné par Spring

<br/>
Une fois ces deux étapes réalisées, l'``OperationHandler`` sera appelé conformément aux abonnements définis. 

