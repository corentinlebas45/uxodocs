+++
date = "2019-04-15T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++


# Dossier

* Lors de l'ajout d'un enfant à un dossier, la mise à jour des dossiers est faite après la mise à jour des enfants.JIRA

# Tâche 

* Utilisation du nom des réponses avec motifs dans la notification plutôt que leur identifiant.JIRA

# Dossier virtuel 

* Les résultats affichées dans un dossier virtuel sont cohérent avec l'agrégation sélectionnée lors du retour au dossier virtuel depuis un écran de modification de composant. JIRA et JIRA

# Configuration 

* Support d'une valeur par défaut pour les tags techniques.JIRA

# Historique 

* Affichage du nom pour les tags conditionnels plutôt que leur identifiant dans l'historique.JIRA

# Recherche

* Utilisation du formateur de date dédié à la recherche et non celui par défaut.JIRA
* Résolution des variables dans une recherche lors de l'export sous forme de CSV ou d'archive.JIRA
* Lors de l'ouverture d'une recherche sauvegardée, ses critères sont correctement affichés.JIRA
* Le cache de recherche fonctionne désormais dès la première recherche.JIRA
* L'export en CSV des dossiers virtuels est fonctionnel.JIRA

# ARender 

* **Montée de version en 3.1.14-2**.JIRA
* Affichage de l'action de téléchargement au format source.JIRA
* Support de la sélection de texte dans les notes textuelles et zone de texte libre pour Internet Explorer 11.JIRA
* Désactivation des actions d'upload depuis le poste utilisateur et depuis une URL.JIRA
* Annulation des demandes de changement de document s'il y a déjà une demande en cours, afin d'éviter les appels inutiles et boucles.JIRA,JIRA

# Plume 

* Désactivation de l'upload de fichier depuis le poste utilisateur.JIRA
* Affichage de l'action "Répondre à tous" depuis une pièce jointe de tâche ayant pour contenu un mail.JIRA

# Administration

* Vérification de l'unicité de l'identifiant d'une équipe à la création.JIRA
* Correction de la création des rapports de l'IHM d'administration.JIRA
* Tri des popup de sélection de classes de tâches depuis les workflows, pièces jointes, enfants de dossiers et catégories de tag par nom.JIRA

# FlowerDocs Core

* Normalisation des identifiants utilisateurs. Si `EnableLowerCaseOfUserName=true` : l'identifiant d'un utilisateur est passé en minuscule. Si `EnableLowerCaseOfUserName=false`,  l'identifiant de l'utilisateur respecte la casse définie dans le LDAP.JIRA

# Elasticsearch

* Tri des faits d'historique par date de création lors de leur récupération.JIRA

# Alfresco 

* Configuration du nombre de membres d'un groupe maximum et du nombre de groupes maximum d'un utilisateur remonté par Alfresco.JIRA
* Amélioration de la construction de critère avec l'opérateur `EQUALS_TO`.JIRA
