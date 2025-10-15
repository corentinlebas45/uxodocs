+++
date = "2001-03-28T13:20:01+02:00"
title = "S'authentifier"
+++

Le service `authentication` permet de générer un jeton utilisateur pour un scope donné.

# Exemple
L'exemple ci-dessous indique comment générer un jeton utilisateur.
[shortcode]
[shortcode]
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
[shortcode]
[shortcode]
	@Autowired
    private Authenticator authenticator;

    public void authenticateToScope(String scopeId) throws TechnicalException, FunctionalException
    {
        authenticator.authenticate(scopeId);
    }
[shortcode]