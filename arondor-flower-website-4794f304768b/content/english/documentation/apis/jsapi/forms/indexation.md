+++
date = "2001-03-28T13:20:01+02:00"
title = "Indexing"
+++

An indexing form lets you view and modify a component's tags. In order to interact with this type of form, it is necessary to subscribe to its opening: 

```javascript
JSAPI.get().registerForComponentChange(function(componentFormAPI, component, phase) {
	// Use the componentFormAPI object to interact with the form
});
```


__Note:__ When displaying several component forms, it may be necessary to access a specific form: ``JSAPI.get().getComponentFormAPI(<identifiant du composant>)``. 


## Actions in a form 

The object ``componentFormAPI.getActions()`` is used to interact with the actions of a form presenting a document, folder... 

A number of functions are available for this purpose.


| Function                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|getHeaderActions()                          | Retrieves action container from header                                  | 
|getTaskActions()                            | Retrieves task action container                                      | 
|getFooterActions()                          | Retrieves action container from footer (validation, cancellation...)| 

Section [Actions](broken-link.md) documents the functions available for interacting with the various actions’ containers and the actions retrieved from these 3 containers. 


## Adding cards 

An indexing form is made up of a set of cards containing component information, tags, attachments and parent folders. 
You can also add cards via the JS API with the ``addCardContainer(cardContainer)`` function, which requires a container card as input. 

The functions available on this object are available in the [Cards] section (broken-link.md).

__Example:__ Adding a customised container card

```javascript
var desc1 = buildDescription("Description 1");
var card1 = buildCard("Card", "Heading card", "card-style");

var div = document.createElement("div");
div.className="custom-card-container";
addChildren(div, [desc1,card1]);

var cardContainer = buildCardContainer("fa fa-clone","Title","Caption","card-box custom-card-container";
cardContainer.setContent(div);
formAPI.addCardContainer(cardContainer);

function buildCardContainer(icon,title,caption, style){
	var cardContainer = new CardContainer();
	cardContainer.setIcon(icon);
	cardContainer.setTitle(title);
	cardContainer.setCaption(caption);
	cardContainer.setVisible(true);
	cardContainer.addStyle(style);
	return cardContainer;
}
function buildDescription(description){
	var desc = document.createElement("div");
	desc.innerHTML = description;
	return desc;
}
function buildCard(title, heading, style){
	var card = new Card();
	card.setTitle(title);
	card.setHeading(heading);
	card.addStyle(style)
	return card.asElement();
}
function addChildren(parent, children){
	for (i=0; i < children.length; ++i) {
    	parent.appendChild(children[i]);
	}
}
```

## Form status

The `formAPI.isDirty()` function on a form can be used to find out whether the form has been modified.