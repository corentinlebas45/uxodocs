---
title: "Évènements"
draft: false
weight: 3
icon: mdi-calendar-check
keywords: ["configuration", "js", "javascript"]
---

## S'abonner aux erreurs de chargement des documents

- Objet : getARenderJS()

    | Fonction                                  | Description                                                                             | Arguments                                                      |
    | ----------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
    | registerNotifyLoadingErrorEvent(callback) | Enregistre une fonction callback à appeler en cas d'erreur de chargement des documents  | **callback :** la fonction callback à appeler en cas d'erreur  |


```js
// Subscribe a function to the errors
getARenderJS().registerNotifyLoadingErrorEvent(function(documentId,message) {
  console.log("error: " + message);
});

// Loads the PDF reference document
// If an error occurs I am notified on the function defined before!
getARenderJS().loadDocument(
  "loadingQuery?url=http://www.arender.fr/pdf/pdf/PDFReference15_v5.pdf",
  function(id) { getARenderJS().openDocument(id); }
);
```


## S'abonner à la fin du chargement des modules asynchrones ARender

- Objet : getARenderJS()

    | Fonction                                      | Description                                                                               | Arguments                                                             |
    | --------------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | registerAllAsyncModulesStartedEvent(callback) | Enregistre une fonction callback à appeler en fin de chargement des modules asynchrones.  | **callback :** la fonction callback à appeler à la fin du chargement  |


```js
// Subscribe a function to the loading. When asynchronous modules are loaded I am notified
getARenderJS().registerAllAsyncModulesStartedEvent(function() {
  console.log("modules are loaded");
});
```


## Préparer un événement de lancement de plugin ARender

- Objet : getARenderJS()

    | Fonction                                 | Description                                                                                  |
    | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
    | preparePluginEvent(key,value,pluginName) | Insère un couple (Key,Value) à la future URL du plugin ouvert dans ARender de nom pluginName |
    | clearPluginEvent(pluginName)             | Nettoie toute valeur potentiellement stockée (Key,Value) au plugin nommé pluginName          |
    | openPlugin(pluginName,openInMultiView)   | Ouvre le plugin pluginName dans ARender, en multiView ou non avec le booléen openInMultiView |

Ces fonctions permettent de préparer un événement d'ouverture de plugin
afin d'enrichir son lancement de manière contextualisée depuis ARender.

``` javascript
function arenderjs_init(ajs)
{
  // ceci prépare une URL du type http://plumeURL/?To=toto@tutu.com
  ajs.preparePluginEvent("To","toto@tutu.com","plume");
  // si on ne veut effacer ces valeurs (action sur un bouton clear par exemple)
  ajs.clearPluginEvent("plume");
}
```