+++
date = "2001-04-15T13:20:01+02:00"
title = "Manipuler un fichier temporaire"
description = "Créez, modifiez, supprimez des fichiers temporaires"
+++
Le service `TempFileService` expose les opérations suivantes :

* `create` : pour créer un fichier temporaire 
* `getContent` : pour récupérer un fichier temporaire  
* `delete` : pour supprimer un fichier temporaire

# Création d'un fichier temporaire

Les exemples suivants définissent comment créer un fichier temporaire.

<br/>
CREATE:
[shortcode]
[shortcode]
POST {{core}}/rest/files/tmp HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
file : fichier temporaire a créer 

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private TempFileService tempFileService;

public DocumentFile create() throws TechnicalException, FunctionalException
{
	DocumentFile file = new DocumentFile();
    file.setId(new Id("MyFile"));
    file.setContent(new DataHandler(new FileDataSource(File.createTempFile("/tmp", ".txt"))));
	return tempFileService.create(file);
}
[shortcode]
[shortcode]

# Récupération d'un fichier temporaire

Les exemples suivants définissent comment récupérer un fichier temporaire.

<br/>
GET CONTENT:
[shortcode]
[shortcode]
GET {{core}}/rest/files/tmp/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: id du fichier temporaire

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private TempFileService tempFileService;

public DocumentFile get() throws TechnicalException, FunctionalException
{
	Id id = new Id("MyFile");
	return tempFileService.get(id);
}
[shortcode]
[shortcode]

# Suppression d'un fichier temporaire

Les exemples suivants définissent comment supprimer un fichier temporaire.

<br/>
DELETE :
[shortcode]
[shortcode]
DELETE {{core}}/rest/files/tmp/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: id du fichier temporaire

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]

[shortcode]
@Autowired
private TempFileService tempFileService;

public void delete() throws TechnicalException, FunctionalException
{
	Id id = new Id("MyFile");
	return tempFileService.delete(id);
}
[shortcode]
[shortcode]