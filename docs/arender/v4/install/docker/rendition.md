---
title: "Partie de rendition"
draft: false
weight: 2
icon: mdi-file-cog-outline
keywords: ["docker"]
---

## Par variables d'environement

Toutes les propriétés yaml peuvent être surcharger par variable d'environnement en suivant les règles suivantes :

- la variable d'environment doit être en lettre capitale
- les lettres en capitale sont précédés d'un **"."**
- utiliser **"_"** pour associer les objets
- utiliser **"[n]"** pour renseigner un élément d'une liste (avec **n** pour l'index)

[shortcode]
[shortcode]

```yaml
  nurse:
    samplesDirectory: ../../samples/
    components:
      - functionality: TKC_MailConversion
        factoryName: "mailFactory"
        samplePath: "test.msg"
        docIdStr: "m41lS4mpl3"
```

[shortcode]
[shortcode]

```yaml
    environment:
      - "DCV_NURSE_SAMPLES.DIRECTORY=../../samples/"
      - "DCV_NURSE_COMPONENTS[0]_FUNCTIONALITY=TKC_MailConversion"
      - "DCV_NURSE_COMPONENTS[0]_FACTORY.NAME=mailFactory"
      - "DCV_NURSE_COMPONENTS[0]_SAMPLE.PATH=test.msg"
      - "DCV_NURSE_COMPONENTS[0]_DOC.ID.STR=m41lS4mpl3"
```

[shortcode]

[shortcode]

## Par volumes

Emplacement des fichiers de configuration :

- /arender/config/application.properties
- /arender/config/application-*.properties

- /arender/config/application.yaml
- /arender/config/application-*.yaml

[shortcode]
**{service-name}**: nom du conteneur sans le préfixe "arender"
[shortcode]
