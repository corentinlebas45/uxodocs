---
title: "Get Bookmarks"
weight: 7
draft: false
keywords: ["documentation", "bookmarks", "get"]
---

This API allows you to retrieve the bookmarks of a specific document.

## API Description

Endpoint:
```bash
GET /documents/{documentId}/bookmarks
```

Resource path:

| Variable    | Required | Description           |
|:------------|:---------|:----------------------|
| documentId  | Yes      | The ID of a document  |

Response :

| Type       | Description                   |
|:-----------|:------------------------------|
| Bookmarks  | The bookmarks of the document |

## Examples

### Get Bookmarks

The example below demonstrates how to retrieve the bookmarks
of a document with the ID _b64_bm9yZS92SDMtMS0xMTh1735080237_.

```bash
curl -X 'GET' \
  'http://localhost:8761/documents/b64_bm9yZS92SDMtMS0xMTh1735080237/bookmarks' \
  -H 'accept: application/json'
```
