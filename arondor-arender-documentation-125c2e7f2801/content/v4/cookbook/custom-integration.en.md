---
title: "Custom XML integration location"
weight: 
draft: false
icon: mdi-xml
## search related keywords
keywords: ["tutorial", "integration", "location" ]
---

We possess in ARender two files dedicated to custom integrations that
ship out empty in order for integration to include easier custom XML
into ARender. Those two XML files are imported by ARender.

This avoid conflicts on version upgrade of ARender, and facilitates the
comparison with the new version of the XML (nothing new is overriden by
custom integration), those XML files are empty and will always be at
each new version.

- In the Web-UI:
  
  - WEB-INF/classes/arender-custom-integration.xml (GUI, client side
    configuration)
  - WEB-INF/classes/arender-custom-server-integration.xml (server
    side configuration)

- If you do not wish to place your XML files inside ARender war
  packaging, you can set environment variables to change the location
  from which those two custom files will be read:
  
  - customXmlServerPath: corresponds to the import path of
    arender-custom-server-integration.xml.
  - customXmlClientPath: corresponds to the import path of
    arender-custom-integration.xml.

As an example, if you wish to set a file system full path to your custom
server file, you can set customXmlServerPath to:

```cfg
file:C:\\configuration\\arender-server-configuration.xml
```
