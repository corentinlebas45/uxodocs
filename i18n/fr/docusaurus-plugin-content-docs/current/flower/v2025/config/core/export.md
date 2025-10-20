---
title: Export des résultats
Description: Export des résultats de recherche
---

Cette partie concerne la configuration du téléchargement des résultats de recherche au format CSV. 

# Présentation
Les utilisateurs ont la possibilité, depuis les résultats de recherche, de télécharger cette liste au format CSV. L'ensemble des tags utilisés pour la recherche, y compris les tags techniques non visibles, est exporté au sein du fichier.

:::warning
Pour les tags de type `USER`, ce sont les identifiants des utilisateurs qui sont exportés.
:::

# Configuration

Les configurations suivantes sont possibles et à paramétrer au sein du fichier `core.properties` :

| Nom de la propriété           			  | Description                               					 | Valeur par défaut  		 |
|---------------------------------------------|--------------------------------------------------------------|---------------------------|
|`search.export.hiddenColumns`     	  |Colonnes à exclure du ficher CSV    							 |`context,acl,status`  |
|`search.export.separator`     		  |Séparateur utilisé entre les colonnes  						 |`;`       				 |
|`search.export.multivalued.separator`|Séparateur utilisé entre les valeurs des tags multi-valués    |`,`     					 |
|`search.export.fileEncoding`     	  |Encodage du fichier    										 |`windows-1252`          |