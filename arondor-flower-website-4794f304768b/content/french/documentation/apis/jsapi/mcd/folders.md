+++
date = "2004-02-02"
title = "Les dossiers & leur contenu"
Description = "Manipuler des dossiers en JavaScript"
Intro = "" 
+++

Un [dossier](broken-link.md) peut contenir des composants : ses enfants.
Les enfants d'un dossier peuvent être des composants de n'importe quelle catégorie mais uniquement les documents et sous-dossiers sont affichés dans FlowerDocs GUI.


| Fonctions                                                                    | Description                                                                    |
|------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
|addChildren(String folderId, ComponentReference[] children, boolean replace)  | Ajout d'enfants à un dossier                                                   |        
|deleteChildren(String folderId, ComponentReference[] children)                | Suppression d'enfants d'un dossier                                             |        

# Ajout de contenu

Afin d'ajouter un composant dans un dossier, il est nécessaire de le référencer comme enfant du dossier à l'aide d'un objet `ComponentReference`.
A partir de cette référence, la fonction `addChildren(id, childReferences, replace, successCallback)` exposée par le service `JSAPI.get().folder()` peut être utilisée.
Le booléen `replace` permet d'indiquer si le contenu du dossier doit être remplacé par les nouveaux enfants référencés.


var childReference = new ComponentReference("documentId", "DOCUMENT");
JSAPI.get().folder().addChildren("folderId", [childReference], false, function(){
	console.info("The document has been added as child");
});


# Suppression de contenu

Un composant peut être supprimé d'un dossier afin qu'il ne soit plus référencé comme un de ses enfants grâce à la fonction `deleteChildren(folderId, childReferences, successCallback)`

var childReference = new ComponentReference("documentId", "DOCUMENT");
JSAPI.get().folder().deleteChildren(folderId, [childReference], function () {
	console.info('The document has been removed from folder');
});

