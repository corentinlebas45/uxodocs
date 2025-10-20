---
title: "Installation in Share"
draft: false
weight: 2
keywords: [ "standalone", "hmi", "web ui", "configuration", "alfresco", "share" ]
---

We present here the continuation of the installation of the Web-UI, in the Share module of Alfresco.

## Retrieve the presentation server archives

Using the username and password beforehand provided,

## Re-deployment of the ARender Web-UI server in Alfresco

If your Alfresco and Share module does not share the same tomcat, you will have to drop the plugin
**arender-for-alfresco-share-plugin-{version}.jar** and **arender-for-alfresco-ACS-plugin-{version}.jar** in the *lib/* folder of each of these
deployed applications.

If they are deployed in the same tomcat, then drop the **arender-for-alfresco-share-plugin-{version}.jar** and **arender-for-alfresco-ACS-plugin-{version}.jar** plugin into *{alfresco_tomcat}/shared/lib*.

The two plugins respectively allow to extend the ACS REST API used by ARender and the integration of the ARender viewer in share.

Add the following lines to the _{alfresco_tomcat}/shared/classes/alfresco/web-extension/**share-config-custom.xml**_ file between the alfresco-config attributes.

```xml
<config evaluator="string-compare" condition="Arender">
        <url>http://{arender_serveur}:{arender_port}/{arender_contexte}</url>
        <!-- exemple: <url>http://192.168.1.8:8080/ARenderHMI</url> -->
</config>
```


## The installation complete

You can now start the alfresco server and try to open a file stored in it.


You have finished the quick installation of ARender for Alfresco Share. To go further, go to the page here : **[Advanced configuration](broken-link.md)**
