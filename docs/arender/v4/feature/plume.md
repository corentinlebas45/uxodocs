---
title: Plume
description: ""
icon: mdi-email-outline
keywords: ["feature", "email", "plume"]
---
## Envois d'emails dans ARender

title: Plume
description: ""

### Configuration d'ARender

Une configuration est requis côté ARender : 

```cfg
arenderjs.startupScript=scripts/plume.js
plume.enabled=true
plume.url=/plume
```

La propriété *plume.url* peut être changée pour correspondre à l'url de l'application plume 
déployée.

### Configuration de plume 

Diverses propriétés peuvent être activées dans plume, correspondantes à plusieurs fonctionnalités.
Ces propriétés doivent être placées dans le fichier *application.properties* dont le chemin est :
server/webapps/plume/WEB-INF/classes/application.properties

La propriété *arender.enabled* doit être activée pour l'utilisation de plume dans ARender.

```cfg
arender.enabled=true
```

#### SMTP

Pour un envoi de mail via le protocole SMTP, les propriétés à assigner sont les suivantes : 

```cfg
smtp.enabled=true
smtp.host=
smtp.port=
smtp.username=
smtp.password=
smtp.parameters.socketFactory.port=587
smtp.parameters.socketFactory.class=javax.net.ssl.SSLSocketFactory
smtp.parameters.starttls.enable=true
smtp.parameters.ssl.trust=*
smtp.parameters.ssl.protocols=TLSv1.2
```

| Propriété      | Signification                 |
| -------------- | ----------------------------- |
| smtp.enabled   | Utilisation du protocole SMTP |
| smtp.host      | Nom d'hôte SMTP               |
| smtp.username  | Nom d'utilisateur SMTP        |
| smtp.password  | Mot de passe SMTP             |

#### Rest

L'activation de l'api Rest permet de pouvoir récupérer le document courant dans ARender
et de l'utiliser comme pièce jointe.

Il est également possible de récupérer une liste de contact depuis une url via un appel Rest,
cette liste pourra être utilisée comme moyen de préremplissage des champs contacts.

```cfg
rest.enabled=true
rest.contacts.url=
```

#### FS

L'activation du système de fichiers permet de récupérer des fichiers locaux qui peuvent ensuite
être utilisés comme pièces jointes, modèles d'email et liste de contact.

Les emails envoyés peuvent également être enregistrés localement.

```cfg
fs.enabled=true
fs.attachment.dir=/attachments
fs.template.dir=/templates
fs.outgoing.dir=
```

| Propriété         | Signification                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| fs.enabled        | Utilisation du système de fichier                                                                                          |
| fs.attachment.dir | Chemin du répertoire à pièces-jointes                                                                                      |
| fs.template.dir   | Chemin du répertoire à modèles                                                                                             |
| fs.outgoing.dir   | Chemin du répertoire où les mails sont enregistrés après envoi, laisser vide pour ne pas enregistrés les emails localement |

Pour définir une liste de contact comme moyen de préremplissage des champs contacts,
il est possible de définir ses contacts directement dans le fichier de propriété
sous la forme suivante :

```cfg
fs.contacts[0].firstName=firstName1
fs.contacts[0].lastName=lastName1
fs.contacts[0].email=firstName1.lastName1@test.com

fs.contacts[1].firstName=firstName2
fs.contacts[1].lastName=lastName2
fs.contacts[1].email=firstName2.lastName2@test.com

...
```

#### LDAP

Une liste de contact peut également être récupérée depuis le protocole LDAP.
Pour cela, les propriétés sont les suivantes : 

```cfg
ldap.enabled=true
ldap.server=
ldap.username=
ldap.password=
ldap.search.base=
ldap.search.filter=
ldap.attributes.firstname=
ldap.attributes.lastname=
ldap.attributes.mail=
```

| Propriété                  | Signification                                                        |
| -------------------------- | -------------------------------------------------------------------- |
| ldap.enabled               | Utilisation du protocole LDAP                                        |
| ldap.server                | URL du serveur LDAP                                                  |
| ldap.username              | Nom d'utilisateur LDAP                                               |
| ldap.password              | Mot de passe LDAP                                                    |
| ldap.search.base           | Nom de base dn LDAP                                                  |
| ldap.search.filter         | Filtre d'attributs (exemple : ldap.search.filter=objectClass=person) |
| ldap.attributes.firstname  | Nom de l'attribut à afficher représentant le prénom                  |
| ldap.attributes.lastname   | Nom de l'attribut à afficher représentant le nom                     |
| ldap.attributes.mail       | Nom de l'attribut à afficher représentant l'email                    |

