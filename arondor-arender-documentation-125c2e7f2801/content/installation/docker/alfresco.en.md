---
title: "Alfresco"
draft: false
weight: 4
keywords: ["docker"]
image: /images/icons/alfresco.png
---

## ARender UI for Alfresco

To run the container, execute:

```bash
-e ARENDERSRV_ARENDER_SERVER_ALFRESCO_ATOM_PUB_URL="http://<alfresco-host>:<alfresco-port>/alfresco/api/-default-/cmis/versions/1.1/atom"
```

## Alfresco in Docker

Add the ARender plugin in Alfresco share container and Alfresco content repository container to make it works.

If needed, some resources about ARender for Alfresco are available below:

- [See Alfresco documentation]({{< relref "/guides/configurations/web-ui/connectors/alfresco/_index.en.md">}})

The share plugin must be /tomcat/shared/lib. Insure these paths are listed in shared.lib property in Alfresco component's **catalina.properties**.  

To inform share about the location of the ARender UI server, add the following lines in Alfresco share configuration file.

{{< tag type="code"
  title="tomcat/shared/classes/alfresco/web-extension/share-config-custom.xml" >}}

```XML
  <config evaluator="string-compare" condition="Arender">
    <url>http://{arender-web-ui-server}</url>
    <!-- example: <url>http://localhost</url> -->
  </config>
```

