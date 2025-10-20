---
title: "Composition de documents"
draft: false
icon: mdi-scissors-cutting
keywords: ["configuration", "composition de documents"]
---

## Généralités

- Clé: documentbuilder

    | Description                                                                                   | Clé du paramètre                             | Type    |
    | --------------------------------------------------------------------------------------------- | -------------------------------------------- | ------- |
    | Activation/désactivation du composant                                                         | enabled                                      | Booléen |
    | Montrer/Cache le bouton de la composition de documents                                        | button.visible                               | Booléen |
    | Rendre les images du composeur de documents déplaçables (ou non)                              | thumbs.draggable                             | Booléen |
    | Activation de la composition de document au démarrage                                         | activateOnStartup                            | Booléen |
    | Cache le navigateur de document                                                               | hideDocumentNavigator                        | Booléen |
    | Largeur (en pixel)                                                                            | width                                        | Entier  |
    | Comportement de la sauvegarde                                                                 | save.behavior                                | Texte   |
    | Télécharger le document après la sauvegarde                                                   | save.download                                | Booléen |
    | Effacer le document après la sauvegarde. Autrement le document est figé/grisé.                | save.delete                                  | Booléen |
    | Afficher une notification quand on quitte la page avec des documents non sauvegardés          | displaySaveWarning                           | Booléen |
    | Activation/Désactivation du bouton de téléchargement local dans le menu contextuel            | contextual.menu.download.enabled             | Booléen |
    | Activation/Désactivation du bouton de téléchargement avec annotations dans le menu contextuel | contextual.menu.download.annotations.enabled | Booléen |
    | Activation/Désactivation du bouton création de document dans le menu contextuel               | contextual.menu.createFirst.enabled          | Booléen |
    | Activation/Désactivation du bouton de mise à jour du document dans le menu contextuel         | contextual.menu.updateFirst.enabled          | Booléen |
    | Activation/Désactivation du bouton de suppression de document dans le menu contextuel         | contextual.menu.delete.enabled               | Booléen |


```cfg
# Active la composition de documents. Un document sera créé dans le référentiel
# d'origine et grisé si la sauvegarde est réussie

documentbuilder.enabled=true
documentbuilder.save.behavior=CREATE_NEW_FIRST_DOCUMENT
documentbuilder.save.delete=false
```

