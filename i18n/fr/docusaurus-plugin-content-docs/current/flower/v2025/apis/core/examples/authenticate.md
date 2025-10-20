---
title: S'authentifier
---

Le service `authentication` permet de générer un jeton utilisateur pour un scope donné.

# Exemple
L'exemple ci-dessous indique comment générer un jeton utilisateur.
POST {{core}}/rest/authentication HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
Content-Type: application/json

-- Body (json) --
{ 
    "password": "pwd", 
    "scope": "TEST", 
    "user": "user"
}
	@Autowired
    private Authenticator authenticator;

    public void authenticateToScope(String scopeId) throws TechnicalException, FunctionalException
    {
        authenticator.authenticate(scopeId);
    }
