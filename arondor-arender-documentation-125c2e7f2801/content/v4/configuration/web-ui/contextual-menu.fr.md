---
title: "Menu contextuel"
draft: false
icon: mdi-cursor-default-click-outline
keywords: ["configuration", "menu contextuel"]
---

## Généralités

Les différents éléments du menu contextuel sont tous désactivables.

- Clé: *contextualMenu*

    | Description                                   | Clé du paramètre  | Type    |
    | --------------------------------------------- | ----------------- | ------- |
    | Activation du menu contextuel                 | enabled           | Booléen |
    | Activation des icônes dans le menu contextuel | icons.enabled     | Booléen |
    | Impression                                    | hasPrint          | Booléen |
    | Impression directe de l'ensemble des pages    | hasPrintAll       | Booléen |
    | Création de note textuelle                    | hasStickyNote     | Booléen |
    | Création d'annotation texte surligné          | hasHighlightText  | Booléen |
    | Création d'annotation texte barré             | hasStrikeoutText  | Booléen |
    | Création d'annotation texte souligné          | hasUnderlineText  | Booléen |
    | Création d'annotation de type rectangle       | hasHighlight      | Booléen |
    | Création d'annotation de type cercle          | hasCircle         | Booléen |
    | Création d'annotation de type flèche          | hasArrow          | Booléen |
    | Création d'annotation de type polygone        | hasPolygon        | Booléen |
    | Création d'annotation de type                 | hasPolyline       | Booléen |
    | Création d'annotation de type main levée      | hasFreehand       | Booléen |
    | Rotation horaire / anti-horaire               | hasPageRotation   | Booléen |
    | Fermer la vue multiple                        | hasMultiView      | Boolean |
    | Affichage de la règle                         | hasShowGuideRuler | Boolean |
    | Cacher la règle                               | hasHideGuideRuler | Boolean |


```cfg
# Empêcher l'impression à partir du menu contextuel
contextualMenu.hasPrint=false
contextualMenu.hasPrintAll=false

# Désactivation du menu contextuel
contextualMenu.enabled=false
```

