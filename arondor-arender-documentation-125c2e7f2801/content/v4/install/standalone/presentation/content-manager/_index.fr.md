---
title: "Content Manager"
description: Guide de déploiement pour Content Manager
draft: false
type: docs
keywords: [ "standalone", "hmi", "configuration", "content manager" ]
---

Ci-après un détail sur le déploiement de ARender pour Content Manager.

Dans notre exemple, nous déployons le serveur de présentation dans l'environnement suivant :

- Windows Server 2016
- Content Manager 8.6
- Serveur d'application Websphere 9.0.5.0 (Déploiement aussi possible avec Apache Tomcat 8+)

## Récupérer l'archive du serveur de présentation

En utilisant l'identifiant et mot de passe préalablement fournis,
vous pouvez récupérer l'application web en format EAR

## Déploiement de l'EAR dans Websphere


La version de websphere utilisée ici doit avoir java 8 installé et activé.
Veuillez suivre les instructions [ici](https://www.ibm.com/support/knowledgecenter/en/SSYGQH_6.0.0/admin/install/inst_was_switch_java.html)


- Ouvrir la console WebSphere où vous souhaitez déployer ARender

```html
https://serveur_websphere:90XX/ibm/console
```

- Aller dans l’onglet « Applications », puis cliquer sur « Applications d’entreprise »

- Pour lancer l’installation, cliquer sur « Installer »


- Choisir le chemin de l’EAR à déployer et cliquer sur « Suivant »


- Pour accepter les paramètres par défaut, cliquer sur « Suivant »



- Sélectionner le(s) webserver(s) et/ou serveur(s), puis cliquer sur « Suivant »


- Pour accepter les paramètres par défaut (hôte virtuel : default_host), cliquer sur « Suivant »



- Dans la fenêtre récapitulative de l’installation, cliquer sur « Terminer » pour procéder à l’installation avec ces paramètres après les avoir vérifié


## Configuration post installation

### Ordre de chargement des librairies



Rien à configurer.



Il faut s’assurer que l’ordre de chargement des librairies soit configuré de telle sorte de Websphere charge ses librairies en dernier.

- Dans la liste des applications d’entreprise cliquer l’application ARender

- Cliquer sur **Gestion des modules**


- Cliquer sur le module ARender


- Sélectionner, dans la liste déroulante « Ordre du chargeur de classes » : « Classes chargées en premier avec un chargeur de classe local (dernier parent)


- Cliquer sur OK puis sauvegarder les modifications.

- Démarrer ARender.



## Déploiement de ARender pour Content Manager terminé

Vous pouvez maintenant accéder à un fichier en GED via une URL formée comme ceci :

```html
http://localhost:9080/ARender/?docid=86%203%20ICM8%20ICMNLSDB7%20NOINDEX59%2026%20A1001001A16B08B91035E0007718%20A16B08B91035E000771%2014%201000
```