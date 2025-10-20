+++
 date = "2020-01-01T11:20:01+02:00"
title = "Getting Started"
+++

# Objectifs

A travers ce module, vous allez configurer un exemple de session de traitement démarrable depuis certaines agrégations de dossier virtuel. Cet exemple vous permettra de manipuler la session de traitement afin d'ouvrir uniquement les tâches ayant toutes la même priorité. 
 
# Avant de commencer

Ce tutoriel est basé sur la configuration d'une session de traitement via l'[API JS de FlowerDocs](broken-link.md)

Dans le cadre de ce tutoriel nous nous appuyerons sur les composants suivants : 

* Tag `Priorite` de type `Liste de choix` contenant les valeurs 
	* Urgent
	* Critical 
	* Normal
* Tag `Statut` de type `Liste de choix` contenant les valeurs 
	* `ATRAITER`
	* `ENCOURS`
	* `TRAITE`
*  Tâche de classe `Courrier` contenant les tags `Priorite` et `Statut`
*  Dossier virtuel `Courriers` dont la recherche est configurée comme suit : 
	* Identifiant : `SearchMails`
	* Nombre de résultats : `100`
	* Agrégation : `Statut`
	* Cocher : `Priorite`
	* Catégorie : `Tâche`
	* Critère : `Classe égale à Courrier` 
	
:::info
Afin de faciliter l'accès au dossier virtuel, ajoutez le en onglet. 
:::	