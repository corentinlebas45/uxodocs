---
title: "Web UI API"
draft: false
weight: 1
type: docs
icon: mdi-monitor-dashboard
## search related keywords
keywords: ["API", "APIs"]
---

## Générer un UUID pour un document

Pour obtenir un UUID qui servira au chargement de votre document, il faut utiliser l'appel GET suivant : 

``` cfg
{arender-web-ui_host}/arendergwt/openExternalDocument?url=https://arender.io/docs/demo/ARender-doc-demo.pdf
```

Vous obtenez en réponse l'UUID. La réponse HTTP doit être 200 pour une réponse valide.

Exemple de réponse : 
``` cfg
b64_dXJsPWh0dHBzOi8vYXJlbmRlci5pby9kb2NzL2RlbW8vQVJlbmRlci1kb2MtZGVtby5wZGY=
```

Pour générer un UUID encrypté il faudra avoir la propriété suivante :

{{< tag type="code" title="WEB-INF/classes/arender-server-custom-vanilla.properties">}}

```cfg
arender.documentid.generator.beanName=encryptedDocumentIdGenerator
```
[shortcode]

Exemple de réponse avec UUID encrypté : 

``` cfg
bXX_IRwGhKdg4ij~wR~jcpA7NssSfEETwzMM338XuQBixdQbaJtFApJV5IPGEklglZXjDcDGQck1Rog_
```

## Génération d'une image

Pour générer une image png, il faut utiliser l'URL suivante : 

``` cfg
{arender-web-ui_host}/arendergwt/imageServlet?uuid=[UUID]&pagePosition=0&desc=IM_1632_0
```

| Paramètre    | Description                                                                                                                                                  |
| ------------ |------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uuid         | Le document Id dans ARender                                                                                                                                  |
| pagePosition | Le numéro de page (commence à 0)                                                                                                                             |
| desc         | Commence par IM pour informer que c'est une image, puis largeur de l'image en pixel, puis la rotation en degré. Chaque paramètre est toujours séparé par *_* |

## Impression

Pour lancer l'impression depuis le navigateur, il faut utiliser l'URL suivante : 

``` cfg
{arender-web-ui_host}/arendergwt/printServlet?uuid=[UUID]&desc=IM_1200_0&imagePrintStyle=width:800px;&pages=1-19,&asPDF=true
```

| Paramètre       | Description                                                                                                                                                                                                                                               |
| --------------- |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uuid            | Le document Id dans ARender                                                                                                                                                                                                                               |
| desc            | Commence par IM pour informer que c'est une image, puis largeur de l'image en pixel, puis la rotation en degré. Chaque paramètre est toujours séparé par *_* . Le paramètre est ignoré si le paramètre asPDF est présent avec la valeur *true* ou *false* |
| imagePrintStyle | Défini le style CSS rajouter sur chaque page du document. Le paramètre est ignoré si le paramètre asPDF est présent avec la valeur *true* ou *false*                                                                                                      |
| pages           | Défini l'intervalle des pages qui seront imprimé. Le paramètre est ignoré si le paramètre asPDF est présent avec la valeur *true* ou *false*                                                                                                              |
| asPDF           | L'impression va se baser sur le document en PDF, donc le document aura les pages aux dimensions du document.                                                                                                                                              |


## Document layout

### Description

Récupère la disposition du document.

### URL

```cfg
{ARender_web-ui_host}/arendergwt/documentLayout?uuid=[UUID]
```

### Methode de requête accéptée

- GET

### Paramètres

| Parameter       | Description        |
| --------------- |------------------- |
| uuid            | L'id du document.  |


### Valeur de retour

Les données représentant la disposition du document au format JSON.

Example :

``` json
{
    "type":"com.arondor.viewer.client.api.document.DocumentPageLayout",
    "documentId":
    {
      "id":"b64_I2RlZmF1bHQ="
    },
    "documentTitle":"ARender.pdf",
    "mimeType":"application/pdf",
    "pageDimensionsList":
    [{
        "width":612,
        "height":792,
        "rotation":0,
        "dpi":72,
        "pageLayers":null
    },
    {
        "width":612,
        "height":792,
        "rotation":0,
        "dpi":72,
        "pageLayers":null
    }]
}
```

## Upload

### Description

- POST 

Utilisé au moment de l'upload de document.
Permet de générer en cache le document fourni.
Utilise le progiciel *ServletFileUpload* d'Apache pour transférer des documents.

- GET 

Vérifie si le document est présent en cache.
Le statut de retour est 200 le cas échéant, 404 sinon.
  

### URL

```cfg
{ARender_web-ui_host}/arendergwt/uploadServlet?uuid=[UUID]
```

### Methode de requête accéptée

- GET
- POST

### Paramètres

| Parameter       | Description        |
| --------------- |------------------- |
| uuid            | L'id du document.  |

### Valeur de retour

L'id du document.


## Download

### Description

Télécharge le document représenté par l'ID donné en paramètre.


### URL

```cfg
{ARender_web-ui_host}/arendergwt/downloadServlet?uuid=[UUID]&sourceId=[SRCID]&title=[TITLE]
```

### Methode de requête accéptée

- GET

### Paramètres

