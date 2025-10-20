+++
title = "Aller plus loin"
date = "2020-02-03T12:20:01+02:00"
+++


# Permettre la création

Lors de la sélection d'un composant à lier, il est possible de proposer à l'utilisateur de créer un nouveau composant.
Pour le permettre, l'option `creation` accepte les phases d'indexation durant lesquelles l'utilisateur pourra créer un nouveau composant.

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

# Réagir à la sélection

Lors de la sélection d'un composant proposé par ce plugin, il peut s'avérer nécessaire d'y réagir pour accéder aux informations du composant sélectionné.
Ces informations peuvent être utilisées pour répliquer des informations sur le composant en cours d'indexation ou encore proposer des actions supplémentaires à l'utilisateur.
L'option `selector` permet de fournir une fonction appelée lors de la sélection avec le composant sélectionné.

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
# Filtres

Imaginons que les ressources humaines reçoivent des documents qui doivent être classés manuellement et liés à une candidature reçue.
Pour faciliter l'indexation de ces documents, ils disposent de deux tags `RH_OfferLink` et `RH_ApplicationLink`. Le premier permet de référencer l'offre d'emploi au niveau du document. Le deuxième, la candidature associée.

Lors de l'indexation, l'utilisateur commence par sélectionner l'offre d'emploi. La liste de candidatures devrait être filtrée en conséquence : seules les candidatures liées à l'offre d'emploi sélectionnée devraient être proposées.

Pour cela, il est possible d'ajouter l'option `filterTags: ['RH_OfferLink']` pour filtrer les valeurs proposées en fonction d'un tag présent sur le formulaire.

var plugin = new LinkFreeListPlugin({
	toPopulate: 'RH_ApplicationLink',
	category: 'TASK',
	classId: 'ApplicationSubmission',
	tagsToDisplay: ['name'],
	title: 'Consulter la candidature',
	description: 'Accéder aux détails de la candidature.',
	filterTags: ['RH_OfferLink']
});
plugin.bind();
-->

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->