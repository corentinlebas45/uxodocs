+++
date = "2025-09-05T08:10:01+02:00"
title = "Upgrade Notes 2025.2.0"
description = "Changements techniques importants de la version 2025.2.0"
+++

# Personnalisation et configuration

## Propriétés de configuration obsolètes / remplacées

* La configuration de la résolution de groupe récursive est désormais cachée dans la classe de document `LDAPConfiguration` car non fonctionnelle. L’unique moyen d’activer cette fonctionnalité est l’utilisation de la propriété `user.groups.resolve-recursively` dans le fichier `core.properties`

## Ajout de propriétés

* Suite à la montée de version ARender 2023.12.0, un changement de comportement  concernant la gestion du fichier `application.properties` a eu lieu : certaines propriétés FlowerDocs ne peuvent plus être fournies dans le connecteur. Il est désormais nécessaire d’ajouter ce fichier lors de l’installation de l’application [ARender HMI](broken-link.md)  

## Changements techniques

* Montée de version ARender : 2023.12.0.  
* Une nouvelle librairie, `flower-docs-ws-rest-client`, a été intégrée pour faciliter les interactions avec les services REST de FlowerDocs. Il est désormais possible de remplacer la communication basée sur SOAP par une communication REST pour les `OperationHook`, les plugins FlowerDocs et toute autre intégration s'appuyant sur `flower-docs-starter-client` en activant la propriété `rest.client.enabled=true`.  
  Les services SOAP sont actuellement dépréciés. Lors de la prochaine version majeure, le mode REST sera la seule option disponible. Il est donc fortement recommandé de migrer vers l'utilisation de REST dès maintenant.  
* FlowerDocs intègre désormais les librairies du framework Spring maintenues par HeroDevs dans le cadre de leur programme de support commercial des librairies afin de corriger les vulnérabilités existantes dans le framework Spring n’étant plus dans le cadre du support OpenSource  
* Des améliorations concernant la sécurité de FlowerDocs ont été effectuées en effectuant des montées de versions de librairies. 

# API

## Changements de comportement

* La page Swagger a été réorganisée pour une meilleure logique. Les endpoints à usage interne ne sont plus affichés.

## Ajout de méthodes

* Ajout d’endpoints REST pour la manipulation d’annotations. Ils permettent l’utilisation d’objets `Annotation` plutôt que d’utiliser un objet `XFDF` :   
  * pour la récupération d’annotations si le header HTTP `accept` a pour valeur `application/json` :   
    `GET /core/rest/documents/{documentid}/annotations`  
  * pour la création d’annotations si le header HTTP `contentType` a pour valeur `application/json`  
    `POST /core/rest/documents/{documentid}/annotations`   
  * pour la mise à jour d’annotations si le header HTTP `contentType` a pour valeur `application/json`  
    `POST /core/rest/documents/{documentid}/annotations/{annotationsIds}`  
* Ajout d’endpoints REST pour la manipulation de réservations en fournissant une liste de références de composant dans le corps de la requête  
  * Récupération de réservations : `POST /core/rest/reservation`  
  * Réservation de composants : `POST /core/rest/reservation/reserve`  
  * Suppression de réservation : `POST /core/rest/reservation/release`  
* Ajout d’endpoints REST pour la génération de token. Ils permettent de récupérer un objet `Token` portant la date d’expiration  
  * Génération : `PUT /core/rest/token/user`  
  * Génération avec une durée de validité : `POST /core/rest/token/user`

:::warning
Pour une utilisation via les API Java FlowerDocs, toutes les méthodes précédemment citées ne sont implémentées que pour les services REST. L’appel de ces méthodes avec les services SOAP mènera à un renvoi d’exception. 
:::

## Nouvelles dépréciations

* Les endpoints REST pour la manipulation d’annotations utilisant un objet `XFDF` sont dépréciés au profits des endpoints utilisants des objets `Annotation` cités précédemment  
  * pour la récupération d’annotations si le header HTTP `accept` est absent ou a pour valeur `application/xml` :   
    `GET /core/rest/documents/{documentid}/annotations`  
  * pour la création d’annotations si le header HTTP `contentType` est absent ou a pour valeur `application/xml`  
    `POST /core/rest/documents/{documentid}/annotations`   
  * pour la mise à jour d’annotations si le header HTTP `contentType` est absent ou a pour valeur `application/xml`  
    `POST /core/rest/documents/{documentid}/annotations/{annotationsIds}`  
      
* Les endpoints REST pour la manipulation de réservation utilisant la catégorie et les identifiants de composants dans le chemin de l’appel sont dépréciés au profit des endpoints utilisants des références de composants dans le corps de la requête cités précédemment  
  * Récupération de réservations : `POST /core/rest/{category}/{ids}/reservation`  
  * Réservation de composants : `POST /core/rest/{category}/{ids}/reservation/reserve`  
  * Suppression de réservation : `POST /core/rest/{category}/{ids}/reservation/release`  
* Les endpoints REST pour la génération de token renvoyant une chaîne de caractère sont dépréciés au profit des endpoints renvoyant un objet `Token` contenant la date d’expiration cités précédemment  
  * Génération : `PUT /core/rest/token`  
  * Génération avec une durée de validité : `POST /core/rest/token`

:::info
La documentation a été mise à jour afin de ne pas contenir d’appels depréciés pour permettre la mise en place d’intégration selon les bonnes pratiques FlowerDocs.
:::