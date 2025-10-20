+++
date = "2001-02-02"
title = "Scope"
description = "Isolez vos clients / métiers."
+++

:::info
Les scopes permettent d'isoler les données entre différents clients / métiers tout en utilisant une même plateforme.
:::



Un scope définit un silo applicatif en isolant ses données et sa configuration. A ce titre, il définit : 

* les équipes d'utilisateurs 
* les utilisateurs pouvant accéder à celui-ci
* les langues utilisées


<br/>



Afin de se connecter à un scope, il est nécessaire de renseigner son identifiant comme paramètre d'URL (par exemple : ``https://flowerdocs.com/gui?scope=GEC``. <br/>
Si FlowerDocs est derrière un proxy, l'utilisation d'une en-tête HTTP `scope` permet de rediriger l'utilisateur vers FlowerDocs GUI  avec le paramètre d'URL `scope` et la valeur fournie. 

<br/>

Si le paramètre n'est pas renseigné, le scope par défaut défini avec la propriété ``scope.default`` dans le fichier de configuration ``gui.properties``  est utilisé.

<br/>
 Il est possible d'afficher la sélection du scope sur la page de login en configurant la propriété ``scope.edit`` dans le fichier de configuration ``gui.properties``.
	
	
:::info
L'autorisation de l'accès à un scope est déterminée par la permission de lecture sur la liste de contrôle d'accès définie au niveau du scope. Plus de détails sur ce mécanisme peuvent être consultés [ici](broken-link.md).
:::