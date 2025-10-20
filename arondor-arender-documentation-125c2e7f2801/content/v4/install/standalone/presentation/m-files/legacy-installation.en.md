---
title: "Legacy installation"
draft: false
weight: 2
keywords: [ "standalone", "hmi", "configuration", "m-files", "legacy" ]
---

Here we present the Web-UI installation in M-Files. 

In our example, we deploy the Web-UI
in an environment with:

- Operating system : Windows Server 2016 Datacenter
- M-Files 
- A Tomcat9 server


## Steps to Configure the Rendition



- Start the ARender Rendition server

## Steps to install the Web-UI

Using the username and password previously provided (contact arender-sales@arondor.com if you want access),
you can recover the version of the web application used in WAR format


* Program Files
    * Apache Software Foundation
        * Tomcat 9.0
            * webapps


Afterwards :

You need to edit different values of the *arender-server.properties* file depending on your M-Files vault configuration

## Steps to deploy ARender on M-Files
- Open your M-File safe
- Install the ARenderApp.zip in your vault apps.

*( M-Files Admin -> choose your vault -> right click -> Applications -> Install )*

- Log out of the vault and log back in to ensure changes are accounted for

## Steps to open a document with M-Files

- Restart the IIS server


- Start the Tomcat9 server
- Access M-Files under M:/


- Select your safe
- Drag and drop a document to open it with ARender

