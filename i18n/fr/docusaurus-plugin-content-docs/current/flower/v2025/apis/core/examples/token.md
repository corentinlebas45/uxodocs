+++
date = "2018-06-21T09:40:01+02:00"
title = "Gérer les jetons d’authentification"
description = "Génerez et validez vos jetons"
+++

Le service `token` permet de générer un jeton pour des documents donnés ou encore de rallonger la durée de vie d'un jeton.


# Génération de jetons

Les exemples ci dessous indiquent comment génerer des jetons utilisateurs.

## Générer un jeton avec une durée de vie spécifique

L'exemple ci-dessous indique comment générer un jeton avec une durée de vie paramètrable pour l'utilisateur authentifié.

[shortcode]
[shortcode]
POST {{core}}/rest/token/user?validityTime={validityTime} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
validityTime : la validité du token en secondes

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
	@Autowired
	private TokenService tokenService;

	public String generateToken(long validityTime) throws FunctionalException, TechnicalException
	{
		return service.generate(validityTime);
	}
[shortcode]
[shortcode]

## Générer un nouveau token

L'exemple ci dessous permet de générer un nouveau token pour l'utilisateur authentifié.

[shortcode]
[shortcode]
PUT {{core}}/rest/token/user HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
	@Autowired
	private TokenService tokenService;

	public String generateToken() throws FunctionalException, TechnicalException
	{
		return service.generate();
	}
[shortcode]
[shortcode]

:::warning
Les endpoints de génération de token se terminant par `/token` sont dépréciés depuis la version 2025.2.0 car ils ne renvoient pas de date d'expiration.
:::

## Générer un token pour accéder à des documents

L'exemple ci dessous permet de générer un nouveau token pour l'utilisateur authentifié afin d'accéder à une liste de documents spécifiques.

[shortcode]
[shortcode]
POST {{core}}/rest/token/document/{ids}?readOnly={readOnly} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids: identifiants des documents pour lesquel générer le token
readOnly : true or false pour accès en lecture seule ou non

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
	@Autowired
	private TokenService tokenService;

	public String generateForDocuments(List<id> ids, boolean readOnly) throws FunctionalException, TechnicalException
	{
		return service.generateForDocuments(ids, readOnly);
	}
[shortcode]
[shortcode]

# Validation d'un token

L' exemple ci dessous permet de valider un token.

[shortcode]
[shortcode]
POST {{core}}/rest/token/{tokenToValidate} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
tokenToValidate : le token à valider

-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
	@Autowired
	private TokenService tokenService;

	public String validateToken(String token) throws FunctionalException, TechnicalException
	{
		return service.validate(token);
	}
[shortcode]
[shortcode]