+++
date = "2018-03-07T13:22:01+02:00"
title = "Conditionnel"
description = "Conditionnez les listes associées à vos tags en fonction du contexte."
+++

Le type ``CONDITIONAL`` permet de définir des conditions sur les différents choix (ou ensembles de choix) proposés à l'utilisateur dans les formulaires d'indexation ou de recherche.

Les objets Java API supportant plusieurs conditions peuvent être définis pour un choix donné. Dans ce cas, il suffit qu'une condition soit satisfaite pour que le choix soit proposé à l'utilisateur .

# Conditions sur les tags

Les conditions peuvent porter sur les tags d'un composant ou d'un formulaire de recherche. _Elles se composent d'un identifiant, d'un opérateur et d'une valeur._ 

Afin d'identifier le tag sur lequel porte la condition, il est nécessaire d'utiliser une chaîne de caractères du type `${tags.<tag_id>}` où `<tag_id>` est l'identifiant du tag.

Pour les tags, les opérateurs `==` ou `!=` peuvent être utilisés pour indiquer respectivement la présence ou la non-présence d'une valeur.

Typiquement les différents types de condition supportés pour les tags sont les suivants : 


* `${tags.<tag_id>}==X` : Tag existant et contenant (au moins) la valeur _X_
* `${tags.<tag_id>}!=X` : Tag inexistant ou ne contenant pas la valeur indiquée par _X_


:::info
Ces conditions s'appliquent seulement sur des tags affichés dans le formulaire d'indexation ou de recherche.
:::

:::warning
Les tags ``CONDITIONAL`` ne s'utilisent pas en multivaluée sinon les conditions de chaque valeur s'annulent.
:::

:::warning
Attention, il n'est possible de définir un tag conditionnel que sur deux niveaux uniquement.
Seul le premier niveau comporte des balises de type `ConditionalAllowedValue`, le niveau inferieur comporte uniquement des balises de type `allowedValues`.


De plus, le symbolicName de chaque balise `allowedValues` doit être unique.
:::

[shortcode]
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TagClass xmlns="https://flower.com/docs/domain/tagclass" xmlns:ns4="https://flower.com/docs/domain/i18n">

	<id>B_ServiceDestinataire</id>
	<ns2:type>CONDITIONAL</ns2:type>
    <ns2:allowedValues xsi:type="ns2:ConditionalAllowedValue" symbolicName="SERVICE" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	    <ns2:allowedValues symbolicName="NA">
	        <ns2:displayNames language="EN">
	            <ns3:value>--Undefined department--</ns3:value>
	        </ns2:displayNames>
	        <ns2:displayNames language="FR">
	            <ns3:value>--Service indéfini--</ns3:value>
	        </ns2:displayNames>
	    </ns2:allowedValues>
	    <ns2:allowedValues symbolicName="ERROR">
	        <ns2:displayNames language="EN">
	            <ns3:value>Error</ns3:value>
	        </ns2:displayNames>
	        <ns2:displayNames language="FR">
	            <ns3:value>Erreur</ns3:value>
	        </ns2:displayNames>
	    </ns2:allowedValues>
	    <ns2:conditions>${tags.B_DirectionDestinataire}==00NA</ns2:conditions>
    </ns2:allowedValues>

</TagClass>
```
[shortcode]