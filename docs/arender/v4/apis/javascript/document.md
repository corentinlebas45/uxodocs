---
title: "Ouverture de document"
draft: false
weight: 2
icon: mdi-folder-open-outline
keywords: ["configuration", "js", "javascript"]
---

## Ouvrir des documents

- Objet : getARenderJS()

    | Fonction                             | Description                                                                                                                                                                                        | Arguments                                                                                                                                                                 |
    | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | loadDocument(url , callback)         | {{< inlineList "***Note :** Cette opération est uniquement coté serveur, Asynchrone côté client.*">}}Charge un document en fournissant l'URL. La fonction renvoie l'Id ARender.[shortcode] | [shortcode][shortcode]              |
    | openDocument(id)                     | Ouvre un document.                                                                                                                                                                                 | **id :** l'id d'ARender                                                                                                                                                   | 
    | askChangePage(type , index)          | Change la page.                                                                                                                                                                                    | [shortcode][shortcode] |
    | enablePDFDocumentHyperlinks(boolean) | Active/désactive le chargement des hyperliens natifs du document source.                                                                                                                          | **boolean :** charge les hyperliens si vrai, ne charge pas(décharge) sinon.                                                                                               |
    | disallowClickOnHyperlinks(boolean)   | Autorise ou non l'ouverture des liens dans ARender pour le document courant                                                                                                                        | **boolean :** bloque la gestion des clique si vrai, l'autorise sinon.                                                                                                   |

[shortcode]

```js
// Loads the PDF reference document
getARenderJS().loadDocument(
    "loadingQuery?url=http://www.arender.fr/pdf/pdf/PDFReference15_v5.pdf",
    function(id) { getARenderJS().openDocument(id); }
);

// Move to page 24 (note that page index is starting at 0. So page 1 has index 0)
getARenderJS().askChangePage('Index', 23);

// Move to last page
getARenderJS().askChangePage('Absolute', 1);
```

[shortcode]

## Ouverture de document multiple

ARender fournit la possibilité d'ouvrir plusieurs documents en chargeant une liste de documents qui sera fournit via du JSON afin de définir l'arborescence. Tous les détails techniques se trouvent [ici]({{< relref "/v4/cookbook/composite-accessors.fr.md">}})