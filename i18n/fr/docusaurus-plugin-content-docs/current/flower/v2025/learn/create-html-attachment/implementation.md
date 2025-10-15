+++
date = "2020-02-01T11:20:01+02:00"
title = "Implémentation"
+++



# Créer des réponses aux courriers depuis FlowerDocs

## Afficher l'action de création de contenu sur les pièces jointes d'une tâche
Pour commencer nous allons configurer le plugin afin d'afficher l'action de création de document sur toutes les pièces jointes d'une tâche de classe `GEC_Step2_ATraiter`. 

Ajouter le script suivant : 
```javascript
    new CreateHTMLAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter'
}).bind();
```

## Restreindre aux pièces jointes de réponse
Nous souhaitons restreindre l'affichage de l'action à la pièce jointe identifiée `Reponse`, pour cela l'option `attachmentId` est disponible.

Ajouter l'option suivante dans le script du plugin : 

[shortcode]
```javascript
attachmentId: 'Reponse'
```
[shortcode]
Nous obtenons donc le script suivant 
[shortcode]
```javascript
new CreateHTMLAttachmentPlugin({
	attachmentId: 'Reponse',
	classId: 'GEC_Step2_ATraiter'
}).bind();
```
[shortcode]

## Instancier le document dans FlowerDocs 
Nous avons maintenant une action au niveau de la pièce jointe identifiée `Reponse` permettant d'ouvrir l'éditeur de contenu dans un OffMenu. Il faut maintenant pouvoir sauvegarder le contenu créé dans un document de la classe `CourrierSortant`

Pour cela, nous allons ajouter l'option `instantiator` permettant d'indexer le composant tel que souhaité. Sans cette configuration, le document sera créé avec pour classe celle appliquée par défaut, à savoir `Document`.

La méthode `TagOracle.predict` permet de valoriser les tags communs entre la tâche et le document.

[shortcode]
```javascript
new CreateHTMLAttachmentPlugin({
	attachmentId: 'Reponse',
	classId: 'GEC_Step2_ATraiter',
	instantiator:
		function(file) {
			var doc = new Document();
			//Le document créé sera nommé de la même manière que son contenu
			doc.setName(file.Name);
			// Ajout du contenu dans le document
			doc.addFile(file.id);
			doc.setClassId('CourrierSortant');
			//valorisation des tags du document à créer grâce aux données de la tâche ouverte
			TagOracle.predict(this.formAPI.getComponent(), doc);
			return doc;}
}).bind();
```
[shortcode]

## Affichage de l'action en fonction du contexte
L'action est affichée uniquement si la pièce jointe n'est pas déjà associée à un document. Il est possible de restreindre encore l'affichage de l'action en fonction du contexte. Dans notre exemple, nous voulons que l'action s'affiche uniquement si la tâche est assignée à l'utilisateur. Pour cela nous allons ajouter l'option `canAttach` à notre plugin. 

[shortcode]
```javascript
new CreateHTMLAttachmentPlugin({
	attachmentId: 'Reponse',
	classId: 'GEC_Step2_ATraiter',
	instantiator:
		function(file) {
			var doc = new Document();
			//Le document créé sera nommé de la même manière que son contenu
			doc.setName(file.Name);
			// Ajout du contenu dans le document
			doc.addFile(file.id);
			doc.setClassId('CourrierSortant');
			//valorisation des tags du document à créer grâce aux données de la tâche ouverte
			TagOracle.predict(this.formAPI.getComponent(), doc);
			return doc;},
	canAttach:
		function(card, definition, formAPI) {
			return formAPI.getComponent().getAssignee() == JSAPI.get().getUserAPI().getId();
		}
}).bind();
```
[shortcode]


# Pour aller plus loin : personnalisation de l'action
Nous souhaitons maintenant personnaliser l'action de création de contenu. Nous allons rajouter à notre script, les options de personnalisation du titre et de l'icône de l'action: 
[shortcode]
```javascript
	title:'Rédiger une réponse',
	icon:'fa-reply'
```
[shortcode]
Ainsi avec ce script, l'action de création de contenu est entièrement personnalisée : 
[shortcode]
```javascript
new CreateHTMLAttachmentPlugin({
	attachmentId: 'Reponse',
	classId: 'GEC_Step2_ATraiter',
	instantiator:
		function(file) {
			var doc = new Document();
			//Le document créé sera nommé de la même manière que son contenu
			doc.setName(file.Name);
			// Ajout du contenu dans le document
			doc.addFile(file.id);
			doc.setClassId('CourrierSortant');
			//valorisation des tags du document à créer grâce aux données de la tâche ouverte
			TagOracle.predict(this.formAPI.getComponent(), doc);
			return doc;},
	canAttach:
		function(card, definition, formAPI) {
			return formAPI.getComponent().getAssignee() == JSAPI.get().getUserAPI().getId();
		},
	title:'Rédiger une réponse',
	icon:'fa-reply'
}).bind();
```
[shortcode]

