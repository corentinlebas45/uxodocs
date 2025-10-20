+++
date = "2000-03-31T13:20:01+02:00"
title = "Docker"
+++

# Docker installation

This page describes how to launch a Docker environment, including the prerequisites.

:::warning
For configuration of OpenSearch, Redis and OpenLDAP applications, please refer to the product documentation for production use.
:::
 
## Prerequisites

* If you are external to Arondor/Uxopian, please contact FlowerDocs support to obtain the Docker images.
* Get the `flower-templates-2025.2.0-package.zip` package.
* Unzip the package

:::warning
In the `docker` folder, a `.env` file is present. It may be hidden, depending on your system. This file defines the variables used in Docker Compose files.
:::

## ARender Rendition installation

* Open the `docker` folder
* Copy the `.env`, `arender-stack.yml` files to the folder of your choice
* Run the following command in this folder: `docker-compose -f arender-stack.yml up`

## FlowerDocs installation

* Open the `docker` folder
* Copy the `.env`, `flowerdocs-stack.yml`, `custom-opensearch.yml`, `core.properties`, `gui.properties` files and `arender-hmi` folder into the folder of your choice.
* Within the `flowerdocs-stack.yml` file, change the LDAP administrator password `LDAP_ADMIN_PASSWORD`.
* Run the following command in this folder: `docker-compose -f flowerdocs-stack.yml --profile="*" up`

:::warning
For use in a non-development environment, `token.key` and `system.admin.password` must be changed. More details are available [here](broken-link.md).
:::

# Déploiement de scope 

The rest of this documentation allows you to start up a FlowerDocs application with a scope that includes the minimal technical model.


## Creation

FlowerDocs Core must be started.

* Open the ``flower-templates-2025.2.0-package` folder.
* Run the following command, adapting the value of the `ldapPassword` variable:

`docker run --volume=${PWD}\default-scope:/clm/default-scope --network=flowerdocs-net artifactory.arondor.cloud:5001/flower-docs-clm:2025.2.0 delete create --template=default-scope --scope=DEFAULT --password=yourPassword --ws.url=http://flower-docs-core:8081/core/services --data.dir=/clm/ --ldap.type=OPENLDAP --ldap.baseDN="dc=flowerdocs,dc=com" --ldap.user="cn=admin,dc=flowerdocs,dc=com" --ldap.url=ldap://openldap-flowerdocs:389 --ldap.password=changeme --ldap.attributes.id=CN --ldap.attributes.search=displayName --ldap.attributes.displayName=displayName --ldap.attributes.members=uniqueMember`

## Access 

* Access the FlowerDocs GUI url: `http://localhost:8080/gui/?scope=DEFAULT`
* Login as system administrator
    - Username= `system`
    - Password = `yourPassword` or the one you entered in the configuration files.
* To add new users, go to : `http://localhost:8080/gui/?admin=true#/admin:/iam/users`