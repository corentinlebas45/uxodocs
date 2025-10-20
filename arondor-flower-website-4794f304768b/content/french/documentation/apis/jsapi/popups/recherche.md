+++
date = "2004-03-28T13:23:01+02:00"
title = "Recherche"
description = "Formulaire de recherche au sein d'une popup."
+++

:::info
Ce type de popup permet d'ouvrir un formulaire de recherche dans une popup.
:::

Pour ouvrir un formulaire de recherche dans une popup, les paramètres suivants sont nécessaires sous forme de chaîne de caractères : 

* ``category`` : Catégorie sur laquelle la recherche souhaite être effectuée
* ``template`` : Nom du template à utiliser pour la recherche

Le paramètre `callback` peut également être ajouté, mais est lui, facultatif. Il permet de sélectionner un composant qui peut, par exemple, être ajouté en tant que pièce jointe à une tâche.  


```javascript
popup = JSAPI.get().getPopupAPI().buildSearch(category, template, function(component){ 
	console.log("Selected component id="+ component.getId());
}); 
```

<br/>

# Configuration de la recherche 

Une fois la popup construite, il est possible d'accéder ou de modifier les différents paramètres avec les fonctions suivantes : 

| Fonction                               | Description                                                             |
|----------------------------------------|-------------------------------------------------------------------------|
|getHiddenRequest()                      | Récupération de la requête cachée du formulaire de recherche            | 
|setHiddenRequest(SearchRequest request) | Mise à jour de la requête cachée du formulaire de recherche             |
|getHiddenColumns()                      | Récupération de la liste de colonnes cachées du formulaire de recherche |
|setHiddenColumns(String[] columns)      | Mise à jour de la liste de colonnes cachées du formulaire de recherche  |
|setOpenOnCategoryClick(boolean open)    | Activation/Désactivation de l'ouverture du composant au clic sur l'icône de catégorie. <br/> _Activé par défaut_|