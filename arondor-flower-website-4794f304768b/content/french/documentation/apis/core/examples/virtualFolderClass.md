+++
date = "2001-04-29T13:30:01+01:01"
title = "Manipuler une classe de dossier virtuel"
description = "Créez, récupérez, modifiez, supprimez vos classes de dossiers virtuels"
+++

Le service `VirtualFolderClass` expose toutes les opérations disponibles autour des composants de type `VirtualFolderClass`.

# Récupération des classes de dossier virtuel

Les exemples ci-dessous indiquent comment récupérer toutes les classes de dossier virtuels.

GET {{core}}/rest/virtualfolderclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

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

# Création de classe de dossier virtuel

Les exemples ci-dessous indiquent comment créer une classe de dossier virtuel. 

POST {{core}}/rest/virtualfolderclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

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
	

# Modification de classe de dossier virtuel

Cette opération permet de mettre à jour les données d'une classe de dossier virtuel : tags et recherche

:::info
Ce service fonctionne en annule et remplace, l'ensemble des valeurs de tags doit donc être fourni par le service au moment de la mise à jour. Il est donc préconisé de réaliser une récupération de la classe dossier virtuel, effectuer les modifications et faire l'appel au service de mise à jour.
:::

POST {{core}}/rest/virtualfolderclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de dossiers virtuels à mettre à jour, séparés par des virgules

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


# Recherche de classe de dossier virtuel

L'exemple ci-dessous indique comment récupérer une classe de dossiers virtuels à partir d'une liste d'identifiants.

GET {{core}}/rest/virtualfolderclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de dossiers virtuels à récupérer, séparés par des virgules

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


# Suppression de classe de dossier virtuel

Cette opération permet de supprimer une liste de classe de dossiers virtuels à partir d'une liste d'identifiants.

DELETE {{core}}/rest/virtualfolderclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de dossiers virtuels à supprimer, séparés par des virgules

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

