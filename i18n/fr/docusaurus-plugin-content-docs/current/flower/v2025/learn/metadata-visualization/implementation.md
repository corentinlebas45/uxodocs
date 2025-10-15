+++
 date = "2020-02-01T11:20:01+02:00"
title = "Implémentation"
+++



# Visualiser les métadonnées de toutes les pièces jointes d'une tâche

Pour commencer, nous allons simplement configurer le plugin pour nous permettre de visualiser les métadonnées de chaque pièce jointe d'une tâche de classe `GEC_Step2_ATraiter`.

Ajouter le script suivant : 
```javascript
    new MetadataVisualizationAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter',
	}).bind();
```

L'utilisateur peut maintenant voir les métadonnées de chaque pièce jointe d'une tâche `GEC_Step2_ATraiter`, dans un Off Menu, en cliquant sur l'icone `oeil` des pièces jointes.

# Restreindre l'action à une seule pièce jointe

Nous allons maintenant restreindre l'affichage de cette action. Nous souhaitons que seule la pièce jointe identifiée `Courrier` dispose de l'action de visualisation. Pour cela, nous ajoutons l'option `attachmentId` à notre configuration de plugin afin de renseigner sur quelle pièce jointe l'action doit être positionnée.


[shortcode]
```javascript
attachmentId: 'Courrier'
```
[shortcode]

Nous obtenons donc le script suivant 
[shortcode]
```javascript
new MetadataVisualizationAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter',
  	attachmentId: 'Courrier'
}).bind();
```
[shortcode]

# Pour aller plus loin : personnalisation de l'action

Nous souhaitons maintenant personnaliser l'action de visualisation. Nous allons ajouter à notre script, les options de personnalisation du titre et de l'icône de l'action: 

[shortcode]
```javascript
	title:'Visualisation des données du courrier entrant',
	icon:'fa-up-right-from-square'
```
[shortcode]

Ainsi avec ce script, l'action de visualisation est entièrement personnalisée : 
[shortcode]
```javascript
new MetadataVisualizationAttachmentPlugin({
	classId: 'GEC_Step2_ATraiter',
  	attachmentId: 'Courrier',
	title:'Visualisation des données du courrier entrant',
	icon:'fa-up-right-from-square'
}).bind();
```
[shortcode]