---
title: "Ancienne installation"
draft: false
weight: 2
keywords: [ "standalone", "hmi", "configuration", "m-files", "legacy" ]
---

Nous présentons ici l'installation de la Web-UI dans M-Files. 

Dans notre exemple, nous déployons la Web-UI
dans un environnement avec :

- Système d'exploitation : Windows Server 2016 Datacenter
- M-Files 
- Un serveur Tomcat9
- Avoir une Rendition fonctionnelle. Il vous suffit de suivre cette **[documentation](broken-link.md)**.



## Étapes pour configurer la Rendition



- Démarrer le serveur ARender Rendition

## Étapes pour installer la Web-UI

En utilisant l'identifiant et mot de passe préalablement fournis (ou contacter arender-sales@arondor.com si vous souhaitez un accès),
vous pouvez récupérer la version de l'application web utilisée en format WAR


* Program Files
    * Apache Software Foundation
        * Tomcat 9.0
            * webapps


Par la suite :

Vous devez modifier différentes valeurs du fichier *arender-server.properties* en fonction de la configuration de votre coffre-fort M-Files

## Étapes pour déployer ARender sur M-Files
- Ouvrez votre coffre
- Installer le ARenderApp.zip dans les applications de votre coffre.

*( M-Files Admin -> choisir le coffre -> clique droit -> Applications -> Installer )*

- Déconnectez-vous du coffre et reconnectez-vous pour vous assurer que les changements sont pris en compte

## Étapes pour ouvrir un document avec M-Files

- Redémarrer le serveur IIS


- Démarrer le serveur Tomcat9
- Accédez à M-Files sous le lecteur M:\


- Sélectionnez votre coffre
- Faites glisser et déposez un document pour l'ouvrir avec ARender

