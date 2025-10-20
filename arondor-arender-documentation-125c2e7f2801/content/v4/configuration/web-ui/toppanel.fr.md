---
title: "Barre de menu"
draft: false
icon: mdi-menu
keywords: ["configuration", "menu"]
---

## Logo

- Clé: topPanel.logo

    | Description              | Clé du paramètre | Type   |
    | ------------------------ | ---------------- | ------ |
    | L''URL de l''image       | url              | Texte  |
    | La largeur de l''image   | width            | Entier |
    | La hauteur de l''image   | height           | Entier |
    | Marge gauche de l''image | margin.left      | Entier |

{{< tag type="code" title="arender.properties">}}

```cfg
# Remplacer le logo ARender par celui de ma société
topPanel.logo.url=http://www.masociete.fr/logos/logo.svg
topPanel.logo.width=100
topPanel.logo.height=40

# Masquer le logo
topPanel.logo=false
```


## Menu de document

- Clé: topPanel.documentMenu

    | Description                                                                                               | Clé du paramètre          | Type    |
    | --------------------------------------------------------------------------------------------------------- | ------------------------- | ------- |
    | Chargement d''un document depuis le poste local                                                           | upload                    | Booléen |
    | Chargement d''un document depuis une URL                                                                  | url                       | Booléen |
    | Chargement d''annotations au format XFDF depuis le poste local                                            | xfdfUpload                | Booléen |
    | Téléchargement du document courant au format PDF                                                          | downloadPDF               | Booléen |
    | Téléchargement du document courant au format natif (disponible seulement si le document n'est pas un PDF) | download                  | Booléen |
    | Téléchargement de l'ensemble des documents visualisés                                                     | downloadAll               | Booléen |
    | Téléchargement du document courant avec ses annotations                                                   | downloadAnnotation        | Booléen |
    | Télécharger les annotations au format CSV                                                                 | downloadCSVAnnotation     | Booléen |
    | Télécharger le document avec ses annotations au format FDF                                                | downloadWithFDFAnnotation | Booléen |
    | Télécharger les annotations au format XFDF                                                                | downloadXFDFAnnotations   | Booléen |

{{< tag type="code" title="arender.properties">}}

```cfg
# Empêcher la possibilité de télécharger un document via la barre de menu
topPanel.documentMenu.download=false
topPanel.documentMenu.downloadPDF=false
topPanel.documentMenu.downloadAll=false
# Si le download all ne fonctionne pas à cause d'un des documents du
# conteneur ne voulant pas s'ouvrir, modifiez ajouter la propriété suivante
# dans le fichier arender-server-custom-<...>.properties
arender.server.rendition.ignore.document.accessors.with.exceptions=true
```


## Menu d'impression

- Clé: topPanel.print

    | Description                                                                   | Type    |
    | ----------------------------------------------------------------------------- | ------- |
    | Affiche une boîte de dialogue permettant de sélectionner le type d'impression | Booléen |

{{< tag type="code" title="arender.properties">}}

```cfg
# Masquer le bouton d'impression
topPanel.print=false
```


## Menu d'annotation

- Clé: topPanel.annotationMenu

    | Description                              | Clé du paramètre  | Type    |
    | ---------------------------------------- | ----------------- | ------- |
    | Création d''une note textuelle           | stickyNote        | Booléen |
    | Création d''un rectangle                 | highlight         | Booléen |
    | Création d''un cercle                    | circle            | Booléen |
    | Création d''une flèche                   | arrow             | Booléen |
    | Création d''une flèche de mesure         | arrow.measure     | Booléen |
    | Création de texte surligné               | highlightText     | Booléen |
    | Création de texte souligné               | underlineText     | Booléen |
    | Création de texte barré                  | strikethroughText | Booléen |
    | Création d''un polygone                  | polygon           | Booléen |
    | Création d''une ligne connecté           | polyline          | Booléen |
    | Création d''un dessin à main levée       | freehand          | Booléen |
    | Création d''un tampon                    | stamp             | Booléen |
    | Afficher/masquer les annotations         | hide              | Booléen |
    | Afficher/masquer annotations & rotations | hideAll           | Booléen |


```cfg
# Affiche le bouton permettant de créer une note textuelle
topPanel.annotationMenu.stickyNote=true
# Masque le bouton permettant de créer une flèche
topPanel.annotationMenu.arrow=false
```


## Navigation

- Clé: topPanel.pageNavigation

    | Description                | Clé du paramètre | Type    |
    | -------------------------- | ---------------- | ------- |
    | Aller à la première page   | first            | Booléen |
    | Aller à la page précédente | previous         | Booléen |
    | Aller à la page suivante   | next             | Booléen |
    | Aller à la dernière page   | last             | Booléen |


```cfg
# Masque les deux boutons permettant d'aller à la première et la dernière page
topPanel.pageNavigation.first=false
topPanel.pageNavigation.last=false
```


## Zoom

- Clé: topPanel.zoom

    | Description                                               | Clé du paramètre | Type    |
    | --------------------------------------------------------- | ---------------- | ------- |
    | Zoom avant                                                | in               | Booléen |
    | Zoom arrière                                              | out              | Booléen |
    | Zoom sur une zone sélectionnée                            | zone             | Booléen |
    | Adapte le zoom à la largeur de la fenêtre                 | fullWidth        | Booléen |
    | Adapte le zoom à la hauteur de la fenêtre                 | fullHeight       | Booléen |
    | Adapte le zoom à la largeur et à la hauteur de la fenêtre | fullPage         | Booléen |
    | Activer le zoom zonale dans une fenêtre externe           | zoneGlass        | Booléen |
    | Multiplication du zoom zonale                             | zoneGlass.value  | Entier  |


```cfg
# Masque le bouton permettant d'activer le zoom zonal
topPanel.zoom.zone=false
```


## Rotation

- Clé: topPanel.rotation

    | Description                                          | Clé du paramètre | Type    |
    | ---------------------------------------------------- | ---------------- | ------- |
    | Rotation horaire de la page courante                 | right            | Booléen |
    | Rotation anti-horaire de la page courante            | left             | Booléen |
    | Rotation horaire et anti-horaire de toutes les pages | all              | Booléen |


```cfg
# Désactive les boutons liés à la rotation
topPanel.rotation.right=false
topPanel.rotation.left=false
```


## Autres fonctionnalités

- Clé: topPanel

    | Description                      | Clé du paramètre | Type    |
    | -------------------------------- | ---------------- | ------- |
    | Créer une annotation de masquage | redact           | Booléen |
    | Rafraichir les annotations       | refresh          | Booléen |
    | Recherche plein texte            | search           | Booléen |
    | Plein écran                      | fullscreen       | Booléen |
