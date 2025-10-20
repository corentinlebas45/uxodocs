---
title: Fonctionnalités Alfresco Share
keyword: ["fonctionnalité", "Alfresco", "Share"]
---

## Configurer ARender pour des groupes spécifiques

Pour configurer le viewer ARender pour des groupes spécifiques Alfresco, veuillez suivre la procédure suivante :

- Aller sur la page de déploiement de module : **<nom de l'hôte>/share/page/modules/deploy**
- Choisir le module ARender : **ARender Preview Plugin**
- Sélectionner l'évaluateur de droite : **group.module.evaluator**
- Dans le *Evaluator Properties* :

```yaml
negate : false

relation : OR

groups : <nom du groupe> 
```

## Configurer les types de document à ouvrir avec ARender

Pour sélectionner les types de document à ouvrir avec ARender, les autres seront ouverts avec le viewer par défaut configuré dans votre système.

Pour cela ajouter le contenu indiqué ci-dessous :

``` xml
<config evaluator="string-compare" condition="ArenderExclusion">
        <viewerMimeTypes>{mimeType1},{mimeType2},...,{mimeTypeN}</viewerMimeTypes>
    <!-- exemple : <viewerMimeTypes>"application/msword,image/vnd.dwg,image/x-dwg,image/x-dwf</viewerMimeTypes-->
</config>
```

## Configurer les types de document à convertir via la Rendition ARender

Le plugin ARender pour Alfresco Share peut demander une conversion PDF du document avant de demander la visualisation à ARender.

Ceci a pour avantage de gagner en rapidité d'affichage pour les documents complexes comme les documents AutoCAD.

Pour cela ajouter le contenu indiqué ci-dessous :

``` xml
<config evaluator="string-compare" condition="ArenderExclusion">
        <renditionMimeTypes>{mimeType1},{mimeType2},...,{mimeTypeN}</renditionMimeTypes>
    <!-- exemple : <renditionMimeTypes>"application/msword,image/vnd.dwg,image/x-dwg,image/x-dwf</renditionMimeTypes-->
</config>
```
