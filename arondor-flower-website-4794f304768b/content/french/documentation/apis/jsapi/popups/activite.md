+++
date = "2004-03-28T13:22:01+02:00"
title = "Activité"
draft = "true"
description = "Démarrer une activité dans une popup."
+++


:::info
Ce type de popup permet d'ouvrir une place au sein d'une popup, via JavaScript.
La manipulation de place n'est supportée que si le composant est un DOCUMENT.
Les composants TASK, FOLDER et VIRTUAL_FOLDER ne sont pas supportés.
:::


__1. Instancier la place à ouvrir__ 

Si la place correspond à celle d'un composant, l'instanciation s'effectue en renseignant sa catégorie et son identifiant.

```javascript
var componentPlace = new flower.docs.PlaceBuilder.build(category, id);
```

Les autres places peuvent être instanciées à partir d'un token. Ce token est défini de la même façon que pour la [page par défaut](broken-link.md).

```javascript
var place = new flower.docs.PlaceBuilder.build(token);
```


__2. Instanciation de la popup__ 


```javascript
var popup = JSAPI.get().getPopupAPI().buildPlace(place);
```

__Exemple :__ ouverture de l'écran de modification d'un document au sein d'une popup

```javascript
var place = new flower.docs.PlaceBuilder.build("DOCUMENT", "45376503-dfda-4abc-bc2f-32ac8a8b88d1");
var popup = JSAPI.get().getPopupAPI().buildPlace(place);
popup.show();
```

__Exemple__ : ouverture de la page d'accueil au sein d'une popup

```javascript
var place = new flower.docs.PlaceBuilder.build("home");
var popup = JSAPI.get().getPopupAPI().buildPlace(place);
popup.show();
```
