---
title: "Surveillance"
draft: false
weight: 4
icon: mdi-pulse
keywords: [ "exploitation", "surveillance"]
---

### Etat du service

Le service, responsable de la rendition des documents, est à surveiller
afin de superviser un serveur de rendition.

Pour cela, il suffit de s’appuyer sur le statut du service pour vérifier
son état.

Selon les systèmes d’exploitation, l'identification du statut indiquant
le fonctionnement normal diffère :

[shortcode]
[shortcode]

```powershell
$> sc query ARenderRenditionService
```

Si le service est correctement démarré, cette commande doit retourner
l'état : State : 4 RUNNING
[shortcode]
[shortcode]

Si le système possède **systemd** comme composant d'initialisation de votre système:

```bash
$> systemctl status ARenderRenditionEngineService.service
```

Si **initd** est le composant d’initialisation de votre système, vous devrez lancer :

```bash
$> service ARenderRenditionEngineService status
```

Si le service est correctement démarré, cette commande doit retourner le
code : STARTED
[shortcode]
[shortcode]


### Système de monitoring

Depuis la version 4, ARender permet d'envoyer des journaux de performances à ElasticSearch et de visualiser les métriques sur le tableau de bord Kibana. 
Cela est intéréssant d'avoir les données de métriques d'un service mais nous ne devons pas nous restreindre à un système de monitoring. 
C'est pour cela que nous avons intégré Micrometer à ARender afin de faciliter les envoie de métriques sur différents système de monitoring.

Pour l'instant nous avons mis seulement ces systèmes de monitoring à disposition : Prometheus, Elasticsearch et Datadog.

Nous rajouterons par la suite, d'autres systèmes afin de ne pas être limiter à seulement ceux là.

#### Configuration du système de monitoring
##### Propriétés Web-UI Serveur

Vous trouverez ci-dessous la liste des propriétés par défaut.

[shortcode]
[shortcode]
```cfg
arender.server.metrics.tags.host=arender-hmi
arender.server.metrics.tags.application=arender

# Set the registry name to use to export metrics
# Possible value : prometheus, elastic, datadog
# Default to elastic
arender.server.meter.registry.name=elastic

# Prometheus configurations
arender.server.export.prometheus.enabled=false
arender.server.export.prometheus.descriptions=false
arender.server.export.prometheus.frequency.amount=1
arender.server.export.prometheus.frequency.unit=MINUTES

# Elastic configurations
arender.server.export.elastic.enabled=false
arender.server.export.elastic.host=http://localhost:9200
arender.server.export.elastic.index=arender-micrometer-metrics
arender.server.export.elastic.index-date-format=yyyy-MM
arender.server.export.elastic.timestamp-field-name=@timestamp
arender.server.export.elastic.auto-create-index=true
arender.server.export.elastic.user-name=
arender.server.export.elastic.password=
arender.server.export.elastic.frequency.amount=1
arender.server.export.elastic.frequency.unit=MINUTES

# Datadog configurations
arender.server.export.datadog.enabled=false
arender.server.export.datadog.api-key=
arender.server.export.datadog.application-key=
arender.server.export.datadog.descriptions=false
arender.server.export.datadog.host-tag=instance
arender.server.export.datadog.uri=https://app.datadoghq.com
arender.server.export.datadog.frequency.amount=1
arender.server.export.datadog.frequency.unit=MINUTES
```
[shortcode]

