---
title: "GET Page Image"
weight: 7
draft: false
keywords: ["documentation", "page image"]
---

This API allows you to retrieve the image of a specific page in a document.

## API Description

Endpoint:
```bash
GET /documents/{documentId}/pages/{page}/image
```

Resource path:

| Variable              | Required | Description                                                           |
|:----------------------|:---------|:----------------------------------------------------------------------|
| documentId            | Yes      | The ID of a document                                                  |
| page                  | Yes      | The index of the page for which you want to retrieve the image        |

Query params:

| Variable              | Required | Description                                                           |
|:----------------------|:---------|:----------------------------------------------------------------------|
| pageImageDescription  | No       | The image description. It specifies the width, rotation, and filters  |


Response :

| Type  | Description                  |
|:------|:-----------------------------|
| Image | The image file in PNG format |

## Examples

### Retrieve Page Image

The following example demonstrates how to retrieve the image of page 2 in the document with the ID _b64_bm9yZS92SDMtMS0xMTh1735080237_.
The image has a width of 200 and a rotation of 90 degrees.
Additionally, the image has filters applied, including contrast and brightness adjustments, as well as inversion.

```bash
curl -X 'GET' \
  'http://localhost:8761/documents/b64_bm9yZS92SDMtMS0xMTh1735080237/pages/2/image?pageImageDescription=IM_200_90_FILTERS~C~35~B~-100~I~50' \
  -H 'accept: */*'
```
