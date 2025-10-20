---
title: "ARender for FileNet in IBM Websphere Application Server (recommended)"
description: Deployment guide for IBM Filenet in IBM WebSphere application server
draft: false
type: docs
weight : 1
keywords: [ "standalone", "hmi", "configuration", "filenet" ,  "ibm" , "websphere"]
---

Below the deployment of ARender HMI for FileNet in **IBM WebSphere application server**.

In our example, we are deploying the presentation server
in an environment with:

- Operating System: Windows Server 2016
- Filenet 5.5
- Websphere 9.0.5.0 Application Server

## Retrieve the ARender HMI EAR archive for FileNet

Using the username and password beforehand provided,

## WebSphere requirements


The version of websphere used here must have java 8 installed and activated.
If you like, please follow the instructions [here](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=waso-java-se-8-in-websphere-application-server-v85).


## Deployment of the EAR in IBM WebSphere

- Open a **WebSphere console** at <https://serveur_websphere:9043/ibm/console>

- Go in "Applications" tab, then click on "**WebSphere enterprise applications**"

- To launch installation, click on "**Install**"


- Choose the EAR path to deploy and click on "**Next**"


- To accept default parameters, click on "**Next**"



- Select webserver(s) and/or server(s) of the Workplace, then click on "**Next**"


- To accept the parameters by default (virtual host: default_host), click on "**Next**"



- In recap window, click on "**Finish**" to begin the installation with these parameters after checking them


## Post setup

### Libraries loading order



Nothing to configure.



Websphere must be configured in parent-last which means it has to load its libraries after ARender.

- In the application list click on ARender 4.8.X for FileNet 5.x

- Click on "Manage Modules"


- Click on ARender module


- Select in the drop down list « Class loader order »: « Classes loaded with local class loaded first (parent last) »


- Click on "OK" and save the modifications

- **Start** ARender application



## Installation in CPE is complete

You can now access a Filenet document via a URL formed like this:

```html
http://{server_arender}:{port_arender}/ARender/?id={id}&objectStoreName={ObjectStoreName}
```

