+++
date = "2025-01-20T12:20:01+02:00"
title = "Upgrade Notes 2025.0"
description = "Changements techniques importants de la version 2025.0"
+++

# Upgrade notes 2025.0

# Montée de version

## Depuis une version supérieure ou égale à la version 2.7

Aucune migration de données n’est requise.   
L’architecture FlowerDocs a été simplifiée en supprimant des composants : Camunda, FlowerDocs Management et OpenSearch Dashboards.   
Afin de suivre les préconisations d’intégration concernant ARender, l’application ARender HMI n’est plus embarquée dans FlowerDocs GUI et peut être isolée sur un serveur dédié.

Le connecteur FlowerDocs \- ARender est déployé en dehors de l’application, ceci facilite les montées de versions correctives. 

## Depuis une version antérieure à la version 2.6

Il est nécessaire de faire une montée de version en 2.7 avant de monter en 2025.0. Les versions précédentes sont basées sur un moteur Elasticsearch 5.2 et nécessitent une migration des données vers le nouveau moteur OpenSearch.

La documentation à suivre : [ici](broken-link.md)

# Architecture

## Composants supprimés

* Camunda   
* OpenSearch Dashboards  
* FlowerDocs Management  
* Mail Editor

## Composants modifiés

* OpenSearch : Montée de version de 1.3.4 à 1.3.19  
* ARender : Montée de version de 4.8.x à 2023.4.0  
* Java : FlowerDocs Core et GUI doivent être lancés avec un JDK 11\. La version 1.8 du JDK n’est plus supportée.  
* FlowerDocs Starter Client : Montée de version Spring Boot de 2.5.14 à 2.7.18  
* Plume : Montée de version de 2.0.2 à 2.0.3

## Composants ajoutés

* L'interface graphique ARender est désormais une application à part entière et n'est plus embarquée dans FlowerDocs GUI, ce composant supplémentaire doit être installé en suivant la documentation [ici](broken-link.md)
:::warning
Veuillez noter que Hazelcast dans ARenderHMI avec FlowerDocs n'est pas fonctionnel et ne doit pas être activé.
:::

# Personnalisation et configuration

## Configuration

### Propriétés de configuration à supprimer

