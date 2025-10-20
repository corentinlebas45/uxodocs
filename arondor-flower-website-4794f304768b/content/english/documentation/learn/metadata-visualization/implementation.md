+++
 date = "2020-02-01T11:20:01+02:00"
title = "Implementation"
+++



# Visualize metadata for all job attachments

To begin with, we'll simply configure the plugin to allow us to view the metadata of each attachment to a `GEC_Step2_ATraiter` class task.

Add the following script: 
```javascript
    new MetadataVisualizationAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter',
	}).bind();
```

The user can now view the metadata of each attachment of a `GEC_Step2_ATraiter` task, in an Off Menu, by clicking on the `eye` icon of the attachments.

# Restricting the action to a single attachment

We will now restrict the view of this action. We want only the attachment identified as `Mail` to have the visualization action. To do this, we add the `attachmentId` option to our plugin configuration to specify which attachment the action should be positioned on.


```javascript
attachmentId: ‘Mail'
```

We therefore obtain the following script: 
```javascript
new MetadataVisualizationAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter',
  	attachmentId: ‘Mail'
}).bind();
```

# To go further: customize your action

Now we want to customize the visualization action. We are going to add the options for customizing the title and icon of the action to our script: 

```javascript
	title: ‘Visualizing incoming mail data',
	icon:'fa-up-right-from-square'
```

With this script, the visualization action is fully customized: 
```javascript
new MetadataVisualizationAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter',
  	attachmentId: ‘Mail'
	title: ‘Visualizing incoming mail data',
	icon:'fa-up-right-from-square'
}).bind();
```
