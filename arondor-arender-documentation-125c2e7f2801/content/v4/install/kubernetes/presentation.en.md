---
title: "Presentation server (Web UI)"
draft: false
weight: 1
icon: mdi-monitor-dashboard
keywords: ["kubernetes", "helm", "presentation"]
---

## Introduction

The presentation server is named **"web-ui"** in the Chart. To deploy the ARender presentation server set `web-ui.enabled` parameter to true.

## Parameters

The following table lists the configurable parameters of the ARender web UI subchart and their default values.

| Parameters                     | Description                                                                      |                         Default                         |
| :----------------------------- | :------------------------------------------------------------------------------- | :-----------------------------------------------------: |
| `global.imagePullSecrets`      | Global Docker registry secret names as an array                                  | `[]` (does not add image pull secrets to deployed pods) |
| `web-ui.enabled`               | Enable the presentation server deployment                                        |                         `true`                          |
| `web-ui.replicaCount`          | Number of the pod replica to deploy                                              |                           `1`                           |
| `web-ui.autoscale.enabled`     | Enable horitontal autoscaling of pods                                            |                         `false`                         |
| `web-ui.autoscale.maxReplicas` | Maximum number of the pod replica in the cluster                                 |                           `1`                           |
| `web-ui.autoscale.cpuLimit`    | Percentage of CPU requested target to scale horizontally                         |                          `80`                           |
| `web-ui.image.pullPolicy`      | ARender UI image pull policy                                                     |                        `Always`                         |
| `web-ui.serviceAccount.create` | Specifies whether a service account should be created                            |                         `true`                          |
| `web-ui.serviceAccount.name`   | Name of the service account created. If not set defaulted to ARender UI fullname |                          `''`                           |
| `web-ui.podSecurityContext`    | ARender UI Pod security context                                                  |                          `{}`                           |
| `web-ui.securityContext`       | Container security context                                                       |                          `{}`                           |
| `web-ui.service.type`          | ARender UI service type                                                          |                       `ClusterIP`                       |
| `web-ui.service.port`          | ARender UI service port                                                          |                          `80`                           |
| `web-ui.ingress.enabled`       | Enable Ingress                                                                   |                         `false`                         |
| `web-ui.ingress.annotations`   | Ingress annotations                                                              |                          `{}`                           |
| `web-ui.ingress.hosts`         | Ingress hosts                                                                    |                          `[]`                           |
| `web-ui.ingress.tls`           | Tls config                                                                       |                          `{}`                           |
| `web-ui.rendition.hosts`       | Rendition hosts (example: `- http://rendition-hostname:8761`)                    |                          `[]`                           |
| `web-ui.resources`             | ARender UI resources limits and requests                                         |                          `{}`                           |
| `web-ui.nodeSelector`          | Node selector                                                                    |                          `{}`                           |
| `web-ui.environment`           | Environment variables to pass to the container as a Map                          |                          `{}`                           |
