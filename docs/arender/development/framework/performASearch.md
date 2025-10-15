---
title: "Lancer une recherche"
draft: false
weight: 4
type: docs
icon: mdi-file-code
keywords: [ "search", "advancedSearch", "getSearchJSAPI"]
---

Les fonctions de l'API JavaScript <i class="ti-hand-point-right"></i> <ins>[documentées ici]({{< relref "/development/apis/web-ui/javascript/search-js-api">}})</ins> <i class="ti-hand-point-left" ></i> permettent de lancer une recherche textuelle sur un document ouvert, pour surligner et se positionner sur des éléments de texte précis sur la visionneuse ARender.



Pour les utiliser depuis une autre application qu'ARender, il suffira de passer l'appel depuis l'objet window de l'iframe. Le code pour accéder à cet objet sera légèrement différent suivant le framework utilisé. Vous trouverez ci-dessous un exemple de recherche simple du terme 'Arender'. Pour naviguer d'un résultat au suivant, vous pouvez rappeler la même fonction. Pour plus d'informations sur la recherche simple et l'utilisation de la recherche avancée, voir la documentation mentionnée ci-dessus.

[shortcode]
    [shortcode]
```javascript
const iframeWindow = iframeRef.current.contentWindow
iframeWindow.getARenderJS().getSearchJSAPI().askSearchTextNext("arender")
```
    [shortcode]
    [shortcode]
```javascript
const iframeWindow = this.iframeRef.nativeElement.contentWindow;
iframeWindow.getARenderJS().getSearchJSAPI().askSearchTextNext("arender")
```
    [shortcode]
    [shortcode]
```javascript
/**
 * Renvoie l'objet ARenderJS depuis l'iframe.
 * Lève une erreur si l'iframe n'est pas accessible ou n'est pas chargé.
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

function askSearchTextNext(text) {
  getARenderJS()
    .getSearchJSAPI()
    .askSearchTextNext(text)
}
/**
 * Expose la fonction `askSearchTextNext` au composant parent.
 */
defineExpose({
  askSearchTextNext
})
```
    [shortcode]
    [shortcode]
```javascript
/**
 * Renvoie l'objet ARenderJS depuis l'iframe.
 * Lève une erreur si l'iframe n'est pas accessible ou n'est pas chargé.
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
 * Demande à ARender de rechercher la prochaine occurrence du texte donné.
 * @param text Le texte à rechercher.
 */
export function askSearchTextNext(text) {
  getARenderJS()
    .getSearchJSAPI()
    .askSearchTextNext(text)
}

```
    [shortcode]
    [shortcode]
```javascript
function search() {
    const iframe = document.getElementById('arender-iframe');
    if (iframe && iframe.contentWindow) {
        const iframeWindow = iframe.contentWindow;
        iframeWindow.getARenderJS().getSearchJSAPI().askSearchTextNext("arender");
    } else {
        console.error('Iframe or contentWindow is not accessible.');
    }
}
```
    [shortcode]
[shortcode]
