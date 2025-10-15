---
title: "Installation"
description: Guide d'installation en standalone
draft: false
weight: 3
icon: mdi-cog-outline
keywords: [ "standalone", "hmi", "configuration" ]
---

Ci-après, une installation standard d’ARender HMI. Pour les installations sur système GED, vous pouvez passer cette page.

## Prérequis

* Un serveur d'application (voir les [prérequis](broken-link.md)). Ici nous allons utiliser Apache Tomcat 9.0.21.

* Download the last version of ARender HMI : [ARender HMI [shortcode] ↓](https://artifactory.arondor.cloud/artifactory/arondor-all/com/arondor/arender/arondor-arender-hmi/[shortcode]/arondor-arender-hmi-[shortcode].war)

## Déploiement de ARender HMI

### Déplacement du WAR ARender HMI

Déplacer le WAR dans le dossier **webapps** du serveur d'application Tomcat de manière à obtenir la structure de fichier ci-dessous : 

* Tomcat 9.0
    * bin
    * ...
    * webapps
        * arondor-arender-hmi-[shortcode]

### Démarrage du serveur d'application

Démarrer le serveur d'application en utilisant le script **startup.bat** se trouvant dans le dossier *bin* de Tomcat.

### Ouvrir une nouvelle fenêtre navigateur

[shortcode]
Accès à <http://localhost:8080/arondor-arender-hmi-[shortcode]/> via un navigateur web.
[shortcode]

![hmi]([shortcode])

[shortcode]
L'URL à utiliser doit être comme suit : <http://{hmiHostName}:{portHMI}/{ARenderContext}/>:

- *{hmiHostName}* : le nom d'hôte du serveur d'application
- *{portHMI}* : le port du serveur d'application
- *{ARenderContext}* : le context root de l'HMI dans le serveur d'application

[shortcode]