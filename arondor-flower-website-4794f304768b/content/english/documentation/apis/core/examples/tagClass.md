+++
date = "2001-04-29T13:30:01+01:02"
title = "Manipulating a tag class"
description = "Create, retrieve, modify, delete your tag classes"
+++

The `TagClassService` service exposes all the operations available around `TagClass` type components.

# Retrieving tag classes

The examples below show how to retrieve all tag classes.

GET {{core}}/rest/tagclass HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host

-- Headers -- 
token: {token}

	@Autowired
    private TagClassService tcService;

    public List<TagClass> getAll() throws FunctionalException, TechnicalException
    {
        return tcService.getAll();
    }

# Tag class creation

The examples below show how to create a tag class. 

POST {{core}}/rest/tagclass HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host

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

# Modifying tag classes

This operation updates the data of a tag class

POST {{core}}/rest/tagclass/{ids} HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host
ids: comma-separated list of virtual folder class identifiers to be updated

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
    private TagClassService tcService;
    
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


# Tag class search

The example below shows how to retrieve a tag class from a list of identifiers.

GET {{core}}/rest/tagclass/{ids} HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host
ids: comma-separated list of tag class identifiers to be retrieved

-- Headers --
token: {token}

	@Autowired
	private TagClassService tcService;
	
    public List<TagClass> get() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("Test"));
        return tcService.get(ids);
    }


# Tag class deletion

This operation deletes a list of tag classes from a list of identifiers.

DELETE {{core}}/rest/tagclass/{ids} HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host
ids: comma-separated list of tag class identifiers to be deleted

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

