+++
date = "2000-02-01T12:20:01+02:00"
title = "Search box"
Order = 14
Theme = "dev"
Icon = "fas fa-search"
Description = "Utiliser le plugin `SearchBox` pour faciliter l'ouverture de composants."
Duration = "10m" 
+++

# Objectif

[shortcode]

Le plugin `SearchBoxPlugin` vous permet de faciliter la vie aux utilisateurs en ajoutant une barre de recherche accessible à tout moment.
Cette barre de recherche peut afficher des résultats issus de différentes recherches.

# Un exemple en pratique


Dans ce module, nous allons configurer ce plugin pour rechercher le dossier d'un client.
Pour cela, nous nous baserons sur la classe de dossier virtuel `DossierClient` avec un tag `Comptable` de type *USER*.

# Mise en place

Afin d'afficher les dossiers clients qui correspondent à la valeur saisie, nous allons définir une recherche permettant de trouver chaque dossier virtuel dont le nom contient la valeur saisie dans la barre de recherche.
Pour chacun des résultats, nous personnalisons l'affichage : 

* une icône de dossier orange est utilisée
* la description affiche la valeur du tag `Comptable`

<br/>
Le plugin `SearchBoxPlugin` peut ainsi être activé avec le script : 
```javascript
var searchBox = new SearchBoxPlugin([{
    category: 'VIRTUAL_FOLDER',
    fields: ['name', 'Comptable'],
    criterion: 'name',
    max: 10,
    icon: function(component, callback){
        callback('orange ti-folder');
    },
    description: function(component, callback){
        var formatter = JSAPI.get().getHelperFactory().getFieldFormatter('VIRTUAL_FOLDER');
        formatter.format(component.getField('Comptable'), function(formattedValue){
            callback('Dossier géré par ' + formattedValue);
        });
    }
}]);
searchBox.start();
```

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->

