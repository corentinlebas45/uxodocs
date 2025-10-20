+++
date = "2001-04-29T13:30:01+01:02"
title = "Manipuler les classes de dossiers"
description = "Créez, récupérez, modifiez, supprimez vos classes de dossiers"
+++

Le service `FolderClassService` expose toutes les opérations disponibles autour des composants de type `FolderClass`.

:::warning
Ici, il s'agit bien de dossiers dans le sens de dossiers physiques, et non pas de dossiers virtuels.
:::

# Récupération des classes de dossiers

## Récupération de toutes les classes de dossiers

Les exemples ci-dessous indiquent comment récupérer la liste de toutes les classes de dossiers présentent sur le scope.

GET {{core}}/rest/folderclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}

	@Autowired
    private FolderClassService folderClassService;

    public List<FolderClass> getAllFolderClass() throws FunctionalException, TechnicalException
    {
        return folderClassService.getAll();
    }

## Récupération d'une liste définie de classes de dossiers

Les exemples ci-dessous indiquent comment récupérer une liste de classes de dossiers à partir de leurs identifiants.

GET {{core}}/rest/folderclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids: liste d'identifiants de classes de dossiers, séparés par des virgules

-- Headers -- 
token: {token}

	@Autowired
    private FolderClassService folderClassService;

    public List<FolderClass> getFolderClasses() throws FunctionalException, TechnicalException
    {
        List<Id> folderClassesIds = Lists.newArrayList(new Id("folderClassId"));
        folderClassesIds.add(new Id("folderClass2Id"));
        return folderClassService.get(folderClassesIds);
    }

# Création de classes de dossiers

Les exemples ci-dessous indiquent comment créer une classe de dossier. 

POST {{core}}/rest/folderclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
        "id": "testFolder",
        "data": {
            "owner": "fadmin",
            "ACL": "acl-folder"
        },
        "tagReferences": [
            {
                "tagName": "Commentaire",
                "mandatory": false,
                "multivalued": false,
                "technical": false,
                "readonly": false,
                "order": 1
            }
        ],
        "children": [
            {
                "id": "*",
                "category": "FOLDER"
            },
            {
                "id": "*",
                "category": "DOCUMENT"
            }
        ],
        "category": "FOLDER"
    }
]
	@Autowired
    private FolderClassService folderClassService;
    
	public void createFolderClasses() throws FunctionalException, TechnicalException
    {
        TagReference tag = new TagReference();
        tag.setTagName("Commentaire");
        tag.setOrder(1);
        List<TagReference> tags = new ArrayList<>();
        tags.add(tag);

        ComponentReference componentFolder = new ComponentReference(new Id("*"), Category.FOLDER);
        ComponentReference componentDoc = new ComponentReference(new Id("*"), Category.DOCUMENT);
        List<ComponentReference> componentsRef = new ArrayList<>();
        componentsRef.add(componentDoc);
        componentsRef.add(componentFolder);

        FolderClass folderClass = new FolderClass();
        folderClass.setId(new Id("testFolder"));
        folderClass.setData(new Data());
        folderClass.getData().setACL(new Id("acl-folder"));
        folderClass.getData().setOwner("admin");
        folderClass.setTagReferences(tags);
        folderClass.setChildren(componentsRef);

        List<FolderClass> folderClasses = new ArrayList<>();
        folderClasses.add(folderClass);

        folderClassService.create(folderClasses);
    }

# Modification de classes de dossiers

Les exemples ci-dessous indiquent comment modifier une classe de dossier.

POST {{core}}/rest/folderclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de dossiers à mettre à jour, séparés par des virgules

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
        "id": "testFolder",
        "data": {
            "owner": "fadmin",
            "ACL": "acl-folder"
        },
        "tagReferences": [
            {
                "tagName": "Commentaire",
                "mandatory": false,
                "multivalued": false,
                "technical": false,
                "readonly": false,
                "order": 1
            },
            {
                "tagName": "NumReference",
                "mandatory": true,
                "multivalued": false,
                "technical": false,
                "readonly": false,
                "order": 2
            }
        ],
        "children": [
            {
                "id": "*",
                "category": "FOLDER"
            },
            {
                "id": "*",
                "category": "DOCUMENT"
            }
        ],
        "category": "FOLDER"
    }
]
	@Autowired
    private FolderClassService folderClassService;
    
	public List<FolderClass> updateFolderClasses(FolderClass folderClass) throws FunctionalException, TechnicalException
    {
        TagReference tag = new TagReference();
        tag.setTagName("NumReference");
        tag.setOrder(2);

        folderClass.getTagReferences().add(tag);

        List<FolderClass> folderClasses = new ArrayList<>();
        folderClasses.add(folderClass);

        return folderClassService.update(folderClasses);
    }

:::warning
En utilisant le service REST, les informations non renseignées seront vidées : il faut envoyer la totalité de la classe de dossier et pas seulement les informations à modifier. 
:::

# Suppression de classes de dossiers

Les exemples ci-dessous indiquent comment supprimer une liste de classes de dossiers.

DELETE {{core}}/rest/folderclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de dossiers à supprimer, séparés par des virgules

-- Headers --
token: {token}

	@Autowired
    private FolderClassService folderClassService;
	
    public void deleteFolderClasses() throws FunctionalException, TechnicalException
    {
        List<Id> folderClassesIds = Lists.newArrayList(new Id("folderClassId"));
        folderClassService.delete(folderClassesIds);
    }

:::warning
La suppression ne fait aucun contrôle : il faut donc vérifier qu'il n'y a pas d'instances en cours avant la suppression d'une classe de dossiers.
:::