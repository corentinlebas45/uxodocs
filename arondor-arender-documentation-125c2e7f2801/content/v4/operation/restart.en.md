---
title: "Restart"
draft: false
weight: 3
icon: mdi-restart
keywords: [ "exploitation", "restart"]
---

In some cases, it may be necessary to restart one or both part of
ARender. Modifications on the configuration files will require a restart
for changes to apply. A restart can also be tried in case of unexpected
errors. ARender is a stateless service a restart is able to fix any
application freeze.

## Rendition server

You need to restart the ARenderService service. To do so type the
following command:


```powershell
$> sc stop ARenderRenditionService
$> sc start ARenderRenditionService
```


If **systemd** is the is the system initialisation component:

```bash
$> systemctl stop ARenderRenditionEngineService.service
$> systemctl start ARenderRenditionEngineService.service
```

If **initd** is the is the system initialisation component:

```bash
$> service ARenderRenditionEngineService stop
$> service ARenderRenditionEngineService start
```


## Presentation server

The restart of the web application is sufficient. Some application servers do not allow applications to be restarted separately, so it is necessary to fully restart the application server.
