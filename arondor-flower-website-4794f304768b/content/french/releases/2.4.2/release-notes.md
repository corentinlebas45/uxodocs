+++
date = "2019-09-17T00:20:01+02:00"
title = "Release notes"
categories = []
tags = ["release-note"]
banner = "img/banner/edit.png"

+++


# Evolutions
* Lors de la création d'un document en tant que pièce jointe de tâche, le formulaire d'indexation du document est affiché  (JIRA, JIRA).
* Ajout de lien vers le composant dans les notifications afin de l'ouvrir facilement (JIRA). 

# Sécurité 

* Mise à disposition d'un endpoint REST pour chiffrer une chaine de caractère (JIRA). La valeur obtenue peut être utilisée comme propriété dans le fichier `flowerdocs.properties`.
* Eviction du cache d'utilisateur après la suppression d'un utilisateur (JIRA).
* Les profiles sont désormais fournis à un utilisateur s'étant connecté avec OAuth (JIRA).


# Améliorations 

* Configuration du nombre de faits à afficher (JIRA).  
* Support du caractère * en tant qu'identifiant de classe pour les pièces jointes de tâches (JIRA).
* Affichage des champs multivalués lors de l'export des résultats de recherches sous forme de CSV (JIRA). 
* Après avoir sélectionner une colonne de résultat de recherche à afficher puis exporter les résultats de recherche sous forme de CSV, cette nouvelle colonne est présente dans le CSV (JIRA). 
* Affichage des résultats de requêtes à un LDAP dans l'ordre d'envoi des requêtes (JIRA).
* Les actions de réponses dans Plume sont disponibles depuis une pièce jointe ayant pour contenu un e-mail  (JIRA).
* Désactivation des actions dans ARender dans une nouvelle fenêtre et en comparaison (JIRA).

# Corrections

* Dans le partage de recherche, support d'utilisateurs, groupes et équipes contenant des espaces dans leur identifiant (JIRA).
* L'ordre des onglets définis dans la propriété d'équipe `tabs.order` correspond à l'affichage dans l'interface (JIRA).
* Initialisation avec l'icône correspondant au mode d'affichage du dossier virtuel (JIRA).
* Lors de la construction d'une condition basée sur la classe de composants, une des conditions `data.Class` ou `data.classid` est désormais suffisante (JIRA).  
* Les conteneurs d'actions personnalisés sont cachés quand aucun composant n'est sélectionné (JIRA).
* Diverses améliorations (ou correction) dans la console d'administration (JIRA, JIRA, JIRA, JIRA, JIRA, JIRA, JIRA, JIRA, JIRA,JIRA).
* Diverses corrections graphiques (JIRA, JIRA, JIRA).
* Diverses corrections pour les tags (JIRA, JIRA).

# Intégration 

* La vue *Legacy* des listes de choix n'existe plus, toutes les listes de choix sont affichées avec la nouvelle vue (JIRA). 
* La fonction hasPermission pour afficher les actions dans ARender est surchargeable depuis un script FlowerDocs (JIRA).
* Le profil fourni à ARender peut être surchargé avec la API JS(JIRA).
* Réagir à l'ajout et à la suppression d'un critère libre via la fonction `registerForCriterionChange` (JIRA, JIRA). 

# Correctifs 

## 2.4.2.1 _16/10/2019_

* Amélioration des performances de l'export CSV (JIRA).
* Les tags de type Date ne sont plus affichés deux fois lors de l'export CSV (JIRA).
* Amélioration de la détermination de l'extension des fichiers  (JIRA).
* Les préférences utilisateurs sont de nouveau fonctionnel (JIRA).

## 2.4.2.2 _17/10/2019_

* Population des groupes de l'utilisateur lors d'une connexion utilisant OAuth (JIRA).

## 2.4.2.3 _22/10/2019_

* La bordure des champs basés sur des listes est tronquée avec IE ou Edge (JIRA).
* Les réponses avec motifs sont envoyées à un OperationHook comme des réponses simples (JIRA).
* La navigation au sein d'un dossier ou des rapports est mal affichée lorsque le menu est replié (JIRA).
* Les tags de type booléen sont mal affichés avec IE ou Edge (JIRA).
* En mode création et avec le connecteur Alfresco, le CLM n'initialise pas le document de configuration du scope (JIRA).
* Restauration du Drag&Drop sur les pièces jointes de tâches après le changement de mode d'initialisation d'un document en pièce jointe  (JIRA).
* Amélioration du redimensionnement des formulaires d'indexation de composant (JIRA JIRA).
* Impossible de télécharger un document ne pouvant pas être ouvert par ARender depuis la popup d'erreur (JIRA).
* Les libellés plus longs que la largeur du menu dépassent (JIRA).

## 2.4.2.4 _08/11/2019_

