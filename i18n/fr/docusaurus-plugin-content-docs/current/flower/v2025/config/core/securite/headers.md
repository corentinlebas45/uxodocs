---
title: Headers
description: Sécurisation des requêtes effectuées auprès de FlowerDocs Core.
---

# Content security policy (CSP) et HTTP Strict Transport Security (HSTS)

Afin de se prémunir contre les attaques, FlowerDocs positionne par défaut le mécanisme de sécurité `Content security policy` avec la valeur `frame-ancestors 'self'` ainsi que le mécanisme `HTTP Strict Transport Security` avec une durée maximum par défaut à `10 minutes` . Il est néanmoins possible de modifier ces valeurs à l'aide des paramètres :

* CSP : `gui.content.security.policy`
* HTS max-age : `gui.hsts.max.age`