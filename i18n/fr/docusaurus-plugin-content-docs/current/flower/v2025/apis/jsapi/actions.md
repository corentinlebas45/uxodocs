---
title: Actions
intro: Surcharger les actions natives ou ajouter des actions personnalisées.
---

Plusieurs types d'actions sont mis à disposition : 

* Bouton : texte présenté sous la forme d'un bouton
* DOM : élément HTML 

# Conteneur d'actions

Les actions sont regroupées dans des conteneurs d'actions à partir desquels il est possible d'accéder aux actions.
Pour accéder à une action, il est donc nécessaire d'identifier quel conteneur est concerné.

<br/>

Pour lister les actions présentes dans un conteneur ``container``, il faut utiliser la fonction suivante : 
```javascript
    console.log("Container actions : " + container.getIds());
```

<br/>

Tous les conteneurs d'actions de FlowerDocs sont accessibles via l'API JS. Ceci permet de les manipuler. Par exemple, il est possible d'ajouter, supprimer, désactiver, cacher ou bien modifier des actions de ce conteneur.

## Dans un formulaire 

L'objet ``componentFormAPI.getActions()`` permet d'interagir avec les actions d'un formulaire présentant un document, dossier... 

Pour cela plusieurs fonctions sont exposées :

| Fonction                                   | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|getHeaderActions()                          | Récupère le conteneur d'action dans l'en-tête                                  | 
|getTaskActions()                            | Récupère le conteneur d'action permettant la création de tâches                | 
|getFooterActions()                          | Récupère le conteneur d'action de pied de page (validation, annulation...)     | 

## Accéder à une action

À partir d'un conteneur d'action ``container``, plusieurs moyens permettent d'accéder à une action.

* De manière synchrone (ce qui nécessite que l'action soit, lors de l'exécution, déjà ajoutée au conteneur) : 
```javascript
var action = container.get(actionId);
```

* De manière asynchrone : 
```javascript
container.registerForAdd(function(action){});
```

:::info
Pour toute personnalisation des actions existantes, il est obligatoire de le faire au sein du `registerForAdd` de façon à garantir le chargement de l'action sur le formulaire.
:::

#  Les actions

## Fonctions disponibles

Une fois qu'une action a été récupérée, il est possible d'interagir avec en utilisant les fonctions mises à disposition :

| Fonctions                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|setEnabled(boolean enabled)                 | Active ou désactive l'action                                               	  | 
|isEnabled()                                 | Détermine si l'action est activée ou non                                       |
|setTemporaryDisabled(boolean disabled)      | Désactive de manière temporaire une action (seulement pour les boutons)        | 
|getId()                                     | Récupère l'identifiant d'une action                                            |
|execute()                                   | Exécute l'action de manière programmatique                                     |
<!---
|getStyle()                                  | Récupère les styles d'une action (attribut HTML ``class``)                     |
|setStyle(String style)                      | Définie le style de l'action                                                   |
|addStyle(String style)                      | Ajoute un style à l'action                                                     | 
-->


__Exemple :__ Désactiver l'action `Annuler` d'un composant 

```javascript
formAPI.getActions().getFooterActions().registerForAdd(function(action){
    if(action.getName() == "delete") {
		action.setEnabled(false);
	}
});
```


## Interactions avec les actions de composant


Au sein d'un formulaire d'indexation d'un composant, il est possible de réagir à l'exécution d'une action. 

Pour cela, il suffit d'utiliser la fonction ``registerForActionConfirmation(container, name, function(value, executor){})`` :  

* ``container`` : chaîne de caractères correspondant au conteneur de l'action, soit ``header``, ``footer`` ou ``task``
* ``name`` : chaîne de caractères correspondant au nom de l'action 
* ``function(value, executor)`` : la fonction à exécuter lorsque l'utilisateur interagit avec l'action 

__Exemple :__ Pour appeler une fonction à chaque fois qu'un utilisateur clique sur le bouton ``Annuler`` d'une page d'indexation

```javascript
formAPI.getActions().getFooterActions().registerForAdd(function(action){
    if(action.getName() == "cancel") {
		formAPI.getActions().registerForActionConfirmation("footer", "cancel", function(value) { ...}
	}
});
```
	
Pour avoir un contrôle encore plus fin sur les actions, l'objet ``executor`` fourni en paramètre à la closure permet de : 

* Bloquer l'exécution de l'action : 

```javascript
executor.hold();
```

* Reprendre l'exécution de l'action : 

```javascript
executor.resume();
```

* Déterminer si l'exécution de l'action est bloquée ou non :

```javascript
executor.isHeld();
```

__Note :__ si l'exécution d'une action n'est pas bloquée, elle reprend une fois la closure exécutée.

<br/>

__Exemples :__ Bloquer l'exécution d'une action jusqu'à l'obtention du retour d'un appel asynchrone

