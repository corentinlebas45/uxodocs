+++
date = "2001-03-30T13:20:01+02:00"
title = "Manipuler les annotations"
description = "Créez, modifiez, supprimez vos annotations"
+++

Le service `Annotation` expose toutes les opérations disponibles autour des annotations d'un document.


# Récupération des annotations

Ce service permet de récupérer des annotations d'un document avec une opération de `get`.

## Récupération de toutes les annotations 

GET {{core}}/rest/documents/{documentId}/annotations HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document sur lequel se trouvent les annotations à récupérer

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private AnnotationService service;

public List<Annotation> get() throws FunctionalException, TechnicalException
{
	Id documentId = new Id("documentId");
	return service.get(documentId);
}

<!-- ## Récupération des rotations 

Cette fonctionnalité n'est pas implémentée. -->

# Création d'annotation 

## A partir d'un json

POST {{core}}/rest/documents/{documentId}/annotations HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document sur lequel créer les annotations

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
		"color": {
			"b": 0,
			"g": 0,
			"r": 0
		},
		"creationdate": "2025-08-25T12:21:18.497Z",
		"date": "2025-08-25T12:21:18.497Z",
		"document-id": {
			"id": "documentId"
		},
		"flags": {
			"hidden": false,
			"invisible": false,
			"locked": false,
			"norotate": false,
			"noview": false,
			"nozoom": false,
			"obfuscate": false,
			"print": false,
			"readonly": false,
			"togglenoview": false
		},
		"last-modifier": "string",
		"name": {
			"id": "string"
		},
		"opacity": 0,
		"page": 0,
		"rect": {
			"h": 0,
			"w": 0,
			"x": 0,
			"y": 0
		},
		"type": "com.arondor.viewer.annotation.api.CircleElemType",
		"title": "annotationTest"
    }
]

@Autowired
private AnnotationService service;

public void create() throws FunctionalException, TechnicalException
{
	Id documentId = new Id("documentId");

	List<Annotation> annotations = new ArrayList();
	Annotation annotation = new CircleElemType();
    annotation.setId(new AnnotationId(generateRandomString()));
    annotation.setDate(new Date());
    annotation.setSubject(generateRandomString());
    annotation.setDocumentId(new DocumentId("b64_xxx==/0/1"));
    AnnotationFlags flags = new AnnotationFlags();
	annotation.setFlags(flags);
	annotations.add(annotation);

	service.create(documentId, annotations);
}

## A partir d'un xml

POST {{core}}/rest/documents/{documentId}/annotations HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document sur lequel créer les annotations

-- Headers --
token: {token}
Content-Type: application/xml

-- Body (xml) --
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/"><ns0:annots>
<ns0:circle color="#EAF39C" flags="" name="cfdbee9c-dce1-4e62-bc10-55ab1554476b" page="0" rect="82.02787,218.50267,183.40193,337.67523" title="Unknown" creationdate="D:20221228084701+00'00'" opacity="0.7" fringe="0.0,0.0,0.0,0.0" interior-color="#EAF39C" width="0.0" style="solid" intensity=""/>
</ns0:annots>
</ns0:xfdf>

# Mise à jour des annotations 

POST {{core}}/rest/documents/{documentId}/annotations/{annotationIds} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document sur lequel se trouvent les annotations à modifier
annotationIds: identifiants des annotations à modifier 

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
		"color": {
			"b": 0,
			"g": 0,
			"r": 0
		},
		"creationdate": "2025-08-25T12:21:18.497Z",
		"date": "2025-08-25T12:21:18.497Z",
		"document-id": {
			"id": "documentId"
		},
		"flags": {
			"hidden": false,
			"invisible": false,
			"locked": false,
			"norotate": false,
			"noview": false,
			"nozoom": false,
			"obfuscate": false,
			"print": false,
			"readonly": false,
			"togglenoview": false
		},
		"last-modifier": "string",
		"name": {
			"id": "string"
		},
		"opacity": 0,
		"page": 0,
		"rect": {
			"h": 0,
			"w": 0,
			"x": 0,
			"y": 0
		},
		"type": "com.arondor.viewer.annotation.api.FreetextElemType.FreetextElemType",
		"title": "annotationTest"
    }
]
@Autowired
private AnnotationService service;

public void update() throws FunctionalException, TechnicalException
{
	Id documentId = new Id("documentId");
	List<Annotation> updates = new ArrayList();

	List<Annotation> fetchedAnnotations = annotationService.get(created.getId());
    Annotation annotToUpdate = fetchedAnnotations.get(0);
    annotToUpdate.setColor(new Color(21, 9, 98));
	updates.add(annotToUpdate):

    annotationService.update(documentId, updates);
}


# Suppression d'annotation

Les exemples ci-dessous indiquent comment supprimer des annotations.

## Suppression d'une sélection d'annotations

Cette opération permet de supprimer une partie des annotations d'un document 

DELETE {{core}}/rest/documents/{documentId}/annotations/{annotationIds} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document sur lequel se trouvent les annotations à supprimer
annotationIds: identifiants des annotations à supprimer  

-- Header -- 
token: {token}
Content-Type: application/json

@Autowired
private AnnotationService service;

public void delete() throws FunctionalException, TechnicalException
{
	Id documentId = new Id("documentId");

	List<Id> ids = Lists.newArrayList(new Id("annot1"));
	service.delete(documentId, ids);
}

## Suppression de toutes les annotations

Cette opération permet de supprimer l'ensemble des annotations d'un document 

DELETE {{core}}/rest/documents/{documentId}/annotations/allAnnotations HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document sur lequel se trouvent les annotations à supprimer

-- Headers -- 
token: {token}
Content-Type: application/json

@Autowired
private AnnotationService service;

public void delete() throws FunctionalException, TechnicalException
{
	Id documentId = new Id("documentId");
	service.delete(documentId);
}

