---
title: "Contextual menu"
draft: false
icon: mdi-cursor-default-click-outline
keywords: ["configuration", "contextual menu"]
---

## General

All contextual menu item can be disabled.

- Key: *contextualMenu*

    | Description                           | Parameter Key     | Type    |
    | ------------------------------------- | ----------------- | ------- |
    | Enable contextual menu                | enabled           | Boolean |
    | Enable icons in contextual            | menuicons.enabled | Boolean |
    | Print popup                           | hasPrint          | Boolean |
    | Print all pages                       | hasPrintAll       | Boolean |
    | Create sticky note annotation         | hasStickyNote     | Boolean |
    | Create highlight text annotation      | hasHighlightText  | Boolean |
    | Create strikeout text annotation      | hasStrikeoutText  | Boolean |
    | Create underline text annotation      | hasUnderlineText  | Boolean |
    | Create rectangle annotation           | hasHighlight      | Boolean |
    | Create circle annotation              | hasCircle         | Boolean |
    | Create arrow annotation               | hasArrow          | Boolean |
    | Create polygon annotation             | hasPolygon        | Boolean |
    | Create polyline annotation            | hasPolyline       | Boolean |
    | Create freehand annotation            | hasFreehand       | Boolean |
    | Rotate current page to the left/right | hasPageRotation   | Boolean |
    | Allow to close multiview              | hasMultiView      | Boolean |
    | Allow to show guide ruler action      | hasShowGuideRuler | Boolean |
    | Allow to hide guide ruler action      | hasHideGuideRuler | Boolean |


```cfg
# Disallow print from contextual menu
contextualMenu.hasPrint=false
contextualMenu.hasPrintAll=false

# Disable the contextual menu
contextualMenu.enabled=false
```

