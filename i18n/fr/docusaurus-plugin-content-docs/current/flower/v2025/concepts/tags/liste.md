---
title: Liste
description: Utilisez des tags liés à des listes.
---

Cette section décrit les différents types de tag basés sur une liste : 

* Liste de choix `CHOICELIST`
* Liste d'icônes `ICON`
* Liste libre `FREELIST`

:::warning
Pour des soucis de performance, nous ne préconisons pas l'utilisation de liste de choix ou de liste d'icônes de plus de 1000 valeurs.

Pour tout besoin d'intégration avec des volumétries supérieures, veuillez contacter l'équipe FlowerDocs.

Aussi, FlowerDocs n'affiche que 100 éléments maximum dans la liste même si celle-ci en contient plus.
Il suffit d'affiner la sélection pour afficher les éléments non affichés par défaut.
:::

# Liste de choix

Un tag de type liste de choix permet de restreindre les valeurs possibles d'un tag aux choix définis.

Les valeurs d'une liste de choix affichées au sein de la sélection du tag ou du critère sont triées par ordre alphabétique sur le libellé.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>TypeCourrier</id>
	<ns2:type>CHOICELIST</ns2:type>
	<ns2:allowedValues symbolicName="FactureClient">
		<ns2:displayNames language="FR">
			<ns3:value>Facture Client</ns3:value>
		</ns2:displayNames>
	</ns2:allowedValues>
	<ns2:allowedValues symbolicName="BonDeCommande">
		<ns2:displayNames language="FR">
			<ns3:value>Bon de commande</ns3:value>
		</ns2:displayNames>
	</ns2:allowedValues>
</ns2:TagClass>
```
 

# Liste d'icônes

Un tag de type liste d'icônes est une extension d'une liste de choix pour lesquels il est possible de définir une icône. 


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>Priorite</id>
	<ns2:type>ICON</ns2:type>
	<ns2:allowedValues symbolicName="1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:type="AllowedValueWithIcon">
		<ns2:icon>fa fa-flag black</ns2:icon>
		<ns2:displayNames language="FR">
			<ns3:value>Critique</ns3:value>
		</ns2:displayNames>
	</ns2:allowedValues>
</ns2:TagClass>
```

Si deux icônes doivent être placés côte à côte, il est possible d'utiliser une icône du type : ``stacked(fas fa-exclamation red,fas fa-flag red)``.  


# Liste libre

Un tag de type liste libre est une extension d'une liste de choix sans validation. Ce type de liste permet ainsi la valorisation d'un tag avec des valeurs qui ne sont pas connues de FlowerDocs. 

Les valeurs d’une liste libre affichées au sein de la sélection du tag ou du critère respectent l’ordre d’ajout défini par l’intégrateur.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/tagclass"
	xmlns:ns3="https://flower.com/docs/domain/i18n">
	<id>ReferenceClient</id>
	<ns2:type>FREELIST</ns2:type>
</ns2:TagClass>
```

:::info
Ce type de tag est particulièrement adapté aux intégrations avec des référentiels tiers (par exemple via l'utilisation d'un [lookup](broken-link.md)).
:::