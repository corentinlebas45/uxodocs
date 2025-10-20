---
title: "Installation"
description: Standalone installation guide
draft: false
weight: 3
icon: mdi-cog-outline
keywords: [ "standalone", "hmi", "configuration" ]
---

Below a standalone installation of the ARender HMI. For installation on ECM systems, you can skip this page.

## Prerequisites

* An application server (see the [Requirements](broken-link.md)). Here we will use Apache Tomcat 9.0.21


## Deploy ARender HMI

### Move ARender WAR file

Move the WAR to the **webapps** folder of the tomcat application server in order to have the below structure

* Tomcat 9.0
    * bin
    * ...
    * webapps

### Start the application server

Start the application server using the **startup.bat** script located in the *bin* folder of Tomcat.

### Open a browser new window



The URL to use should be built like this: <http://{hmiHostName}:{portHMI}/{ARenderContext}/>:

- *{hmiHostName}*: the host name of the application server
- *{portHMI}*: the application server port
- *{ARenderContext}*: the root context of the HMI in the application server

