---
date: "2009-03-28T13:20:01+02:00"
title: "Indexation du contenu"
description: "Indexer le contenu des documents."
---

# Principe

Ce gestionnaire d'opérations permet d'indexer le contenu des documents textuels.
Ce traitement est nécessaire pour l'utilisation des recherches plein texte en se basant sur le critère `content`.

Cette opération peut être activée sur les actions `CREATE` et `ADD_CONTENT`.

:::info
Pour définir manuellement ce gestionnaire d'opérations, l'identifiant `com.flower.docs.core.tsp.operation.fulltext.FullTextOperationHandler` doit être utilisé comme valeur du tag `OperationHandler`.
:::

# Utiliser une librairie externe

Il est possible d'appeler un hook externe permettant l'indexation de contenu utilisant une librairie différente de Tikka qui est celle utilisée en fonctionnement interne de FlowerDocs. Pour ce faire, il est possible d'ajouter l'url du hook externe et des types mimes spécifiques sur lesquels il sera appelé. 

<br/>
L'url du hook externe peut être construit comme suivant : `http://{ip de la machine host}:{port}/{route}`, par exemple : http://25.42.62.95:3079/fullText/indexation.

:::info
Sachant que le jeton utilisateur est transmis automatiquement à ce hook externe : le pré-requis pour pouvoir utiliser une librairie externe est d'avoir une authentification par jeton.
:::