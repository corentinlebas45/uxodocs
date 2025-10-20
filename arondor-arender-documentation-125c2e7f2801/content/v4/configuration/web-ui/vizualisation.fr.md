---
title: "Visualisation"
draft: false
icon: mdi-eye-outline
keywords: ["configuration", "visualisation"]
---

## Généralités

- Clé : *visualization*

    | Description                                     | Clé du paramètre      | Type             |
    | ----------------------------------------------- | --------------------- | ---------------- |
    | Mode de visualisation                           | mode                  | Simple, BookMode |
    | Activation du plein écran au démarrage          | fullscreen            | Booléen          |
    | Activation de la sauvegarde de rotation de page | rotation.save.enabled | Booléen          |
    | Lecture automatique des vidéos                  | video.autoplay        | Booléen          |

## Zoom

- Clé : *zoom*

    | Description                       | Clé du paramètre | Type                              |
    | --------------------------------- | ---------------- | --------------------------------- |
    | Type de zoom                      | type             | FullWidth, FullHeight ou FullPage |
    | Valeur de zoom                    | value            | Entier (en %)                     |
    | Activation de l'animation de zoom | animation        | Booléen                           |

## Changement de page

- Clé : *pageChange*

    | Description                                     | Clé du paramètre | Type    |
    | ----------------------------------------------- | ---------------- | ------- |
    | Changement de page au *scroll* de la souris     | mouse            | Booléen |
    | Activation de l'animation au changement de page | animation        | Booléen |

- Clé : *pageCorner*

    **Utilisable uniquement quand visualization.bookMode=true**

    | Description                                 | Clé du paramètre | Type    |
    | ------------------------------------------- | ---------------- | ------- |
    | Activation des coins de page                | enabled          | Booléen |
    | Activation de l'animation des coins de page | animation        | Booléen |

## Règle

- Clé : *guideRuler*

    | Description            | Clé du paramètre | Type    |
    | ---------------------- | ---------------- | ------- |
    | Activation de la règle | enabled          | Booléen |
    | Hauteur de la règle    | height           | Entier  |
    | Pas de la règle        | increment        | Entier  |

## Vue multi-document

- Clé : *multiview*

    | Description                                                        | Clé du paramètre | Type                  |
    | ------------------------------------------------------------------ | ---------------- | --------------------- |
    | Activation de la vue multi-document                                | enabled          | Booléen               |
    | Orientation de la vue multi-document                               | direction        | vertical , horizontal |
    | Activation de la comparaison des documents                         | doComparison     | Booléen               |
    | Affichage de la vue multi-document au démarrage                    | showOnStart      | Booléen               |
    | Synchronisation du *scroll* entre les deux vues                    | synchronized     | Booléen               |
    | Activation du focus de document par clic                           | focusOnClick     | Booléen               |
    | Configuration du temps mis pour cacher le panneau de modifications | header.timeoutMs | Entier                |

## Notifications

- Clé : *toaster*

    | Description                                                      | Clé du paramètre    | Type           |
    | ---------------------------------------------------------------- | ------------------- | -------------- |
    | Activation des notifications pour le niveau choisi               | *CLE_NIV*.enabled  | Booléen        |
    | Disparition de la notification automatique pour le niveau choisi | *CLE_NIV*.autoHide | Booléen        |
    | Temps d'affichage de la notification avant disparition           | toast.timeout       | Entier (en ms) |
    | Affiche la notification la plus récente en haut de la pile       | toast.newestOnTop   | Booléen        |

  - Clé des niveaux

    | Niveau  | Clé         |
    | ------- | ----------- |
    | Severe  | log.severe  |
    | Warning | log.warning |
    | Info    | log.info    |
    | Config  | log.config  |
    | fine    | log.fine    |
    | finer   | log.finer   |
    | finest  | log.finest  |
