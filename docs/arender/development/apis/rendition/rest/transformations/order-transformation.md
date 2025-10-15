---
title: "Demander un ordre de transformation (POST)"
weight: 1
draft: false
keywords: ["tutoriel", "transformation"]
---

Cette API permet de demander un ordre de transformation pour créer un nouveau document dans un format attendu et selon des critères de transformation

## Description technique de l'API

Point de terminaison :
```bash
POST /transformations
```

Corps :

| Attribut              | Type                        | Requis | Description                                                             |
| :-------------------- | :-------------------------- | :----- | :---------------------------------------------------------------------- |
| format                | String                      | oui    | Le format du document en sortie                                         |
| transformationDetails | List<TransformationDetails> | oui    | La liste des détails de la transformation                               |
| annotations           | Annotations                 | non    | Les annotations correctement construites selon les documents référencés |

Réponse :

| Attribut              | Type                  | Description                                                                                                                                                                                    |
| :-------------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| transformationOrderId | TransformationOrderId | L'ID de la ordre de transformation.<br>Il servira pour l'utilisation des autres API qui permettent par exemple d'avoir des informations sur l'ordre de transformation ou bien de la supprimer. |

## Exemples

### Construire un nouveau document

L'appel ci-dessous génère une demande de construction à partir de deux documents déjà connus de la rendition.
Le document en sortie sera un PDF contenant les pages 1 à 4 du document _docId1_ puis la page 1 du même document et enfin la page 1 du document _docId2_.

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": null,
  "format": "pdf",
  "transformationDetails": [
    {
      "transformationElements": [
        {
          "documentId": "docId1",
          "pagesSelectionList": [
            {
              "maxPage": 4,
              "minPage": 1
            },
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        },
        {
          "documentId": "docId2",
          "pagesSelectionList": [
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        }
      ]
    }
  ]
}'
```

### Créez plusieurs nouveaux documents

L'appel ci-dessous génère une demande de build à partir de deux documents déjà connus de la rendition.
Deux documents seront générés : un PDF contenant la page 1 du document _docId1_ et un PDF contenant uniquement la page 1 du document _docId2_.

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": null,
  "format": "pdf",
  "transformationDetails": [
    {
      "transformationElements": [
        {
          "documentId": "docId1",
          "pagesSelectionList": [
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        }
      ]
    },
    {
      "transformationElements": [
        {
          "documentId": "docId2",
          "pagesSelectionList": [
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        }
      ]
    }
  ]
}'
```

### Graver des annotations dans un document

L'appel ci-dessous reprend la même demande de construction que dans l'exemple précédent, mais en ajoutant les annotations suivantes :
- Une annotation de type "Square" provenant de la page 1 du document docId1
- Une annotation de type "Freetext" provenant de la page 1 du document docId2
- Une annotation de type "Text" provenant de la page 1 du document docId1
- Une annotation de type "Line" provenant de la page 1 du document docId2

Le document en sortie sera similaire à celui en sortie de l'exemple précédent et contiendra en plus les annotations gravées.

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": {
    "annotations": [
      {
        "type": "com.arondor.viewer.annotation.api.SquareElemType",
        "documentId": {
          "id": "docId1"
        },
        "page": 0,
        "position": {
          "x": 10.0,
          "y": 10.0,
          "w": 100.0,
          "h": 100.0
        },
        "interiorColor": {
          "r": 0,
          "g": 255,
          "b": 0
        }
      },
      {
        "type": "com.arondor.viewer.annotation.api.FreetextElemType",
        "color": {
          "r": 0,
          "g": 255,
          "b": 255
        },
        "documentId": {
          "id": "docId2"
        },
        "page": 0,
        "position": {
          "x": 110.0,
          "y": 110.0,
          "w": 100.0,
          "h": 20.0
        },
        "opacity": 0.7,
        "contentsRichtext": {
          "type": "com.arondor.viewer.annotation.api.RichtextElemType",
          "value": "<html xmlns=\"http://www.w3.org/1999/xhtml\"><body><span style=\"font-size:16px\">This is a freetext</span></body></html>"
        },
        "contents": "This is a freetext",
        "width": 2.0,
        "defaultappearance": "0 R 1 0 0"
      },
      {
        "type": "com.arondor.viewer.annotation.api.TextElemType",
        "color": {
          "r": 250,
          "g": 250,
          "b": 0
        },
        "documentId": {
          "id": "docId1"
        },
        "page": 0,
        "position": {
          "x": 350.0,
          "y": 200.0,
          "w": 160.0,
          "h": 50.0
        },
        "creator": "Creator Name",
        "creationDate": 1667828859995,
        "opacity": 1.0,
        "contentsRichtext": {
          "type": "com.arondor.viewer.annotation.api.RichtextElemType",
          "value": "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<body><font face=\"Helvetica\" size=\"2\">This a sticky note</font></body></html>"
        },
        "contents": "This a sticky note",
        "icon": "Note"
      },
      {
        "type": "com.arondor.viewer.annotation.api.LineElemType",
        "color": {
          "r": 100,
          "g": 100,
          "b": 100
        },
        "documentId": {
          "id": "docId2"
        },
        "page": 0,
        "position": {
          "x": 350.0,
          "y": 300.0,
          "w": 150.0,
          "h": 50.0
        },
        "contentsRichtext": {
          "type": "com.arondor.viewer.annotation.api.RichtextElemType",
          "value": "<html xmlns=\"http://www.w3.org/1999/xhtml\"><body><p class=\"arrowDistance\">1.84in</p></body></html>"
        },
        "start": {
          "x": 350.0,
          "y": 300.0
        },
        "end": {
          "x": 450.0,
          "y": 350.0
        },
        "head": "OPEN_ARROW",
        "tail": "NONE",
        "width": 2.0
      }
    ]
  },
  "format": "pdf",
  "transformationDetails": [
      {
      "transformationElements": [
        {
          "documentId": "docId1",
          "pagesSelectionList": [
            {
              "maxPage": 4,
              "minPage": 1
            },
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        },
        {
          "documentId": "docId2",
          "pagesSelectionList": [
            {
              "maxPage": 1,
              "minPage": 1
            }
          ]
        }
      ]
    }
  ]
}'
```

### Ajouter des annotations FDF dans un document

L'appel ci-dessous génère une demande d'ajout d'une annotation de type "Square" sur le document _docId_. 
Le document en sortie sera un PDF contenant une annotation FDF.

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": {
    "annotations": [
       {
        "type": "com.arondor.viewer.annotation.api.SquareElemType",
        "id": "21ea93fe-ca56-4b25-9a6b-e8091d45fd35",
        "creationDate": 1667828859995,
        "flags" : {
        },
        "documentId": {
          "id": "docId"
        },
        "page": 0,
        "position": {
          "x": 10.0,
          "y": 10.0,
          "w": 100.0,
          "h": 100.0
        },
        "interiorColor": {
          "r": 0,
          "g": 255,
          "b": 0
        },
        "opacity": 0.5,
        "height": 90.0,
        "width": 180.0
      }
    ]
  },
  "format": "pdf-fdf",
  "transformationDetails": [
    {
      "transformationElements": [
        {
          "documentId": "docId"
        }
      ]
    }
  ]
}'
```

### Fusionner plusieurs documents en un seul PDF

L'appel ci-dessous génère une demande de fusion de document.
Le document en sortie sera un PDF contenant les pages du document _docId1_ puis celles du document _docId2_.

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": null,
  "format": "pdf",
  "transformationDetails": [
    {
      "transformationElements": [
        {
          "documentId": "docId1"
        },
        {
          "documentId": "docId2"
        }
      ]
    }
  ]
}'
```

### Archiver des documents

L'appel ci-dessous génère une demande de fusion de document.
Le document en sortie sera une archive (zip) contenant le document _docId1_ qui sera nommé _documentTitle1_ et
le document _docId2_ qui sera nommé _documentTitle2_.

```bash
curl -X 'POST' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "annotations": null,
  "format": "zip",
  "transformationDetails": [
    {
      "transformationElements": [
        {
          "documentId": "docId1",
          "documentTitle": "documentTitle1"
        },
        {
          "documentId": "docId2",
          "documentTitle": "documentTitle2"
        }
      ]
    }
  ]
}'
```
