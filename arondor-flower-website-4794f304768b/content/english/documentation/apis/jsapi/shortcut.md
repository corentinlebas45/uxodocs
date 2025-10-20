+++
date = "2008-03-28T13:20:01+02:00"
title = "Shortcuts"
intro = "Facilitate access to certain actions by customizing shortcuts."
+++

To facilitate access to certain actions, several shortcut containers can be manipulated through the JS API: 

* ``ContextualMenuAPI``: component contextual menu (present on search results tables)
* ``MenuShortcutsAPI`` : button ``+`` accessible from the menu bar
   
   
   
There are two ways of accessing these APIs: 

* ``get()``: access the loaded shortcut container at any time
* ``registerForLoad(function(api){});`` : subscribe to the loading of a shortcut container

# General

The following functions are available on shortcut containers. 


| Function                                                                                            | Description                                                                             |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------| 
| addCircled(String id, String icon, String color, String name, String description, Callback callback) | Adds a shortcut with a circle type icon and hover description  |         
| addIconized(String id, String icon, String color, String name, Callback callback)                    | Adds a shortcut with an icon (FontAwesome)                                        |
| add(String id, Element element, String name, Callback callback)                                      | Adds a shortcut with a DOM element as icon                                     | 
| remove(String id)                                                                                    | Deletes a shortcut using its identifier                                       |
| getIds()                                                                                             | Recovers shortcut identifiers                                       | 

## Examples

To subscribe to the loading of these shortcut menus, the following functions will be used: 

__Create a folder from the menu bar__ 

```javascript
MenuShortcutsAPI.get().registerForLoad(function(api){ 
	api.addCircled("createFolder", "fas fa-folder-open", "flat-red" , "Folder", "Create a folder", function(){
	    var newFolder = new Folder();
	    newFolder.setClassId("Folder");
	    var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newFolder);
	    popup.show();
	});  
});
```

# Contextual menu

Additional functions are provided for manipulating a contextual menu: 


| Function                                                                               | Description                                                                         |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| add(String groupId, String id, String icon, String label,  Callback callback)           | Adds a shortcut icon to the context menu and to a group in the table header |   
| getSelected()                                                                           | Retrieves selected components                                                |        
| getCategory()                                                                           | Retrieves the category of selected components                                   | 


By using the `add` function, you can group actions according to need, using the same group identifier.
 
__Example:__ Creating a task from two documents 

```javascript
ContextualMenuAPI.get().registerForLoad(function(api){
	if(api.getSelected().length != 2 || api.getCategory() != "DOCUMENT"){
		return;
	}

	api.add("customActions", "createTask", "fa fa-user" , "Task", function(){
		var newTask = new Task();
		newTask.setClassId("GEC_Step0_Creation");
		TagOracle.predict(api.getSelected(), newTask);			
		newTask.addAttachments("Courrier", Ids.from(api.getSelected()), "DOCUMENT");			
		var popup = JSAPI.get().getPopupAPI().buildComponentCreation(newTask);
		popup.show();
	});  
});
```

__Responses to a task__ 


If the user selects tasks from the same class and these have responses, these responses will be displayed as actions in the contextual menu.

This feature can be disabled by adding the following JS script: 

```javascript
function registerToAddAnswersInTaskContextualMenu(){}
```





