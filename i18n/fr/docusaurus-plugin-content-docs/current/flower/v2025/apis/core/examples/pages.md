---
title: Récupérer le contenu d'une page
description: Récupérez le code HTML de vos pages
---

Le service PageService vous permet d'effectuer les opérations `showPublicPage` et `showPrivatePage` sur les pages de votre scope.

* `showPublicPage` permet de récupérer le contenu HTML d'une page publique.

* `showPrivatePage` permet de récupérer le contenu HTML d'une page privée.

# Exemples

Les exemples suivants indiquent comment récupérer une page publique ou privée sur votre scope.


GET {{core}}/rest/public/{scope}/pages/{path} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
scope: le scope FlowerDocs
path: la page à récupérer

-- Headers --
token: {token}
Content-Type: application/json

GET {{core}}/rest/private/{scope}/pages/{path} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
scope: le scope FlowerDocs
path: la page à récupérer

-- Headers --
token: {token}
Content-Type: application/json
