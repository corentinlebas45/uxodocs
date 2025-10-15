---
title: "Marque blanche"
draft: false
icon: mdi-tag-outline
keywords: ["configuration", "marque"]
---

## Introduction

ARender permet, depuis la version 4.4.1, de retirer les différentes références à sa marque via de la configuration.

## Configuration

### Les références à ARender dans le panneau "À propos"

Une propriété permet de retirer les références à 'ARender'. Les références retirées sont celles se trouvant dans le panneau "À propos".
![image]([shortcode])

Appliquer la propriété suivante afin de retirer ces références : 
[shortcode]

```cfg
# Supprimer toutes les références à ARender
arender.white.labeling=true
```

[shortcode]


Visuel après activation de la propriété de la marque blanche : 


![image]([shortcode])

### Références lors du chargement ou de la sauvegarde


Lors du chargement ou de la sauvegarde d'un document, le texte 'ARender' est visible au centre de la page.

![image]([shortcode])

Ce texte est configurable via la propriété suivante :

[shortcode]

```cfg
# Affichage d'un label lors du chargement de l'UI ARender
startup.loading.label=Just-Loading
```

[shortcode]

![image]([shortcode])


### Le logo ARender

![image]([shortcode])

Pour modifier le logo ARender du TopPanel, faire la modification de configuration suivante.


Pour avoir l'icone blanc :
[shortcode]

```cfg
# Définir l'icone de détails
topPanel.logo.url=arender-icones-svg-white/submenu/toolbar/icone-details.svg
```

[shortcode]

![image]([shortcode])

Pour avoir l'icone gris :
[shortcode]

```cfg
# Définir l'icone de détails
topPanel.logo.url=arender-icones-svg/submenu/toolbar/icone-details.svg
```

[shortcode]

![image]([shortcode])

### Modification du titre de la page

La dernière référence à ARender se trouve dans le titre par défaut de la page qui va se retrouver directement dans le fichier HTML. Pour la retirer, aller à l'emplacement où ARender Web-UI est déployé. Vous trouverez à la racine du dossier, le fichier ARender.html. Ensuite ouvrez le fichier avec un éditeur de texte afin de retirer la référence à 'ARender' :

![image]([shortcode])

Après édition : 

![image]([shortcode])
