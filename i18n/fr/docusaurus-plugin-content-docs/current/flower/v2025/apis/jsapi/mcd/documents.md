+++
date = "2004-02-01"
title = "Les documents & leurs fichiers"
Description = "Manipuler des documents en JavaScript"
Intro = "" 
+++

# Manipuler les fichiers

En plus des tags associés à un [document](broken-link.md), des fichiers peuvent lui être associés.
L'API JS permet leurs manipulations à travers différentes fonctions de consultation ou de modification.

## Accès aux fichiers

A partir d'un objet `Document`, la fonction `getDocumentFiles()` expose un tableau d'objets `DocumentFile` à partir desquels les fonctions suivantes peuvent être utilisées : 

| Fonctions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getId()                                                | Récupération de l'identifiant du fichier                                       |   
|setId(String id)                                       | Définition de l'identifiant du fichier                                         |        
|getName()                                              | Récupération du nom du fichier                                                 |        
|setName(String name)                                   | Définition du nom du fichier                                                   |        
|getFormatCode()                                        | Récupération du format du fichier                                              |        
|setFormatCode(String formatCode)                       | Définition du format du fichier                                                |        
|getCreationDate()                                      | Récupération de la date de création du fichier                                 |        


[shortcode]
[shortcode]
var doc = formAPI.getComponent();
doc.getDocumentFiles().forEach(function(file){
   console.info('The document has file: '+file.getId());
});
[shortcode]
[shortcode]
JSAPI.get().document().getFiles(component.getId(), function(files){
    files.forEach(function(file){
        console.info('The document has file: '+file.getId());
    }); 
});
[shortcode]
[shortcode]

Les identifiants des fichiers peuvent également être récupérés, depuis un document, à l'aide de la fonction `getFiles()`.

## Modification des fichiers

La liste des fichiers d'un objet `Document` peut être initialisée ou modifiée à l'aide de l'API JS. 
Pour cela, les fonctions `addFile(tempFileId)` ou `setFiles(tempFileIds)` peuvent être utilisées. 
Les modifications apportées à l'objet seront prises compte uniquement dans le cas d'une création de document.


[shortcode]
[shortcode]
function createDocument(tempFileId, callback){
    var doc = new Document();
    doc.setName('Mon document');
    doc.setClassId('Document');
    doc.addFile(tempFileId);
    JSAPI.get().document().create([doc],function(created){
        callback(created[0]);
    }, function(error) {
    	console.log(error);
    });
}
function uploadTextFile(text, callback){
    var formData = new FormData();
    formData.append('file', new File([new Blob([text])], 'my-file.txt'));
    $.ajax({
        url: './upload',
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function (data) {
            callback(data.split('|')[0]);
        }
    });   
}

uploadTextFile('Some text content', (tempFileId)=>{
    createDocument(tempFileId,(doc)=>{
        JSAPI.get().getNavigationAPI().goToComponentPlace(doc.getCategory(), doc.getId(), false);
    });
});
[shortcode]
[shortcode]

# Versioning

Si la gestion de version (ou _versioning_) est activé pour un document, les informations liées à ses différentes versions peuvent être consultées grâce aux fonctions suivantes : 

| Fonctions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getVersionSeriesId()                                   | Récupération de l'identifiant de VersionSeries                                 |
|getVersionLabel()                                      | Récupération du libellé de la version courante                                 |
|isCurrentVersion()                                     | Détermine si le document est la version courante                               |
