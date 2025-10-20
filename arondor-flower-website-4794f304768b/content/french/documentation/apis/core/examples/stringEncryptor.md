+++
date = "2001-03-30T13:20:01+02:00"
title = "Chiffrer une chaîne de caractère"
description = "Chiffrez vos mots de passes et données sensibles"
+++

Le service `Chiffrement` expose l'opération de chiffrement de `chaînes de caractères`.


# Chiffrement de données

Les exemples ci-dessous indiquent comment sécuriser une chaîne de caractère à l'aide de l'opération de `post`.

POST {{core}}/rest/encrypt/ HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
message: chaine de caractère à chiffrer, entre doubles quotes

-- Headers --
token: {token}
Content-Type: application/json


@Autowired
private StringEncryptor encryptor;

@PostMapping
public String encrypt()
{
	return encryptor.encrypt("password");
}
