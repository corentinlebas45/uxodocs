+++
date = "2004-03-21T13:21:01+02:00"
title = "Jobs standards"
+++


# Création

Le CLM permet la création d'un scope à partir d'un [template](broken-link.md) à l'aide du job `create` :  

```properties
<clm> create --template=<template> --scope=<scope> --admin=<admin>
```
<br/>
__Paramètres :__

| Paramètre        | Description                                                               |
|------------------|---------------------------------------------------------------------------|
| template         | Identifiant du template (nom du dossier dans lequel il est situé)         |
| scope            | Identifiant du scope à créer                                              |
| admin            | Nom de l'utilisateur propriétaire du nouveau scope                        |
| ws.url           | L'url de FlowerDocs CORE. Exemple : localhost:8081/core/services          |
| user             | L'identifiant du compte admin                                             |
| password         | Le mot de passe du compte admin                                           |	

# Suppression

Pour supprimer un scope, il est possible d'utiliser le job ``delete`` tel que : 

```properties
<clm> delete --scope=<scope>
```

# Ré-initialisation

Les jobs peuvent être combinés, la ré-initialisation d'un scope peut s'effectuer à l'aide des jobs `delete` et `create` : 

```properties
<clm> delete create --template=<template> --scope=<scope>
```
	
# Mise à jour

Le job ``update`` permet de mettre à jour un scope existant.

* Les composants présents dans le template et absents du scope initial seront ajoutés.
* Les composants différents du scope initial seront  mis à jour.
* Les documents présents dans le scope initial et absents du template ne seront pas supprimés.

Ce job permet par exemple de mettre à jour la configuration d'un scope sans supprimer les documents existants.

En l'absence d'un fichier scope.xml dans le template, la mise à jour pourra être effectuée. Ainsi, les éléments qui peuvent être définis dans ce fichier, tels que les équipes, ayant été implémentés après l'initialisation du scope ne seront pas modifiés.

<br/>
__Exemple :__ Mise à jour du scope ``RH``

```properties
<clm> update --template=simple --scope=RH
```

Il existe aussi des jobs de mise à jour plus spécifiques. Ceux-ci permettent de ne mettre à jour qu'un certain type de configurations.

| Job                    | Description                                                                   |
|------------------------|-------------------------------------------------------------------------------|
| update-config          | Mise à jour des fichiers de configuration                                     |
| update-model           | Mise à jour des classes de composants, tags, catégories et workflow           |
| update-content         | Mise à jour des contenus (documents, dossiers, dossiers virtuels et tâches)   |
| update-scope           | Mise à jour du fichier scope.xml (qui gère les ACLs, noms d'affichage, équipes du scope, etc.) |

# Export

L'export d'un scope est possible grâce au job ``export``. Ce job permet la création d'un template à partir d'un scope existant.

```properties
<clm> export --scope=<scope> --template=<template>
```

<br/>
__Paramètres :__

| Paramètre        | Description                                                               |
|------------------|---------------------------------------------------------------------------|
| scope            | Identifiant du scope à exporter                                           |
| template         | Identifiant du template à créer (nom du dossier dans lequel il est situé) |
| ws.url           | L'url de FlowerDocs CORE. Exemple : localhost:8081/core/services          |
| user             | L'identifiant du compte admin                                             |
| password         | Le mot de passe du compte admin                                           |

Par défaut, le scope sera exporté dans un dossier ``data`` du répertoire d'exécution.

Pour modifier le répertoire où sera stocké l'export, ajoutez le paramètre ``--data.dir=<chemin>`` à la commande ``<clm>``

<br/>
Il existe aussi des jobs d'export plus spécifiques.

| Job                    | Description                                                                   |
|------------------------|-------------------------------------------------------------------------------|
| export-config          | Export des fichiers de configuration                                          |
| export-model           | Export des classes de composants, tags, catégories et workflow                |
| export-content         | Export des contenus (documents, dossiers, dossiers virtuels et tâches)        |
| export-scope           | Export du fichier scope.xml (qui gère les ACLs, noms d'affichage, équipes du scope, etc.) |
| export-annotations     | Export des annotations de document                                            |

:::warning
Les jobs ``export`` ou même ``export-config`` ne récupéreront pas les annotations. Seul le job ``export-annotations`` exporte ce type d'élément.
Avant la version 2025.2.0, les annotations étaient exportées par le job ``export-config``.
:::

# Liste des jobs

Il est possible d'exécuter seulement une partie des opérations. Ci-dessous la liste complète des opérations possibles :

| Import                         | Export				           | Merge                           |
|--------------------------------|---------------------------------|---------------------------------|
| scope-import                   | scope-export                    | scope-merge                     |
| tag-category-import            | tag-category-export             | tag-category-merge              |
| tag-class-import               | tag-class-export                | tag-class-merge                 |
| document-class-import          | document-class-export           | document-class-merge            |
| folder-class-import            | folder-class-export             | folder-class-merge              |
| task-class-import              | task-class-export               | task-class-merge                |
| workflow-import                | workflow-export                 | workflow-merge                  |
| virtual-folder-class-import    | virtual-folder-class-export     | virtual-folder-class-merge      |
| acl-import                     | acl-export                      | acl-merge                       |
| technical-document-import      | technical-document-export       | technical-document-merge        |
| document-import                | document-export                 | document-merge                  |
| folder-import                  | folder-export                   | folder-merge                    |
| virtual-folder-import          | virtual-folder-export           | virtual-folder-merge            |
| task-import                    | task-export                     | task-merge                      |
| facts-import                   |                                 | facts-merge                     |

En plus de ces opérations, il existe un job permettant de purger les caches de la partie FlowerDocs Core nommé ``purge-cache``.  

<br/>

__Exemple :__ Import de classes de tags uniquement

```properties
<clm> tag-class-import --scope=<scope>
```
