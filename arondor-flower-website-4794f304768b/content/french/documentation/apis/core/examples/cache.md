+++
date = "2001-01-29T12:20:01+01:58"
title = "Purger les caches"
description = "Purgez les caches de votre scope"
+++

Le service CacheService vous permet d'effectuer les opérations getAll, clear et clearAll sur les caches de votre scope.

* `getAll` permet de récupérer tous les caches du scope.

* `clearAll` purge tous les caches de votre scope.

* `clear` permet la purge d'une liste de caches définis par leur nom.

# Récupération de cache

Les exemples suivants définissent comment récupérer la liste de tous les caches d'un scope FlowerDocs.

<br/>
GET ALL :
GET {{core}}/rest/caches HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private CacheService cacheService;

public String[] getAll() throws FunctionalException, TechnicalException
{
	List<String> cacheNames = cacheService.getAll();
	return cacheNames.toArray(new String[] {});
}

# Purge de cache

Les exemples ci-dessous indiquent comment purger les caches d'un scope FlowerDocs en utilisant les différentes opérations de clear.

<br/>
CLEAR ALL :

DELETE {{core}}/rest/caches HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

import com.flower.docs.domain.security.Roles;
import com.flower.docs.security.authorities.RoleEvaluator;

@Autowired
private CacheService cacheService;

public void clearAll() throws FunctionalException, TechnicalException
{
	cacheService.clearAll();
}

<br/>
CLEAR :

DELETE {{core}}/rest/caches/{names} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
names: nom des caches à purger

-- Headers --
token: {token}
Content-Type: application/json

@Autowired
private CacheService cacheService;

public void clear() throws FunctionalException, TechnicalException
    {
        List<String> cachesToClear = Lists.newArrayList("GEC-user", "GEC-DocumentClass");
        cacheService.clear(cachesToClear);
    }
