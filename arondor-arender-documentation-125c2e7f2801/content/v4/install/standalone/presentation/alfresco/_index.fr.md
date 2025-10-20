---
title: "Alfresco"
description: Guide de déploiement pour Alfresco Content Services, Alfresco Share et ACA
draft: false
type: docs
keywords: [ "standalone", "hmi", "web ui", "configuration", "alfresco" ]
---

Nous présentons ici l'installation de la Web-UI dans alfresco. 

Dans notre exemple, nous déployons le serveur de présentation
dans un environnement avec :

- Système d'exploitation : Ubuntu 16.04.5
- Alfresco Community 5.2.0 (disposant serveur tomcat)

## Récupérer l'archive du serveur de présentation

En utilisant l'identifiant et mot de passe préalablement fournis (contacter arender-sales@arondor.com si vous souhaitez un accès),
vous pouvez récupérer la version de l'application web utilisée en format WAR

## Déploiement du serveur de présentation dans Alfresco

- Arrêter le service Alfresco
- Copier le fichier **arondor-arender-hmi-alfresco-{version}.war** dans votre dossier *{alfresco_tomcat}/webapps*
- Renommer le fichier .war en **ARenderHMI.war**


## L'installation est terminée

Vous pouvez maintenant démarrer le serveur alfresco et tenter d'ouvrir un fichier avec un lien formé de cette manière :

```html
http://{arender_serveur}:{arender_port}/ARenderHMI/?nodeRef={nodeRef}&user={user}&alf_ticket={ticket}&versionLabel={version}
```


Vous avez terminé l'installation rapide de ARender pour Alfresco. Pour aller plus loin dans la configuration du connecteur ARender pour Alfresco rendez-vous sur cette page : **[Configuration avancée](broken-link.md)**