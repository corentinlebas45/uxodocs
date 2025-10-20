---
title: Identités
description: Organisez les utilisateurs accédant à votre application
---

# Principe

Au sein de la plateforme FlowerDocs, une identité est un utilisateur, un groupe d'utilisateurs ou une équipe. 
Cette notion permet d'identifier les utilisateurs qui utilisent la plateforme afin que : 

* la sécurité des données soit assurée en fonction de l'utilisateur authentifié
* les utilisateurs puissent collaborer
* la configuration de FlowerDocs GUI soit adaptée en fonction des usages des utilisateurs


Ces identités sont stockées  dans un [annuaire d'entreprise](broken-link.md) configuré par scope ou dans le référentiel d'[utilisateurs internes](broken-link.md).



# Utilisateurs


# Groupes

Cette notion est généralement utilisée afin d'appliquer des permissions particulières en fonction des groupes auxquels appartient un utilisateur.

# Equipes

Elle permet ainsi d'avoir des regroupements d'utilisateurs distincts de ceux définis dans l'annuaire d'entreprise. Les équipes sont généralement utilisées dans les organisations où la hiérarchie définie dans l'annuaire d'entreprise diffère de celle liée aux usages dans la plateforme FlowerDocs.

Les équipes possèdent une liste de propriétés permettant de configurer FlowerDocs GUI.


# Rôles

La plateforme FlowerDocs propose plusieurs rôles natifs offrant des permissions particulières. Un rôle peut être affecté à un utilisateur en définissant une équipe dont l'identifiant est le nom du rôle.

|Nom| Description|
|---|------------|
|`FUNCTIONAL_ADMIN`|Administrateur fonctionnel *(modèle de données)*|
|`SECURITY_ADMIN`|Administrateur de la sécurité *(ACL, identités...)*|
|`ADMIN`|Administrateur du scope|
|`SYSTEM_ADMIN`|Administrateur de la plateforme|