[shortcode]
```cfg
arender.server.metrics.tags.host=arender-hmi
arender.server.metrics.tags.application=arender

arender.server.metrics.process.enabled=true
arender.server.metrics.jvm.enabled=true
arender.server.metrics.system.enabled=true

# Set the registry name to use to export metrics
# Possible value : prometheus, elastic, datadog, cloudwatch
# Default to elastic
arender.server.meter.registry.name=elastic

# Prometheus configurations
arender.server.export.prometheus.enabled=false
arender.server.export.prometheus.descriptions=false
arender.server.export.prometheus.frequency.amount=5
arender.server.export.prometheus.frequency.unit=MINUTES

# Elastic configurations
arender.server.export.elastic.enabled=false
arender.server.export.elastic.host=http://localhost:9200
arender.server.export.elastic.index=arender-micrometer-metrics
arender.server.export.elastic.index-date-format=yyyy-MM
arender.server.export.elastic.timestamp-field-name=@timestamp
arender.server.export.elastic.auto-create-index=true
arender.server.export.elastic.user-name=
arender.server.export.elastic.password=
arender.server.export.elastic.frequency.amount=5
arender.server.export.elastic.frequency.unit=MINUTES

# Datadog configurations
arender.server.export.datadog.enabled=false
arender.server.export.datadog.api-key=
arender.server.export.datadog.application-key=
arender.server.export.datadog.descriptions=false
arender.server.export.datadog.host-tag=instance
arender.server.export.datadog.uri=https://app.datadoghq.com
arender.server.export.datadog.frequency.amount=5
arender.server.export.datadog.frequency.unit=MINUTES

# CloudWatch configurations
arender.server.export.cloudwatch.enabled=false
arender.server.export.cloudwatch.namespace=arenderHMI
arender.server.export.cloudwatch.region=eu-west-1
arender.server.export.cloudwatch.frequency.amount=5
arender.server.export.cloudwatch.frequency.unit=MINUTES
```
[shortcode]

[shortcode]
```cfg
arender.server.metrics.tags.host=arender-hmi
arender.server.metrics.tags.application=arender

arender.server.metrics.process.enabled=false
arender.server.metrics.jvm.enabled=false
arender.server.metrics.system.enabled=false

# Set the registry name to use to export metrics
# Possible value : prometheus, elastic, datadog, cloudwatch
# Default to elastic
arender.server.meter.registry.name=elastic

# Prometheus configurations
arender.server.export.prometheus.enabled=false
arender.server.export.prometheus.descriptions=false
arender.server.export.prometheus.frequency.amount=5
arender.server.export.prometheus.frequency.unit=MINUTES

# Elastic configurations
arender.server.export.elastic.enabled=false
arender.server.export.elastic.host=http://localhost:9200
arender.server.export.elastic.index=arender-micrometer-metrics
arender.server.export.elastic.index-date-format=yyyy-MM
arender.server.export.elastic.timestamp-field-name=@timestamp
arender.server.export.elastic.auto-create-index=true
arender.server.export.elastic.user-name=
arender.server.export.elastic.password=
arender.server.export.elastic.frequency.amount=5
arender.server.export.elastic.frequency.unit=MINUTES

# Datadog configurations
arender.server.export.datadog.enabled=false
arender.server.export.datadog.api-key=
arender.server.export.datadog.application-key=
arender.server.export.datadog.descriptions=false
arender.server.export.datadog.host-tag=instance
arender.server.export.datadog.uri=https://app.datadoghq.com
arender.server.export.datadog.frequency.amount=5
arender.server.export.datadog.frequency.unit=MINUTES

# CloudWatch configurations
arender.server.export.cloudwatch.enabled=false
arender.server.export.cloudwatch.namespace=arenderHMI
arender.server.export.cloudwatch.region=eu-west-1
arender.server.export.cloudwatch.frequency.amount=5
arender.server.export.cloudwatch.frequency.unit=MINUTES
```
[shortcode]

[shortcode]

##### Propriétés Rendition

Vous trouverez ci-dessous la liste des propriétés par défaut pour tous les services de la rendition permettant de configurer le système de monitoring.

Depuis la version 4.8.0 à 4.8.4 :

[shortcode]
[shortcode]
```cfg
management.metrics.tags.host=arender-broker
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99


# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=1m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=1m
management.metrics.export.datadog.uri=https://app.datadoghq.com/
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-taskconversion
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99


# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=1m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=1m
management.metrics.export.datadog.uri=https://app.datadoghq.com/
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-pdfbox
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99


# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=1m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=1m
management.metrics.export.datadog.uri=https://app.datadoghq.com/
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-jni
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99


# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=1m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=1m
management.metrics.export.datadog.uri=https://app.datadoghq.com/
```
[shortcode]
[shortcode]

