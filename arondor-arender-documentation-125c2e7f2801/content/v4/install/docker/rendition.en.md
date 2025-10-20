---
title: "Rendition stack"
draft: false
weight: 2
icon: mdi-file-cog-outline
keywords: ["docker"]
---

## By Environment Variables

All yaml properties can be overridden by environment variables by following the next rules:

- environment variables must be all capitaliaze
- capitalized character in yaml must be preceded by **"."**
- use **"_"** to associate an object
- use **"[n]"** to set a list element (with **n** as index)


```yaml
  nurse:
    samplesDirectory: ../../samples/
    components:
      - functionality: TKC_MailConversion
        factoryName: "mailFactory"
        samplePath: "test.msg"
        docIdStr: "m41lS4mpl3"
```


```yaml
    environment:
      - "DCV_NURSE_SAMPLES.DIRECTORY=../../samples/"
      - "DCV_NURSE_COMPONENTS[0]_FUNCTIONALITY=TKC_MailConversion"
      - "DCV_NURSE_COMPONENTS[0]_FACTORY.NAME=mailFactory"
      - "DCV_NURSE_COMPONENTS[0]_SAMPLE.PATH=test.msg"
      - "DCV_NURSE_COMPONENTS[0]_DOC.ID.STR=m41lS4mpl3"
```



## By volumes

Configuration files location:

- /arender/config/application.properties
- /arender/config/application-*.properties

- /arender/config/application.yaml
- /arender/config/application-*.yaml

**{service-name}**: container name without "arender" prefix
