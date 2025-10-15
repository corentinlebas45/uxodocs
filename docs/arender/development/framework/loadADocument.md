---
title: "Charger un document"
draft: false
weight: 3
type: docs
icon: mdi-file-code
keywords: [ "load", "ouvrir", "charger", "ouvrir", "document", "loadDocument", "openDocument"]
---


L'API JavaScript  permet d'interagir aisément avec ARender à l'aide de différentes commandes <i class="ti-hand-point-right"></i>[ listées ici ]({{< relref "/development/apis/web-ui/javascript">}}) <i class="ti-hand-point-left" ></i>

## Charger un document

Les fonctions **loadDocument** et **openDocument** de l'API, <i class="ti-hand-point-right"></i><ins>[ décrites ici ]({{< relref "/development/apis/web-ui/javascript/document">}})</ins><i class="ti-hand-point-left" ></i> permettent de charger et ouvrir un document sur le serveur d'ARender.

<p><i class="ti-alert"></i> Attention, l'ouverture de documents étant sécurisée, il n'est possible d'ouvrir que les documents de votre espace documentaire.</p>

### Exemple d'implémentation depuis l'iframe

Les requêtes à l'API JS se font sur l'objet **window** de l'iframe, comme montré ci-dessous.

[shortcode]
    [shortcode]
```javascript
        const loadAndOpenDocument = () => {
          const iframeWindow = iframeRef.current?.contentWindow;

          if (iframeWindow) {
            iframeWindow.getARenderJS().loadDocument(
              "loadingQuery?url=url/du/document.zip",
              (id) => {
                console.log(id);
                iframeWindow.getARenderJS().openDocument(id);
              }
            );
          } else {
            console.error("iframe n'est pas accessible ou n'est pas chargée.");
          }
        };
```
    [shortcode]
    [shortcode]
```javascript
        loadAndOpenDocument(): void {
        const iframeWindow = this.iframeRef.nativeElement.contentWindow;

        if (iframeWindow) {
          iframeWindow.getARenderJS().loadDocument(
            "loadingQuery?url=url/du/document.zip",
            (id: string) => {
              console.log(id);
              iframeWindow.getARenderJS().openDocument(id);
            }
          );
        } else {
          console.error("L'iframe n'est pas accessible ou n'est pas chargée.");
        }
      }
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

/**
 * Charge et ouvre un document dans ARender.
 * @param url L'URL du document à charger.
 */
function loadAndOpenDocument(url) {
  getARenderJS().loadDocument("loadingQuery?url=" + url, id => {
    getARenderJS().openDocument(id)
  })
}

/**
 * Expose la fonction `loadAndOpenDocument` au composant parent.
 */
defineExpose({
  loadAndOpenDocument
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
 * Charge et ouvre un document dans ARender.
 * @param url L'URL du document à charger.
 */
export function loadAndOpenDocument(url) {
  getARenderJS().loadDocument("loadingQuery?url=" + url, id => {
    getARenderJS().openDocument(id)
  })
}
```
    [shortcode]
    [shortcode]
    
<p><i class="ti-alert"></i>
Attention si vous tentez d'<ins>intégrer ARender dans un répertoire local</ins> : pour interagir avec un fichier HTML local, il faut d'abord <b>le servir sur le port localhost de votre choix</b>.</p>

<p>Vous pouvez le faire très facilement de plusieurs façons, avec Python, Node.js, PHP ou autre. Voici un exemple avec Python 3.x :</p>
<ul>
<li>Ouvrir une invite de commandes au niveau du répertoire de l'application hôte</li>
<li>Démarrer le serveur avec <code>http-server -p 8000</code>. (Remplacer 8000 par le port de votre choix)</li>
<li>Accéder au fichier HTML depuis votre navigateur avec l'URL <code>http://localhost:8000/index.html</code></li>
</ul>

<p> Pour charger et ouvrir un document dans ARender, vous pouvez créer la fonction suivante dans le fichier JavaScript de l'application hôte :
{{<tag type="code" title="index.js">}}
```javascript
    function loadAndOpen() {
        const iframe = document.getElementById('arender-iframe');
        if (iframe && iframe.contentWindow) {
            iframeWindow.getARenderJS().loadDocument(
              "loadingQuery?url=", // passer ici l'id ou l'url du document à charger, après le signe égal
              (id) => {
                console.log(id);
                iframeWindow.getARenderJS().openDocument(id);
              }
            );
          } else {
            console.error("L'iframe n'est pas accessible ou n'est pas chargée.");
          }        
    }
```    
{{</tag>}}


    [shortcode]
[shortcode]
