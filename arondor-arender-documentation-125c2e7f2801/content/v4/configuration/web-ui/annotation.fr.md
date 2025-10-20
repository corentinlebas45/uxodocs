---
title: "Annotations"
draft: false
icon: mdi-comment-text-outline
keywords: ["configuration", "annotation"]
---

## Généralités

- Clé: *annotation*

    | Description                                                    | Clé du paramètre        | Type    |
    | -------------------------------------------------------------- | ----------------------- | ------- |
    | Mode de sauvegarde automatique                                 | autosave                | Booléen |
    | Chargement des annotations existantes                          | loadExisting            | Booléen |
    | Affichage d'un GIF de chargement à la sauvegarde d'annotations | loadingGIF              | Booléen |
    | Recherche dans le contenu textuel des annotations              | searchTextInAnnotations | Booléen |


```cfg
# Activation du mode autosave
annotation.autosave=true
# Affichage du GIF de chargement
annotation.loadingGIF=true
```


## Autosave

- Key: *annotation.autosave*

    | Description                                                                                     | Clé du paramètre   | Type    |
    | ----------------------------------------------------------------------------------------------- | ------------------ | ------- |
    | La sauvegarde peut être déclenchée lors de l'utilisation de la création d'annotations répétable | repeatMode.enabled | Booléen |

## Note textuelle

- Clé: *annotation.stickyNote*

    | Description                                          | Clé du paramètre             | Type    |
    | ---------------------------------------------------- | ---------------------------- | ------- |
    | Opacité                                              | opacity                      | Booléen |
    | Largeur minimum                                      | minimum.width                | Entier  |
    | Hauteur minimum                                      | minimum.height               | Entier  |
    | Couleur de fond                                      | default.color                | Texte   |
    | Couleur de police                                    | default.fontColor            | Texte   |
    | Taille de police                                     | default.fontSize             | Entier  |
    | Choix de police                                      | default.font                 | Texte   |
    | Texte souligné                                       | default.underline            | Booléen |
    | Texte gras                                           | default.bold                 | Booléen |
    | Texte italique                                       | default.italic               | Booléen |
    | Cacher la bordure                                    | hide.border                  | Booléen |
    | Cacher les détails de la note textuelle              | hide.details                 | Booléen |
    | Cacher le bouton 'répondre' quand le texte est vide  | can.hide.reply.button        | Booléen |
    | Les dimensions sont initialisées selon le zoom       | according.to.zoom            | Booléen |
    | Le rapport hauteur champs d'édition / hauteur totale | content.edition.height.ratio | Décimal |

## Rectangle

- Clé: *annotation.rectangle*

    | Description           | Clé du paramètre     | Type    |
    | --------------------- | -------------------- | ------- |
    | Opacité               | opacity              | Décimal |
    | Largeur minimum       | minimum.width        | Entier  |
    | Hauteur minimum       | minimum.height       | Entier  |
    | Couleur de fond       | default.color        | Booléen |
    | Couleur de la bordure | default.border.color | Texte   |
    | Taille de la bordure  | default.border.width | Entier  |

## Cercle

- Clé: *annotation.circle*

    | Description           | Clé du paramètre     | Type    |
    | --------------------- | -------------------- | ------- |
    | Opacité               | opacity              | Décimal |
    | Largeur minimum       | minimum.width        | Entier  |
    | Hauteur minimum       | minimum.height       | Entier  |
    | Couleur de fond       | default.color        | Booléen |
    | Couleur de la bordure | default.border.color | Texte   |
    | Taille de la bordure  | default.border.width | Entier  |

## Texte surligné, souligné et barré

- Clé: *annotation.highligthtext*

    | Description | Clé du paramètre | Type    |
    | ----------- | ---------------- | ------- |
    | Opacité     | opacity          | Décimal |

## Masquage

| Description                          | Clé du paramètre            | Type    |
| ------------------------------------ | --------------------------- | ------- |
| Autorisation de cacher les masquages | annotation.canHideObfuscate | Booléen |
| Protéger les masquages               | toolbar.lockedObfuscate     | Booléen |

## Polygone

- Key: *annotation.polygon*

    | Description           | Clé du paramètre | Type    |
    | --------------------- | ---------------- | ------- |
    | Opacité               | opacity          | Décimal |
    | Couleur de fond       | backgroundColor  | Entier  |
    | Largeur de la bordure | width            | Décimal |

