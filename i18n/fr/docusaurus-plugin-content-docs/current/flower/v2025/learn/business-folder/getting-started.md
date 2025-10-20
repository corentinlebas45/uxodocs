---
title: Getting started
---

# Objectifs

Quand vous aurez terminé ce module de formation, vous pourrez :

* Définir une classe de dossier virtuel,
* Agréger le contenu d'un dossier virtuel à partir d'un tag pivot,

<!--
* Action de création si permission `UPDATE_CONTENT`,
* Vue tabulaire ou ARender (si document),
* Switcher de mode (avec explication des feuilles selon le mode).
-->

# Définition

Un dossier virtuel est un dossier pour lequel le contenu (ou les enfants) est résolu de manière dynamique. Aucun lien physique n'existe entre le dossier virtuel et ses enfants.

<br/>

Ces enfants sont déterminés à partir d'une ou plusieurs recherches définies au niveau de la classe du dossier virtuel. Ces recherches peuvent contenir des critères avec des variables afin que les résultats de recherches dépendent des tags du dossier virtuel ou de l'utilisateur connecté.

<br/>
Ainsi deux dossiers virtuels de classe `DossierClient` peuvent avoir des contenus différents en ajoutant un critère `ReferenceClient` avec la valeur `${tags.ReferenceClient}`. Lors de l'affichage d'un dossier virtuel, la variable `${tags.ReferenceClient}` sera remplacée par la valeur du tag `ReferenceClient` du dossier virtuel.

# Prérequis

Pour ce tutoriel, un scope avec le module `learn` est conseillé.