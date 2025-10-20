+++
date="2001-03-01"
title = "WidgetOffMenu"
intro = "OffMenu displaying a widget."
+++

Widget OffMenus allow you to view and interact with this widget to the menu. The [attachment metadata viewer plugin] (broken-link.md) is based on this type of menu. 

To instantiate a WidgetOffMenu, you need to provide it with the Widget to be included in the menu: 
```javascript
var menu = new IFrameOffMenu("MenuTitle", Widget);
JSAPI.get().addOffMenu(menu);
```