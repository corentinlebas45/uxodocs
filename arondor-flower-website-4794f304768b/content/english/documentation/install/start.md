+++
date = "2000-03-29T13:20:01+02:00"
title = "Launch"
+++

# Manual launch


./flower-docs-gui-webapp-2025.2.0.jar 
./flower-docs-core-webapp-2025.2.0.jar
{{< /tab >>}}

# Installation in service

## Linux

FlowerDocs applications can be installed simply as a Linux service `init.d` or `systemd`.


### Service init.d

To install FlowerDocs applications as an `init.d`  service, simply create a symbolic link in the `/etc/init.d` directory: 

chmod +x /opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar
ln -s /opt/flowerdocs/flower-docs-gui-webapp-2025.2.0.jar /etc/init.d/gui
chmod +x /opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar
ln -s /opt/flowerdocs/flower-docs-core-webapp-2025.2.0.jar /etc/init.d/core
{{< /tab >>}}
{{< /tab >>}}

With this type of service, the user to whom the JAR belongs is used to run the application. 
One log file per application is stored in the `/var/log` directory.

So that the service starts automatically when the system is booted: 

update-rc.d gui defaults
update-rc.d core defaults
{{< /tab >>}}
update-rc.d arender-hmi defaults
{{< /tab >>}}

If the service is not found, it may be necessary to run the following command:

```bash
systemctl daemon-reload
```

### Service systemd

To install FlowerDocs applications as a `systemd` service, the `gui.service`, `core.service` and `arender-hmi.service` scripts must be created in the `/etc/systemd/system` directory such as :

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

To have the service started automatically by `systemd`, run the following commands:


systemctl enable gui.service
{{< /tab >>}}
systemctl enable core.service
{{< /tab >>}}
systemctl enable arender-hmi.service
{{< /tab >>}}

### JVM configuration

To configure the JVM of the application launched by the Linux service, you need to add a configuration file in the same directory as the JAR. 
This configuration file must have the same name as the JAR, with the extension `conf`.

### Commands

To start the services, simply issue the commands: 

service gui start
service core start
{{< /tab >>}}
service arender-hmi start
{{< /tab >>}}

Other standard commands are also supported: `status`, `stop` or `restart`.
