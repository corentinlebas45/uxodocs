+++
date = "2001-04-29T13:30:01+01:02"
title = "Manipuler les classes de documents"
description = "Créez, récupérez, modifiez, supprimez vos classes de documents"
+++

Le service `DocumentClassService` expose toutes les opérations disponibles autour des composants de type `DocumentClass`.

# Récupération des classes de documents

## Récupération de toutes les classes de documents

Les exemples ci-dessous indiquent comment récupérer toutes les classes de documents.

[shortcode]
[shortcode]
GET {{core}}/rest/documentclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {{token}}

[shortcode]
[shortcode]
	@Autowired
    private DocumentClassService docClassService;

    public List<DocumentClass> getAllDocumentClass() throws FunctionalException, TechnicalException
    {
        return docClassService.getAll();
    }
[shortcode]
[shortcode]

## Récupération d'une liste définie de classes de documents

Les exemples ci-dessous indiquent comment récupérer une liste de classes de documents à partir de leurs identifiants.

[shortcode]
[shortcode]
GET {{core}}/rest/documentclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids: liste d'identifiants de classes de documents

-- Headers -- 
token: {{token}}

[shortcode]
[shortcode]
	@Autowired
    private DocumentClassService docClassService;

    public List<DocumentClass> getDocumentClasses() throws FunctionalException, TechnicalException
    {
        List<Id> docClassesIds = Lists.newArrayList(new Id("docClassId"));
        docClassesIds.add(new Id("docClass2Id"));
        return docClassService.get(docClassesIds);
    }
[shortcode]
[shortcode]

# Création de classes de documents

Les exemples ci-dessous indiquent comment créer une classe de documents. 

[shortcode]
[shortcode]
POST {{core}}/rest/documentclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
    {
        "id": "CourrierTest",
        "data": {
            "owner": "fadmin",
            "creationDate": "2024-03-07 13:59:53.401 +0100",
            "lastUpdateDate": "2024-03-07 13:59:53.401 +0100",
            "ACL": "acl-courrier"
        },
        "tagCategories": [
            "InfoCourrier",
            "InfoClient"
        ],
        "tagReferences": [
            {
                "tagName": "RefClient",
                "mandatory": false,
                "multivalued": false,
                "technical": false,
                "readonly": false,
                "order": 0,
                "descriptions": [
                    {
                        "value": "Internal customer reference allowing to classify it",
                        "language": "EN"
                    },
                    {
                        "value": "Référence interne du client permettant de faire le lien avec son dossier",
                        "language": "FR"
                    }
                ]
            }
        ],
        "displayNames": [
            {
                "value": "Courrier Test",
                "language": "FR"
            }
        ],
        "descriptions": [
            {
                "value": "Test Document issu d'une chaîne d'acquisition",
                "language": "FR"
            }
        ],
        "RetentionDuration": {
            "value": 0,
            "unit": "MONTH"
        },
        "category": "DOCUMENT",
        "active": false,
        "technical": false
    }
]
[shortcode]
[shortcode]
	@Autowired
    private DocumentClassService docClassService;
    
	public void createDocumentClasses() throws FunctionalException, TechnicalException
    {
        List<Id> tagCat = new ArrayList<Id>();
        tagCat.add(new Id("InfoCourrier"));
        tagCat.add(new Id("InfoClient"));

        List<I18NLabel> tagRefLabels = new ArrayList<>();
        I18NLabel tagReflabelFR = new I18NLabel(
                "Référence interne du client permettant de faire le lien avec son dossier", "FR");
        I18NLabel tagReflabelEN = new I18NLabel("Internal customer reference allowing to classify it", "EN");
        tagRefLabels.add(tagReflabelFR);
        tagRefLabels.add(tagReflabelEN);

        List<I18NLabel> docClassLabels = new ArrayList<>();
        I18NLabel docClasslabelFR = new I18NLabel("Test Document issu d'une chaîne d'acquisition", "FR");
        docClassLabels.add(docClasslabelFR);

        TagReference tag = new TagReference();
        tag.setTagName("NumReference");
        tag.setDescriptions(tagRefLabels);
        List<TagReference> tags = new ArrayList<>();
        tags.add(tag);

        DocumentClass docClass = new DocumentClass();
        docClass.setId(new Id("CourrierTest"));
        docClass.setData(new Data());
        docClass.getData().setOwner("admin");
        docClass.getData().setCreationDate(new Date());
        docClass.getData().setACL(new Id("acl-courrier"));
        docClass.setTagCategories(tagCat);
        docClass.setTagReferences(tags);
        docClass.setDescriptions(docClassLabels);
        docClass.setCategory(com.flower.docs.domain.component.Category.DOCUMENT);

        List<DocumentClass> docClasses = new ArrayList<>();
        docClasses.add(docClass);

        docClassService.create(docClasses);
    }
[shortcode]
[shortcode]

# Modification de classes de documents

Les exemples ci-dessous indiquent comment modifier une classe de documents.

[shortcode]
[shortcode]
POST {{core}}/rest/documentclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de documents à mettre à jour, séparés par des virgules

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
    {
        "id": "CourrierTest",
        "data": {
            "owner": "fadmin",
            "creationDate": "2024-03-07 13:59:53.401 +0100",
            "lastUpdateDate": "2024-03-07 13:59:53.401 +0100",
            "ACL": "acl-courrier"
        },
        "tagCategories": [
            "InfoClient"
        ],
        "tagReferences": [
            {
                "tagName": "RefClient",
                "mandatory": true,
                "multivalued": false,
                "technical": false,
                "readonly": false,
                "order": 0
            }
        ],
        "displayNames": [
            {
                "value": "Courrier Test",
                "language": "FR"
            }
        ],
        "descriptions": [
            {
                "value": "Test Document issu d'une chaîne d'acquisition",
                "language": "FR"
            }
        ],
        "RetentionDuration": {
            "value": 0,
            "unit": "MONTH"
        },
        "category": "DOCUMENT",
        "active": false,
        "technical": false
    }
]
[shortcode]
[shortcode]
	@Autowired
    private DocumentClassService docClassService;
    
	public List<DocumentClass> updatedocClass(DocumentClass docClass) throws FunctionalException, TechnicalException
    {
        TagReference tag = new TagReference();
        tag.setTagName("NameClient");

        docClass.getTagCategories().remove(new Id("InfoCourrier"));
        docClass.getTagReferences().add(tag);
        List<DocumentClass> docClasses = new ArrayList<>();
        docClasses.add(docClass);

        return docClassService.update(docClasses);
    }
[shortcode]
[shortcode]

:::warning
En utilisant le service REST, les informations non renseignées seront vidées : il faut envoyer la totalité de la classe de document et pas seulement les informations à modifier.
:::

# Suppression de classes de documents

Les exemples ci-dessous indiquent comment supprimer une liste de classes de documents.

[shortcode]
[shortcode]
DELETE {{core}}/rest/documentclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de documents à supprimer, séparés par des virgules

-- Headers --
token: {{token}}

[shortcode]
[shortcode]
	@Autowired
    private DocumentClassService docClassService;
	
    public void deleteDocumentClasses() throws FunctionalException, TechnicalException
    {
        List<Id> docClassesIds = Lists.newArrayList(new Id("docClassId"));
        docClassService.delete(docClassesIds);
    }
[shortcode]
[shortcode]

:::warning
La suppression ne fait aucun contrôle : il faut donc vérifier qu'il n'y a pas d'instances en cours avant la suppression d'une classe de document.
:::
