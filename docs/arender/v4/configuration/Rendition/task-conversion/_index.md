---
title: "Task conversion"
draft: false
weight: 2
type: docs
icon: mdi-file-cog-outline
---

## Rendition sans accès à internet et besoin de visualisation de mail contenant des images externes

Si la Rendition est installée sur un serveur qui **n'a pas accès à Internet** et qu'un besoin de **visualisation de mail contenant des images stockées sur Internet** existe, veuillez suivre la procédure suivante :

- Ajouter un proxy à la configuration WKHTMLTOPDF. Pour cela créer un fichier nommé **application.properties** dans le module TaskConversion et contenant la propriété ci-dessous (Valeur du proxy à adapter si besoin) (version 4.3.8 et supérieures) :

  {{< tag type="code" title="application.properties located in ARender-Rendition-4.X.Y\modules\TaskConversion">}}

  ```cfg
      tools.wkhtmltopdf.options=--disable-javascript,--quiet,--encoding,UTF-8,--load-error-handling,ignore,--proxy,localhost
  ```

  [shortcode]


Depuis la v4.8.13, les liens internes et externes, l'accès aux fichiers locaux et l'URL de l'iframe sont désactivés par défaut pour la conversion HTML en PDF.
Le but est d'éviter les problèmes de sécurité.

Notez que cela peut avoir un impact sur le rendu du HTML dans ARender :
- Les liens cliquables seront désactivés
- L'affichage d'image à partir d'un lien interne/externe ou d'un fichier local ne sera pas rendu
- L'URL de l'iframe ne sera pas rendue

Les propriétés par défaut du service TaskConversion ressemblent à ceci :

{{< tag type="code" title="application.properties situé dans ARender-Rendition-4.X.Y\modules\TaskConversion">}}

```cfg
tools.wkhtmltopdf.options=--disable-javascript,--quiet,--encoding,UTF-8,--load-error-handling,ignore,--disable-external-links,--disable-internal-links,--disable-local-file-access
# Désactiver l'URL iframe par mesure de sécurité
outils.wkhtmltopdf.iframe.disabled=true
```

[shortcode]

## Conversion d'images héritées

Pour utiliser l'ancienne conversion d'image, utilisée dans la version 3 d'ARender, le fichier 
*application-security.yaml* du dossier modules/TaskConversion doit être modifié avec les types MIME souhaités pour 
l'élément *legacyImageFactory*.

{{< tag type="code" title="application-security.yaml">}}

``` yaml

application :
   UsinesBeanNames :
     LegacyImageFactory : "image/tiff,image/png,image/jpeg,image/gif"    
```

[shortcode]

Plusieurs propriétés supplémentaires peuvent être définies pour la conversion :

- *legacy.image.conversion.adapt.size* est utilisé pour définir la taille de sortie PDF comme entrée d'image. 
  Peut être coûteux pour les images de grandes tailles.
- *legacy.image.conversion.keep.aspect* définit le format de sortie sur A4. Sinon, l'image s'étire.
- *legacy.image.conversion.rotateLandscapes* peut être utilisé si l'image est en orientation paysage pour avoir une 
  orientation de portrait en sortie.

{{< tag type="code" title="application.properties situé dans ARender-Rendition-4.X.Y\modules\TaskConversion">}}

```cfg
# Adapt the output size to the image
legacy.image.conversion.adapt.size=false
# Keep image aspect, otherwise the output is in A4 format
legacy.image.conversion.keep.aspect=true
# Rotate the landscaped input to a portrait orientation
legacy.image.conversion.rotateLandscapes=false
```

[shortcode]