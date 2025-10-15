---
title: "Installation"
description: "Guide d'installation ARender v4"
sidebar_position: 1
---

# Installation ARender v4

ARender peut être déployé de plusieurs façons selon votre environnement et vos besoins.

## Types d'installation

### Standalone
Installation classique sur serveur d'application Java (Tomcat, JBoss, etc.)

**Avantages :**
- Configuration flexible
- Contrôle total de l'environnement
- Intégration facile avec l'existant

**Inconvénients :**
- Configuration plus complexe
- Gestion des dépendances manuelle

### Docker
Déploiement via conteneurs Docker pour une installation simplifiée.

**Avantages :**
- Déploiement rapide
- Isolation des environnements
- Scalabilité facile

**Inconvénients :**
- Nécessite Docker
- Moins de flexibilité de configuration

### Kubernetes
Déploiement sur cluster Kubernetes pour les environnements cloud-native.

**Avantages :**
- Haute disponibilité
- Auto-scaling
- Gestion automatique des ressources

**Inconvénients :**
- Complexité de configuration
- Nécessite expertise Kubernetes

## Prérequis généraux

### Système
- **OS** : Linux, Windows Server, macOS
- **Java** : OpenJDK/Oracle JDK 8 ou supérieur
- **Mémoire** : Minimum 4GB RAM (8GB recommandé)
- **Processeur** : 2 vCPU minimum (4 vCPU recommandé)

### Réseau
- **Ports** : 8080 (Web-UI), 8761 (Rendition)
- **Protocoles** : HTTP/HTTPS
- **Bande passante** : Selon le volume de documents

### Base de données (optionnelle)
- PostgreSQL 9.6+
- MySQL 5.7+
- Oracle 11g+
- SQL Server 2014+

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│                 │    │                  │    │                 │
│   Client Web    │────│   ARender        │────│   ARender       │
│   (Browser)     │    │   Web-UI         │    │   Rendition     │
│                 │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                               │                         │
                               │                         │
                       ┌───────────────┐       ┌─────────────────┐
                       │               │       │                 │
                       │  Base de      │       │   Stockage      │
                       │  données      │       │   Documents     │
                       │  (optionnel)  │       │                 │
                       └───────────────┘       └─────────────────┘
```

## Choix du type d'installation

- **Développement/Test** : Docker recommandé
- **Production simple** : Standalone recommandé  
- **Production haute disponibilité** : Kubernetes recommandé
- **Intégration existante** : Standalone recommandé

Consultez les guides spécifiques pour chaque type d'installation :