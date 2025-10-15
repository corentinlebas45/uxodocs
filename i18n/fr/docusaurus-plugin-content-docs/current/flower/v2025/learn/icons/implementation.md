+++
 date = "2020-02-01T13:20:01+02:00"
title = "Implémentation"
+++

# Objectif

Pour ce module de formation nous voulons rajouter un bouton dans le menu d'en-tête d'un document.


# Prérequis

Nous utiliserons les icônes [envelope](https://fontawesome.com/icons/envelope-open-text?s=solid) et [stylo](https://fontawesome.com/icons/pen?s=solid) de FontAwesome de manière superposée pour notre action

# Mise en place

## Création de l'icône superposé

A l'aide de la ligne suivante vous assemblez les deux icônes sélectionnées : 

```javascript
stacked(fa fa-envelope-open-text,fa fa-pen)
```

## Ajout d'un bouton dans l'en-tête contenant notre icône 

Créez un script depuis le menu **Administration > Affichage > Scripts** et ajoutez le contenu suivant : 

```javascript

JSAPI.get().registerForComponentChange(function(componentFormAPI, component, phase) {
	if(component.getCategory()=='DOCUMENT'){
		var actionSet = componentFormAPI.getActions().getHeaderActions();
		var actionAPI = JSAPI.get().getActionFactoryAPI();
		var action = actionAPI.buildResponsive("Rédiger une réponse", "Rédiger une réponse", "stacked(fa fa-envelope-open-text,fa fa-pen)",0, function(actionPresenter){
			//Votre code d'intégration
		});
		actionSet.add(action)
	}
});


```

<br/>
Vous obtenez donc une nouvelle action avec une icône de ce type : 
[shortcode]


## Adaptons la taille des icônes

Nous souhaitons maintenant réduire le stylo par rapport à l'enveloppe. Pour ça nous allons modifier notre stacked icon en ajoutant une précision sur la taille des différentes icônes: 

```javascript
stacked(fa fa-envelope-open-text fa-lg,fa fa-pen fa-sm)
```
:::info
Différentes tailles sont fournies par FontAwesome et documentées [ici](https://fontawesome.com/docs/web/style/size)  
:::

Ainsi nous obtenons le résultat suivant, il ne manque plus qu'à positionner le stylo dans le coin supérieur droit. 
[shortcode]

## Positionnement relatif des icônes

Nous allons ajouter à notre stacked icon une précision concernant le positionnement du stylo : 

```javascript
stacked(fa fa-envelope-open-text fa-lg,fa fa-pen fa-sm align-text-top ml-0.5)
```

Nous obtenons le résultat attendu : 
{{< img src="/img/documentation/learn/stacked-icons2.png" class="col-8 m-auto">}}

## Bonus : une petite touche de couleur

Il est possible de définir des couleurs différentes pour chaque icône : 

```javascript
stacked(fa fa-envelope-open-text fa-lg green,fa fa-pen fa-sm align-text-top ml-0.5 red)
```