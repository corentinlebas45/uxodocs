---
title: "Pré-Configuration"
draft: false
weight: 2
icon: mdi-wrench
keywords: [ "standalone", "hmi", "web ui", "pré-configuration" ]
---

Ici, nous allons rendre le serveur de rendition atteignable
depuis le serveur de présentation.

Par défaut, le war d'ARender recherchera le serveur Rendition
localement. Cela ne fonctionnera que si vous placez votre serveur
Rendition sur le même serveur que le serveur frontal.

Il y a plusieurs façons de faire la liaison et nous allons voir
ici la manière la plus pérenne.

- Dans la machine qui contiendra le serveur de présentation,
     placez un dossier nommé *ARenderConfiguration* dans
     le répertoire personnel de l'utilisateur lançant le
     serveur de présentation.
- Dans votre dossier *ARenderConfiguration* , placez un fichier suffixé de
     **-custom-client-server.properties**. De cette façon, ARender le
     détecte automatiquement. Pour en savoir plus à ce sujet, reportez-vous
     à la documentation complète de la configuration.

Si nous considérons que votre serveur de rendu se trouve sur le nom
d’hôte "renditionHost", voici ce que votre fichier doit contenir:


```cfg
arender.server.rendition.hosts=http://renditionHost:8761/
```

