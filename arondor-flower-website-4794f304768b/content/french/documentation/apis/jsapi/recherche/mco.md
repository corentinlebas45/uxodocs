+++
date = "2005-03-28T13:20:01+02:00"
title = "Modèle"
description = "Rechercher des composants à travers l'API JS"
+++


Pour rechercher des composants via l'API JS, la fonction ``search`` des différentes API de services est à disposition **[ici](broken-link.md)**.

# Les requêtes, filtres et critères

__Objets :__ 

* ``SearchRequest``


| Fonction                                              | Description                                                                 |
|-------------------------------------------------------|-----------------------------------------------------------------------------|
|addSelect(String field)                                | Ajoute un champ à remonter                                                  |        
|addFilterClause(FilterClause filterClause)             | Ajoute un critère supplémentaire                                            |        
|getFilters()                                           | Récupère un tableau contenant l'ensemble des `FilterClause`                 |
|addOrderClause(OrderClause orderClause)                | Ajoute un champ sur lequel trier les résultats de recherche                 |       
|setMax(int max)                                        | Définit le nombre maximum de résultats à retourner                          |        
|getMax()           	                                | Récupère le nombre maximum de résultats à retourner                         |        
|setStart(int start)                                    | Définit le début de la page de recherche                                    |        
|getStart()                    			                | Récupère le début de la page de recherche                                   |        


* ``AndClause``
 

| Fonction                                             | Description                                                                 |
|------------------------------------------------------|-----------------------------------------------------------------------------|
|addCriterion(Criterion criterion)                     | Ajoute un critère de recherche                                              |        
|getCriteria()                                         | Récupère un tableau contenant l'ensemble des critères de la clause          |        


* ``Criterion``
 

| Fonction                                             | Description                                                                     |
|-------------------------------------------------------|---------------------------------------------------------------------------------|
|getName()                      | Récupère le nom du critère              					                                          |        
|setName(String name)           | Définit le nom du critère                    											              |        
|getOperator()                  | Récupère l'opérateur du critère                                 									  |        
|setOperator(String operator)   | Définit l'opérateur du critère. Les valeurs possibles sont : ``EQUALS_TO``, ``CONTAINS``, ``LESS_THAN``, ``GREATER_THAN``, ``STARTS_WITH``, ``ENDS_WITH``, ``DISPLAY``, ``DIFFERENT``, ``BETWEEN``     										 |        
|getType()                      | Récupère le type du critère                                                                         |
|setType(String type)           | Définit le type du critère. Les valeurs possibles sont : ``STRING``, ``TIMESTAMP``, ``BOOLEAN``, ``INTEGER``, ``CURRENCY`` 									                                                                         |     
|getValues()                    | Récupère les valeurs du critère			                                         	    	    |
|addValue(String value)         | Ajoute une valeur au critère                           										      |        
|addValues(String[] values)     | Ajoute un tableau de valeur au critère                              							      |        

:::info
Les opérateurs ``EQUALS_TO`` et ``DIFFERENT`` sont sensibles à la casse (font une différence entre les majuscules et les minuscules).
:::

# Les tris

* ``OrderClause``

| Fonction                            | Description                                                                    |
|-------------------------------------|--------------------------------------------------------------------------------|
|setName(String name)                 | Définit le nom du champ utilisé                                                |        
|setType(String type)                 | Définit le type du champ :  ``STRING``, ``TIMESTAMP``, ``BOOLEAN``, ``INTEGER``, ``CURRENCY`` |        
|setAscending(boolean isAscending)    | Définit si le tri est ascendant ou descendant                                  |        

   

Construction d'une requête :

```javascript
var request = new SearchRequest();
request.setMax(20);
request.setStart(0);

var orderClause = new OrderClause();
orderClause.setName("creationDate");
orderClause.setType("TIMESTAMP");
orderClause.setAscending(true);
request.addOrderClause(orderClause);

var filters = new AndClause();
request.addFilterClause(filters);

var criterion = new Criterion(); 
criterion.setName("Matricule");
criterion.setType("STRING");
criterion.addValue("P0002095");
filters.addCriterion(criterion);

JSAPI.get().document().search(request, function(results)
	{
		// Simple dump of all results
		console.log("results.length=" + results.length);
		for (var i = 0; i < results.length; i++) 
		{
			var result = results[i];
			console.log("id=" + result.getId() + ", name=" + result.getFieldValue("name"));
		}
		// Jump to first document found
		if ( results.length > 0 )
		{
			var result = results[0];
			var id = result.getId();
			JSAPI.get().getNavigationAPI().goToComponentPlace("DOCUMENT", id);
		}
	},
	function(error){
		console.error("Error on document search: " + error);
	});
```

Il est possible d'obtenir les valeurs d'un résultat de recherche de deux façons différentes : 

* ``getFieldValue(fieldName)`` : Récupère toutes les valeurs existantes pour ce champ sous forme de chaîne de caractères. Si le champ contient plusieurs valeurs, celles-ci sont séparées par le caractère `§`.

* ``getFieldValues(fieldName)`` : Récupère toutes les valeurs existantes pour ce champ sous forme d'un tableau de chaîne de caractères.
