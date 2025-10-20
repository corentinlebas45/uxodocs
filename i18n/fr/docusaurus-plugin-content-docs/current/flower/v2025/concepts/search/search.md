---
title: Recherches
description: Profitez de la richesse de FlowerDocs
---

Les capacités de FlowerDocs en terme de recherche permettent d'exploiter au maximum le fond documentaire tout en conservant l'ergonomie requise par les utilisateurs finaux.

<br/>
Les fonctionnalités classiques de recherche d'une GED sont exposées dont : 

* la sélection des champs à afficher
* des filtres de recherches
* un tri sur les métadonnées
* la pagination des résultats
* etc...

_Plus de détails peuvent être consultés sur [la documentation technique](broken-link.md)_

:::infoIl est préconisé d'utiliser au maximum 20 critères sur une recherche.:::

Il est possible d'enregistrer des recherches et de les partager entre les différents utilisateurs de FlowerDocs.

:::warning
La recherche renvoie un maximum de 10 000 résultats, une erreur est générée en paginant au delà de cette limite. Ce fonctionnement est identique via l'interface utilisateur et les web services.
:::

# Recherche rapide

Dans un formulaire de recherche, il est possible de configurer la recherche rapide. Celle-ci permet de lancer une recherche sur plusieurs tags et données simultanément. Si le champ Recherche rapide contient la valeur recherchée "{mot A}", alors la recherche remontera tous les composants pour lesquels un des tags configurés (nom, tags, etc.) contient le mot A.

<br/>
Des spécificités sont à prendre en compte concernant l'utilisation de la recherche rapide :

* La recherche de plusieurs mots séparés par un espace recherche tous les composants contenant au moins un de ces mots. Rechercher "{mot A} {mot B}" remonte donc les composants contenant les mots A et B, ainsi que les composants contenant uniquement le mot  A ou uniquement le mot B.
* Lorsque la recherche porte sur le champ `Contenu`, alors les spécificités propres à la [recherche plein texte](broken-link.md) sont appliquées

# Recherche plein texte

Dans FlowerDocs, il est possible de configurer une recherche plein texte. Celle-ci permet à un utilisateur de faire une recherche sur le contenu d'un document plutôt que sur ses métadonnées.
Dans un formulaire de recherche, il est ainsi possible d'ajouter le critère "Contenu" pour effectuer une recherche plein texte.

<br/>
La recherche plein texte se base sur le fonctionnement de la recherche OpenSearch, voici quelques spécificités concernant l'écriture des éléments recherchés :

* L'ordre des mots dans la recherche n'a pas d'importance
	* Rechercher la valeur suivante "{mot A} {mot B}" remonte les documents contenant les mots A et B, quelque soit soit l'emplacement des mots A et B dans le contenu
* Il existe des opérateurs AND, OR et NOT, qui permettent de spécifier ce que l'on cherche :
	* Rechercher "{mot A} {mot B}" remonte les documents contenant les mots A et B, mais pas ceux contenant uniquement le mot  A, le mot B ou ne contenant ni A ni B
	* Rechercher “{mot A} OR {mot B}” remonte les documents contenant le mot A, le mot B ou les deux mots, mais ne remonte pas les documents ne contenant aucun des deux mots.
	* Rechercher “{mot A} AND NOT {mot B}” remonte les documents contenant le mot A, mais ne contenant pas le mot B

:::warning
Les caractères +, -, =, ||, >, <, !, (, ),{, }, [, ], ^, ", ~, *, ?, :, \ et / ne doivent pas être utilisés dans la recherche plein texte. Pour rechercher un document contenant le nom "Jean-Pierre", utilisez la recherche "Jean Pierre".
:::
	
:::infoLa recherche plein texte fonctionne uniquement sur les documents dont le contenu a été préalablement indexé. L'indexation du contenu se fait à l'aide d'un [abonnement à une opération](broken-link.md).:::