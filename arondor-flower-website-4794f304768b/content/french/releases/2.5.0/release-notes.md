+++
date = "2020-07-03T00:20:01+02:00"
title = "Release notes"
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

:::info
Découvrez les nouvelles fonctionnalités et changements introduits par cette nouvelle version majeure.
:::

# Nouvelles fonctionnalités

## Gestion de processus
Intégration du moteur de workflow Camunda (_version 7.13_) avec un modeleur de processus intégré dans la console d'administration.


## Templates
Deux types de templates ont été introduits afin de générer des fichiers à partir des données stockées dans FlowerDocs.

### HTML
A l'aide du moteur de template [Thymeleaf](https://www.thymeleaf.org/), ce [type de template](broken-link.md) permet la génération de fichier au format HTML.

### Microsoft Word

Ce type de template permet de valoriser les propriétés d'un document Microsoft Word (_.docx_).

## Modes d'affichage

Les utilisateurs ont désormais le choix entre différents modes d'affichage de l'interface graphique accessibles depuis le panneau utilisateur.
Ils ont la possibilité de choisir : 

* la densité d'informations affichée dans les différentes pages
* le mode d'affichage des critères d'un formulaire de recherche (classique ou en colonne)


### Consultation de dossiers

Les écrans de consultation de dossiers ont été revus pour optimiser la navigation au sein de leurs contenus.

## Pages 

La nouvelle notion de [`Pages`](broken-link.md) permet de configurer des pages WEB personnalisées.

## Starter Spring Boot

La librairie [`flower-docs-starter-client`](broken-link.md) est mise à disposition afin de faciliter le développement d'un client Java.
Cette librairie est un _starter Spring Boot_ facilitant la consommation des services exposés par FlowerDocs Core.

# Evolutions

## Alfresco 

* le concept d'`alias` permet d'associer des identifiants référençants des identifiants Alfresco 
* les pièces jointes de toutes catégories et identifiants sont supportées.
* les tags de type `ChoiceList` ne nécessitent plus la définition de contraintes dans le modèle.
* les identifiants de documents injectés à l'aide du CLM peuvent être surchargés.

## Dossiers 

Les colonnes du contenu d'un dossier sont configurables en fonction du contexte. 

## Administration

Une action permettant la suppression depuis l'interface graphique de classes de composants, tags, processus et catégories de tag a été ajoutée. 

# Changements importants

## Packaging
Les applications FlowerDocs GUI et FlowerDocs Core ne sont plus publiées sous forme de WAR à déployer dans un conteneur de servlet mais sous forme d'exécutables. 
Basées sur Spring Boot, ces applications embarquent leur propre conteneur de servlet (_Tomcat 9.0.35_).

De plus, l'interface graphique de la visionneuse ARender est désormais embarquée au sein de FlowerDocs GUI et n'est donc plus publiée comme application indépendante.

## Fichiers de propriétés

Les fichiers de propriétés `flowerdocs.properties` ne sont plus utilisés.
A la place, la FlowerDocs GUI et le FlowerDocs Core doivent disposer de leur propre fichier de propriétés respectivement `gui.properties` et `core.properties`.
Ces fichiers doivent être placés dans le répertoire d'exécution de l'application.

<br/>
Ce changement peut avoir un impact sur le bon fonctionnement d'un scope. Notamment sur le chargement de la configuration de l'interface graphique lorsqu'un fichier XML (document de classe `GUIConfiguration`) utilise le fichier `flowerdocs.properties`.


## Abandon du support d'Internet Explorer