Depuis la version 4.8.5 à 4.8.6 :

[shortcode]
[shortcode]
```cfg
management.metrics.tags.host=arender-broker
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=true
management.metrics.enable.process=true
management.metrics.enable.system=true

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=brokerNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-taskconversion
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=true
management.metrics.enable.process=true
management.metrics.enable.system=true

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=converterNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-pdfbox
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=true
management.metrics.enable.process=true
management.metrics.enable.system=true

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=pdfboxNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-jni
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=true
management.metrics.enable.process=true
management.metrics.enable.system=true

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=rendererNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]
[shortcode]

Depuis la version 4.8.7 :

[shortcode]
[shortcode]
```cfg
management.metrics.tags.host=arender-broker
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=false
management.metrics.enable.process=false
management.metrics.enable.system=false

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=brokerNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-taskconversion
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=false
management.metrics.enable.process=false
management.metrics.enable.system=false

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=converterNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-pdfbox
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=false
management.metrics.enable.process=false
management.metrics.enable.system=false

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=pdfboxNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]

[shortcode]
```cfg
management.metrics.tags.host=arender-jni
management.metrics.tags.application=arender
management.metrics.distribution.percentiles-histogram.http.server.requests=true
management.metrics.distribution.sla.http.server.requests=100ms, 400ms, 500ms, 2000ms
management.metrics.distribution.percentiles.http.server.requests=0.5, 0.9, 0.95, 0.99

management.metrics.enable.tomcat=false
management.metrics.enable.http=false
management.metrics.enable.logback=false
management.metrics.enable.jvm=false
management.metrics.enable.process=false
management.metrics.enable.system=false

# Prometheus monitoring system
management.endpoints.web.exposure.include=prometheus,metrics,health,shutdown
management.endpoint.prometheus.enabled=false
management.endpoint.metrics.enabled=true


# ElasticSearch monitoring system
management.metrics.export.elastic.enabled=false
management.metrics.export.elastic.step=5m
management.metrics.export.elastic.index=arender-micrometer-metrics
management.metrics.export.elastic.host=http://localhost:9200


# DataDog monitoring system
management.metrics.export.datadog.enabled=false
# Datadog API key
management.metrics.export.datadog.api-key=YOUR_KEY
# The step size to use (ie the reporting frequency).
management.metrics.export.datadog.step=5m
management.metrics.export.datadog.uri=https://app.datadoghq.com/


# CloudWatch monitoring system
management.metrics.export.cloudwatch.enabled=false
management.metrics.export.cloudwatch.namespace=rendererNameSpace
management.metrics.export.cloudwatch.step=5m
management.metrics.export.cloudwatch.batchSize=20
management.metrics.export.cloudwatch.region=eu-west-1
```
[shortcode]
[shortcode]

#### Configuration des métriques envoyées

ARender envoie plusieurs métriques différentes au système de monitoring. 
Pour éviter de surcharger le système avec les dizaines de métriques envoyés par ARender, 
des propriétés sont mis à disposition afin que vous puissiez activer/désactiver les métriques et les tags/dimensions dont vous en avez besoin.

##### Propriétés Web-UI Serveur

[shortcode]
[shortcode]
```cfg
# ARender endpoint export metric
arender.endpoint.metrics.export.has.document.enabled=false
arender.endpoint.metrics.export.bookmarks.enabled=false
arender.endpoint.metrics.export.document.layout.enabled=true
arender.endpoint.metrics.export.document.metadata.enabled=false
arender.endpoint.metrics.export.image.enabled=true
arender.endpoint.metrics.export.page.contents.enabled=false
arender.endpoint.metrics.export.search.enabled=false
arender.endpoint.metrics.export.advanced.search.enabled=false
arender.endpoint.metrics.export.load.document.enabled=true
arender.endpoint.metrics.export.evict.enabled=false
arender.endpoint.metrics.export.alter.document.enabled=true
arender.endpoint.metrics.export.document.accessor.enabled=true
arender.endpoint.metrics.export.annotation.enabled=false
arender.endpoint.metrics.export.compare.enabled=true
arender.endpoint.metrics.export.named.destination=false
arender.endpoint.metrics.export.video.enabled=true
arender.endpoint.metrics.export.document.size.enabled=true
arender.endpoint.metrics.export.document.dpi.enabled=false
arender.endpoint.metrics.export.weather.enabled=false
arender.endpoint.metrics.export.readiness.enabled=false
arender.endpoint.metrics.export.signature.enabled=false
arender.endpoint.metrics.export.printable.pdf.enabled=true

# Whitelist tags to be exported, comma separated
arender.endpoint.metrics.export.whitelist.tags=host,documentId,mimeType
```
[shortcode]

