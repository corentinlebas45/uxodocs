+++
date = "2001-03-30T13:20:01+02:00"
title = "Manipuler les délégations"
description = "Créez, modifiez, supprimez les délégations"
+++

Le service `Delegations` expose toutes les opérations disponibles autour des délégations.

# Récupération de délégations

Les exemples ci-dessous indiquent comment récupérer des délégations en utilisant les différentes opérations de `get` :

## Récupération à partir d'un identifiant

[shortcode]
[shortcode]
GET {{core}}/rest/delegation/{ids} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
ids: identifiants des délégations à récupérer, séparés par des virgules

-- Headers --
token: {{token}}
[shortcode]

[shortcode]
	@Autowired
	private DelegationService service;
	   
	public List<Delegation> getDelegation() throws TechnicalException, FunctionalException
	{
		List<Id> ids = Lists.newArrayList(new Id("delegationId"));
	    return service.get(ids);
	}
[shortcode]
[shortcode]

## Récupération à partir de l'utilisateur à qui la délégation a été donnée

[shortcode]
[shortcode]
GET {{core}}/rest/delegation/delegate/{id}?includeTerminated={include} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
id: identifiant de l'utilisateur à qui la délégation a été donnée
include: boolean

-- Headers --
token: {{token}}
[shortcode]

[shortcode]
	@Autowired
	private DelegationService service;
	   
	public List<Delegation> getDelegationByDelegate() throws TechnicalException, FunctionalException
	{
		return service.getByDelegate(new Id("userDelegateId"), true);
	}
[shortcode]
[shortcode]

## Récupération à partir de l'utilisateur qui a donné la délégation

[shortcode]
[shortcode]
GET {{core}}/rest/delegation/delegator/{id}?includeTerminated={include} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
id: identifiant de l'utilisateur qui a donné la délégation
include: boolean

-- Headers --
token: {{token}}
[shortcode]

[shortcode]
	@Autowired
	private DelegationService service;
	   
	public List<Delegation> getDelegationByDelegator() throws TechnicalException, FunctionalException
	{
		return service.getByDelegator(new Id("userDelegatorId"), true);
	}
[shortcode]
[shortcode]

# Création de délégations

[shortcode]
[shortcode]
POST {{core}}/rest/delegation HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
    "creationDate": "2024-04-07 13:59:53.401 +0100",
    "creator": "jna",
    "delegate": "phu",
    "delegator": "jna",
    "description": "test création délégation",
    "end": "2024-04-09 13:59:53.401 +0100",
    "start": "2024-04-07 13:59:53.401 +0100"
  }
]
[shortcode]

[shortcode]
	@Autowired
	private DelegationService service;
	   
	public List<Delegation> createDelegation() throws TechnicalException, FunctionalException
    {
        Date start = new Date();
        Date end = new Date();

        Delegation del = new Delegation();
        del.setCreationDate(new Date());
        del.setEnd(end);
        del.setStart(start);
        del.setCreator(new Id("jna"));
        del.setDelegator(new Id("jna"));
        del.setDelegate(new Id("phu"));
        del.setDescription("test création délégation");

        List<Delegation> listDel = new ArrayList<Delegation>();
        listDel.add(del);

        return service.create(listDel);
    }
[shortcode]
[shortcode]

# Modification de délégations

[shortcode]
[shortcode]
POST {{core}}/rest/delegation/{ids} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
ids: identifiants des délégations à mettre à jour, séparés par des virgules

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
    "creationDate": "2024-04-07 13:59:53.401 +0100",
    "creator": "jna",
    "delegate": "nca",
    "delegator": "jna",
    "description": "delegation jna to nca",
    "end": "2024-04-09 13:59:53.401 +0100",
    "start": "2024-04-07 13:59:53.401 +0100"
  }
]
[shortcode]

[shortcode]
	@Autowired
	private DelegationService service;
	   
	public List<Delegation> updateDelegation(Delegation del) throws TechnicalException, FunctionalException
    {
        del.setCreator(new Id("jna"));
        del.setDelegator(new Id("jna"));
        del.setDelegate(new Id("nca"));
        del.setDescription("delegation jna to nca");

        List<Delegation> listDel = new ArrayList<Delegation>();
        listDel.add(del);

        return service.update(listDel);
    }
[shortcode]
[shortcode]

:::warning 
En utilisant le service REST, les informations non renseignées seront vidées : il faut envoyer la totalité de la délégation et pas seulement les informations à modifier.
:::

# Suppression de délégations

[shortcode]
[shortcode]
DELETE {{core}}/rest/delegation/{ids} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
ids: identifiants des délégations à supprimer, séparés par des virgules

-- Headers --
token: {{token}}
[shortcode]

[shortcode]
	@Autowired
	private DelegationService service;
	   
	public List<Delegation> deleteDelegation() throws TechnicalException, FunctionalException
	{
		List<Id> ids = Lists.newArrayList(new Id("delegationId"));
	    return service.delete(ids);
	}
[shortcode]
[shortcode]