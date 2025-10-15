---
title: Actions
description: Surcharger les actions natives ou ajouter des actions personnalisées
sidebar_position: 2
---

# Actions

Surcharger les actions natives ou ajouter des actions personnalisées.

Plusieurs types d'actions sont mis à disposition : 

* Bouton : texte présenté sous la forme d'un bouton
* Icône : basé sur la police d'icônes supportée par FlowerDocs [Font Awesome](https://fontawesome.com/icons?d=gallery&m=free)
* DOM : élément HTML 

## Conteneur d'actions

Les actions sont regroupées dans des conteneurs d'actions à partir desquels il est possible d'accéder aux actions.
Pour accéder à une action, il est donc nécessaire d'identifier quel conteneur est concerné.

Pour lister les actions présentes dans un conteneur `container`, il faut utiliser la fonction suivante : 
```javascript
console.log("Container actions : " + container.getIds());
```

Tous les conteneurs d'actions de FlowerDocs sont accessibles via l'API JS. Ceci permet de les manipuler. Par exemple, il est possible d'ajouter, supprimer, désactiver, cacher ou bien modifier des actions de ce conteneur.

## Dans un formulaire 

L'objet `componentFormAPI.getActions()` permet d'interagir avec les actions d'un formulaire présentant un document, dossier... 

Pour cela plusieurs fonctions sont exposées :

| Fonction                                   | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|getHeaderActions()                          | Récupère le conteneur d'action dans l'en-tête                                  | 
|getTaskActions()                            | Récupère le conteneur d'action permettant la création de tâches                | 
|getFooterActions()                          | Récupère le conteneur d'action de pied de page (validation, annulation...)     |