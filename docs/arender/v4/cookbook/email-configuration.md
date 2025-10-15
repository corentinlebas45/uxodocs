---
title: "Configurer les emails"
weight: 
draft: false
icon: mdi-email-outline
## search related keywords
keywords: ["tutorial", "mail", "configuration" ]
---

## Formatage des dates

Depuis la version 4.8.0, il est possible de configurer un format de date pour les emails. La configuration suivante va permettre de formatter 
la date *2022-01-24T04:54:42-05* qui donnera le résultat *Mon 24 Jan 2022 04:54:42 -0500*

[shortcode]

``` cfg
    emltopdf.config.format.date=EEE d MMM yyyy HH:mm:ss ZZ
```

[shortcode]

### Date dépendante du fuseau horaire

Depuis la version 4.8.0, la date est configurable selon le fuseau horaire de l'utilisateur. Par défaut, la date est formattée selon le fuseau horaire UTC.

[shortcode]

``` cfg
    default.url.parser.use.timeZone.for.ids=true
```

[shortcode]


## Sujet et pièces jointes avec des caractères non-latin

Depuis la version 4.8.0, les caractères non-latin présent dans le sujet et le nom des pièces jointes peuvent ne pas s'afficher correctement. 
Pour permettre d'effectuer le bon rendu, il faut configurer le module de rendition *document-converter* de la façon suivante : 

[shortcode]

``` cfg
    emltopdf.encode.header.with.body.encoding=true
    emltopdf.config.filter.special.characters.regex=
    emltopdf.config.filter.replacement.character=
```

[shortcode]

Dans certain cas, le sujet et les pièces jointes peuvent toujours avoir des problèmes d'affichage. 
Il faudra donc appliquer la configuration suivante côté *Web-UI-server*. Cela permet de fournir la locale de l'utilisateur 
qui va servir pour déterminer le bon encodage à appliquer.

[shortcode]

``` cfg
    default.url.parser.use.locale.for.ids=true
```

[shortcode]