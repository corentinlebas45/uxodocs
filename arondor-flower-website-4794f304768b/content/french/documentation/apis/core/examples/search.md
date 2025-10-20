+++
date = "2001-03-29T13:30:01+02:00"
title = "Rechercher un composant"
description = "Construisez vos requêtes de recherche"
+++

Les requêtes de recherche permettent de rechercher des composants stockés dans FlowerDocs en fonction de différents critères. Ces requêtes de recherche sont composées de la façon suivante : 

# Les différentes clauses 

## Clause Select
	
La ``selectClause`` permet de définir les champs à remonter. Elle est constituée d'une liste de valeurs ``fields``. 

## Clauses Filter

Les ``filterClauses`` permettent de définir des filtres à appliquer sur la recherche. Une ``filterClause`` est composée de la façon suivante : 

- ``criteria`` : les critères de ce filtre
- ``filterClauses`` : les sous-filtres

Une clause Filter va pouvoir en contenir une ou plusieurs autres afin de pouvoir effectuer des requêtes complexes avec des opérateurs logiques ET et OU. 
Pour cela, il existe deux types de clause Filter : 

- ``AndClause`` : Clause **ET**, un opérateur logique ET est appliqué entre ses critères et ses sous-clauses 
- ``OrClause`` : Clause **OU**, un opérateur logique OU est appliqué entre ses critères et ses sous-clauses

## Clauses Order

Les ``orderClauses`` permettent de définir l'ordre dans lequel les résultats seront remontés. Elles sont composées de la façon suivante : 

- ``name`` : le nom du critère sur lequel trier
- ``type`` : le type du critère
- ``ascending`` : tri par ordre croissant ou non

# Pagination des résultats

- ``start`` : Définit le début de la page de recherche
- ``max`` : Définit le nombre maximum de résultats à retourner

:::warning
La recherche renvoie un maximum de 10 000 résultats, une erreur est générée en paginant au delà de cette limite.
:::
 
# Exemples

Les exemples ci-dessous indiquent comment effectuer une recherche de document ayant un nom contenant la chaîne de caractères `facture`.

POST {{core}/rest/documents/search HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}
Content-Type: application/json

--Body (json) --
{
    "filterClauses": [
        {
            "criteria": [
                {
                    "name": "name",
                    "operator": "CONTAINS",
                    "type": "STRING",
                    "values": [
                        "facture"
                    ]
                }
            ]
        }
    ],
    "max": 10
}
@Autowired
private DocumentService documentService;

public void search() throws FunctionalException, TechnicalException
{
	Criterion criterion = CriterionBuilder.field(NAME).operator(CONTAINS).value("facture").build();
	FilterClause filter = FilterClauseBuilder.init().criterion(criterion).build();
	SearchRequest request = SearchRequestBuilder.init().filter(filter).build();
	SearchResponse response = documentService.search(request);
}

:::info
Dans les critères de recherche, l'opérateur ``CONTAINS`` n'est pas sensible à la casse (ne fait pas de distinction entre les majuscules et les minuscules), contrairement aux opérateurs ``EQUALS_TO`` et ``DIFFERENT``.
Donc l'exemple ci-dessus remontera les documents dont le nom contient : "facture", mais aussi "FACTURE", "Facture" ...
:::

Ces différents exemples doivent être adaptés pour chaque catégorie de composant.