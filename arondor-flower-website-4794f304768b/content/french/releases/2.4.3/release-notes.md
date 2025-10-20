+++
date = "2020-01-07T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

# Evolutions

## GUI

* Optimisation des performances de l'affichage des documents d'un dossier virtuel (JIRA).
* Création de dashlet sur la page d'accueil par les utilisateurs (JIRA).
* Notification push (JIRA).
* Support de langues supplémentaires via l'ajout de fichier de propriété contenant les libellés (JIRA).
* Conservation du mode de présentation d'un dossier virtuel (agrégation ou tabulaire) lors de la navigation (JIRA).
* Affichage direct des actions secondaires de composant et de recherche lorsqu'il y a suffisamment de place (JIRA).

* Le champ `classid` est désormais membre du contexte d'un formulaire (JIRA).



## Ergonomie

* Navigation au clavier dans les formulaires avec la touche tabulation (JIRA).
* Amélioration de la gestion de la touche Entrée dans les popups (JIRA).
* Amélioration du redimensionnement des panneaux (JIRA).
* Mise en évidence du champ ayant le focus (JIRA).
* Fil d'Ariane à gauche et plus contrasté.
* Critères d'un formulaire de recherche :  
 * les critères sont affichés sur une seule colonne dès que la taille de la fenêtre est inférieure à `1900px`.
 * les critères libres peuvent être filtrés.
 * possibilité de réduire le panneau de critères.
* Résultats de recherche : 
 * les actions de téléchargement ont été remontées au dessus des résultats.
 * le nombre de résultats est affiché directement dans le titre de l'encart.
 * les en-têtes sont fixes lorsque l'utilisateur scroll (pour les navigateurs le supportant).
 * augmentation du contraste (en-têtes, lignes sélectionnées...).
 * le sélecteur de colonnes reste ouvert après la sélection/désélection d'une colonne.


## Alfresco

* Support des tags de type `ICON` (JIRA).
* Support des réservations pour les tâches et dossiers virtuels (JIRA).
* Par défaut, les tags techniques ne sont plus propagés d'un composant à un autre (JIRA).
* Modifications du modèles par défaut
 * Tri sur la colonne `assigné à` (JIRA).
* Support d'une ACL par défaut sur les classes de composants (JIRA)
* Par défaut, la gestion de conflit de version Elasticsearch est désactivée (JIRA)

## ARender

* Création de tampon personnalisé par les utilisateurs ayant la permission `CREATE_ANNOTATION` sur le scope (JIRA).
* La locale de l'utilisateur est fournie à ARender afin d'adapter la rendition des emails (JIRA)

## CLM

* Lorsque une erreur est renvoyée lors de l'exécution, un code de retour approprié est renvoyé (JIRA).
* Import d'objets Kibana (JIRA)
* Afin de faciliter la gestion de classe de tags avec des valeurs, un nouveau job a été introduit afin d'en générer à partir d'un CSV (JIRA).

# Corrections

* Modifications de code à travers la console d'administration en utilisant Internet Explorer (JIRA).
* Dashlet de type DONUT avec Internet Explorer.
* Création de tâche à partir d'une sélection de plusieurs composants (JIRA).
* Une valeur d'un tag conditionnel pouvait être considérée comme valide si elle n'était pas du tout autorisée (JIRA).
* Dans une popup, la scrollbar n'est pas cliquable (JIRA)
* Le contenu d'un dossier n'est affiché que si l'utilisateur a la permission `READ_CONTENT` (JIRA).

# Correctifs 

## 2.4.3.1 _20/01/2020_

###  GUI

* Amélioration des performances des champs conditionnels (JIRA).
* L'affichage des favoris est fait de façon asynchrone (JIRA).
* Le scroll est fonctionnel dans les résultats de recherche sur Firefox (JIRA).
* Amélioration de l'affichage des popups de création de tampons et dashlets sur Internet Explorer (JIRA).

### Alfresco 

* Augmentation du nombre maximum d'objets à remonter lors de la récupération de la configuration, des pièces jointes de tâche (JIRA,JIRA, JIRA). 
* Désactivation de la décoration des tags multivalués et meilleure gestion de la surcharge de la valeur par défaut (JIRA).

