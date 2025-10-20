+++
date = "2000-03-29T13:20:01+02:00"
title = "Installation process"
+++

:::info
:::

In the rest of this page, `${APP_HOME}` corresponds to the folder in which each application will be deployed.

<br>
 
# FlowerDocs GUI

* After completing the downloads mentioned in the prerequisites, place the `flower-docs-gui-webapp-2025.2.0.jar` application in the `${APP_HOME}` folder.
* Add `application.properties` file with the following properties: 
```javascript
    spring.task.execution.pool.core-size=16
    spring.task.execution.pool.max-size=16
    spring.task.execution.thread-name-prefix=flowerdocs-async-
```
* Add the `gui.properties` configuration file to `${APP_HOME}`.


* Create the folders `${APP_HOME}/configurations` and `${APP_HOME}/lib`.
* Add the `arender-custom-server.properties` configuration file to `${APP_HOME}/configurations`.
* Add ARender FlowerDocs connector `flower-docs-arender-hmi-2025.2.0.jar` to `${APP_HOME}/lib`.

:::warning
For high availability, it is necessary to activate session affinity on each HMI.
:::

:::warning
Please note that Hazelcast in ARenderHMI with FlowerDocs is not functional and should not be activated.
:::

# FlowerDocs Core

* After completing the downloads mentioned in the prerequisites, place the `flower-docs-core-webapp-2025.2.0.jar` application in the `${APP_HOME}` folder.
* Add the `core.properties` configuration file to `${APP_HOME}`.
