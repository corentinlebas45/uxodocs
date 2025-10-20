+++
 date = "2020-02-01T11:20:01+02:00"
title = "Implémentation"
+++

# Demarrer une session en fonction du contexte

Nous allons configurer le démarrage de la session de traitement. Nous souhaitons que seules les tâches ouvertes depuis les aggrégations `En cours de traitement`  et `A traiter` au sein d'un dossier virtuel entrainent l'ouverture d'une session de traitement. 

Pour cela nous devons connaître la place, au moment de l'ouverture de la tâche, ainsi que l'agrégation sélectionnée si la place est une place de type dossier virtuel.

```javascript
var place = session.getPlace();
var aggregation = place.getSelectedLeaf();
// Une place de dossier virtuel est une BrowsePlace
if(place.getPlaceType().startsWith('Browse') && (aggregation.indexOf('ENCOURS') != -1 || aggregation.indexOf('ATRAITER') != -1 )){
    // l'agrégation sélectionnée au moment de l'ouverture du composant est `En cours de traitement` ou `A traiter` 
}
else{
    // aucune session ne doit être démarrée 
}
```

Nous obtenons donc le script suivant 
```javascript
JSAPI.get().batchSession().registerBuilder(function(session, callback){
  	var place = session.getPlace();
    var aggregation = place.getSelectedLeaf();
	// Une place de dossier virtuel est une BrowsePlace
if(place.getPlaceType().startsWith('Browse') && (aggregation.indexOf('ENCOURS') != -1 || aggregation.indexOf('ATRAITER') != -1 )){
		callback.enable(session);
	}else{
		callback.enable(null);
	}
});
```

# Pour aller plus loin: manipuler la session de traitement

Nous souhaitons maintenant forcer la session à ouvrir uniquement les tâches pour lesquelles la priorité renseignée est la même que celle de la tâche à l'origine de la session. 
Pour cela l'utilisateur pourrait modifier la recherche côté application pour renseigner ce critère de recherche. 
Cependant, il est aussi possible, par configuration, de modifier la [requête de la session](broken-link.md)
 ainsi que d'autres paramètres.

Dans le cadre de notre exemple, nous allons modifier notre requête et lui rajouter le critère de priorité : 
```javascript
    var request = session.getRequest();
  	var filter = new AndClause();
  	var classCriterion = new Criterion();
  	classCriterion.setName('Priorite');
  	classCriterion.setOperator("EQUALS_TO");
  	classCriterion.addValue(session.getComponentSource().getTagValue("Priorite"));
  	filter.addCriterion(classCriterion);
  	request.addFilterClause(filter);
  	session.setRequest(request);
```

Ainsi avec ce script, toutes les tâches ouvertes dans la suite de la session de traitement aurons la même priorité : 
```javascript
JSAPI.get().batchSession().registerBuilder(function(session, callback){
  	var place = session.getPlace();
    var aggregation = place.getSelectedLeaf();
	if(place.getPlaceType().startsWith('Browse') && (aggregation.indexOf('ENCOURS') != -1 || aggregation.indexOf('ATRAITER') != -1 )){
        var request = session.getRequest();
  	    var filter = new AndClause();
  	    var classCriterion = new Criterion();
  	    classCriterion.setName('Priorite');
  	    classCriterion.setOperator("EQUALS_TO");
  	    classCriterion.addValue(session.getComponentSource().getTagValue("Priorite"));
  	    filter.addCriterion(classCriterion);
  	    request.addFilterClause(filter);
  	    session.setRequest(request);
		callback.enable(session);
	}else{
		callback.enable(null);
	}
});
```

:::warning
En modifiant la requête pour ajouter un critère plus restrictif que la place d'origine, lorsque l'utilisateur traite la dernière tâche de cette requête, la session se termine.
:::