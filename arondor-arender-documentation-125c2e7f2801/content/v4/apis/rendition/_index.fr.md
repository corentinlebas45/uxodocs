---
title: "Rendition API"
draft: false
weight: 2
type: docs
icon: mdi-file-cog-outline
## search related keywords
keywords: ["API", "APIs", "REST", "swagger"]
---

## Liste complète des appels de l'API REST

ARender rendition fournit la liste des appels REST disponibles. Cela est fournit via le Swagger qui permet de tester les appels REST et donne les indications nécessaires à la bonne exécution de l'appel. L'URL est la suivante :

```cfg
{ARender_rendition_host}/swagger-ui.html
```

En dessous se trouve des exemples détaillés d'appels REST.

## Vérification de l'existence d'un document

La vérification de l'existence d'un document se fait par l'url suivante en appel GET : 

```cfg
GET {ARender_rendition_host}/document/?documentId=my-custom-document-id
```

La requête va envoyer une réponse qui sera *true* dans le cas où le document existe et sera *false* dans le cas où le document n'existe pas. La réponse HTTP doit être 200 pour une réponse valide.

## Chargement d'un document

Pour charger un document dans la rendition il faudra utiliser l'appel POST suivante : 

```cfg
POST {ARender_rendition_host}/document/accessor/upload/multipart/?documentId=my-custom-document-id&documentTitle=arender-en.pdf
```

Parmis les *Headers* de la requête il faudra ajouter : 

| Clé          | Valeur              |
| ------------ | ------------------- |
| Content-Type | multipart/form-data |
| Accept       | application/xml     |

Puis le fichier à charger dans la rendition doit être fourni dans le *Body* de la requête. La réponse HTTP doit être 200 pour une réponse valide.

## Récupération du document layout

La récupération du document layout d'un document s'effectue avec l'url suivante en appel GET : 


```cfg
GET {ARender_rendition_host}/document/layout/?documentId=my-custom-document-id
```

Si le document est chargé alors vous obtiendrez le document layout complet du document. La réponse HTTP doit être 200 pour une réponse valide.

{{< tag type="code" title="Example de réponse avec un document de 2 pages">}}

```cfg
{
  "type": "com.arondor.viewer.client.api.document.DocumentPageLayout",
  "documentId": {
    "id": "b64_bG9jYWxlPWVuJnJhbmRvbVVVSUQ9NDcwZDIzNjMtZDNiOS00MGEzLWE0MTEtMjBjMDI3OWExZDk1"
  },
  "documentTitle": "Baujagd.pdf",
  "mimeType": "application/pdf",
  "pageDimensionsList": [
    {
      "width": 720,
      "height": 540,
      "rotation": 0,
      "dpi": 72,
      "pageLayers": null
    },
    {
      "width": 720,
      "height": 540,
      "rotation": 0,
      "dpi": 72,
      "pageLayers": null
    }
  ]
}
```


## Récupération de document source ou de sa version convertie

La récupération du contenu du document source ou de sa version convertie se fait par la requête suivante en appel GET : 

```cfg
GET {ARender_rendition_host}/accessor/getContent/raw/{documentId}/{selector}
```

Voir ci-dessous pour les valeurs de la variable {selector} : 

| Valeur     | Description                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| INITIAL    | Le document source avant conversion                                                                     |
| RENDERED   | Le document converti (**PDF** pour les document non-multimedia et **MP4** pour les document multimedia) |

La requête va envoyer en réponse le texte brut du PDF, ce qui permet de trouver la version du PDF. La réponse HTTP doit être 200 pour une réponse valide.

## Génération d'une image d'une page d'un document

Pour générer une image d'un document déjà chargé, il faudra utiliser l'url suivante en appel GET : 

```cfg
GET {ARender_rendition_host}/document/image/?description=IM_1800_0&documentId=my-documentID&page=1&width=1800
```

| Paramètre   | Description                                                                                                                                                                                                                     |
| ----------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| documentId  | Le document Id dans ARender                                                                                                                                                                                                     |
| page        | Le numéro de page (commence à 0)                                                                                                                                                                                                |
| description | Commence par IM pour informer que c'est une image, puis largeur de l'image en pixel, puis la rotation en degré puis SVG si vous souhaitez avoir l'image en SVG, sinon sera en PNG. Chaque paramètre est toujours séparé par *_* |

La requête va envoyer en réponse l'image demandée. La réponse HTTP doit être 200 pour une réponse valide.