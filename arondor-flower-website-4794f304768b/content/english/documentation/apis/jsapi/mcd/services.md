+++
date = "2001-03-29T13:20:01+02:00"
title = "services"
description = "Consuming FlowerDocs services from the JS API"
+++

:::info
This section describes how to consume services exposed by FlowerDocs directly from the JS API.
:::

# Access to a component service 

Like the service layer, a service is provided for each component category: 

* Document: ``JSAPI.get().document()``
* Folder: ``JSAPI.get().folder()``
* Virtual folder: ``JSAPI.get().virtualFolder()``
* Task: ``JSAPI.get().task()``

These services consume the SOAP web services exposed by FlowerDocs Core, so their use implies the application of the same consistency and security controls.

<br/>
Each function exposed by these services accepts two function-type parameters: 
   
* `successCallback`: a callback executed on success
* `errorCallback`: an optional callback executed in the event of an error
   

 
# Creating components

After instantiating a [component] object (broken-link.md) and initialized it, it can be created in FlowerDocs using the appropriate service.
Component services expose the function `create(components, successCallback, errorCallback)`.
The first parameter of this function is an array of the components to be created. 
The `successCallback` parameter is a function called asynchronously in the event of successful creation, with the array of components created as parameter.
The third parameter `errorCallback` is an optional function executed if an error occurs.

var FOLDER = new Folder();
folder.setName(‘My Folder');
folder.setClassId('Folder');
JSAPI.get().folder().create([folder], function (created) {
  console.info('The folder ' + created[0].getName() + ' has been created');
}, function(error){
  console.error(error);
});

# Recovering components

A component service is used to retrieve stored components from the services exposed by FlowerDocs Core. 
The first parameter `ids` to be supplied is an array of component identifiers to be retrieved. 
The other two function-type parameters can be supplied to react respectively to the success and error of the operation.

JSAPI.get().document().get([id], function (documents) {
  console.info('The document ' + documents[0].getName() + ' has been recovered');
}, function(error){
  console.error(error);
});

A component can also be retrieved dynamically according to its category: 

```javascript
var reference = new ComponentReference(id, 'DOCUMENT');
JSAPI.get().getComponentGetAPI().getComponent(reference.getCategory(), reference.getId(), function (doc) {
  console.info('The document ' + doc.getName() + ' has been recovered');
}, function(error){
  console.error(error);
});
```

# Find components

Components can be searched using component services and a [SearchRequest](broken-link.md) supplied as a parameter to the function `search(request, successCallback, errorCallback)`.

The `successCallback` parameter is a function called once the search has been successful, with the table of results found in accordance with the query supplied.
Optionally, the `errorCallback` function can be passed as a parameter to react to any error.

var request = new SearchRequest();
JSAPI.get().task().search(request, function(results) {
    console.info(results.length + ' results have been retrieved');
    results.forEach(result => console.log(result.getId()));
});

# Updating components

Just as component services can be used to create components, they can also be used to update components.
To do this, the `update(components, successCallback, errorCallback)` function is exposed. It is used in the same way as the create function. 

JSAPI.get().document().get([id], function (documents) {
    documents[0].setName("updated");
    JSAPI.get().document().update([documents[0]], function (updated) {
        console.info('The document ' + updated[0].getName() + ' has been updated');
    });
});


# Delete components

To physically (or permanently) remove components, the `doDelete(ids, successCallback, errorCallback)` function is available. 
The first parameter `ids` to be supplied is an array of the identifiers of the components to be removed. 
The other two function-type parameters can be supplied to react respectively to the success and error of the operation.

_**Please note** this operation is irreversible_ and should therefore be used with caution.

JSAPI.get().document().doDelete([id], function () {
    console.info('The document ' + id + ' has been permanently deleted');
});
