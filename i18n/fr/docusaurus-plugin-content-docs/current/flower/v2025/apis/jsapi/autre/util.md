---
title: Fonctions utilitaires
---

# Permissions

Il est possible de déterminer si l'utilisateur courant a une permission : 

* à partir d'un composant

```javascript
ACLHelper.isGranted(component,"CREATE", function(granted){console.info("granted: "+granted);});
```

* à partir d'un identifiant d'ACL

```javascript
ACLHelper.isGranted(component.getACL(),"CREATE", function(granted){console.info("granted: "+granted);});
```

# Extraction d'identifiants

Afin d'extraire les identifiants d'un tableau de composants, il est possible d'utiliser la fonction suivante : 

```javascript
Ids.from(components)
```

# Propagation de tags

Afin de propager les valeurs de tags communs d'un ou plusieurs composants vers un composant cible, les fonctions suivantes sont à disposition : 

| Fonctions                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|predict(sourceComponent, targetComponent)   | Propage les tags communs d'un composant vers un composant cible                |        
|predict(sourceComponents, targetComponent)  | Propage les tags communs d'un ensemble de composants vers un composant cible    |        

__Exemple :__ Création d'une tâche à partir de deux documents

```javascript
ContextualMenuAPI.get().registerForLoad(function(api){
	if(api.getSelected().length != 2 || api.getCategory() != "DOCUMENT"){
		return;
	}
	var icon = new Icon();
	icon.setContent("fa fa-user flat-mauve");
	api.add("createTask", icon.asElement() , "Tâche", function(){
		var newTask = new Task();
		newTask.setClassId("GEC_Step0_Creation");
		TagOracle.predict(api.getSelected(), newTask);			
		newTask.addAttachments("Courrier", Ids.from(api.getSelected()), "DOCUMENT");			
		var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask);
		popup.show();
	});  
});
```


# Comparaison de version

La fonction `compareVersion('x.y.z')` compare la version fournie en entrée à la version déployée : 

| Résultat                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|`-1` | La version déployée est antérieure à la version fournie *|        
|`0`  | La version déployée est identique à la version fournie *|        
|`1`  | La version déployée est postérieure à la version fournie *|        



**la comparaison ne tient pas compte du numéro de correctif*