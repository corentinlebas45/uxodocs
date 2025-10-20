---
title: Navigation
description: Gérer la navigation entre les différents écrans
---

:::info 
FlowerDocs s'appuie sur un mécanisme de place permettant de définir dans l'URL, l'activité (ou écran) sur laquelle se trouve l'utilisateur.
Le fait que cette place soit portée par l'URL permet aux utilisateurs de pouvoir : 

- rafraîchir leur navigateur tout en restant dans le même contexte
- de naviguer à travers l'historique du navigateur (boutons Précédent et Suivant)
:::

# Navigation
Pour piloter ces fonctionnalités à travers l'API JS, une API de navigation est mise à disposition : 

```javascript
var navigationJSAPI = JSAPI.get().getNavigationAPI();
```
<br>

| Fonction                                 | Description                                                                    |
|------------------------------------------|--------------------------------------------------------------------------------|
|reload()                                  | Permet de recharger la place courante sans confirmation                        |        
|goBack(boolean confirmation)              | Permet de revenir à la place précédente<br>- ``confirmation`` : booléen permettant de désactiver la confirmation au changement de place s'il y a des modifications non sauvegardées     						|               
|goToComponentPlace(String category, String identifiant, boolean confirmation)| Permet de rediriger l'utilisateur vers l'écran de modification d'un composant en fournissant : <br>- ``category`` : ``DOCUMENT``, ``FOLDER``, ``TASK``, ``VIRTUAL_FOLDER`` <br>- ``identifiant`` : identifiant du composant à ouvrir <br>- ``confirmation`` : booléen permettant de désactiver la confirmation au changement de place s'il y a des modifications non sauvegardées                                                                      |   
|goTo(Place place, boolean confirmation)   | Permet de rediriger l'utilisateur vers une place <br>- ``place`` : identifiant de la place à ouvrir <br>- ``confirmation`` : booléen permettant de désactiver la confirmation au changement de place s'il y a des modifications non sauvegardées |

Il est possible de rediriger l'utilisateur vers une place construite à partir de différents [tokens](broken-link.md).  
__Exemple :__ Redirection vers un écran de création de tâche ``GEC_Step0_Creation``

```javascript
var navigationJSAPI = JSAPI.get().getNavigationAPI();
var placeToken = 'storeTask(GEC_Step0_Creation)';
navigationJSAPI.goTo(flower.docs.PlaceBuilder.build(placeToken),false);
```

<br/>
L'API de navigation permet également de surcharger la place par défaut (définie au niveau du profil). 
Pour cela, il est possible de s'abonner à son ouverture via la fonction ``registerForPlaceChange(callback)`` 

__Exemple :__ Surcharger la place par défaut par le formulaire de recherche ``pliSearch``

```javascript
var navigationJSAPI = JSAPI.get().getNavigationAPI();
navigationJSAPI.registerForPlaceChange(function(placeToken, callback){
   callback.go(flower.docs.PlaceBuilder.build("search(pliSearch)"));
});
```

# Place courante
Grâce à l'API de navigation, il est également possible de récupérer la place courante et ses caractéristiques grâce à la méthode `getWherePlace()`.

```javascript
var navigationJSAPI = JSAPI.get().getNavigationAPI();
var place = navigationJSAPI.getWherePlace();
```
<br>

Cet objet expose les méthodes suivantes :


| Fonction              | Description              																													|
|-----------------------|-----------------------------------------------------------------------------------------------------------------|   
|getWhereId()      	   | Permet d'obtenir l'identifiant de la place courante                            							      		|     
|getPlaceType()         | Permet d'obtenir le type de la place courante : `HomePlace`, `SearchPlace`, `BrowsePlace`, `ModifyVirtualFolderPlace`, `ModifyFolderPlace` , `AdminPlace`|  
|getSelectedLeaf() 	   | Permet d'obtenir l'aggrégation sélectionnée dans le dossier virtuel   													   | 
|getOpenedItems() 	   | Permet de récupérer l'arborescence ouverte dans le dossier virtuel														   	|
|getTemplate() 		   | Permet d'obtenir le modèle de recherche sélectionné				   															   | 
|getRequest()		      | Permet de récupérer la requête exécutée dans les recherches et les dossiers virtuels (visible dans l'URL)			|
|getSearchDisplayMode() | Récupère le mode d'affichage de la recherche : `CARD` ou `TABLE`			                              			|
|getVirtualFolderMode() | Récupère le mode d'affichage du dossier virtuel : `VIEWER` ou `AGGREGATION`												   |
|isAdminPlace() 	      | Indique si la page est côté administration 								      							           			|