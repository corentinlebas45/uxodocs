---
title: "Télécharger/charger un document sur le serveur"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutoriel", "télécharger", "serveur", "charger"]
---

## Télécharger

Une servlet est déployée permettant de télécharger un document sur le serveur. 

### Requête 

Cette fonctionnalité est accessible via la servlet : **uploadServlet**

La requête est utilisable en GET


#### Exemple d'utilisation

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/uploadServlet?uuid=docUUID'
```


### Réponse de la servlet

Un nouveau UUID est créé à partir de l'id du document envoyé en paramètre, pour être interpréter par ARender et télécharger sur le serveur. 
Ce nouvel id est affiché.


## Charger 

Une servlet est déployée permettant de charger un document sur le serveur. 

### Requête 

Cette fonctionnalité est accessible via la servlet : **uploadServlet**

La requête est utilisable en POST


#### Exemple d'utilisation

``` bash
curl -X POST -H "Content-Type: multipart/form-data" -F "file=@yourFile.pdf" "https://<arender_host>/ARender/arendergwt/uploadServlet"
```
* yourFile : le titre de votre document

### Réponse de la servlet

Un nouveau UUID est créé à partir du document envoyé dans la requête, pour être charger sur le serveur. 
Ce nouvel id est affiché.