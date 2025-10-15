+++
date = "2007-03-28T13:20:01+02:00"
title = "Utilisateur"
+++


Une API JS permet d'obtenir des informations concernant les utilisateurs : 

```javascript
JSAPI.get().getUserAPI();
```

# Obtenir un objet utilisateur

Pour obtenir un objet utilisateur deux méthodes sont mises à disposition :

* Utilisateur courant : 

```javascript
JSAPI.get().getUserAPI().getCurrentUser();
```

* Autre utilisateur : 

```javascript
JSAPI.get().getUserAPI().getUser("kta", function(user){ 
	console.log("user: "+ user.getId())
});
```
<br/>

| Fonctions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getScope()                                             | Récupération du scope auquel l'utilisateur est connecté                        |        
|getCurrentUser()                                       | Récupération de l'utilisateur courant                                          |
|getUser(String id, UserCallback closure)                                   | Récupération d'un utilisateur par son identifiant                              |
|addAttribute(String name, String[] values)                              | Ajout d'un attribut pour l'utilisateur connecté                                |        
|removeAttribute(String name)                                  | Suppression des valeurs d'un attribut de l'utilisateur connecté                |        



# Informations d'un utilisateur

Les fonctions listées ci-dessous peuvent être appelées sur un objet utilisateur. 


| Fonctions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getId()                                                | Récupération de l'utilisateur                                                  |        
|getDisplayName()                                       | Récupération du libellé de l'utilisateur                                       |        
|getFirstName()                                         | Récupération du prénom de l'utilisateur                                        |        
|getLastName()                                          | Récupération du nom de famille de l'utilisateur                                |        
|getProfiles()                                          | Récupération des équipes auxquelles appartient l'utilisateur                   |        
|getGroups()                                            | Récupération des groupes auxquels appartient l'utilisateur                     |       
|getMail()                                              | Récupération de l'adresse email de l'utilisateur                               | 
|getAttributeValue(String name)                                | Récupération de la valeur d'un attribut de l'utilisateur                       |              
|getAttributeValues(String name)                               | Récupération des valeurs d'un attribut de l'utilisateur                        |        

:::warning
Le token n'est plus remonté lors de la récupération des utilisateurs par FlowerDocs GUI afin d'éviter une utilisation par un individu malveillant de celui-ci.
<br/>
Il est tout de même possible de remonter le token de l'utilisateur lors de la récupération des utilisateurs par FlowerDocs GUI par configuration. Pour celà, il est nécessaire d'ajouter dans le fichier `gui.properties` la propriété suivante : 
`user.expose-token=true` 

:::


# Assignee Provider

Un `Assignee Provider` permet de fournir à la GUI un callback exécuté lorsqu'un utilisateur recherche un utilisateur auquel assigner une tâche. Par défaut, l'ensemble des utilisateurs sont remontés.

Dans certaines situations métiers, il peut être nécessaire de filtrer ces utilisateurs. Pour cela, l'API Utilisateur met à disposition la fonction : 

```javascript
var userAPI = JSAPI.get().getUserAPI();
userAPI.registerAssigneeProvider(function(tasks, key, callback){
});
```

<br/>

Paramètres de la fonction :

| Paramètre                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|tasks                                                  | Liste des tâches sur lesquelles l'assignation est effectuée                    |        
|key                                                    | Saisie de l'utilisateur                                                        |        
|callback                                               | fonction de callback exécutée                                                  |        

2 méthodes sont disponibles pour appeler le callback :

 * *callback.provide(users)* - doit être appelé avec un tableau d'objet `User`.
 * *callback.na()* - ne pas filtrer les utilisateurs.

<br/>

:::info
Dans le cas d'une assignation effectuée à partir d'une recherche, le paramètre `tasks` est construit à partir des résultats de recherche. Ils ne comportent pas les tags qui ne sont pas présents dans l'objet SearchResult associé et sont donc dépendants du formulaire de recherche. 
:::


Un type de filtre est fourni par défaut à travers le web service REST `./plugins/rest/profiles/<profiles>/users/`. Ce web service permet de rechercher des utilisateurs faisant partie d'une ou plusieurs équipes. 

__Exemple__ : sélection d'utilisateurs faisant partie des équipes `JURIDIQUE` et `GESTIONNAIRE` : 
 
```javascript
var userAPI = JSAPI.get().getUserAPI();
userAPI.registerAssigneeProvider(function(tasks, key, callback){
	var profile = "JURIDIQUE,GESTIONNAIRE";
	$.get("./plugins/rest/profiles/"+profile+"/users/"+key,function(data){
		var users = new Array();
		$.each(data, function(k,v) {
			users.push(User.fromJSON(JSON.stringify(v)));
		});
		callback.provide(users);
	});
});
```


