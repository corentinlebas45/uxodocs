---
title: "Alfresco connector"
weight: 2
draft: false
# search related keywords
keywords: ["alfresco", "connector"]
---

## Introduction

This article details the integration and installation of CMIS connector
Arender. This covers the integration part in Alfresco and Web-UI
configuration part.


## Architecture

Below a communication diagram of ARender deployed in an Alfresco context:


Note that this connector uses CMIS protocol, so it can be used with any ECM that supports CMIS protocol

## ARender Web-UI configuration

### Connexion between ARender and Alfresco

ARender for Alfresco connector enabled communication between ARender and Alfresco Content Services (and Alfresco Process Services).

By default, ARender is configured to communicate with a local Alfresco using CMIS.

* To configure the **CMIS connexion** (editor recommandation) with a remote Alfresco, add the below property:


```cfg
arender.server.alfresco.atom.pub.url=http://alfrescoHost/alfresco/api/-default-/cmis/versions/1.1/atom
```

Authentication will be done using an **Alfresco ticket**.

* To configure the **SOAP connexion** (editor recommandation) with a remote Alfresco, add the below properties:


```cfg
arender.server.alfresco.use.soap.ws=true
arender.server.alfresco.soap.ws.url=http://alfrescoHost/alfresco/cmisws/cmis?wsdl
arender.server.alfresco.user=userNameValue
arender.server.alfresco.password=passwordValue
```

* Context path handling

The context path is the path that’s used by applications (for example, Alfresco Share, SOLR, SharePoint, and others).
If you want to deploy to a context path that isn’t */alfresco*, it needs to be specified with the following property:

```cfg
arender.server.alfresco.context=my-context-path
```

By default, the context path is *alfresco* (for /alfresco).


### Annotations

#### Details on annotation storage

No configuration is needed for annotations storage in Alfresco.

Annotations will be stored as a child node of the document Node itself. Child node name is: **cm:arender-annotations-v{version document}**.


#### Deactivate annotation migration

Add the property hereafter if the below conditions are respected:

* There is no ARender annotation in Alfresco,
* Or, ARender annotations that exists in Alfresco have been created only **with versions newer than the 4.0.9**


```cfg
arender.server.alfresco.annotation.migrate.to.new.child.api=false
```
