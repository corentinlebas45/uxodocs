---
title: Redaction
description:
icon: mdi-image-edit-outline
keyword: ["feature", "redaction", "obfuscate"]
---
## Default behavior 

ARender offers the possibility to hide content from any document thanks to the **redaction feature**.


To show the redaction buttons, add the below properties:

{{< tag type="code" title="WEB-INF/classes/arender.properties">}}

```cfg
topPanel.obfuscate=true
topPanel.obfuscateZone=true
```

{{< tag type="warning">}}
By default, only **admin** user can add Redaction on the document.

To test you need to:
* Connect as admin:
    * Either empty ARender cookie,
    * Or open a browser in private navigation.
* Open the following link: [LIVE EXAMPLE](https://www.demo.arender.io/?user=admin&topPanel.obfuscate=true&topPanel.obfuscateZone=true)
  

## True redaction

In the previous example, the text below the Redactions is fetched and can be copied by any user.

If you need to use true redact, i.e. only fetch the text for authorized users, you need to:

* Activate the fetch of Redaction annotation before the image generation:

{{< tag type="code" title="WEB-INF/classes/arender-server.properties">}}

```cfg
arender.server.process.annotations.rendition=true
```

* Implement the **AuthenticationServiceProvider** interface. Example available on [GitHub](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/authentication/service/CustomAuthenticationServiceProvider.java)