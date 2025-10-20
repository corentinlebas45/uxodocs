---
title: Cartes
---

# Objets disponibles

## Carte

Les fonctions disponibles sur les cartes sont les suivantes : 


| Fonction                                  | Description                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------|
|setTitle(String title)                     | Modifie le titre de la carte                                                   |        
|setHeading(String heading)                 | Modifie la description de la carte                                             | 
|getActions()                               | Récupère le conteneur d'action de la carte                                     | 
|getStyle()				                    | Récupère la classe CSS de la carte                                             | 
|addStyle(String style)                     | Ajoute la classe CSS à la carte                                                | 
|setStyle(String style)                     | Remplace les classes CSS de la carte par celle fournie                         | 
|asElement()                                | Récupère la carte comme un element DOM                                         | 


## Cartes conteneur 

Les cartes conteneur sont de grandes cartes dans lesquelles il est possible d'ajouter du contenu. Les fonctions disponibles sont les suivantes : 


| Fonction                                  | Description                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------|
|setTitle(String title)                     | Modifie le titre de la carte                                                   |        
|setCaption(String caption)                 | Modifie la description de la carte                                             |
|setIcon(String icon)                       | Modifie l'icône de la carte                                                    | 
|addCard(Card card)                         | Permet d'ajouter une carte à celle-ci                                          |
|setContent(content)                        | Permet d'ajouter un element DOM à la carte                                     |
|setVisible(boolean isVisible)              | Permet de cacher ou rendre visible la carte                                    |
|setReduced(boolean isReduced)              | Permet de réduire la carte (uniquement le titre est visible)                   | 
|getStyle()          			            | Récupère la classe CSS de la carte                                             | 
|addStyle(String style)                     | Ajoute la classe CSS à la carte                                                | 
|setStyle(String style)                     | Remplace les classes CSS de la carte par celle fournie                         | 


# Enregistrement

Afin d'accéder aux cartes, il faut s'enregistrer à leur ajout. Il existe deux types de cartes pour lesquelles l'API JS peut s'enregistrer, 
les cartes de pièces jointes et celles de résultats de recherches.

## Résultat de recherche

L'abonnement à l'ajout d'une carte de résultat de recherche est effectué à l'aide de l'objet ``cardAPI`` : 

```javascript
var cardAPI = JSAPI.get().getCardAPI();
cardAPI.registerForComponent(function(card, component){
	...
}
```

Les paramètres de la fonction sont : 

* ``card`` : la carte ajoutée
* ``component`` : le composant créé à partir du résultat de recherche


__Exemple :__ 

```javascript
var cardAPI = JSAPI.get().getCardAPI();
cardAPI.registerForComponent(function(card, component){
	var actionAPI = JSAPI.get().getActionFactoryAPI();
	var myElement = document.createElement('button'); 
	myElement.innerHTML = "Custom button title";
	var action = actionAPI.buildDOM("className", "My action description", myElement);

	card.getActions().add(action);
	card.setTitle("Title");
	card.setHeading("Heading");

	myElement.onclick= function(){ 
		console.log(card);
		console.log(component.getClassId());
    }
});
```

## Pièce jointe

### Chargement

Pour chaque définition de pièces jointes, il est possible de s'abonner au chargement de la carte correspondante par un mécanisme d'abonnement à l'aide de l'objet ``cardAPI`` : 

```javascript
var cardAPI = JSAPI.get().getCardAPI();
cardAPI.registerForAttachment(function(card, task, attDefinition, component){
	...
}
```

Les paramètres de la fonction sont : 

* ``card`` : la carte ajoutée
* ``task`` : la tâche sur laquelle est attachée la pièce jointe
* ``attDefinition`` : la définition de la pièce jointe 
* ``attComponent`` : le composant attaché à la tâche


__Exemples :__ 

```javascript
var cardAPI = JSAPI.get().getCardAPI();

cardAPI.registerForAttachment(function(card, task, definition, component){
	var actionAPI = JSAPI.get().getActionFactoryAPI();
	var myElement = document.createElement('button'); 
	myElement.innerHTML = "Custom button title";
	var action = actionAPI.buildDOM("className", "My action description", myElement);
	
	card.getActions().add(action);
	card.setTitle("Title");
	card.setHeading("Heading");

	myElement.onclick= function(){ 
		console.log(card);
		console.log(task.getClassId());
		console.log(definition.getClassId());
		console.log(component);
    }
});
```

Pour ajouter, de manière programmatique, une pièce jointe sur une tâche il est possible de déclencher un événement tel que : 

```javascript
var doc = new Document();
doc.setName("Document attaché");
doc.setClassId("Claim");

var event = new AddTaskAttachmentEvent("Attachment2", doc);
var formAPI = JSAPI.get().getComponentFormAPI(<identifiant du composant>);
formAPI.fireEvent(event);
}
```

Afin  d'afficher dans la visionneuse la pièce jointe précédemment ajoutée de manière programmatique, il est nécessaire de le notifier tel que : 
```javascript
formAPI.fireEvent(new AttachmentsLoadedEvent(formApi.getComponent()));   
```

### Changements

Afin de réagir aux modifications effectuées par les utilisateurs sur les pièces jointes, il est possible de s'abonner aux changements sur l'objet ``card`` : 

```javascript
card.registerForChange(function(attachment){
	console.info("Detected attachment change : " + attachment);		
});
```

### Actions

Les cartes présentant les pièces jointes de type `DOCUMENT` disposent d'un ensemble d'actions natives.

Ces actions peuvent être gérées de manière programmatique à partir de leur identifiant : 

* `upload-version` : upload d'une nouvelle version d'un document
* `delete-version` : supprimer la version uploadée
* `upload-attached` : upload d'un document à créer
* `delete-attached` : supprimer le document existant ajouté