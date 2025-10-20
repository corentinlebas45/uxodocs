---
title: "ECM general architecture"
draft: false
weight: 1
type: docs
icon: mdi-wrench-outline
related:
    - name : "Installation"
      rel: '/content/installation/standalone/_index.en.md'
    - name : "Installation - Requirements"
      rel: '/content/installation/standalone/rendition/requirements.en.md'
    - name : "Rendition installation"
      rel: '/content/installation/standalone/rendition/install.en.md'
    - name : "Web-ui installation"
      rel: '/content/installation/standalone/web-ui/standalone/_index.en.md'
---


* **N1: ECM UI**: has the responsibility to let the user choose which documents he wants to open in ARender,
* **N2: Browser**: will create the ARender frame using the URL provided by N1,
* **N3: ARender WEB-UI**: is Spring Boot module which contains the connector,
* **N4: ECM Backend**: contains API which ARender connector will interact with to fetch documents (and if needed fetch annotations 
  and metadata and create new documents or new version of documents),
* **N5: ARender Rendition**: is Spring Boot module that will generate images, extract text and more.