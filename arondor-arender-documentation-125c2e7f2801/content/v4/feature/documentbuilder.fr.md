---
title: Composition de documents 
description:
icon: mdi-scissors-cutting
keyword: ["foinctionnalité", "composition", "document"]
---

## Accès à la composition de documents

Pour activer le mode de composition de document, cliquer sur l’icône «
Ciseau »


Le mode « Composition de document» est activé


Vous pouvez afficher ou masquer les documents sources en cliquant sur le
bouton séparateur à gauche du volet


## Créer un nouveau document

Pour créer un nouveau document, cliquer sur le bouton « + »


Ou clic droit dans le volet de navigation


Pour changer le nom du document, cliquer sur le titre et saisir un
nouveau titre


Pour ajouter des pages à votre nouveau document provenant de vos autres
documents. Si vous souhaitez conserver vos documents, utiliser le
glisser/déposer à partir de vos fichiers sources disponibles dans le
volet gauche.


Si vous ne souhaitez pas conserver vos documents, glisser/déposer
directement les vignettes de la composition de document. La page
sélectionné n’apparaît plus dans le premier document.


Vous pouvez glisser/déposer plusieurs pages en même temps :

- Maintenir la touche « Control » pour sélectionner unitairement les
  pages
- Maintenir la touche « Majuscule » pour sélectionner une plage de
  pages


Pour sauvegarder votre nouveau document, cliquer sur l’icône dédiée


Le document est téléchargé.

## Supprimer un document à partir de la composition de document

Pour supprimer un document, cliquer sur la croix correspondant au
document


Si vous supprimez toutes les pages du document, il est supprimé.

## Fusionner deux documents

Pour fusionner deux documents ou plus, créer un nouveau document puis
glisser/déposer toutes les pages dont vous avez besoin des documents
sources dans le nouveau document


Pour sauvegarder votre document, cliquer sur l’icône. Il est téléchargé


## Séparer un document

Pour séparer un document en plusieurs, créer un nouveau document puis
glisser/déposer les pages dans chaque nouveau document


Pour sauvegarder vos documents, cliquer sur l’icône. Ils sont
téléchargés


## Réorganiser un document

Vous pouvez modifier l’ordonnancement des pages du document avec le
glisser/déposer dans le vue « composition de document». Par exemple, la
1ère page a été déplacée en 4ème position :


Vous pouvez ajouter plusieurs fois la même page dans votre document.
Glisser/déposer la page du document source plusieurs fois dans votre
nouveau document. Par exemple, la 3è me page a été ajoutée 4 fois


Pour supprimer une page, cliquer sur la croix rouge sur la page


Pour sauvegarder votre document, cliquer sur l’icône. Il est téléchargé


## Sortir du mode Composition de document

Pour fermer la composition de document, cliquer sur l’icône « Ciseau »


Vous pouvez aussi fermer la composition de document en faisant un clic
droit dans la création de document


## Utilisation de la composition personnalisée de document 

La composition personnalisée de document permet d'avoir automatiquement une composition de document définie au préalable selon certaines données.
Elle permet d'afficher certaines pages de documents souhaités.
Également, une liste de *types* peut être ajoutée à la composition de document, permettant de typer le document.

Pour activer la composition personnalisée de documents, un ensemble de propriétés est nécessaire :

```cfg

# Use a script to retrieve custom layout informations to send it to ARender and create it
arenderjs.startupScript=scripts/arendercustomdocumentbuilder.js
# Use the custom populator
documentbuilder.populatorPolicy=CustomDocument
# Enable the saveAll button
documentbuilder.button.saveAll.enabled=true

```

#### Code Javascript pour la création personnalisée de document 

Pour réaliser une création personnalisée de document, des appels de fonctions sont faits dans le script de démarrage d'ARender.
(Propriété *arenderjs.startupScript*) : 

``` javascript
getDocumentBuilder().registerDocumentBuilderOpeningEvent(function(){

});
```

Permet de s'enregistrer sur l'événement d'ouverture du document.
Le code principal relatif à la création du document se fait donc à ce moment.

``` javascript
getDocumentBuilder().createCustomDocument(documentBuilderLayoutJSON, optionsJSON);
```

Crée le document personnalisé et doit être appelé avec deux paramètres :
  1. Un texte au format Json représentant la composition personnalisée.
  2. Un texte au format Json représentant la liste des options disponible. Peut être vide si le typage du document n'est pas voulu.

``` javascript
getDocumentBuilder().registerDocumentBuilderSaveCustomEvent(function(resultCustomLayoutJSON){

});
```

Permet de s'enregistrer sur l'évenement de la sauvegarde personnalisée du document.
Un objet Json réprésentant les documents construits (nouveaux IDs, titre et type) peut être utilisé pour la mise à jour de l'ECM.

