---
title: "Installation"
description: "Installation moderne d'ARender v2025"
sidebar_position: 1
---

# Installation ARender v2025

ARender v2025 adopte une approche cloud-native moderne avec support natif de Kubernetes, Docker et déploiements distribués.

## Architecture cloud-native

ARender v2025 est conçu avec une architecture microservices :

```
┌─────────────────┐   ┌──────────────────┐   ┌─────────────────┐
│                 │   │                  │   │                 │
│   ARender       │   │   ARender        │   │   ARender       │
│   Gateway       │───│   Core           │───│   Analytics     │
│   (API & Auth)  │   │   (Rendering)    │   │   (Monitoring)  │
└─────────────────┘   └──────────────────┘   └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌──────────────────┐
                    │                  │
                    │   ARender        │
                    │   Storage        │
                    │   (Distributed)  │
                    └──────────────────┘
```

## Installation rapide avec Helm

### Prérequis
- Kubernetes 1.19+
- Helm 3.0+
- 8GB RAM minimum par nœud
- Support de stockage persistant

### Installation

```bash
# Ajouter le repository Helm
helm repo add arender https://charts.arender.io
helm repo update

# Installation avec valeurs par défaut
helm install arender arender/arender-v2025

# Installation avec configuration personnalisée
helm install arender arender/arender-v2025 -f values.yaml
```

## Installation Docker Compose

Pour les environnements de développement ou les déploiements simples :

```yaml
version: '3.8'
services:
  arender-gateway:
    image: arender/gateway:2025
    ports:
      - "8080:8080"
    environment:
      - CORE_URL=http://arender-core:8761
    
  arender-core:
    image: arender/core:2025
    ports:
      - "8761:8761"
    environment:
      - STORAGE_TYPE=filesystem
      - STORAGE_PATH=/data
    volumes:
      - ./data:/data
    
  arender-analytics:
    image: arender/analytics:2025
    ports:
      - "8762:8762"
    environment:
      - GATEWAY_URL=http://arender-gateway:8080
```

## Configuration cloud

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|---------|
| `ARENDER_STORAGE_TYPE` | Type de stockage (s3, gcs, azure) | `filesystem` |
| `ARENDER_AUTH_PROVIDER` | Provider d'authentification (oidc, jwt) | `internal` |
| `ARENDER_CACHE_TYPE` | Type de cache (redis, hazelcast) | `memory` |
| `ARENDER_MONITORING` | Activer monitoring (prometheus, jaeger) | `false` |

### Stockage cloud

#### AWS S3
```yaml
storage:
  type: s3
  s3:
    bucket: arender-documents
    region: eu-west-1
    accessKey: ${AWS_ACCESS_KEY}
    secretKey: ${AWS_SECRET_KEY}
```

#### Google Cloud Storage
```yaml
storage:
  type: gcs
  gcs:
    bucket: arender-documents
    projectId: my-project
    serviceAccount: ${GCS_SERVICE_ACCOUNT}
```

## Sécurité

### HTTPS/TLS
```yaml
gateway:
  tls:
    enabled: true
    certManager: true
    issuer: letsencrypt-prod
```

### Authentification OIDC
```yaml
auth:
  provider: oidc
  oidc:
    issuerUrl: https://auth.example.com
    clientId: arender
    clientSecret: ${OIDC_CLIENT_SECRET}
```

## Monitoring et observabilité

ARender v2025 inclut un support natif pour :

- **Metrics** : Prometheus/Grafana
- **Logs** : ELK Stack ou Loki
- **Tracing** : Jaeger ou Zipkin
- **Health checks** : Kubernetes probes

## Mise à l'échelle automatique

```yaml
autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilization: 70
  targetMemoryUtilization: 80
```

Pour un guide d'installation détaillé, consultez la documentation spécifique à votre environnement.