---
date: "2002-03-28T13:20:01+02:00"
title: "Délégations"
---

Cette fonctionnalité permet aux utilisateurs de déléguer leur travail durant une absence.


# Principe

Une délégation est définie par :

- l'utilisateur absent
- l'utilisateur qui le remplace
- la période des congés
- une description (optionnelle)

Tous les utilisateurs accèdent à la fonctionnalité de délégation via le menu Avatar et peuvent créer des délégations. Ils accèdent également aux délégations qui leur sont données.

En complément, les administrateurs ayant l'équipe `DELEGATION_MANAGER`  peuvent également créer/modifier/supprimer des délégations via l'interface d'administration.

# Fonctionnement

Durant la période définie, les habilitations de la personne absente sont ajoutées à la personne déléguée :

- accès aux recherches et aux menus
- accès aux tâches et aux documents

Tout ceci est nécessaire afin de lui permettre de réaliser le travail de la personne absente et ce même si celle-ci ne dispose par des droits nécessaires en temps normal.

Dans l'historique, c'est toujours l'utilisateur ayant réellement réalisé l'action qui est enregistré.

:::warning
Si un utilisateur administrateur délègue à un utilisateur non administrateur, ce dernier accèdera à l'interface d'administration durant cette période.
:::
