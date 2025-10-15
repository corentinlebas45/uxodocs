+++
date = "2001-03-30T13:20:01+02:00"
title = "Manipuler un document"
description = "Créez, modifiez, supprimez vos documents"
+++

Le service `Document` expose toutes les opérations disponibles autour des composants de type `DOCUMENT`.


# Récupération de document

Les exemples ci-dessous indiquent comment récupérer des documents en utilisant les différentes opérations de `get`.

## Récupération de document

[shortcode]
[shortcode]
GET {{core}}/rest/documents/{ids} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
ids: identifiant des documents à récupérer

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public List<Document> get() throws FunctionalException, TechnicalException
{
	List<Id> ids = Lists.newArrayList(new Id("documentId"));
	return service.get(ids);
}
[shortcode]
[shortcode]

## Récupération de version

Ce service permet de récupérer une version spécifique d'un document :

[shortcode]
[shortcode]
GET {{core}}/rest/documents/{documentId}/versions/{versionId} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
documentId: identifiant du document à récupérer
versionId: identifiant de la version du document à récupérer

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private VersionService service;

public Document getVersion() throws FunctionalException, TechnicalException
{
	Id documentId = new Id("documentId"));
	Id versionId = new Id("versionId"));
	
	return service.getVersion(documentId, versionId);
}
[shortcode]
[shortcode]
 

## Récupération des fichiers associés

Ce service permet de récupérer les fichiers associés au document dont l'identifiant est passé en entrée :

- le contenu : `includeContent` = true
- les fichiers : `includeContent` = false

[shortcode]
[shortcode]
GET {{core}}/rest/documents/{id}/files?includeContent={includeContent} HTTP/1.1

-- Paramètres d'URL --
core : host de FlowerDocs core
id: identifiant du document
includeContent: true ou false pour récupération du contenu

-- Headers --
token: {{token}}
includeContent: {{inclut le contenu}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public List<DocumentFile> get() throws FunctionalException, TechnicalException
{
	Boolean includeContent = false;
	return service.getFiles(new Id("documentId"), includeContent);
}
[shortcode]
[shortcode]

# Création de document

Les exemples ci-dessous indiquent comment créer des documents en utilisant l'opération suivante.

[shortcode]
[shortcode]
POST {{core}}/rest/documents/ HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
    {
        "data": {
            "classId": "Document"
        },
        "category": "DOCUMENT",
        "name": "D1"
    }
]
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public List<Document> create() throws FunctionalException, TechnicalException
{
	List<Document> documents = new ArrayList();
	Document document = new Document();
	document.setId(new Id("testId"));
    ComponentData data = new ComponentData();
    data.setClassId(new Id("ENV_Document"));
    document.setData(data);
    Tags tags = new Tags();
    tags.getTags().add(new Tag(Arrays.asList("C0012"), "B_RefClient", false));
    tags.getTags().add(new Tag(Arrays.asList("Fournisseur 12"), "B_NomClient", false));
    tags.getTags().add(new Tag(Arrays.asList("RIB"), "B_TypeDocument", false));
    document.setTags(tags);	
	documents.add(document);
	return service.create(documents);
}
[shortcode]
[shortcode]

# Création de document avec un contenu

Les exemples ci-dessous indiquent comment créer un document avec son contenu en utilisant l'opération suivante.

[shortcode]
[shortcode]
POST {{core}}/rest/documents/unique HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: multipart/form-data

-- Body (key: file) --
file (type file): fichier à importer

-- Body (key: document; content-type: application/json) --
[
    {
        "data": {
            "classId": "Document"
        },
        "category": "DOCUMENT",
        "name": "D1"
    }
]
[shortcode]
[shortcode]

# Modification de document

Les exemples ci-dessous indiquent comment mettre à jour des documents.

## Modification d'un document et remplacement de son contenu

Cette opération permet la modification des données d'un document (identifiant de la classe, nom du document, ACL, etc.) ainsi que le remplacement de son contenu dans le même appel.

[shortcode]
[shortcode]
POST {{core}}/rest/documents/{id}/unique HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant du document

-- Headers --
token: {{token}}
Content-Type: multipart/form-data

-- Body (key: file) --
fichier à importer

-- Body (key: document; content-type: application/json) --
[
    {
        "data": {
            "classId": "Document"
        },
        "category": "DOCUMENT",
        "name": "D1"
    }
]
[shortcode]
[shortcode]

## Modification des données

Cette opération permet de mettre à jour les données d'un document : tags et data (identifiant de la classe, nom du document, ACL ...) mais aussi son contenu.

:::info
Ce service fonctionne en annule et remplace, l'ensemble des contenus et des valeurs de tags doit donc être fourni par le service au moment de la mise à jour. Il est donc préconisé de réaliser une récupération du document, effectuer les modifications et faire l'appel au service de mise à jour.
:::

