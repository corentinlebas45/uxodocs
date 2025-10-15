---
title: "Document layout"
draft: false
keywords: ["document", "layout", "js", "javascript", "api"]
---

### Retrieve document layout

- Object: getARenderJS().getDocumentLayout()

| Fonction                                                    | Description                                                                                                                                     | Arguments                                                                                                                                                                                                                                      |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| getDocumentLayout(documentId, handler, errorHandler)        | Récupérer une mise en page de document aplatie                                                                                                  | [shortcode][shortcode] |
| getShallowDocumentLayout(documentId, handler, errorHandler) | Récupérer une mise en page de document. Si la mise en page est un conteneur, les enfants n'ont que l'identifiant du document comme information. | [shortcode][shortcode] |

```js
// Retrieve a document layout
getARenderJS().getDocumentLayout().getShallowDocumentLayout(getARenderJS().getMasterDocumentId(), function(layout) {
            // Check if layout is a document container
            if (layout.isDocumentContainer()) {
                var children = layout.getChildren();
                for (var i=0; i<children.length; i++)
                {
                    var child = children[i];
                    // Print child document ID
                    console.info("child id = " + child.getDocumentId());
                }
            }
        });
```