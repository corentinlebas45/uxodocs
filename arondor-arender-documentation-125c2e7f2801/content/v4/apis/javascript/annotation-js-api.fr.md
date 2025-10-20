---
title: "Annotations"
draft: false
icon: mdi-comment-text-outline
keywords: ["configuration", "js", "javascript", "api"]
---

### Intercepter les évènements d'hyperlien

- Objet : getARenderJS().getAnnotationJSAPI()

Voici un exemple de code permettant d'enregistrer une méthode qui sera
appelée à chaque clic sur un hyperlien :

```javascript
var annotationjs;

function arenderjs_init(ajs)
{
  ajs.onAnnotationModuleReady(
    function(annotjs){
      annotationjs=annotjs;
      annotjs.registerFollowLinkHandler(followLink);
      console.log(annotationjs.getDestinationTypes());
      console.log(annotationjs.getActionTypes());
    }
  );
}

function followLink(docId, pageNumber, destination, action)
{
  console.log([
    "docId=" + docId,
    "pageNumber=" + pageNumber,
    "dest=" + destination, "action=" + action
  ].join());
  console.log(annotationjs.getPropertyFromDestination(destination,"PAGE_TARGET"));
  console.log(annotationjs.getPropertyFromAction(action,"GOTO"));
}
```

Dans cet exemple, vous pouvez également observer comment visualiser
toutes les propriétés existantes dans les hyperliens.

*annotationjs.getDestinationTypes()* et *annotationjs.getActionTypes()*
contiennent la liste des propriétés actuellement gérées par ARender et
pouvant être retournées.

*annotationjs.getPropertyFromDestination(destination,property)* et
*annotationjs.getPropertyFromAction(action,property)* permettent de
récupérer une propriété souhaitée.

Voici enfin la liste des propriétés disponibles pour les *destinations*
et *actions* .

Voici enfin la liste des propriétés disponibles pour les *destinations* :

| Type              | Description          |
| ----------------- | -------------------- |
| PAGE_TARGET       | Numéro de page cible |
| URI               | Adress URI cible     |

Voici enfin la liste des propriétés disponibles pour les *actions* qui indique le type de champs que vous trouverez dans la destination :

| Type                | Description                          |
| ------------------- | ------------------------------------ |
| GOTO                | La destination est un numéro de page |
| URI                 | La destination est un URI            |