### ARender

* Le menu ARender est correctement affiché lorsque l'environnement a des lenteurs (JIRA).
* Le profil fourni via intégration à ARender est fourni en mode externe (JIRA).

## 2.4.3.2 _06/02/2020_

### Ergonomie 

* Le calendrier d'un tag de type Date est désormais internationalisé (JIRA).
* Le menu de vertical reste replié lorsque l'utilisateur redimensionne les différents panneaux de l'application (indexation, visionneuse, recherche, ...) (JIRA). 
* Amélioration du support mobile et de la gestion du scroll (JIRA, JIRA).

### Tag conditionnel 

* Le champ de recherche des champs conditionnel est à nouveau fonctionnel (JIRA).
* Les valeurs autorisées des champs conditionnels sont triées par ordre alphabétique (JIRA).
* Les valeurs affichées lors d'un export de résultat de recherche des tags conditionnels sont localisées (JIRA). 
* Restriction la liste de valeurs autorisées d'un tag conditionnel en JS (JIRA).

### Internet Explorer 11

* Amélioration de la gestion de l'historique des recherches via mot-clés dû à la restriction de taille d'URL avec Internet Explorer (JIRA).
* Les pièces jointes de tâches sont affichées dans l'ordre d'ajout et non de façon aléatoire (JIRA).

### Autres

* L'action de téléchargement au format natif est affichée lorsque le document n'est pas un PDF (JIRA).
* Lors de la navigation entre une recherche et une recherche en popup, la sauvegarde de la recherche suivante n'est plus la dernière ouverte mais la recherche courante  (JIRA).

## 2.4.3.3 _25/02/2020_

### Ergonomie

* La section de tampon personnalisé n'est affiché que si l'utilisateur a des tampons personnalisés ou qu'il peut en créer (JIRA).
* Les critères fixes ne sont plus affiché dans le sélecteur de critères additionnels (JIRA).
* Les critères additionnels sont triés par ordre alphabétique (JIRA).

### Internet Explorer 11

* Amélioration des performances de chargements du tableau de résultats de recherche (JIRA).
* Amélioration de l'affichage d'une entrée de l'historique si elle est longue (JIRA).
* Les popups n'apparaissent plus avec une transparence (JIRA).

### Dossier virtuel 

* La tentative d'affichage d'un document pour lequel l'utilisateur n'est pas autorisé à voir le contenu masque la visionneuse (JIRA).
* Le panel de chargement est correctement masqué lors du clic sur le chevron dans l'arborescence du dossier virtuel (JIRA).

### Alfresco

* La récupération des favoris est fonctionnel avec Alfresco (JIRA).

## 2.4.3.4 _26/02/2020_
* Correction d'une régression introduite en 2.4.3.3 empêchant l'ouverture d'un composant depuis une recherche en double cliquant dessus (JIRA).

## 2.4.3.5 _13/03/2020_
### ARender 

* **Montée de version ARender : 4.0.4-2** (JIRA).
* L'erreur lors de la mise à jour d'une annotation non autorisée ne bloque pas les futures mise à jour d'annotation (JIRA).

### Sécurité 

* Correction d'une faille XSS (JIRA).
* Correction d'exposition de données (JIRA et JIRA ).

### Autres 

* Le *drag and drop* d'un fichier sur une pièce jointe de tâche initialise la popup de création du document avec le nom du fichier (JIRA).
* Correction d'une régression introduite en 2.4.3.3 affichant un tableau sans colonnes dans la corbeille de purge (JIRA).

## 2.4.3.6 _15/06/2020_

* L'ajout de composant à une pièce jointe de tâche multivaluée ne peut plus mener à une duplication des références vers les composants déjà attachés à cette pièce jointe (JIRA).

## 2.4.3.7 _19/06/2020_

* Le endpoint ARender permettant de vérifier l'état de la rendition est accessible sans authentification (JIRA).
* Le filtre de vérification du scope peut être désactivé (JIRA).
