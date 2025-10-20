---
title: Configuration minimale
intro: 
---

# Accès à FlowerDocs

Pour injecter des documents Fast2 dans FlowerDocs, il est nécessaire de : 

* ajouter, à la map, une tâche ``FlowerDocInjector``
* définir la propriété ``flowerDocConnectionProvider`` avec un objet de classe ``FlowerDocConnectionProvider`` puis les propriétés : 
 
  * ``login``, l'identifiant du compte de service utilisé pour s'authentifier auprès de FlowerDocs
  * ``password``, le mot de passe du compte de service utilisé pour s'authentifier auprès de FlowerDocs
  * ``scope``, l'identifiant du scope dans lequel les documents doivent être injectés
  * ``endPoint``, l'URL permettant d'accéder aux web services FlowerDocs (exemple :  http://localhost:8080/flower-docs-ws/services)
* définir la propriété ``propertyHelper`` avec un objet de classe ``com.arondor.fast2p8.flower.docs.PropertyHelper`` 


# Ignorer certaines propriété
 
Lors de l'intégration de cette tâche au sein d'un processus Fast2, il se peut que des documents ne puissent être injectés car ils possèdent un tag non référencé au niveau de la classe de documents.

En effet, FlowerDocs refuse la création de document non-valide. Si ces tags non-référencés sont introduits par des propriétés techniques utilisées dans le processus Fast2, il est possible d'exclure certaines propriétés lors de la tache d'injection. Pour cela, éditer la propriété ``ignoredData``.