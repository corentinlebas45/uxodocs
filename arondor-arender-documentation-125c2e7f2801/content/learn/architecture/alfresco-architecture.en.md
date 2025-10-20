---
title: "Architecture in Alfresco"
draft: false
weight: 2
type: docs
icon: mdi-wrench-outline
related:
    - name : "Installation with Alfresco"
      rel: '/content/installation/standalone/web-ui/alfresco/_index.en.md'
---


* **N1: Alfresco UI**: has the responsibility to let the Alfresco user choose which documents he wants to open in ARender,
* **N2: Browser**: will create the ARender frame using the URL provided by N1,
* **N3: ARender WEB-UI**: is Spring Boot module which contains the Alfresco connector,
* **N4: Alfresco Backend**: contains API which ARender connector will interact with to fetch documents (and if needed fetch annotations 
  and metadata and create new documents or new version of documents),
* **N5: ARender Rendition**: will generate images, extract text and more.


{{< tag type="warning">}}

```
Your ECM port must be different from your ARender WEB-UI port.
```

