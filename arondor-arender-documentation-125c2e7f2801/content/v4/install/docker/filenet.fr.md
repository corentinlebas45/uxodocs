---
title: "IBM FileNet"
draft: false
weight: 5
keywords: ["docker", "filenet"]
---

## ARender UI pour IBM FileNet


Comme le serveur d'application utilisé est tomcat, la connection à FileNet Content Engine ne peut se faire que via le transport WSI par défaut.
Pour plus d'informations, voir la [documentation du connecteur FileNet]({{< relref "/v4/connector/filenetp8.fr.md">}}).

Pour démarrer le conteneur, éxécuter:

```bash
-e ARENDERSRV_ARENDER_SERVER_FILENET_AUTHENTICATION_METHOD="LoginPasswordObjectStoreProvider"\
-e ARENDERSRV_ARENDER_SERVER_FILENET_CE_URL="http://<filenet-url>:<filent-port>/wsi/FNCEWS40MTOM/"\
-e ARENDERSRV_ARENDER_SERVER_FILENET_CE_LOGIN=<account-name>\
-e ARENDERSRV_ARENDER_SERVER_FILENET_CE_PASSWORD=<account-password>
```
