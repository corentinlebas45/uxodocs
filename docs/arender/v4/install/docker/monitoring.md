---
title: "Surveillance"
draft: false
weight: 6
icon: mdi-pulse
keywords: ["docker", "surveillance", "monitoring"]
---

## Sonde d'état de santé

[shortcode]
[shortcode]

| Composant                       | Vivacité        | Disponibilité opérationnelle |
| ------------------------------- | --------------- | ---------------------------- |
| arender-ui                      | /               | /arendergwt/weather          |
| arender-document-service-broker | /swagger-ui.html| /health/readiness            |
| arender-document-renderer       | /health/health  | /health/readiness            |
| arender-document-text-handler   | /health/health  | /health/readiness            |
| arender-document-converter      | /health/health  | /health/readiness            |

[shortcode]
[shortcode]

| Composant                       | Vivacité        | Disponibilité opérationnelle |
| ------------------------------- | --------------- | ---------------------------- |
| arender-ui                      | /               | /arendergwt/weather          |
| arender-document-service-broker | /health/records | /weather                     |
| arender-document-renderer       | /health/record  | /health/record               |
| arender-document-text-handler   | /health/record  | /health/record               |
| arender-document-converter      | /health/record  | /health/record               |

[shortcode]
[shortcode]

## Localisation des fichiers de log

| Composant                       | Fichiers                                                      |
| ------------------------------- | ------------------------------------------------------------- |
| arender-ui                      | /usr/local/tomcat/logs/localhost.{year-month-day}.log, stdout |
| arender-document-service-broker | /arender/logs/arender-server.log                              |
| arender-document-renderer       | /arender/logs/document-renderer/arender-jnipdf.log            |
| arender-document-text-handler   | /arender/logs/document-text-handler/arender-pdfbox.log        |
| arender-document-converter      | /arender/logs/document-converter/arender-taskconversion.log   |
