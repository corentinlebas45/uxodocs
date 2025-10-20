---
title: "Remove document tree"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutorial", "tree"]
---

A new servlet is deployed to remove the document tree.
A Json file is returned and lists each page of child documents without ranking them.

Example : 
``` json
[
  "b64_bG9jYWxlPWZyJnJhbmRvbVVVSUQ9MTFjYmE0YzQtMzUzNy00OWI4LTg2MGEtZjdiNjU4NzU3MjJj/1/1/1/1|0|612.0",
  "b64_bG9jYWxlPWZyJnJhbmRvbVVVSUQ9MTFjYmE0YzQtMzUzNy00OWI4LTg2MGEtZjdiNjU4NzU3MjJj/1/1/1/2|0|612.0",
  "b64_bG9jYWxlPWZyJnJhbmRvbVVVSUQ9MTFjYmE0YzQtMzUzNy00OWI4LTg2MGEtZjdiNjU4NzU3MjJj/1/2|0|612.0",
  "b64_bG9jYWxlPWZyJnJhbmRvbVVVSUQ9MTFjYmE0YzQtMzUzNy00OWI4LTg2MGEtZjdiNjU4NzU3MjJj/1/3|0|841.0",
  "b64_bG9jYWxlPWZyJnJhbmRvbVVVSUQ9MTFjYmE0YzQtMzUzNy00OWI4LTg2MGEtZjdiNjU4NzU3MjJj/1/3|1|595.0"
]
```

## Request 

This functionality is accessible via the servlet: **flatDocumentLayout**

Usable in GET


### Request example

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/flatDocumentLayout?uuid=docuuid'
```

## Servlet Response

A Json file is returned with the child documents of the initial document without their tree structure.