Pour des questions de performances, le navigateur Internet Explorer 11 n'est plus supporté.
Hormis le modeleur de processus (et le suivi d'avancement), l'interface graphique est réputée fonctionnelle sur ce navigateur.

## FlowerDocs.jsp & login.jsp

Les pages `FlowerDocs.jsp` et `login.jsp` n'existent plus. Elles sont respectivement remplacées par `/` et `/signin`.
En tentant d'y accéder, les utilisateurs seront automatiquement redirigés sur les nouvelles URL.
## Configuration

### Libellés

Pour surcharger les libellés ou ajouter le support d'une nouvelle langue, les libellés doivent être ajoutés dans un fichier `<locale>.properties` situé dans le repertoire `labels` (par exemple `labels/fr.properties`).


## Librairies

Cette nouvelle version implique une montée de version des composants suivants : 

* ARender 4.0.9.
* Spring Boot 2.3.0.RELEASE
* Spring 5.2.6.RELEASE


## API

* Remplacement du service de gestion des versions (_REST_)
* Suppression de la fonction `registerForFolderChildrenLoaded` et remplacement par un nouveau mécanisme (cf. [documentation](broken-link.md)).


# Correctifs

## 2.5.0.1 _10/09/2020_

* Un tag de type `DATE` vide était considéré comme invalide (JIRA).
* Le CLM ne permettait pas de créer ou de modifier une tâche avec l'utilisation du job `update` (JIRA).
* L'ouverture d'un écran de création avec vérification dans une popup ne provoquait plus la fermeture de la popup après la création du composant (JIRA).

* Impossibilité de visualiser des documents dont l'identifiant contient les caractères `{` ou `}` (JIRA).
* Support des documents de configuration dont l'identifiant contient les caractères `{` ou `}` (JIRA).
* Après la modification d'un document de configuration, il n'est pas possible d'en sélectionner un deuxième pour le modifier (JIRA).
* Les plugins HTTP de la GUI peuvent être définis dynamiquement et par scope (JIRA).

* Possibilité de forcer l'invalidité d'un tag (ou motif de réponse à une tâche) de type `USER` ou `FREE_LIST` à l’aide de l’API JS (JIRA).
* Le _Drag & Drop_ a été désactivé sur les pièces jointes en lecture seule (JIRA).

## 2.5.0.2 _10/11/2020_

### Visualisation
* **Montée de version** de la visionneuse de documents ARender en  **4.1.1** apportant son lot de corrections d'anomalie et d'évolutions (JIRA)
* Le connecteur ARender a évolué afin de corriger une anomalie concernant l'évaluation de la permission `READ` sur chaque annotation (JIRA)

* Ajout de la version FlowerDocs dans les URLs des ressources statiques d'ARender afin de prévenir des conflits suite après une montée de version ARender (JIRA et JIRA)
* Service WEB permettant l'enregistrement dynamique de serveurs de rendition auprès de FlowerDocs Core (JIRA)
* Restauration de la possibilité d'utiliser le catalogue de tampons par défaut (JIRA)

### Optimisations & performances
* Introduction de caches mémoires pour limiter le nombre d'appels à des caches distribués (stockés dans Redis) (JIRA).
* Amélioration de la gestion des tampons pour réduire leur empreinte mémoire (JIRA)
* Optimisation du mécanisme de détermination du temps restant avant l'expiration de la session utilisateur en cas d'inactivité.
Le timestamp de la dernière requête utilisateur n'est plus persisté que toutes les 5 secondes au lieu d'à chaque requête. Avec l'utilisation de Redis, ce mécanisme apportait un overhead non-nécessaire. (JIRA)
* Prévention de mauvaises configurations liées à la durée maximale d'inactivité d'une session utilisateur et du jeton utilisateur (JIRA)

### Interface graphique

#### Tâches

* Action d'appropriation visible uniquement des administrateurs sur les formulaires d'indexation (JIRA)
* Changement de la visibilité de motifs d'une réponse à une tâche à l'aide de l'API JS (JIRA).
* Les documents créés dans des versions antérieures à la 2.5.0 et attachés à une tâche ne pouvaient pas être ouverts depuis celle-ci (JIRA)

#### Dossiers
* Lors de la création d'un document dans un dossier en lecture seule, les tags du formulaire de création n'étaient pas modifiables dans certains cas (JIRA)
* Au sein de l'arborescence d'un dossier, les actions des sous-dossiers n'étaient pas visibles à partir d'une certaine longeur de leur titre (JIRA)

#### Autres
* Impossibilité de scroller verticalement sur : 
    * les écrans de recherche lorsque le mode compact est activé et que la largeur de la fenêtre est inférieure à  1200px (JIRA)
    * la page d'accueil lorsque l'utilisateur provient d'un formulaire de recherche (JIRA)
* Support du mode Compacte pour les dossiers virtuels affichés en tant qu'onglet et sans agrégation (JIRA)
* Après réduction de l'arborescence d'un dossier virtuel, l'icône permettant de l'ouvrir n'est pas visible (JIRA)
* Mauvaise initialisation lors de la création d'une page publique depuis la console d'administration (JIRA)
