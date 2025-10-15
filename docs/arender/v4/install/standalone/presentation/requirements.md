---
title: "Prérequis"
draft: false
weight: 1
icon: mdi-alert-octagram
keywords: [ "prérequis", "hmi", "web ui"]
---

## Configuration de port

Le serveur de présentation utilise uniquement le port configuré par
le serveur d'application dans lequel il est déployé.
Nous vous recommandons donc de consulter la documentation de
votre serveur d'application utilisée.

## Recommandations

Le serveur de présentation n'a pas directement de pré-requis de
système d'application, cela dépend principalement des logiciels utilisés
comme le serveur d'application, java ...

Nous vous recommandons donc de vous diriger vers les éditeurs de ces logiciels
mais également de suivre le site de [OWASP](https://www.owasp.org/) qui publie régulièrement
des recommandations sur la sécurité des serveurs d'applications.

## Configuration matérielle

| Catégorie   | Minimum | Conseillé                                                                                        |
| ----------- | ------- | ------------------------------------------------------------------------------------------------ |
| Nb Serveur  | 1       | Environ le nombre de serveur de rendition divisé par deux (exemple 4 serveurs de rendition donc 2 serveurs de présentation)|
| RAM         | 1Go     | 2Go                                                                                              |                                                           
| Type de CPU | 64Bits  | 64Bits                                                                                           |

## Serveur d'application

Les serveurs d'applications recommandés (API Java Servlet 3.0 & Java 8
minimum requis par ARender 4) :

| Serveur d'appli  | Version validée  |
| ---------------- | ---------------- |
| IBM WebSphere    | 9.0.5            |
| Apache Tomcat    | 8.0              |
| Jetty            | 8.1.21           |
| Wildfly          | 10.1.0.Final     |

Nous vous recommandons de garder vos serveurs d'application à jour

L'API Java Servlet 3.1.0 et supérieur sont recommandées (non requises)
afin de bénéficier des gains de performance et Websockets.
