+++
date = "2020-03-07T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

# Evolutions

## Administration

* Administration des réponses de tâches ayant un motif (JIRA).
* Accès facilité à l'administration Kibana depuis l'administration des rapports FlowerDocs (JIRA).

## ARender 

* Montée de version ARender : 4.0.8-10922-10986 (JIRA).
* Les actions disponibles pour les annotations correspondent uniquement aux actions possibles par l'utilisateur (JIRA)
* La réponse à une annotation n'est possible que si l'utilisateur a le droit de créer des annotations (JIRA). 
* L'erreur lors de la mise à jour d'une annotation non autorisée ne bloque pas les futures mise à jour d'annotation (JIRA).

## Exploitation 

* **Montée de version :**
	* ARender : 4.0.4-2 à 4.0.8-10922-10986 (JIRA). 
	* ImageMagick :  6 à 7 et +  (JIRA). [Prérequis ARender Rendition](https://arender.io/doc/actuelle4/documentation/install/rendition/prerequis.html#configuration-logicielle-requise)
* Les logs ARender sont écrits dans un fichier dédié (JIRA). 
* Les logs dans un fichier ou dans la console sont désactivables (JIRA).

## Sécurité 

* Support des sous domaines LDAP (JIRA). 
* Sécurisation de la redirection après authentification (JIRA). 

## GUI

* Export des résultats de recherches de façon asynchrone pour de meilleures performances (JIRA).

## Ergonomie

* Amélioration de l'affichage des tableaux de résultats de recherches
* Un message plus explicite est affiché lorsqu'un utilisateur essaie de télécharger un dossier sans contenu (JIRA). 

# Corrections

* Initialisation des classes de tâches en tant qu'administrateur avec le connecteur FileNet (JIRA).
* La sélection du dossier parent d'un document permet de sélectionner uniquement un dossier parent (JIRA). 
* Dans un tableau de résultat, l'identifiant d'une valeur de condition sans label internationalisé est affiché à la place d'une valeur vide (JIRA).   
* Les recherches sauvegardées dans une version 2.3 permettent d'afficher les mêmes colonnes dans cette version (JIRA).  
* Le scroll dans l'administration des configurations est fonctionnel (JIRA).

# Correctifs 

## 2.4.4.1 _04/05/2020_

* Lors du renommage d'une recherche sauvegardée, le nombre d'éléments par page n'est plus affiché (JIRA). 
* La détection de type mime lors du téléchargement du contenu d'un document n'est plus sensible à la casse (JIRA). 
* Correction d'un conflit de version pour les librairies de _logging_ pour la webapp ARender (JIRA). 
* L'application FlowerDocs Core démarre correctement avec la configuration du cache en mémoire (JIRA). 

## 2.4.4.2 _13/05/2020_

* Les annotations d'obfuscation peuvent être supprimées (JIRA). 
* La suppression de toutes les annotations d'un document ne garde plus une entrée vide en cache (JIRA). 

## 2.4.4.3 _13/05/2020_

* **Montée de version :** ARender : 4.0.8-10922-10986 à 4.0.8-10922-10986-11110-10793-1 (JIRA). 

## 2.4.4.4 _19/05/2020_

* Le _parsing_ d'annotations ayant du contenu `RichText` malformé ne bloque plus l'affichage des annotations (JIRA). 
* L'annotation d'obfuscation de zone est désactivée (JIRA).
* **Montée de version :** ARender : 4.0.8-10922-10986-11110-10793-1 à 4.0.8-11145 (JIRA, JIRA). 

## 2.4.4.5 _25/05/2020_

* **Montée de version :** ARender : 4.0.8-11145 à 4.0.8-11145-2 (JIRA). 
