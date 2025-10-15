---
sidebar_label: "Tags"
sidebar_position: 5
---

# Tags - Overview

Les `tags` sont des métadonnées définies sur un composant permettant de le caractériser et de le retrouver plus facilement. 

Ces métadonnées peuvent être de différents types afin d'assurer une cohérence des données stockées dans FlowerDocs.

## Classes de tags

Une classe de tags permet de définir la typologie et les caractéristiques d'un tag au sein d'un scope. 
Cette classe de tags s'applique à l'ensemble des tags associés aux composants et est composée des éléments suivants : 

* `id` : identifiant technique du tag
* `displayNames` : nom d'affichage du tag (ex : Nom agence, N° immeuble, etc.) internationalisé
* `searchable` : booléen pour rendre le tag recherchable ou non  
* `type` : type du tag

## Types de tags

| Type | Description |
|------|-------------|
| `STRING` | [Chaîne de caractères](./textuel.md) (ex : référence, nom du client …) |
| `TEXT` | [Champ texte](./textuel.md) (ex : commentaire …) |
| `CHOICELIST` | [Liste de choix](./liste.md) (ex : type de document …) |
| `ICON` | [Liste d'icônes](./liste.md) (ex : canal d'entrée …) |
| `FREELIST` | [Liste libre](./liste.md) (ex : référence liée à un SI externe …) |
| `CONDITIONAL` | [Liste de valeurs conditionnées](./conditionnel.md) (ex : liste des services en fonction de la direction …) |
| `FLOAT` | [Nombre décimal](./numerique.md) (ex : taux, proportion …) |
| `INT` | [Nombre entier](./numerique.md) (ex : nombre de pièces justificatives …) |
| `CURRENCY` | [Nombre décimal](./numerique.md) limité à 2 décimales (ex : montant …) |
| `DATE` | [Date](./date.md) (ex : date d'échéance …) |
| `BOOLEAN` | Case à cocher (ex : secret médical …) |
| `USER` | Lié à un utilisateur de l'annuaire (ex : responsable …) |

## Exemple de configuration

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:TagClass xmlns="https://flower.com/docs/domain/common" 
              xmlns:ns2="https://flower.com/docs/domain/tagclass"
              xmlns:ns3="https://flower.com/docs/domain/i18n">
    <id>montant_facture</id>
    <ns2:displayNames language="EN">
        <ns3:value>Invoice Amount</ns3:value>
    </ns2:displayNames>
    <ns2:displayNames language="FR">
        <ns3:value>Montant de la facture</ns3:value>
    </ns2:displayNames>
    <ns2:type>CURRENCY</ns2:type>
    <ns2:searchable>true</ns2:searchable>
    <ns2:required>true</ns2:required>
</ns2:TagClass>
```

## Utilisation des tags

### Dans l'interface
- **Formulaires** : saisie et modification des métadonnées
- **Recherche** : critères de recherche avancée
- **Affichage** : colonnes dans les listes de résultats
- **Tri** : organisation des résultats

### Via API
```javascript
// Définition d'un tag via API REST
POST /api/tags
{
  "id": "reference_client",
  "displayNames": {
    "FR": "Référence client",
    "EN": "Customer reference"
  },
  "type": "STRING",
  "searchable": true,
  "required": false
}
```

## Catégories de tags

Les tags peuvent être regroupés en catégories pour améliorer l'organisation :

### Métadonnées techniques
- **Identifiants** : références, codes
- **Dates** : création, modification, échéance
- **Statuts** : état, validation, archivage

### Métadonnées métier
- **Financières** : montants, taxes, devises
- **Contractuelles** : parties, durées, conditions
- **Classificatoires** : types, catégories, niveaux

### Métadonnées système
- **Audit** : créateur, modificateur, source
- **Technique** : formats, tailles, checksums
- **Workflow** : assignation, priorité, échéance

## Bonnes pratiques

### Conception
- **Nommage cohérent** : convention claire pour les identifiants
- **Types appropriés** : choisir le type le plus adapté
- **Validation** : contraintes de saisie pertinentes
- **Internationalisation** : libellés multilingues

### Performance
- **Index recherche** : marquer les tags recherchables uniquement si nécessaire
- **Types optimisés** : éviter TEXT pour des chaînes courtes
- **Catégorisation** : regrouper logiquement les tags

### Maintenance
- **Documentation** : décrire l'usage de chaque tag
- **Evolution** : prévoir la migration des données
- **Cohérence** : maintenir la logique métier
- **Audit** : tracer les modifications de structure