---
title: Buckets
description: Gérer l'organisation des résultats de recherche avec les buckets
---

# Manipuler les buckets

Les buckets (ou résultats d'agrégation) d'une recherche peuvent être organisés en utilisant l'API JS.

## Abonnement

La première étape, avant de pouvoir manipuler ces buckets, consiste en l'abonnement à la récupération de buckets à partir de FlowerDocs Core :

* soit par recherche en fournissant `searchId` l'identifiant de la recherche concernée : 

```javascript
var bucketAPI = JSAPI.get().getHelperFactory().getBucketAPI();
bucketAPI.register(searchId, function(buckets, callback){
	callback.onProcessed(buckets);
});
```

* soit pour toutes les recherches :

```javascript
var bucketAPI = JSAPI.get().getHelperFactory().getBucketAPI();
bucketAPI.register(, function(buckets, callback){
	callback.onProcessed(buckets);
});
```

L'abonnement enregistré est appelé avec deux variables : 

* Le tableau `buckets` contient l'ensemble des buckets d'un même niveau 
* Le `callback` fourni en entrée de l'abonnement doit être appelé avec un tableau de bucket  

```javascript
var orderMap = {};
orderMap[STATUT_1] = 0;
orderMap[STATUT_2] = 1;

var bucketAPI = JSAPI.get().getHelperFactory().getBucketAPI();
bucketAPI.register("searchId", function(buckets, callback){
    var ordered = new Array();
	for(i in buckets){
		var bucket = buckets[i];
		var index = getBucketIndex(bucket);
        ordered[index] = bucket;
    }
	callback.onProcessed(ordered);
});

function getBucketIndex(bucket){
	var request = bucket.getRequest();
    var filter = request.getFilters()[0];
    var statusName = filter.getCriteria()[0].getValues()[0];
	return orderMap[statusName];
}
```

:::info
Le fait de supprimer ou d'ajouter des buckets n'est pas supporté. Le nombre total de bucket déterminé doit être égal à celui déterminé par FlowerDocs Core.
:::

## Modification d'un bucket

L'API JS permet de modifier les buckets résolus par FlowerDocs Core en exposant les méthodes suivantes : 

|Fonction							| Description		|
|-----------------------------------|-------------------|
|getName()							| Retourne le nom 	|
|setName(name)						| Modifie le nom	|
|getCount()			 				| Retourne le nombre de composants contenus dans le bucket (somme des buckets fils) |
|setCount(long count)				| Modifie le nombre affiché de composants contenus dans le bucket |
|getLevel()							| Retourne le niveau de bucket |
|hasChildren()						| Détermine si le bucket contient des buckets fils |
|getChildren()						| Récupère les buckets fils |
|hasParent()						| Détermine si le bucket a un bucket parent |
|getParents()						| Récupère les buckets parents (tous les niveaux parents) |
|getRequest()						| Récupère la requête exécutée pour déterminer le contenu du bucket |
|setRequest(SearchRequest request)	| Modifie la requête exécutée pour déterminer le contenu du bucket |

:::info
Les buckets fils et parents sont fournis à titre indicatif. Les modifications apportées à ceux-ci ne sont pas prises en compte.
:::


## Masquer un bucket

La fonction `setSkipDisplay(boolean skip)` est également exposée sur l'objet `Bucket` permettant de masquer un bucket et n'afficher que ses fils.


```javascript
var bucketAPI = JSAPI.get().getHelperFactory().getBucketAPI();
bucketAPI.register(function(buckets, callback){
	var ordered = new Array();
	for(i in buckets){
		var bucket = buckets[i];			
		if(bucket.hasChildren() && bucket.getChildren().length ==1){
			if(bucket.getName().toUpperCase() == bucket.getChildren()[0].getName().toUpperCase()){
				bucket.setSkipDisplay(true);
			}
		}	
		ordered.push(bucket);	
	}
	callback.onProcessed(ordered);	
});
```

# Récupération des buckets après résolution

Il est possible de récupérer les buckets d'une recherche après résolution de la façon suivante : 

```javascript
var bucketAPI = JSAPI.get().getHelperFactory().getBucketAPI();
bucketAPI.registerForResolved("searchId", function(buckets){
   for(i in buckets){
       	var bucket = buckets[i];
		console.info(bucket.getName()+ " has been resolved, count=" +bucket.getCount());
   }
   callback.onProcessed(buckets);
});
```

Ceci permet d'obtenir les buckets résolus, notamment les compteurs dans le cas de buckets partiels.