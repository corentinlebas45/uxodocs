---
title: "Ajouter une annotation de type surlignage"
draft: false
weight: 5
type: docs
icon: mdi-file-code
keywords: ["highlight", "surlignage", "notification"]
---

L'API JavaScript permet de mettre en place des souscriptions pour recevoir des événements lors d'actions variées sur ARender (ajout / suppression de notification, rotation de page, ou encore clic sur un hyperlien). Ces informations sont accessibles <i class="ti-hand-point-right"></i> <ins>[dans la documentation]({{< relref "/development/apis/web-ui/javascript/annotation-js-api">}})</ins> <i class="ti-hand-point-left" ></i>


Il est également possible de créer des annotations de type surlignage directement depuis l'application hôte, sans le faire manuellement dans ARender, à l'aide de la fonction **addAnnotation** de l'API JavaScript en suivant <i class="ti-hand-point-right"></i> <ins>[ces indications]({{< relref "/development/apis/web-ui/javascript/annotation-js-api#créer-une-annotation-de-texte-surligné">}})</ins> <i class="ti-hand-point-left" ></i>.



Pour utiliser cette fonction depuis une autre application qu'ARender, il suffira de remplacer l'objet **window** de la documentation par l'objet adéquat suivant le framework utilisé :
[shortcode]
    [shortcode]
```javascript

const iframeWindow = iframeRef.current.contentWindow

/**
 * Ajoute une annotation au document en cours.
 * @param x La coordonnée x de l'annotation.
 * @param y La coordonnée y de l'annotation.
 * @param w La largeur de l'annotation.
 * @param h La hauteur de l'annotation.
 * @param page Le numéro de page de l'annotation.
 * @param color La couleur de l'annotation.
 * @param opacity L'opacité de l'annotation.
 * @param type Le type de l'annotation.
 */
var documentId = iframeWindow.getARenderJS().getCurrentDocumentId();
var type = "Highlight";
var x = 50;
var y = 150;
var w = 100;
var h = 50;
var page = 0;
var color = "#FF0000";
var opacity = 0.4;

iframeWindow.getARenderJS().getAnnotationJSAPI().addAnnotation(
    documentId, type, x, y, w, h, page, color, opacity);
```
    [shortcode]
    [shortcode]

```javascript

const iframeWindow = this.iframeRef.nativeElement.contentWindow;

/**
 * Ajoute une annotation au document en cours.
 * @param x La coordonnée x de l'annotation.
 * @param y La coordonnée y de l'annotation.
 * @param w La largeur de l'annotation.
 * @param h La hauteur de l'annotation.
 * @param page Le numéro de page de l'annotation.
 * @param color La couleur de l'annotation.
 * @param opacity L'opacité de l'annotation.
 * @param type Le type de l'annotation.
 */
var documentId = iframeWindow.getARenderJS().getCurrentDocumentId();
var type = "Highlight";
var x = 50;
var y = 150;
var w = 100;
var h = 50;
var page = 0;
var color = "#FF0000";
var opacity = 0.4;

iframeWindow.getARenderJS().getAnnotationJSAPI().addAnnotation(
    documentId, type, x, y, w, h, page, color, opacity);
```
    [shortcode]
    [shortcode]
```javascript
/**
 * Retourne l'objet ARenderJS depuis l'iframe.
 * Génère une erreur si l'iframe n'est pas accessible ou n'est pas chargé.
 */
function getARenderJS() {
  const iframeWindow = iframeRef.value?.contentWindow
    ? iframeRef.value.contentWindow
    : undefined

  if (iframeWindow) {
    return iframeWindow.getARenderJS()
  }
  throw new Error("The iframe is not accessible or not loaded.")
}

/**
 * Ajoute une annotation au document en cours.
 * @param x La coordonnée x de l'annotation.
 * @param y La coordonnée y de l'annotation.
 * @param w La largeur de l'annotation.
 * @param h La hauteur de l'annotation.
 * @param page Le numéro de page de l'annotation.
 * @param color La couleur de l'annotation.
 * @param opacity L'opacité de l'annotation.
 * @param type Le type de l'annotation.
 */

function addAnnotation(x, y, w, h, page, color, opacity, type = "Highlight") {
  const documentId = getARenderJS().getCurrentDocumentId()
  getARenderJS()
    .getAnnotationJSAPI()
    .addAnnotation(documentId, type, x, y, w, h, page, color, opacity)
}

/**
 * Expose la fonction `addAnnotation` au composant parent.
 */
defineExpose({
  addAnnotation
})
```
    [shortcode]
    [shortcode]
```javascript
/**
 * Retourne l'objet ARenderJS depuis l'iframe.
 * Génère une erreur si l'iframe n'est pas accessible ou n'est pas chargé.
 */
function getARenderJS() {
  const iframeWindow = iframeRef?.contentWindow
    ? iframeRef.contentWindow
    : undefined

  if (iframeWindow) {
    return iframeWindow.getARenderJS()
  }
  throw new Error("The iframe is not accessible or not loaded.")
}

/**
 * Ajoute une annotation au document en cours.
 * @param x La coordonnée x de l'annotation.
 * @param y La coordonnée y de l'annotation.
 * @param w La largeur de l'annotation.
 * @param h La hauteur de l'annotation.
 * @param page Le numéro de page de l'annotation.
 * @param color La couleur de l'annotation.
 * @param opacity L'opacité de l'annotation.
 * @param type Le type de l'annotation.
 */
function addAnnotation(x, y, w, h, page, color, opacity, type = "Highlight") {
  const documentId = getARenderJS().getCurrentDocumentId()
  getARenderJS()
    .getAnnotationJSAPI()
    .addAnnotation(documentId, type, x, y, w, h, page, color, opacity)
}

export function addAnnotation(
  x,
  y,
  w,
  h,
  page,
  color,
  opacity,
  type = "Highlight"
) {
  let documentId = getARenderJS().getCurrentDocumentId()
  getARenderJS()
    .getAnnotationJSAPI()
    .addAnnotation(documentId, type, x, y, w, h, page, color, opacity)
}

```
    [shortcode]
    {{< tab 4 md>}}
```javascript
/**
 * Ajoute une annotation au document en cours.
 * @param x La coordonnée x de l'annotation.
 * @param y La coordonnée y de l'annotation.
 * @param w La largeur de l'annotation.
 * @param h La hauteur de l'annotation.
 * @param page Le numéro de page de l'annotation.
 * @param color La couleur de l'annotation.
 * @param opacity L'opacité de l'annotation.
 * @param type Le type de l'annotation.
 */
var documentId = iframeWindow.getARenderJS().getCurrentDocumentId();
var type = "Highlight";
var x = 50;
var y = 150;
var w = 100;
var h = 50;
var page = 0;
var color = "#FF0000";
var opacity = 0.4;

const iframe = document.getElementById('arender-iframe');
if (iframe && iframe.contentWindow) {
    getARenderJS().getAnnotationJSAPI().addAnnotation(
    documentId, type, x, y, w, h, page, color, opacity);
} else {
    console.error("L'iframe n'est pas accessible ou n'est pas chargée.");
}  

```

    [shortcode]
[shortcode]
