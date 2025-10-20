+++
date = "2001-03-28T13:21:01+02:00"
title = "Recherche"
+++

# Abonnement

## Formulaire 

Un formulaire de recherche permet la saisie de critères facilitant l'accès aux composants stockés aux utilisateurs. Afin de pouvoir interagir avec ce type de formulaire, il est nécessaire de s'abonner à son ouverture :

```javascript
JSAPI.get().registerForSearchOpen(function(searchFormAPI, id) {
	console.log("Hidden request: " + searchFormAPI.getHiddenRequest());
});
```
__Note :__ Dans le cas d'un formulaire depuis l'écran de recherche, la variable `id` correspond à l'identifiant de son *template*. 
<br> Dans le cas d'un formulaire de recherche depuis un dossier virtuel, la variable `id` correspond à l'identifiant de ce dossier virtuel.

## Critères 

Si l'on souhaite réagir au changement de valeur d'un critère de recherche spécifique, l'abonnement s'effectue comme ci-dessous :

```javascript
criterionName = "EDS";
JSAPI.get().getSearchFormAPI().registerForCriterionChange(criterionName, function(criterion) {
		console.log("Criterion " + criterion.getName() + " values changed to " + criterion.getValues());
});
```

__Note :__ Dans cette partie, la variable ``criterionName`` correspond dans le cas d'un tag à la valeur de son identifiant. 
S'il s'agit de la classe du composant, il faut utiliser ``classid``.  

_Les fonctions disponibles pour interagir avec les critères sont disponibles dans la [partie suivante](broken-link.md)._


# Actions

Un formulaire de recherche dispose de deux conteneurs d'actions disponibles grâce aux fonctions suivantes :

| Fonction                                                   | Description                                                                    |
|------------------------------------------------------------|--------------------------------------------------------------------------------|
|getHeaderActions()                                          | Récupère le conteneur d'action au dessus des résultats de recherche            | 
|getFooterActions()                                          | Récupère le conteneur d'action en dessous des résultats de recherche           | 


L'exemple ci-dessous illustre l'ajout d'une action dans le conteneur sous le tableau de résultats.

```javascript
JSAPI.get().registerForSearchOpen(function(searchFormAPI, id) {
	console.error("Call of register for open");
	var actionAPI = JSAPI.get().getActionFactoryAPI();
	var action = actionAPI.buildTextual("myCustomAction", "Test", function(actionPresenter){
		console.info("on click");
		actionPresenter.setEnabled(false);
	});

	var footerActions = searchFormAPI.getFooterActions();
	footerActions.remove(action.getId());
	footerActions.add(action);
});
```

