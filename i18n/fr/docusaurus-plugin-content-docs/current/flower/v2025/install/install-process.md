+++
date = "2000-03-29T13:20:01+02:00"
title = "Processus d'installation"
+++

:::info
Cette section décrit l'installation des applications FlowerDocs GUI, FlowerDocs Core et [shortcode]
:::

Dans la suite de cette page `${APP_HOME}` correspond au dossier dans lequel va être deployée chacune des application.

<br>
 
# FlowerDocs GUI

* Après avoir effectué les téléchargements mentionnés dans les prérequis, déposer l'application `flower-docs-gui-webapp-2025.2.0.jar` dans le dossier `${APP_HOME}`.
* Ajouter le fichier de configuration `gui.properties` dans `${APP_HOME}`. 

# [shortcode]

* Après avoir effectué les téléchargements mentionnés dans les prérequis, déposer l'application `arondor-arender-hmi-spring-boot-[shortcode].jar` dans le dossier `${APP_HOME}`.
* Ajouter un fichier `application.properties` avec les propriétés suivantes : 
```javascript
    spring.task.execution.pool.core-size=16
    spring.task.execution.pool.max-size=16
    spring.task.execution.thread-name-prefix=flowerdocs-async-
```
* Créer les dossiers `${APP_HOME}/configurations` et `${APP_HOME}/lib`
* Ajouter le fichier de configuration `arender-custom-server.properties` dans `${APP_HOME}/configurations`. 
* Ajouter le connecteur ARender FlowerDocs `flower-docs-arender-hmi-2025.2.0.jar` dans `${APP_HOME}/lib`. 

:::warning
En haute disponibilité, il est nécessaire d'activer l'affinité de session sur chaque HMI.
:::

:::warning
Veuillez noter que Hazelcast dans ARenderHMI avec FlowerDocs n'est pas fonctionnel et ne doit pas être activé.
:::

# FlowerDocs Core

* Après avoir effectué les téléchargements mentionnés dans les prérequis, déposer l'application `flower-docs-core-webapp-2025.2.0.jar` dans le dossier `${APP_HOME}`.
* Ajouter le fichier de configuration `core.properties` dans `${APP_HOME}`. 
