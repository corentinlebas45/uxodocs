---
title: "ARender pour FileNet dans IBM WebSphere (recommandé)"
description: Guide de déploiement de ARender HMI pour FileNet dans le serveur d'application IBM WebSphere
draft: false
type: docs
weight : 1
keywords: [ "standalone", "hmi", "configuration", "filenet" ,  "ibm" , "websphere"]
---

Ci-dessous un exemple de déploiement d'ARender pour FileNet dans le serveur d'application **IBM WebSphere**.

Environnement pour l'exemple de déploiement :

- Système d'exploitation : Windows Server 2016
- Filenet 5.5
- Serveur d'application Websphere 9.0.5.0

## Récupérer l'EAR du serveur de présentation pour FileNet

En utilisant l'identifiant et mot de passe préalablement fournis,
vous pouvez récupérer l'application web en format EAR

## Déploiement de l'EAR dans IBM Websphere


La version de websphere utilisée ici doit avoir java 8 installé et activé.
Veuillez suivre les instructions [ici](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=waso-java-se-8-in-websphere-application-server-v85)


- Ouvrir une console WebSphere

```html
https://serveur_websphere:9043/ibm/console
```

- Aller dans l’onglet « **Applications** », puis cliquer sur « Applications d’entreprise »

- Pour lancer l’installation, cliquer sur « **Installer** »


- Choisir le chemin de l’EAR à déployer et cliquer sur « **Suivant** »


- Pour accepter les paramètres par défaut, cliquer sur « **Suivant** »



- Sélectionner le(s) webserver(s) et/ou serveur(s), puis cliquer sur « **Suivant** »


- Pour accepter les paramètres par défaut (hôte virtuel : default_host), cliquer sur « **Suivant** »



- Dans la fenêtre récapitulative de l’installation, cliquer sur « **Terminer** » pour procéder à l’installation avec ces paramètres après les avoir vérifié


## Configuration post installation

### Ordre de chargement des librairies



Rien à configurer.



Il faut s’assurer que l’ordre de chargement des librairies soit configuré de telle sorte de Websphere charge ses librairies en dernier.

- Dans la liste des applications d’entreprise cliquer l’application **ARender 4.8.X for FileNet 5.x**

- Cliquer sur **Gestion des modules**


- Cliquer sur le module ARender


- Sélectionner, dans la liste déroulante « Ordre du chargeur de classes » : « Classes chargées en premier avec un chargeur de classe local (dernier parent)


- Cliquer sur OK puis sauvegarder les modifications.

- Démarrer l'application ARender



## Installation dans CPE terminé

Vous pouvez accéder à un document FileNet via une URL formée comme ceci :

```html
http://{server_arender}:{port_arender}/ARender/?id={id}&objectStoreName=OS1
```

