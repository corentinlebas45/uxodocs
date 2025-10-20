---
title: "Annotations"
draft: false
icon: mdi-comment-text-outline
keywords: ["configuration", "js", "javascript", "api"]
---

### S'abonner à l'évènement d'ajout d'annotation

- Objet: getARenderJS().getAnnotationJSAPI()

    | Fonction                                     | Description                                                                    |
    | -------------------------------------------- | ------------------------------------------------------------------------------ |
    | registerNotifyAnnotationAddedEvent(callback) | Enregistre une fonction callback qui sera appelée à l'ajout d'une annotation.  |


```js
 /*
 * S'abonner à l'évènement d'ajout d'une annotation
 *
 * @param {string} documentId - ID du document
 * @param {string} annotation - Le json de l'annotation ajoutée au document
 * @param {boolean} isFromDocumentParsing - True si l'annotation ajoutée provient de l'extraction des informations du document
 */
getARenderJS().getAnnotationJSAPI().registerNotifyAnnotationAddedEvent(function(documentId, annotation, isFromDocumentParsing) {
  console.log("Annotation added. DocumentId " + documentId + " annotation: " + annotation + " isFromDocumentParsing: " + isFromDocumentParsing);
});
```


### S'abonner à l'évènement de suppression d'annotation

- Objet: getARenderJS().getAnnotationJSAPI()

    | Fonction                                       | Description                                                                           |
    | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
    | registerNotifyAnnotationDeletedEvent(callback) | Enregistre une fonction callback qui sera appelée à la suppression d'une annotation.  |


```js
 /*
 * S'abonner à l'évènement de suppression d'une annotation
 *
 * @param {string} documentId - ID du document
 * @param {string} annotation - Le json de l'annotation supprimée du document
 */
getARenderJS().getAnnotationJSAPI().registerNotifyAnnotationDeletedEvent(function(documentId, annotation) {
  console.log("Annotation deleted. DocumentId " + documentId + " annotation: " + annotation);
});
```


### S'abonner à l'évènement de mise à jour d'annotation

- Objet: getARenderJS().getAnnotationJSAPI()

    | Fonction                                       | Description                                                                           |
    | ---------------------------------------------- | ------------------------------------------------------------------------------------- |
    | registerNotifyAnnotationUpdatedEvent(callback) | Enregistre une fonction callback qui sera appelée à la mise à jour d'une annotation.  |


```js
 /*
 * S'abonner à l'évènement de mise à jour d'une annotation
 *
 * @param {string} documentId - ID du document
 * @param {string} annotation - Annotation mis à jour du document
 */
getARenderJS().getAnnotationJSAPI().registerNotifyAnnotationUpdatedEvent(function(documentId, annotation) {
  console.log("Annotation updated. DocumentId " + documentId + " annotation: " + annotation);
});
```


### S'abonner à l'évènement de rotation de page

- Objet: getARenderJS().getRotateJSAPI()

    | Fonction                                      | Description                                                               |
    | --------------------------------------------- | ------------------------------------------------------------------------- |
    | registerNotifyPageRotatedEvent(callback)      | Enregistre une fonction callback qui sera appelé à la rotation d'une page |


```js
 /*
 * S'abonner à l'évènement de rotation d'une page
 *
 * @param {string} documentId - ID du document
 * @param {integer} pageNumber - Numéro de page pivotée
 * @param {integer} rotation - Rotation de la page en degré
 */
getARenderJS().getRotateJSAPI().registerNotifyPageRotatedEvent(function(documentId, pageNumber, rotation) {
  console.log("Page pivoté. DocumentId: " + documentId + " pageNumber: " + pageNumber + " rotation: " + rotation);
});
```


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
| URI               | Adresse URI cible    |

Voici enfin la liste des propriétés disponibles pour les *actions* qui indique le type de champs que vous trouverez dans la destination :

| Type                | Description                          |
| ------------------- | ------------------------------------ |
| GOTO                | La destination est un numéro de page |
| URI                 | La destination est un URI            |

