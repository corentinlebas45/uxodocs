---
title: "Docker"
draft: false
weight: 3
type: docs
icon: mdi-wrench-outline
---

## Registry

### Location

All ARender docker images are available on our artifactory, [artifactory.arondor.cloud](https://artifactory.arondor.cloud).

### Login

To authenticate, use the docker command with your artifactory credentials

```bash
```

If you do not have access to our artifactory, please contact our **support service**.

## Repository list

A complete ARender stack is composed by 6 types of containers:

| Component             | Repository                      | Latest Version                | Suffix   |
| :-------------------- | :------------------------------ | ---------------------------:  | -------: |
|                       |                                 |                               |          |

### Pulling images

To pull images, use docker pull command with Arondor registry as prefix.


```bash
```


```bash
```


## Docker compose

To start ARender quickly with docker-compose, execute the following commands:

```bash
$> docker-compose up -d
```

These commands will run the configuration below:

```yaml
```