| Parameter       | Description                                                                  |
| --------------- |----------------------------------------------------------------------------- |
| uuid            | L'id du document.                                                            |
| sourceId        | L'id source du document. (Utilisé lors du téléchargement avec annotations)   |
| title           | Le titre du document téléchargé.                                             |


### Valeur de retour

Le contenu du document.


## Download with compare

### Description

Compare deux documents passés en paramètre puis télécharge le document représentant la différence des documents.

### URL

```cfg
{ARender_web-ui_host}/arendergwt/downloadServlet/mergedWithCompareResult?left=[LEFT]&right[RIGHT]
```

### Methode de requête accéptée

- GET

### Paramètres

| Parameter       | Description                           |
| --------------- |-------------------------------------- |
| left            | L'id du premier document à comparer.  |
| right           | L'id du second document à comparer.   |

### Valeur de retour

Le contenu du document représentant la différence des documents.

## XFDF Annotations

### Description

- GET

Récupère les annotations liées au document au format XFDF.


- POST

Enregistre un fichier d'annotations donné et l'associe au document.
Utilise le progiciel *ServletFileUpload* d'Apache pour transférer des documents.

### URL

```cfg
{ARender_web-ui_host}/arendergwt/servletXFDFAnnotations?uuid=[UUID]&type=[TYPE]
```

### Methode de requête accéptée

- GET
- POST

### Paramètres

- GET

| Parameter       | Description                                                                                                  |
| --------------- |------------------------------------------------------------------------------------------------------------- |
| uuid            | L'id du document.                                                                                            |
| type            | La valeur à 'fdf' permet d'avoir les annotations au format FDF. Les autres valeurs donneront le format XFDF  |

- POST

| Parameter       | Description        |
| --------------- |------------------- |
| uuid            | L'id du document.  |                                                                                                                                                                                                                     |

### Valeur de retour

Le contenu du fichier représentant les annotations.


## CSV Annotations

### Description

Récupère les annotations liées au document au format CSV.

### URL

```cfg
{ARender_web-ui_host}/arendergwt/servletCSVAnnotations?uuid=[UUID]
```

### Methode de requête accéptée

- GET

### Paramètres

| Parameter       | Description        |
| --------------- |------------------- |
| uuid            | L'id du document.  |                                                                                                                                                                                                                   |

### Valeur de retour

Le contenu du fichier représentant les annotations.

## Weather

### Description

Récupère et affiche les informations de tests d'accessibilité des adresses correspondant aux services de la rendition (dont le broker).
Adresse par défaut : http://localhost:8761/
Le code de retour -1 signifie un échec d'accessibilité de l'adresse.

Les différentes adresses dans le corps de la requête sont séparées par des virgules ','.

### URL

```cfg
{ARender_web-ui_host}/arendergwt/weather?format=[FORM]
```

### Methode de requête accéptée

- GET

### Paramètres

- GET

| Parameter       | Description                                |
| --------------- |------------------------------------------- |
| format          | Le type de format voulu (par défaut html)  |

### Valeur de retour

La liste des adresses testées.
-1.0 si adresse inaccessible.

## Health record

Récupère et affiche les informations d'accessibilités des micros services associés aux adresses cibles à tester.
Ces adresses cibles peuvent être définies par le précédent appel au weather via les méthodes PUT et POST.
Les informations d'accessibilité micros services et de leurs services associés sont affichées.
Des statuts d'informations sont représentés par ces valeurs possibles : UP, COMPLETE, NONE, PARTIAL


### Description

### URL

```cfg
{ARender_web-ui_host}/arendergwt/health/records
```

### Methode de requête accéptée

- GET

### Paramètres


| Parameter       | Description                                                                                                                                      |
| --------------- |------------------------------------------------------------------------------------------------------------------------------------------------- |
| check           | Deux valeurs possibles "self" et "rendition", le premier permet d'avoir un statut de retour à 200 indépendement du nombre de service effectif.   |


### Valeur de retour

Les informations d'accessibilité micros services et de leurs services associés sont affichées.
Le statut de retour est de 200 si au moins un service est disponible, 503 sinon.

## Download with annotations

Télécharge le document courant avec ses annotations.

### Description

### URL

```cfg
{ARender_web-ui_host}/arendergwt/downloadDocumentWithAnnotations
```

### Methode de requête accéptée

- GET

### Paramètres


| Parameter       | Description                                 |
| --------------- |-------------------------------------------- |
| operationName   | Nom de l'opération (par exemple 'generic')  |


### Valeur de retour

Le contenu du fichier ainsi que ses annotations.  

## Download base 64 encoded

Télécharge le document courant encodé en base 64.

### Description 

### URL

```cfg
{ARender_web-ui_host}/arendergwt/downloadBase64EncodedDocument
```

### Methode de requête accéptée

- GET

### Paramètres

Pas de paramètre.

### Valeur de retour

Le contenu du fichier encodé en base 64.

## Evict

### Description

Expulse le document du cache ARender.

### URL

```cfg
{ARender_web-ui_host}/arendergwt/evictDocument?uuid=[UUID]
```

### Methode de requête accéptée

- GET

### Paramètres

| Parameter       | Description        |
| --------------- |------------------- |
| uuid            | L'id du document.  |                                                                                                                                                                                                                    |


### Valeur de retour

Pas de retour.