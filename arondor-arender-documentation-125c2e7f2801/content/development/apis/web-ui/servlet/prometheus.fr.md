---
title: "Métriques avec prometheus"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutorial", "métrique", "prometheus"]
related:
    - name : "Service monitoring"
      rel: '/guides/exploitation/metrics/_index.fr.md'
---

Une nouvelle servlet est déployée permettant d'afficher les métriques générer par Prometheus.

Pour configurer le système de monitoring Prometheus : [configurer](broken-link.md))

## Requête 

Cette fonctionnalité est accessible via la servlet : **prometheusMetricsServlet**

La requête est utilisable uniquement en GET


### Exemple d'utilisation

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/prometheus'
```


## Réponse de la servlet

Une page HTML est affichée avec les différentes métriques générées par le service Prometheus.