+++
date = "2018-12-31T11:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++

# Dossier virtuel 

* Historisation de la requête de recherche (JIRA et JIRA).

# Dossier

* Indexation multiple après *Glisser Déposer* d'un dossier ou plusieurs fichiers (JIRA). *Avec Internet Explorer, le Glisser Déposer d'un dossier n'est pas possible à cause d'une limitation navigateur, il faut effectuer le Glisser Déposer avec le contenu de ce dossier*.
* Historisation du tri des tableaux de recherche (JIRA).

# Tâche 

* La touche **Entrée** valide une réponse avec motif et ne l'annule plus (JIRA).
* Les tâches de tâches n'ayant pas de pièces jointes ne bloquent plus l'affichage d'ARender (JIRA).

# Document 

* Téléchargement de tout les contenus du document et non plus uniquement le premier (JIRA).

# Recherche

* Lors du téléchargement au format CSV ou ZIP, la requête de recherche n'est plus fournie en tant que paramètre d'URL mais dans le corps de la requête pour contourner les limitations de taille d'URL d'Internet Explorer (JIRA et JIRA).
* Un champ conditionné par un autre champ est réinitialisé lorsqu'aucune valeur n'est sélectionnée dans l'autre champ (JIRA). 
* Les critères de type **Date** avec un opérateur **Entre** ne peuvent plus être envoyés sans valeurs au serveur (JIRA).
* Historisation de la requête de recherche (JIRA et JIRA).

# ARender 

* Ajout de tampons par équipe, groupe ou utilisateur (JIRA).
* Lors de l'ajout d'une pièce jointe à une tâche, celle-ci est sélectionnée et affichée dans ARender (JIRA).

# FlowerDocs Core

* Un DroolsOperationHandler n'est parsé qu'à son premier chargement puis mis en cache (JIRA).
* L'héritage de groupe LDAP est désormais supporté (JIRA).
* Le changement de mot de passe lorsque l'application est déployée sous forme de deux applications Web est fonctionnel (JIRA).
* Lors de la suppression de document, les fichiers associés dans Elasticsearch sont supprimés (JIRA).

# IHM 

* Diverses améliorations de style (JIRA, JIRA) 
* La taille des URL a été réduite grâce à l'abréviation des différents paramètres (JIRA).

# Administration

* Les équipes peuvent être supprimées d'un scope sans avoir à modifier un autre champ (JIRA)
* 2 équipes ou ACLs avec des noms d'affichage identiques n'entrent plus en conflit lors de leur affichage (JIRA).

# Alfresco 

* Configuration des timeouts du client HTTP (JIRA).
* Support de la date de mise à jour dans les résultats de recherches (JIRA).
* Support de la recherche plein texte (JIRA).
* Un utilisateur est toujours remonté avec ses groupes, et non uniquement lorsqu'un administrateur (JIRA).
* Le contenu d'un document FlowerDocs est téléchargé avec le nom du document dans Alfresco (JIRA).

