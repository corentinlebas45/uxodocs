+++
date = "2025-09-05T08:10:01+02:00"
title = "FlowerDocs 2025.2.0 Release notes"
tags = ["release-note"]
banner = "img/banner/edit.png"
 
+++


<br>

**Légende**


<br>

# Vue d’ensemble

FlowerDocs **2025.2.0** améliore l’expérience des rapports grâce à une utilisation plus intuitive et renforce les capacités d’intégration avec l’arrivée d’un client Java REST dédié. Conçu pour simplifier et accélérer les intégrations aux API, ce nouveau client s’accompagne de la dépréciation officielle de l’API SOAP. Cette version inclut également des correctifs et des améliorations de sécurité (CVE), renforçant la stabilité et la fiabilité en production.


# Upgrade Notes

Vous pouvez prendre connaissance des principales modifications techniques apportées à cette version en consultant les notes de mise à jour [ici](broken-link.md)

# Pour les utilisateurs


La version **2025.2.0** apporte plusieurs évolutions pour rendre l’usage des rapports plus clair et plus pratique.

L’action `Créer votre dashlet` a été renommée en `Créer votre rapport` pour une meilleure compréhension.

Les rapports peuvent désormais être affichés en plein écran afin d’offrir une lisibilité optimale. Enfin, lorsqu’un utilisateur clique sur le titre de l’un de ses rapports personnels, il est automatiquement redirigé vers l’écran de recherche permettant de construire ce rapport, ce qui facilite l’accès aux informations.

Ces évolutions constituent une première étape : **d’autres améliorations sur les rapports sont prévues dans les prochaines versions** afin de continuer à enrichir l’expérience utilisateur.

Nous invitons nos utilisateurs à **partager leurs cas d’usage, besoins ou idées, et à voter sur notre [portail produit](https://portal.productboard.com/xm7hyfq2qsh4iq5go1hqbc7g)** pour nous aider à orienter les prochaines évolutions.
{{< img src="/img/release-notes/DashletTitreAccessRecherche.gif">}}


Cette nouvelle version de la visionneuse permet de bénéficier d’un renforcement de la sécurité suite à la correction de plusieurs CVE.


L'écran de création ou de mise à jour d'un utilisateur met clairement en évidence tous les champs obligatoires. Le bouton "Créer" ou "Enregistrer" reste inactif tant que tous les champs obligatoires n'ont pas été remplis.
{{< img class="blog-post-img-auto" src="/img/release-notes/GestionUtilisateur_FR.png">}}


L'écran de création ou de mise à jour d'un groupe met clairement en évidence tous les champs obligatoires. Le bouton "Créer" ou "Enregistrer" reste inactif tant que tous les champs obligatoires n'ont pas été remplis.
{{< img class="blog-post-img-auto" src="/img/release-notes/GestionGroupe_FR.png">}}


# Pour les intégrateurs


A partir de cette version **2025.2.0**, FlowerDocs introduit une **bibliothèque cliente Java dédiée** pour faciliter et accélérer l’intégration avec nos API REST. Ce client fournit des modèles typés, des méthodes utilitaires ainsi qu’une gestion centralisée de l’authentification et des erreurs. Il améliore nettement l’expérience développeur, réduit les efforts de maintenance lors des évolutions de l’API et garantit un usage cohérent à travers les différents projets.

En comparaison de SOAP, le REST est **plus léger, plus standardisé et largement adopté par les écosystèmes modernes**. Il s’intègre plus facilement avec des frameworks actuels, permet des échanges plus rapides grâce à des formats simples comme JSON, et réduit la complexité technique des intégrations.

Idéal pour les partenaires et intégrateurs développant des middleware ou des automatisations sur mesure, ce client REST accélère le temps d’intégration tout en offrant une base standardisée et fiable.

:::info
À partir de cette version, **l’API SOAP ainsi que le client Java associé sont dépréciés**. Nous recommandons à nos partenaires et clients de planifier leur migration vers le client Java REST pour bénéficier de toutes les améliorations disponibles, en suivant l’upgrade notes [ici](broken-link.md)
:::


Des nouveaux endpoints REST sont disponibles:

* pour créer ou récupérer les annotation au format json à la place du format XFDF afin de faciliter ces actions via APIs  
* pour manipuler les réservations en fournissant une liste de références de composant  
* pour récupérer un token portant une date d’expiration

Voir le détails dans l’upgrade notes: [ici](broken-link.md)


Pour visualiser l’ensemble des groupes auxquels un utilisateur est habilité même si ceux-ci sont imbriqués dans l’annuaire il faut activer la propriété user.groups.resolve-recursively=true dans le fichier de propriétés: core.properties.
Il n’est pas plus possible d’activer via l’IHM d’administration.


# Pour les exploitants


Plusieurs CVE ont été corrigées dans cette version. Les détails sont volontairement omis pour éviter toute exploitation.


# Bug fixes

| Bug | Ticket support |
| :---- | :---- |
| **Utilisateurs** |  |
| Administration \- Dans un groupe, il est possible d’ajouter deux utilisateurs ayant un identifiant similaire | TMAFLW-960 |
| Administration \- Lors de la modification d’une équipe, ajout ou suppression d’un utilisateur, d’un groupe celle-ci est prise en compte qu’après avoir cliquer sur “Sauvegarder”.  Si l’administrateur souhaite annuler ces modifications, alors il peut le faire en cliquant sur le bouton “Annuler” | TMAFLW-342 |
| Le ratio par défaut entre le panel d’indexation et le panel de la visionneuse a été revu pour les écrans de 14’” afin de bénéficier d’un affichage plus grand des documents |  |
| Rapports \- En cliquant sur l’action “Plein écran” dans un rapport, celui-ci s’affiche en plein écran pour une meilleure lisibilité des informations. | TMAFLW-1015 |
| Historique \- Suite à une assignation en masse de plusieurs tâches, à la consultation de l’historique d’une des tâches, un seul fait d’assignation est présent celui lui correspondant | TMAFLW-1080 |
| **Intégrateurs** |  |
| CLM \- Lors d’un export des job de configuration (export-config job) seules les configurations sont exportées. Les annotations ne sont plus présentes. |  |
| Les Tags de type FreeList déclenchent de nouveau la méthode registerForFieldChange au premier appel | TMAFLW-1127 |

# Anomalies connues

* Il n’est plus possible depuis l’IHM d’administration FlowerDocs de modifier les informations d’un groupe. Les modifications réalisées directement dans l’annuaire sont prises en compte.  
* Client Java REST \- La méthode addFiles() quand on envoie plusieurs documents, retourne 1 seul des documents ajoutés au lieu de tous les documents.

# FlowerDocs eProcess

## Vue d’ensemble

Aucune évolution spécifique n’a été réalisée dans cette version. Elle bénéficie des corrections ainsi que des améliorations suivantes apportées par FlowerDocs:

* Amélioration des rapports  
* Amélioration de la gestion des utilisateurs et des groupes

## Bug fixes

| Bug | Ticket support |
| :---- | :---- |
| **Utilisateurs** |  |
| Lorsque la solution eProcess est déployé avec la solution GEC, l’action “Envoyer pour information” n’est pas présente lors de la création d’une enveloppe | TMAFLW-1009 |

# FlowerDocs GEC

## Vue d’ensemble

Aucune évolution spécifique n’a été réalisée dans cette version. Elle bénéficie des corrections ainsi que des améliorations suivantes apportées par FlowerDocs:

* Amélioration des rapports  
* Amélioration de la gestion des utilisateurs et des groupes