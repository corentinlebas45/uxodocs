---
title: "APIs"
description: "APIs ARender v4"
sidebar_position: 1
---

# APIs ARender v4

ARender v4 expose plusieurs APIs pour l'intégration avec vos applications.

## Types d'APIs disponibles

### JavaScript API
API côté client pour intégrer ARender dans vos applications web.

**Fonctionnalités :**
- Contrôle de la visualisation
- Gestion des annotations
- Événements personnalisés
- Thèmes et personnalisation

### Rendition API  
API REST côté serveur pour la gestion des documents et rendus.

**Fonctionnalités :**
- Upload de documents
- Génération de rendus
- Gestion des métadonnées
- Conversion de formats

### Web-UI API
API pour personnaliser l'interface utilisateur.

**Fonctionnalités :**
- Configuration de l'interface
- Gestion des utilisateurs
- Thèmes personnalisés
- Plugins

## Authentification

Toutes les APIs utilisent une authentification basée sur tokens :

```javascript
// Configuration du token
ARenderJS.setAuthToken('your-api-token');
```

## Exemples d'utilisation

### Ouverture d'un document
```javascript
ARenderJS.openDocument({
  url: 'https://example.com/document.pdf',
  title: 'Mon document'
});
```

### Gestion des événements
```javascript
ARenderJS.on('document.loaded', function(event) {
  console.log('Document chargé:', event.document);
});
```

Pour plus de détails, consultez les sections spécifiques :