```javascript
var actions = formAPI.getActions() 
actions.registerForActionConfirmation("footer", "Valider", function(value, executor) {
    executor.hold();
    setTimeout(function(){ 
        executor.resume(); 
    }, 3000);
});
```

```javascript
var actions = formAPI.getActions() 
actions.registerForActionConfirmation("footer", "Refuser", function(value, executor) {
    executor.hold();
    setTimeout(function(){  
        JSAPI.get().getNotificationAPI().sendError("La tâche ne peut pas être refusée."); 
    }, 3000);
});
```

# Construire une action
 
Grâce à l'API ``ActionFactoryAPI``, il est possible de créer des actions personnalisées.

## Action de type bouton


Deux sortes d'action de type bouton peuvent être créées : 


* les textuelles ou principales :  
```javascript
JSAPI.get().getActionFactoryAPI().buildTextual(String id, String displayName, function(a){});
```

* les mineures 
```javascript
JSAPI.get().getActionFactoryAPI().buildMinor(String id, String displayName, function(a){});
```		

__Exemple :__ Ajout d'une action de type bouton sur le tableau présentant le contenu d'un dossier 

```javascript
JSAPI.get().registerForFolderChildrenLoaded(function(api, component, phase) {
	var action = JSAPI.get().getActionFactoryAPI().buildTextual("action", "Mon action", function(a)
	{
		console.log("execute action: " + a.getId());
	});
	api.getDocumentChildren().getActions().add(action);
});
```

## Action de type icône

Ce type d'action se base sur la police de caractère FontAwesome proposant un choix important d'icône à travers des styles CSS.

__Exemple :__ Ajout d'une action icône sur les pièces jointes d'une tâche 

```javascript
var cardAPI = JSAPI.get().getCardAPI();
cardAPI.registerForAttachment(function(card, task, definition, component){
	var actionAPI = JSAPI.get().getActionFactoryAPI();
	var action = actionAPI.buildIcon("myAction","Mon action", "fa fa-user", function(actionPresenter){
		console.info("on click");
		actionPresenter.setEnabled(false);
    });
    card.getActions().add(action);
});
```

## Action de type menu

Ce type d'action se base sur la police de caractère FontAwesome proposant un choix important d'icône à travers des styles CSS et un label.

__Exemple :__ Ajout d'une action de type menu dans l'en-tête d'un formulaire.

```javascript
var actionSet = formAPI.getActions().getHeaderActions();
var actionAPI = JSAPI.get().getActionFactoryAPI();
var action = actionAPI.buildMenu("myAction", "Mon menu", "fa fa-user", function(actionPresenter){
		console.info("on click");
});
actionSet.add(action)
```

## Action de type Responsive

Ce type d'action combine à la fois une action de type icône et une action de type menu. 

Lors de la construction, un entier est fourni permettant d'indiquer le poids de cette action. Ce poids détermine la priorité de l'action à être affichée directement (sous la forme d'icône) lorsque suffisamment de place est disponible.

Lorsqu'il n'y a pas assez de place pour afficher toutes les actions, celles ayant le poids le plus important sont affichées sous forme d'icône en priorité. Les autres sont affichées sous la forme de menu. 

```javascript
var actionSet = formAPI.getActions().getHeaderActions();
var actionAPI = JSAPI.get().getActionFactoryAPI();
var action = actionAPI.buildResponsive("myAction", "Mon menu", "fa fa-user", 10, function(actionPresenter){
		console.info("on click");
});
actionSet.add(action)
```

Il est également possible de changer le poids d'une action responsive native avec la fonction `setWeight(String actionId, int weight)` du conteneur d'action. 

```javascript
JSAPI.get().registerForComponentChange( function(formAPI, component, phase) {
	formAPI.getActions().getHeaderActions().registerForAdd(function(action) {
       if(action.getId() == "attach") {
	        formAPI.getActions().getHeaderActions().setWeight(action.getId(), 0); // Dans le menu
       }
       else if(action.getId() == "replaceContent"){
	        formAPI.getActions().getHeaderActions().setWeight(action.getId(), 100); // En première position
       }
    });
});
```
 

__Note :__ *ce type d'action n'est utilisable que pour les `headerActions` d'un formulaire d'indexation de composant.*

## Action DOM

Ce cinquième type d'action possède également les propriétés ``name`` et ``label``. La dernière propriété est un élément DOM ``element``. 
Il est possible d'interagir avec cet élément DOM en utilisant les événements classiques de DOM comme *onclick*, *onmouseover*, ...

__Exemple :__ 

```javascript
	var actionAPI = JSAPI.get().getActionFactoryAPI();
	
	var element = document.createElement('button'); 
	element.innerHTML = "Custom button title";
	var action = actionAPI.buildDOM("className", "hover label", element);

	element.onclick= function(){ 
		console.log("Click on DOM button");
	}
```