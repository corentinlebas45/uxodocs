---
title: "Activer la connexion SSL"
weight: 
draft: false
icon: mdi-lock-check
## search related keywords
keywords: ["tutorial", "https"]
---

Pour pouvoir utiliser une connexion sécurisée vers la rendition depuis
ARender, vous devrez modifier certains paramètres sur le serveur de
rendition et le serveur ARender.

{{< tag type="warning">}}
**Vous ne pourrez pas utiliser la connexion en http et en
https en même temps.**
[shortcode]

## Du côté ARender

Ajouter les lignes suivantes dans votre fichier :

[shortcode]

```cfg
arender.server.rendition.hosts=https://NOM_HÔTE_RENDITION_:PORT_RENDITION/
arender.rest.ssl.custom.use=true
```

[shortcode]

## Du côté Rendition

Copier les fichiers se trouvant dans
"*VOTRE_DOSSIER_RENDITION/secure-mode-properties/*" vers le dossier
modules, afin d'écraser l'existant.