[shortcode]
[shortcode]
POST {{core}}/rest/documents/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant du document

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
    {
	    "files": [
	      {
	        "id": "98c1f765-7595-46c3-8f4a-b75bd7c25ff7",
	        "size": 0
	      }
	    ],
        "data": {
            "classId": "Document"
        },
        "category": "DOCUMENT",
        "name": "D2"
    }
]
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public List<Document> update(Document document) throws FunctionalException, TechnicalException
{
	List<Document> documents = new ArrayList();
    tags.getTags().add(new Tag(Arrays.asList("Contrat"), "B_TypeDocument", false));
    document.setTags(tags);	
	documents.add(document);
	return service.update(documents);
}
[shortcode]
[shortcode]

## Ajout de fichier

Cette opération permet d'ajouter un contenu à un document

- `replace` : permet de remplacer le fichier existant par le nouveau contenu

[shortcode]
[shortcode]
POST {{core}}/rest/documents/{id}/files?replace={replace} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
replace: true ou false pour remplacer le contenu

-- Headers --
token: {{token}}
Content-Type: multipart/form-data

-- Body (form-data) --
file (type file): fichier à importer

[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public List<Document> addContent(Document document) throws FunctionalException, TechnicalException
{
	List<DocumentFile> files = new ArrayList<DocumentFile>();
	DocumentFile file = new DocumentFile();
    file.setId(new Id("MyFile"));
    file.setContent(new DataHandler(new FileDataSource(File.createTempFile("/tmp", ".txt"))));
	files.add(file);
	return service.addFiles(new Id("sampleDoc"), files, false);
}
[shortcode]
[shortcode]

## Renommage de fichier 

Cette opération permet de renommer un fichier associé à un document : 

[shortcode]
[shortcode]
POST /core/rest/documents/{id}/files/{fileId}/name HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant du document
fileId : identifiant du fichier

-- Headers --
token: {{token}}

-- Body (form-data) --
Nouveau nom de fichier 

[shortcode]
[shortcode]

# Recherche de document

Les opérations de recherche fonctionnent toutes sur le même modèle décrit [ici](broken-link.md).

# Suppression de document

Les exemples ci-dessous indiquent comment supprimer des documents.

## Suppression de document

Cette opération permet de supprimer le document ainsi que les fichiers associés.

[shortcode]
[shortcode]
DELETE {{core}}/rest/documents/{ids} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids: identifiants des documents à supprimer

-- Header -- 
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public void delete() throws FunctionalException, TechnicalException
{
	List<Id> ids = Lists.newArrayList(new Id("sample_doc"));
	service.delete(ids);
}
[shortcode]
[shortcode]

## Suppression de fichier

Cette opération permet de supprimer un fichier.

[shortcode]
[shortcode]
DELETE /rest/documents/{documentId}/files/{fileId} HTTP/1.1

-- Paramètres d'URL --
Host: {{core}}
documentId: identifiant du document
fileId: identifiant du contenu à supprimer

-- Headers -- 
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public void delete() throws FunctionalException, TechnicalException
{
	List<Id> fileIds = Lists.newArrayList(new Id("sample_doc"));
	service.deleteFiles(documentId, fileIds);
}
[shortcode]
[shortcode]

# Contenu

## Récupération d'un contenu

Ce service permet de récupérer le contenu associé au fichier dont l'identifiant est passé en entrée :

- avec ou sans les obfuscations en fonction du paramètre `includeObfuscations`

[shortcode]
[shortcode]
GET {{core}}/rest/documents/{documentId}/files/{fileId}/content?includeObfuscations={includeObfuscations} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document
fileId: identifiant du contenu
includeObfuscations: true ou false pour inclure les obfuscations

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private DocumentService service;

public List<DocumentFile> get() throws FunctionalException, TechnicalException
{
	Boolean includeContent = false;
	return service.getFile(new Id("documentId"), new Id("fileId"), includeContent);
}
[shortcode]
[shortcode]

## Indexer le contenu d'un document

Ce service permet d'indexer le contenu passé en paramètre et associé à l'identifiant de fichier.

[shortcode]
[shortcode]
POST {{core}}/rest/documents/{documentId}/files/{fileId}/content/index HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document
fileId: identifiant du contenu

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (text) --
Contenu du document

[shortcode]

[shortcode]
	@Autowired
	private DocumentContentService service;
	
	public Id addContent() throws FunctionalException, TechnicalException
	{
		return service.index(new Id("documentId"), new Id("fileId"), "File contents");
	}
[shortcode]
[shortcode]

## Supprimer l'indexation de contenu d'un document

Ce service permet de supprimer l'indexation du contenu associé à un document.

[shortcode]
[shortcode]
DELETE {{core}}/rest/documents/{documentId}/files/{fileId}/content/index HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
documentId: identifiant du document
fileId: identifiant du contenu

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
	@Autowired
	private DocumentContentService service;
	
	public void removeContent() throws FunctionalException, TechnicalException
	{
		service.deindex(new Id("documentId"), new Id("fileId"));
	}
[shortcode]
[shortcode]

:::warning
Ce service supprime l'indexation de l'ensemble des fichiers associés au document.
:::