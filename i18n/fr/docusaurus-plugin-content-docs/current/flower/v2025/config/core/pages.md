---
date: "2020-02-02"
title: "Pages"
description: "Exposez des pages HTML ad-hoc."
related:
  - name : "Templates HTML"
    rel: '/documentation/config/core/templates/html'
---

# Principe

La notion de Pages permet d'exposer des pages HTML à vos utilisateurs. Elles sont configurées par scope et permettent, par exemple, de récolter des informations comme des documents, ou tout simplement de mettre à disposition des informations.

Ces pages peuvent être restreintes à certains utilisateurs en fonction de leurs habilitations ou publiques pour être accessibles à tous.

Cette notion nécessite deux types de configuration : 

* un  [template](broken-link.md)
* une page

# Page privée

Une page est considérée comme `privée` si sa définition porte une ACL. 
Dans ce cas, seuls les utilisateurs authentifiés peuvent y accéder et l'ACL configurée est évaluée afin de déterminer si l'utilisateur est autorisé à la consulter.

<br/>
Les pages privées sont accessibles à travers un navigateur à l'URL : `/gui/private/<scope>/pages/<page>`.

# Page publique

Une page est considérée comme `publique` si sa définition ne référence pas d'ACL.
Dans ce cas, l'accès est public et un utilisateur peut y accéder sans être authentifié.

Si cette page nécessite des actions auprès de FlowerDocs Core, il est possible d'y injecter un token permettant de fournir une authentification et ainsi d'exécuter ces actions en étant authentifié.

Le jeton fourni initialise une authentification avec un utilisateur technique. L'identifiant de cet utilisateur est le chemin de la page. De plus, le profil `#PUBLIC` lui est attribué.

Des politiques de sécurité peuvent ainsi être définies en prenant en compte cet accès public pour autoriser ou non des actions sur des composants.

<br/>
Les pages publiques sont accessibles à travers un navigateur à l'URL : `/gui/public/<scope>/pages/<page>`.
