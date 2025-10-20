---
title: Les tâches
description: Gérez vos processus métiers ou techniques.
---

:::info

FlowerDocs offre la possibilité de s'intégrer avec n'importe quels moteurs de workflow du marché.

Au sens FlowerDocs, un workflow est un enchaînement logique entre plusieurs classes de tâches où chaque étape correspond à un type de tâche (une classe de tâches).

<br/>
__Exemple :__ ``1. Import Facture`` --> ``2. Validation comptable`` --> ``3. Validation frais généraux`` --> ``4. Paiement``

Ces trois étapes correspondent à trois classes de tâches dont chacune possède deux types de réponses : 

* Valider
* Refuser

:::


# Pièces jointes

Lors du traitement d'une tâche, il peut être nécessaire que l'utilisateur ajoute un ou plusieurs composants.
Ces documents sont appelés des pièces jointes d'une tâche et sont définis de manière globale par classe de tâches. 

Afin d'effectuer des actions sur les pièces jointes, les permissions suivantes peuvent être requises : 

* Ajout de pièce jointe : `CREATE` pour la classe de composants à créer
* Mise à jour du contenu d'une pièce jointe : `UPDATE_CONTENT` pour la classe de composants à créer
* Détachement d'une pièce jointe : `DELETE_CONTENT`

__Note :__ Ces actions ne sont pas possibles si la définition de pièce jointe est en lecture seule. 
 
# Réponses

Lorsqu'un utilisateur a terminé de remplir les informations nécessaires d'une tâche, il a la possibilité de sélectionner une réponse parmi celles proposées.
Ces réponses permettent ainsi à un workflow d'aller dans une des directions proposées.

Afin d'appliquer une réponse sur une tâche, la permission ``APPLY_ANSWER`` est requise.

<br/>
Lors de l'application d'une réponse, il est possible via API ou WS d'ajouter des paramètres qui ne seront pas persistés sur la tâche. 

Ces informations peuvent ainsi être utilisées au sein des abonnements à une opération activés sur la réponse.

# Affectation

Afin d'éditer une tâche, l'utilisateur doit : 

* avoir le droit de mettre à jour la tâche : `UPDATE`
* être affecté au traitement de la tâche 

Afin qu'un utilisateur soit affecté au traitement d'une tâche, plusieurs moyens sont mis à disposition. 
D'un point de vue technique, il suffit de remplir le champ ``assignee`` de la tâche avec l'identifiant de l'utilisateur, du groupe ou de l'équipe auquel assigner la tâche.

## Appropriation

L'appropriation d'une tâche consiste, pour un utilisateur, à s'affecter la tâche à soi-même. 
L'appropriation d'une tâche peut être effectuée si la tâche n'est assignée à aucun utilisateur ou à une équipe dont l'utilisateur connecté ne fait pas partie.
Ce type d'affectation requiert la permission ``APPROPRIATE``.

Il est également possible de s'affecter une tâche étant déjà affectée à un autre utilisateur si l'on dispose de la permission ``APPROPRIATE_ALREADY_ASSIGNED``.

<br/>

Par classe de tâche, il est possible d'<b>activer l'auto-assignation</b>. Ainsi lorsqu'un utilisateur ouvre une tâche non assignée et qu'il dispose du droit ``APPROPRIATE`` ou ``APPROPRIATE_ALREADY_ASSIGNED``, la tâche lui sera automatiquement assignée.

L'auto-assignation sur les classes de tâche est désactivée par défaut.

## Assignation

L'assignation d'une tâche à un utilisateur consiste en l'affectation d'une tâche par un utilisateur A à un utilisateur B.
Ce type d'affectation peut être effectué même si la tâche est déjà assignée à un autre utilisateur.

Ce type d'affectation requiert la permission ``ASSIGN``.

:::info
Pour aller plus loin, consultez quelques références : 

* [Tâche](/javadocs/domain/com/flower/docs/domain/task/Task.html)
* [Classe de tâches](/javadocs/domain/com/flower/docs/domain/taskclass/TaskClass.html)
:::