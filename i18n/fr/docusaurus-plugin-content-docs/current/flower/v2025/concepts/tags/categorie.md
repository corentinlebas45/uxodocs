+++
date = "2018-04-07T13:20:01+02:00"
title = "Catégories"
description = "Organisez les tags par catégorie."
+++

Les catégories de tags permettent de regrouper, à l'affichage, des tags ayant un lien logique.

<br/>
Chaque catégorie de tag permet de définir : 

- `id` : identifiant de la catégorie
- `displayNames` : libellés internationalisés
- `tags` : tags contenus dans la catégorie
- `icon` : icône basé sur la police d'écriture FontAwesome (exemple : ``fas fa-star``)
- `description` : description qui sera affichée à l'utilisateur
- `reduced` : indique si la catégorie est repliée par défaut


Pour être affichée, une catégorie doit être reliée à une classe de composant. 

:::info
Les tags définis dans une catégorie et non-référencés au niveau de la classe du composant ne sont pas affichés sur le formulaire d'indexation.
:::

[shortcode]
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns3:TagCategory icon="flower-button header-icon fa fa-envelope flat-purple"
	description="Renseignez les informations d'identification du pli" visible="true" inline="false" reduced="false"
	xmlns="https://flower.com/docs/domain/common" xmlns:ns2="https://flower.com/docs/domain/i18n"
	xmlns:ns3="https://flower.com/docs/domain/componentclass">
	<id>InfoCourrier</id>
	<ns3:displayNames language="FR">
		<ns2:value>Informations concernant le courrier</ns2:value>
	</ns3:displayNames>
	<ns3:displayNames language="EN">
		<ns2:value></ns2:value>
	</ns3:displayNames>
	<ns3:tags>DateCourrier</ns3:tags>
	<ns3:tags>ObjetCourrier</ns3:tags>
</ns3:TagCategory>
```
[shortcode]
