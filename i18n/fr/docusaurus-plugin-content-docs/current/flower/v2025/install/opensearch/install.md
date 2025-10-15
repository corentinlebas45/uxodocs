+++
date = "2001-03-28T13:20:01+02:00"
title = "Installation"
intro = ""
+++

# Installation OpenSearch

## Procédure d'installation

Pour installer OpenSearch, différents moyens sont mis à disposition et sont expliqués pas à pas dans la [documentation officielle](https://opensearch.org/docs/[shortcode]/opensearch/install/index).
 
## Configuration 

Pour configurer votre instance OpenSearch, éditez le fichier ``${OPENSEARCH_HOME}/config/opensearch.yml`` tel que :

* Pour définir le nom du cluster OpenSearch, dé-commentez la propriété ``cluster.name`` et modifiez sa valeur (ex: ``flower-es-dev``)
* Dans le cas d'un cluster OpenSearch, dé-commentez la propriété ``node.name`` et modifiez sa valeur par celle de votre choix (ex: ``node-1``)
* Ajoutez la propriété `action.auto_create_index: false`
* Si plusieurs noeuds OpenSearch sont déployés sur la même machine, il est nécessaire de modifier la valeur de la propriété ``http.port``
* Pour accéder à OpenSearch depuis un serveur distant, il est nécessaire de dé-commenter la propriété ``network.host`` et de définir une des valeurs suivantes :
  * ``0.0.0.0`` 
  * nom DNS
  * adresse IP

<br/>

### Sécurité 

Les utilisateurs internes d'OpenSearch sont définis dans le fichier ``${OPENSEARCH_HOME}/plugins/opensearch-security/securityconfig/internal_users.yml``. 

:::warningIl est nécessaire de ne conserver que les utilisateurs dont vous avez l'utilité et de changer leur mot de passe afin d'éviter les valeurs par défaut pour des raisons de sécurité.
 :::  


Pour changer le mot de passe d'un utilisateur : 

* lancer la commande : ``${OPENSEARCH_HOME}/plugins/opensearch-security/tools/hash.sh -p <new_password>``
* Remplacer le hash du mot de passe dans le fichier ``${OPENSEARCH_HOME}/plugins/opensearch-security/securityconfig/internal_users.yml`` pour l'utilisateur souhaité.
* afin que les modifications soient prises en compte, exécuter le script ``${OPENSEARCH_HOME}/plugins/opensearch-security/tools/securityadmin.sh``

<br/>
Pour plus d'informations concernant la sécurisation d'une instance OpenSearch, la documentation officielle est disponible [ici](https://opensearch.org/docs/[shortcode]/security-plugin/index).

### Démarrage  

#### Manuel 

Pour terminer, démarrez OpenSearch en allant dans le dossier ``${OPENSEARCH_HOME}/bin`` puis en exécutant le script ``opensearch``. 

#### Service

Pour installer OpenSearch en tant que service `systemd`, le fichier suivant doit être créé dans le répertoire /etc/systemd/system tel que :

[shortcode]
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
Group=${OPENSEARCH_USEr}

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
[shortcode]


Afin que le service soit démarré automatiquement par systemd, exécuter les commandes suivantes :

[shortcode]
[shortcode]
  systemctl enable opensearch.service
{{< /tab >>}}
[shortcode] 

### Validation 

Afin de vérifier le bon fonctionnement d'OpenSearch, allez sur la page http://localhost:9200/. 
