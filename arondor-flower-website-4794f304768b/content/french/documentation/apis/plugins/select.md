---
date: "2021-11-17T10:20:01+02:00"
title: "Sélection de composant"
description: "Proposer une bibliothèque de modèles aux utilisateurs"
---

# Principe

Le plugin `SelectComponentPlugin` permet de proposer facilement, aux utilisateurs, la sélection d'un composant correspondant à un ensemble de critères.
Les critères définis sont utilisés pour exécuter une recherche de composants dont les résultats sont affichés dans une popup de sélection.


# Utilisation

:::note
|Clé|Type|Description|
|---|----|-----------|
|`icon`|String |Icône de la popup de sélection|
|`title`|String |Titre de la popup de sélection|
|`description`|String |Description affichée dans l'en-tête de la popup de sélection|
|`category`|String |Catégorie de composants à rechercher (par défaut: `DOCUMENT`)|
|`criteria`|Tableau |Liste des critères de recherche|
|`fieldToDisplay`|String |Champ utilisé pour affiché un composant (par défaut: `name`)|
|`callback`|Fonction |Fonction appelée après la validation de la sélection|
:::



new SelectComponentPlugin({
  'title': 'My title',
  'description': 'Select a component',
  'callback': (id, label) => { console.log('selected document: ' + id) }
}).show();
var criterion = new Criterion();
criterion.setName("classid");
criterion.setOperator("EQUALS_TO");
criterion.addValue("Folder");

new SelectComponentPlugin({
  'icon': 'fa fa-folder',
  'title': 'My title',
  'description': 'Select a folder',
  'category': 'FOLDER',
  'criteria': [criterion],
  'callback': (id, label) => { console.log('selected folder: ' + id) }
}).show();


# Sélection d'un modèle

Basé sur le plugin `SelectComponentPlugin`, le plugin `SelectTemplatePlugin` propose une bibliothèque de modèles de documents aux utilisateurs.
En définissant le type de modèle à proposer, les utilisateurs sélectionnent, parmi au sein de la bibliothèque, le modèles à utiliser.

new SelectTemplatePlugin({
  'type': 'MSWord',
  'callback': function(id, label){
    new DownloadWordPlugin({'template': id, 'filename': label}).download();
  }
}).show();