[shortcode]
```cfg
# ARender endpoint export metric
arender.endpoint.metrics.export.has.document.enabled=false
arender.endpoint.metrics.export.bookmarks.enabled=false
arender.endpoint.metrics.export.document.layout.enabled=true
arender.endpoint.metrics.export.document.metadata.enabled=false
arender.endpoint.metrics.export.image.enabled=true
arender.endpoint.metrics.export.page.contents.enabled=false
arender.endpoint.metrics.export.search.enabled=false
arender.endpoint.metrics.export.advanced.search.enabled=false
arender.endpoint.metrics.export.load.document.enabled=true
arender.endpoint.metrics.export.evict.enabled=false
arender.endpoint.metrics.export.alter.document.enabled=true
arender.endpoint.metrics.export.document.accessor.enabled=true
arender.endpoint.metrics.export.annotation.enabled=false
arender.endpoint.metrics.export.compare.enabled=true
arender.endpoint.metrics.export.named.destination=false
arender.endpoint.metrics.export.video.enabled=true
arender.endpoint.metrics.export.document.size.enabled=true
arender.endpoint.metrics.export.document.dpi.enabled=false
arender.endpoint.metrics.export.weather.enabled=false
arender.endpoint.metrics.export.readiness.enabled=false
arender.endpoint.metrics.export.signature.enabled=false
arender.endpoint.metrics.export.printable.pdf.enabled=true

# Whitelist tags to be exported, comma separated
arender.endpoint.metrics.export.whitelist.tags=host,mimeType

# Metric tool to time or count the request. Possible values : TIMER, COUNTER
arender.metric.meter.tool=COUNTER
```
[shortcode]

[shortcode]
```cfg
# ARender endpoint export metric
arender.endpoint.metrics.export.has.document.enabled=false
arender.endpoint.metrics.export.bookmarks.enabled=false
arender.endpoint.metrics.export.document.layout.enabled=false
arender.endpoint.metrics.export.document.metadata.enabled=false
arender.endpoint.metrics.export.image.enabled=false
arender.endpoint.metrics.export.page.contents.enabled=false
arender.endpoint.metrics.export.search.enabled=false
arender.endpoint.metrics.export.advanced.search.enabled=false
arender.endpoint.metrics.export.load.document.enabled=false
arender.endpoint.metrics.export.evict.enabled=false
arender.endpoint.metrics.export.alter.document.enabled=false
arender.endpoint.metrics.export.document.accessor.enabled=false
arender.endpoint.metrics.export.annotation.enabled=false
arender.endpoint.metrics.export.compare.enabled=false
arender.endpoint.metrics.export.named.destination=false
arender.endpoint.metrics.export.video.enabled=false
arender.endpoint.metrics.export.document.size.enabled=false
arender.endpoint.metrics.export.document.dpi.enabled=false
arender.endpoint.metrics.export.weather.enabled=false
arender.endpoint.metrics.export.readiness.enabled=false
arender.endpoint.metrics.export.signature.enabled=false
arender.endpoint.metrics.export.printable.pdf.enabled=false
arender.endpoint.metrics.export.opening.time.enabled=false
arender.endpoint.metrics.export.url.parsing.enabled=false

# Whitelist tags to be exported, comma separated
arender.endpoint.metrics.export.whitelist.tags=host,mimeType
# Blacklist tags to be exported from system meter (jvm, process, http, tomcat, etc)
arender.system.metrics.export.blacklist.tags=

# Metric tool to time or count the request. Possible values : TIMER, COUNTER
arender.metric.meter.tool=COUNTER
```
[shortcode]

