---
title: "Obtain sharper images"
weight: 
draft: false
icon: mdi-knife
## search related keywords
keywords: ["tutorial", "images", "netteté" ]
---

Par défaut, les navigateurs internet lissent les images afin de rendre
les page web plus agréables à la consultation.

Si vous souhaitez retrouver un effet plus proche d'Adobe reader qui lui
ne lisse pas les images, il est désormais possible dans ARender de ne
pas activer ce lissage.

Le paramètre à changer est le suivant:

*visualization.images.sharpen* et le placer à *true* dans les profils
ARender.

{{< tabs id="1" tabs="Avant sharpen,Avec sharpening,Avec Adobe (approximativement au même niveau de zoom)">}}
[shortcode]
![image]([shortcode])
[shortcode]
[shortcode]
![image]([shortcode])
[shortcode]
[shortcode]
![image]([shortcode])
[shortcode]

On voit bien que le rendu sharpen est fidèle au rendu Adobe. Si vos
utilisateurs sont donc habitués à ce genre de rendus, vous pouvez songer
à activer le paramètre.
