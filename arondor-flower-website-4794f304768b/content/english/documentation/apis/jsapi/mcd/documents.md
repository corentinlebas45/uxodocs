+++
date = "2004-02-01"
title = "Documents & their files"
Description = "Manipulating documents in JavaScript"
Intro = "" 
+++

# Handling files

In addition to the tags associated with a [document](broken-link.md), files can be associated with it.
The JS API enables them to be manipulated through various consultation or modification functions.

## File access

From a `Document` object, the `getDocumentFiles()` function reveals an array of `DocumentFile` objects from which the following functions can be used: 

| Functions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getId()                                                | File identifier recovery                                       |   
|setId(String id)                                       | File identifier definition                                         |        
|getName()                                              | File name retrieval                                                 |        
|setName(String name)                                   | File name definition                                                   |        
|getFormatCode()                                        | File format retrieval                                              |        
|setFormatCode(String formatCode)                       | File format definition                                                |        
|getCreationDate()                                      | Retrieving the file creation date                                 |        


var doc = formAPI.getComponent();
doc.getDocumentFiles().forEach(function(file){
   console.info('The document has file: '+file.getId());
});
JSAPI.get().document().getFiles(component.getId(), function(files){
    files.forEach(function(file){
        console.info('The document has file: '+file.getId());
    }); 
});

File identifiers can also be retrieved from a document using the `getFiles()` function.

## Files modification

The list of files in a `Document` object can be initialised or modified using the JS API. 
To achieve this, the functions `addFile(tempFileId)` or `setFiles(tempFileIds)` can be used. 
Changes made to the object will only be taken into account when a document is created.


function createDocument(tempFileId, callback){
    var doc = new Document();
    doc.setName('My document');
    doc.setClassId('Document');
    doc.addFile(tempFileId);
    JSAPI.get().document().create([doc],function(created){
        callback(created[0]);
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

# Versioning

If version management (or _versioning_) is enabled for a document, information about its different versions can be consulted using the following functions: 

| Functions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getVersionSeriesId()                                   | Retrieving the VersionSeries identifier                                 |
|getVersionLabel()                                      | Retrieving the label of the current version                                 |
|isCurrentVersion()                                     | Determines whether the document is the current version                               |