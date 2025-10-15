---
date: "2002-01-28T13:20:01+02:00"
title: "Table de décisions"
description: "Réagir à une opération à travers une table de décisions Drools"
related:
  - name : "Le concept d'opération"
    rel: '/documentation/concepts/operation'
  - name : "ContextUtil"
    rel: '/documentation/config/core/appendices/context-util'
---



# Principe

Ce gestionnaire d'opérations s'appuie sur le moteur de règles [Drools](https://www.drools.org/) pour exécuter une table de décisions.
Une table de décisions est un fichier Microsoft Excel composé de deux types de colonnes : 

* les conditions : détermine les cas dans lesquels appliquer une règle 
* les actions  : les actions à exécuter pour une règle donnée

Pour chaque règle définie (ou ligne),  les actions définies sont exécutées si toutes les conditions sont remplies. 

La table de décisions est stockée comme contenu du document utilisé pour configurer l'abonnement à l'exécution d'une opération.

# Conditions & Actions

Les conditions et les actions définies doivent être du code Java compilable au sein de la JVM de FlowerDocs Core.
Pour faciliter leur développement, un objet accessible à travers la variable `util` est mise à disposition dont les méthodes exposées sont listées [ici](broken-link.md).

Afin de contextualiser la prise de décisions dans un contexte, les variables `context` et `component` sont fournies lors de l'évaluation d'une table de décision. Elles peuvent donc être utilisées dans les conditions ou les actions. La variable `context` contient un objet Java API stockant le contexte d'exécution de l'opération.
<br/>
Il est possible de récupérer le composant avant l'action grâce à la méthode `getOld()` disponible sur la variable `context` de type `UpdateComponentOperationContext` ou `TaskOperationContext`.
<br/>
La variable `component` contient le composant (cf. Java API) concerné par l'opération (si disponible).

:::info
Pour définir manuellement ce gestionnaire d'opérations, l'identifiant `com.flower.docs.core.tsp.operation.DroolsOperationHandler` peut être utilisé comme valeur du tag `OperationHandler`.
:::

:::warning
Les gestionnaires d'opérations de type Drools ne supportent pas certains contextes d'exécution :

* sur les objets d'administration (classes de composants, objets de sécurité, etc.)
* à la modification de version d'un documents
:::
