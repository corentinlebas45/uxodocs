---
title: Attachement d'un document 
description: Les popups affichées au sein de l'interface graphique
---

Cette partie détaille les interactions possibles avec le widget appelé ``ComponentAttacher`` permettant d'attacher un composant à un dossier.

Ce type de popup ne peut pas être créé manuellement, mais il est possible de s'abonner à son ouverture de la façon suivante : 

```javascript
JSAPI.get().getPopupAPI().registerForComponentAttacherOpen(function(popup){
	popup.setTitle("Mon nouveau titre");
	popup.setRapidSearchVisible(false); 
	popup.getActions().get("advancedSearch").setEnabled(false); 
});  
```
Les propriétés modifiables sur les autres types de popup le sont également sur celle-ci. Les fonctions suivantes sont spécifiques à ce type de popup : 


| Propriété                                            | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
| setRapidSearchVisible(boolean visible)                | Visibilité de la recherche rapide                                              |        
| setSearchTemplate(String searchTemplate)              | Définir le formulaire de recherche utilisé pour la recherche avancée           |        
| attach(Folder folder)                                 | Attache le composant courant à un dossier                                      |        
| getActions()                                          | Permet de récupérer l'ActionSetAPI correspondant, pour manipuler les différentes actions présentes.|        


Les actions disponibles via la méthode ``getActions()`` sont : 

* ``browseFolder`` : Parcourir l'arborescence de dossier
* ``advancedSearch`` : Recherche avancée
* ``newFolder`` : Création d'un nouveau dossier 

<br/>

La popup affichée lors du clic sur l'action ``browseFolder`` va afficher une arborescence de dossier. Il est possible que pour certains besoins l'arborescence complète ne corresponde pas à vos besoins et qu'une certaine partie de celle-ci 
soit autorisée pour un `attachement`. Dans ce cas-là, il est possible de restreindre l'affichage des différents dossiers dans cette arborescence de la façon suivante : 


```javascript
folderAttacher = JSAPI.get().getPopupAPI().getFolderAttacher();
folderAttacher.register(function(folder,toAttach, callback){
	if(folder.getName() == "2014"){
    	console.error("Remove item " + folder.getName() + " from browse tree");
		callback.onSuccess(null);
	}
	else if(folder.getName() == "Arondor"){
		console.log("Force disable selection for "+ folder.getName());
		callback.onSuccess(new SelectableTreeItem(folder.getName(),false));
    }
	else{
		console.log("Use applicative selection for "+ folder.getName());
		callback.onSuccess(new SelectableTreeItem(folder.getName()));
	}
});
```

Dans l'exemple ci-dessus, le composant ayant pour nom *Arondor* sera affiché, mais non sélectionnable. Celui avec le nom *2014* ne sera pas affiché et les autres seront affichés. 
<br/>
Dans ce dernier cas, la sélection utilisée est celle calculée par l'application, c'est-à-dire qu'elle est affichée uniquement si la classe du composant courant est dans la liste des enfants autorisés du dossier.