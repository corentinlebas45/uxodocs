---
title: "Behaviour testing"
draft: false
weight: 5
icon: mdi-test-tube
keywords: [ "exploitation", "tests"]
---

This chapter is meant to check if ARender is working as expected. The
tests can be performed on a punctual basis (install, upgrade, etc) as
well as continuously to supervise.

## Rendition server

The easiest way to validate ARender Rendition installation is to check the health page, [see post installation documentation](broken-link.md).  

## Presentation server

To test the presentation application, you just need to load the following URL in a new browser tab:
[http://localhost:8080](http://localhost:8080).

## End to end

Depending on needs, different level of test can be set-up. As a matter
of fact, end-to-end test can be done to test the application as a whole.
Typically, HTTP GET requests can be used to test the opening of a
document and its rendition.

- Step 1: Using an URL to load a document:

[http://localhost:8080/arendergwt/openExternalDocument](http://localhost:8080/arendergwt/openExternalDocument)

This servlet page will return ARender's ID of the document.

You can provide to this servlet any usual URL parameter, ARender is
able to use every single connector.

- Step 2: Loading page test:

[http://localhost:8080/arendergwt/imageServlet?uuid=b64_I2RlZmF1bHQ=&pagePosition=1&desc=IM_800_0](http://localhost:8080/arendergwt/imageServlet?uuid=b64_I2RlZmF1bHQ=&pagePosition=1&desc=IM_800_0)

This servlet is made to test the generation of a 800px pictures of page
one from the document **b64_I2RlZmF1bHQ=**

*In case of complex architecture, this methodology won't be able
to test every branch of the platform. Typically, If a rendition farm
is defined, it's not possible, using this, to ensure both rendition
server have been tested.*
