+++
title = "Script et résultat"
date = "2000-02-03T12:20:01+02:00"
+++

# Script

Pour utiliser le plugin de lien de composant, ajoutez le script suivant dans votre scope. 

Pour cela, suivez les étapes ci-dessous :

* Allez dans la console d'administration,
* Ouvrez la section `Affichage > Scripts `,
* Cliquez sur le bouton `+` pour démarrer la création,
* Renseignez un nom pour le script ,
* Ajoutez le contenu suivant dans l'éditeur de texte : 

```javascript
var suggestOfferLabels = [
	{
        name: "suggestOfferTitle",
		FR: "Consultez l'offre",
		EN: "Consult offer"
	},
    {
        name: "suggestOfferDescription",
		FR: "Accéder aux détails de l'offre d'emploi publiée.",
		EN: "Access to published job offer's details."
	}
]
var labelsAPI = JSAPI.get().getLabelsAPI();
labelsAPI.setLabels(suggestOfferLabels);

var plugin = new LinkFreeListPlugin({
	toPopulate: 'RH_OfferLink',
	category: 'TASK',
	classId: 'JobOffer',
	tagsToDisplay: ['RH_Service', 'RH_Job'],
	title: labelsAPI.getLabel("suggestOfferTitle"),
	description: labelsAPI.getLabel("suggestOfferDescription")
});
plugin.bind();
```

# Résultat

* Pour commencer, créez une offre d'emploi avec un service et un poste pour que notre candidat puisse postuler.

* Puis, créez une candidature : Dans le formulaire d'indexation,le tag `RH_OfferLink` contient l'offre d'emploi créée précédemment et les valeurs saisies pour ses tags `RH_Service` et `RH_Job` sont affichées. Vous pouvez sélectionner l'offre et valider la création de la candidature.


<br/>
Ouvrez la candidature créée, vous pourrez voir qu'à côté du tag `RH_OfferLink`, une icône est apparue. En cliquant sur cette icône, une popup s'ouvre et affiche les tags de l'offre d'emploi référencée (ou liée). 
Le bouton `Ouvrir` permet d'accéder à l'écran de consultation de l'offre d'emploi afin de visualiser à la fois les tags et les pièces jointes de cette tâche.



