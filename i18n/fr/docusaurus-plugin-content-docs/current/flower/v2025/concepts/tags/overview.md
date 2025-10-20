---
title: Overview
description: Taguez vos composants pour les retrouver plus facilement.
---

Les `tags` sont des métadonnées définies sur un composant permettant de le caractériser et de le retrouver plus facilement. 

Ces métadonnées peuvent être de différents types afin d'assurer une cohérence des données stockées dans FlowerDocs.

<br/>
Une [classe de tags](/javadocs/domain/com/flower/docs/domain/tagclass/TagClass.html) permet de définir la typologie et les caractéristiques d'un tag au sein d'un scope. 
Cette classe de tags s'applique à l'ensemble des tags associés aux composants et est composée des éléments suivants : 

* `id` : identifiant technique du tag
* `displayNames` : nom d'affichage du tag (ex : Nom agence, N° immeuble, etc.) internationalisé
* `searchable` : booléen pour rendre le tag recherchable ou non  
* `type` : type du tag

|Type|Description|
|------|---------------------|
|`STRING`|[Chaîne de caractères](broken-link.md) (ex : référence, nom du client …)|
|`TEXT`|[Champ texte](broken-link.md) (ex : commentaire …)|
|`CHOICELIST`|[Liste de choix](broken-link.md) (ex : type de document …)|
|`ICON`|[Liste d'icônes](broken-link.md) (ex : canal d'entrée …)|
|`FREELIST`|[Liste libre](broken-link.md) (ex : référence liée à un SI externe …)|
|`CONDITIONAL`|[Liste de valeurs conditionnées](broken-link.md) (ex : liste des services en fonction de la direction …)|
|`FLOAT`|[Nombre décimal](broken-link.md) (ex : taux, proportion …)|
|`INT`|[Nombre entier](broken-link.md) (ex : nombre de pièces justificatives …)|
|`CURRENCY`|[Nombre décimal](broken-link.md) limité à 2 décimales (ex : montant …)|
|`DATE`|[Date](broken-link.md) (ex : date d’échéance …)|
|`BOOLEAN`|Case à cocher (ex : secret médical …)|
|`USER`|Lié à un utilisateur de l'annuaire (ex : responsable …)|

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>Identifier</id>
	<ns2:displayNames language="EN">
		<ns3:value>Display name</ns3:value>
	</ns2:displayNames>
	<ns2:displayNames language="FR">
		<ns3:value>Nom d'affichage</ns3:value>
	</ns2:displayNames>
	<ns2:data>
        <owner>owner</owner>
        <creationDate>2017-10-03 23:26:32.169 +0200</creationDate>
        <lastUpdateDate>2017-04-02 11:44:40.909 +0200</lastUpdateDate>
    </ns2:data>
	<ns2:type>TYPE</ns2:type>
    <ns2:searchable>true</ns2:searchable>
</ns2:TagClass>
```

:::info
Ajoutez des tags à vos composants en [référençant une classe de tags](broken-link.md) au niveau d'une classe de composant.
:::