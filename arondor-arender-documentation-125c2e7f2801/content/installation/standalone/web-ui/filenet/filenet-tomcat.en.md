---
title: "Installation in Apache Tomcat"
description: Deployment guide for IBM Filenet in Apache Tomcat application server
draft: false
type: docs
weight : 2
keywords: [ "standalone", "hmi", "configuration", "filenet" ,  "apache" , "tomcat"]
---
Below the deployment of ARender HMI for FileNet in **Apache Tomcat**.


Limitation: Authentication to IBM FileNet has to be configured with a **technical account**.
The consequences will be that:
- Documents/Annotations/Metadata will be fetched with the technical account,
- Annotations will have the name of the technical account.
If the need is to propagate the authentication you can either use WebSphere as Application server (see the documentation [here](broken-link.md)).


In our example, we are deploying the presentation server
in an environment with:
- Operating System: Windows Server 2016
- Filenet 5.5
- Apache Tomcat 9.0

## Retrieve the ARender HMI WAR for FileNet

Using the username and password beforehand provided,

## Configuration of ARender HMI WAR for FileNet

Some additional configuration is needed in the ARender for FileNet WAR to be supported in Tomcat.

### User context configuration

Open the below file:
And replace the bean having the following id **urlFilter** by the following bean: 

``` xml
<bean id="urlFilter"
    class="com.arondor.viewer.server.security.RequestParameterAuthenticationFilter">
    <property name="authenticationManager" ref="authenticationManager" />
</bean>
```

### Security configuration

Remove the below file:

### Technical account configuration for the connection to FileNet

Open the below file:
And add the below content (change with the value matching your context):

``` cfg
# Default authentication method is jaasObjectStoreProvider. To activate connect through a technical account use loginPasswordObjectStoreProvider and set the right login and password below
arender.server.filenet.authentication.method=loginPasswordObjectStoreProvider
# Example of URL for jaasObjectStoreProvider: iiop://localhost:2809/FileNet/Engine and for loginPasswordObjectStoreProvider : http://localhost:9080/wsi/FNCEWS40MTOM/
arender.server.filenet.ce.url=http://localhost:9080/wsi/FNCEWS40MTOM/
arender.server.filenet.ce.login=loginToChange
arender.server.filenet.ce.password=passwordToChange
```

### Add additional libraries

Download the below JARs:
* **xercesImpl** version **2.11.0**: [download link](https://mvnrepository.com/artifact/xerces/xercesImpl/2.11.0).
* **xml-apis** version **1.4.01**: [download link](https://mvnrepository.com/artifact/xml-apis/xml-apis/1.4.01).

