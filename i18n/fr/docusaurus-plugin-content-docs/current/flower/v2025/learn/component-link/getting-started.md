---
title: Getting Started
---

# Objectif

Quand vous aurez terminé ce module de formation, vous pourrez lier un composant à un autre en utilisant le plugin `LinkFreeListPlugin`.

# Un exemple en pratique

L'exemple de ce module est basé sur la déposition de candidature pour une offre d'emploi. Pour la gestion de la candidature, il est important que la candidature référence l'offre d'emploi pour pouvoir déterminer l'objet de la candidature.

<br/>
L'utilisation de ce plugin va permettre, à partir d'une liste de valeurs (tag de type `FREE_LIST`) de :

* parcourir l'ensemble des offres d'emploi afin de sélectionner celle correspondante,
* accéder à n'importe quel moment à l'offre d'emploi référencée à travers une icône.



# Modèle de données

Afin de mettre en pratique l'exemple, le modèle suivant est nécessaire.

## L'offre d'emploi

Point de départ de cet exemple, l'offre d'emploi est une tâche de classe `JobOffer` disposant des tags obligatoires suivants : 

* `RH_Service` : liste des services concernés
* `RH_Job` : liste des types de poste


## La candidature

La candidature est une tâche de classe `ApplicationSubmission` avec le tag `RH_OfferLink` de type `Lookup` permettant de stocker le lien vers l'offre d'emploi à laquelle le candidat postule.