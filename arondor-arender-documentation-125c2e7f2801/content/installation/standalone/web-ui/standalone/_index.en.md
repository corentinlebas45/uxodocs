---
title: "Standalone"
draft: false
weight: 1
type: docs
icon: mdi-cog-outline
keywords: [ "standalone", "hmi", "configuration", "Web-UI" ]
related:
    - name : "Configuration"
      rel: '/installation/standalone/web-ui/configuration.en.md'
    - name : "Configuration Spring Boot"
      rel: '/installation/standalone/web-ui/configuration.en.md#springboot'
---


Below a standalone installation of the ARender Web-UI.

To install on **IBM FileNet systems**, you can skip this page and directly go to: 
[ARender installation on IBM FileNet]({{< relref "/content/installation/standalone/web-ui/filenet/_index.en.md">}}).

Since ARender 2023.0.0, the deployment of ARender UI has changed. Please check the detailed upgrade documentation 
[here]({{< relref "/guides/upgrade/4.8_to_2023.0/_index.en.md">}}).

## Prerequisites

### Minimal hardware

| Category                         | Minimum | Advised                                                                                                 |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| Number of Web-UI server(s)       | 1       | The number of rendition server divided by two (example 4 rendition servers, therefore 2 Web-UI servers) |
| RAM                              | 1GB     | 2GB                                                                                                     |
| CPU type                         | 64Bits  | 64Bits

### Software

| Software                        | Requirement                                                                                                                                                                                                                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Java Runtime                    | JRE 1.8 64 bits Minimum, OpenJDK 11 advised. Oracle JDK are supported, JRE IBM J9 and java 17 are not supported.                                                                                                                                                                                                               |
| ARender Rendition up & running  | The Rendition health page should be green, see [the related documentation]({{< relref "/content/installation/standalone/rendition/verification.en.md">}}). If it is not the case, please install the Rendition following [the related documentation]({{< relref "/content/installation/standalone/rendition/_index.en.md">}}). |

## Installation

### Download installation files

* Using the username and password beforehand provided (contact arender-sales@arondor.com if you want an access)
* Download the zip file:


* Extract the zip content in the folder of your choice. (Let's call it *[Web-UI-folder]*)
>The zip file contain web-ui service installation script but also removal and startup scripts

### Start ARender Web-UI

* Open a console and start ARender Web-UI with the command below 


## Open a browser new window

Access to <http://localhost:8080> via a web browser.


The URL to use should be built like this: <http://{Web-UI-HostName}:{port-Web-UI}/{ARenderContext}/>:
- *{Web-UI-HostName}*: the host name of the application server
- *{port-Web-UI}*: the application server port
  
### No local Rendition up&running

You may have encountered the below error notification.


It may mean that:
* Either the local Rendition is not installed/started
  * In that case please go back to the following documentation [the Rendition installation documentation]({{< relref "/content/installation/standalone/rendition/_index.en.md">}}).
* Either the Rendition is installed on another server
  * In that case, please check to the documentation about **arender.server.rendition.hosts** property here: [ARender Web-UI configuration]({{< relref "/content/installation/standalone/web-ui/configuration.en.md">}}).

## Install ARender Web-UI as a service

* Open a console with **Administrator rights**,
* Go to the *[Web-UI-folder]*
* Execute the right installation script like below:

{{< tabs id="1" tabs="Windows, Linux">}}
```cmd
$> .\ARenderHmiService-install.bat
```
```bash
$> ./ARenderHmiService-install.sh
```
    
The service named **ARenderHMIService** should be created and started on port 8080.