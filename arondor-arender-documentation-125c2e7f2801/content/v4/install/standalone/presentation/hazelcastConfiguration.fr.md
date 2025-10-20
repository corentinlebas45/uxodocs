---
title: "Configuration de Hazelcast"
draft: false
weight: 2
icon: mdi-cog-outline
keywords: [ "configuration", "hmi", "web ui", "viewer", "hazelcast"]
---

Depuis la version 4.8.2, il a été rajouté la possibilité de configurer la mise en cache des DocumentAccessor dans HazelCast.
Il permet un meilleur support de la scalabilité de la Web-UI grâce à son système partage de cache distribué.

## Configurer HazelCast dans ARender

{{< tag type="code" title="arender-server.properties">}}

```cfg
# Defines the cache strategy to use. Valid values : ehCacheStrategy, hazelCastStrategy
arender.server.cache.strategy=ehCacheStrategy
# Path of the hazelCast configuration file, if the value is empty then the default one in the classpath will be used. 
arender.server.cache.hazelCast.config.path=
```


Le fichier de configuration par défaut pour Hazelcast se trouve côté Web-UI dans les ressources de l'application WEB au chemin *WEB-INF/classes/ressources/hazelcast.yaml*


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




Pour l'instant les connecteurs supportés par ARender n'ont pas encore subi les changements nécessaires pour faire supporter HazelCast.

Si vous avez implémenté votre propre connecteur, il faudra alors rendre votre DocumentAccessor correctement sérialisable/désérialisable.

