---
title: "Document builder"
draft: false
icon: mdi-scissors-cutting
keywords: ["configuration", "js", "javascript", "api"]
---

### Interagir avec le documentBuilder

- Object: getARenderJS().getDocumentBuilder()

    | Fonction | Description                            |
    | -------- | -------------------------------------- |
    | close()  | Ferme le découpeur de documents        |
    | open()   | Ouvre le découpeur de documents        |
    | reset()  | Remet à zéro le découpeur de documents |

### S'abonner à la sauvegarde de document découpé

- Object: getARenderJS().getDocumentBuilder()

    | Fonction                                          | Description                                                                           | Arguments                                                                                                                                   |
    | ------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
    | registerNotifyAlterDocumentContentEvent(callback) | Enregistre une fonction callback à appeler en cas de sauvegarde d'un document découpé | **callback:** La fonction callback à appeler                                                                                                |
    | registerSubmitAlterDocumentContentEvent(callback) | Enregistre une fonction callback à appeler en cas de demande de creation de document  | **callback:** La fonction callback à appeler                                                                                                |
    | getSubmittedAlterDocumentContentDescription(obj)  | Récupère la description du contenu du document modifié                                | **obj:** l'objet SubmitAlterDocumentContentEvent source                                                                                     |
    | getDocumentMetadata(desc,index)                   | Extrait l'object DocumentMetadata de l'objet source AlterContentDescription           | {{< inlineList "**desc:** AlterContentDescription;**index:** index du document dont le documentMetadata sera extrait">}}{{< /inlineList>}}  |
    | getResultDocumentId(obj)                          | Récupère le documentId qui résulte du découpage de document                           | **obj:** l'événement qui a été envoyé lorsque l'opération altercontent a été effectuée                                                      |


- Object: getARenderJS().getDocumentMetadata()

    | Fonction                                          | Description                                                | Arguments                                                                                                                                                                        |
    | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | addDocumentMetadata(metadata, key, value)         | Ajoute une metadata à un objet documentMetadata            | {{< inlineList "**metadata:** Metadata à modifier;**key:** Texte représentant la clé de la metadata;**value:** Texte représentant la valeur de la metadata">}}{{< /inlineList>}} |


``` javascript
function arenderjs_init(arenderjs_)
{
  arenderjs_.getDocumentBuilder()
                .registerSubmitAlterDocumentContentEvent(function(obj){
                    armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj);
                });
  arenderjs_.getDocumentBuilder()
                .registerNotifyAlterDocumentContentEvent(function(obj){
                    armt_onNotifyAlterDocumentContentEvent(arenderjs_,obj);
                });
}

function armt_onSubmitAlterDocumentContentEvent(arenderjs_,obj)
{
    var desc = arenderjs_.getDocumentBuilder()
                            .getSubmittedAlterDocumentContentDescription(obj);
    var meta = arenderjs_.getDocumentBuilder()
                            .getDocumentMetadata(desc, 0);
    arenderjs_.getDocumentMetadata().addDocumentMetadata(meta, "name", "value");
}

function armt_onNotifyAlterDocumentContentEvent(arenderjs_,obj)
{
    console.log("Notify: " + obj);
    var docId = arenderjs_.getDocumentBuilder().getResultDocumentId(obj);
    console.log("Notify: " + docId);
    console.log("Notify: docId = " + docId);
}
```

