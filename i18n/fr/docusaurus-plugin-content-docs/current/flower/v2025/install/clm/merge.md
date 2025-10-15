+++
date = "2004-03-21T13:22:01+02:00"
title = "Merge de plusieurs scopes"
description = "Description des règles utilisées pour le merge de scope : quels éléments sont mergés, comportement en cas de conflits..."
+++


:::info
Le paramètre ``force`` permet de déterminer le comportement à adopter en cas de conflits entre les éléments de plusieurs modules :

 * true : les éléments présents dans un module écrasent les éléments du scope initial
 * false (par défaut) : les éléments présents dans un module sont ignorés s'ils sont présents dans le scope initial

L'ordre suivi est l'ordre passé en entrée du CLM.
:::

# Exécution 

Le CLM offre la possibilité de merger plusieurs scopes.

```properties
<clm> merge --template=<template> --modules=<module1>,<module2>
```

<br/>
__Paramètres :__

| Paramètre              | Obligatoire| Description                                                                            |
|------------------------|------------|----------------------------------------------------------------------------------------|
| template               | Oui        | Identifiant du template à construire (nom du dossier de sortie)                        |
| modules                | Oui        | Nom des templates à merger séparés par des virgules                                    |
| force                  | Non        | true ou false *(par défaut : false)*                                                   |



# Règles de merge

D'une manière générale le merge suit les règles suivantes :

 * Si un élément est présent dans un scope et absent dans un autre, il sera présent dans le scope mergé
 * Si un élément est présent dans plusieurs scopes :
    * Certains sous-éléments sont mergés (cf règles détaillées ci-dessous)
    * Les autres propriétés sont soit ignorées soit écrasées si définies, suivant la valeur du paramètre ``force``

## Scope 

Merge des données présentes dans le fichier ``scope.xml``.

Le merge est effectué comme suit :

 * Si un profil est présent dans plusieurs modules, la liste des identités et des propriétés est mergée
 * 2 propriétés avec le même nom mais des valeurs différentes sont vues commes des objets différents


## ACLs

 * La liste des entrées est mergée
 * Dans le cas des ACLs proxy : la liste des ACLs proxy est mergée. Si un ACL proxy est présent dans plusieurs modules, il est ignoré ou écrasé suivant la valeur du paramètre ``force``

## Classes de composants

 * La liste des références de tag et des catégories de tag sont mergées
 * Si une référence de tag est présente pour une même classe dans plusieurs modules, elle est ignorée ou écrasée suivant la valeur du paramètre ``force`` 

### Classes de tâches

 * La liste des pièces jointes et des réponses sont mergées
 * Si une pièce jointe est présente pour une classe dans plusieurs modules, elle est ignorée ou écrasée suivant la valeur du paramètre ``force`` 
 * Si une réponse est présente pour une classe dans plusieurs modules, elle est ignorée ou écrasée suivant la valeur du paramètre ``force`` 

### Classes de dossiers

 * La liste des pièces jointes est mergée
 * Si une pièce jointe est présente pour une classe dans plusieurs modules, elle est ignorée ou écrasée suivant la valeur du paramètre ``force`` 

### Classes de dossiers virtuels

 * La liste des recherches est mergée
 * Si une recherche est présente pour une classe dans plusieurs modules, elle est ignorée ou écrasée suivant la valeur du paramètre ``force`` 

## Classes de tags

 * Si une classe de tags de type "Liste de choix" est présente dans plusieurs modules, les listes de valeurs sont mergées 
 * Les listes de valeurs conditionnelles ne sont pas mergées.

## Composants

 * La liste de tags est mergée
 * Si un tag est présent pour un même composant dans plusieurs modules, sa valeur est ignorée ou écrasée suivant la valeur du paramètre ``force`` 


### Documents

 * Si un document est présent dans plusieurs modules, son contenu est ignoré ou écrasé suivant la valeur du paramètre ``force``

### Dossiers

 * Si un dossier est présent dans plusieurs modules, la liste des pièces jointes est mergée

### Tâches

 * Si une tâche est présente dans plusieurs modules, les listes des pièces jointes et des participants sont mergées

## Catégories de tag

 * Si une catégorie est présente dans plusieurs modules, la liste des tags est mergée

## Processus

 * Si un processus est présent dans plusieurs modules, la liste des classes est mergée
 * Les autres propriétés du processus, notamment la première étape, sont ignorées ou écrasées suivant la valeur du paramètre ``force``

## Faits

 * La liste des faits est mergée
 * Si un fait est présent dans plusieurs modules, il est ignoré ou écrasé suivant la valeur du paramètre ``force``
 
# Exemple 

Le scope GEC contient une classe de tâches ``CourrierATraiter`` avec une pièce jointe de type ``Courrier entrant``. La propriété icone est définie à ``icone_A``.

Le scope CourrierSortant contient une classe de tâches ``CourrierATraiter`` avec une pièce jointe de type ``Courrier sortant``. La propriété icone est définie à ``icone_B``.

<br/>

Le merge est effectué dans l'ordre GEC-CourrierSortant. 

<br/>

Dans tous les cas, en sortie du merge, la classe ``CourrierATraiter`` aura en pièce jointe ``Courrier entrant`` et ``Courrier sortant``, car la liste des pièces jointes est mergée.

Si le paramètre ``force`` est ``false``, l'icone sera définie à ``icone_A``

Si le paramètre ``force`` est ``true``, l'icone sera définie à ``icone_B`` 


# Synthèse
 
| Objet                         | Propriétés surchargées / ignorées  																			| Sous-éléments mergés                       |
|-------------------------------|---------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| Scope                         | Data <br/> Description <br/> Libellés <br/> Langages <br/> Unité organisationnelle <br/> Fichier de règles    | Profils (cf ligne "Profils")              |
| Profils                       | Description <br/> Nom                                                                                         | Identités <br/> propriétés                |
| ACLs                          | Description <br/> Nom                                                                                         | Entrées                                   |
| Toute classe de composants     | Data <br/> Actif <br/> Technique <br/> Desciptions <br/> Libellés <br/> Durée de rétention    				| Référence de tags <br/> Catégories de tag |
| Classes de taches              | Icône <br/> processus 																						| Réponses <br/> Pièces jointes 			|
| Classes de dossiers            | 																								                | Pièces jointes 							|
| Classes de dossiers virtuels   | 																							 					| Recherches 								|
| Classes de tags                | Data <br/> Libellés <br/> Pattern <br/> Recherchable <br/> Type 												| Listes de valeurs 						|
| Tout composant				| Data <br/> Nom 																								| Tags 									 	|
| Dossiers                      | 							 																					| Pièces jointes 							|
| Taches                        | Assigné à <br/> Réponse <br/> Processus																		| Pièces jointes <br/> Participants		 	|
| Documents                     | Contenu <br> Version <br> Libellé de version <br> Id de version <br/> Type mime <br/> id parent				| 											|
| Catégories de tag             | Libellés <br/> Description <br/> Icône <br/> Replié <br/> Aligné <br/> Visible 								| Tags 	  							     	|
| Processus                     | Libellés <br/> Description <br/> Première étape <br/> Style 													| Classes 									|
| Faits                         | Toutes 																										|  										 	|