* La propriété `gui.register.enabled` a été supprimé  
* La propriété `spring.datasource.url` a été supprimé  
* La propriété `text.extractor.max.size` a été supprimé suite au changement de moteur d’extraction de texte 
* Le paramétrage `showNodeContent` des dossiers virtuels n’existe plus. Si cette propriété est référencée dans vos documents `GUIConfiguration`, elle doit être supprimée   
* Le paramétrage du bouton de raccourci `FloatingButtonPresenter` ainsi que l’API JavaScript associée n’existent plus.  Si ce type de bouton est référencé dans vos documents `GUIConfiguration`, il doit être supprimé. Les raccourcis présents doivent être rajoutés dans le bouton `+` dans la barre de menu FlowerDocs comme dans la documentation [ici](/documentation/config/gui/menu/raccourcis/#raccourcis-de-cr%C3%A9ation)   
* Les propriétés de configuration de l’affichage ARender ont été modifiées suite à la séparation des appels de visualisation entre les documents et les versions.   
  * La propriété `gui.client.arender.params.doc` permettant de définir le paramètre à utiliser pour la visualisation de document est supprimée au profit de la nouvelle propriété `gui.client.arender.params.current`. Sa valeur par défaut est `currentId`  
  * La propriété `gui.client.arender.params.version` est utilisée pour la consultation d’une version via l’onglet version ouvert depuis l’historique. Sa valeur par défaut est `versionId`  
  * Pour les intégrateurs surchargeant le bean `arenderConfig`, il faut donc supprimer cette ligne :  `<property name="documentIdParameter" value="${gui.client.arender.params.doc:docId}" />` et ajouter les lignes suivantes : 

```
<property name="documentIdParameter" value="${gui.client.arender.params.current:currentId}" />
<property name="versionIdParameter" value="${gui.client.arender.params.version:versionId}" />
```

* La balise `file` du fichier `scope.xml` doit être supprimée, l’objet Scope ne porte plus de fichier  
* Il n’est plus nécessaire de renseigner la propriété `management.metrics.export.datadog.enabled` pour que l’application FlowerDocs Core démarre 

### Propriétés de configuration obsolètes / remplacées

* Suite au changement d’architecture avec ARender HMI, la propriété `arender.rendition.nodes` ne doit plus être renseigné dans le fichier `gui.properties` mais dans `arender-custom-server.properties`  
* Dans les documents de classe `OperationHandlerRegistration` qui correspondent à des `ScriptOperationHandler`, la valeur du tag `OperationHandler` suivante est dépréciée :  `com.flower.docs.bpm.core.operation.ScriptOperationHandler`. La nouvelle valeur à utiliser est `com.flower.docs.core.tsp.operation.script.ScriptOperationHandler`  
* La combinaison des permissions `ADD_CONTENT` et `DELETE_CONTENT` sont dépréciées au profit de `UPDATE_CONTENT`  
* La permission `READ_OBFUSCATION` est dépréciée. Seule la permission `OBFUSCATE` est utilisée  
* Le modèle de donnée associé à Camunda doit être supprimé, car plus utilisé :  
  * Classes de document : `BPMNDiagram`, `CMMN`, `DMN`, `EmailServer`  
  * Classes de tag : `Protocol`, `Host`, `Port`

## Produit

### Changements techniques

* FontAwesome : Montée de version de 6.1.1 à 6.5.2  
* Spring Boot : Montée de version de 2.5.14 à 2.7.18  
* Spring : Montée de version de 5.3.20 à 5.3.37


### Changements de comportement

#### Redis

* Redis est désormais obligatoire, même pour les environnements de développement.

#### Intégration

* Le moteur JavaScript Nashorn est remplacé par GraalJS  
  * Pour les `ScriptOperationHandler` si la fonction `equals` a été utilisée pour de la comparaison de String alors il faut remplacer la comparaison par `==`   
  * Pour les `ScriptOperationHandler` si la fonction `Date.now()` a été utilisée, il faut remplacer l’appel par `String.valueOf(new Date().getTime())`


#### Performances

* Le cache FlowerDocs n'est plus purgé automatiquement lors de la mise à jour de documents de configuration  
* Les objets de configuration (modèle de données, `OperationHandler`, `Script` `GUIConfiguration`, `CSS`) ne sont plus stockés dans Redis. Une clé permettant la synchronisation de cache entre plusieurs applications FlowerDocs est stockée dans Redis afin d'améliorer les performances

#### ARender

* Les propriétés concernant l'affichage des annotations dans ARender sont celles par défaut. Les couleurs et tailles de police peuvent être différentes de celles présentes dans les versions FlowerDocs précédentes.  
* Les actions de modifications ne sont pas affichées lors de l'ouverture d'une version  
* Les annotations de type rotation sont créées avec une nouvelle ACL `acl-rotation`, ainsi les droits concernant les annotations sont dissociés des droits concernant les rotations de page

### Suppression

* L'URL d’appel au swagger `/core/swagger-ui.html`, l'URL à utiliser est la suivante:  `/core/swagger-ui/index.html`.  
* L'OperationHandler `AddDisplayToSearchOperationHandler`

## API

### Changements de comportement

* Les services de modification et de suppression sur un document renvoie une exception `F01500` si l’identifiant en entrée ne correspond pas à la version courante  
* L'extraction de texte pour l'indexation plein texte est désormais effectuée via la rendition ARender en remplacement de la librairie Apache Tika. 

### Ajout de méthodes

* L'interface `VersionDAO` a une nouvelle méthode `getVersion`. Cette méthode permet de récupérer une version précise d'un document  
* Ajout du endpoint REST de récupération de version d'un document : `/core/rest/documents/{documentId}/versions/{versionId}`  
* Ajout du endpoint REST d'indexation et désindexation de contenu manuel : `/core/rest/documents/{id}/files/{file}/content/index`  
* Ajout du endpoint REST de renommage de fichier : `/core/rest/documents/{id}/files/{fileId}/name`


### Suppression de méthodes

* Le service `ReportingService` n'existe plus  
  * La méthode  `ReportingService.report` permettant de créer des faits est à remplacer par `FactService.create`  
  * La méthode `ReportingService.getFactByObjectId` permettant de récupérer des faits est à remplacer par `FactService.get`  
* Les méthodes de `ScopeService` suivantes n'existe plus : `getRules`, `setRules`, `getAll`  
* La méthode `ScopeDAO.getAll` n'existe plus

### Nouvelles dépréciations

* Les API SOAP FlowerDocs sont dépréciées.

## Événements

### Changements de comportement

* La méthode `registerForComponentChange` n'est plus appelée lors de l'ouverture d'une version

# Données

## Script requis et appel d'API

* Le scope doit être mis à jour avec le scope `default-scope` fourni dans le livrable `flower-template-2025.0.zip` afin de mettre à jour le modèle de données minimal pour le bon fonctionnement de FlowerDocs.   
* Les index OpenSearch inutilisés doivent être supprimés manuellement :   
  * `{scope}-flower-docs-content`,   
  * `{scope}-flower-docs-version`,   
  * `{scope}-flower-docs-report`  
  * `.kibana`

  Un exemple d’appel via cURL pour le scope FD : `curl -XDELETE "http://localhost:9200/fd-flower-docs-content"`