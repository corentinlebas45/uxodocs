---
title: "Intégration avancée"
weight: 3
draft: false
icon: mdi-plus-box-multiple-outline
### search related keywords
keywords: ["quickstart", "integration"]
---

## Personnalisation ARender

Par défaut, ARender expose un sous-ensemble de fonctionnalités pour
annoter, parcourir des documents, télécharger de nouveaux documents,
etc.

Il est probable que ce sous-ensemble ne conviendra pas parfaitement à
vos besoins. Si c'est le cas, il y a deux options pour vous.

### Profils ARender

Les profils ARender sont une logique de configuration côté serveur
frontal qui est ensuite propagée à chaque utilisateur final.

Un profil définit un ensemble de propriétés personnalisant l'apparence
par défaut d'ARender, voire modifie le comportement de certaines
fonctionnalités.

ARender a toujours un profil par défaut, nommé en conséquence
arender-default. Celui-ci ne peut pas être modifié.

ARender a toujours un profil vide, nommé arender. Celui-ci peut être
modifié et chaque propriété remplacée dans ce profil remplacera celle de
l'arender-default.

Pour changer de profil, appelez simplement ARender avec un paramètre
d'URL supplémentaire: "?props=<nom\_profil\>". Les profils peuvent être
placés n'importe où dans le *classpath* de votre serveur d'applications
Web.

Une documentation complète de toutes les propriétés des profils ARender
est disponible dans la documentation en ligne.

### Personnalisation JavaScript ARender

ARender peut exécuter un fichier JavaScript personnalisé pendant le
temps de chargement de l'application pour fournir une référence à l'API
JavaScript ARender au code client.

Une fois que votre programme a cette référence, vous pouvez
masquer/afficher les boutons (en utilisant la méthode changeConfigurableElement),
vous pouvez ouvrir/fermer des documents, ouvrir/fermer certains panneaux de
l'interface ARender, etc.

Veuillez vous reporter à la documentation complète de l'API JavaScript
pour obtenir plus de détails sur ce sujet.
