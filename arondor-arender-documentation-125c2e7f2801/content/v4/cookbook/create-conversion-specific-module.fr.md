---
title: "Créer un module de conversion"
weight: 
draft: false
icon: mdi-cog-transfer-outline
## search related keywords
keywords: ["tutorial", "conversion" ]
---

Dans ce tutoriel nous allons nous concentrer sur la possibilité de créer
un service de conversion de documents dédié à un seul type de documents.

## Installer ce serveur de conversion dédié

Extraire le contenu du packaging de rendition classique sur le serveur
que vous voulez dédier à un type de conversion.

Dans notre exemple, nous allons dédier un serveur à la conversion de
fichiers Office.

Aller dans le dossier du module de conversion *modules/TaskConversion/*
et déposez-y le fichier de configuration (application.yml) suivant :

```yaml
    app:
      eureka:
        hostname: <rendition_host_name>

    eureka:
      instance:
        metadataMap:
          instanceId: ${eureka.instance.instanceId}
          name: ${spring.application.name}
          context: '[{"context":"/document/convert/","validMimeTypes": []},
          {"context":"/document/signature/validate/","validMimeTypes": []},
          {"context":"/document/alter/","validMimeTypes": []},
          {"context":"/document/image/","validMimeTypes": ["video/mp4"]}]'
          convertMimeType: 'text/rtf,
          application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
          application/vnd.ms-word.document.macroEnabled.12,application/vnd.openxmlformats-officedocument.wordprocessingml.template,
          application/vnd.ms-word.template.macroEnabled.12,application/vnd.ms-excel,application/x-ms-excel,
          application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.macroEnabled.12,
          application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.ms-excel.template.macroEnabled.12,
          application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,
          application/vnd.ms-powerpoint.presentation.macroEnabled.12,application/vnd.openxmlformats-officedocument.presentationml.template,
          application/vnd.ms-powerpoint.template.macroEnabled.12,application/visio,application/x-visio,
          application/vnd.visio,application/vnd.ms-visio,application/visio.drawing,
          application/vsd,application/x-vsd,image/x-vsd,zz-application/zz-winassoc-vsd,
          application/vnd.oasis.opendocument.text,application/vnd.oasis.opendocument.spreadsheet,application/vnd.ms-project,
          application/vnd.oasis.opendocument.presentation,application/vnd.oasis.opendocument.graphics'
    server:
      port: 10001

    nurse:
      outPath: ${tmp.dir.doc}
      timeInterval: ${health.time.interval}
      samplesDirectory: ../../samples/
      components:
        -  functionality: TKC_TextConversion
          factoryName: "textFactory"
          samplePath: "test.docx"
          docIdStr: "0ff1c3S4mpl3"
```

En premier lieu, nous faisons pointer ce micro service isolé sur
l'adresse du serveur de rendition auquel il répondra (remplacer
<rendition_host_name\> par votre IP/nom d'hôte rendition):

```yaml
    app:
      eureka:
        hostname: <rendition_host_name>
```

Ici, nous répliquons la configuration par défaut du micro service de
conversion, mais nous changeons les types mimes supportés pour réduire à
Office.

```yaml
    convertMimeType: 'text/rtf,
    application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,
    application/vnd.ms-word.document.macroEnabled.12,application/vnd.openxmlformats-officedocument.wordprocessingml.template,
    application/vnd.ms-word.template.macroEnabled.12,application/vnd.ms-excel,application/x-ms-excel,
    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.macroEnabled.12,
    application/vnd.openxmlformats-officedocument.spreadsheetml.template,application/vnd.ms-excel.template.macroEnabled.12,
    application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,
    application/vnd.ms-powerpoint.presentation.macroEnabled.12,application/vnd.openxmlformats-officedocument.presentationml.template,
    application/vnd.ms-powerpoint.template.macroEnabled.12,application/visio,application/x-visio,
    application/vnd.visio,application/vnd.ms-visio,application/visio.drawing,
    application/vsd,application/x-vsd,image/x-vsd,zz-application/zz-winassoc-vsd,
    application/vnd.oasis.opendocument.text,application/vnd.oasis.opendocument.spreadsheet,application/vnd.ms-project,
    application/vnd.oasis.opendocument.presentation,application/vnd.oasis.opendocument.graphics'
```

Ensuite, nous changeons le port par défaut, pour ne pas faire de conflit
avec le micro service standard.

```yaml
    server:
      port: 10001
```

Comme nous supprimons des fonctionnalités, nous réduisons aussi son
spectre de vérifications automatiques aux documents Office.

```yaml
    nurse:
      outPath: ${tmp.dir.doc}
      timeInterval: ${health.time.interval}
      samplesDirectory: ../../samples/
      components:
        - functionality: TKC_TextConversion
          factoryName: "textFactory"
          samplePath: "test.docx"
          docIdStr: "0ff1c3S4mpl3"
```

Une fois toute cette configuration effectuée, il est possible de lancer
ce micro service unitairement avec la commande

``` powershell
C:\Rendition4Office\modules\TaskConversion> java -Xmx1024m -jar task-conversion*.jar  
```

Il est important de se placer dans le dossier du module
*modules/TaskConversion/* pour simuler un lancement en rendition
classique.

## Côté serveur classique de rendition

Nous voulons, dans notre installation classique d'ARender retirer du
micro service TaskConversion les documents Office qui vont maintenant
être servis par notre serveur dédié.

Pour ce faire, il faut encore une fois ajouter un fichier de
configuration (application.yml) à côté du jar de micro service de
TaskConversion :

```yaml
    eureka:
      instance:
        metadataMap:
          instanceId: ${eureka.instance.instanceId}
          name: ${spring.application.name}
          context: '[{"context":"/document/convert/","validMimeTypes": []},
          {"context":"/document/signature/validate/","validMimeTypes": []},
          {"context":"/document/alter/","validMimeTypes": []},
          {"context":"/document/image/","validMimeTypes": ["video/mp4"]}]'
          convertMimeType: 'message/rfc822,application/vnd.ms-outlook,text/html,application/zip,application/x-zip,
          application/x-zip-compressed,application/x-rar-compressed,application/x-rar,application/java-archive,
          text/plain,image/png,image/jpeg,image/gif,image/x-ms-bmp,image/x-bmp,image/x-portable-bitmap,
          image/vnd.adobe.photoshop,image/x-eps,application/postscript,application/dicom,application/pcx,
          application/x-pcx,image/pcx,image/x-pc-paintbrush,image/x-pcx,zz-application/zz-winassoc-pcx,
          image/tiff,video/quicktime,video/mp4,video/3gpp,audio/x-wav,audio/mp3,video/x-flv,video/mpeg,
          video/x-msvideo,video/x-matroska,video/x-ms-asf,application/x-empty'
    server:
      port: 9999
    nurse:
      outPath: ${tmp.dir.doc}
      timeInterval: ${health.time.interval}
      samplesDirectory: ../../samples/
      components:
        - functionality: TKC_MailConversion
          factoryName: "mailFactory"
          samplePath: "test.msg"
          docIdStr: "m41lS4mpl3"
        - functionality: TKC_VideoConversion
          factoryName: "videoConversionFactory"
          samplePath: "video.mp4"
          docIdStr: "v1d30S4mpl3"
        - functionality: TKC_ImageConversion
          factoryName: "imageFactory"
          samplePath: "img.png"
          docIdStr: "1m4g3S4mpl3"
```

Ici, le traitement est inverse à ce que nous avons fait pour le service
dédié.

Le port est le port par défaut mais les types mimes supportés sont ceux
de base *sauf* Office et il en est de même pour les composants de test
automatique.

Une fois le serveur de rendition classique démarré, ce micro service
sera lancé et prendra cette configuration sans les types mimes Office.

## Conclusion

A vous maintenant de choisir quels types de fichiers vous souhaitez
isoler, ou d'utiliser une machine dédiée de grande performance pour
convertir les vidéo par exemple.

Les idées sont nombreuses et les possibilités encore plus grandes !
