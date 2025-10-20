---
title: "Get page content"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutorial", "content"]
---

A new servlet is deployed to have a Json file with the page content of a document.

## Request 

This functionality is accessible via the servlet: **pageContent**

Usable in GET


### Request example

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/pageContent?uuid=docuuid&pagePosition=numPage'
```

* uuid: document id
* pagePosition: the page of the document

## Servlet Response

A Json file is returned with information about the page content which is given as a parameter.

Here an example of a Json file : 

```json
{
  "pageNumber": 3,
  "positionTextList": [
    {
      "pageNumber": 3,
      "position": {
        "x": 124.68,
        "y": 204.09999,
        "w": 113.34983,
        "h": 34.0
      },
      "text": "Features",
      "individualWidths": [
        15.070442,
        15.797394,
        15.601685,
        10.960312,
        15.76944,
        10.904404,
        15.797394,
        13.448761
      ],
      "fontSize": 27.0,
      "font": "BCDIEE+Oxygen bold",
      "paragraphId": 0,
      "rightToLeftText": false,
      "startTime": -1.0
    }
  ],
  "imageHyperlinkPositionList": []
}
```