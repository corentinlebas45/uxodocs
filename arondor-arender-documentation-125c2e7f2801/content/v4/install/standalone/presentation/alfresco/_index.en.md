---
title: "Alfresco"
description: Deployment guide for Alfresco Content Services, Alfresco Share and ACA
draft: false
type: docs
keywords: [ "standalone", "hmi", "web ui", "configuration", "alfresco" ]
---

We present here the installation of the ARender Web-UI in alfresco.

In our example, we are deploying the presentation server
in an environment with:

- Operating system: Ubuntu 16.04.5
- Alfresco Community 5.2.0 (with tomcat server)

## Retrieve the presentation server archive

Using the username and password beforehand provided (contact arender-sales@arondor.com if you want an access),

## Deployment of the ARender Web-UI server in Alfresco

- Stop the Alfresco service
- Copy the file **arondor-arender-hmi-alfresco-{version}.war** in your *{alfresco_tomcat}/webapps* folder
- Rename the .war file to **ARenderHMI.war**


## The installation is complete

You can now start the alfresco server and try to open a file with a link formed like this:

```html
http://{arender_serveur}:{arender_port}/ARenderHMI/?nodeRef={nodeRef}&user={user}&alf_ticket={ticket}&versionLabel={version}
```


You have finished the quick installation of ARender for Alfresco. To go further, go to the page here : **[Advanced configuration](broken-link.md)**