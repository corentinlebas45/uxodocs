---
title: "Docker"
draft: false
weight: 2
type: docs
icon: mdi mdi-docker
keywords: ["docker"]
---

## Registre

### Emplacement

Toutes les images docker d'ARender sur notre artifactory, [artifactory.arondor.cloud](https://artifactory.arondor.cloud).

### Connexion

Pour s'authentifier, utiliser la commande docker avec vos identifiants pour l'artifactory

```bash
```

Si vous n'avez pas accès à l'artifactory, veuillez prendre contact avec notre service Support

## Liste des conteneurs

Un environnement ARender est composé de 6 types de conteneur.

| Composant             | Repository                      |       Dernière version  |  Suffixe |
| :-------------------- | :------------------------------ | ---------------------:  | -------: |
|                       |                                 |                         |          |

### Récupérer les images

Pour récupérer les images, utiliser la commande "docker pull" avec le nom d'hôte de notre artifactory en préfixe.


```bash
```


```bash
```


## Docker compose

Pour démarrer ARender rapidement avec docker-compose, exécutez les commandes suivantes :

```bash
$> docker-compose up -d
```

Ces commandes déploieront ARender avec la configuration ci-dessous :


```yaml
```

{{< /tab>}}

```yaml
version: "2"

services:
  ui:
    image: artifactory.arondor.cloud:5001/arender-ui:4.4.1
    mem_limit: 2g
    container_name: ui
    environment:
      - "ARENDERSRV_ARENDER_SERVER_RENDITION_HOSTS=http://dsb-service:8761/"
    ports:
      - 80:8080

  service-broker:
    image: artifactory.arondor.cloud:5001/arender-document-service-broker:4.4.1
    mem_limit: 1g
    container_name: dsb-service
    environment:
      - "DSB_KUBEPROVIDER_KUBE.HOSTS_DCV-SERVICE=19999"
      - "DSB_KUBEPROVIDER_KUBE.HOSTS_DRN-SERVICE=9091"
      - "DSB_KUBEPROVIDER_KUBE.HOSTS_DTH-SERVICE=8899"
    ports:
      - 8761:8761

  document-renderer:
    image: artifactory.arondor.cloud:5001/arender-document-renderer:4.4.1
    mem_limit: 1g
    container_name: drn-service
    environment:
      - "DRN_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME=drn-service"
      - "DRN_EUREKA_INSTANCE_HOSTNAME=dsb-service"
      - "DRN_EUREKA_SERVER_PORT=8761"
    ports:
      - 9091:9091

  document-text-handler:
    image: artifactory.arondor.cloud:5001/arender-document-text-handler:4.4.1
    mem_limit: 1g
    container_name: dth-service
    environment:
      - "DTH_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME=dth-service"
      - "DTH_EUREKA_INSTANCE_HOSTNAME=dsb-service"
      - "DTH_EUREKA_SERVER_PORT=8761"
    ports:
      - 8899:8899

  document-file-storage:
    image: artifactory.arondor.cloud:5001/arender-document-file-storage:4.4.1
    mem_limit: 500m
    container_name: dfs-service
    environment:
      - "DFS_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME=dfs-service"
      - "DFS_EUREKA_INSTANCE_METADATA.MAP_SOURCE.D.F.S=http://dfs-service:8081"
      - "DFS_EUREKA_INSTANCE_HOSTNAME=dsb-service"
      - "DFS_EUREKA_SERVER_PORT=8761"
    ports:
      - 8081:8081

  document-converter:
    image: artifactory.arondor.cloud:5001/arender-document-converter:4.4.1
    mem_limit: 1g
    container_name: dcv-service
    environment:
      - "DCV_EUREKA_INSTANCE_METADATA.MAP_HOST.NAME=dcv-service"
      - "DCV_APP_EUREKA_HOSTNAME=dsb-service"
      - "DCV_APP_EUREKA_PORT=8761"
    ports:
      - 19999:19999
```

