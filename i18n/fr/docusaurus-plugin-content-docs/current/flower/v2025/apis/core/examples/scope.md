---
title: Gestion de scope
description: Récuperez les informations, supprimez de vos scopes
---

Le service `ScopeService` expose les opérations suivantes :

* `get` : pour récupérer les informations d'un scope 

# Récupération d'un scope

L'exemple ci dessous indique comment récupérer les informations d'un scope.

GET {{core}}/rest/scope/{idScope} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
idScope: identifiant du scope à récupérer

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
