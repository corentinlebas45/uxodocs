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
    | getSubmittedAlterDocumentContentDescription(obj)  | Récupére la description du contenu du document modifié                                | **obj:** l'objet SubmitAlterDocumentContentEvent source                                                                                     |
    | getDocumentMetadata(desc,index)                   | Extracte l'object DocumentMetadata de l'objet source AlterContentDescription          | {{< inlineList "**desc:** AlterContentDescription;**index:** index du document dont le documentMetadata sera extrait">}}{{< /inlineList>}}  |
    | getResultDocumentId(obj)                          | Récupére le documentId qui résulte du découpage de document                           | **obj:** l'événement qui a été envoyé lorsque l'opération altercontent a été effectuée                                                      |


- Object: getARenderJS().getDocumentMetadata()

    | Fonction                                          | Description                                                | Arguments                                                                                                                                                                        |
    | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | addDocumentMetadata(metadata, key, value)         | Ajoute une metadata à un objet documentMetadata            | {{< inlineList "**metadata:** Metadata à modifier;**key:** Texte représentant la clé de la metadata;**value:** Texte représentant la valeur de la metadata">}}{{< /inlineList>}} |

[shortcode]

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

[shortcode]

### Disposition du document builder personnalisée 

- Object: getARenderJS().getDocumentBuilder()

  | Function                                          | Description                                                                                        | Arguments                                                                                                                                                        |
  | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | registerDocumentBuilderOpeningEvent(callback)     | Enregistre une fonction callback à appeler en cas d'ouverture d'un document découpé                | **callback:** La fonction callback à appeler                                                                                                                     |
  | registerDocumentBuilderSaveCustomEvent(callback)  | Enregistre une fonction callback à appeler en cas de sauvegarde d'un document découpé personnalisé | **callback:** La fonction callback à appeler                                                                                                                     |
  | createCustomDocument(builderLayout, optionsList)  | Crée une disposition du document builder personnalisée                                             | **builderLayout:** le format json de la disposition du document builder personnalisé,  **optionsList:** le format json des types options placés dans la datalist |

[shortcode]

``` javascript
function arenderjs_init(arenderjs_) {
    /**
     * Build the custom document builder in ARender
     */
    arenderjs_.getDocumentBuilder().registerDocumentBuilderOpeningEvent(function () {
        let jsonDocumentBuilderLayout = getCustomLayout();                                                      // Retrieve the json format of the custom document builder layout
        let jsonCustomOptionsList = getOptions();                                                               // Retrieve the json format of the custom options set in the data list
        arenderjs_.getDocumentBuilder().createCustomDocument(jsonDocumentBuilderLayout, jsonCustomOptionsList); // Call the createCustomDocument function to build the custom document builder in ARender
    });
    /**
     * Retrieve and log the json format of the custom document builder created in ARender
     */
    arenderjs_.getDocumentBuilder().registerDocumentBuilderSaveCustomEvent(function (customJsonDocumentBuilderTypeInfo) {
        console.info("customJsonDocumentBuilderTypeInfo :\n" + customJsonDocumentBuilderTypeInfo);
    });
}
```

[shortcode]