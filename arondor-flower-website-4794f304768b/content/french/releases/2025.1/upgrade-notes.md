+++
date = "2025-06-02T08:10:01+02:00"
title = "Upgrade Notes 2025.1"
description = "Changements techniques importants de la version 2025.1"
+++

# Personnalisation et configuration

## Propriétés de configuration obsolètes / remplacées

* `opensearch.use.alias=false` permettant de forcer à utiliser les index OpenSearch plutôt que les alias est depréciée et sera supprimée lors de la prochaine majeure

## Ajout de propriétés

### Page de connexion

* Il est désormais possible de masquer le formulaire de connexion nom d'utilisateur / mot de passe afin de ne permettre de se connecter uniquement en SSO avec le paramètre `gui.signin.form.enabled=false`

### ARender 2023.8.1

* La nouvelle version ARender intègre MixPanel, un outil permettant de mieux comprendre comment ARender est utilisé par nos utilisateurs.
Plus de détails [ici](broken-link.md) 
* Les notifications de type info ARender ne sont plus affichées, elles peuvent être réactivés en suivant la documentation [suivante](broken-link.md).


# Produit

## Changements techniques

* Des améliorations concernant la sécurité de FlowerDocs ont été effectuées en effectuant des montées de versions de librairies  
* Les données de traitements en série sont nettoyées lors de la déconnexion de FlowerDocs

## Changements de comportement

### Ajout de document facilité

* Les dossiers virtuels portent désormais une notion d’enfant `children` afin de supporter le *Drag and drop* de document dans celui-ci ainsi que d’afficher l’action d’ajout de document   
* L’ajout de document est également facilité en activant le *Drag and drop* sur l’action `+` de la barre principale de FlowerDocs. Le drag and drop se base sur la configuration du bean `componentCreationShortcuts`, les ajouts d’actions via l’API JS FlowerDocs ne sont pas pris en compte.

### Recherche

* Le caractère `&` était interprété lors des requêtes depuis FlowerDocs GUI comme un séparateur de valeurs. Ceci n'est plus le cas, il a été remplacé par le caractère `§` car moins impactant.

### Performances

* Les tags de type `USER` ont été améliorés afin de limiter les requêtes auprès du LDAP  
* Une amélioration de la gestion de cache a été effectuée dans les webservices Enveloppe afin d’améliorer ses performances

### Indexation / Recherche plein texte

* Les documents ZIP et mails sont désormais supportés lors de l'extraction de texte  
* L’indexation et la désindexation d’un document nécessitent le droit `UPDATE_CONTENT`  
* Lors de l'ouverture d'un document, après avoir fait une recherche en utilisant le critère `Content`, ARender est ouvert en lancant une recherche de la valeur du critère.  
* Le caractère `“` englobant une valeur pour le critère `Content` permet de rechercher strictement les valeurs dans son contenu

### Page de connexion

* Les valeurs par défaut concernant la configuration de la page de connexion ont changé afin de refléter les besoins de nos utilisateurs

## Intégrateur

* La commande `update` du CLM ne nécessite plus le fichier `scope.xml`. Ceci permet notamment de ne pas toucher aux équipes tout en mettant à jour le modèle de données.  
* Afin d'être rétrocompatible avec d'anciens modèles de données (Alfresco), des caractères spéciaux sont désormais gérés pour les identifiants de pièces jointes  de tâches.  
* La classe `com.sun.jndi.ldap.LdapCtxFactory` a été ajouté à la *whitelist* utilisée dans les DroolsOperationHandler et ScriptOperationHander afin de pouvoir utiliser les appels aux services liés au LDAP correctement
* La propriété `categorySelector` était jusqu'alors implicitement obligatoire pour les formulaires de recherche de dossier virtuel. Afin de garantir la cohérence et la robustesse des recherches, cette propriété, essentielle au bon fonctionnement des formulaires, devient formellement obligatoire.
  * L'absence de ce paramètre, qui pouvait passer inaperçue sur certaines intégrations anciennes, empêchera maintenant l'affichage du formulaire, l'erreur suivante sera dans la console `com.flower.docs.gui.client.FlowerDocsEntryPoint SEVERE: Uncaught exception handled: java.lang.IllegalArgumentException: Only caches for valid categories are available. Not supported null`

## Exploitation

* Le endpoint `/core/actuator/status` permettant de vérifier l'état de l'application FlowerDocs Core ne nécessite plus d'authentification  
* Les index OpenSearch sont désormais requêtés via leurs alias au lieu de leur nom afin de faciliter les opérations d'exploitation. Il est possible de revenir au comportement précédent en requetant les index directement en ajoutant la propriété `opensearch.use.alias=false`

# API

## Changements de comportement

* La suppression d’un utilisateur supprime désormais ses données associées :   
  * Favoris   
  * Recherches sauvegardées non partagées   
  * Son identifiant est supprimé des recherches qui lui ont été partagés nominativement  
  * Ses préférences utilisateurs (tampons, dashlets, …)

## Ajout de méthodes

* Ajout des endpoint REST de purge de cache de la GUI :  
  * purge d'un cache d'un scope : `DELETE /gui/rest/caches/{cacheNames}`  
  * purge de tous les caches : `DELETE /gui/rest/caches`  
* Ajout du endpoint REST de mise à jour d’un document avec du contenu en un seul appel  : `POST /core/rest/documents/{id}/unique`

# Solution GEC 

Les documents de configurations suivants ont été supprimés :

* `sol-addDocumentFromFolder` 

Les documents de configurations suivants ont été ajoutés :

* `B_DirectionDestinataire`  
* `B_ServiceDestinataire`  
* `home-page`  
* `redirectFromChart`

Les documents de configurations suivants ont été modifiés : 

* `gui-solution`
* `scope.xml`

# Solution ENV 

Les documents de configurations suivants ont été supprimés : 

* `sol-addDocumentFromFolder` 

Les documents de configurations suivants ont été ajoutés : 

* `RouteSolutionWS`

Les documents de configurations suivants ont été modifiés : 

* `gui-solution`
* `env-common`  
* `env-home`
* `env-virtual-folder-conf`
