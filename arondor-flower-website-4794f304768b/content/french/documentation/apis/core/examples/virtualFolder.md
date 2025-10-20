+++
date = "2001-04-29T13:30:01+01:00"
title = "Manipuler un dossier virtuel"
description = "Créez, récupérez, modifiez, supprimez et recherchez vos dossiers virtuels"
+++

Le service `VirtualFolder` expose toutes les opérations disponibles autour des composants de type `VirtualFolder`.

# Récupération de dossier virtuel

Les exemples ci-dessous indiquent comment récupérer des dossier virtuels à partir d'une liste d'identifiants.

GET {{core}}/rest/virtualFolder/{ids} HTTP/1.1

-- Paramètre d'URL -- 
ids : liste des identifiants de dossiers virtuels à récupérer

-- Headers -- 
core: host de FlowerDocs core
token: {token}
Content-Type: application/json

	@Autowired
    private VirtualFolderService vfService;

    public List<VirtualFolder> get() throws TechnicalException, FunctionalException
    {
        List<Id> ids = Lists.newArrayList(new Id("123654"));
        return vfService.get(ids);
    }

# Création de dossier virtuel

Les exemples ci-dessous indiquent comment créer une liste de dossiers virtuels. 

POST {{core}}/rest/virtualFolder/ HTTP/1.1

-- Headers -- 
core: host de FlowerDocs core
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "VIRTUAL_FOLDER",
    "data": {
      "ACL": "acl-dossierclient",
      "classId": "DossierClient",
      "owner": "jna"
    },
    "name": "123654 - GABIN Jules",
    "tags": [
      {
        "name": "RefClient",
        "readOnly": false,
        "value": [
          "123654"
        ]
      },
      {
        "name": "PrenomClient",
        "readOnly": false,
        "value": [
          "Jules"
        ]
      },
      {
        "name": "NomClient",
        "readOnly": false,
        "value": [
          "GABIN"
        ]
      }
    ]
  }
]

	@Autowired
    private VirtualFolderService vfService;
    
    public List<VirtualFolder> create() throws FunctionalException, TechnicalException
    {
        VirtualFolder vF = ComponentBuilder.component(Category.VIRTUAL_FOLDER).name("123654 - Gabin Jules")
                .classId(new Id("DossierClient")).acl("acl-dossierclient").build();
        vF.getData().setOwner("jna");
        vF.setTags(new Tags());
        vF.getTags().getTags().add(TagBuilder.name("RefClient").value("123654").build());
        vF.getTags().getTags().add(TagBuilder.name("NomClient").value("GABIN").build());
        vF.getTags().getTags().add(TagBuilder.name("DureeConge").value("Jules").build());
        return vfService.create(Arrays.asList(vF));
    }
	

# Modification de dossier virtuel

Cette opération permet de mettre à jour les données d'un dossier virtuel : tags et data (identifiant de la classe, ACL, owner ...).

:::info
Ce service fonctionne en annule et remplace, l'ensemble des valeurs de tags doit donc être fourni par le service au moment de la mise à jour. Il est donc préconisé de réaliser une récupération du dossier virtuel, effectuer les modifications et faire l'appel au service de mise à jour.
:::

POST {{core}}/rest/virtualFolder/{ids} HTTP/1.1

-- Paramètre d'URL -- 
ids : liste des identifiants de dossiers virtuels à mettre à jour

-- Headers --
core: host de FlowerDocs core
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "VIRTUAL_FOLDER",
    "data": {
      "ACL": "acl-dossierclient",
      "classId": "DossierClient",
      "owner": "jna"
    },
    "name": "123654 - GABIN Marc",
    "tags": [
      {
        "name": "RefClient",
        "readOnly": false,
        "value": [
          "123654"
        ]
      },
      {
        "name": "PrenomClient",
        "readOnly": false,
        "value": [
          "Marc"
        ]
      },
      {
        "name": "NomClient",
        "readOnly": false,
        "value": [
          "GABIN"
        ]
      }
    ]
  }
]

	@Autowired
	private VirtualFolderService vfService;
    
	public List<VirtualFolder> update(VirtualFolder vF) throws FunctionalException, TechnicalException
	{
		//ComponentBuilder.component(Category.VIRTUAL_FOLDER).name("123654 - Gabin Marc").classId(new Id("DossierClient")).build();
      vF.setName("123654 - Gabin Marc");
      vF.getData().setACL(new Id("acl-dossierclient"));
      vF.getData().setClassId(new Id("DossierClient"));
      ComponentHelper.setTagValue(vF, "NomClient", "Marc");
      return vfService.update(Arrays.asList(vF));
    }


# Recherche de dossier virtuel

Les opérations de recherche fonctionnent toutes sur le même modèle décrit [ici](broken-link.md).

# Suppression de dossier virtuel

Les exemples ci-dessous indiquent comment supprimer une liste de dossiers virtuels à partir d'une liste d'identifiants.

DELETE {{core}}/rest/virtualFolder/{ids} HTTP/1.1

-- Paramètre d'URL -- 
ids : liste des identifiants de dossiers virtuels à supprimer

-- Headers --
core: host de FlowerDocs core
token: {token}
Content-Type: application/json

	@Autowired
	private VirtualFolderService vfService;
	
	public void delete() throws FunctionalException, TechnicalException
	{
        List<Id> ids = Lists.newArrayList(new Id("123654"));
        vfService.delete(ids);
    }