## Ligne connecté

- Key: *annotation.polyline*

    | Description           | Clé du paramètre | Type    |
    | --------------------- | ---------------- | ------- |
    | Opacité               | opacity          | Décimal |
    | Couleur de fond       | backgroundColor  | Entier  |
    | Largeur de la bordure | width            | Décimal |

## Main levée

- Key: *annotation.ink*

    | Description           | Clé du paramètre | Type    |
    | --------------------- | ---------------- | ------- |
    | Opacité               | opacity          | Décimal |
    | Couleur de fond       | backgroundColor  | Entier  |
    | Largeur de la bordure | width            | Décimal |

## Flèche

- Clé: *annotation.arrow*

    | Description                                           | Clé du paramètre  | Type                               |
    | ----------------------------------------------------- | ----------------- | ---------------------------------- |
    | Couleur de fond                                       | backgroundColor   | String (format RGB ou hexadecimal) |
    | Mode règle                                            | computeDistance   | Booléen                            |
    | Taille minimale de la tête de flèche                  | minimal.head.size | Entier (-1 pour désactiver)        |
    | Distance par défaut entre la tête et la queue (axe X) | x.defaultDistance | Entier                             |
    | Distance par défaut entre la tête et la queue (axe Y) | y.defaultDistance | Entier                             |

## Affichage de la date

- Key: *annotation.date.display*

    | Description                                                                | Clé du paramètre         | Type    |
    | -------------------------------------------------------------------------- | ------------------------ | ------- |
    | Affiche la date de manière humanisée dans les commentaires et sticky notes | humanizedDate.enabled    | Booléen |
    | Affiche la date de création dans les commentaires et sticky notes          | creationDate             | Booléen |

## L'explorateur de commentaire

- Key: *annotation.comment.explorer*

    | Description                                                         | Clé du paramètre      | Type    |
    | ------------------------------------------------------------------- | --------------------- | ------- |
    | L'ordre d'apparition des commentaires dans le panneau d'exploration | sortByIncrementDate   | Booléen |
    | Filtre également les annotations sur la vue de la page              | filterPageAnnotations | Booléen |

## Le champs de texte dans les commentaires et sticky notes

Cette partie est commune aux commentaires ainsi qu'aux sticky notes.

- Key: *annotation.richtext*

    | Description                                          | Clé du paramètre    | Type    |
    | ---------------------------------------------------- | ------------------- | ------- |
    | Active l'entrée en mode édition par un double clique | edition.doubleClick | Booléen |

## Popup d'information

Cette partie concerne l'affichage d'une popup présentant les
informations d'une annotation à son survol avec la souris. Cette
fonctionnalité a été introduite afin de permettre la consultation des
informations d'annotations qui ne sont pas éditables.

- Clé: *annotation.info.popup*

    | Description                                               | Clé du paramètre | Type    |
    | --------------------------------------------------------- | ---------------- | ------- |
    | Activer / désactiver l'affichage de la popup              | enabled          | Booléen |
    | Afficher la popup même si l'annotation est éditable       | evenIfEditable   | Booléen |
    | Afficher les informations liées à la dernière mise à jour | displayUpdate    | Booléen |

### Chargement des annotations par page

Si le connecteur le supporte par le biais de l'interface
*AnnotationPageAccessor*, les annotations peuvent être chargées par page
en version 3.1.0 et supérieur.

Voici le paramètre à employer afin d'activer le chargement par page:

- annotation.loadPerPage=true

La signature de cette interface est la suivante:

``` java
List<Annotationget(int page) throws AnnotationsNotSupportedException, AnnotationCredentialsException, InvalidAnnotationFormatException;
```

Il reste alors au connecteur de faire le travail de cache/accès buffer
aux annotations afin de fournir à l'HMI les bonnes annotations.


## Utilisation du stockage local

L'utilisation du stockage local pour des propriétés d'annotations peut être rendue possible avec la propriété ci-dessous.
Son activation ne permet pas d'utiliser les modifications de certaines propriétés à la volée comme l'utilisation de profils.

| Description                   | Clé du paramètre             | Type    |
| ------------------------------| ---------------------------- | ------- |
| Utilisation du stockage local | annotation.use.local.storage | Booléen |