Exemple :


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
    arenderjs_.getDocumentBuilder().registerDocumentBuilderSaveCustomEvent(function (resultCustomLayoutJSON) {
        console.info("resultCustomLayoutJSON :\n" + resultCustomLayoutJSON);
    });
}
```


Voir l'API de la composition de documents pour plus de détails sur les fonctions utilisées.

La mise en page du générateur de documents personnalisés doit être récupérée à partir du serveur, au format JSON.

De la même manière, une liste d'options personnalisées doit être récupérée, au format Json.

Avec ces deux paramètres donnés, la fonction *createCustomDocument* peut être appelée, elle créera la mise en page du générateur de document personnalisé.

Enfin, un appel à *register* est fait (*registerDocumentBuilderSaveCustomEvent*) pour obtenir l'objet appelé *customJsonDocumentBuilderTypeInfo*.
Cet objet est un format Json de la composition de document personnalisé créé, contenant le titre, l'identifiant et le type de document créé à utiliser pour mettre à jour l'ECM.

#### Format Json de la composition personnalisée :

Le schéma de mise en page de la composition de documents personnalisée est représentée comme suit :


La mise en page de la composition de documents contient plusieurs documents (nœuds) qui contiennent :

- documentInfos : Une liste d'informations sur le document qui contient :
  - uuid : L'identifiant du document original
  - pages : Liste des pages du document associées à l'identifiant du document
- metadata : Données qui contiennent :
  - type : Le type du document
  - titre : Le titre du document
  
Exemple :


``` json
{
  "documents": [
    {
      "documentInfos": [
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/1",
          "pages": [
            0
          ]
        },
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/2",
          "pages": [
            3,
            4,
            5
          ]
        }
      ],
      "metadata": {
        "type": "Accepted Step 2 CS Applications",
        "title": "Accepted Files"
      }
    },
    {
      "documentInfos": [
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/3",
          "pages": [
            0
          ]
        }
      ],
      "metadata": {
        "type": "Rejected",
        "title": "Rejected Files"
      }
    },
    {
      "documentInfos": [
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/4",
          "pages": [
            0,
            1
          ]
        }
      ],
      "metadata": {
        "type": "Sample",
        "title": "Sample Files"
      }
    }
  ]
}
```


Cet exemple se traduit par la présence de 3 nœuds dans la composition de documents.

1. Le premier noeud contient 4 pages, 1 page (page 0) provient du document représenté par l'id *b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/1*.
Et trois pages (pages 3, 4, 5) provenant du document *b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/2*.
2. Le deuxième nœud contient 1 page provenant du document *b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/3*
3. Le troisième nœud contient 2 pages (pages 0 et 1) provenant du document *b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/4*

#### Format Json des options :

Une liste d'options est utilisée pour remplir le menu déroulant afin de définir le type de document.
Cette liste contient plusieurs éléments représentés par une clé et une valeur.

Exemple :


``` json
[
  {
    "key": "Action Item",
    "value": "Action Item"
  },
  {
    "key": "Accepted Step 2 CS Applications",
    "value": "Accepted Step 2 CS Applications"
  },
  {
    "key": "Account Charges",
    "value": "Account Charges"
  },
  {
    "key": "Archive",
    "value": "Archive"
  }
]
```


Les options sont données sous forme de propositions pour remplir les menus déroulants.


Les attributs clés de cette liste d'options correspondront à l'attribut *type* des *métadonnées* du fichier json de la mise en page de la composition de documents.
Dans cet exemple avec le précédent *documentBuilderLayout.json* utilisé, le type "Accepted Step 2 CS Applications" correspond au type des métadonnées du premier document.

Cela se traduit par la saisie automatique du menu déroulant avec la valeur type *Accepted Step 2 CS Applications*.

Dans les autres menus déroulants, aucun type donné (*Sample* or *Rejected*) ne correspond à aucun *type* de *métadonnées*, les champs sont laissés vides.

Voici les résultats visuels de la composition de document dans ARender :


Les champs vides peuvent ensuite être remplis avec les valeurs souhaitées ou laissés vides.

#### Sauvegarde

L'action de sauvegarde peut être réalisée, ainsi le code donné dans la fonction "registerDocumentBuilderSaveCustomEvent" de la partie javascript est exécuté.


Dans cet exemple, il affiche le format json de la mise en page actuelle de la composition de documents.

Le format json renvoyé est le même que celui donné en entrée mais avec un objet obligatoire supplémentaire *resultId* qui est l'ID du document modifié utilisé pour mettre à jour l'ECM.

Voici la valeur retournée pour l'exemple utilisé :


``` json

{
  "documents": [
    {
      "resultId" : "e8e653f2-ea1d-40fa-bcf2-f4a95fa238ad",
      "inputFieldEnabled" : "false",
      "documentInfos": [
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/1",
          "pages": [
            0
          ]
        },
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/2",
          "pages": [
            3,
            4,
            5
          ]
        }
      ],
      "metadata": {
        "type": "",
        "title": "Sample Files"
      }
    },
    {
      "resultId" : "f09acee7-cf94-48a2-a3ee-47b27f5049b6",
      "inputFieldEnabled" : "true",
      "documentInfos": [
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/3",
          "pages": [
            0
          ]
        }
      ],
      "metadata": {
        "type": "Rejected",
        "title": "Rejected Files"
      }
    },
    {
      "resultId" : "4ccb15c6-f556-4778-be84-25b492eecc56",
      "inputFieldEnabled" : "true",
      "documentInfos": [
        {
          "uuid": "b64_dXJsPS4uXC4uXHNhbXBsZXNcVGVzdF9kZV96aXAzLTAuemlw/4",
          "pages": [
            0,
            1
          ]
        }
      ],
      "metadata": {
        "type": "Accepted Step 2 CS Applications",
        "title": "Accepted Files"
      }
    }
  ]
}

```


Ce schéma de données peut ensuite être utilisé pour mettre à jour l'ECM.