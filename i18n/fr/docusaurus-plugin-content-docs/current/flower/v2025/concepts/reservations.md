---
title: Réservations
---

:::info
Une réservation permet de s'approprier temporairement l'accès en écriture d'un composant dans l'interface graphique afin d'éviter les modifications concurrentes.
:::


Un composant est réservé lorsqu'il est ouvert en lecture / écriture par un utilisateur de l'interface graphique.
Si un composant réservé est ouvert par un autre utilisateur, le formulaire est affiché en lecture seule.


Les réservations sont automatiquement supprimées lorsque : 

* l'utilisateur quitte l'écran depuis lequel le composant a été réservé (via une action ou la fermeture de son navigateur)
* sa session expire
* l'utilisateur se déconnecte

Depuis l'interface graphique, les réservations de l'utilisateur courant peuvent être consultées grâce à : 

GET /rest/session/reservations