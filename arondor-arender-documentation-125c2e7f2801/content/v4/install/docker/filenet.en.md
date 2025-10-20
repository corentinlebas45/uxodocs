---
title: "IBM FileNet"
draft: false
weight: 5
keywords: ["docker", "filenet"]
---

## ARender UI for IBM FileNet


As the application use Tomcat as web server it can only access filenet content engine by using WSI transport method.
Find more informations on [filenet connector documentation]({{< relref "/v4/connector/filenetp8.en.md">}}).

To run the container, execute:

```bash
-e ARENDERSRV_ARENDER_SERVER_FILENET_AUTHENTICATION_METHOD="LoginPasswordObjectStoreProvider"\
-e ARENDERSRV_ARENDER_SERVER_FILENET_CE_URL="http://<filenet-url>:<filent-port>/wsi/FNCEWS40MTOM/"\
-e ARENDERSRV_ARENDER_SERVER_FILENET_CE_LOGIN=<account-name>\
-e ARENDERSRV_ARENDER_SERVER_FILENET_CE_PASSWORD=<account-password>
```
