---
title: "Démarrage rapide"
description: "Guide de démarrage rapide pour ARender v4"
sidebar_position: 1
---

# Démarrage rapide

## Le visualiseur ARender

### Description

ARender est une visionneuse HTML5 qui vous permet de voir et d'annoter plus de 300 formats de documents en ligne directement dans votre navigateur.

Les navigateurs suivants sont supportés :
* Safari 11+
* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Internet Explorer 11+
* Safari Mobile
* Chrome Android

ARender est également convivial pour les mobiles, car nous avons des interfaces dédiées pour les téléphones et les tablettes !

Vous pouvez essayer ARender en ligne dès maintenant, à cette adresse: [https://arender.io/demo](https://arender.io/demo)

### Fonctionnement

ARender fait le rendu des documents à la volée de sorte que vous n'ayez plus besoin de stocker plusieurs versions converties d'un document dans votre GED.

Si vous possédez déjà ces rendus, ARender peut toujours les utiliser et prendre le format le plus optimisé pour afficher le document.

ARender est construit sur deux composants:

- **Le serveur Web Java frontal** (appelé serveur Web-UI): sert l'application HTML et gère les demandes de l'utilisateur final.
- **Le serveur Java principal** (appelé serveur Rendition): fournit les rendus de documents et de nombreux autres services à l'aide d'une API REST au serveur Web-UI.

## Installation rapide

### Prérequis

- Java 8 ou supérieur
- Serveur d'application (Tomcat, JBoss, etc.)
- Base de données (optionnelle pour la persistance)

### Étapes d'installation

1. **Téléchargement** : Récupérez les archives ARender
2. **Déploiement** : Déployez les WAR sur votre serveur d'application
3. **Configuration** : Configurez les paramètres de base
4. **Test** : Accédez à l'interface web

## Première utilisation

Une fois ARender installé, vous pouvez :

1. **Visualiser** un document en fournissant son URL
2. **Annoter** le document avec les outils disponibles
3. **Partager** les annotations avec d'autres utilisateurs
4. **Exporter** le document avec les annotations

Pour plus de détails, consultez la section [Installation](../install/).