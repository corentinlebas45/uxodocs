---
date: "2021-12-02T10:20:01+02:00"
title: "Attachment action"
description: "Actions on a task attachment"
---

# Principle

Attachment plugins allow an action to be added to the configured attachment insert. This action allows to attach a component to the task, enabling it to be viewed in the viewer.
 
Several attachment plugins are thus available: 

* `SearchAttachmentPlugin`
* `TemplateAttachmentPlugin`
* `CreateHTMLAttachmentPlugin`

A plugin for viewing attachment metadata is also available.

The constructors of these plugins accept a collection of options enabling them to be configured.
new SearchAttachmentPlugin({
    '<option name>': <option value>
});

 The following options are common to the various attachment plugins: 

|Key|Type|Description|
|---|----|-----------|
|`attachmentId`|String |Attachment definition identifier|
|`title`|String |Action title (title of the selection popup in the case of `SearchAttachmentPlugin`)|
|`icon`|String |Action Icon (Icon of the selection popup in the case of `SearchAttachmentPlugin`)|
|`postProcessor`|Function |Function called after attaching the attachment|
|`canAttach`|Function|Function defining when the action must be present|

# SearchAttachmentPlugin
The plugin `SearchAttachmentPlugin` adds a search action to an attachment insert. This action opens a popup allowing you to select, from the results of a search, a component to be added as a task attachment.

|Key|Type|Description|
|---|----|-----------|
|`template`|String |Identifier of the search form to be displayed in the selection popup (default: `DefaultSearch`)|
|`category`|String |Component category to search (default: `DOCUMENT`)|
|`criteria`|Table |Search list of criteria|

new SearchAttachmentPlugin({
    attachmentId: '<AttachmentId>',
    title: 'Search for an attachment',
    postProcessor: function(component){
        console.info('Component has been attached: ', component.getId());
    }
}).bind()

var criterion = new Criterion();
criterion.setName("classid");
criterion.setOperator("EQUALS_TO");
criterion.addValue("OutgoingMail");

new SearchAttachmentPlugin({
    attachmentId: '<AttachmentId>',
    title: 'Search for an attachment',
  	criteria: [criterion],
  	category: 'DOCUMENT’,
    postProcessor: function(component){
        console.info('Component has been attached: ', component.getId());
    }
}).bind()

# TemplateAttachmentPlugin 

The plugin `TemplateAttachmentPlugin` adds an action for attaching a document generated from a Microsft Word template. By default, the plugin opens the template in FlowerDocs Companion, if installed on the user workstation. If this is not the case, or if download mode is enabled, then the generated document is downloaded.

|Key|Type|Description|
|---|----|-----------|
|`downloadMode`|Boolean |Indicates whether the created document should be downloaded|
|`instanciator`|Function | Function for programmatically indexing the component|

# MetadataVisualizationAttachmentPlugin 

This plugin allows you to view the data in the attachment without changing its location. The data to be visualized is opened in an OffMenu. 

|Key|Type|Description|
|---|----|-----------|
|`over`|Boolean |Indicates whether the OffMenu should be displayed on top of the current page|

:::warning
The plugin's OffMenu is closed when it is relocated.
:::

