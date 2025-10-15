+++
date = "2020-02-01"
title = "Cycle de vie"
Description = "Gestion de version de documents"
+++
:::info
La plateforme FlowerDocs permet la gestion du cycle de vie des documents depuis leur création jusqu'à leur destruction. 
Plusieurs fonctionnalités sont mises en oeuvre afin d'assurer cette gestion du cycle de vie. 
:::

# Les réservations

Une réservation permet de s'approprier temporairement l'accès en écriture d'un composant dans l'interface graphique afin d'éviter les modifications concurrentes.


Un composant est réservé lorsqu'il est ouvert en lecture / écriture par un utilisateur de l'interface graphique.
Si un composant réservé est ouvert par un autre utilisateur, le formulaire est affiché en lecture seule.


Les réservations sont automatiquement supprimées lorsque : 

* l'utilisateur quitte l'écran depuis lequel le composant a été réservé (via une action ou la fermeture de son navigateur)
* sa session expire
* l'utilisateur se déconnecte

Depuis l'interface graphique, les réservations de l'utilisateur courant peuvent être consultées grâce à : 

GET /rest/session/reservations



# La gestion des versions


## Une version

Au cours de la vie d'un document, différentes modifications peuvent être apportées à ses tags ou son contenu. Une version d'un document est l'image à un instant donné d'un document. Elle contient à la fois les tags et les contenus d'un document.

Elle peut être créée manuellement ou automatiquement en fonction de la configuration.

Pour le suivi des différentes versions, chaque version dispose de : 

* Un identifiant unique
* Un libellé


## Le suivi des versions

Le suivi des versions d'un document permet de consulter et gérer les différentes versions d'un document.

### Créer une version

La création d'une version consiste en la sauvegarde de l'état courrant d'un document. La création d'une version peut également être vue comme la promotion du document en tant que version.

### Restaurer une version

La restauration d'une version permet le retour à une version d'un document. Le document, avec ses tags et contenus, est ainsi dans le même état que lorsque la version a été créée.

### Comparer deux versions

La comparaison de deux versions d'un document est possible grâce à la visionneuse de document. ARender permet une comparaison textuelle avec mise en avant des différences afin de faciliter l'identification d'ajout, de modification ou de suppression de texte.


## Les modes de suivi

La configuration du suivi des versions d'un document se fait à l'aide d'un mode de suivi des versions par classe de documents.
Plusieurs modes sont mis à disposition afin de contrôler la manière dont les versions d'un document sont gérées :

* `None` : aucune version n'est stockée
* `Manual` : les versions d'un document sont créées manuellement : par l'interface graphique ou par les APIs exposées
* `Auto` : une version est créée automatiquement à chaque modification du contenu d'un document

:::warning
	La modification du contenu est effective uniquement à la sauvegarde du document et non plus à l'upload d'un contenu
:::

Ce mode est défini par classe de documents afin de configurer la manière dont les versions sont gérées. 

## Libellé de version 

Par défaut, la stratégie `NumberedVersionLabelStrategy` est utilisée à chaque création de version automatique. Elle permet de définir automatiquement le libellé d'une nouvelle version comme une version mineure incrémentée à chaque nouvelle version.

Depuis la popup de consultation des versions d'un document, il est possible de créer manuellement des versions d'un document. Cette action est accessiblement uniquement si le suivi manuel ou automatique est activé et si l'utilisateur a la permission de mettre à jour le contenu. Dès lors [différentes stratégies](broken-link.md)  sont disponibles pour le nommage de versions. 


## Stockage

Les versions d'un document sont stockées et conservées jusqu'à la suppression définitive du document.

Une politique de purge peut être définie afin de réduire le volume de données stockées. 

<!--# Les statuts

## Brouillon

## Live

## Closed-->