+++
date = "2005-03-28T13:22:01+02:00"
title = "Abonnement"
description = "S'abonner à l'exécution d'une recherche"
+++

L'abonnement à l'exécution d'une requête de recherche se fait en fonction du template de recherche. 
Les informations disponibles lors de l'abonnement sont le nom du template, la requête, la réponse et le callback de réponse. 
Avant d'exécuter le callback, il va être possible de manipuler la réponse. 

Dans l'exemple suivant, une popup de création de composant est affichée si la recherche ne renvoie pas de résultats :

```javascript
JSAPI.get().getComponentSearchAPI().registerForExecution("DefaultSearch",function(request, response, callback){
    callback.onProcessed(response);
    if(response.getFound() == 0){
        JSAPI.get().getPopupAPI().buildComponentCreationFromSearchRequest("DOCUMENT", request, null).show();
    }
});
```