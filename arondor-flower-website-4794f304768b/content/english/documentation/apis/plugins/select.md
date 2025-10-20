---
date: "2021-11-17T10:20:01+02:00"
title: "Component selection"
description: "Offer users a library of models"
---

# Principle

The `SelectComponentPlugin` makes it easy for users to select a component corresponding to a set of criteria.
The criteria defined are used to execute a component search, the results of which are displayed in a selection popup.


# Use

:::note
|Key|Type|Description|
|---|----|-----------|
|`icon`|String |Selection popup icon|
|`title`|String |Selection popup title|
|`description`|String |Description displayed in selection popup header|
|`category`|String |Component category to search (default: `DOCUMENT`)|
|`criteria`|Table |List of search criteria|
|`fieldToDisplay`|String |Field used to display a component (default: `name`)|
|`callback`|Function |Function called after the selection validation|
:::



new SelectComponentPlugin({
  'title': 'My title',
  'description': 'Select a component',
  'callback': (id, label) => { console.log('selected document: ' + id) }
}).show();
var criterion = new Criterion();
criterion.setName("classid");
criterion.setOperator("EQUALS_TO");
criterion.addValue("Folder");

new SelectComponentPlugin({
  'icon': 'fa fa-folder',
  'title': 'My title',
  'description': 'Select a folder',
  'category': 'FOLDER',
  'criteria': [criterion],
  'callback': (id, label) => { console.log('selected folder: ' + id) }
}).show();


# Model selection

Based on the `SelectComponentPlugin` plugin, the `SelectTemplatePlugin` plugin offers users a library of document templates.
By defining the type of model to be proposed, users can select the model to be used from the library.

new SelectTemplatePlugin({
  'type': 'MSWord',
  'callback': function(id, label){
    new DownloadWordPlugin({'template': id, 'filename': label}).download();
  }
}).show();
