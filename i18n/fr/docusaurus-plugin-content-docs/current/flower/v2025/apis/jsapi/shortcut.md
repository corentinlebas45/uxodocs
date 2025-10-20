---
title: Raccourcis
intro: Faciliter l'accès à certaines actions en personnalisant les raccourcis.
---

Afin de faciliter l'accès à certaines actions, plusieurs conteneurs de raccourcis peuvent être manipulés à travers l'API JS : 

* ``ContextualMenuAPI`` : menu contextuel de composant (présent sur les tableaux de résultats de recherche)
* ``MenuShortcutsAPI`` : bouton ``+`` accessible depuis la barre de menu
   
   
   
Afin d'accéder à ces APIs, deux moyens sont fournis : 

* ``get()`` : accéder à n'importe quel moment au conteneur de raccourcis chargés
* ``registerForLoad(function(api){});`` : s'abonner au chargement d'un conteneur de raccourci

# Général

Les fonctions suivantes sont mises à disposition sur les conteneurs de raccourcis. 


| Fonction                                                                                            | Description                                                                             |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------| 
| addCircled(String id, String icon, String color, String name, String description, Callback callback) | Ajoute un raccourci avec une icône de type cercle comportant une description au survol  |         
| addIconized(String id, String icon, String color, String name, Callback callback)                    | Ajoute un raccourci avec une icône (FontAwesome)                                        |
| add(String id, Element element, String name, Callback callback)                                      | Ajoute un raccourci avec un élément DOM comme icône                                     | 
| remove(String id)                                                                                    | Supprime un raccourci à partir de son identifiant                                       |
| getIds()                                                                                             | Récupère les identifiants des raccourcis présents                                       | 

## Exemples

Afin de s'abonner au chargement de ces menus de raccourcis, les fonctions suivantes vont être utilisées : 

__Créer un dossier depuis la barre de menu__ 

```javascript
MenuShortcutsAPI.get().registerForLoad(function(api){ 
	api.addCircled("createFolder", "fas fa-folder-open", "flat-red" , "Dossier","Créer un dossier", function(){
	    var newFolder = new Folder();
	    newFolder.setClassId("Folder");
	    var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newFolder);
	    popup.show();
	});  
});
```

# Menu contextuel

Des fonctions supplémentaires sont fournies pour manipuler un menu contextuel : 


| Fonction                                                                               | Description                                                                         |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| add(String groupId, String id, String icon, String label,  Callback callback)           | Ajoute un raccourci avec une icône dans le menu contextuel et dans un groupe de l'en-tête du tableau |   
| getSelected()                                                                           | Récupère les composants sélectionnés                                                |        
| getCategory()                                                                           | Récupère la catégorie des composants sélectionnés                                   | 


En utilisation la fonction `add`, il est possible de regrouper des actions en fonction du besoin en utilisant le même identifiant de groupe.
 
__Exemple :__ Création d'une tâche à partir de deux documents 

```javascript
ContextualMenuAPI.get().registerForLoad(function(api){
	if(api.getSelected().length != 2 || api.getCategory() != "DOCUMENT"){
		return;
	}

	api.add("customActions", "createTask", "fa fa-user" , "Tâche", function(){
		var newTask = new Task();
		newTask.setClassId("GEC_Step0_Creation");
		TagOracle.predict(api.getSelected(), newTask);			
		newTask.addAttachments("Courrier", Ids.from(api.getSelected()), "DOCUMENT");			
		var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask);
		popup.show();
	});  
});
```

__Réponses à une tâche__ 


Si l'utilisateur sélectionne des tâches d'une même classe et que celle-ci a des réponses, ces réponses seront affichées comme des actions dans le menu contextuel.

Cette fonctionnalité peut être désactivée en ajoutant le script JS suivant : 

```javascript
function registerToAddAnswersInTaskContextualMenu(){}
```