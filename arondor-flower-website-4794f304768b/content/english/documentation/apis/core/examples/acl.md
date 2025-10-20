+++
date = "2018-04-02T12:20:01+01:57"
title = "Managing ACLs"
description = "Manage your access control lists"
+++

The ACLService service displays various operations you can perform on ACLs:

* `get` retrieves all ACLs in the scope.

* `create` creates a list of `securityObjects`. The list of objects must be supplied as input, before they can be created in the application.

* `getForComponent` retrieves a component's ACL from the component's category and identifier.

* `getById` retrieves ACLs from the list of their identifiers.

* `updateById` updates ACLs using their identifiers.

* `deleteById` deletes ACLs based on their identifiers.

# ACL recovery

The examples below show how to retrieve ACLs using the various operations of `get`.

<br/>
GET:

GET {{core}}/rest/acl/ HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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
GET FOR COMPONENT:

GET {{core}}/rest/acl/{category}/{ids} HTTP/1.1

-- URL parameters
core: FlowerDocs Core host
category: component category
ids: component identifier

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
GET BY ID:

GET {{core}}/rest/acl/{ids} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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

# ACL creation

The examples below show how to create ACLs using the operation of `create`.

POST {{core}}/rest/acl/ HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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
        "name": "ACL test"
	}
]

@Autowired
private ACLService service;

public List<SecurityObject> create() throws FunctionalException, TechnicalException
{
	AccessControlEntry ace = new AccessControlEntry(Lists.newArrayList("*"),
		Lists.newArrayList(Permission.UPDATE_CONTENT), GrantType.ALLOW);
	SecurityObject acl = new AccessControlList(new Id("acl_test"), "ACL Test", Lists.newArrayList(ace));
	List<SecurityObject> acls = Lists.newArrayList(acl);
	return service.create(acls);
}

# ACL modification

The examples below show how to update ACLs using the operation of`update`.

POST {{core}}/rest/acl/{ids} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: identifiers of ACLs to be modified

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
        "name": "ACL test"
	}
]

@Autowired
private ACLService service;

public List<SecurityObject> update() throws FunctionalException, TechnicalException
{
	AccessControlEntry ace = new AccessControlEntry(Lists.newArrayList("*"),
		Lists.newArrayList(Permission.UPDATE_CONTENT), GrantType.DENY);
	SecurityObject acl = new AccessControlList(new Id("acl-courrier-outgoing"), "Outgoing mail security",
		Lists.newArrayList(ace));
	List<SecurityObject> acls = Lists.newArrayList(acl);
	return service.update(acls);
}

# Deleting ACL

The examples below show how to delete ACLs using the operation of `delete`.

DELETE {{core}}/rest/acl/{ids} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: identifiers of ACLs to be deleted

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