### Créer une annotation de texte surligné

- Objet: getARenderJS().getAnnotationJSAPI()

 | Fonction                                                  | Description                                                           |
 | --------------------------------------------------------- | --------------------------------------------------------------------- |
 | addAnnotation(id, type, x, y, w, h, page, color, opacity) | Créer une annotation à la position souhaitée pour le documentId donné |


```js
 /*
 * Ajout d'une annotation de type Highlight 
 *
 * @param {string} documentId - L'id du document.
 * @param {string} type - Le type de l'annotation. Seules les annotations de type "Highlight" (= surlignage) sont supportées
 * @param {integer} x - La coordonnée x de l'annotation. Correspond au nombre de pixels à gauche de l'annotation.
 * @param {integer} y - La coordonnée y de l'annotation. Correspond au nombre de pixels au-dessus de l'annotation.
 * @param {integer} w - la largeur de l'annotation en pixels
 * @param {integer} h - la hauteur de l'annotation en pixels
 * @param {page} page - le numéro de page de l'annotation. Attention, le numéro de page commence à partir de 0.
 * @param {string} color - La couleur de l'annotation.
 * @param {float} Opacité de l'annotation (1 = Opacité totale, 0 = transparence totale).
 */

var documentId = getARenderJS().getCurrentDocumentId(); // Récupère l'id du document en cours de visualisation
var type = "Highlight";
var x = 50;
var y = 150;
var w = 100;
var h = 50;
var page = 0;
var color = "#FF0000";
var opacity = 0.4;

getARenderJS().getAnnotationJSAPI().addAnnotation(
    documentId, type, x, y, w, h, page, color, opacity);

```



### Les fonctions du mode DocLink

- Objet: getARenderJS().getAnnotationJSAPI()
  
  | Fonction                                    | Description                                                                                                           |
  | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
  | registerDocLinkTextSelectionEvent(callback) | Enregistrer une fonction callback qui sera appelée lorsqu'un texte est sélectionné en mode docLink                    |
  | registerDocLinkStateChange(callback)        | Enregistrer une fonction callback qui sera appelée lors d'un changement d'état en mode docLink                        |
  | registerCloseMultiView(callback)            | Enregistrer une fonction callback qui sera appelée à la fermeture de la vue multiple                                  |
  | getTargetDocLinkDocumentId()                | Obtenir l'ID du document cible en mode docLink                                                                        |
  | getAvailableDocLinkDocumentId()             | Obtenir l'ID du document disponible en mode docLink pour savoir quel document n'est pas désactivé                     |
  | createDocLink(pageNumber)                   | Créez le docLink sur la page souhaitée. La valeur de *pageNumber* commence à 0, ce qui correspond à la première page. |


 ```js
 /*
 * Register to a selected text in docLink mode
 *
 */
getARenderJS().getAnnotationJSAPI().registerDocLinkTextSelectionEvent(function() {
  console.log("Some text is selected");
});

 /*
 * Register to a state change in docLink mode
 *
 */
getARenderJS().getAnnotationJSAPI().registerDocLinkStateChange(function() {
  console.log("Action in docLink has occurred");
});

 /*
 * Register to closing multi-view event
 *
 */
getARenderJS().getAnnotationJSAPI().registerCloseMultiView(function() {
  console.log("Multi-view has been closed");
});

 /*
 * Get the target document Id in docLink mode
 *
 */
getARenderJS().getAnnotationJSAPI().getTargetDocLinkDocumentId();

 /*
 * Get the available document in docLink mode to know which document is not disabled
 *
 */
getARenderJS().getAnnotationJSAPI().getAvailableDocLinkDocumentId();

 /*
 * Create a docLink at the 4th page
 *
 * @param {integer} pageNumber -Tthe page to create the target docLink 
 */
var pageNumber = 3; // This value is corresponding to the 4th page
getARenderJS().getAnnotationJSAPI().createDocLink(pageNumber);

```
