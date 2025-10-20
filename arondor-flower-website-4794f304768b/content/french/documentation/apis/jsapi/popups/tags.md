+++
date = "2004-03-28T13:21:01+02:00"
title = "Tags"
description = "Affichage des tags d'un composant dans une popup."
+++

:::info
Ce type de popup permet d'afficher les tags d'un composant existant au sein d'une popup.
:::


Pour instancier ce type de popup, il est nécessaire de fournir à l'API un composant existant : 

```javascript
var popup = JSAPI.get().getPopupAPI().buildComponentFields(document);
```

__Exemple :__  Affichage des tags d'un document dans une popup

```javascript

JSAPI.get().document().get(["documentId"], function(documents){
	var document = documents[0];
	console.info("Got: "+document.getId());
	var popup = JSAPI.get().getPopupAPI().buildComponentFields(document);
	popup.setTitle("Mon document");
	popup.setDescription("Consultez les tags du document");
	popup.setIcon("fa fa-book");
	popup.show();

	},
	function(error){
		console.error("Documents could not be get: " + error);
	});
```
