+++
date = "2023-06-22T12:00:00+02:00"
title = "Scope management"
description = "Recover information, delete from your scopes"
+++

The `ScopeService` service displays the following operations:

* `get`: to retrieve information from a scope 

# Scope fetch

The example below shows how to retrieve information from a scope.

GET {{core}}/rest/scope/{idScope} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
idScope: Identifier of scope to be recovered

-- Headers --
token: {token}
Content-Type: application/json

	@Autowired
    private ScopeService scopeService;
    
    public List<Scope> get() throws TechnicalException, FunctionalException
    {
		List<Id> ids = Lists.newArrayList(new Id("scopeId"));
		return service.get(ids);
    }
