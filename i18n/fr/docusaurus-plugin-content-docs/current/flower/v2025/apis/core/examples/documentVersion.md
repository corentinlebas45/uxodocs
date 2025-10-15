+++
date = "2001-03-30T13:20:02+02:00"
title = "Manipuler les versions d'un document"
description = "Créez, restaurez, supprimez les versions d'un document"
+++
Le service `VersionService` expose les opérations suivantes :

* `promote` : pour créer une version d'un document
* `getVersions` : pour récupérer les versions d'un document
* `revert` : pour réstaurer une version d'un document
* `deleteVersion` : pour supprimer une version d'un document
* `deleteVersions` : pour supprimer toutes les versions d'un document

# Création d’une version

L’exemple ci-dessous indique comment créer une version d'un document.
<br/>
[shortcode]
[shortcode]
POST {{core}}/rest/documents/{documentId}/versions HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body(raw) --
label: nom de la version

[shortcode]
[shortcode]
@Autowired
private VersionService<Document> versionService;

public Document promote() throws TechnicalException, FunctionalException
{
	Id id = new Id("documentId");
	String label = "Version_1";
	return versionService.promote(id,  label);
}
[shortcode]
[shortcode]

# Récupération des versions

L’exemple ci-dessous indique comment récupérer les versions d'un document.
<br/>
[shortcode]
[shortcode]
GET {{core}}/rest/documents/{documentId}/versions HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId : identifiant du document

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
@Autowired
private VersionService<Document> versionService;

public VersionSeries getVersions() throws TechnicalException, FunctionalException
{
	Id id = new Id("documentId");
	return versionService.getVersions(id);
}
[shortcode]
[shortcode]

# Restauration d’une version

L’exemple ci-dessous indique comment restaurer une version d'un document.
<br/>
[shortcode]
[shortcode]
POST {{core}}/rest/documents/{documentId}/versions/{versionId}/revert HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document
versionId: identifiant de version du document

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
@Autowired
private VersionService<Document> versionService;

public Document revert() throws TechnicalException, FunctionalException
{
	Id documentId = new Id("documentId");
	Id versionId = new Id("versionId");
	return versionService.revert(documentId, versionId);
}
[shortcode]
[shortcode]

# Suppression de version

## Suppression d’une version

L’exemple ci-dessous indique comment supprimer une version d'un document.
<br/>
[shortcode]
[shortcode]
DELETE {{core}}/rest/documents/{documentId}/versions/{versionId} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document
versionId: identifiant de version du document

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
@Autowired
private VersionService<Document> versionService;

public void deleteVersion() throws TechnicalException, FunctionalException
{
	Id documentId = new Id("documentId");
	Id versionId = new Id("versionId");
	return versionService.deleteVersion(documentId, versionId);
}
[shortcode]
[shortcode]

## Suppression de toutes les versions

L’exemple ci-dessous indique comment supprimer toutes les versions d'un document.
<br/>
[shortcode]
[shortcode]
DELETE {{core}}/rest/documents/{documentId}/versions HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
@Autowired
private VersionService<Document> versionService;

public void deleteVersion() throws TechnicalException, FunctionalException
{
	Id documentId = new Id("documentId");
	return versionService.deleteVersions(documentId);
}
[shortcode]
[shortcode]
