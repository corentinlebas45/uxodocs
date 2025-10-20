---
title: "Document builder"
draft: false
icon: mdi-scissors-cutting
keywords: ["configuration", "js", "javascript", "api"]
---

### Interacting with the documentBuilder

- Object: getARenderJS().getDocumentBuilder()

    | Function | Description                         |
    | -------- | ----------------------------------- |
    | close()  | Closes the document builder         |
    | open()   | Open the document builder           |
    | reset()  | Resets the document builder content |

### Register to the documentBuilder save event

- Object: getARenderJS().getDocumentBuilder()

    | Function                                          | Description                                                                 | Arguments                                                                                                                                |
    | ------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | registerNotifyAlterDocumentContentEvent(callback) | Trigger a callback function when a built document is saved                  | **callback:** the callback function to call                                                                                              |
    | registerSubmitAlterDocumentContentEvent(callback) | Trigger a callback function when a document creation is submitted           | **callback:** the callback function to call                                                                                              |
    | getSubmittedAlterDocumentContentDescription(obj)  | Retrieve content description of altered document                            | **obj:** the source SubmitAlterDocumentContentEvent object                                                                               |
    | getDocumentMetadata(desc,index)                   | Extract the DocumentMetadata object from the source AlterContentDescription | {{< inlineList "**desc:** AlterContentDescription;**index:** index of the document to fetch documentMetadata from">}}{{< /inlineList>}}  |
    | getResultDocumentId(obj)                          | Fetch resulting DocumentId                                                  | **obj:** the event that was sent when the altercontent operation has been done                                                           |


- Object: getARenderJS().getDocumentMetadata()

    | Function                                          | Description                                                | Arguments                                                                                                                                                                  |
    | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | addDocumentMetadata(metadata, key, value)         | Add a metadata to a documentMetadata object                | {{< inlineList "**metadata:** Metadata to modify;**key:** String that is the key of the metadata;**value:** String that is the value of the metadata">}}{{< /inlineList>}} |


``` javascript
function arenderjs_init(arenderjs_)
{
  arenderjs_.getDocumentBuilder()
                .registerSubmitAlterDocumentContentEvent(function(obj){
                    armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);
                });
  arenderjs_.getDocumentBuilder()
                .registerNotifyAlterDocumentContentEvent(function(obj){
                    armt_onNotifyAlterDocumentContentEvent(arenderjs_,obj);
                });
}

function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
{
    var desc = arenderjs_.getDocumentBuilder()
                            .getSubmittedAlterDocumentContentDescription(obj);
    var meta = arenderjs_.getDocumentBuilder()
                            .getDocumentMetadata(desc, 0);
    arenderjs_.getDocumentMetadata().addDocumentMetadata(meta, "name", "value");
}

function armt_onNotifyAlterDocumentContentEvent(arenderjs_,obj)
{
    console.log("Notify: " + obj);
    var docId = arenderjs_.getDocumentBuilder().getResultDocumentId(obj);
    console.log("Notify: " + docId);
    console.log("Notify: docId = " + docId);
}
```

