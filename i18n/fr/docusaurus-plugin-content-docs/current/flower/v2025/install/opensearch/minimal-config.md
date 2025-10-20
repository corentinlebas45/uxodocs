---
title: Configuration minimale
intro: 
---

:::info
Cette documentation s'appuie sur le dossier `${FD_HOME}` contenant les fichiers de configuration des applications.
:::

# FlowerDocs Core 

L'ensemble des propriétés permettant de configurer FlowerDocs Core doivent être ajoutées dans un fichier ``core.properties`` situé dans le répertoire ``${FD_HOME}``.  
Ce fichier est chargé au démarrage de la JVM, les modifications ne sont donc prises en compte qu'après redémarrage du serveur d'application.

```properties
file.dir=C:\\FlowerDocs\\Files\\	
```
# FlowerDocs GUI 

L'ensemble des propriétés permettant de configurer l'application FlowerDocs GUI doivent être ajoutées dans le fichier `gui.properties` situé dans le répertoire `${FD_HOME}`.  
Ce fichier est chargé au démarrage de la JVM, les modifications ne sont donc prises en compte qu'après redémarrage de l'application.

```properties
ws.url=http://<flower host>:<flower port>/<flower context path>/services
arender.rendition.nodes=http(s)://rendition-host:8761
```