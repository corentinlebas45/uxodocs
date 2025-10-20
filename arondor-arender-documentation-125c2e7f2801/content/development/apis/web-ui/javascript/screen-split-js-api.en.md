---
title: "Screen split"
draft: false
icon: mdi-restore
keywords: ["configuration", "js", "javascript"]
---


## Screen split

- Objet : getARenderJS().getScreenSplitJSAPI()

    | Function                                | Description                                                                                             |
    | --------------------------------------- | ------------------------------------------------------------------------------------------------------- |
    | askOpenAsNewDocument(String documentId) | Method to open the provided document id as new document. The document will be opened in multiple views. |


```js
 /*
 * @param {string} documentId - document ID
 */
getARenderJS().getScreenSplitJSAPI().askOpenAsNewDocument("documentId");
```

