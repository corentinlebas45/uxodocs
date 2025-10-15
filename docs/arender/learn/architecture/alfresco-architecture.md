---
title: "Architecture dans Alfresco"
draft: false
weight: 2
type: docs
icon: mdi-wrench-outline
related:
    - name : "Installation avec Alfresco"
      rel: '/content/installation/standalone/web-ui/alfresco/_index.fr.md'
---

![image]([shortcode])

* **N1: Alfresco UI**: a la responsabilité de laisser l'utilisateur d'Alfresco choisir quel document il veut ouvrir dans ARender,
* **N2: Browser**: va créer la "frame" d'ARender en utilisant l'URL fourni par N1,
* **N3: ARender WEB-UI**: est un module Spring Boot qui contient le connecteur d'Alfresco,
* **N4: Alfresco Backend**: contient une API avec laquelle le connecteur ARender va interagir pour aller chercher les documents 
(et si besoin les annotations, les métadonnées ou les nouvelles versions de documents),
* **N5: ARender Rendition**: va générer des images, extraire du texte et plus.


{{< tag type="warning">}}

```
Le port de votre GED doit être différent du port d'ARender WEB-UI.
```

[shortcode]