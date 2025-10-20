+++
date = "2020-02-01T13:20:01+02:00"
title = "Configuration"
+++

# Goal

This section explains how to configure the plugin and implement it on a scope integrating the GEC module.  
We want to apply it to the `Response` attachment of the `GEC_Step2_ToBeProcessed` tasks. Here we want a new document to be created directly from a Word template and associated with the `Response` attachment.


# Prerequisites

You need a FlowerDocs environment with a scope that includes the GEC module.  
Check that `TemplateAttachmentPlugin` is present on the scope. It can be found in the administration, in the **Display > Scripts**tab.

# Configuration

The plugin must be configured for a specific element before it can be used.
To do this, follow these steps:

* Create a new JavaScript script in the **Display > Scripts** tab of FlowerDocs administration. You can name this script TemplateAttachmentConfiguration.
* The contents of this script will be as follows:

new TemplateAttachmentPlugin({
	attachmentId: ‘Response',
  	classId: 'GEC_Step2_ATraiter',
	instantiator:
		function(fileId) {
			var doc = new Document();
			doc.addFile(fileId);
			doc.setClassId('CourrierSortant');
			TagOracle.predict(this.formAPI.getComponent(), doc);
			return doc;
		},
}).bind();


* Save the script, then purge the application cache. This takes into account any changes made to the scope configuration.









<br/>
You can add options to this script:

```javascript
	canAttach:
		function(card, definition, formAPI) {
			return formAPI.getComponent().getAssignee() == JSAPI.get().getUserAPI().getId();
		},
```
Restricts plugin use to the user to whom the task is assigned.

<br/>
```javascript
	nameBuilder:
		function() {
			return 'Réponse-' + new Date().toLocaleDateString() + '.docx';
		},
```
This function gives the document the name of the added file.
It must be called in the `instantiator` function as follows (after document instantiation):

<br/>
```javascript
			var name = this.nameBuilder();
			doc.setName(name);
```

