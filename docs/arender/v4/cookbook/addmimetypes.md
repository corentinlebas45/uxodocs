---
title: "Ajout de type mime image/vidéo supportés"
description: ""
weight: 0
draft: false
icon: mdi-file-question-outline
## search related keywords
keywords: ["tutorial", "mimetype" ]
---

Si votre serveur de rendition ne possède pas tous les types mimes que
vous souhaitez utiliser, il est possible que le serveur puisse tout de
même convertir votre fichier.

Dans le cas d'une conversion image ou vidéo, la liste exhaustive des
fichiers images/vidéos supportés par imagemagick/ffmpeg est longue.

Si vous souhaitez rajouter un type mime, il suffit de modifier le
fichier *application-security.yml* du dossier modules/TaskConversion de votre rendition.
Ce fichier viendra surcharger le fichier de configuration de base.

Par exemple, si nous souhaitons ajouter le type mime *image/x-bmp*.

Dans le fichier application-security.yml vous trouverez:
``` yaml
security:
  user:
    name: placeholder_login
    password: placeholder_password

spring:
  profiles:
    include: >
      security,
      https
```

Deviendrait alors:

``` yaml
security:
  user:
    name: placeholder_login
    password: placeholder_password

spring:
  profiles:
    include: >
      security,
      https

eureka:
  instance:
    metadataMap:
      convertMimeType: "application/mbox,message/rfc822,application/vnd.ms-outlook,text/html,application/zip,application/x-zip,
      application/x-zip-compressed,application/x-rar-compressed,application/x-rar,application/java-archive,text/rtf,
      ${mime.type.msoffice.word},${mime.type.libreoffice.text},${mime.type.msoffice.excel},${mime.type.libreoffice.sheet},
      ${mime.type.msoffice.powerpoint},${mime.type.libreoffice.presentation},${mime.type.msoffice.project},
      ${mime.type.msoffice.visio},${mime.type.msoffice.publisher},${mime.type.libreoffice.graphics},
      text/plain,video/quicktime,video/mp4,video/3gpp,audio/x-wav,audio/mp3,video/x-flv,video/mpeg,
      video/x-msvideo,video/x-matroska,video/x-ms-asf,video/mov,application/x-empty,audio/mpeg,audio/x-mpeg,audio/x-aiff,audio/mp4,video/gif,image/png,image/jpeg,image/gif,image/x-ms-bmp,image/x-bmp,image/x-portable-bitmap,image/vnd.adobe.photoshop,
      image/x-eps,application/postscript,application/dicom,application/pcx,application/x-pcx,image/pcx,image/x-pc-paintbrush,image/x-pcx,zz-application/zz-winassoc-pcx,image/jp2,image/tiff"

app:
  factoriesBeanNames:
    imageFactory: "image/webp,image/tiff,image/png,image/jpeg,image/gif,image/x-ms-bmp,image/x-bmp,image/x-portable-bitmap,image/vnd.adobe.photoshop,image/x-eps,application/postscript,application/dicom,application/pcx,application/x-pcx,image/pcx,image/x-pc-paintbrush,image/x-pcx,zz-application/zz-winassoc-pcx,image/jp2"

```

Les lignes de code à ajouter se trouvent dans le jar (ouvrir avec un outil type 7-zip), puis aller dans:
BOOT-INF/classes/application.yaml

Pour les types mime, la factory concernée est la
*imageFactory*, où vous pouvez ajouter chaque type mime
désiré.
