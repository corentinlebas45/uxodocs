---
date: "2020-02-01"
title: "Templates HTML"
description: "Des modèles réutilisables, par scope, pouvant être valorisés à l'aide de variables"
related:
  - name : "Les pages"
    rel: '/documentation/config/core/pages'
  - name : "Envoyer des emails"
  - name : "Thymeleaf"
    url: 'https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#using-texts'
---

# Principe

Un template HTML est un document possédant un fichier HTML. Ce fichier est utilisé par le moteur de template [Thymeleaf](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html) pour générer un nouveau fichier HTML à partir d'un ensemble de variables (ou contexte).
Il permet ainsi de générer des documents basés sur un même modèle à l'aide du langage HTML.

:::info 
Utilisez ces templates HTML pour : 

* Ajouter des [pages privées ou publiques](broken-link.md)
:::

# Syntaxe

*Cette section ne détaille pas toutes les possibilités offertes par le moteur [Thymeleaf](https://www.thymeleaf.org/doc/tutorials/3.0/usingthymeleaf.html#using-texts) mais vise à fournir un premier aperçu.*

## Textes

L'attribut `th:text` définit la valeur textuelle d'une balise HTML. Il peut ainsi être utilisé avec une variable du contexte pour afficher sa valeur : 

```xml
<span th:text="${customerName}">Mme. Murielle Palutat</span>
```
Lors de la génération du fichier HTML, le texte de la balise `span` est remplaçé par celui de la variable du contexte. Il est conseillé de définir un texte par défaut dans ce type de balise pour faciliter la prévisualisation du rendu.

Avec l'attribut `th:text`, le texte généré est échappé. Si des variables contiennent du HTML (par exemple pour des liens hypertextes), il est nécessaire d'utiliser l'attribut `th:utext` qui n'échappe pas le texte généré.

## Conditions

L'attribut `th:if` conditionne l'ajout de la balise sur laquelle il est ajouté. Avec cet attribut, il est par exemple possible de définir des blocs de texte conditionnels : 

```xml
<p th:if="${customerAge > 18}">...</p>
```

# Configuration

Ces templates peuvent être définis directement depuis la console d'administration dans la section `Templates > HTML`.
Ils sont stockés comme des documents techniques de classe `Template` avec le tag `TemplateType` dont la valeur est `HTML`.

:::info
Les possibilités de fournir des variables diffèrent en fonction de l'utilisation des templates. Consultez la documentation appropriée pour plus de détails.
:::