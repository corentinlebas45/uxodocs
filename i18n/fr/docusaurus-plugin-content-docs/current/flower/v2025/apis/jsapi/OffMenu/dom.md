---
title: DOMOffMenu
intro: OffMenu affichant un contenu DOM.
---

Les OffMenus de type Contenu DOM permettent d'ajouter un élément DOM dans le menu.

Ceci permet donc d'ajouter un élément construit en JS dans le menu. 

```javascript
var domElement = document.createElement('div'); 
domElement.innerHTML = "Hello world"; 
var menu = new DOMOffMenu("MenuTitle", domElement);
JSAPI.get().addOffMenu(menu);
```