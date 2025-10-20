---
title: "Diviser l'écran"
draft: false
icon: mdi-restore
keywords: ["configuration", "js", "javascript"]
---

## Diviser l'écran

- Objet : getARenderJS().getScreenSplitJSAPI()

    | Fonction                                | Description                                                                                      |
    | --------------------------------------- | ------------------------------------------------------------------------------------------------ |
    | askOpenAsNewDocument(String documentId) | Ouvre l'id du document donné en tant que nouveau document. Le document sera ouvert en multiview. |


```js
 /*
 * @param {string} documentId - ID du document
 */
getARenderJS().getScreenSplitJSAPI().askOpenAsNewDocument("documentId");
```

