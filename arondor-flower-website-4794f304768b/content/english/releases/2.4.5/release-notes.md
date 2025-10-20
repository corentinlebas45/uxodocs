+++
date = "2020-07-02T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

# Evolutions

## Accueil 

* Support des valeurs multiples dans les dashlets de type Liste (JIRA). 
* La légende des dashlets avec un certain nombre de valeurs est scrollable (JIRA).  

## Administration

* L'action de purge du cache dans l'administration purge maintenant le cache de libellés de FlowerDocs GUI (JIRA).

## ARender 

* Montée de version ARender : 4.0.9 (JIRA).

## Sécurité 

* La mise à jour de contenu d'un document est basée sur les permissions `ADD_CONTENT` et `DELETE_CONTENT` ou `UPDATE_CONTENT` (JIRA). 

## Dossier virtuel 

* Les deux modes de vue d'un dossier virtuel sont synchronisés (JIRA).  
* Si un dossier virtuel en mode onglet n'a qu'un bucket, le titre `Autres` n'est plus affiché (JIRA). 
* Amélioration de la gestion des buckets ouverts sauvegardés dans l'historique (JIRA). 

## JSAPI

* Amélioration des actions possibles sur les popups de recherche (JIRA).  

## Ergonomie

* Meilleure gestion du fil d'Ariane (JIRA). 
* Validation des formulaires de création de tampon, dashlet et recherche sauvegardée (JIRA, JIRA, JIRA).
* Lors du clic sur l'icône d'un composant dans une popup de recherche, le composant n'est plus ouvert (JIRA). 
* Le style au survol des résultats de recherches est effectif pour les résultats pairs et impairs  (JIRA). 
* Les heures, minutes et secondes sont conservées pour les critères de type Date au changement de valeurs (JIRA).

## Alfresco 

* Les recherches d'utilisateurs terminant par un _S_ sont filtrées afin de ne pas considérer le _S_ comme un pluriel (JIRA). 

# Corrections

* L'utilisation dans un dossier virtuel du mode de recherche en miniatures est fonctionnel après avoir changé de bucket (JIRA).  
* Les popups de confirmation avec des tags multivalués non modifiés ne sont plus affichées (JIRA). 
* Le style des champs monovalués en recherche est le même qu'en indexation (JIRA). 
* La scrollbar dans la popup de sélection de colonne est désormais présente à l'ouverture sur IE11 (JIRA).  
* Amélioration de la troncature des mots dans certains cas sur IE11 (JIRA). 
* L'action d'ajout de conditionnel est désormais nommée `Ajouter` et non `Sauvegarder` pour éviter les confusions (JIRA).
* L'API JS d'actions de dossier est à nouveau fonctionnelle (JIRA).  

# Correctifs

## 2.4.5.1 _02/11/2020_

### Visualisation
* **Montée de version** de la visionneuse de documents ARender en  **4.1.1** apportant son lot de corrections d'anomalie et d'évolutions (JIRA)
* Le connecteur ARender a évolué afin de corriger plusieurs anomalies concernant la visualisation des annotations : 
    * Certaines annotations créées avec un navigateur ne sont pas visibles dans un autre navigateur (JIRA)
    * Evaluation de la permission `READ` sur chaque annotation (JIRA)


### Performance
* Introduction de caches mémoires pour limiter le nombre d'appels à des caches distribués (stockés dans Redis) (JIRA).
* La résolution des utilisateurs à partir de résultats de recherche a été revue. Lors de cette étape, une seule requête, par utilisateur dont le libellé doit être résolu, est exécutée (JIRA).

### Formulaires

* Possibilité de forcer l'invalidité d'un tag (ou motif de réponse à une tâche) de type `USER` ou `FREE_LIST` à l’aide de l’API JS (JIRA).
* Changement de la visibilité de motifs d'une réponse à une tâche à l'aide de l'API JS (JIRA).
* Les utilisateurs inexistants (ou supprimés) sont restitués à l'aide de leur identifiant stocké au lieu d'une valeur vide(JIRA).
* Le _Drag & Drop_ a été désactivé sur les pièces jointes en lecture seule (JIRA).
* Amélioration de la conservation des colonnes définies par un utilisateur pour l'affichage de résultats de recherche (JIRA).

## 2.4.5.2 _09/11/2020_

* Support du protocole [OpendId Connect](broken-link.md) avec le connecteur Alfresco à l'aide d'un `Authentication Subsystem` Alfresco (JIRA).
* Possibilité de [surcharger les icônes](broken-link.md) de composants utilisées via l'API JS (JIRA).

## 2.4.5.3 _24/11/2020_

* **Montée de version** de la visionneuse de documents ARender en  **4.1.2** (JIRA) corrigeant une anomalie liée à la gestion du cache des documents uploadés sur un serveur de rendition qui pouvait provoquer l'impossibilité de visualiser un document
* Dans FlowerDocs GUI, lorsque la première visualisation concernait un document, deux demandes simultanées d'ouverture du document était faite auprès d'ARender (JIRA)


## 2.4.5.4 _24/11/2020_

* Lors du téléchargement d'un fichier CSV, l'extension `txt` était ajoutée (JIRA) 

## 2.4.5.5 _25/11/2020_

*  Rafraîchissement des valeurs sélectionnées à partir d'un lookup (JIRA) 

## 2.4.5.6 _27/11/2020_

*  Support des Identity Provider OIDC qui n'exposent pas de endpoint fournissant les informations d'un utilisateur (JIRA) 

## 2.4.5.7 _10/12/2020_

*  Kibana : résolution des libellés de tags basés sur une liste de choix (JIRA) 

## 2.4.5.8 _27/01/2021_

* Amélioration de la prolongation d'un jeton utilisateur avant son expiration (JIRA) 
* Affichage de l'identifiant d'un utilisateur après sa suppression (JIRA) 

## 2.4.5.9 _01/03/2021_

* Evaluation de la sécurité lors du téléchargement en CSV (JIRA)
* Alfresco : 
    * impossible de rechercher un utilisateur déclaré sans nom de famille (JIRA)
    * mise en place d'un cache des utilisateurs et groupes (JIRA)