---
title: IFrameOffMenu
intro: OffMenu affichant une IFrame.
---

Les OffMenus de type IFrame permettent d'ajouter une IFrame au sein du menu. 

Pour instancier un IFrameOffMenu, il est nécessaire de lui fournir l'url de l'IFrame qui sera construite: 
```javascript
var menu = new IFrameOffMenu("MenuTitle", url);
JSAPI.get().addOffMenu(menu);
```

Un callback peut être fourni à cette méthode afin de réagir au chargement de l'IFrame : 
```javascript
var menu = new IFrameOffMenu("MenuTitle", url, window => { 
	console.info("The IFrame has been loaded");
 });
JSAPI.get().addOffMenu(menu);
```