[shortcode]

Vous trouverez plus bas, la liste des noms de métriques ainsi que les tags/dimensions envoyés, pouvant être utilisés pour "whitelister" les tags à envoyer.

##### Propriété Rendition

Vous trouverez ci-dessous la liste des propriétés permettant de désactiver les métriques ainsi que whitelister les tags à envoyer.

Note : Ce sont les mêmes propriétés pour chacune des services de la rendition.

[shortcode]
[shortcode]
```cfg
# ARender endpoint metrics export
arender.endpoint.metrics.export.has.document.enabled=false
arender.endpoint.metrics.export.bookmarks.enabled=false
arender.endpoint.metrics.export.document.layout.enabled=true
arender.endpoint.metrics.export.document.metadata.enabled=false
arender.endpoint.metrics.export.image.enabled=true
arender.endpoint.metrics.export.page.contents.enabled=false
arender.endpoint.metrics.export.search.enabled=false
arender.endpoint.metrics.export.advanced.search.enabled=false
arender.endpoint.metrics.export.load.document.enabled=true
arender.endpoint.metrics.export.evict.enabled=false
arender.endpoint.metrics.export.alter.document.enabled=true
arender.endpoint.metrics.export.document.accessor.enabled=true
arender.endpoint.metrics.export.annotation.enabled=false
arender.endpoint.metrics.export.compare.enabled=true
arender.endpoint.metrics.export.named.destination=false
arender.endpoint.metrics.export.video.enabled=true
arender.endpoint.metrics.export.document.size.enabled=true
arender.endpoint.metrics.export.document.dpi.enabled=false
arender.endpoint.metrics.export.weather.enabled=false
arender.endpoint.metrics.export.readiness.enabled=false
arender.endpoint.metrics.export.signature.enabled=false
arender.endpoint.metrics.export.printable.pdf.enabled=true
arender.endpoint.metrics.export.convert.enabled=true
arender.endpoint.metrics.export.health.record.enabled=false

# Whitelist tags to be exported, comma separated
arender.endpoint.metrics.export.whitelist.tags=host,documentId,mimeType
```
[shortcode]

[shortcode]
```cfg
# ARender endpoint metrics export
arender.endpoint.metrics.export.has.document.enabled=false
arender.endpoint.metrics.export.bookmarks.enabled=false
arender.endpoint.metrics.export.document.layout.enabled=true
arender.endpoint.metrics.export.document.metadata.enabled=false
arender.endpoint.metrics.export.image.enabled=true
arender.endpoint.metrics.export.page.contents.enabled=false
arender.endpoint.metrics.export.search.enabled=false
arender.endpoint.metrics.export.advanced.search.enabled=false
arender.endpoint.metrics.export.load.document.enabled=true
arender.endpoint.metrics.export.evict.enabled=false
arender.endpoint.metrics.export.alter.document.enabled=true
arender.endpoint.metrics.export.document.accessor.enabled=true
arender.endpoint.metrics.export.annotation.enabled=false
arender.endpoint.metrics.export.compare.enabled=true
arender.endpoint.metrics.export.named.destination=false
arender.endpoint.metrics.export.video.enabled=true
arender.endpoint.metrics.export.document.size.enabled=true
arender.endpoint.metrics.export.document.dpi.enabled=false
arender.endpoint.metrics.export.weather.enabled=false
arender.endpoint.metrics.export.readiness.enabled=false
arender.endpoint.metrics.export.signature.enabled=false
arender.endpoint.metrics.export.printable.pdf.enabled=true
arender.endpoint.metrics.export.convert.enabled=true
arender.endpoint.metrics.export.health.record.enabled=false

# Whitelist tags to be exported, comma separated
arender.endpoint.metrics.export.whitelist.tags=host,mimeType
arender.endpoint.metrics.export.correlation.id.tag.enabled=false

# Metric tool to time or count the request. Possible values : TIMER, COUNTER
arender.metric.meter.tool=COUNTER
```
[shortcode]

