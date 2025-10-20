+++
date = "2000-02-01T12:20:01+02:00"
title = "Swagger UI"
Order = 17
Theme = "general"
Icon = "fas fa-globe"
Description = "Tester et consommer les web services REST."
Duration = "10m" 
+++

# Objectif
L'objectif de ce module est de donner les clés pour la prise en main et l'utilisation de Swagger UI pour consommer les web services REST exposés par FlowerDocs Core.

# Accès 

Swagger UI est exposée par FlowerDocs Core sur la page `/swagger-ui/index.html`.
Par exemple, pour la démonstration en ligne, Swagger UI est accessible [ici](https://www.demo.flowerdocs.cloud/flower-docs-ws/swagger-ui/index.html).

# Authentification

Les services exposés par FlowerDocs Core requièrent que le client soit authentifié, il est donc nécessaire de fournir un jeton aux requêtes exécutées depuis Swagger UI.

Commençons donc par générer un jeton utilisateur : 

* Dans la barre de menu, sélectionner la spécification `Authentication` 
* Sélectionner le web service `authentication-rest-controller`
* Déplier le endpoint ``POST /rest/authentication``
* Cliquer sur ``Try it out`` 
* Dans l'éditeur de requête, remplir les champs ``password``, ``scope`` et ``user`` 

Si les informations saisies sont correctes, la section présentant la réponse HTTP indique : 

* un code retour 200
* un objet JSON token avec sa valeur textuelle et sa date d'expiration


Ensuite, afin d'authentifier les futures requêtes : 

* Copier-coller la valeur textuelle du jeton généré (champ ``value``)
* Cliquer sur le bouton ``Authorize`` 
* Coller le jeton copié 

Les futures requêtes fourniront à FlowerDocs Core le jeton défini qui permettra de les authentifier.

# Ma première requête

Dans cette partie, nous allons tester notre première requête à l'aide de Swagger UI.
Cette requête permettra de rechercher tous les documents donc le nom contient la lettre ``a``.

* Dans la barre de menu, sélectionner la spécification `Component` 
* Sélectionner le web service `document-rest-controller`
* Déplier le endpoint ``POST /rest/documents/search``
* Cliquer sur ``Try it out`` 
* Dans l'éditeur de requête, copier-coller la requête suivante : 


```javascript
{
    "filterClauses": [{
        "criteria": [{
            "name": "name",
            "operator": "CONTAINS",
            "type": "STRING",
            "values": ["a"]
        }]
    }],
    "max": 10
}
```


Pour exécuter la recherche, cliquer sur le bouton ``Execute`` et consulter, dans la section présentant la réponse HTTP, les résultats trouvés.