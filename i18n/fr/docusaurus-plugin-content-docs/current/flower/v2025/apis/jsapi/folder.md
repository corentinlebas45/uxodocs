+++
date = "2012-03-28T13:20:01+02:00"
title = "Contenu de dossier"
description = "Personnalisation du contenu d'un dossier"
+++


La gestion des actions de création au sein d'un dossier peut être configurée en enregistrant un processeur.
Ce processeur permet de déterminer si les actions de création sont activées ou non. 


```javascript
JSAPI.get().folder().registerForCreateAction(identifier, processor);
```


La variable `identifier` permet d'identifier dans quel dossier (ou contexte), la gestion native des actions de création doit être surchargée.
Cette chaîne de caractères peut prendre les valeurs suivantes : 

* l'identifiant d'un dossier
* l'identifiant d'une classe de dossiers
* `'*'` pour tous les dossiers


La variable `processor` est une closure permettant de définir le comportement désiré : une action de création est visible ou non. 
Les variables suivantes sont fournies en entrée de cette closure : 

* folder : le dossier concerné par les actions de création
* childCategory  : la catégorie de composants pouvant être créés grâce à l'action
* action : l'action de création
* callback : le callback permet d'indiquer à l'interface graphique la configuration à appliquer (permet un traitement asynchrone)

<br/>
Par exemple, pour masquer l'action de création de documents du dossier `Projets`  :

```javascript
JSAPI.get().folder().registerForCreateAction("Folder",function(folder,childCategory, action, callback){
    if(folder.getName() =='Projets'&& childCategory == 'DOCUMENT'){
		callback.onSuccess(false);
	}else{
    	callback.onSuccess(true)
    }
});
```
