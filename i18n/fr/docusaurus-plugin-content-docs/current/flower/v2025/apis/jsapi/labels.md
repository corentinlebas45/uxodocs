---
title: Libellés
---

:::info 
   Cette section a pour but de décrire comment surcharger les libellés provenant du produit. 
	
   <br/>
   
   Afin d'effectuer cette surcharge, l'API suivante est à disposition : 

```javascript
JSAPI.get().getLabelsAPI();
```

<br/>

Cette fonctionnalité est également disponible en surchargeant une partie des libellés via des fichiers de propriétés. La documentation concernant cette partie est disponible [ici](broken-link.md).

:::


# Modification des libellés

Cette API permet la modification des libellés natifs. Pour cela, il est nécessaire de s'abonner à la récupération des libellés à partir du serveur : 

```javascript
var api = JSAPI.get().getLabelsAPI();
api.registerForLoad(function(language, callback){
   callback.onSuccess();
});
```

Au sein de l'abonnement, il est ensuite possible de modifier les libellés natifs : 


```javascript
var api = JSAPI.get().getLabelsAPI();
api.registerForLoad(function(language, callback){
	api.setLabel("home", "Tableau de bord");
	callback.onSuccess();
});
```

Pour récupérer l'ensemble des libellés à disposition : 


```javascript
var api = JSAPI.get().getLabelsAPI();
api.registerForLoad(function(language, callback){
	console.info("labels: "+api.getLabelsNames());
	callback.onSuccess();
});
```


# Utilisation des libellés

Afin de modifier ou récupérer des libellés existants, les fonctions suivantes sont à disposition : 


| Fonction                                                               | Description                                                                      |
|------------------------------------------------------------------------|----------------------------------------------------------------------------------|
|getLabel(String labelName)                                              | Récupère la valeur d'un libellé                                                  |        
|getLabelWithParams(String labelName, Object... params)                  | Récupère la valeur d'un libellé ayant des paramètres en entrée                   |
|getLabelWithPlural(String labelName, int pluralCount, Object... params) | Récupère la valeur d'un libellé ayant des paramètres en entrée en prenant l'application du pluriel ou non avec la valeur du paramètre ``pluralCount``                                                                                                    |