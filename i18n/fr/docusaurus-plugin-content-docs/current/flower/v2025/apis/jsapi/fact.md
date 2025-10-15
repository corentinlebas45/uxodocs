+++
date = "2012-03-28T13:20:01+02:00"
title = "Historique"
description = "Gérer l'historique d'un composant"
+++

:::info
L’historique permet d’afficher les modifications qui ont été effectuées sur un composant depuis sa création. Cet historique peut être manipulé afin de rajouter, modifier ou supprimer des faits.
:::


Un fait permet de tracer une action exécutée sur un composant et ainsi de fournir l'historique d'un composant. 

# Informations d'un fait

Les faits sont composés de plusieurs informations permettant d'identifier de manière précise l'action exécutée et son contexte.

## Identification de l'objet

L'objet sur lequel s'est déroulé un fait peut être identifé à partir du type d'objet et de son identifiant. 

| Fonctions               | Description                            |
|--------------------------------|----------------------------------------|
|getObjectType()                 | Récupération du type d'objet           | 
|setObjectType(String type)      | Modification du type d'objet           |
|getObjectId()                   |Récupération de l'identifiant de l'objet|
|setObjectId(String id)          |Modification de l'identifiant de l'objet|


## Contexte

Afin de fournir des informations sur le contexte dans lequel s'est déroulé un fait, plusieurs informations sont mises à disposition : 

| Fonctions                                  | Description                                                            |
|--------------------------------------------------|------------------------------------------------------------------------|
|getUser()                                         | Récupération de l'utilisateur                                          | 
|setUser(String user)                              | Modification de l'utilisateur                                          | 
|getAction()                                       | Récupération de l'action effectuée                                     | 
|setAction(String action)                          | Modification de l'action effectuée                                     | 
|getDescription()                                  | Récupération de la description                                         | 
|setDescription(String description)                | Modification de la description                                         | 
|getCreationDate()                                 | Récupération de la date d'exécution de l'action                        | 
|setCreationDate(Date date)                        | Modification de la date d'exécution de l'action                        | 



Les actions (cf. Java API) supportées pour les faits sont :

* ``CREATE`` : Création d'un composant
* ``UPDATE`` : Mise à jour d'un composant
* ``VERSION`` : Création d'une version de composant
* ``ASSIGN`` : Assignation d'une tâche à un utilisateur
* ``ADD_CONTENT`` : Ajout d'une pièce jointe pour les tâches, ajout ou mise à jour de contenu pour les documents et ajout de composants dans un dossier
* ``DELETE_CONTENT`` : Suppression d'une pièce jointe pour les tâches, suppression de contenu pour les documents et suppression de composants dans un dossier
* ``REVERT`` : Restaure une version d'un document


## Champs supplémentaires

En plus des informations stockées de manière native dans les faits, des champs supplémentaires peuvent être stockés (ou simplement affichés) grâce à des Java API. 

 


| Fonctions                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|getUpdatedFields()                          | Récupération des champs du faits                                               | 
|setUpdatedFields(ResultField[] fields)      | Modification des champs du fait                                                | 
|addUpdatedField(ResultField field)          | Ajout d'un champ dans le fait                                                  | 
|addUpdatedFields(ResultField[] fields)      | Ajout de plusieurs champs dans le fait                                         |

```javascript
var fact = new Fact();
var field = new ResultField();
field.setName("RefClient");
field.setValue("1234");
fact.addUpdatedField(field);
```

# Ajout de faits

Dans certains contextes métiers, il peut s'avérer nécessaire de construire ses propres faits. Pour cela, plusieurs fonctions sont mises à disposition.

Pour ajouter de nouveaux faits, il est tout d'abord nécessaire d'obtenir une instance de fait avec un des constructeurs suivants : 

| Fonctions                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|new Fact(Component component)               | Création d'un fait à partir d'un composant                                     |
|new Fact()                                  | Création d'un fait vide                                                        |


Afin de modifier l'historique d'un composant, il faut s'abonner à l'ouverture de l'historique :

```javascript
    var factAPI = JSAPI.get().getHelperFactory().getFactAPI();  
    factAPI.register(component.getId(), function(facts, callback){
		//Manipulate facts of component
   });
```

Le tableau `facts` fourni en entrée de l'abonnement contient les faits déterminés de manière native par l'application.
Afin de modifier les faits affichés aux utilisateurs, il est nécessaire de fournir un tableau modifié au `callback` fourni : 


```javascript
    var factAPI = JSAPI.get().getHelperFactory().getFactAPI();  
    factAPI.register(component.getId(), function(facts, callback){
    	var processed = new Array();
		callback.onProcessed(processed);
   });
```

[shortcode]
```javascript
JSAPI.get().registerForComponentChange(function(componentFormAPI, component, phase) {        
	var factAPI = JSAPI.get().getHelperFactory().getFactAPI();
	factAPI.register(component.getId(), function(facts, callback){
		var fact1 = new Fact(component);
		var date1 = new Date("January 15, 2017 11:13:00");
		fact1.setUser(JSAPI.get().getUserAPI().getUserId());
		fact1.setCreationDate(date1.getTime());
		fact1.setAction("UPDATE");
		var field1 = new ResultField();
		field1.setName("RefClient");
		field1.setValue("2018-01-01 12:01:07.006 +0100");
		fact1.addUpdatedField(field1);

		var fact2 = new Fact(component);
		var date2 = new Date("January 16, 2017 11:13:00");
		fact2.setCreationDate(date2.getTime());
		fact2.setDescription("Description for fact2");

		facts.push(fact1);		
		facts.push(fact2);
		callback.onProcessed(facts);
	});
});
```
[shortcode]


<br/>
:::info
Configurer les champs à historiser avec un document de classe ``FactFieldsConfiguration``.
:::