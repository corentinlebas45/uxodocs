---
date: "2018-03-01T12:20:01+02:00"
title: "Overview"
description: "Vue générale des classes de composants"
related:
  - name : 'Javadoc'
    class: 'com.flower.docs.domain.componentclass.ComponentClass'
  - name : 'Swagger'
    rest: 'Classes'
---


Une classe de composants définit les caractéristiques communes d'un même ensemble logique de composants. Ces ensembles sont caractérisés par des [tags](broken-link.md) (ou métadonnées), une sécurité, des règles métiers ou techniques qui leur sont propres.   


Cette partie définit la notion de classe de composants utilisée pour caractériser les composants (documents, dossiers, tâches...) manipulés au sein de l'application.
Ainsi tout composant référence une classe de composants via son identifiant.

:::warning
Lors de la définition des identifiants, il est préconisé d'utiliser uniquement : les caractères alphanumériques, "-" et "_" (les espaces ne sont pas préconisés). <br/>
Regex : `^[a-zA-Z0-9-_]$`<br/>
Cette préconnisation est une obligation pour toutes les versions supérieures à la 2.6 de FlowerDocs. 
:::

<br/>
Une classe de composants permet de définir une typologie de composant : 

* les tags pouvant être associés à un composant
* la sécurité par défaut à appliquer via la définition d'un identifiant d'ACL à appliquer
* les catégories de tags afin de regrouper visuellement les tags au sein de blocs fonctionnels
* des libellés internationalisés afin de fournir une application multilingue
* le caractère technique


*En fonction de la catégorie de la classe de composants, des spécificités peuvent être ajoutées.*  