---
title: Annuaire
Description: Authentifier les utilisateurs auprès d'un annuaire d'entreprise
---

# Configuration de l'annuaire

Cette partie décrit la configuration de l'annuaire d'entreprise.

Un compte de type admnistrateur doit être configuré permettant d'effectuer les actions suivantes :
 
* recherche d'utilisateur
* récupération d'utilisateur
* authentification
* etc.

## Type d'annuaire

Pour configurer l'accès à l'annuaire d'entreprise, il est nécessaire d'identifier le type nécessaire :


* ``simple`` : LDAP simple de type Apache Directory Server ou OpenLDAP
* ``ad`` : Microsoft Active Directory
* ``ad-ds`` : Microsoft ADLDS

## Définition de l'annuaire par scope

Cette partie concerne la configuration d'un annuaire spécifique à un scope. <b>C'est ce mode de configuration qui est préconisé car plus flexible.</b>

La configuration de l'annuaire est accessible au sein de l'interface d'administration dans la partie `Identités > Annuaire`, elle est stockée sous forme de document de la classe `LDAPConfiguration` dans FlowerDocs.

<br/>
Les informations à configurer sont les suivantes :

| Identifiant                       | Nom d'affichage                                    | Description                        
|-----------------------------------|----------------------------------------------------|------------------------------------
| `LDAPType`       				| Type LDAP                						  	 |Type de l'annuaire             
| `URL`        					| URL 			                                  	 |Url d'accès à l'annuaire
| `User`          					| Utilisateur   		                          	 | Utilisateur pour se connecter à l'annuaire
| `Password`           			| Mot de passe		                                 | Mot de passe associé à l'utilisateur de l'annuaire
| `BaseDN`          				| Base DN                                			 | DN configuré dans l'annuaire
| `IdAttribute`           		| Attribut pour l'identifiant                        | Attribut de l'annuaire utilisé pour stocker l'identifiant des utilisateurs
| `GroupIdAttribute`            | Attribut pour l'identifiant d'un groupe            | Attribut de l'annuaire utilisé pour stocker l'identifiant des groupes
| `DisplayNameAttribute`       | Display name attribute                             | Attribut de l'annuaire utilisé pour stocker le nom d'affichage de l'utilisateur
| `SearchAttribute`           	| Attribut pour la recherche                         | Attribut de l'annuaire utilisé pour rechercher les utilisateurs/groupes
| `MembersAttribute`            | Membres                            				 | Attribut de l'annuaire utilisé pour stocker les membres du groupe
| `EnableLowerCaseOfUserName` | Activer l'évaluation de l'identifiant en minuscule | Permet de forcer la résolution des identifiants utilisateur en minuscule 

## Définition de l'annuaire par défaut

Cette partie concerne la configuration d'un annuaire par défaut pour une instance FlowerDocs.

Cette partie n'est pas nécessaire dans le cas d'une configuration de l'annuaire à travers l'interface d'administration par scope décrit ci-dessus.
Le type d'annuaire peut ensuite être défini par application WEB : 

* Pour FlowerDocs GUI grâce à la propriété : ``gui.ldap.type``
* Pour FlowerDocs Core grâce à la propriété : ``ws.ldap.type``


__Exemple :__ Configuration d'un serveur embarqué

```properties
gui.ldap.type=ad
ws.ldap.type=simple
```

<br/>
Pour configurer l'accès à l'annuaire LDAP, il est nécessaire de renseigner la propriété ldap.

| Propriété              | Description                         |
|------------------------|-------------------------------------|
| ldap.bind.url          | Adresse de l'annuaire               |
| ldap.bind.root         | Noeud de base dans la structure LDAP|
| ldap.base.dn           | Base de recherche des utilisateurs  |



<br/>
Un compte de type admnistrateur doit être configuré.

| Propriété              | Description                         |
|------------------------|-------------------------------------|
| ldap.bind.dn           | Distinguished Name de l'utilistateur|
| ldap.bind.password     | Mot de passe de l'utilistateur      |


<br/>
Afin de récupérer (ou authentifier) des utilisateurs avec l'annuaire configuré, il faut également définir : 


| Propriété              | Description                                                    |
|------------------------|----------------------------------------------------------------|
| ldap.attr.id           | Attribut permettant de récupérer l'identifiant d'un utilisateur|

__Exemples__ : 

* Microsoft Active Directory : ``sAMAcountName`` 
* Microsoft Active Directory LDS : ``uid``  
* Apache Directory Server : ``uid``

<br/>
D'autres attributs utilisés pour le mapping d'utilisateur peuvent être définis : 

| Propriété              | Description                                                      |
|------------------------|------------------------------------------------------------------|
| ldap.attr.display.name | Attribut permettant de récupérer l'identifiant d'un utilisateur  |
| ldap.attr.password     | Attribut permettant de récupérer le mot de passe d'un utilisateur|
| ldap.attr.search       | Attribut utilisé pour la recherche                              |

### Exemples de configuration


#### ADLDS
	 
```properties
ldap.bind.url=ldap://ldap.company.com:389
ldap.bind.root=dc=arondor,dc=dev
ldap.bind.dn=CN=fadmin,OU=Demo,OU=FlowerDocs,DC=arondor,DC=dev
ldap.bind.password=okidoki
ldap.base.dn=OU=Demo,OU=FlowerDocs
ldap.attr.id=CN
ldap.attr.display.name=displayName
```

#### OpenLDAP

OpenLDAP requiert que le base DN utilisé
	 
```properties
ldap.bind.url=ldap://ldap.company.com:389
ldap.bind.root=
ldap.base.dn=dc=arondor,dc=dev
ldap.attr.id=CN
ldap.bind.dn=CN=admin,DC=arondor,DC=dev
ldap.bind.password=okidoki
ldap.attr.display.name=displayName
```

# Administration de l'annuaire

Depuis l'interface d'administration, il est possible de créer des utilisateurs avec un mot de passe par défaut. 
Pour cela, le mot de passe ne doit pas être obligatoire, il s'agit d'un paramètre global à l'instance FlowerDocs.

| Propriété                      | Description                                                           |
|--------------------------------|-----------------------------------------------------------------------|
| ldap.default.password          | Mot de passe par défaut si aucun n'est défini lors de la création     |
| ldap.user.password.mandatory   | Booléen définissant le critère obligatoire du champ mot de passe     |


	
La création d'utilisateur ou de groupe ne peut être effectuée qu'à la racine du noeud d'accès à l'annuaire. 

**Exemple :** Pour un Microsoft Active Directory: ``<domaine>/<base DN>``