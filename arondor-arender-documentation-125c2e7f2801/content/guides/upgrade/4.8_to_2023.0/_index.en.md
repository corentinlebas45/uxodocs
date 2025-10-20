---
title: "LTS 4.8 to LTS 2023"
draft: false
weight: 4
type: docs
icon: mdi-database-arrow-right-outline
keywords: ["upgrade", "migrate", "general"]
---

Welcome to the ARender migration documentation, where we will guide you through the process of upgrading from Version 4 
to Version 2023 of ARender.

The primary focus of this update is on the UI aspect, transitioning from a WAR deployment in Version 4 to a Spring Boot 
deployment in Version 2023. Note that for the Rendition aspect, the installation process remains the same for both Versions
4 and 2023.

## Introduction
Version 2023 of ARender represents a significant step in the evolution of our product's UI component, incorporating Spring 
Boot to enhance stability, performance, and deployment flexibility. This documentation is designed to guide you through 
the process of migrating the UI component from Version 4 to Version 2023, with an emphasis on the necessary changes for 
Spring Boot deployment.

## Prerequisites
Before starting the migration of ARender's UI component, ensure you meet the following prerequisites:

* Basic knowledge of Spring Boot.
* Specific configurations from your ARender deployment in Version 4.

## Migrating from Version 4 to Version 2023 of ARender

### Migrating ARender Rendition
Before installing ARender Rendition Version 2023, you need to perform the following steps to migrate your current Version 4
installation to Version 2023:

* **Stop and Remove the Rendition Service**


```powershell
$> sc stop ARenderRenditionService
$> .\removeService.bat
```


If **systemd** is the system initialisation component:

```bash
$> systemctl stop ARenderRenditionEngineService.service
$> ./removeService.sh
```

If **initd** is the system initialisation component:

```bash
$> service ARenderRenditionEngineService stop
$> ./removeService.sh
```



* **Install Rendition Version 2023**: Follow the detailed installation instructions in the official documentation, 
  available [here]({{< relref "/installation/standalone/rendition/_index.en.md">}}). This documentation will guide you 
  through the Version 2023 installation process.

* **Transfer Properties**: Once ARender Rendition Version 2023 is installed, you will need to transfer the properties and 
  configurations from your current Version 4 installation to the new one. To do this, refer to the list of property 
  changes listed [here]({{< relref "/guides/upgrade/4.8_to_2023.0/rendition.en.md">}}). Ensure that all necessary 
  configurations are correctly migrated to Version 2023.

* **Configure ARender Rendition Version 2023**: After transferring the properties, you can configure ARender Rendition 
  Version 2023 according to your specific needs using the documentation 
  [here]({{< relref "/installation/standalone/rendition/Configuration.en.md">}}).

### Migrating ARender UI Version 4 to Version 2023


Please note that this documentation is not intended for configuring ARender within IBM FileNet. No changes are required
for IBM FileNet configuration when transitioning from Version 4 to Version 2023 of ARender.


Before installing ARender UI Version 2023, you need to perform the following steps to migrate your current Version 4 
installation to Version 2023:

* **Stop the Application Server Service**: Ensure you stop the service of your current application server where ARender 
  UI Version 4 is deployed. This will ensure a smooth transition to Version 2023.

* **Install ARender WEB-UI Version 2023**: Follow the detailed installation instructions for ARender UI Version 2023 in the 
  official documentation, available [here]({{< relref "/installation/standalone/web-ui/standalone/_index.en.md">}}). 
  This documentation will guide you through the Version 2023 installation process.

* **Transfer Properties**: Once ARender UI Version 2023 is installed, you will need to transfer the properties and 
  configurations from your current Version 4 installation to the new one. To do this, refer to the list of property 
  changes listed [here]({{< relref "/guides/upgrade/4.8_to_2023.0/web-ui.en.md">}}) to ensure that all necessary 
  configurations are correctly migrated to Version 2023.

* **Configuring ARender UI Version 2023**: After transferring the properties, you can customize ARender UI Version 2023 
  according to your specific requirements by following the documentation available
  [here]({{< relref "/installation/standalone/web-ui/configuration.en.md">}}).