[shortcode]
```cfg
# ARender endpoint metrics export
arender.endpoint.metrics.export.has.document.enabled=false
arender.endpoint.metrics.export.bookmarks.enabled=false
arender.endpoint.metrics.export.document.layout.enabled=false
arender.endpoint.metrics.export.document.metadata.enabled=false
arender.endpoint.metrics.export.image.enabled=false
arender.endpoint.metrics.export.page.contents.enabled=false
arender.endpoint.metrics.export.search.enabled=false
arender.endpoint.metrics.export.advanced.search.enabled=false
arender.endpoint.metrics.export.load.document.enabled=false
arender.endpoint.metrics.export.evict.enabled=false
arender.endpoint.metrics.export.alter.document.enabled=false
arender.endpoint.metrics.export.document.accessor.enabled=false
arender.endpoint.metrics.export.annotation.enabled=false
arender.endpoint.metrics.export.compare.enabled=false
arender.endpoint.metrics.export.named.destination=false
arender.endpoint.metrics.export.video.enabled=false
arender.endpoint.metrics.export.document.size.enabled=false
arender.endpoint.metrics.export.document.dpi.enabled=false
arender.endpoint.metrics.export.weather.enabled=false
arender.endpoint.metrics.export.readiness.enabled=false
arender.endpoint.metrics.export.signature.enabled=false
arender.endpoint.metrics.export.printable.pdf.enabled=false
arender.endpoint.metrics.export.convert.enabled=false
arender.endpoint.metrics.export.health.record.enabled=false

# Whitelist tags to be exported, comma separated
arender.endpoint.metrics.export.whitelist.tags=host,mimeType
arender.endpoint.metrics.export.correlation.id.tag.enabled=false

# Metric tool to time or count the request. Possible values : TIMER, COUNTER
arender.metric.meter.tool=COUNTER
```
[shortcode]

[shortcode]


#### Cache metrics

Depuis la version 4.8.15, ARender surveille également son utilisation du cache interne (Hazelcast/Ehcache).

Pour activer l'exportation des métriques du cache, certaines configurations sont nécessaires.

Pour le composant Rendition, vous devrez activer la propriété suivante dans le microservice Broker :

[shortcode]

```cfg
management.metrics.export.hazelcast.enabled=true
```

[shortcode]

Pour le composant Web-UI, vous devrez activer la propriété suivante :

[shortcode]

```cfg
arender.server.cache.export.enabled=true
```

[shortcode]


#### Liste de toutes les métriques

Vous trouverez ci-dessous la liste de toutes les métriques envoyées au système de monitoring configuré :

