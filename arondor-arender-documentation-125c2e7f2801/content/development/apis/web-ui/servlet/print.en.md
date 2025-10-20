---
title: "Print"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutorial", "document", "print"]
---

A new servlet is deployed to print the pages of a document.
An HTML page will be displayed to confirm printing with the parameters given.
A preview of the result will be displayed on this page.

## Request 

This functionality is accessible via the servlet: **printServlet**

Usable in GET


### Request example

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/printServlet?uuid=docUUID&desc=description&pages=pages&imagePrintStyle=style'
```

* uuid: document id
* desc: the image description of the pages to be printed
* pages: the numbers of the pages to be printed
* style: the image style of the pages to be printed (optional)

## Servlet Response

An HTML page to confirm printing. A preview of the result will be displayed on this page.