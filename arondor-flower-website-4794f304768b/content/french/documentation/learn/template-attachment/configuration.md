+++
date = "2020-02-01T13:20:01+02:00"
title = "Configuration"
+++

# Objectif

Dans cette partie nous verrons comment configurer le plugin et mettre en place celui-ci sur un scope intégrant le module GEC.  
Nous voulons l'appliquer à la pièce jointe identifiée `Reponse` des tâches `GEC_Step2_ATraiter`. Nous voulons ici qu'un nouveau document puisse être créé directement à partir d'un template Word et associé à la pièce jointe identifiée `Reponse`.


# Prérequis

Il vous faut posséder un environnement FlowerDocs avec un scope intégrant le module GEC.  
Verifiez que le `TemplateAttachmentPlugin` est bien présent sur le scope. Il est trouvable dans l'administration, dans l'onglet **Affichage > Scripts**.

# Configuration

Pour utiliser le plugin sur un élément particulier, il faut tout d'abord le configurer pour cet élément.
Pour cela, suivez les étapes suivantes :

* Créez un nouveau script JavaScript dans l'onglet **Affichage > Scripts** de l'administration de FlowerDocs. Vous pouvez nommer ce script TemplateAttachmentConfiguration.
* Le contenu de ce script sera le suivant :

new TemplateAttachmentPlugin({
	attachmentId: 'Reponse',
  	classId: 'GEC_Step2_ATraiter',
	instantiator:
		function(fileId) {
			var doc = new Document();
			doc.addFile(fileId);
			doc.setClassId('CourrierSortant');
			TagOracle.predict(this.formAPI.getComponent(), doc);
			return doc;
		},
}).bind();


* Sauvegardez le script, puis purgez le cache de l'application. Cela permet de prendre en compte les modification apportées dans la configuration du scope.









<br/>
Il est possible de rajouter des options dans ce script :

```javascript
	canAttach:
		function(card, definition, formAPI) {
			return formAPI.getComponent().getAssignee() == JSAPI.get().getUserAPI().getId();
		},
```
Limite l'utilisation du plugin aux l'utilisateur auxquels la tâche est assignée.

<br/>
```javascript
	nameBuilder:
		function() {
			return 'Réponse-' + new Date().toLocaleDateString() + '.docx';
		},
```
Cette fonction permet de donner au document le nom du fichier ajouté.
Elle doit être appelée dans la fonction `instantiator` de la manière suivante (après l'instanciation du document) :

<br/>
```javascript
			var name = this.nameBuilder();
			doc.setName(name);
```

