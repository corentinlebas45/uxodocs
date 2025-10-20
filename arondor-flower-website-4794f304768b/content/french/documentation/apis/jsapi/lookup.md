+++
date = "2011-03-28T13:20:01+02:00"
title = "Lookups"
intro = "Proposer des listes dynamiques pour enrichir les données dans FLowerDocs."
+++

Un lookup consiste en la récupération de données issues d'un référentiel tiers ou autre et permet de constituer des listes dynamiques de valeurs. Ce mécanisme favorise l'expérience utilisateur pour enrichir les données stockées ou restituées à travers FlowerDocs.

Cette fonctionalité s'appuie sur une notion de plugin permettant d'exécuter différents types d'appels/requêtes (base de données, web services...).

# Lookup plugins

__Exemple :__

Un lookup plugin peut être défini en JavaScript à l'aide de l'API mise à disposition. Pour cela, il est nécessaire d'instancier un objet `LookupPlugin` comme indiqué dans l'exemple ci-dessous. Un plugin de ce type dispose d'un `LookupHandler` appelé lorsque le lookup est exécuté afin de fournir à FlowerDocs une liste de résultats correspondants. 

```javascript
var lookupPlugin = new LookupPlugin();
lookupPlugin.setLookupHandler(function(fieldName, fieldValue, callback){
	var results = new Array();
	callback.onSuccess(results);
});
```

Chaque plugin doit ensuite être mis à disposition de l'application. Le snipet ci-dessous indique comment enregistrer le plugin où `lookupId` correspond au nom du lookup.  

```javascript
var lookupAPI = JSAPI.get().getLookupAPI();
lookupAPI.register("lookupId", lookupPlugin);
```

# Utilisation d'un lookup

Les lookups enregistrés au sein de l'application peuvent être consommés de différentes manières en fonction des besoins.

## Appel dynamique

Voici le code permettant l'exécution d'un lookup :

__Exemple :__ Exécution d'un lookup ``SampleLookup``

```javascript
JSAPI.get().getLookupAPI().lookup("SampleLookup" ,"BusinessReference", "ref123", function(results) {
	// Utilisation des résultats du lookup
});
```

L'objet ``results`` est un tableau d'objet ``LookupResult`` exposant les méthodes : 

| Fonctions                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|getKey()                                    | Permet de récupérer la clé d'un résultat (i.e nom symbolique )                 |        
|getValue()                                  | Permet de récupérer la valeur ou le libellé d'un résultat                      |        


Dans cet exemple, on execute le ``LookupPlugin`` dont l'identifiant est ``SampleLookup`` avec en paramètre le nom du tag concerné et sa valeur. En réagissant à la modification de sa valeur,il est alors possible de modifier la liste des valeurs proposées en fonction de la saisie de l'utilisateur.

<br/>
*Dans ces exemples, le lookup `SampleLookup` est utilisé pour suggérer des valeurs pour le tag `Montant`, (sous forme de suggestion ou sous forme de liste fermée).*

__Exemple :__ Suggestion de valeur pour un tag  

```javascript
formAPI.registerForFieldChange("Montant", function(fieldName, fieldValue) {			
	JSAPI.get().getLookupAPI().lookup("SampleLookup","Montant", fieldValue, function(results) {
		formAPI.suggest("Montant", results);
	});
});
```



__Exemple :__ Définition des valeurs autorisées dans une liste


```javascript
formAPI.registerForFieldChange("Montant", function(fieldName, fieldValue) {			
	JSAPI.get().getLookupAPI().lookup("SampleLookup","Montant", fieldValue, function(results) {
		var restrictedAllowedValues = new Array();
		for ( var i in results) {
			result = results[i];
			var allowedValue = buildAllowedValue(result.getName(), result.getValue());
			restrictedAllowedValues[i] = allowedValue;
		}
		formAPI.setAllowedValues("EDS", restrictedAllowedValues);
	});
});

function buildAllowedValue(symbolicName, label) {
	var language = new Language("EN");

	var allowedValue = new AllowedValueDefinition();
	allowedValue.setSymbolicName(symbolicName);

	var displayNames = new I18NLabel()
	displayNames.setLabel(language, label);
	allowedValue.setDisplayNames(displayNames);
	return allowedValue;
}
```

## Lien avec un tag

Cette API JS fournit également la possibilité de lier automatiquement un tag là partir du retour d'un ``LookupPlugin``. 
Pour cela, il est possible d'utiliser la fonction ``bindFieldOnLookup(String tagName, String lookupId)`` où : 

* ``tagName`` est l'identifiant du tag concerné 
* ``lookupId`` est l'identifiant du ``LookupPlugin`` à utiliser. 

__Exemple :__ Binding d'un tag sur le lookup `userLookup`

```javascript
formAPI.bindFieldOnLookup("DestinatairePourInfo", "userLookup");
```
