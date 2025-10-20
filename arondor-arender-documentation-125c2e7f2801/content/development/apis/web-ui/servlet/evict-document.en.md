---
title: "Evict document"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutorial", "document", "evict"]
---

A new servlet is deployed to evict a document from both memory cache and FileSystem cache.

## Request 

This functionality is accessible via the servlet: **evictDocument**

Usable in GET


### Request example

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/evictDocument?uuid=doc1UUID'
```

## Servlet Response

If the document is evicted, a blank page appears and the server has no longer access to the document.