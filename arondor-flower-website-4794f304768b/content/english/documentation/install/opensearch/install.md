+++
date = "2001-03-28T13:20:01+02:00"
title = "Installation"
intro = ""
+++

# OpenSearch installation

## Installation procedure

 
## Configuration 

To configure your OpenSearch instance, edit the ``${OPENSEARCH_HOME}/config/opensearch.yml`` file as follows:

* To define the name of the OpenSearch cluster, uncomment the ``cluster.name`` property and change its value (eg: ``flower-es-dev``)
* In the case of an OpenSearch cluster, uncomment the ``node.name`` property and change its value to that of your choice (e.g. ``node-1``)
* Add the `action.auto_create_index: false` property
* If several OpenSearch nodes are deployed on the same computer, you need to change the value of the ``http.port`` property
* To access OpenSearch from a remote server, you need to uncomment the ``network.host`` property and set one of the following values:
  * ``0.0.0.0`` 
  * DNS name
  * IP address

<br/>

### Security 

OpenSearch internal users are defined in the ``${OPENSEARCH_HOME}/plugins/opensearch-security/securityconfig/internal_users.yml`` file.  

:::warningOnly keep the users you need, and change their passwords to avoid using default values for security reasons.
 :::  


To change a user's password: 

* run command: ``${OPENSEARCH_HOME}/plugins/opensearch-security/tools/hash.sh -p <new_password>``
* Replace the password hash in the ``${OPENSEARCH_HOME}/plugins/opensearch-security/securityconfig/internal_users.yml`` file for the desired user.
* in order for the changes to take effect, run the ``${OPENSEARCH_HOME}/plugins/opensearch-security/tools/securityadmin.sh`` script

<br/>

### Start  

#### Manuel 

Finally, start OpenSearch by going to the ``${OPENSEARCH_HOME}/bin`` folder and running the ``opensearch`` script. 

#### Service

To install OpenSearch as a `systemd` service, the following file must be created in the /etc/systemd/system directory as follows:

```sh
[Unit]
Description=opensearch
Wants=network-online.target
After=network-online.target

[Service]
RuntimeDirectory=opensearch
PrivateTmp=true

WorkingDirectory=${OPENSEARCH_HOME}

User=${OPENSEARCH_USER}
Group=${OPENSEARCH_USER}

ExecStart=${OPENSEARCH_HOME}/bin/opensearch -p ${OPENSEARCH_HOME}/opensearch.pid -q

StandardOutput=journal
StandardError=inherit

# Specifies the maximum file descriptor number that can be opened by this process
LimitNOFILE=65536

# Specifies the memory lock settings
LimitMEMLOCK=infinity

# Specifies the maximum number of processes
LimitNPROC=4096

# Specifies the maximum size of virtual memory
LimitAS=infinity

# Specifies the maximum file size
LimitFSIZE=infinity

# Disable timeout logic and wait until process is stopped
TimeoutStopSec=0

# SIGTERM signal is used to stop the Java process
KillSignal=SIGTERM

# Send the signal only to the JVM rather than its control group
KillMode=process

# Java process is never killed
SendSIGKILL=no

# When a JVM receives a SIGTERM signal it exits with code 143
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
```


To have the service started automatically by systemd, run the following commands:

  systemctl enable opensearch.service
{{< /tab >>}}

### Validation 

To check that OpenSearch is working properly, go to http://localhost:9200/. 