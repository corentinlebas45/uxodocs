+++
date = "2003-03-29T13:20:01+02:00"
title = "Email sortant"
intro =""
+++

# Indexation du courrier sortant

Les emails rédigés depuis Plume peuvent être stockés dans FlowerDocs. Pour cela, il peut être nécessaire de les indexer pour être capable de les retrouver.

L'indexation de ces courriers sortants se fait à l'aide d'un `PreProcessor`. Cet objet permet de manipuler l'email, côté client, avant qu'il ne soit envoyé côté serveur pour traitement.

<br/>

Dans l'exemple ci-dessous, on indexe l'email rédigé à partir du composant ouvert : 

```javascript
context.setPreProcessor(function(email){ 
	var component = formAPI.getComponent();
	email.properties={};
	email.properties.classid="CourrierSortant";
	email.properties.name=email.subject;
	email.properties.CanalEntree=component.getTagValue("CanalEntree");
	email.properties.RefClient=component.getTagValue("RefClient");
});
```
