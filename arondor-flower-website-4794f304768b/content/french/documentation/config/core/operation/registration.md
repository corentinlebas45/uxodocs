---
date: "2001-03-28T13:20:01+02:00"
title: "S'abonner à une opération"
description: "Déterminer à quelles opérations réagir"
related:
  - name : "Le concept d'abonnement"
    rel: '/documentation/concepts/operation'
  - name : 'Javadoc'
    class: 'com.flower.docs.operation.api.OperationHandler'
---

# Abonnement

Un abonnement à une opération est un document technique de classe `OperationHandlerRegistration`.
Les tags référencés par cette classe permettent de configurer l'abonnement : 

| Tag |Type| Description |
|-----|----|---------|
|``OperationHandler``|*string*| Classe Java de l'OperationHandler ou l'URL d'un OperationHook|
|``ExecutionPhase`` |*choicelist*|Phase d'exécution de l'opération|
|``Action`` |*choicelist*| Action de l'opération|
|``ObjectType`` |*choicelist*|Type d'objet auquel réagir|
|``Enabled`` |*boolean*| Détermine si l'abonnement est actif ou inactif|
|``Asynchronous`` |*boolean*|Détermine si l'OperationHandler doit être exécuté de manière asynchrone ou non|
|``RegistrationOrder`` |*integer*|Ordonnancer les différents abonnements à une même opération|
|``StopOnException`` |*boolean*| Détermine si l'exécution de l'opération doit être stoppée en cas d'exception (*seulement si synchrone*)|
|``Authorization``|*string*|  chaîne d'autorisations basic à fournir au hook (générée en ligne grâce à [blitter](https://www.blitter.se/utils/basic-authentication-header-generator/))  |

:::warning
Les OperationHandler doivent uniquement être utilisés pour déclencher un traitement particulier en réponse à un évenement déclenché par la GED.

Leur utilisation ne doit pas être détournée pour de la mise à jour de données qui devrait être réalisée par un traitement batch.
:::

# Filtres

## Evaluation des filtres

Pour chaque abonnement à une opération, des filtres d'exécution peuvent être définis à travers un objet Java API. Ces filtres permettent de restreindre les contextes dans lesquels un gestionnaire d'opérations est exécuté. Un abonnement peut ainsi être limité à des composants respectant les critères configurés.

:::info
Pour restreindre le déclenchement d'un processus de facturation aux factures, l'administrateur définit le filtre classe égal à `Bill`.
:::

Les filtres sont évalués en fonction du contexte dans lequel une opération est exécutée. Les données pouvant être utilisées pour filtrer les opérations diffèrent en fonction du type d'opération. 

Une opération exécutée sur un composant expose à travers son contexte le composant concerné. Ainsi ses données (tags, propriétaire, classe...) peuvent être utilisées pour évaluer les filtres définis. Alors que lors de l'exécution d'une recherche, les filtres sont évalués sur ses critères.

:::warning
Les valeurs utilisées dans les filtres ne peuvent pas être des variables (comme ${user.id}, ${user.authorities} ou ${value1}), elles sont résolues comme du texte. 
:::

## Stockage

Les filtres sont stockés à travers un objet Java API. Lors de l'enregistrement, cet objet est sérialisé (XML) et est sauvegardé comme fichier du document utilisé pour définir l'abonnement.
:::warning
Le nommage du fichier contenant les filtres doit être 'request'.
:::

## Spécificités

Certaines opérations permettent l'utilisation de critères particuliers.

### Assignation

Le critère ``Id`` correspond à l'identifiant de l'utilisateur à qui a été assignée la tâche. 
Tandis que le critère ``Assigné à`` correspond à celui de l'utilisateur auquel la tâche était assignée avant l'opération.

### Réponse à une tâche 

Le critère ``Id`` correspond à l'identifiant de la réponse appliquée sur la tâche.

### Contenu d'un dossier

Lors de l'exécution d'une opération portant sur le contenu d'un dossier (ajout ou suppression), le critère ``Id`` correspond à l'identifiant de la classe du composant ajouté ou supprimé du dossier.

### Recherche

Lors d'une recherche, les filtres d'un abonnement permettent de réagir à l'exécution de recherches spécifiques. Les filtres sont ainsi comparés aux critères de la recherche.

Les opérateurs des filtres sont interprétés tels que : 

- ``EQUALS_TO`` : présence du critère dans la requête avec la valeur indiquée.
- ``CONTAINS`` : présence du critère dans la requête avec une valeur contenant la chaîne de caractères indiquée dans le filtre.
- ``STARTS_WITH`` : présence du critère dans la requête avec une valeur commençant par la chaîne de caractères indiquée dans le filtre.
- ``ENDS_WITH`` : présence du critère dans la requête avec une valeur se terminant par la chaîne de caractères indiquée dans le filtre.
- ``DIFFERENT`` : inexistance du critère ou présence avec une valeur différente de  celle indiquée dans le filtre.

Concernant les critères de type Date, des opérateurs spécifiques sont utilisés et résolus tels que : 

- ``GREATER_THAN`` : présence du critère dans la requête avec une valeur supérieure à celle indiquée dans le filtre.
- ``LESS_THAN`` : présence du critère dans la requête avec une valeur inférieure à celle indiquée dans le filtre.
- ``BETWEEN`` : présence du critère dans la requête avec une valeur comprise entre les deux valeurs indiquées.

:::info
- Les opérateurs ``EQUALS_TO`` et ``DIFFERENT`` sont sensibles à la casse.
</br>
- Pour les critères représentant des identifiants d'utilisateurs, la valeur ``${user.id}`` peut être définie. Cette valeur indique l'identifiant de l'utilisateur courant de la session.
:::