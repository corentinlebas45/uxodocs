---
date: "2020-02-02"
title: “DOCX templates"
description: "Reusable templates, by scope, that can be enhanced with variables"
---


# Principle
FlowerDocs generates Microsoft Word documents in DOCX format from a template.
This template is also a Microsoft Word document in DOCX format that can contain custom properties (*see below*).
The properties supplied as input to the generator, and included in the template, are modified when the document is generated to take account of the values supplied.

# Properties

## Defining a new property

Before a property can be used in a document, it must first be defined at the document level:  

* Open advanced properties via the following menu: *Information > Properties > Advanced properties*
* In the *Custom*tab, enter the following information: 
    * Name: property name
    * Type: text 
    * Value: enter a default value 
* Click on *Add*

## Using a property

To use a property, it must be added to the body of the document. To do this: 

* Position the cursor at the desired location
* Press `Ctrl` + `F9` simultaneously
* Enter `DOCPROPERTY <Nom de la variable>`
* Press `F9`


## Other actions

|Shortcuts| Description|
|---|---|
|`Alt` + `F9`|Enter/exit edit mode for all custom properties|
|`Shift` + `F9`|Enter/exit edit mode for the selected property|
|`F9`|Update selected property|


# Adhoc use



POST {core}/rest/template/msoffice/{templateId} HTTP/1.1
token:  <token>
Content-Type: application/json
[
    {
        "name": "variable",
        "value": ["myvalue"]
    }
]
curl -X POST '{core}/rest/template/msoffice/{templateId}' \
-H 'token: <token>' \
-H 'Content-Type: application/json' \
-d '[
    {
        "name": "variable",
        "value": ["myvalue"]
    }
]'
$.ajax({
    type: 'POST',
    url: './plugins/rest/template/msoffice/{templateId}',
    "data": JSON.stringify([
        {
            "name": "variable",
            "value": ["myvalue"]
        }
    ]),
    contentType: "application/json",
	success: function(result) { console.info('Got!'); }
});
{{< /tab >>}}
