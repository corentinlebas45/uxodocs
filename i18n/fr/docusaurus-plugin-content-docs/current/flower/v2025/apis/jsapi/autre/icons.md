---
title: Icônes
Description: Modifier l'icône des composants en JavaScript
---

:::info
Chaque catégorie de composant dispose de sa propre icône dans FlowerDocs GUI. Pour les tâches, l'icône peut être définie par classe pour disposer d'une icône différente en fonction de l'étape utilisateur.
:::
# Icon Resolver

Dans certaines situations, il peut être nécessaire de définir une icône en fonction des tags d'un composant. 
Pour cela, il est possible de définir un _Icon Resolver_ permettant de définir l'icône à appliquer à un composant.
_Plusieurs Icon Resolver peuvent être définis, dans ce cas, le premier répondant avec une valeur sera pris en compte._

Les _Icon Resolvers_ sont utilisés pour résoudre l'icône d'un composant lorsqu'il est affiché dans FlowerDocs GUI. 

# Enregistrement

Un _Icon Resolver_ peut être enregistré à l'aide de la fonction `registerComponentIconResolver(resolver,tags)` exposée par `JSAPI.get().getHelperFactory()`. 
Le paramètre `resolver` correspond à une fonction acceptant deux paramètres : 

* `component` : le composant dont l'icône doit être définie
* `callback` : objet dont la fonction `onSuccess()` doit être appelée une fois le calcul de l'icône terminé (dans le cas où l'icône n'est pas définie par l'_Icon Resolver_, la fonction `onSuccess()` doit être appelée sans valeur)

Le paramètre `tags` correspond à la liste de tags en fonction desquels l'icône sera résolue. 
<br/>
**Exemple :** Pour définir une icône de type _loupe_ à tous les composants de classe `CourrierEntrant`, il est possible d'enregistrer un _Icon Resolver_ tel que : 

```javascript
JSAPI.get().getHelperFactory().registerComponentIconResolver(function(component, callback){
  if(component.getClassId() == 'CourrierEntrant'){
    callback.onSuccess('fa fa-search');
  }else{
    callback.onSuccess(null);
  }
});
```

<br/>
**Exemple :** Pour définir une icône de type _loupe_ à tous les composants ayant la valeur du tag `TypeCourrier` égale à `Commande` et le `Statut` égal à `ATRAITER`, il est possible d'enregistrer un _Icon Resolver_ tel que : 

```javascript
JSAPI.get().getHelperFactory().registerComponentIconResolver(function (component, callback) {
	if (component.getTagValue('TypeCourrier') == 'Commande' && component.getTagValue('Statut') == 'ATRAITER') {
		callback.onSuccess('fa fa-search');
	} else {
		callback.onSuccess(null);
	}},'TypeCourrier','Statut');
```