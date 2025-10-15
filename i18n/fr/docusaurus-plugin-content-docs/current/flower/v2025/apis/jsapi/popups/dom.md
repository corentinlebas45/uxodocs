+++
date = "2004-03-28T13:24:01+02:00"
title = "DOM"
description = "Les popups affichées au sein de l'interface graphique"
+++

La popup de type Contenu DOM permet d'ajouter un élément *DOM* dans une popup. Ceci permet donc d'ajouter un élément construit en JS dans une popup.

```javascript
var domElement = document.createElement('div'); 
domElement.innerHTML = "Hello world"; 
var popup = JSAPI.get().getPopupAPI().buildDOM(domElement);
popup.show();
```

