---
title: Les recherches sauvegardées
description: Créez, récupérez, modifiez, supprimez vos recherches sauvegardées
---

Le service `StoredSearchService` expose toutes les opérations disponibles autour des composants de type `StoredSearch`.

# Récupération

## Récupération de toutes les recherches sauvegardées

Les exemples ci-dessous indiquent comment récupérer toutes les recherches sauvegardées d'un scope.

GET {{core}}/rest/storedsearch HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}

	@Autowired
    private StoredSearchService service;

    public List<StoredSearch> getAllStoredSearch() throws FunctionalException, TechnicalException
    {
        return service.getAll();
    }

## Récupération d'une liste définie

Les exemples ci-dessous indiquent comment récupérer une liste de recherches sauvegardées à partir de leurs identifiants.

GET {{core}}/rest/storedsearch/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids: liste d'identifiants de recherches sauvegardées

-- Headers -- 
token: {token}

	@Autowired
    private StoredSearchService service;

    public List<StoredSearch> getStoredSearch() throws FunctionalException, TechnicalException
    {
        List<Id> storedSearchIds = Lists.newArrayList(new Id("folderStoredSearch"));
        return service.get(storedSearchIds);
    }

# Création

Les exemples ci-dessous indiquent comment créer une recherche sauvegardée. 

POST {{core}}/rest/storedsearch HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
        "template": "DefaultSearch",
        "data": {
            "owner": "phu",
            "creationDate": "2024-04-05 14:08:03.790 +0200",
            "lastUpdateDate": "2024-04-05 14:08:03.790 +0200",
            "ACL": "STORED_SEARCH"
        },
        "recipients": {
            "users": [
                "phu"
            ]
        },
        "id": "testFolderStoredSearch",
        "category": "FOLDER",
        "request": {
            "selectClause": {
                "fields": [
                    "name",
                    "classid",
                    "creationDate"
                ]
            },
            "orderClauses": [
                {
                    "name": "creationDate",
                    "type": "TIMESTAMP",
                    "ascending": false
                }
            ],
            "start": 0,
            "max": 10
        },
        "displayNames": [
            {
                "value": "test folder stored search",
                "language": "EN"
            },
            {
                "value": "test dossier recherche sauvegardée",
                "language": "FR"
            }
        ]
    }
]
	@Autowired
    private StoredSearchService service;
    
	public List<StoredSearch> createStoredSearch() throws FunctionalException, TechnicalException
    {
        List<Id> usersIds = Lists.newArrayList(new Id("phu"));
        RecipientPrincipals users = new RecipientPrincipals();
        users.setUsers(usersIds);

        List<I18NLabel> labels = new ArrayList<>();
        I18NLabel labelFR = new I18NLabel("test dossier recherche sauvegardée", "FR");
        I18NLabel labelEN = new I18NLabel("test folder search stored", "EN");
        labels.add(labelFR);
        labels.add(labelEN);

        List<String> fields = Lists.newArrayList("name");
        fields.add("classid");
        fields.add("creationDate");
        SelectClause selectClause = new SelectClause();
        selectClause.setFields(fields);
        OrderClause orderClause = new OrderClause("creationDate", TIMESTAMP, false);
        List<OrderClause> orderClauses = Lists.newArrayList(orderClause);
        SearchRequest request = new SearchRequest();
        request.setStart(0);
        request.setMax(10);
        request.setSelectClause(selectClause);
        request.setOrderClauses(orderClauses);

        StoredSearch search = new StoredSearch();
        search.setId(new Id("testFolderStoredSearch"));
        search.setCategory(FOLDER);
        search.setTemplate("DefaultSearch");
        search.setDisplayNames(labels);
        search.setData(new Data());
        search.getData().setOwner("phu");
        search.getData().setACL(new Id("STORED_SEARCH"));
        search.setRecipients(users);
        search.setRequest(request);

        List<StoredSearch> storedSearchList = Lists.newArrayList(search);
        return service.create(storedSearchList);
    }

# Modification

Les exemples ci-dessous indiquent comment modifier une recherche sauvegardée.

POST {{core}}/rest/storedsearch/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de recherches sauvegardés

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
    {
        "template": "DefaultSearch",
        "data": {
            "owner": "phu",
            "creationDate": "2024-04-05 14:08:03.790 +0200",
            "lastUpdateDate": "2024-04-05 14:08:03.790 +0200",
            "ACL": "STORED_SEARCH"
        },
        "recipients": {
            "users": [
                "phu",
                "jna"
            ]
        },
        "id": "testFolderStoredSearch",
        "category": "FOLDER",
        "request": {
            "selectClause": {
                "fields": [
                    "name",
                    "classid",
                    "creationDate"
                ]
            },
            "orderClauses": [
                {
                    "name": "creationDate",
                    "type": "TIMESTAMP",
                    "ascending": false
                }
            ],
            "start": 0,
            "max": 20
        },
        "displayNames": [
            {
                "value": "Folder",
                "language": "EN"
            },
            {
                "value": "Dossier",
                "language": "FR"
            }
        ]
    }
]
	@Autowired
    private StoredSearchService service;
    
	public List<StoredSearch> updateStoredSearch(StoredSearch search) throws FunctionalException, TechnicalException
    {
        List<I18NLabel> labels = new ArrayList<>();
        I18NLabel labelFR = new I18NLabel("Dossiers", "FR");
        I18NLabel labelEN = new I18NLabel("Folder", "EN");
        labels.add(labelFR);
        labels.add(labelEN);

        search.getRecipients().getUsers().add(new Id("jna"));
        search.getRequest().setMax(20);
        search.setDisplayNames(labels);

        List<StoredSearch> storedSearchList = Lists.newArrayList(search);
        return service.update(storedSearchList);
    }

:::warning
En utilisant le service REST, les informations non renseignées seront vidées : il faut envoyer la totalité de la recherche sauvegardée et pas seulement les informations à modifier. 
:::

# Suppression

Les exemples ci-dessous indiquent comment supprimer une liste de recherche sauvegardées.

DELETE {{core}}/rest/storedsearch/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de recherches sauvegardées

-- Headers --
token: {token}

	@Autowired
    private StoredSearchService service;
	
    public void deleteStoredSearch() throws FunctionalException, TechnicalException
    {
        List<Id> storedSearchIds = Lists.newArrayList(new Id("testFolderStoredSearch"));
        service.delete(storedSearchIds);
    }
