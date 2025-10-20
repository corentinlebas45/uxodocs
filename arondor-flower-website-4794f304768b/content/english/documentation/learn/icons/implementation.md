+++
 date = "2020-02-01T13:20:01+02:00"
title = "Implementation"
+++

# Goal

For this training module, we want to add a button to the document header menu so that you can write an email to return the document.


# Prerequisites

We will use FontAwesome's  [envelope](https://fontawesome.com/icons/envelope-open-text?s=solid)  and [pen](https://fontawesome.com/icons/pen?s=solid) icons stacked on top of each other for our action

# Set up

## Creating the stacked icon

Use the following line to combine the two selected icons: 

```javascript
stacked(fa fa-envelope-open-text,fa fa-pen)
```

## Adding a button to the header containing our icon 

Create a script from the **Administration > Display > Scripts** menu and add the following content: 

```javascript

JSAPI.get().registerForComponentChange(function(componentFormAPI, component, phase) {
	if(component.getCategory()=='DOCUMENT'){
		var actionSet = componentFormAPI.getActions().getHeaderActions();
		var actionAPI = JSAPI.get().getActionFactoryAPI();
		var action = actionAPI.buildResponsive("Rédiger une réponse", "Rédiger une réponse", "stacked(fa fa-envelope-open-text,fa fa-pen)",0, function(actionPresenter){
			//Do custom stuff
		});
		actionSet.add(action)
	}
});


```

<br/>
You get a new action with an icon like this: 


## Adapting the size of icons

We now want to reduce the size of the pen in relation to the envelope. To do this, we are going to modify our stacked icon by specifying the size of the different icons: 

```javascript
stacked(fa fa-envelope-open-text fa-lg,fa fa-pen fa-sm)
```
:::info
Different sizes are provided by FontAwesome and documented [here](https://fontawesome.com/docs/web/style/size)  
:::

All we need to do now is position the pen in the top right-hand corner. 

## Relative positioning of icons

We are going to add a detail to our stacked icon concerning the positioning of the pen: 

```javascript
stacked(fa fa-envelope-open-text fa-lg,fa fa-pen fa-sm align-text-top ml-0.5)
```

We obtain the expected result: 
{{< img src="/img/documentation/learn/stacked-icons2.png" class="col-8 m-auto">}}

## Bonus: a touch of color

Different colours can be set for each icon: 

```javascript
stacked(fa fa-envelope-open-text fa-lg green,fa fa-pen fa-sm align-text-top ml-0.5 red)
```

<!--:::info
Find the scope module corresponding to this training [here](broken-link.md) 
:::-->