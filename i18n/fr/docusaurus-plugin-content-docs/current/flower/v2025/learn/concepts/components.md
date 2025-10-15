+++
title = "Les composants"
date = "2000-02-01"
+++


Les objets manipulés à travers l'interface et les APIs sont les [composants](/javadocs/domain/com/flower/docs/domain/component/Component.html). Chaque composant est classifié en fonction de critères métiers ou techniques grâce à une [classe de composants](broken-link.md).

:::info
Découvrez les différentes catégories de composants : 

* [Les documents](broken-link.md)
* [Les dossiers](broken-link.md)
* [Les dossiers virtuels](broken-link.md)
* [Les tâches](broken-link.md)

:::


# Les classes de composants
Une classe de composants définit les caractéristiques communes d’un même ensemble logique de composants. Ces ensembles sont caractérisés par des tags (ou métadonnées), une sécurité, des règles métiers ou techniques qui leurs sont propres.

Cette partie définit la notion de classe de composants utilisée pour caractériser les composants (documents, dossiers, tâches…) manipulés au sein de l’application. Ainsi tout composant référence une classe de composants via son identifiant.

# Associer un tag à un composant

Lorsqu'un tag est référencé sur une classe de composants, il est possible ensuite de le caractériser avec les paramètres suivants : 

* Obligatoire : indique si une valeur est obligatoire pour la validation
* Technique : indique si l'utilisateur a accès à ce tag 
* Lecture seule : indique l'utilisateur peut modifier ou non la valeur du tag
* Multivalué : indique si le tag peut avoir plusieurs valeurs ou non
* Valeur par défaut : la valeur par défaut lorsque le tag n'est pas rempli (des variables peuvent être utilisées pour les dates comme ```${dayDate}``)
* Un masque de validation (expression régulière) : si défini, surcharge celui défini au niveau de la classe de tags
* Ordre d'affichage
* Une description permettant d'afficher une infobulle

## En pratique
Chaque utilisateur de FlowerDocs peut créer un ou plusieurs composants en fonction de ses besoins, par exemple :

* Créer un ou plusieurs documents.
* Créer des dossiers et ranger les documents dans ces dossiers.
* Créer des tâches pour ses propres besoins, et/ou les assigner à ses collaborateurs.