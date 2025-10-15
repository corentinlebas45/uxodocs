+++
date = "2000-03-30T13:20:01+02:00"
title = "Lancement"
+++

# Lancement manuel

Pour lancer manuellement les applications FlowerDocs GUI, FlowerDocs Core et [shortcode], il suffit de lancer les commandes suivantes : 

[shortcode]
[shortcode]
./flower-docs-gui-webapp-2025.2.0.jar 
[shortcode]
[shortcode]
./flower-docs-core-webapp-2025.2.0.jar
{{< /tab >>}}
[shortcode]
./arondor-arender-hmi-spring-boot-[shortcode].jar
[shortcode]
[shortcode] 

# Installation en service

## Linux

Les applications FlowerDocs peuvent être installées simplement en tant que service Linux `init.d` ou `systemd`.

Dans cette section, il est supposé que les JAR `flower-docs-gui-webapp-2025.2.0.jar`, `flower-docs-core-webapp-2025.2.0.jar` et `arondor-arender-hmi-spring-boot-[shortcode].jar` sont placés dans le dossier `/opt/flowerdocs`. Ce dossier est également utilisé comme répertoire de configuration.

### Service init.d

Afin d'installer les applications FlowerDocs en tant que service `init.d`, il suffit de créer un lien symbolique dans le répertoire `/etc/init.d` : 

[shortcode]
[shortcode]
chmod +x /opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar
ln -s /opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar /etc/init.d/gui
[shortcode]
[shortcode]
chmod +x /opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar
ln -s /opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar /etc/init.d/core
{{< /tab >>}}
[shortcode]
chmod +x /opt/flowerdocs/arondor-arender-hmi-spring-boot-[shortcode].jar
ln -s /opt/flowerdocs/arondor-arender-hmi-spring-boot-[shortcode].jar /etc/init.d/arender-hmi
{{< /tab >>}}
[shortcode] 


Avec ce type de service, l'utilisateur auquel appartient le JAR est utilisé pour exécuter l'application. 
Un fichier de log par application est alimenté dans le répertoire `/var/log`.

Afin que le service démarre automatiquement au démarrage du système : 

[shortcode]
[shortcode]
update-rc.d gui defaults
[shortcode]
[shortcode]
update-rc.d core defaults
{{< /tab >>}}
[shortcode]
update-rc.d arender-hmi defaults
{{< /tab >>}}
[shortcode] 


Si le service n'est pas trouvé, il peut être nécessaire d'exécuter la commande :

```bash
systemctl daemon-reload
```

### Service systemd

Pour installer les applications FlowerDocs en tant que service `systemd`, les scripts `gui.service`, `core.service` et `arender-hmi.service` doivent être créés dans le répertoire `/etc/systemd/system` tel que :

[shortcode]
[shortcode]
[Unit]
Description=FlowerDocs GUI
After=syslog.target

[Service]
User=flowerdocs
ExecStart=/opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
[shortcode]
[shortcode]
[Unit]
Description=FlowerDocs Core
After=syslog.target

[Service]
User=flowerdocs
ExecStart=/opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
{{< /tab >>}}
[shortcode]
[Unit]
Description=[shortcode]
After=syslog.target

[Service]
User=flowerdocs
ExecStart=/opt/flowerdocs/arondor-arender-hmi-spring-boot-[shortcode].jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
{{< /tab >>}}
[shortcode] 


Afin que le service soit démarré automatiquement par `systemd`, exécuter les commandes suivantes :


[shortcode]
[shortcode]
systemctl enable gui.service
{{< /tab >>}}
[shortcode]
systemctl enable core.service
{{< /tab >>}}
[shortcode]
systemctl enable arender-hmi.service
{{< /tab >>}}
[shortcode] 

### Configuration de la JVM

Pour configurer la JVM de l'application lancée par le service Linux, il est nécessaire d'ajouter un fichier de configuration dans le même répertoire que le JAR. 
Ce fichier de configuration doit avoir le même nom que le JAR avec l'extension `conf`.

### Commandes

Pour lancer les services, il suffit ensuite de lancer les commandes : 

[shortcode]
[shortcode]
service gui start
[shortcode]
[shortcode]
service core start
{{< /tab >>}}
[shortcode]
service arender-hmi start
{{< /tab >>}}
[shortcode] 

Les autres commandes standards sont également supportées : `status`, `stop` ou `restart`.