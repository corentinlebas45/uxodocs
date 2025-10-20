---
title: "Exemple complet pour ajouter des annotations de biffure"
weight: 6
draft: false
keywords: ["exemple", "biffure", "transformation"]
---

Dans cette page, nous allons détailler comment créer des annotations de 
biffure à partir de l'API REST de transformations de documents.

## Annotation de biffure sur un texte donné

Nous utiliserons ici le texte "Test business" comme exemple.
Pour créer une biffure sur un texte spécifique dans le document, nous devons 
d'abord récupérer la position de ce dernier.

### Récupérer la position d'un texte

Pour récupérer la position du texte, le point de terminaison searchText est 
utilisé.

```bash
curl -X 'GET' \
 'http://localhost:8761/documents/b64_bXlkb2N1ZW1udA==/pages/0/text?searchText=Test%20business&caseSensitive=false&accentSensitive=false&regex=false' \
  -H 'accept: */*'
```

Nous travaillons ici sur la première page du document b64_bXlkb2N1ZW1udA==

Le résultat nous indique la position du texte souhaité :

```json
{"searchResults":[{"positionText":{"pageNumber":0,"position":{"x":42.52,"y":245.07303,"w":55.264004,"h":12.0},"text":"Test Business","individualWidths":[5.3768005,4.8927994,4.4000015,2.4463997,2.4463997,5.869602,4.8927994,4.4000015,1.953598,4.8927994,4.8927994,4.4000015,4.4000015],"fontSize":8.0,"font":"JQRQXM+Helvetica","clickableDestination":null,"paragraphId":3,"rightToLeftText":false,"startTime":-1.0,"rotation":0},"textRangeList":[{"firstCharacter":0,"lastCharacter":12}]}]}
```

### Créer la biffure annotation

Maintenant, nous savons que la position du texte correspond à :

```json
{"x":42.52,"y":245.07303,"w":55.264004,"h":12.0}
```

Appliquons ces coordonnées au modèle de création d'annotation :

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": {
    "annotations": [
      {
        "type": "com.arondor.viewer.annotation.api.RedactTextElemType",
        "documentId": {
          "id": "b64_bXlkb2N1ZW1udA=="
        },
        "page": 0,
        "id": {
          "id": "non-null-value"
        },
        "coords": [
          {
            "x": 42.52,
            "y": 245.07303,
            "w": 55.264004,
            "h": 12.0
          }
        ],
        "color": {
          "r": 0,
          "g": 0,
          "b": 0
        }
      }
    ]
  },
  "format": "pdf",
  "transformationDetails": [
      {
      "transformationElements": [
        {
          "documentId": "b64_bXlkb2N1ZW1udA==",
          "pagesSelectionList": [
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        }
      ],
	  "documentTitle": "MyDocument"
    }
  ]
}'
```

Le résultat nous donne l'ID de la transformation :

```json
{"transformationOrderId":{"id":"7325e176-400c-460b-b51e-a8026b78c62a"}}
```

### Récupérer les informations de la transformation

Récupérons l'identifiant du document via l'ordre de transformation demandé 
précédemment : *7325e176-400c-460b-b51e-a8026b78c62a*

```bash
curl -X 'GET' \
  'http://localhost:8761/transformations/7325e176-400c-460b-b51e-a8026b78c62a' \
  -H 'accept: */*'
