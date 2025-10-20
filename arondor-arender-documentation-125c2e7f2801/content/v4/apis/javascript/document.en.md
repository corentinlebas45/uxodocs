---
title: "Opening a document"
draft: false
weight: 2
icon: mdi-folder-open-outline
keywords: ["configuration", "js", "javascript", "api"]
---

## Opening documents

- Object: getARenderJS()

    | Function                             | Description                                                                                                                                                                                     | Arguments                                                                                                                                                    |
    | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | openDocument(id)                     | Opens a document.                                                                                                                                                                               | **id:** ARender id                                                                                                                                           |
    | askChangePage(type , index)          | Changes the current page.                                                                                                                                                                       | {{< inlineList "**type:** 'Relative', 'Index' or 'Absolute';**index:** -1 or 1 for 'Relative' or 'Absolute', otherwise the page number">}}{{< /inlineList>}} |
    | enablePDFDocumentHyperlinks(boolean) | Activate/de-activate the internal hyperlinks of a document                                                                                                                                      | **boolean:** Load internal hyperlinks of a document if true, unload them otherwise.                                                                          |
    | disallowClickOnHyperlinks(boolean)   | Allow/disallow clicks on a document hyperlink for ARender                                                                                                                                       | **boolean:** if true, disallow internal hyperlinks of a document, allow them otherwise.                                                                      |


```js
// Loads the PDF reference document
getARenderJS().loadDocument(
    "loadingQuery?url=http://www.arender.fr/pdf/pdf/PDFReference15_v5.pdf", 
    function(id) { getARenderJS().openDocument(id); }
  );
// Move to page 24 (note that page index is starting at 0. So page 1 has index 0)
getARenderJS().askChangePage('Index',23);
// Move to last page
getARenderJS().askChangePage('Absolute',1);
```


## Multiple document opening

ARender provides the possibility to open several documents by loading a list of documents which will be provided via JSON in order to define the tree structure. All the technical details can be found [here]({{< relref "/v4/cookbook/composite-accessors.en.md">}})
