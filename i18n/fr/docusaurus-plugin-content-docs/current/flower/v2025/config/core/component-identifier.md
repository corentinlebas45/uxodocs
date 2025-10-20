---
title: Identifiants de composant
---

# Identifiants de composant

Par défaut, les identifiants des composants sont générés, à leur création, au format UUID (2^128).

Lors de l'injection de composant via WS, les identifiants fournis en entrée sont, par défaut, surchargés au profit d'UUID générés par FlowerDocs Core. Ce comportement peut être modifié en ajoutant la propriété ``id.generate.force`` avec la valeur ``false``.

Cette propriété permet ainsi de forcer l'utilisation par FlowerDocs Core des identifiants fournis en entrée (par exemple par un SI métier). Ce cas peut s'avérer utile lors de migration / reprise de données.



FlowerDocs permet la génération de deux types d'identifiants différents : 

* UUID (par défaut)
* Numérique (déconseillé pour les environnements de production)

Pour changer la configuration par défaut, il faut définir la propriété ``id.generate.type`` avec la valeur ``UUID`` ou ``Numeric``.