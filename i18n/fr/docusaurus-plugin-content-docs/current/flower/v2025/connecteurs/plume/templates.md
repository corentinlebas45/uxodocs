+++
date = "2003-03-28T13:20:01+02:00"
title = "Modèles"
intro = "Plume s'appuie sur une logique de modèles pour aider les utilisateurs à rédiger leurs emails."
+++

Ces modèles sont déterminés à partir d'une recherche de document de classe `Template` (cette classe peut être modifiée par la propriété `flower.template.class`).
Les modèles doivent donc être accessibles aux utilisateurs utilisant Plume.

# Filtres

Les modèles disponibles pour un utilisateur peuvent être filtrés en fonction de différents filtres. 

Le premier concerne la source de modèle. Dans cette documentation, seuls les modèles issus de FlowerDocs sont documentés, c'est pourquoi les différents exemples de filtres ont la propriété `source` valorisée à `flower`.

<br/>
Il est également possible de définir des filtres sur des tags portés par les modèles. Par exemple, si la classe `Template` possède un tag `TemplateType`, il est possible de définir un ensemble de filtres tel que :  

```javascript
var filters = { "source": [ "flower" ], "TemplateType": ["Custom"] };
```

# Types de modèle

En fonction du type de modèles, différentes fonctions doivent être appelées pour initialiser le plugin Plume.

## Corps de l'email

Le premier type de modèle concerne le corps de l'email à rédiger.

```javascript
context.getTemplatesComponent().initTemplates(filters);
```

## Signature

Le second type de modèle concerne la signature de l'utilisateur rédigeant l'email.

```javascript
context.initSignature(filters);
```


# Variables

La notion de variable peut être utilisée au sein des modèles afin de les pré-remplir et ainsi faciliter la rédaction d'un email.

<br/>
Par défaut, plusieurs variables sont valorisées par défaut comme : 

* les tags : l'ensemble des tags du composant ouvert sont ajoutés comme variables,
* l'URL de FlowerDocs GUI : `flowerURL`,
* le nom de l'utilisateur connecté : `userDisplayName`,
* l'adresse email de l'utilisateur connecté : `userMail`,
* le scope courant : `scope`.

<br/>
Il est également posssible de rajouter des variables personnalisées : 

```javascript
$wnd.getARenderJS().preparePluginEvent("<name>", "<value>", "plume");
```

<br/>
Une fois définies, ces variables peuvent être utilisés dans les modèles tel que `{variableName}`.