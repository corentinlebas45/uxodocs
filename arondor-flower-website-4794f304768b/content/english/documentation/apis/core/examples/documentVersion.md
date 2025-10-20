+++
date = "2001-03-30T13:20:02+02:00"
title = "Handling document versions"
description = "Create, restore, delete document versions"
+++
The `VersionService` service displays the following operations:

* `promote`: to create a version of a document
* `getVersions`: to retrieve document versions
* `revert`: to restore a version of a document
* `deleteVersion`: to delete a version of a document
* `deleteVersions`: to delete all versions of a document

# Creating a version

The example below shows how to create a version of a document.
<br/>
POST {{core}}/rest/documents/{documentId}/versions HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
documentId: document identifier

-- Headers --
token: {token}
Content-Type: application/json

-- Body(raw) --
label: version name

@Autowired
private VersionService<Document> versionService;

public Document promote() throws TechnicalException, FunctionalException
{
	Id id = new Id("documentId");
	String label = "Version_1";
	return versionService.promote(id, label);
}

# Versions recovery

The example below shows how to recover versions of a document.
<br/>
GET {{core}}/rest/documents/{documentId}/versions HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
documentId: document identifier

-- Headers --
token: {token}
Content-Type: application/json
@Autowired
private VersionService<Document> versionService;

public VersionSeries getVersions() throws TechnicalException, FunctionalException
{
	Id id = new Id("documentId");
	return versionService.getVersions(id);
}

# Restoring a version

The example below shows how to restore a version of a document.
<br/>
POST {{core}}/rest/documents/{documentId}/versions/{versionId}/revert HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
documentId: document identifier
versionId: document version identifier

-- Headers --
token: {token}
Content-Type: application/json
@Autowired
private VersionService<Document> versionService;

public Document revert() throws TechnicalException, FunctionalException
{
	Id documentId = new Id("documentId");
	Id versionId = new Id("versionId");
	id versionId = new Id("versionId");
}

# Version deletion

## Deleting a version

The example below shows how to delete a version of a document.
<br/>
DELETE {{core}}/rest/documents/{documentId}/versions/{versionId} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
documentId: document identifier
versionId: document version identifier

-- Headers --
token: {token}
Content-Type: application/json
@Autowired
private VersionService<Document> versionService;

public void deleteVersion() throws TechnicalException, FunctionalException
{
	Id documentId = new Id("documentId");
	Id versionId = new Id("versionId");
	return versionService.deleteVersion(documentId, versionId);
}

## All versions deletion

The example below shows how to delete all versions of a document.
<br/>
DELETE {{core}}/rest/documents/{documentId}/versions HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
documentId: document identifier

-- Headers --
token: {token}
Content-Type: application/json
@Autowired
private VersionService<Document> versionService;

public void deleteVersion() throws TechnicalException, FunctionalException
{
	Id documentId = new Id("documentId");
	return versionService.deleteVersions(documentId);
}
