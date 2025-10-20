+++
date = "2001-01-29T12:20:01+01:58"
title = "Purging caches"
description = "Purge your scope's caches"
+++

The CacheService service lets you perform getAll, clear and clearAll operations on your scope's caches.

* `getAll` allows you to retrieve all caches in the scope.

* `clearAll` purges all your scope's caches.

* `clear` allows you to purge a list of caches defined by their name.

# Cache retrieval

The following examples show how to retrieve the list of all FlowerDocs scope caches.

<br/>
GET ALL:
GET {{core}}/rest/caches HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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

# Cache purge

The examples below show how to purge FlowerDocs scope caches using the various operations of clear.

<br/>
CLEAR ALL:

DELETE {{core}}/rest/caches HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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
CLEAR:

DELETE {{core}}/rest/caches/{names} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
names: name of caches to be purged

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
