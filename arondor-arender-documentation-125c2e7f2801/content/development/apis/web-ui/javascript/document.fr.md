---
title: "Ouverture de document"
draft: false
weight: 2
icon: mdi-folder-open-outline
keywords: ["configuration", "js", "javascript"]
---

## Ouvrir des documents

- Objet : getARenderJS()

<table>
  <thead>
    <tr>
      <th>Fonction</th>
      <th>Description</th>
      <th>Arguments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>loadDocument(url, callback)</td>
      <td>
        Charge un document en fournissant l'URL. La fonction renvoie l'Id ARender.
        <p><em><strong>Note :</strong> Cette opération est uniquement côté serveur, Asynchrone côté client.</em></p>
      </td>
      <td>
        <p><strong>url :</strong> l'URL à ouvrir;<br>
        <strong>callback :</strong> Callback pour la fonction à appeler lorsque l'Id est fourni par le serveur.</p>
      </td>
    </tr>
    <tr>
      <td>openDocument(id, resetUI)</td>
      <td>
        Ouvre un document avec l'<string>id</strong>.
        Si la valeur de <strong>resetUI</strong> est 'true' ou n'est pas fournie, alors l'UI sera réinitialisée à l'état initial, sinon l'UI ne sera pas réinitialisée
      </td>
      <td>
        <strong>id:</strong> ARender id<br>
        <strong>resetUI:</strong> Réinitialise ou pas l'UI
    </td>
    </tr>
    <tr>
      <td>askChangePage(type, index)</td>
      <td>Change la page.</td>
      <td>
        <p><strong>type :</strong> 'Relative', 'Index' ou 'Absolute';<br>
        <strong>index :</strong> -1 ou 1 pour 'Relative' ou 'Absolute'. Sinon, mettre le numéro de la page.</p>
      </td>
    </tr>
    <tr>
      <td>enablePDFDocumentHyperlinks(boolean)</td>
      <td>Active/désactive le chargement des hyperliens natifs du document source.</td>
      <td><strong>boolean :</strong> Charge les hyperliens si vrai, les décharge sinon.</td>
    </tr>
    <tr>
      <td>disallowClickOnHyperlinks(boolean)</td>
      <td>Autorise ou non l'ouverture des liens dans ARender pour le document courant.</td>
      <td><strong>boolean :</strong> Bloque la gestion des clics si vrai, l'autorise sinon.</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Fonction</th>
      <th>Description</th>
      <th>Arguments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>loadDocument(url, callback)</td>
      <td>
        Charge un document en fournissant l'URL. La fonction renvoie l'Id ARender.
        <p><em><strong>Note :</strong> Cette opération est uniquement côté serveur, Asynchrone côté client.</em></p>
      </td>
      <td>
        <p><strong>url :</strong> l'URL à ouvrir;<br>
        <strong>callback :</strong> Callback pour la fonction à appeler lorsque l'Id est fourni par le serveur.</p>
      </td>
    </tr>
    <tr>
      <td>openDocument(id)</td>
      <td>Ouvre un document.</td>
      <td><strong>id :</strong> l'id d'ARender</td>
    </tr>
    <tr>
      <td>askChangePage(type, index)</td>
      <td>Change la page.</td>
      <td>
        <p><strong>type :</strong> 'Relative', 'Index' ou 'Absolute';<br>
        <strong>index :</strong> -1 ou 1 pour 'Relative' ou 'Absolute'. Sinon, mettre le numéro de la page.</p>
      </td>
    </tr>
    <tr>
      <td>enablePDFDocumentHyperlinks(boolean)</td>
      <td>Active/désactive le chargement des hyperliens natifs du document source.</td>
      <td><strong>boolean :</strong> Charge les hyperliens si vrai, les décharge sinon.</td>
    </tr>
    <tr>
      <td>disallowClickOnHyperlinks(boolean)</td>
      <td>Autorise ou non l'ouverture des liens dans ARender pour le document courant.</td>
      <td><strong>boolean :</strong> Bloque la gestion des clics si vrai, l'autorise sinon.</td>
    </tr>
  </tbody>
</table>



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


Dans l'exemple ci-dessus, **loadDocument** retourne un id (sous forme de chaîne de caractères débutant par "b64_") qui permettra de manipuler le document dans la vue d'ARender

**openDocument** est ensuite appelée avec l'id du document chargé en paramètre, affichant ainsi le document en question.

## Ouverture de document multiple

ARender fournit la possibilité d'ouvrir plusieurs documents en chargeant une liste de documents qui sera fournit via du JSON afin de définir l'arborescence. Tous les détails techniques se trouvent [ici]({{< relref "/content/learn/how-to/composite-accessors.fr.md">}})