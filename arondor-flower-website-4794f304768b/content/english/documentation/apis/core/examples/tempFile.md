+++
date = "2001-04-15T13:20:01+02:00"
title = "Handling a temporary file"
description = "Create, modify, delete temporary files"
+++
The `TempFileService` service exposes the following operations:

* `create`: to create a temporary file 
* `getContent`: to retrieve a temporary file  
* `delete`: to delete a temporary file

# Creating a temporary file

The following examples show how to create a temporary file.

<br/>
CREATE:
POST {{core}}/rest/files/tmp HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
file: temporary file to create 

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private TempFileService tempFileService;

public DocumentFile create() throws TechnicalException, FunctionalException
{
	DocumentFile file = new DocumentFile();
    file.setId(new Id("MyFile"));
    file.setContent(new DataHandler(new FileDataSource(File.createTempFile("/tmp", ".txt"))));
	return tempFileService.create(file);
}

# Recovering a temporary file

The following examples show how to recover a temporary file.

<br/>
GET CONTENT:
GET {{core}}/rest/files/tmp/{id} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
id: id of the temporary file

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private TempFileService tempFileService;

public DocumentFile get() throws TechnicalException, FunctionalException
{
	Id id = new Id("MyFile");
	return tempFileService.get(id);
}

# Deleting a temporary file

The following examples show how to delete a temporary file.

<br/>
DELETE :
DELETE {{core}}/rest/files/tmp/{id} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
id: id of the temporary file

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private TempFileService tempFileService;

public void delete() throws TechnicalException, FunctionalException
{
	Id id = new Id("MyFile");
	return tempFileService.delete(id);
}
