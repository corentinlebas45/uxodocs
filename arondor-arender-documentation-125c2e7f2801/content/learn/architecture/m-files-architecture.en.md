---
title: "Architecture in M-Files"
draft: false
weight: 2
type: docs
icon: mdi-wrench-outline
related:
    - name : "Installation with M-Files"
      rel: '/content/installation/standalone/web-ui/m-files/_index.en.md'
---


* **N1: M-Files UI**: has the responsibility to let the M-Files user choose which documents he wants to open in ARender,
* **N2: Browser**: will create the ARender frame using the URL provided by N1,
* **N3: ARender WEB-UI**: is Spring Boot module which contains the M-Files connector,
* **N4: M-Files Backend**: contains API which ARender connector will interact with to fetch documents (and if needed fetch annotations 
  and metadata and create new documents or new version of documents),
* **N5: ARender Rendition**: will generate images, extract text and more. Contains M-Files connector too.