+++
date = "2019-06-28T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++


# Evolutions
*  Lors de la création d'une tâche, visualisation des pièces jointes (JIRA).
* Résolution des noms des buckets de façon asynchrone  (JIRA).
* L'icône d'un tag de type `ICON` est affichée dans les formulaires d'indexation (JIRA).
* Les références de tag des classes de composants sont accessibles (JIRA).
* Authentification automatique SSO (JIRA).
* L'activité de vérification est initialisée avec les critères remplis précédemment (JIRA).

# Sécurité 

* Le changement de mot de passe est de nouveau fonctionnel (JIRA).
* Une authentification pour les Operation Hooks est configurable (JIRA).
* La clé secrète utilisée pour générer les jetons utilisateurs est désormais générée aléatoirement au démarrage de l'application FlowerDocs Core. Dans le cas d'une ferme d'applications FlowerDocs Core, il est nécessaire de la définir pour chacune des applications.
* L'application Management est sécurisée par un couple login/mot de passe (JIRA).

# Montée de version 

* ARender : 4.0.4-1 JIRA

# Améliorations 

* Le stockage des fichiers de configuration de l'IHM sont stockés avec l'identifiant du document et l'index du fichier plutôt qu'avec le nom du document (JIRA).
* Diverses améliorations (ou correction) dans la console d'administration (JIRA, JIRA, JIRA, JIRA, JIRA, JIRA, JIRA)
* Différenciation de la configuration de l'encodage pour la mise à jour de document et l'export des résultats de recherche sous forme de CSV (JIRA).
 
# Correctifs 

## 2.4.1.1

* L'affichage des caractères dans l'arborescence de dossier virtuel est correct (JIRA).
* L'affichage des caractères dans l'historique est correct (JIRA).
* Les longues descriptions de composant sont à nouveau cliquable (JIRA).
* Lors de la création d'un document avec Internet Explorer, le chemin complet du fichier uploadé n'est plus stocké (JIRA)
* L'encodage de l'export des résultats de recherche sous forme de CSV est correct (JIRA, JIRA).
* Les identifiants des actions de téléchargement d'archive et de suppression ne correspondent plus à leurs titres. Ils sont respectivement ``delete`` et ``componentContentArchiveAction`` (JIRA).
* Affichage du premier tag d'une catégorie alignée lorsqu'elle n'a pas de description (JIRA).
* Enregistrement du premier favori (JIRA).

## 2.4.1.2

* Certaines ressources statiques (CSS et JavaScript) mises en cache du navigateur après l'ouverture d'une version 2.3 sont utilisées lors de l'ouverture d'une version 2.4 ce qui peut provoquer un mauvais rendu de FlowerDocs GUI (JIRA).

## 2.4.1.3 

* Support des annotations créées en 2.3 (JIRA).

## 2.4.1.5

* **Montée de version ARender : 4.0.4-1-fix-email-annot-compo** (JIRA).
* L'impression et le téléchargement de plusieurs documents dans ARender avec plusieurs serveurs de rendition sont fonctionnels (JIRA, JIRA).
* Lors de la création d'un document depuis un dossier, le nom est rempli automatiquement par celui du fichier uploadé (JIRA).

## 2.4.1.6

* Montée de version ARender : 4.0.4-1-fixpack-10748-10876 (JIRA) afin d'éviter un _crash_ navigateur lors d'une navigation rapide entre les buckets d'un dossier virtuel et les potentielles pages non chargées.
* Augmentation du temps d'attente pour le nettoyage des images dans ARender (JIRA).

## 2.4.1.7

* Correction d'une regression introduite en 2.4.1.6 ajoutant un `\` au début de la valeur du paramètre `targetUrl` à la déconnexion (JIRA).

## 2.4.1.8

* **Montée de version ARender : 4.0.4-2** (JIRA).

* Lors de l'ouverture d'un nouveau document, l'utilisateur ne voit plus le précédent document pendant un court laps de temps (JIRA).

* La navigation dans le premier document d'un fichier archive en tant que pièce jointe d'une tâche est de nouveau fonctionnelle (JIRA).

* Dans le cas où le LDAP permet de remonter le mot de passe, celui-ci n'est plus remonté lors d'une recherche afin d'éviter sa récupération par une personne malveillante (JIRA).

* Les logs sont par défaut écrit dans un fichier et dans la console. Il est désormais possible de désactiver les logs dans la console (JIRA).


## 2.4.1.9

* La tentative de mise à jour d'une annotation par un utilisateur non autorisé ne lui empêche plus de mettre à jour les annotations pour lesquelles il est autorisé (JIRA).