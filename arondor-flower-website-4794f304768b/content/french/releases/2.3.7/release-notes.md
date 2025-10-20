+++
date = "2018-07-27T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

# Page d'accueil

* Rafraichissement des widgets lors de l'ouverture de la page d'accueil (JIRA).


# Formulaires 

* Si la propriété search.template n'a pas de nom alors le titre du formulaire de recherche sera utilisé (JIRA).
* Ajout d'un bouton X pour vider les champs de type String et Date (JIRA). 

# Dossier virtuels

* Les buckets d'agrégation de dossier virtuels permettent d'afficher la recherche associée (JIRA).

# Configuration

* Le format de date à utiliser peut être défini par classe et référence de tag (JIRA).
* Un format de date est maintenant dédié aux informations techniques, (JIRA). 
* Le MTOM est désormais désactivable (JIRA).

# Administration 

* Un identifiant de requête permet de suivre une requête pour un reporting facilité (JIRA).
* Afin d'éviter des problème de cache, une version est ajouté lors de la récupération des scripts internes à FlowerDocs (JIRA).

# FlowerDocs Core

* Augmentation du nombre de faits d'historique à afficher (auparavant limité à 10) (JIRA).
* L'affichage des reporting Kibana et les plugins externes passent par un proxy permettant de gérer la sécurité (JIRA, JIRA). 
* Un mécanisme de préférence utilisateur a été mis en place. La première utilisation de celui-ci est la notion de composant favoris (JIRA).

# Sécurité

* Les mots de passe avec des caractères spéciaux permettent de se connecter à FlowerDocs  (JIRA).
