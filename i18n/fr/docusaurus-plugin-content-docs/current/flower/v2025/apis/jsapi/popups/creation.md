---
title: Création de composants
description: Popup permettant la création d'un composant à partir d'un formulaire d'indexation.
---

:::info
Ce type de popup permet de lancer la création d'un composant en affichant, dans une popup, un formulaire d'indexation.
:::


Pour instancier une popup de création, il est nécessaire de lui fournir un composant en entrée (ici ``newTask``) : 

```javascript
var newTask = new Task();
var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask);
```

Un callback peut être fourni à cette méthode afin de réagir à la création du composant : 

```javascript
var newTask = new Task();
newTask.setClassId("ClaimProcess_Start");
var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask, function(saved){
    console.info("The task has been created: "+saved.getId());
});
popup.show();
```

&nbsp;
# Selecteur de fichier

Dans le cas de la création de document, il est également possible d'afficher une popup sans sélecteur de fichier. Ceci permet d'instancier un document vierge, sans contenu.

Pour cela, il faut utiliser la fonction ``buildDocumentCreation()`` spécifique aux documents. Cette fonction possède un paramètre ``allowFileAttachments``, qui permet d'afficher ou non le sélecteur de fichier au sein de la popup.


```javascript
var newDocument = new Document();
var popup = JSAPI.get().getPopupAPI().buildDocumentCreation(newDocument, false);
```