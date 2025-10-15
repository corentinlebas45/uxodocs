---
title: "Textuel"
description: "Utilisez les tags textuels"
sidebar_position: 2
---

# Textuel

Le modèle de données FlowerDocs offre la possibilité de définir des tags textuels : 

* les chaines de caractère `STRING`
* les zones de texte `TEXT`

## Chaînes de caractères

Ce type permet la saisie libre d'une chaîne de caractère.
Sur ce type de tag, il est possible d'ajouter une expression régulière dans l'attribut `pattern` afin de valider la saisie de l'utilisateur.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>NomClient</id>
    <ns2:type>STRING</ns2:type>
    <ns2:pattern>[A-Z]*</ns2:pattern>
</ns2:TagClass>
```

## Texte

Ce type permet la saisie libre dans une zone de texte.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>Commentaire</id>
    <ns2:type>TEXT</ns2:type>
</ns2:TagClass>
```