| Nom                                                  | Tags / Dimensions                                                        |
|------------------------------------------------------|--------------------------------------------------------------------------|
| arender.notify.opening.times (de 4.8.0 à 4.8.5)      | documentId, moduleLoadingTime, documentLoadingTime                       |
| arender.document.opening (depuis 4.8.5)              | documentId, mimeType                                                     |
| arender.document.opening.time (depuis 4.8.5)         | documentId, mimeType                                                     |
| arender.application.opening.time (depuis 4.8.5)      | documentId, mimeType                                                     |
| arender.document.has                                 | documentId                                                               |
| arender.document.evict                               | documentId                                                               |
| arender.document.accessor                            | documentId, selector                                                     |
| arender.document.accessor.content                    | documentId, selector                                                     |
| arender.document.accessor.content.raw                | documentId, selector                                                     |
| arender.document.accessor.load                       |                                                                          |
| arender.document.accessor.load.url                   |                                                                          |
| arender.document.load                                |                                                                          |
| arender.document.bookmarks                           | documentId                                                               |
| arender.document.signatures                          | documentId                                                               |
| arender.document.layout                              | documentId, mimeType, pageCount, documentWidth, documentHeight, duration |
| arender.document.layout.progressive.update           | documentId                                                               |
| arender.document.metadata                            | documentId                                                               |
| arender.document.page.contents                       | documentId, page                                                         |
| arender.document.image                               | documentId, page, pageDescription, pageWidth, pageRotation               |
| arender.document.image.svg                           | documentId, page, pageDescription, pageWidth, pageRotation               |
| arender.document.alter                               |                                                                          |
| arender.document.search.page                         | documentId, page                                                         |
| arender.document.search.pages                        | documentId                                                               |
| arender.document.advanced.search                     | documentId                                                               |
| arender.document.advanced.search.page                | documentId, page                                                         |
| arender.document.start.partial.loading               | documentId, mimeType, documentTitle, contentSize                         |
| arender.document.continue.partial.loading            | documentId, offset, finished                                             |
| arender.document.compare                             | documentIdLeft, documentIdRight                                          |
| arender.document.compare.image                       | documentIdLeft, documentIdRight                                          |
| arender.document.named.destinations                  | documentId                                                               |
| arender.document.create.printable.pdf                | documentId                                                               |
| arender.document.upload                              | documentId, mimeType, documentTitle                                      |
| arender.document.size                                | documentId, selector                                                     |
| arender.document.page.dpi                            | documentId, page                                                         |
| arender.annotation.accessor                          | documentId                                                               |
| arender.annotation.extract                           | documentId, formatType                                                   |
| arender.annotation.convert.stamps                    | documentId                                                               |
| arender.annotation.generate                          | documentId, formatType                                                   |
| arender.annotation.generate.pdf.with.fdf.annotations | documentId                                                               |
| arender.annotation.search.text                       | documentId                                                               |
| arender.annotation.creation.policy                   | documentId                                                               |
| arender.annotation.update                            | documentId                                                               |
| arender.annotation.delete                            | documentId                                                               |
| arender.annotation.create                            | documentId                                                               |
| arender.annotation.get                               | documentId                                                               |
| arender.video.chunk                                  | documentId, start, length                                                |
| arender.weather                                      |                                                                          |
| arender.health.readiness                             |                                                                          |

Toutes ces propriétés ont des tags/dimensions en communs : exceptionClass, exceptionMessage, host et correlationId.
Les tags **exceptionClass** et **exceptionMessage** ne sont ajoutés aux métriques que s'ils ne sont pas vide ou null.

#### Exemples

##### Prometheus

Pour activer l'envoie des métriques côté Web-UI, il suffit, tout d'abord d'indiquer le registry souhaité parmi les 3 registry possibles : prometheus, elastic et datadog.
Puis d'activer l'export sur le système de monitoring souhaité.

Ici, nous utiliserons Prometheus.

[shortcode]

```cfg
arender.server.meter.registry.name=prometheus
arender.server.export.prometheus.enabled=true
```

[shortcode]

Ensuite, il faudra indiquer dans la configuration du serveur Prometheus le end point sur lequel il doit récupérer les métriques. 
Les métriques de Prometheus côté Web-UI sont exposé sur le end point /arendergwt/prometheus ainsi que le host/port sur lequel est déployé ARender Web-UI. 
Vous devriez avoir quelque chose de similaire à cette configuration ci-dessous :

{{< tag type="code" title="<PROMETHEUS_SERVER_PATH>/prometheus.yaml" >}}

```cfg
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.
    metrics_path: '/arendergwt/prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:8080"]
```

[shortcode]

Par ailleurs, pour la partie rendition, il suffit d'activer l'export des métriques sur Prometheus sur chacune des services de rendition.

[shortcode]

```cfg
management.endpoint.prometheus.enabled=true
```

[shortcode]

De la même manière que la partie Web-UI, il faut également indiquer le end point sur lequel les métriques sont exposés. Côté rendition, cela exposé sur le end point /actuator/prometheus.

[shortcode]
[shortcode]
```cfg
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.
    metrics_path: '/actuator/prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:8761"]
```
[shortcode]

[shortcode]
```cfg
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.
    metrics_path: '/actuator/prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:19999"]
```
[shortcode]

[shortcode]
```cfg
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.
    metrics_path: '/actuator/prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:8899"]
```
[shortcode]

[shortcode]
```cfg
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.
    metrics_path: '/actuator/prometheus'
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9091"]
```
[shortcode]
[shortcode]