---
title: "Architecture dans IBM Filenet"
draft: false
weight: 2
type: docs
icon: mdi-wrench-outline
related:
    - name : "Installation avec Filenet"
      rel: '/content/installation/standalone/web-ui/filenet/_index.fr.md'
---

![image]([shortcode])

* **N1: Filenet UI**: a la responsabilité de laisser l'utilisateur de Filenet choisir quel document il veut ouvrir dans ARender,
* **N2: Browser**: va créer la "frame" d'ARender en utilisant l'URL fourni par N1,
* **N3: ARender WEB-UI**: est un serveur d'application qui contient ARender WEB-UI et le connecteur FileNet,
* **N4: Filenet Backend**: contient une API avec laquelle le connecteur ARender va interagir pour aller chercher les documents 
(et si besoin les annotations, les métadonnées ou les nouvelles versions de documents),
* **N5: ARender Rendition**: va générer des images, extraire du texte et plus.