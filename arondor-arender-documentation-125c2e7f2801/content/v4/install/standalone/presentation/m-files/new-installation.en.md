---
title: "New installation"
draft: false
weight: 2
keywords: [ "standalone", "hmi", "configuration", "m-files" ]
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

To install ARender on M-Files vault, follow the steps below:
- Download VAF_MFF_ArenderConnector: 
- Run M-Files Admin console
- Right click on the desired vault and select **Applications**
- Click **Install...**
- Select the previously downloaded **VAF_MFF_ArenderConnector_22.12.3.mfappx** file
- Click **Yes** if this window shows up
- The application is now installed
- Click **Close**
- Click **Yes** if this window shows up

Now that we have installed ARender on M-Files vault, we can start configuring the application.

## Steps to configure ARender on M-Files

VAF_MFF_ArenderConnector uses a JSON configuration file. You can manage it through the graphic interface within the M-Files Admin client. 

- Run M-Files Admin client
- Click on **Configurations** for you vault
- Select **Other Applications** then select **VAF_MFF_ArenderConnector**. The dashboard appears
- Click on **Configuration** tab
- Fill in every configuration properties. When clicking the **i** icon, you will get a help showing up.
- Once you have configured, click **Save**


## Steps to open a document with M-Files

- Restart the IIS server


- Start the Tomcat9 server
- Access M-Files under M:/


- Select your safe
- Drag and drop a document to open it with ARender

