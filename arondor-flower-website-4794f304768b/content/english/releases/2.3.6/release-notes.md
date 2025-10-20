+++
date = "2018-05-14T10:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

# Formulaires

* Le sélecteur de classe et les tags sous forme de liste de choix et utilisateur ont une nouvelle présentation (JIRA, JIRA, JIRA).


# Recherche 

* Actions en masse disponibles dans le menu contextuel pour les dossiers  (JIRA).
* Actions de réponse à une tâche disponible dans le menu contextuel (JIRA).
* Ajout des valeurs 75 et 100 dans sélecteur de nombre de résultats des tableaux de recherche (JIRA).
* La sélection de résultats est maintenant remise à zéro à chaque de page (JIRA).
* Le nombre de recherches sauvegardées est désormais affiché  (JIRA).

# ARender 

* FlowerDocs s'appuie désormais sur la version 3.1.10 d'ARender. Cette montée de version implique une mise à jour des serveurs de rendition.
* Visualisation des fichiers temporaires dans ARender, par exemple les pièces jointes à leur ajout ou les documents avant création (JIRA).
* Le WAR spécifique pour incluant le connecteur FileNet n'est désormais plus publié. Le connecteur FileNet a été intégré au WAR ARender standard. La configuration associée est nécessaire.

# FlowerDocs Core

* Délégation des droits d'un utilisateur à un autre (JIRA).
* Configuration des champs à sauvegarder dans les faits de l'historique (JIRA).
* Des messages d'erreurs personnalisés peuvent désormais être renvoyés par les OperationHook aux utilisateurs finaux (JIRA).
* Augmentation du nombre d'abonnement à des opérations (auparavant limité à 10) (JIRA).

# API JS

* Exposition des services de composant (JIRA).
* Simplification de la récupération et modification des valeurs d'un composant (JIRA).
* Les événements de changement de classes en indexation sont envoyés avec l'identifiant ``Class``. Précédemment, le premier évenement était envoyé avec l'identifiant ``classid`` et les suivant avec ``Class`` (JIRA).


# Sécurité

* Protection contre les attaques XSS (JIRA).
* Protection contre les attaques de type _path tranversal attack_ (JIRA). 
