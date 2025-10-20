---
title: Utilisateurs internes
description: Définir des utilisateurs internes
---

:::info
Des utilisateurs propres à FlowerDocs peuvent être définis au niveau de FlowerDocs Core. Ces utilisateurs peuvent être utilisés comme compte de service, pour des administrateurs etc.
{{% /info%}}

<br/>

# Utilisateur système

L'utilisateur `system` est le compte utilisé par les différentes applications FlowerDocs. Ses informations peuvent être configurées à l'aide des paramètres `system.admin.username`  et `system.admin.password`.

<br/>
Ce compte est utilisé par : 

* FlowerDocs GUI pour charger sa configuration
* FlowerDocs Core pour exécuter les OperationHandlers
* Le CLM pour gérer les scopes
* Le client Java FlowerDocs simplifiant l'authentification auprès de FlowerDocs

*Pour chacune de ces applications, il est conseillé de configurer le compte utilisé (un différent pour chaque application).*

# Autres utilisateurs

FlowerDocs Core permet de définir des comptes additionnels et leurs informations : 

* `id` : l'identifiant du compte
* `password` : le mot de passe du compte
* `profiles` : les profils (rôles, groupes, équipes) du compte

Ces comptes additionnels peuvent être configurés dans les fichiers `core.properties` et `gui.properties` tels que :  

```properties
internal.realm.users[0].id=client1
internal.realm.users[0].password=<password>
internal.realm.users[0].profiles=ADMIN,ALL_USERS,JURIDIQUE,COMMERCE,MARKETING,COMPTABILITE
```
 


:::info
Les différents comptes définis au niveau de FlowerDocs Core peuvent être utilisés pour l'**ensemble** des scopes existants.
:::