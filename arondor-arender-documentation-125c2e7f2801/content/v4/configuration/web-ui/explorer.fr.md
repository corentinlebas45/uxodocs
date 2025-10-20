---
title: "Navigateur de document"
draft: false
icon: mdi-navigation
keywords: ["configuration", "navigateur de document"]
---

## Généralités

Le navigateur de document est, par défaut, ouvert sur l'explorateur de vignettes. L'utilisateur peut naviguer entre les différents panneaux en cliquant sur l'icon correspond. Il peut également fermer le navigateur de document en cliquant sur l'icon du panneau déjà ouvert.

- Clé: documentnavigator

    | Description                                                           | Clé du paramètre    | Type                                                                                                                                  |
    | --------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
    | Largeur du navigateur de document                                     | width               | Pixels                                                                                                                                |
    | Le temps d'affichage des poignées du séparateur (déprécié en v.4.7.0) | ears.hideTimerDelay | Millisecondes                                                                                                                         |

## Explorateur de vignettes

Le tableau ci-dessous présente la configuration générale de cet
explorateur.

- Clé: thumbexplorer

    | Description                                            | Clé du paramètre | Type    |
    | ------------------------------------------------------ | ---------------- | ------- |
    | Activation/désactivation de cet explorateur            | enabled          | Booléen |
    | Indentation entre un document fils et son père         | indentation      | Pixels  |
    | Niveau de profondeur de sous documents à charger       | maxLevelToLoad   | Entier  |
    | Activation/désactivation de l'affichage de métadonnées | metadata         | Booléen |

{{< tag type="example" title="Exemple dans arender.properties">}}

```cfg
# Désactivation de l'onglet correspondant à l'explorateur de vignettes
thumbexplorer.enabled=false
```


Le tableau ci-dessous présente la configuration liée aux vignettes.

- Clé: thumbexplorer.thumb

    | Description                                                               | Clé du paramètre | Type   |
    | ------------------------------------------------------------------------- | ---------------- | ------ |
    | Largeur des vignettes                                                     | width            | Pixels |
    | Marge entre chaque vignette                                               | margin           | Pixels |
    | Largeur de l'explorateur à partir de laquelle les vignettes s'élargissent | grow.min         | Pixels |
    | Incrément d'élargissement des vignettes                                   | grow.increment   | Pixels |
    | NA                                                                        | grow.ratio       | Entier |

{{< tag type="example" title="Exemple dans arender.properties">}}

```cfg
# Définition d'un explorateur dont les vignettes s'agrandissent lorsqu'il est agrandi par l'utilisateur
thumbexplorer.thumb.width=100
thumbexplorer.thumb.margin=200
thumbexplorer.thumb.increment=10
```


## Legacy explorateur d'annotations

- Clé: annotationexplorer

    | Description                                            | Clé du paramètre      | Type    |
    | ------------------------------------------------------ | --------------------- | ------- |
    | Activation de l'affichage de l'onglet de l'explorateur | enabled               | Booléen |
    | Affichage des réponses de note textuelle               | showStickyNoteReplies | Booléen |
    | Affichage du label Note textuelle avant le contenu     | showStickyNoteLabel   | Booléen |
    | Adaptation de l'explorateur à la taille du tableau     | adaptiveWidth.enabled | Booléen |

{{< tag type="example" title="Exemple dans arender.properties">}}

```cfg
annotationexplorer.enabled=false
annotationExplorer.showStickyNoteReplies=false
annotationExplorer.showStickyNoteLabel=true
annotationExplorer.adaptativeWidth.enabled=false
```


## Explorateur d'annotations

- Clé: annotation.comment.explorer

    | Description                                                                              | Clé du paramètre                      | Type    |
    | ---------------------------------------------------------------------------------------- | ------------------------------------- | ------- |
    | Possibilité d’afficher les annotations au format réduit                                  | inline.enabled                        | Booléen |
    | Affichage des annotations au format réduit dés l’ouverture de l’explorateur d’annotation | show.annotation.minimized.on.open     | Booléen |

{{< tag type="example" title="Exemple dans arender.properties">}}

```cfg
annotation.comment.explorer.inline.enabled=true
annotation.comment.explorer.show.annotation.minimized.on.open=false
```


## Explorateur de signets

- Clé: bookmarkexplorer

    | Description                                 | Clé du paramètre | Type    |
    | ------------------------------------------- | ---------------- | ------- |
    | Activation/désactivation de cet explorateur | enabled          | Booléen |

{{< tag type="example" title="Exemple dans arender.properties">}}

```cfg
# Désactivation de l'onglet correspondant à l'explorateur de signets
bookmarkexplorer.enabled=false
```

