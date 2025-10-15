---
title: "Configuration de la stack ELK"
weight: 
draft: false
icon: mdi-gauge-empty
## search related keywords
keywords: ["tutorial", "Elasticsearch", "performance", "Kibana", "ELK", "Reporting"]
---

## Introduction
Analysez les performances d’ARender dans une stack ELK.

ARender retourne des informations sur son utilisation, comme le temps de chargement du document ou encore le type de document ouvert. Ces informations sont stockées dans des fichiers de logs et envoyées directement dans Elasticsearch.

La stack ELK est composée des applications suivantes : Elasticsearch et Kibana :

* **Elasticsearch** : qui stocke et indexe les données. C’est une base NoSQL permettant de gérer un grand nombre de données.
* **Kibana** : qui est une interface Web permettant de rechercher et visualiser graphiquement vos données.

Via Kibana les données sont rendues de manière graphique. La création de ces graphiques est très simple et les possibilités de configuration en fonction des besoins sont larges.

Exemple de visualisations : 

* Temps moyen de chargement des documents :
![img]([shortcode])

* Répartition des types MIME des documents visualisés dans ARender :
![img]([shortcode])

## Prérequis
### Pour importer les visualisations et les tableaux de bord avec les fichiers .ndjson
* Kibana version 7.2.0 et plus récente
* ElasticSearch version 7.2.0 et plus récente

### Pour importer les visualisations et les tableaux de bord avec les fichiers .json
* Kibana version 5.x et plus récente
* ElasticSearch version 5.x et plus récente

## Elasticsearch
### Installation
Installer ElasticSearch comme indiqué sur la documentation officielle selon votre version : <https://www.elastic.co/guide/en/elasticsearch/reference/current/>

### Démarrage
Démarrer ElasticSearch comme indiqué sur la documentation officielle : <https://www.elastic.co/guide/en/elasticsearch/reference/current/starting-elasticsearch.html>

## Kibana
### Installation
Installer Kibana comme indiqué sur la documentation officielle selon votre version : <https://www.elastic.co/guide/en/kibana/current/install.html>

### Démarrage
Démarrer Kibana comme indiqué sur la documentation officielle : <https://www.elastic.co/guide/en/kibana/current/start-stop.html>

### Prérequis configuration Kibana
Avant de passer à la configuration de Kibana, veuillez ouvrir au minimum un document dans ARender afin que l'index dans Elasticsearch soit créé.

### Configuration Kibana
#### Création des pattern d'index

* Ouvrir Kibana dans votre navigateur. En local : <http://localhost:5601/app/kibana>

* Se rendre dans la configuration :
![img]([shortcode])


* Se rendre dans la gestion des pattern d’index :
![img]([shortcode])


* Ajouter les 2 index : 
    * arender-performance
    * arender-rendition-performance

![img]([shortcode])

#### Import des exemple des tableaux de bord
* Se rendre dans les objets sauvegardés :
![img]([shortcode])

* Pour les versions supportant l'import des .ndjson (Depuis Kibana 7.2.0) :
    * Cliquer sur l'import et sélectionner le fichier des visualisations : [shortcode][shortcode][shortcode]
    * Cliquer sur l'import et sélectionner le fichier du tableau de bord : [shortcode][shortcode][shortcode]
* Pour les versions supportant uniquement l'import des .json :
    * Cliquer sur l'import et sélectionner le fichier des visualisations : [shortcode][shortcode][shortcode]
    * Cliquer sur l'import et sélectionner le fichier du tableau de bord : [shortcode][shortcode][shortcode]

* Ouvrir le tableau de bord :  
![img]([shortcode])