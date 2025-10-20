---
title: "Docker architecture"
draft: false
weight: 2
type: docs
icon: mdi-wrench-outline
related:
    - name : "Docker installation"
      rel: '/content/installation/docker/_index.en.md'
---



* **N1: ECM UI**: has the responsibility to let the user choose which documents he wants to open in ARender,
* **N2: Browser**: will create the ARender frame using the URL provided by N1,
* **N3: ARender WEB-UI**: is an application server containing the connector and running in a docker container,
* **N4: ECM Backend**: contains API which ARender connector will interact with to fetch documents (and if needed fetch annotations 
  and metadata and create new documents or new version of documents),
* **N5: ARender Rendition**: is compounded of 4 Spring Boot microservices running in docker containers that offer different services such as generating images, extracting text, converting document and more.