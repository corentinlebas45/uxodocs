---
title: Traitement des images
description:
icon: mdi-image-edit-outline
keyword: ["fonctionnalité", "images", "traitement", "traitement des images", "contraste", "luminosité"]
---

Pour améliorer la visibilité des éléments sur certains documents, il est possible de manipuler le contraste et la luminosité. Cette manipulation se fait à l'aide d'un curseur allant de -100 à 100 où 0 est la valeur par défaut. 


![image]([shortcode])


La fonctionnalité est activable avec la configuration suivante : 

[shortcode]

```cfg
# Activate the top panel imageProcessing button
topPanel.imageProcessMenu=true
```

[shortcode]


Les valeurs des curseurs sont également modifiables. Ces propriétés sont dépréciés depuis la version 4.7.0 :
[shortcode]

```cfg
# Sets up the max value of the brightness slider
topPanel.imageProcessMenu.maxBrightness=200

# Sets up the max value of the contrast slider
topPanel.imageProcessMenu.maxContrast=200

# Sets up the default value of the brightness slider
topPanel.imageProcessMenu.defaultBrightness=100

# Sets up the default value of the contrast slider
topPanel.imageProcessMenu.defaultContrast=100
```

[shortcode]


Le traitement de l'image peut être appliqué de trois façons différentes :
- La page courante
- Toutes les pages du document courant
- Toutes les pages de tous les documents ouverts

Pour configurer selon le document, il faut utiliser la version 4.5.x et supérieure.


Avant la 4.5.x
[shortcode]

```cfg
# Enable the image process on all pages
topPanel.imageProcessMenu.doOnAllPage=true
```

[shortcode]

Depuis la 4.5.x
[shortcode]

```cfg
# Set how image processing is applied : CURRENT_PAGE, ALL_PAGES, ALL_DOCUMENTS
topPanel.imageProcessMenu.process.mode=ALL_DOCUMENTS
```

[shortcode]

# Activer les boutons de traitement d'image
Depuis la version 4.7.x, les boutons permettant de faire apparaitre les sliders individuellement, peuvent être activés ou non par les propriétés suivantes :  
[shortcode]

```cfg
#Activate the brightness slider
topPanel.imageProcessMenu.brightness.enabled=true
#Activate the contrast slider
topPanel.imageProcessMenu.contrast.enabled=true
```

[shortcode]