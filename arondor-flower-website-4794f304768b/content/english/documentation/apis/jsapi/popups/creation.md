+++
date = "2004-03-28T13:20:01+02:00"
title = "Components creation"
description = "Popup allowing creation of a component from an indexing form."
+++

:::info
This type of popup allows you to launch the creation of a component by displaying an indexing form in a popup.
:::


To instantiate a creation popup, it is necessary to provide it with an input component (here ``newTask``): 

```javascript
var newTask = new Task();
var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask);
```

A callback can be provided to this method to react to the creation of the component: 

```javascript
var newTask = new Task();
newTask.setClassId("ClaimProcess_Start");
var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask, function(saved){
    console.info("The task has been created: "+saved.getId());
});
popup.show();
```

&nbsp;
# File selector

In the case of document creation, it is also possible to display a popup without a file selector. This instantiates a blank document with no content.

To do this, use the ``buildDocumentCreation()`` document-specific function. This function has a parameter ``allowFileAttachments``, which allows the file selector to be displayed or not within the popup.


```javascript
var newDocument = new Document();
var popup = JSAPI.get().getPopupAPI().buildDocumentCreation(newDocument, false);
```
