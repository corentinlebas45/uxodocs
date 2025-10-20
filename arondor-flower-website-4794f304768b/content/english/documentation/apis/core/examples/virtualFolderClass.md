+++
date = "2001-04-29T13:30:01+01:01"
title = "Manipulating a virtual folder class"
description = "Create, retrieve, modify, delete your virtual folder classes"
+++

The `VirtualFolderClass` service exposes all the operations available around the `VirtualFolderClass` type components.

# Retrieving virtual folder classes

The examples below show how to retrieve all virtual folder classes.

GET {{core}}/rest/virtualfolderclass HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host

-- Headers -- 
token: {token}
Content-Type: application/json

	@Autowired
    private VirtualFolderClassService vfcService;

    @GetMapping("/getAll")
    public List<VirtualFolderClass> getAll() throws FunctionalException, TechnicalException
    {
        return vfcService.getAll();
    }

# Virtual folder class creation

The examples below show how to create ACLs using the operation of create. 

POST {{core}}/rest/virtualfolderclass HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host

-- Headers -- 
token: {token}
Content-Type: application/json

-- Body (json) --
[{
    "searches": [
      {
        "category": "DOCUMENT",
        "request": {
          "selectClause": {
            "fields": [
              "CanalEntree",
              "ServiceDestinataire",
              "TypeCourrier"
            ]
          },
          "filterClauses": [
            {
              "type": "com.flower.docs.domain.search.AndClause",
              "criteria": [
                {
                  "name": "classid",
                  "operator": "EQUALS_TO",
                  "type": "STRING",
                  "values": [
                    "CourrierEntrant"
                  ]
                }
              ]
            }
          ],
          "orderClauses": [
            {
              "name": "DateCourrier",
              "type": "TIMESTAMP",
              "ascending": false
            }
          ],
          "start": 0,
          "max": 0,
          "aggregation": {
            "type": "com.flower.docs.domain.search.FieldAggregation",
            "field": "DateCourrier"
          }
        },
        "displayNames": [
          {
            "language": "EN"
          },
          {
            "language": "FR"
          }
        ],
        "id": "searchCourrierEntrant"
      }
    ],
    "id": "TestVF",
    "data": {
      "owner": "fadmin",
      "creationDate": "2023-08-28 10:41:52.340 +0200",
      "lastUpdateDate": "2023-08-28 10:43:49.169 +0200",
      "ACL": "acl-distribution-tab"
    },
    "displayNames": [
      {
        "value": "TestVF",
        "language": "EN"
      },
      {
        "value": "TestVF",
        "language": "FR"
      }
    ],
    "descriptions": [
      {
        "language": "EN"
      },
      {
        "language": "FR"
      }
    ],
    "RetentionDuration": {
      "value": 0,
      "unit": "MONTH"
    },
    "category": "VIRTUAL_FOLDER",
    "active": false
}]

	@Autowired
    private VirtualFolderClassService vfcService;
    
	@PostMapping
    public List<VirtualFolderClass> create() throws FunctionalException, TechnicalException
    {
        List<VirtualFolderClass> vfcList = new ArrayList<VirtualFolderClass>();

        VirtualFolderClass vfc = new VirtualFolderClass();
        vfc.setId(new Id("Test"));
        List<TagReference> tagList = new ArrayList<TagReference>();
        TagReference tag = new TagReference();
        tag.setTagName("TypeCourrier");
        tagList.add(tag);
        vfc.setTagReferences(tagList);
        vfc.setCategory(Category.DOCUMENT);

        Data data = new Data(null, null, null, null, null, null, new Id("acl-distribution-tab"));
        vfc.setData(data);
        vfcList.add(vfc);

        return vfcService.create(vfcList);
    }
	

# Virtual folder class modification

This operation updates the data of a virtual folder class: tags and search

:::info
This service operates on a cancel and replace basis, so all tag values must be supplied by the service at the time of update. It is therefore advisable to retrieve the virtual folder class, make the modifications and call the update service.
:::

