---
title: Vignette
icon: mdi-file-document-outline
keywords: ["feature", "vignette"]
---

## Introduction

La vue miniature dans ARender offre une représentation visuelle condensée du document, offrant aux utilisateurs
un moyen rapide et efficace de naviguer dans les pages.

## Miniature en surbrillance

L'une des fonctionnalités est la mise en évidence dynamique des vignettes en fonction de la page en cours de visualisation.
Ce repère visuel permet aux utilisateurs d'identifier facilement leur emplacement actuel dans le document, améliorant ainsi la navigation et l'orientation.

![image]([shortcode])

## Saut de page

Naviguer vers une page spécifique devient facile grâce à la vue miniature. Les utilisateurs peuvent simplement sélectionner la vignette souhaitée,
et l'application passera automatiquement à la page correspondante.
Cette fonctionnalité rationalise le processus de navigation, économisant du temps et des efforts aux utilisateurs.

![image]([shortcode])

## Ajustement de la structure d'affichage des miniatures (v2023.1.0 et versions ultérieures)

Pour ceux qui souhaitent contrôler leur vue miniature, ARender fournit un curseur dynamique qui redéfinit la façon dont vous interagissez avec les miniatures du document. Cette fonctionnalité vous permet d'ajuster de manière automatique la structure d'affichage des vignettes.

Pour utiliser cette fonctionnalité, vous pouvez l'activer via un simple paramètre de configuration.

[shortcode]
[shortcode]
[shortcode]

```cfg
ui.legacy.enabled=false
```

[shortcode]
[shortcode]

{{< tab 1>}}
[shortcode]

```cfg
ui.legacy.enabled=false
```

[shortcode]
[shortcode]
[shortcode]

![image]([shortcode])

## Configuration du nombre de colonnes par défaut (v2023.4.0 et versions ultérieures)

Suite à l'activation de la fonctionnalité mentionnée précédemment "Ajustement de la structure d'affichage
des miniatures", au chargement de ARender et à chaque chargement d'un nouveau document, les vignettes sont
affichées par défaut sur 2 colonnes. Il est possible de changer cette valeur par défaut par un nombre compris
entre 1 et 4.

Pour utiliser cette fonctionnalité, vous pouvez la configurer via un simple paramètre de configuration.

[shortcode]
[shortcode]
[shortcode]

```cfg
thumbexplorer.columns=1
```

[shortcode]
[shortcode]

{{< tab 1>}}
[shortcode]

```cfg
thumbexplorer.columns=1
```

[shortcode]
[shortcode]
[shortcode]

## Désactivation de l'option de création d'ancre (v2023.4.0 et versions ultérieures)

Par défaut, lorsqu'un utilisateur réalise un clic droit sur une miniature, un menu déroulant apparaît avec
plusieurs options dont l'option "Créer une ancre à cette page". Il est possible de désactiver cette option.

Pour désactiver cette fonctionnalité, utilisez le paramètre de configuration suivant :

[shortcode]
[shortcode]
[shortcode]

```cfg
thumbexplorer.contextualMenu.createPageAnchor=false
```

[shortcode]
[shortcode]

{{< tab 1>}}
[shortcode]

```cfg
thumbexplorer.contextualMenu.createPageAnchor=false
```

[shortcode]
[shortcode]
[shortcode]

Par défaut, le paramètre de configuration est à `true`, l'option "Créer une ancre à cette page" est activée.

![image]([shortcode])

Avec le paramètre de configuration à `false`, l'option "Créer une ancre à cette page" est désactivée.

![image]([shortcode])
