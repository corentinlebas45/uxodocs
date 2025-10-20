+++
date = "2001-03-28T13:20:01+02:00"
title = "Sign in"
+++

The `authentication` service generates a user token for a given scope.

# Example
The example below shows how to generate a user token.
POST {{core}}/rest/authentication HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

-- Headers --
Content-Type: application/json

-- Body (json) --
{ 
    "password": "pwd", 
    "scope”: "TEST", 
    "user": "user"
}
	@Autowired
    private Authenticator authenticator;

    public void authenticateToScope(String scopeId) throws TechnicalException, FunctionalException
    {
        authenticator.authenticate(scopeId);
    }
