---
title: "Use SSL"
weight: 
draft: false
icon: mdi-lock-check
## search related keywords
keywords: ["tutorial", "https"]
---

To allow your Rendition to work over https, you have to change some
properties in ARender server and Rendition server.

{{< tag type="warning">}}
**Note that you cannot use both of http and https at the same
time.**

## On ARender server side

Add these lines below in the following file:


```cfg
arender.server.rendition.hosts=https://RENDITION_HOSTNAME:RENDITION_PORT/
arender.rest.ssl.custom.use=true
```


## On rendition server side

Copy the files located in
"*YOUR_RENDITION_FOLDER/secure-mode-properties/*" in their respective
destination in "*YOUR_RENDITION_FOLDER/modules/*" as it should then
place them correctly in their respective folders.
