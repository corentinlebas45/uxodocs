---
title: "Kubernetes"
draft: false
weight: 4
type: docs
icon: mdi-wrench-outline
---

**We assume that you are familiar with Kubernetes.**

If not, find more information on <https://kubernetes.io/docs/home/>

## TL;DR

```bash
$> helm install my-release arondor/arender
```

## Introduction

ARender is ready for Kubernetes and you can easily deploy the entire stack with our Helm Chart.

> You can find out more about Helm technology [here](https://helm.sh/).

The Chart is composed of two subchart: rendition and web-ui. You can choose to use both or only one of these components by setting the following parameters:

| Component | Property          | Value             |
| --------- | ----------------- | ----------------- |
| web-ui    | web-ui.enabled    | `true` or `false` |
| rendition | rendition.enabled | `true` or `false` |

## Prerequisites

- Access to Arondor Artifactory
- Kubernetes 1.14+
- Helm 3.0+
- PV provisionner support in the underlying infrastructure
- Kubernetes Metrics server installed (since ARender 4.3.0)

## Installing the Chart

To install the chart with the release name `my-release`, run the following commands with your Artifactory credentials:

```bash
$> helm install my-release arondor/arender
```

**You need to create a secret with your Arondor Artifactory credentials to be able to pull the default images.**

Read the page "[Pull an Image from a Private Registry](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)" on the official Kubernetes documentation to create the secret.
Then, add it to the list of imagePullSecrets names by setting `global.imagePullSecrets` parameter.


## Uninstalling the Chart

To uninstall/delete the `my-release` release:

```bash
$> helm delete my-release
```

## Parameters

The configurable parameters are listed in the next pages.

### Default values.yml file

