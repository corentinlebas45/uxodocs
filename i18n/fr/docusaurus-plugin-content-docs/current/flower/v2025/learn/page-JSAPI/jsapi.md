---
title: Utilisation de l'API JS au sein de la page
draft: true
---

# Embarquer l'API JS FlowerDocs au sein de la page

Afin de charger l'API JS FlowerDocs au sein de notre page, il est nécessaire d'ajouter au niveau du header du template de celle-ci les 2 lignes suivantes : 

```HTML
<script type="text/javascript" language="javascript" th:src="@{'../../../scripts/flower.js?v='+${version}}"></script>
<script type="text/javascript" language="javascript" th:src="@{'../../../flowergwt/flowergwt.nocache.js?v='+${version}}"></script>
```
:::info
Afin de charger la bonne version de l'API JS nous avons variabilisé le numéro de version dans les 2 lignes ajoutées. Il est donc nécessaire dans cet exemple d'implémentation d'ajouter en paramètre d'URL de la page la version de FlowerDocs à charger. 
:::

# Utilisation de l'API JS FlowerDocs
:::warning
Les opérations effectuées grâce à l'API JS peuvent nécessiter d'être authentifiées. Pour cela, utilisez l'API JS dans une page privée en étant authentifié ou dans une page publique avec un jeton valide.
:::

## Notifications 

Vous pouvez restreindre les utilisateurs à ne pouvoir déposer qu'un unique fichier. Pour cela, il suffit de modifier la configuration de la zone de dépôt de fichier pour ne permettre le versement que d'un seul contenu. Ajoutez la propriété `maxFiles: 1` lors de la création de la zone de fichier. 

<br/>
Vous devriez avoir en script de votre page : 
```javascript
Dropzone.autoDiscover = false;
	$(function() {
		var myDropzone = new Dropzone("#upload-file-form", {
			url : "../../../upload",
			maxFiles: 1
		});
	});
	function setSubmitUrl(form) {
		return false;
	}
```

<br/>
L'utilisateur est maintenant restreint, il peut toujours sélectionner un deuxième fichier mais celui-ci ne sera pas valide. Nous allons donc adapter notre script pour supprimer ce fichier invalide et informer l'utilisateur que le nombre maximum de fichier autorisé à été dépassé. Pour cela, nous devons nous abonner à l'évènement `maxfilesexceeded` de la dropzone: 

```javascript
myDropzone.on("maxfilesexceeded", file =>{});
```

<br/>
Avec la ligne suivante au sein de l'abonnement, nous supprimons le fichier en trop de la zone de dépôt de fichier : 

```javascript
myDropzone.removeFile(file);
```

<br/>
Toujours au sein de l'abonnement nous allons utiliser [l'API JS de notification](broken-link.md) ainsi que les  [libellés](broken-link.md) de FlowerDocs afin d'avertir l'utilisateur : 

```javascript
function maxFilesExceededNotification(){
  		var labelAPI = JSAPI.get().getLabelsAPI();
  		var error = labelAPI.getLabel("maximumNumberOfFilesReached");
  		JSAPI.get().getNotificationAPI().sendError(error);
  	}  
```

<br/>
Le script de la page est maintenant : 
```javascript
	Dropzone.autoDiscover = false;
	$(function() {
		var myDropzone = new Dropzone("#upload-file-form", {
			url : "../../../upload",
			maxFiles: 1
		});
		myDropzone.on("maxfilesexceeded", file =>{
  			myDropzone.removeFile(file);
  			maxFilesExceededNotification();
  		});
	});
	function maxFilesExceededNotification(){
		var labelAPI = JSAPI.get().getLabelsAPI();
  		var error = labelAPI.getLabel("maximumNumberOfFilesReached");
  		JSAPI.get().getNotificationAPI().sendError(error);
  	}  
	function setSubmitUrl(form) {
		return false;
	}
```

## Visualisation du document déposé avec ARender

Avant de valider le formulaire, l'utilisateur pourra vérifier que le document déposé est celui voulu en le visualisant dans la visionneuse ARender intégrée dans FlowerDocs. Pour cela, nous devons ouvrir le fichier temporaire dans une iframe ARender lorsque le fichier est chargé. 

<br/>
Nous nous abonnons à son chargement grâce à la ligne suivante et récupérons l'identifiant du fichier chargé: 

```javascript 

myDropzone.on("success", function(file) {
	var parts = file.xhr.responseText.split('|');
   	fileId = parts[0];
 	// add iframe
 });
```

<br/>
Le script suivant permet de créer l'iframe ARender dans la page : 

```javascript
	var ifrm = document.createElement("iframe");
	function visualizeDocument(fileId){
		ifrm.setAttribute("src", "../../../ARender.html?v="+[[${version}]]+"&props=arender&locale=fr&timeZone=Europe%2FParis&tmp="+fileId+"&scope="+<scope>+"&topPanel.documentMenu=false&topPanel.annotationMenu=false&documentbuilder.enabled=false&topPanel.search=false&advanced.searchexplorer.enabled=false&annotation.comment.explorer.enabled=false&topPanel.imageProcessMenu.brightness.enabled=false&topPanel.imageProcessMenu.contrast.enabled=false&topPanel.rotation.left=false&topPanel.rotation.right=false");
        ifrm.style.width = "100rem";
        ifrm.style.height = "60rem";
  		ifrm.style.margin = "0 0 0 1rem";
        document.body.getElementsByClassName("wrapper-page")[0].appendChild(ifrm);
	}
```

<br/>
Le script de la page est maintenant : 
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
  	}
	function setSubmitUrl(form) {
  		return false;
	}
```

Lorsque l'utilisateur dépose un fichier celui-ci s'ouvre à côté du formulaire dans ARender.

## Création du document RH dans FlowerDocs à la soumission du formulaire
Maintenant que l'utilisateur a vérifié que le document déposé est le bon ainsi que le reste des informations demandées, il doit pouvoir soumettre sa candidature. Pour cela, nous allons créer le document dans FlowerDocs avec le contenu du fichier déposé ainsi que les informations renseignées par l'utilisateur.

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
		});
		return false;
	}
```

Le script de la page est maintenant : 
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
	});
	function maxFilesExceededNotification(){
  		var labelAPI = JSAPI.get().getLabelsAPI();
  		var error = labelAPI.getLabel("maximumNumberOfFilesReached");
  		JSAPI.get().getNotificationAPI().sendError(error);
  	} 
	var draft = "";
  	function visualizeDocument(fileId){
  			ifrm.setAttribute("src", "../../../ARender.html?v=2.6.0-SNAPSHOT&props=arender&locale=fr&timeZone=Europe%2FParis&tmp="+fileId+"&scope="+<scope>+"&topPanel.documentMenu=false&topPanel.annotationMenu=false&documentbuilder.enabled=false&topPanel.search=false&advanced.searchexplorer.enabled=false&annotation.comment.explorer.enabled=false&topPanel.imageProcessMenu.brightness.enabled=false&topPanel.imageProcessMenu.contrast.enabled=false&topPanel.rotation.left=false&topPanel.rotation.right=false");
        	ifrm.style.width = "100rem";
        	ifrm.style.height = "100rem";
  			ifrm.style.margin = "0 0 0 1rem";
        	document.body.getElementsByClassName("wrapper-page")[0].appendChild(ifrm);
			draft=documents[0].getId();
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
		});
		return false;
	}
```
