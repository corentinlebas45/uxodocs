+++
date = "2005-08-29T13:20:01+02:00"
title = "Obfuscation"
description = "Obfusquer des données sensibles au sein des documents."
+++

# Principe

L'obfuscation permet de masquer des données au sein du contenu d'un document. Cette fonctionnalité s'appuie sur le mécanisme d'annotation de la visionneuse ARender pour : 

* sélectionner les zones ou le texte à masquer
* restituer les zones masquées

Cette fonctionnalité prend tout son sens dans des contextes où des données sensibles sont présentes dans les documents. Ces données peuvent ainsi être masquées à certains utilisateurs en fonction de leurs permissions sur les documents.


# Obfusquer des données

Cette section décrit les moyens permettant de lancer le processus d'obfuscation. 

## Sécurité 

La fonctionnalité d'obfuscation est utilisable si l’utilisateur dispose, sur le document, de la permission `OBFUSCATE` en complément de la permission `CREATE_ANNOTATION`. 

## Depuis l’interface graphique

Depuis la visionneuse de document, l'obfuscation peut être réalisée à travers la sélection : 

* de texte
* d'une zone du document visualisé

La recherche avancée de la visionneuse de documents permet également d'obfusquer tous les résultats trouvés grâce à l'action `Chercher et biffer`.

:::info
Lors d'un téléchargement, le document est converti en PDF avec les annotations de masquage si l'utilisateur n'a pas la permission `OBFUSCATE`.
:::

## REST API

L'obfuscation de chaînes de caractères peut être automatisée à l'aide d'un web service REST. 
Ce web service permet de définir : 

* la chaîne de caractères (ou expression régulière) à obfusquer
* si la chaîne de caractères à obfusquer est une expression régulière
* si la recherche est sensible à la casse
* si la recherche est sensible aux accents

Pour chaque occurrence trouvée, une annotation de type obfuscation est automatiquement créée.

POST <core>/rest/documents/{id}/obfuscations HTTP/1.1
Host: {core}
token: {token}
Content-Type: application/json

{
  "text": "string",
  "accentSensitive": true,
  "caseSensitive": true,
  "regex": false
}

# Accès au contenu d’un document

## Accès concernés

La gestion des obfuscations est assurée de manière transverse par FlowerDocs Core. Tous les points d'accès au contenu d'un document ayant des obfuscations fournissent le contenu en tenant compte des obfuscations et de leur sécurité : 

* visualisation
* téléchargement via FlowerDocs GUI
* accès via les web services

La permission `OBFUSCATE` sur une annotation de type obfuscation permet aux utilisateurs habilités de voir les données obfusquées.
Dans le cas où des données d'un contenu sont obfusquées pour un utilisateur, la génération d'une version PDF est réalisée à la volée à chaque accès.

Le processus d'obfuscation n’implique aucune modification du contenu stocké.


## Génération d'un contenu avec obfuscation

Dans certaines situations, il est nécessaire d'avoir accès au contenu d'un document avec l'ensemble des obfuscations même si l'utilisateur a le droit de voir les données obfusquées.
Pour cela, le web service REST d'accès au contenu d'un document permet de préciser si les obfuscations doivent être incluses.

GET <core>/rest/documents/{id}/files/{file}/content?includeObfuscations=true HTTP/1.1
Host: {core}
token: {token}

Dans le cas où le contenu obtenu inclut des obfuscations, l'en-tête HTTP `X-ALTERED` avec la valeur `true` est ajoutée à la réponse HTTP.