POST {{core}}/rest/virtualfolderclass/{ids} HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host
ids: comma-separated list of virtual folder class identifiers to be updated

-- Headers --

token: {token}
Content-Type: application/json

-- Body (json) --
[{
    "searches": [
      {
        "category": "DOCUMENT",
        "request": {
          "selectClause": {
            "fields": [
              "CanalEntree",
              "ServiceDestinataire",
              "TypeCourrier",
			  "ClientId"
            ]
          },
          "filterClauses": [
            {
              "type": "com.flower.docs.domain.search.AndClause",
              "criteria": [
                {
                  "name": "classid",
                  "operator": "EQUALS_TO",
                  "type": "STRING",
                  "values": [
                    "CourrierEntrant"
                  ]
                }
              ]
            }
          ],
          "orderClauses": [
            {
              "name": "DateCourrier",
              "type": "TIMESTAMP",
              "ascending": false
            }
          ],
          "start": 0,
          "max": 0,
          "aggregation": {
            "type": "com.flower.docs.domain.search.FieldAggregation",
            "field": "DateCourrier"
          }
        },
        "displayNames": [
          {
            "language": "EN"
          },
          {
            "language": "FR"
          }
        ],
        "id": "searchCourrierEntrant"
      }
    ],
    "id": "TestVF",
    "data": {
      "owner": "fadmin",
      "creationDate": "2023-08-28 10:41:52.340 +0200",
      "lastUpdateDate": "2023-08-28 10:43:49.169 +0200",
      "ACL": "acl-distribution-tab"
    },
    "displayNames": [
      {
        "value": "TestVF",
        "language": "EN"
      },
      {
        "value": "TestVF",
        "language": "FR"
      }
    ],
    "descriptions": [
      {
        "language": "EN"
      },
      {
        "language": "FR"
      }
    ],
    "RetentionDuration": {
      "value": 0,
      "unit": "MONTH"
    },
    "category": "VIRTUAL_FOLDER",
    "active": false
}]

	@Autowired
	private VirtualFolderClassService vfcService;
    
	@PostMapping("/update")
    public void update() throws FunctionalException, TechnicalException
    {
        List<VirtualFolderClass> vfcList = new ArrayList<VirtualFolderClass>();

        VirtualFolderClass vfc = new VirtualFolderClass();
        vfc.setId(new Id("Test"));
        List<TagReference> tagList = new ArrayList<TagReference>();
        TagReference tag = new TagReference();
        tag.setTagName(""ClientId"");
        tagList.add(tag);
        vfc.setTagReferences(tagList);
        vfc.setCategory(Category.DOCUMENT);

        Data data = new Data(null, null, null, null, null, null, new Id("acl-distribution-tab"));
        vfc.setData(data);
        vfcList.add(vfc);

        vfcService.update(vfcList);
    }


# Virtual folder class search

The example below shows how to retrieve a virtual folder class from a list of identifiers.

GET {{core}}/rest/virtualfolderclass/{ids} HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host
ids: comma-separated list of virtual folder class identifiers to be retrieved

-- Headers --
token: {token}
Content-Type: application/json

	@Autowired
	private VirtualFolderClassService vfcService;
	
    @GetMapping
    public List<VirtualFolderClass> get() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("Test"));
        return vfcService.get(ids);
    }


# Virtual folder class deletion

This operation deletes a list of virtual folder classes from a list of identifiers.

DELETE {{core}}/rest/virtualfolderclass/{ids} HTTP/1.1

-- URL parameters -- 
core: FlowerDocs Core host
ids: comma-separated list of virtual folder class identifiers to be deleted

-- Headers --
token: {token}
Content-Type: application/json

	@Autowired
	private VirtualFolderClassService vfcService;
	
    @DeleteMapping()
    public void delete() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("Test"));
        vfcService.delete(ids);
    }

