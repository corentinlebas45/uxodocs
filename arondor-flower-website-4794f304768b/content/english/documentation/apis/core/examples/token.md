+++
date = "2018-06-21T09:40:01+02:00"
title = "Managing authentication tokens"
description = "Generate and validate your tokens"
+++

The `token` service can be used to generate a token for specific documents, or to extend the life of a token.


# Token generation

The examples below show how to generate user tokens.

## Generate a token with a specific lifetime

The example below shows how to generate a token with a configurable lifetime for the authenticated user.

POST {{core}}/rest/token/user?validityTime={validityTime} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
validityTime: token validity in seconds

-- Headers --
token: {token}
Content-Type: application/json
	@Autowired
	private TokenService tokenService;

	public String generateToken(long validityTime) throws FunctionalException, TechnicalException
	{
		return service.generate(validityTime);
	}

## Generate a new token

The example below generates a new token for the authenticated user.

PUT {{core}}/rest/token/user HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

-- Headers --
token: {token}
Content-Type: application/json
	@Autowired
	private TokenService tokenService;

	public String generateToken() throws FunctionalException, TechnicalException
	{
		return service.generate();
	}

:::warning
Token generation endpoints ending with `/token` are deprecated since version 2025.2.0 because they do not return an expiration date.
:::

## Generate a token to access documents

The example below generates a new token for the authenticated user to access a list of specific documents.

POST {{core}}/rest/token/document/{ids}?readOnly={readOnly} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: document identifiers for which to generate the token
readOnly: true or false for read-only or non-read-only access

-- Headers --
token: {token}
Content-Type: application/json
	@Autowired
	private TokenService tokenService;

	public String generateForDocuments(List<id> ids, boolean readOnly) throws FunctionalException, TechnicalException
	{
		return service.generateForDocuments(ids, readOnly);
	}


# Token validation

The example below shows how to validate a token.

POST {{core}}/rest/token/{tokenToValidate} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
tokenToValidate: the token to validate

-- Headers --
token: {token}
Content-Type: application/json
	@Autowired
	private TokenService tokenService;

	public String validateToken(String token) throws FunctionalException, TechnicalException
	{
		return service.validate(token);
	}
