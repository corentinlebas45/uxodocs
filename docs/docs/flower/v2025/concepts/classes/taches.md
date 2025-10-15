---
title: "Tâches"
description: "Les classes de tâches"
sidebar_position: 3
---

# Tâches

:::info
Une classe de tâches permet de définir le modèle de tâche à créer. Ses spécificités sont : 

* une icône (exemple: `fa fa-envelope`)
* un identifiant de workflow
* les réponses possibles  
* les pièces jointes attendues
:::

## Pièces jointes

Lors du traitement d'une tâche, il peut être nécessaire que l'utilisateur ajoute un ou plusieurs composants.
 
Ces composants sont appelés des pièces jointes d'une tâche et sont définis de manière globale par classe de tâches. 

Chaque pièce jointe attendue possède les attributs suivants : 

* un identifiant
* un nom internationalisé
* la définition d'une classe de composants (identifiant et catégorie) 
* une liste de tag : définit précisément les métadonnées des pièces jointes

Ces pièces jointes peuvent être également être caractérisées par les paramètres suivants : 

* **requise** : définit si la pièce jointe doit nécessairement être ajoutée pour valider les modifications apportées à la tâche, requise plus tard ou bien facultative 
* **technique** : définit si la pièce jointe doit être affichée ou non aux utilisateurs
* **multivaluée** : définit si la pièce jointe peut être composée de plusieurs composants. Il est recommandé de ne pas dépasser une limite de 10 composants dans une pièce jointe multivaluée.
* **lecture seule** : définit si les utilisateurs peuvent modifier la pièce jointe (l'aspect lecture seule d'une pièce jointe dépend également des permissions définies au niveau de la tâche)

Pour décrire une pièce jointe, il est possible de définir : 

* une description qui sera affichée au survol (avec la souris) de la pièce jointe
* un résumé affiché sous le nom du composant ajouté comme pièce jointe

## Résumé

Le résumé peut être configuré, par langue du scope, pour afficher les tags du composant attaché (exemple: `${Priority} Créé par ${owner}`)	

Par défaut, le résumé affiche la date de création du composant.

Pour aller encore plus loin, il est possible d'utiliser l'API JS pour définir votre propre résumé.

## Réponses

Les réponses permettent d'orienter les tâches dans une direction proposée par un workflow. 
Chaque réponse possède les attributs suivants : 

* un identifiant
* un nom internationalisé
* un message de confirmation internationalisé

### Réponses avec motif

Il est possible de définir une réponse avec motif de la façon suivante :

```xml
<ns4:answers xsi:type="ns4:ReasonedAnswerDefinition" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<id>Initiate</id>
	<ns4:displayNames language="EN">
		<ns3:value>Send</ns3:value>
	</ns4:displayNames>
	<ns4:displayNames language="FR">
		<ns3:value>Envoyer</ns3:value>
	</ns4:displayNames>
	<ns4:reasons tagName="Matricule" order="0" mandatory="true">
		<ns4:descriptions language="EN">
			<ns3:value>MXXXX - Enter the id of new adherent</ns3:value>
		</ns4:descriptions>
		<ns4:descriptions language="FR">
			<ns3:value>MXXXX - Identifiant du nouvel adhérent</ns3:value>
		</ns4:descriptions>
		<ns4:pattern>^M[0-9]*$</ns4:pattern>
	</ns4:reasons>
	<ns4:reasons tagName="Comments" order="0" mandatory="true" />
	<ns4:targetStatus>INVALID</ns4:targetStatus>
</ns4:answers>
```
	
Pour ajouter un motif avec un pattern, il faut définir les propriétés suivantes :

* `descriptions`, la description internationalisée du tag lorsque l'utilisateur n'a pas encore saisi de valeur dans le champ
* `pattern`, la règle à appliquer 

Par exemple, la règle `^M[0-9]*$` permet d'accepter uniquement les valeurs commençant par `M` et se terminant par des chiffres.

Il est possible d'activer la réponse, même si des tags ou pièces jointes obligatoires manquent en définissant son statut cible à INVALID. 

Sans avoir spécifié le statut cible, la réponse sera activée uniquement si la tâche est valide.