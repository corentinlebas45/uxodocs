---
title: Les classes
---

# A quoi ça sert ?

Une classe permet de définir un type ou une famille d'objet. 
Cette notion permet de faciliter la conception de solution basée sur FlowerDocs en permettant de définir une typologie d'objets pouvant être réutilisée dans un scope FlowerDocs.


# Les classes de tags

Les `tags` sont des métadonnées qui peuvent être définies sur un composant. Ils permettent de le caractériser et de le retrouver plus facilement grâce à des filtres sur ces tags.

<br/>
Les tags qu'il est possible de définir sur un composant sont déterminés par les classes de tags existantes. Ce type de classes permet d'assurer une cohérence des données stockées dans FlowerDocs. Typiquement le montant d'une facture `Amount` est un nombre décimal, chaque valorisation de ce tag sur un composant nécessitera que la valeur saisie soit un nombre décimal.

<br/>
FlowerDocs propose plusieurs types de valeurs pour un tag : 


* [Chaîne de caractères](broken-link.md) (ex : référence, contractant…) sur lequel un masque de validation (ou pattern) peut être défini
* [Nombre décimal](broken-link.md) (ex : montant, taxe…)
* [Nombre entier](broken-link.md) (ex : Nombre de pièces justificatives…)
* [Devise](broken-link.md)
* Booléen (Vrai/Faux)
* Utilisateur
* [Date](broken-link.md) (ex : date d’échéance, date d’entrée en vigueur…)
* [Liste de choix](broken-link.md) (ex : types de facture…)
* [Champ texte](broken-link.md) (ex : description, commentaire…)
* [Liste de valeurs conditionnées](broken-link.md)
* [Liste libre](broken-link.md)



:::info
Ajouter des tags à vos composants en [référençant une classe de tags](broken-link.md) au niveau d'une classe de composants.
:::


# Les classes de composants

Une classe de composants définit les caractéristiques communes d'un même ensemble logique de composants. Ces ensembles sont caractérisés par des [tags](broken-link.md) (ou métadonnées), une sécurité, des règles métiers ou techniques qui leurs sont propres.   


Cette partie définit la notion de classe de composants utilisée pour caractériser les composants (documents, dossiers, tâches...) manipulés au sein de l'application.
Ainsi tout composant référence une classe de composants via son identifiant.

<br/>
Une classe de composants permet de définir une typologie de composants : 

* les tags pouvants être associés à un composant
* la sécurité par défaut à appliquer via la définition d'un identifiant d'ACL à appliquer
* les catégories de tags afin de regrouper visuellement les tags au sein de blocs fonctionnels
* des libellés internationnalisés afin de fournir une application multilingue
* le caractère technique


*En fonction de la catégorie de la classe de composants, des spécifités peuvent être ajoutées.*  


# Associer un tag à un composant

Lorsqu'un tag est référencé sur une classe de composants, il est possible ensuite de le caractériser avec les paramètres suivants : 

* Obligatoire : indique si une valeur est obligatoire pour la valdiation
* Technique : indique si l'utilisateur a accès à ce tag 
* Lecture seule : indique si l'utilisateur peut modifier ou non la valeur du tag
* Multivalué : indique si le tag peut avoir plusieurs valeurs ou non
* La valeur par défaut : la valeur par défaut lorsque le tag n'est pas rempli (des variables peuvent être utilisées pour les dates comme ``${dayDate}``)
* Un masque de validation (expression régulière) : si défini, surcharge celui défini au niveau de la classe de tags
* L'ordre d'affichage
* Une description permettant d'afficher une infobulle




:::info
Ajouter des tags à vos composants en [référençant une classe de tags](broken-link.md) au niveau d'une classe de composants.
<br>
[ComponentClass](broken-link.md)      ---&rightarrow;      [TagReference](broken-link.md)     ---&rightarrow;      [TagClass](broken-link.md)
:::