---
title: "Configuration of Hazelcast"
draft: false
weight: 2
icon: mdi-cog-outline
keywords: [ "configuration", "hmi", "web ui", "viewer", "hazelcast"]
---

Since the version 4.8.2, it is possible to configure HazelCast for caching DocumentAccessor.
It provides better support for the scalability of the Web-UI thanks to its shared and distributed cache system.

## Configure HazelCast in ARender

{{< tag type="code" title="arender-server.properties">}}

```cfg
# Defines the cache strategy to use. Valid values : ehCacheStrategy, hazelCastStrategy
arender.server.cache.strategy=ehCacheStrategy
# Path of the hazelCast configuration file, if the value is empty then the default one in the classpath will be used. 
arender.server.cache.hazelCast.config.path=
```


The default configuration file for Hazelcast can be found on the Web-UI side in the WEB application resources at the path *WEB-INF/classes/ressources/hazelcast.yaml*


```cfg
hazelcast:
  map:
    documentAccessorsHMI:
      max-idle-seconds: 3600
      eviction:
        eviction-policy: NONE
        max-size-policy: PER_NODE
        size: 5
  network:
    port:
      port: 5702
    join:
      auto-detection:
        enabled: true
    rest-api:
      enabled: true
      endpoint-groups:
        CLUSTER_READ:
          enabled: true
        HEALTH_CHECK:
          enabled: true
        WAN:
          enabled: true
        DATA:
          enabled: true

```



For now the connectors supported by ARender have not yet undergone the necessary changes to support HazelCast.

If you have implemented your own connector, then you will need to make your DocumentAccessor properly serializable/deserializable.

