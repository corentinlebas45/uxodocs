---
title: "Pre-configuration"
draft: false
weight: 2
icon: mdi-wrench
keywords: [ "standalone", "hmi", "web ui", "configuration" ]
---

Here we will make the rendition server reachable
from the presentation server.

By default, ARender war will search the Rendition server
locally. This will only work if you place your server
Rendition on the same server as the front-end server.

There are many ways to link and we will see
here the most durable way.

- In the machine that will contain the presentation server,
     place a folder named *ARenderConfiguration* in
     the home directory of the user starting the
     presentation server.
- In your *ARenderConfiguration* folder, place a file suffixed by
     **-custom-client-server.properties**. This way,
     it's automatically picked up by ARender, read more
     about this in the complete documentation of the configuration.

If we consider your rendition server to be at the hostname "renditionHost",
here is what your file should contain:


```cfg
arender.server.rendition.hosts=http://renditionHost:8761/
```

