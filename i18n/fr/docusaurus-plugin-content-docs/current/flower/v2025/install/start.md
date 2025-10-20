---
title: Lancement
---

# Lancement manuel


./flower-docs-gui-webapp-2025.2.0.jar 
./flower-docs-core-webapp-2025.2.0.jar
{{< /tab >>}}

# Installation en service

## Linux

Les applications FlowerDocs peuvent être installées simplement en tant que service Linux `init.d` ou `systemd`.


### Service init.d

Afin d'installer les applications FlowerDocs en tant que service `init.d`, il suffit de créer un lien symbolique dans le répertoire `/etc/init.d` : 

chmod +x /opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar
ln -s /opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar /etc/init.d/gui
chmod +x /opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar
ln -s /opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar /etc/init.d/core
{{< /tab >>}}
{{< /tab >>}}


Avec ce type de service, l'utilisateur auquel appartient le JAR est utilisé pour exécuter l'application. 
Un fichier de log par application est alimenté dans le répertoire `/var/log`.

Afin que le service démarre automatiquement au démarrage du système : 

update-rc.d gui defaults
update-rc.d core defaults
{{< /tab >>}}
update-rc.d arender-hmi defaults
{{< /tab >>}}


Si le service n'est pas trouvé, il peut être nécessaire d'exécuter la commande :

```bash
systemctl daemon-reload
```

### Service systemd

Pour installer les applications FlowerDocs en tant que service `systemd`, les scripts `gui.service`, `core.service` et `arender-hmi.service` doivent être créés dans le répertoire `/etc/systemd/system` tel que :

[Unit]
Description=FlowerDocs GUI
After=syslog.target

[Service]
User=flowerdocs
ExecStart=/opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
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
[Unit]
After=syslog.target

[Service]
User=flowerdocs
SuccessExitStatus=143

[Install]
WantedBy=multi-user.target
{{< /tab >>}}


Afin que le service soit démarré automatiquement par `systemd`, exécuter les commandes suivantes :


systemctl enable gui.service
{{< /tab >>}}
systemctl enable core.service
{{< /tab >>}}
systemctl enable arender-hmi.service
{{< /tab >>}}

### Configuration de la JVM

Pour configurer la JVM de l'application lancée par le service Linux, il est nécessaire d'ajouter un fichier de configuration dans le même répertoire que le JAR. 
Ce fichier de configuration doit avoir le même nom que le JAR avec l'extension `conf`.

### Commandes

Pour lancer les services, il suffit ensuite de lancer les commandes : 

service gui start
service core start
{{< /tab >>}}
service arender-hmi start
{{< /tab >>}}

Les autres commandes standards sont également supportées : `status`, `stop` ou `restart`.