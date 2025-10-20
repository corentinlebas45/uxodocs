---
title: Gérer les ACL
description: Gérez vos listes de contrôle d'accès
---

Le service ACLService expose différentes opérations que vous pouvez effectuer sur les ACL :

* `get` permet de récupérer toutes les ACL du scope.

* `create` crée une liste de `securityObjects`. La liste des objets doit être fournie en entrée pour ensuite être créés dans l'application.

* `getForComponent` récupère l'ACL d'un composant à partir de la catégorie et de l'identifiant de ce composant.

* `getById` récupère les ACL à partir de la liste de leurs identifiants.

* `updateById` met à jour les ACL à partir de leurs identifiants.

* `deleteById` supprime les ACL à partir de leurs identifiants.

# Récupération d'ACL

Les exemples ci-dessous indiquent comment récupérer des ACL en utilisant les différentes opérations de `get`.

<br/>
GET :

GET {{core}}/rest/acl/ HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private ACLService service;

public List<SecurityObject> getAllAcl() throws TechnicalException, FunctionalException
{
    return service.getAll();
}

<br/>
GET FOR COMPONENT :

GET {{core}}/rest/acl/{category}/{ids} HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
category: categorie du composant
ids: identifiant du composant

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private ACLService service;

public SecurityObject getForComponentAcl() throws FunctionalException, TechnicalException
{
	ComponentReference component = new ComponentReference();
	component.setId(new Id("c1ec8407-c1ba-4802-bc03-a99c9cfb5b9e"));
	component.setCategory(Category.DOCUMENT);
	return service.getForComponent(component);
}

<br/>
GET BY ID :

GET {{core}}/rest/acl/{ids} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private ACLService service;

public List<SecurityObject> get() throws FunctionalException, TechnicalException
{
	List<Id> ids = Lists.newArrayList(new Id("acl-admin"));
	return service.get(ids);
}

# Création d'ACL

Les exemples ci-dessous indiquent comment créer des ACL en utilisant l'opération de `create`.

POST {{core}}/rest/acl/ HTTP/1.1

-- Paramètres d'URL --
core : host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
	{
		"entries": [
		{
			"principal": "*",
			"permission": "UPDATE_CONTENT",
			"grant": "ALLOW"
		}],
        "id": "acl_test",
        "name": "Test d'ACL"
	}
]

@Autowired
private ACLService service;

public List<SecurityObject> create() throws FunctionalException, TechnicalException
{
	AccessControlEntry ace = new AccessControlEntry(Lists.newArrayList("*"),
		Lists.newArrayList(Permission.UPDATE_CONTENT), GrantType.ALLOW);
	SecurityObject acl = new AccessControlList(new Id("acl_test"), "Test d'ACL", Lists.newArrayList(ace));
	List<SecurityObject> acls = Lists.newArrayList(acl);
	return service.create(acls);
}

# Modification d'ACL

Les exemples ci-dessous indiquent comment mettre à jour des ACL en utilisant l'opération d'`update`.

POST {{core}}/rest/acl/{ids} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids: identifiants des ACL à modifier

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json)
[
	{
		"entries": [
		{
			"principal": "*",
			"permission": "UPDATE_CONTENT",
			"grant": "DENY"
		}],
        "id": "acl_test",
        "name": "Test d'ACL"
	}
]

@Autowired
private ACLService service;

public List<SecurityObject> update() throws FunctionalException, TechnicalException
{
	AccessControlEntry ace = new AccessControlEntry(Lists.newArrayList("*"),
		Lists.newArrayList(Permission.UPDATE_CONTENT), GrantType.DENY);
	SecurityObject acl = new AccessControlList(new Id("acl-courrier-sortant"), "Securite courrier sortant",
		Lists.newArrayList(ace));
	List<SecurityObject> acls = Lists.newArrayList(acl);
	return service.update(acls);
}

# Suppression d'ACL

Les exemples ci-dessous indiquent comment supprimer des ACL en utilisant l'opération de `delete`.

DELETE {{core}}/rest/acl/{ids} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids: identifiants des ACL à supprimer

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private ACLService service;

public void delete() throws FunctionalException, TechnicalException
{
	List<Id> ids = Lists.newArrayList(new Id("acl_test"));
	service.delete(ids);
}
