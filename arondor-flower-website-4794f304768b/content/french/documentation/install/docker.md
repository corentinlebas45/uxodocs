+++
date = "2000-03-31T13:20:01+02:00"
title = "Docker"
+++

# Installation Docker

Cette page décrit comment lancer un environnement Docker, prérequis inclus. 

:::warning
Concernant la configuration des applications OpenSearch, Redis et OpenLDAP, merci de se référer aux documents des produits pour un usage en production.
:::
 
## Pré-requis

* Si vous êtes externe à Arondor/Uxopian, veuillez contacter le support FlowerDocs pour obtenir les images Docker.
* Récupérer le livrable `flower-templates-2025.2.0-package.zip`
* Dezipper le livrable

:::warning
Dans le dossier `docker`, un fichier `.env` est présent. Il peut être caché suivant votre système. Ce fichier permet de définir les variables utilisés dans les fichiers Docker Compose.
:::

## Installation ARender Rendition 

* Ouvrir le dossier `docker`
* Copier les fichiers `.env`, `arender-stack.yml` dans le dossier de votre choix 
* Lancer la commande suivante dans ce dossier : `docker-compose -f arender-stack.yml up`

## Installation FlowerDocs

* Ouvrir le dossier `docker`
* Copier les fichiers `.env`, `flowerdocs-stack.yml`, `custom-opensearch.yml`, `core.properties`, `gui.properties` et le dossier `arender-hmi` dans le dossier de votre choix. 
* Au sein du fichier `flowerdocs-stack.yml`, modifier le mot de passe de l'administrateur LDAP `LDAP_ADMIN_PASSWORD`
* Lancer la commande suivante dans ce dossier : `docker-compose -f flowerdocs-stack.yml --profile="*" up`

:::warning
Dans le cadre d'une utilisation hors environnement de développement, il est nécessaire de changer les valeurs de `token.key` et `system.admin.password`. Plus de détails sont disponibles [ici](broken-link.md).

:::

# Déploiement de scope

La suite de cette documentation permet d'initier une application FlowerDocs avec un scope comportant le modèle technique minimal.


## Création

FlowerDocs Core doit être démarré.

* Ouvrir le dossier ``flower-templates-2025.2.0-package`
* Lancer la commande suivante en adaptant la valeur de la variable `ldapPassword` : 

`docker run --volume=${PWD}\default-scope:/clm/default-scope --network=flowerdocs-net artifactory.arondor.cloud:5001/flower-docs-clm:2025.2.0 delete create --template=default-scope --scope=DEFAULT --password=yourPassword --ws.url=http://flower-docs-core:8081/core/services --data.dir=/clm/ --ldap.type=OPENLDAP --ldap.baseDN="dc=flowerdocs,dc=com" --ldap.user="cn=admin,dc=flowerdocs,dc=com" --ldap.url=ldap://openldap-flowerdocs:389 --ldap.password=changeme --ldap.attributes.id=CN --ldap.attributes.search=displayName --ldap.attributes.displayName=displayName --ldap.attributes.members=uniqueMember`

## Accès 

* Accéder à l'url de FlowerDocs GUI :  `http://localhost:8080/gui/?scope=DEFAULT`
* Se connecter en tant qu'administrateur système
    - Username= `system`
    - Password = `yourPassword` ou celui que vous avez renseigné dans les fichier de configuration.
* Pour ajouter des nouveaux utilisateurs, se rendre sur : `http://localhost:8080/gui/?admin=true#/admin:/iam/users`