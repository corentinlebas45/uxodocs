+++
date = "2000-02-01T12:20:01+02:00"
title = "FlowerScan Service"
description= "Intégration du module complémentaire `FlowerScan Service`."
+++

# Objectif

Le module complémentaire `FlowerScan Service` permet de piloter un scanner depuis l'interface graphique.

Dans ce module, nous verrons comment faciliter la création d'un document dans la plateforme FlowerDocs à l'aide d'un scanner.
Le plugin `ShortcutScanPlugin` permet en effet d'ajouter un raccourci de création de document qui lance le scan d'un document.

:::warning
Munissez vous d'un scanner compatible TWAIN ou WIA avant de commencer et assurez vous qu'il est accessible depuis votre poste. 
:::

# Intégration du plugin

Le plugin `ShortcutScanPlugin` est un plugin JavaScript. Il dispose de plusieurs options permettant de configurer le scan d'un document.

Pour commencer, créez un nouveau script avec le code suivant : 

```javascript
new ShortcutScanPlugin({
	"icon": "mdi mdi-scanner",
	"color": "flat-red",
	"title": "Scanner un document",
	"description": "Lancer le scan d'un document défini sur votre poste",
});
```

Vos utilisateurs disposent désormais d'un nouveau raccourci de création : une action `Scanner un document` est affichée.
Cliquez dessus pour lancer le scan d'un document puis indexez le document scanné.

# Pour aller plus loin

L'intégration de ce module complémentaire est trop simple et vous souhaitez aller plus loin ? 

Cette section vous aiguillera pour affiner l'intégration de `FlowerScan Service`. 

## Pré-traitement du document scanné

L'option `preProcessor` permet d'appliquer un traitement avant que la popup d'indexation du document scanné ne soit affichée.
Typiquement, elle pourra être utilisée pour définir la classe de document ou des tags sur le document à indexer. 

```javascript
new ShortcutScanPlugin({
	"icon": "mdi mdi-scanner",
	"color": "flat-red",
	"title": "Scanner un document",
	"description": "Lancer le scan d'un document défini sur votre poste",
	"preProcessor": function(document, callback){
		document.setName("Mon document scanné");
		callback(document);
	}
});
```

## Pièce jointe de tâche

Un second plugin est disponible afin d'intégrer le module `FlowerScan Service` au niveau des pièces jointes de tâche.
L'activation de ce plugin permettra ainsi aux utilisateurs de remplir une pièce jointe d'une tâche à partir d'un scanner reconnu.

<br/>

**1/** Munissez vous d'une classe de tâche avec une pièce jointe ayant pour identifiant `Reponse`

**2/** Créez un script JavaScript avec le code suivant : 

```javascript
new AttachmentScanPlugin({
	icon: "mdi mdi-scanner",
	title: "Scanner un document",
  	attachmentId:"Reponse",
	preProcessor: function(document, callback){
		document.setClassId("Document");
		callback(document);
	}
}).bind();
```
A l'affichage d'un formulaire d'indexation d'une tâche ayant une pièce jointe `Reponse`, une action `Scanner un documnet` sera affichée.

L'option `attachmentId` permet de restreindre les pièces jointes sur lesquelles seront affichées l'action de scan. 

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->