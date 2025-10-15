---
date: "2002-03-28T13:20:01+02:00"
title: "Exécution d'un script"
description: "Réagir à une opération en exécutant un script JavaScript"
related:
  - name : "Le concept d'opération"
    rel: '/documentation/concepts/operation'
  - name : "Graal"
    rel: '/documentation/config/core/appendices/graal'
  - name : "RuleContextUtil"
    rel: '/documentation/config/core/appendices/context-util'
---

# Principe

Ce gestionnaire d'opérations permet de réagir à l'exécution d'une opération en exécutant un script JavaScript.
Le script JavaScript est exécuté à l'aide du moteur [Graal](broken-link.md) embarqué dans la JVM de FlowerDocs Core.

Le script est stocké comme contenu du document utilisé pour configurer l'abonnement à l'exécution d'une opération.

# Variables

## Liées au contexte

L'objet Java API est fourni à travers la variable `context` pour fournir les informations liées au contexte dans lequel l'opération est exécutée.
<br/>
Lorsqu'une opération est exécutée sur un composant (cf. Java API) en particulier, il est fourni à travers une variable `component`.
<br/>
Dans le cas de l'exécution d'une recherche, la requête et la réponse (si disponible) sont fournies respectivement grâce aux variables `request` (cf. Java API) et `response` (cf. Java API).

## Utilitaires

Pour faciliter le développement, un objet accessible à travers la variable `util` est mis à disposition dont les méthodes exposées sont listées [ici](broken-link.md).


[shortcode]
```javascript
var folder = ComponentBuilder.folder().classId('Folder').build();
folder.setName("Dossier " + component.getName());
util.getFolderService().create(Lists.newArrayList(folder));
util.getFolderService().addChildren(folder.getId(), Lists.newArrayList(ReferenceBuilder.from(component)), false);
```
[shortcode]




:::info
Pour définir manuellement ce gestionnaire d'opérations, l'identifiant `com.flower.docs.core.tsp.operation.script.ScriptOperationHandler` peut être utilisé comme valeur du tag `OperationHandler`.
:::