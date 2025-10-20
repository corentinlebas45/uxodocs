+++
date = "2001-03-28T13:20:01+02:00"
title = "Indexation"
+++

Un formulaire d'indexation permet la visualisation et la modification des tags d'un composant. Afin de pouvoir interagir avec ce type de formulaire, il est nécessaire de s'abonner à son ouverture : 

```javascript
JSAPI.get().registerForComponentChange(function(componentFormAPI, component, phase) {
	// Utilisation de l'objet componentFormAPI permettant d'interagir avec le formulaire
});
```


__Note :__ Dans le cas de l'affichage de plusieurs formulaires de composant, il peut être nécessaire d'accéder à un formulaire en particulier : ``JSAPI.get().getComponentFormAPI(<identifiant du composant>)``. 


## Actions dans un formulaire 

L'objet ``componentFormAPI.getActions()`` permet d'interagir avec les actions d'un formulaire présentant un document, dossier... 

Pour cela, plusieurs fonctions sont exposées.


| Fonction                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|getHeaderActions()                          | Récupère le conteneur d'action dans l'en-tête                                  | 
|getTaskActions()                            | Récupère le conteneur d'action des tâches                                      | 
|getFooterActions()                          | Récupère le conteneur d'action dans le pied de page (validation, annulation...)| 

La partie [Actions](broken-link.md) documente les fonctions disponibles permettant d'interagir avec les différents conteneurs d'actions ainsi qu'avec les actions récupérées depuis ces 3 contenurs. 


## Ajout de cartes 

Un formulaire d'indexation est composé d'un ensemble de cartes contenant les informations du composant, les tags, pièces jointes et dossiers parents. 
Il est également possible d'ajouter des cartes grâce à l'API JS avec la fonction ``addCardContainer(cardContainer)`` qui nécessite une carte de type conteneur en entrée. 

Les fonctions disponibles sur cet objet sont disponibles dans la partie [Cartes](broken-link.md).

__Exemple :__ Ajout de carte conteneur personnalisée

```javascript
var desc1 = buildDescription("Description 1");
var card1 = buildCard("Card", "Heading card", "card-style");

var div = document.createElement("div");
div.className="custom-card-container";
addChildren(div, [desc1,card1]);

var cardContainer = buildCardContainer("fa fa-clone","Title","Caption","card-box custom-card-container");
cardContainer.setContent(div);
formAPI.addCardContainer(cardContainer);

function buildCardContainer(icon,title,caption, style){
	var cardContainer = new CardContainer();
	cardContainer.setIcon(icon);
	cardContainer.setTitle(title);
	cardContainer.setCaption(caption);
	cardContainer.setVisible(true);
	cardContainer.addStyle(style);
	return cardContainer;
}
function buildDescription(description){
	var desc = document.createElement("div");
	desc.innerHTML = description;
	return desc;
}
function buildCard(title, heading, style){
	var card = new Card();
	card.setTitle(title);
	card.setHeading(heading);
	card.addStyle(style);
	return card.asElement();
}
function addChildren(parent, children){
	for (i=0; i < children.length; ++i) {
    	parent.appendChild(children[i]);
	}
}
```

## Etat du formulaire

La fonction `formAPI.isDirty()` sur un formulaire permet de savoir si le formulaire a été modifié.