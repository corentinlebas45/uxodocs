---
date: "2020-02-02"
title: "Templates DOCX"
description: "Des modèles réutilisables, par scope, pouvant être valorisés à l'aide de variables"
---


# Principe
FlowerDocs permet de générer des documents Microsoft Word au format DOCX à partir d'un modèle.
Ce modèle est également un document Microsoft Word au format DOCX pouvant contenir des propriétés personnalisées (*voir ci-dessous*).
Les propriétés fournies en entrée du générateur, et incluses dans le modèle, sont modifiées lors de la génération du document pour prendre en compte les valeurs fournies.

# Propriétés

## Définir une nouvelle propriété

Avant de pouvoir utiliser une propriété dans un document, elle doit d'abord être définie au niveau du document :  

* Ouvrir les propriétés avancées via le menu *Informations > Propriétés > Propriétés avancées*
* Dans l'onglet *Personnalisation*, entrer les informations suivantes : 
    * Nom : nom de la propriété
    * Type : texte 
    * Valeur : saisir une valeur par défaut 
* Cliquer sur *Ajouter*

## Utiliser une propriété

Pour utiliser une propriété, elle doit être ajoutée dans le corps du document. Pour cela : 

* Positionner le curseur à l'emplacement désiré
* Appuyer simultanément sur les touches `Ctrl` + `F9`
* Saisir `DOCPROPERTY <Nom de la variable>`
* Appuyer sur la touche `F9`


## Autres actions

|Raccourcis| Description|
|---|---|
|`Alt` + `F9`|Entrer dans / quitter le mode édition de toutes les propriétés personnalisées|
|`Shift` + `F9`|Entrer dans / quitter le mode édition de la propriété sélectionnée|
|`F9`|Mettre à jour la propriété sélectionnée|


# Utilisation adhoc



[shortcode]
[shortcode]
POST {core}/rest/template/msoffice/{templateId} HTTP/1.1
token: <token>
Content-Type: application/json
[
    {
        "name": "variable",
        "value": ["myvalue"]
    }
]
[shortcode]
[shortcode]
curl -X POST '{core}/rest/template/msoffice/{templateId}' \
-H 'token: <token>' \
-H 'Content-Type: application/json' \
-d '[
    {
        "name": "variable",
        "value": ["myvalue"]
    }
]'
[shortcode]
[shortcode]
$.ajax({
    type: 'POST',
    url: './plugins/rest/template/msoffice/{templateId}',
    "data": JSON.stringify([
        {
            "name": "variable",
            "value": ["myvalue"]
        }
    ]),
    contentType: "application/json",
	success: function(result) { console.info('Got!'); }
});
{{< /tab >>}}
[shortcode] 
