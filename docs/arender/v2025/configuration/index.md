---
title: "Configuration"
description: "Configuration ARender v2025"
sidebar_position: 1
---

# Configuration ARender v2025

ARender v2025 adopte une approche de configuration moderne basée sur des fichiers YAML et des variables d'environnement.

## Configuration par environnement

### Développement
```yaml
arender:
  mode: development
  debug: true
  storage:
    type: filesystem
    path: ./data
```

### Production
```yaml
arender:
  mode: production
  debug: false
  storage:
    type: s3
    bucket: arender-prod
```

## Configuration complète

Configuration détaillée des microservices ARender v2025.