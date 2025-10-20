+++
date = "2001-02-02"
title = "Les classes de composants"
Description = "Manipuler des classes de composants en JavaScript"
+++

:::info
Les [classes de composants](broken-link.md) définissent des typologies de composants.
Grâce à l'API JS, elles peuvent être manipulées par des scripts pour accéder au modèle de données d'un scope.
:::


# Récupérer une classe de composants

Chaque catégorie de classe de composants peut être manipulée à l'aide de l'API JS à travers un objet spécifique. 
Une instance de cet objet peut être récupérée avec les fonctions suivantes : 

* Classe de documents : ``JSAPI.get().documentClass()``
* Classe de dossiers : ``JSAPI.get().folderClass()``
* Classe de dossiers virtuels : ``JSAPI.get().virtualFolderClass()``
* Classe de tâches : ``JSAPI.get().taskClass()``

<br/>

A partir de cet objet, il est possible de récupérer des classes de composants d'une même catégorie. Pour cela, une fonction `get` est exposée. Elle permet d'interroger en premier lieu le cache côté client. Si une ou plusieurs classes n'ont pas déjà été mises en cache, les services exposés par FlowerDocs Core seront interrogés pour récupérer les classes manquantes.

```javascript
JSAPI.get().documentClass().get(["Document"], 
	function(classes){
		console.info("Success!");
	},
	function(error){
		console.error("Document classes could not be got: " + error);
	}
);
```


# Informations d'une classes de composants

Les classes de composants disposent d'informations utilisées par le Core ou l'interface graphique. Elles peuvent être récupérées à l'aide des fonctions suivantes : 

| Fonctions                                             | Description                                                                                                    |
|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
|getId()                                                | Récupération de l'identifiant de la classe de composants                                                        |        
|getLocalizedDisplayName()                              | Récupération du nom de la classe internationalisé en fonction de la langue de l'utilisateur courant            |        
|getLocalizedDescription()                              | Récupération de la description de la classe internationalisée en fonction de la langue de l'utilisateur courant |        
|getTagReferences()                                     | Récupération des références de tag portées par la classe de composants                                          |        

<!--- Does not work actually
|getDisplayNames()                                      | Récupération des noms de la classe                                                                             |        
|getDescriptions()                                      | Récupération des descriptions de la classe                                                                     |        

Pour les fonctions ``getDisplayNames()`` et ``getDescriptions()``, les retours sont sous la forme de libellé I18N 
--> 
 

# Accès aux références de tags 

Chaque classe de composants détient une liste de [références de tags](broken-link.md). Ces références permettent d'associer des [classes de tags](broken-link.md) à une typologie de composant.

A partir d'une classe de composants, la fonction `getTagReferences()` expose les références de tags sous la forme d'un tableau d'objets. Pour chacun de ces objets, les fonctions suivantes peuvent être utilisées : 


| Fonctions                                             | Description                                                                                                       |
|-------------------------------------------------------|----------------------------------------------------------------------|
|getTagName()                                           | Récupération du nom de la référence de tag                                                                        |        
|getLocalizedDescription()                              | Récupération de la description de la référence internationalisée en fonction de la langue de l'utilisateur courant |        
|getPattern()                                           | Récupération du pattern de la référence de tag                                                                    |        
|getDefaultValue()                                      | Récupération de la valeur par défaut de la référence de tag                                                       |        
|getOrder()                                             | Récupération de la position de la référence de tag                                                                |        
|isMandatory()                                          | Détermine si le tag est obligatoire                                                                               |        
|isMultivalued()                                        | Détermine si le tag est multivalué                                                                                |        
|isReadonly()                                           | Détermine si le tag est en lecture seule                                                                          |        
|isTechnical()                                          | Détermine si le tag est technique                                                                                 |        