```

Résultat : ici nous récupérons le transformationResultDocumentID correspondant 
à b64_NGZlMWJlMTktNGYyNS00MjAzLWI1ZGQtNGNiYTkxMmI0OGIx

```json
{"transformationOrderId":{"id":"71266b11-2016-4bb6-bcd8-562cf6ca6760"},"transformationDetails":[{"transformationElements":[{"documentId":{"id":"b64_bXlkb2N1ZW1udA=="},"documentTitle":null,"pagesSelectionList":[{"minPage":1,"maxPage":1}]}],"documentTitle":"test123"}],"currentState":"PROCESSED","transformationResultDocumentID":{"id":"b64_NGZlMWJlMTktNGYyNS00MjAzLWI1ZGQtNGNiYTkxMmI0OGIx"},"annotations":{"annotations":[{"type":"com.arondor.viewer.annotation.api.SquareElemType","color":null,"date":null,"flags":null,"id":null,"documentId":{"id":"b64_bXlkb2N1ZW1udA=="},"lastModifier":null,"page":0,"position":{"x":42.52,"y":245.07303,"w":55.264004,"h":12.0},"creator":null,"creationDate":null,"opacity":null,"subject":null,"security":null,"startTime":-1.0,"endTime":-1.0,"contentsRichtext":null,"contents":null,"popup":null,"fringe":null,"interiorColor":{"r":0,"g":0,"b":0},"width":null,"dashes":null,"style":null,"intensity":null}]},"format":"pdf","errorMessage":null,"queuedDate":"2024-08-07T14:28:51.188+02:00","processedDate":"2024-08-07T14:28:51.237+02:00","queuedTime":3,"processingTime":45}
```

### Téléchargez le document à partir de son identifiant

Maintenant que nous avons l'identifiant du document 
*b64_NGZlMWJlMTktNGYyNS00MjAzLWI1ZGQtNGNiYTkxMmI0OGIx*, nous pouvons le 
télécharger :

```bash
curl -X GET \
  'http://localhost:8761/documents/b64_NGZlMWJlMTktNGYyNS00MjAzLWI1ZGQtNGNiYTkxMmI0OGIx/file?format=pdf' \
  -o my_pdf.pdf
```

Ce document téléchargé contient l'annotation biffure souhaitée.

## Autre façon de créer des annotations de biffure

### Créer une annotation de biffure dans une zone définie

Le modèle de création d'annotation peut être utilisé directement pour créer une 
annotation dans une zone. Pour créer une annotation aux positions
*{"x":35.0,"y":25.0,"w":160.0,"h":25.0}* l'appel est :

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": {
    "annotations": [
      {
        "type": "com.arondor.viewer.annotation.api.RedactElemType",
        "documentId": {
          "id": "b64_bXlkb2N1ZW1udA=="
        },
        "page": 0,
        "id": {
          "id": "non-null-value"
        },
        "position": {
          "x": 35.0,
          "y": 25.0,
          "w": 160.0,
          "h": 25.0
        },
        "interiorColor": {
          "r": 0,
          "g": 0,
          "b": 0
        }
      }
    ]
  },
  "format": "pdf",
  "transformationDetails": [
      {
      "transformationElements": [
        {
          "documentId": "b64_bXlkb2N1ZW1udA==",
          "pagesSelectionList": [
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        }
      ],
	  "documentTitle": "MyDocument"
    }
  ]
}'
```

### Créer une annotation de biffure basée sur une règle

Nous pouvons créer les annotations basées sur des règles.
Par exemple : pouvoir rédiger tous les montants d'un document.
Cette expression régulière est ensuite utilisée : (\$[0-9]+(.[0-9]+)?)

Nous devons d'abord utiliser l'encodage URL de l'expression régulière donnée 
pour obtenir : *%28%5C%24%5B0-9%5D%2B%28.%5B0-9%5D%2B%29%3F%29*

```bash
curl -X 'GET' \
  'http://localhost:8761/documents/b64_bXlkb2N1ZW1udA==/pages/0/text?searchText=%28%5C%24%5B0-9%5D%2B%28.%5B0-9%5D%2B%29%3F%29&caseSensitive=false&accentSensitive=false&regex=true' \
   -H 'accept: */*'
```

Le résultat nous indique toutes les positions du texte correspondant, nous 
pouvons maintenant utiliser le modèle de création d'annotations, comme vu 
précédemment, pour créer les annotations souhaitées.