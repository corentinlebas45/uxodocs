+++
date = "2001-04-29T13:30:01+01:02"
title = "Manipuler une classe de tags"
description = "Créez, récupérez, modifiez, supprimez vos classes de tags"
+++

Le service `TagClassService` expose toutes les opérations disponibles autour des composants de type `TagClass`.

# Récupération des classes de tags

Les exemples ci-dessous indiquent comment récupérer toutes les classes de tags.

GET {{core}}/rest/tagclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}

	@Autowired
    private TagClassService tcService;

    public List<TagClass> getAll() throws FunctionalException, TechnicalException
    {
        return tcService.getAll();
    }

# Création de classe de tags

Les exemples ci-dessous indiquent comment créer une classe de tags. 

POST {{core}}/rest/tagclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
        "data": {
            "owner": "user1",
            "creationDate": "2023-10-04 11:00:00.000 +0200"
        },
        "type": "STRING",
        "displayNames": [
            {
                "value": "TagCreate",
                "language": "EN"
            },
            {
                "value": "TagCreation",
                "language": "FR"
            }
        ],
        "searchable": false,
        "id": "TagCreation"
    }
]

	@Autowired
    private TagClassService tcService;
    
    public List<TagClass> create() throws FunctionalException, TechnicalException
    {
        List<TagClass> tcList = new ArrayList<VirtualFolderClass>();

        TagClass tc = new TagClass();
        tc.setId(new Id("TestTag"));
        tc.setType(TagValueType.STRING);
        tc.setData(new Data());
        List<I18NLabel> labels = new ArrayList<>();
        I18NLabel labelEN = new I18NLabel("TagValue", "EN");
        I18NLabel labelFR = new I18NLabel("TagValeur", "FR");
        labels.add(labelFR);
        labels.add(labelEN);
        tc.setDisplayNames(labels);
 
        tcList.add(tc);

        return tcService.create(vfcList);
    }

# Modification de classe de tags

Les exemples ci-dessous indiquent comment modifier une classe de tags.

POST {{core}}/rest/tagclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de tags à mettre à jour, séparés par des virgules

-- Headers --

token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
        "data": {
            "owner": "user1",
            "creationDate": "2023-10-04 11:00:00.000 +0200"
        },
        "type": "STRING",
        "displayNames": [
            {
                "value": "TagUpdate",
                "language": "EN"
            },
            {
                "value": "TagMaJ",
                "language": "FR"
            }
        ],
        "searchable": false,
        "id": "TagCreation"
    }
]

	@Autowired
    private TagclassService tcService;

    public List<TagClass> update(TagClass tc) throws FunctionalException, TechnicalException
    {
        List<I18NLabel> labels = new ArrayList<>();
        I18NLabel labelEN = new I18NLabel("NewTagValue", "EN");
        I18NLabel labelFR = new I18NLabel("NouvelleTagValeur", "FR");
        labels.add(labelFR);
        labels.add(labelEN);

        tc.setType(TagValueType.STRING);
        tc.setDisplayNames(labels);

        List<TagClass> tcList = new ArrayList<TagClass>();
        tcList.add(tc);

        return tcService.create(tcList);
    }

# Recherche de classe de tags

Les exemples ci-dessous indiquent comment récupérer une classe de tags à partir d'une liste d'identifiants.

GET {{core}}/rest/tagclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de tags à récupérer, séparés par des virgules

-- Headers --
token: {token}

	@Autowired
	private TagClassService tcService;
	
    public List<TagClass> get() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("Test"));
        return tcService.get(ids);
    }

# Suppression de classe de tags

Les exemples ci-dessous indiquent comment supprimer une liste de classes de tags à partir d'une liste d'identifiants.

DELETE {{core}}/rest/tagclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de tags à supprimer, séparés par des virgules

-- Headers --
token: {token}

	@Autowired
	private TagClassService tcService;
	
    @DeleteMapping()
    public void delete() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("Test"));
        tcService.delete(ids);
    }