* Définition de la propriété depuis laquelle les groupes de l'utilisateur lors d'une connexion utilisant OAuth doivent être fournis(JIRA).
* Le lien permettant d'accéder au document créé depuis une notification est fonctionnel avec Alfresco (JIRA).
* Mise à jour du contenu dans ARender lors de l'upload d'une nouvelle version du document avec Alfresco (JIRA, JIRA).
* Support des identifiants de configurations contenant les caractères :|{} pour les connecteurs FileNet et Alfresco JIRA.
* La durée de vie des éléments dans le cache de réservation est d'une heure (JIRA).
* Les widgets de page d'accueil de favoris ainsi que ceux basés sur le LocalStorage ne font plus d'appel au Core lorsqu'aucun identifiant n'est fourni dans la requête (JIRA).
* L'appropriation d'une tâche est disponible depuis le formulaire d'indexation  (JIRA). 
* Le fait d'historique de création n'est plus affiché en double (JIRA).
* La récupération d'un utilisateur depuis l'API JS est de nouveau fonctionnelle (JIRA).

## 2.4.2.5 _20/11/2019_ 

* Support des annotations créées en 2.3 (JIRA).
* Suppression des librairies bcprov-jdk15 afin d'éviter de potentiels problèmes de déploiement (JIRA).
* Le contexte de la recherche cachée est transmis aux requêtes d'export des résultats en CSV et ZIP (JIRA).
* Le redimensionnement du panneau de gauche des dossiers virtuels en onglet et de l'administration est de nouveau fonctionnel (JIRA).
* Support des tags de type `Date`, `User` et `Currency` avec plusieurs valeurs dans l'historique (JIRA,JIRA).
* L'abonnement à l'ajout d'une action depuis l'API JS lors de la création d'un composant en popup est de nouveau fonctionnel. L'abonnement n'est plus fait plusieurs fois en indexation (JIRA).

## 2.4.2.6 _11/12/2019_

### ARender 

* Montée de version ARender `4.0.4-1-fix-email-annot-compo` (JIRA) afin de corriger l'impression et le téléchargement de plusieurs documents dans ARender avec une ferme de serveurs de renditions (JIRA et JIRA).
* Adaptation de la taille des icônes d'édition d'annotation en fonction de la taille de l'écran (JIRA).

### Internet Explorer 11 

* Les champs booléens dans les formulaires d'indexation ne dépassent plus sur le champ supérieur (JIRA).
* Les scrollbars sont correctement affichées dans le widget permettant la sélection d'une valeur dans une liste de choix (JIRA).
* Lors de la création d'un document depuis un dossier, le nom du document est celui du fichier uploadé s'il n'est pas renseigné (JIRA).

### Formulaires de recherche

* Les critères de type Date ont une bordure (JIRA).
* La touche Entrée dans la recherche rapide lance la recherche (JIRA).
* Amélioration du positionnement du sélecteur de valeurs d'une liste de choix et du menu contextuel (JIRA).

### Connecteur Alfresco

* L'export en archive ZIP tient compte des permissions `DOWNLOAD_CONTENT` ET `READ_CONTENT` (JIRA).
* Support du critère sur la date de dernière modification `cm:modified` (JIRA).
* Au sein des résultats de recherche, l'ensemble des colonnes affichables sont proposées dans le sélecteur de colonnes (JIRA).

### Historique 

* Meilleure affichage de l'historique et des notifications contenant des libellés très longs (JIRA, JIRA).
* Au sein de l'historique d'une tâche, les faits d'une pièce jointe supprimée peuvent être résolus (JIRA).


### Dossiers virtuels

* Désactivation du scroll horizontal sur la vue arborescente d'un dossier virtuel (buckets)	(JIRA et JIRA).
* Diverses corrections sur le fil d'Ariane des dossiers virtuels (JIRA).
* Les liens présents dans les notifications sont fonctionnels pour les dossiers virtuels (JIRA).
* Amélioration de la gestion de l'historique de navigation des dossiers virtuels affichés en tant qu'onglet (JIRA et JIRA ).
* Conservation du redimensionnement de l'utilisateur après l'ouverture d'un bucket (JIRA).
* La poignée permettant le redimensionnement de l'arborescence est correctement re-positionnée après le repli du menu (JIRA).

### Autres

* Amélioration de l'affichage des motifs d'une réponse à une tâche (JIRA).
* Le menu permettant la création de tâche à partir d'un composant est masqué si aucune tâche ne peut être créée lorsque la validité du composant change (JIRA).
* La deuxième ouverture de certains formulaires de création de tâche, à partir des raccourcis, n'affichait pas les actions possibles (JIRA).
* Corrections mineures sur les onglets basés sur des recherches (JIRA et JIRA).
* Nouveau point d'entrée permettant de surcharger les libellés utilisés dans le menu (JIRA).

## 2.4.2.7 _16/12/2019_

* La barre d'annotation ARender est correctement affichée avec Internet Explorer (JIRA).
