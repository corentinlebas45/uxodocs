---
title: Décorations
description: Décorer vos résultats de recherche
---

# Format de date des résultats de recherche

Le format de date peut être adapté en fonction de vos besoins suivant les tags et les résultats. 
Pour ceci, il suffit de définir la fonction JS ``getSearchResultDateFormat`` pour retourner un format de date souhaité. 

Les paramètres sont des chaînes de caractères correspondant à : 

* ``tagClassId`` : l'identifiant de la classe de tags 
* ``result`` : le résultat de recherche 

Un exemple d’utilisation :

```javascript
function getSearchResultDateFormat(tagClassId, result){
	if(tagClassId == "MonTagAModifier"){
		return 'dd/MM/yyyy';
	}
    return 'dd MM yyyy HH:mm';
}
```

# Décorer vos résultats de recherche

Il est possible de décorer vos résultats de recherche : modifier la valeur affichée d'un champ donné.
Pour cela, il suffit de définir un décorateur pour le tag à décorer. 

Dans l'exemple suivant, nous définissons un décorateur pour le champ ``fieldName`` qui sera appelé pour résoudre la valeur à afficher pour ce champ.

```javascript
function decorate(fieldName){
	var decorators = JSAPI.get().getHelperFactory().getSearchDecoratorsAPI();
	decorators.register(fieldName, function(result, callback){		
		callback.onSuccess("decorated: " + result.getField(fieldName).getValue());
	});
}

decorate("Matricule");
```

# Formattage des valeurs de tag

Pour afficher un tag, FlowerDocs formatte ses valeurs : 

- pour les dates, en fonction du format défini 
- pour les listes de valeur, en fonction des libellés définis

Il est possible d'utiliser ce mécanisme à travers l'API JS comme indiqué dans l'exemple suivant : 

```javascript
var formatter = JSAPI.get().getHelperFactory().getFieldFormatter("DOCUMENT");
formatter.format(result.getField(fieldName), function(formattedValue){
	console.log("Formatted value: " + formattedValue);
});
```