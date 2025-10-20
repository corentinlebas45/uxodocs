---
title: "Document layout"
draft: false
keywords: ["document", "layout", "js", "javascript", "api"]
---

### Retrieve document layout

- Object: getARenderJS().getDocumentLayout()

| Function                                                    | Description                                                                                                          | Arguments                                                                                                                                                                                                             |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

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