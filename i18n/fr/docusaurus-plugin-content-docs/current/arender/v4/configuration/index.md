---
title: "Configuration"
description: "Configuration ARender v4"
sidebar_position: 1
---

# Configuration ARender v4

Cette section décrit la configuration des différents composants d'ARender v4.

## Vue d'ensemble

ARender v4 se configure via des fichiers de propriétés et des paramètres système. La configuration se divise en deux parties principales :

- **Configuration Rendition** : Paramètres du serveur de rendu
- **Configuration Web-UI** : Paramètres de l'interface utilisateur

## Structure des configurations

```
config/
├── rendition/
│   ├── arender.properties
│   ├── log4j2.xml
│   └── connectors/
└── web-ui/
    ├── arender-hmi.properties
    ├── logback.xml
    └── themes/
```

## Configuration de base

### Fichier principal (arender.properties)

```properties
# Configuration serveur
server.port=8761
server.host=localhost

# Configuration stockage
storage.type=filesystem
storage.filesystem.path=/data/documents

# Configuration cache
cache.type=memory
cache.memory.maxSize=1000

# Configuration sécurité
security.enabled=true
security.cors.enabled=true
```

## Sections de configuration

- [Configuration Rendition](rendition/) - Paramètres du moteur de rendu
- [Configuration Web-UI](web-ui/) - Paramètres de l'interface utilisateur