+++
title = "Going further"
date = "2020-02-03T12:20:01+02:00"
+++


# Enabling creation

When selecting a component to link, the user can be prompted to create a new component.
To enable this, the `creation` option accepts indexing phases during which the user can create a new component.

var plugin = new LinkFreeListPlugin({
	toPopulate: 'RH_OfferLink',
	category: 'TASK',
	classId: 'JobOffer',
	tagsToDisplay: ['RH_Service', 'RH_Job'],
	title: labelsAPI.getLabel("suggestOfferTitle"),
	description: labelsAPI.getLabel("suggestOfferDescription"),
	creation: { phases: ['INSERT', 'MODIFY']}
});
plugin.bind();

# Reacting to the selection

When selecting a component offered by this plugin, it may be necessary to react to it in order to access information on the selected component.
This information can be used to replicate information about the component being indexed, or to propose additional actions to the user.
The `selector` option can be used to provide a function called up when the selected component is selected.

var plugin = new LinkFreeListPlugin({
	toPopulate: 'RH_OfferLink',
	category: 'TASK',
	classId: 'JobOffer',
	tagsToDisplay: ['RH_Service', 'RH_Job'],
	title: labelsAPI.getLabel("suggestOfferTitle"),
	description: labelsAPI.getLabel("suggestOfferDescription"),
	selector: function(component){
		console.info('The component '+component.getId()+' has bee selected!');
	}
});
plugin.bind();

<!--
# Filters

Imagine that human resources receives documents that need to be filed manually and linked to an application received.
To make it easier to index these documents, they have two tags, `RH_OfferLink` and `RH_ApplicationLink`. The first allows you to reference the job offer at document level. The second is the linked application.

When indexing, the user first selects the job offer. The list of applications should be filtered accordingly: only applications related to the selected job offer should be proposed.

To do this, you can add the `filterTags: ['RH_OfferLink']` option to filter the values offered according to a tag present on the form.

var plugin = new LinkFreeListPlugin({
	toPopulate: 'RH_ApplicationLink',
	category: 'TASK',
	classId: 'ApplicationSubmission',
	tagsToDisplay: ['name'],
	title: 'View application',
	description: 'Access application details’,
	filterTags: ['RH_OfferLink']
});
plugin.bind();
-->

<!--:::info
Find the scope module corresponding to this training [here](broken-link.md) 
:::-->