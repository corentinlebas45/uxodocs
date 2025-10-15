+++
 date = "2020-02-02T13:20:01+02:00"
title = "Pour aller plus loin"
draft = true
+++

# Redirection vers une autre page publique
L'utilisateur a maintenant créé son document dans FlowerDocs, mais il ne le sait pas. Nous pouvons rediriger l'utilisateur sur la page de succès après la création du document : 
```javascript 
	function setSubmitUrl(form) {
		var firstname = $("#firstname").val();
  		var lastname = $("#lastname").val();
  		var email = $("#email").val();
  		
		var doc = new Document();
		doc.setName('CV ' + firstname + ' ' + lastname);
		doc.setClassId('RH');
		doc.addTag('Email',email,false);
		doc.addTag('FirstName',firstname,false);
		doc.addTag('LastName',lastname,false);
  		
		doc.addFile(fileId);
		JSAPI.get().document().create(new Array(doc), function(documents) {
			console.info('Le document : ' + documents[0].getName() + ' a été créé');
			//redirection vers la page de succès
				window.location.href = 'application-success?email=' + email;
		});
		return false;
	}
```
:::info
Il est aussi possible de rediriger de la même manière l'utilisateur sur une page d'erreur en cas d'échec. 
:::

# Gestion de la suppression du document déposé
Actuellement l'utilisateur peut visualiser son document mais, s'il s'est trompé, il ne peut pas le supprimer. Nous allons modifier la configuration de la zone de dépôt de fichier afin qu'il puisse si besoin changer le fichier déposé en ajoutant la propriété `addRemoveLinks : true`. 

<br/>
Un lien permettant de supprimer le fichier a donc été ajouté. Cependant le fichier précédemment déposé est toujours visualisé dans ARender, et lors du prochain dépôt de fichier une nouvelle iframe sera ajoutée. Nous devons donc supprimer l'iframe existante lors de la suppression du fichier : 
``` javascript
myDropzone.on("removedfile", file =>{
  			ifrm.remove();
  		});
```
# Bilan : le script de notre page
[shortcode]
```javascript
	Dropzone.autoDiscover = false;
  	var ifrm = document.createElement("iframe");
	$(function() {
		var myDropzone = new Dropzone("#upload-file-form", {
			url : "../../../upload",
  			maxFiles: 1
		});
		myDropzone.on("success", function(file) {
			var parts = file.xhr.responseText.split('|');
			fileId = parts[0];
  			visualizeDocument(fileId);
		});
  		myDropzone.on("maxfilesexceeded", file =>{
  			myDropzone.removeFile(file);
  			maxFilesExceededNotification();
  		});
		myDropzone.on("removedfile", file =>{
  			ifrm.remove();
  		});
	});
	function maxFilesExceededNotification(){
  		var labelAPI = JSAPI.get().getLabelsAPI();
  		var error = labelAPI.getLabel("maximumNumberOfFilesReached");
  		JSAPI.get().getNotificationAPI().sendError(error);
  	} 
  	function visualizeDocument(fileId){
  			ifrm.setAttribute("src", "../../../ARender.html?v=2.6.0-SNAPSHOT&props=arender&locale=fr&timeZone=Europe%2FParis&tmp="+fileId+"&scope="+<scope>+"&topPanel.documentMenu=false&topPanel.annotationMenu=false&documentbuilder.enabled=false&topPanel.search=false&advanced.searchexplorer.enabled=false&annotation.comment.explorer.enabled=false&topPanel.imageProcessMenu.brightness.enabled=false&topPanel.imageProcessMenu.contrast.enabled=false&topPanel.rotation.left=false&topPanel.rotation.right=false");
        	ifrm.style.width = "100rem";
        	ifrm.style.height = "60rem";
  			ifrm.style.margin = "0 0 0 1rem";
        	document.body.getElementsByClassName("wrapper-page")[0].appendChild(ifrm);
		});
  	}
		function setSubmitUrl(form) {
		var firstname = $("#firstname").val();
  		var lastname = $("#lastname").val();
  		var email = $("#email").val();
		var doc = new Document();
		doc.setName('CV ' + firstname + ' ' + lastname);
		doc.setClassId('RH');
		doc.addTag('Email',email,false);
		doc.addTag('FirstName',firstname,false);
		doc.addTag('LastName',lastname,false);
		doc.addFile(fileId);
		JSAPI.get().document().create(new Array(doc), function(documents) {
			console.info('Le document : ' + documents[0].getName() + ' a été créé');
			//redirection vers la page de succès
				window.location.href = 'application-success?email=' + email;
		});
		return false;
	}
```
[shortcode]