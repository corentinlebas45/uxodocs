---
date: "2021-12-02T10:20:01+02:00"
title: "Action de pièce jointe"
description: "Les actions sur une pièce jointe de tâche"
---

# Principe

Les plugins de pièce jointe (ou plugin d'attachement) permettent l'ajout d'une action dans l'encart de la pièce jointe configurée. Cette action permet de joindre un composant à la tâche et ainsi permettre sa visualisation dans la visionneuse.
 
Plusieurs plugins d'attachement sont ainsi mis à disposition : 

* `SearchAttachmentPlugin`
* `TemplateAttachmentPlugin`
* `CreateHTMLAttachmentPlugin`

Un plugin de visualisation de métadonnées de pièce jointe est aussi disponible.

Les constructeurs de ces plugins acceptent une collection d'options permettant de les configurer.
[shortcode]
[shortcode]
new SearchAttachmentPlugin({
    '<option name>': <option value>
});
[shortcode]
[shortcode]

 Les options suivantes sont communes aux différents plugins d'attachement de pièces jointes: 

|Clé|Type|Description|
|---|----|-----------|
|`attachmentId`|String |Identifiant de la définition de pièce jointe|
|`title`|String |Titre de l'action (Titre de la popup de sélection dans le cas du `SearchAttachmentPlugin`)|
|`icon`|String |Icône de l'action (Icône de la popup de sélection dans le cas du `SearchAttachmentPlugin`)|
|`postProcessor`|Fonction |Fonction appelée après l'attachement de la pièce jointe|
|`canAttach`|Fonction|Fonction définissant dans quel cas l'action doit être présente|

# SearchAttachmentPlugin
Le plugin `SearchAttachmentPlugin` ajoute une action de recherche dans l'encart d'une pièce jointe. Cette action ouvre une popup permettant de sélectionner, parmi les résultats d'une recherche, un composant à ajouter en tant que pièce jointe de la tâche.

|Clé|Type|Description|
|---|----|-----------|
|`template`|String |Identifiant du formulaire de recherche à afficher dans la popup de sélection (par défaut: `DefaultSearch`)|
|`category`|String |Catégorie de composants à rechercher (par défaut: `DOCUMENT`)|
|`criteria`|Tableau |Liste des critères de recherche|

[shortcode]
[shortcode]
new SearchAttachmentPlugin({
    attachmentId: '<AttachmentId>',
    title: 'Recherche une pièce jointe',
    postProcessor: function(component){
        console.info('Component has been attached: ', component.getId());
    }
}).bind()
[shortcode]
[shortcode]

var criterion = new Criterion();
criterion.setName("classid");
criterion.setOperator("EQUALS_TO");
criterion.addValue("CourrierSortant");

new SearchAttachmentPlugin({
    attachmentId: '<AttachmentId>',
    title: 'Recherche une pièce jointe',
  	criteria: [criterion],
  	category: 'DOCUMENT',
    postProcessor: function(component){
        console.info('Component has been attached: ', component.getId());
    }
}).bind()
[shortcode]
[shortcode]

# TemplateAttachmentPlugin 

Le plugin `TemplateAttachmentPlugin` ajoute une action permettant d'attacher un document généré à partir d'un modèle Microsft Word. Par défaut le plugin permet l'ouverture du modèle dans le FlowerDocs Companion si celui-ci est installé sur le poste utilisateur. Si ce n'est pas le cas ou si le mode téléchargement est activé alors le document généré est téléchargé.

|Clé|Type|Description|
|---|----|-----------|
|`downloadMode`|Booléen |Indique si le document créé doit être téléchargé|
|`instanciator`|Fonction | Fonction permettant d'indexer le composant de façon programmatique|

# MetadataVisualizationAttachmentPlugin 

Ce plugin permet la visualisation des données de la pièce jointe sans changement de place. Les données à visualiser sont ouvertes dans un OffMenu. 

|Clé|Type|Description|
|---|----|-----------|
|`over`|Booléen |Indique si le OffMenu doit être affiché par dessus la page courante|

:::warning
Le OffMenu du plugin est fermé lors d'un changement de place.
:::

