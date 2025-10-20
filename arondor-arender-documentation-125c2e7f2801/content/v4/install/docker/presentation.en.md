---
title: "Presentation server"
draft: false
weight: 3
icon: mdi-monitor-dashboard
keywords: ["docker"]
---

## Configuration

### By Environment Variables

All properties can be set with environment variables by following the next rules:

- environment variables must be capitalized
- use **"_"** to replace **"."**
- any ARender profile properties must be prefixed by `"ARENDER_"`
- any ARender server properties must be prefixed by `"ARENDERSRV_"`

topPanel.logo -> ARENDER_TOPPANEL_LOGO

arender.server.rendition.hosts -> ARENDERSRV_ARENDER_SERVER_RENDITION_HOSTS

### By volumes

#### Profile

**Default configuration file location:** /usr/local/tomcat/webapps/ROOT/WEB-INF/classes/arender.properties

**Custom config folder location:** /home/arender/Profile

See documentation:

- [Profile](broken-link.md)
- [ARender front configuration properties list](broken-link.md)

#### Server

**Default configuration file location:** /home/arender/ARenderConfiguration/arender-custom-server.properties

**Custom config folder location:** /home/arender/ARenderConfiguration
