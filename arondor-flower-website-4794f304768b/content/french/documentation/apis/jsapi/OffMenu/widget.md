+++
date= "2001-03-01"
title = "WidgetOffMenu"
intro = "OffMenu affichant un widget."
+++

Les OffMenus de type Widget permettent de visualiser et d'interagir avec ce widget au sein du menu. Le [plugin de visualisation des métadonnées d'une pièce jointe] (broken-link.md) est ainsi basé sur ce type de menu. 

Pour instancier un WidgetOffMenu, il est nécessaire de lui fournir le Widget à inclure dans le menu: 
```javascript
var menu = new IFrameOffMenu("MenuTitle", widget);
JSAPI.get().addOffMenu(menu);
```