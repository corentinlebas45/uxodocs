---
title: "Plugins"
draft: false
weight: 2
icon: mdi-puzzle-outline
keywords: ["configuration", "plugins"]
---

ARender permet l'intégration de Plugins. Ces derniers peuvent être
ouverts de deux façon:

- Ouverture directe depuis l'URL ARender avec le paramètre d'URL
  *plugin=pluginName*
- Ouverture depuis ARender dans une nouvelle fenêtre par lancement
  d'évènements (configuration d'un bouton)

## Configuration XML des Plugins

Si vous utilisez le mode lancement depuis un bouton, vous devrez
configurer un bouton de la façon suivante:


``` xml
<bean id="topPanel" class="com.arondor.viewer.client.toppanel.TopPanel">
    <property name="containedWidgets">
        <list>
            [...]
            <ref bean="plumeButton" />
        </list>
    </property>
    <property name="moreButton">
        <ref bean="moreButton" />
    </property>
</bean>
[...]
<bean id="plumeButton"
    class="com.arondor.viewer.client.toppanel.presenter.ButtonPresenter"
    scope="prototype">
    <property name="enabled" value="true" />
    <property name="imageResource">
        <bean
            class="com.arondor.viewer.client.defferedmodules.ExternalImageResource">
            <property name="width" value="32" />
            <property name="height" value="32" />
            <property name="url" value="icons/plume.png" />
        </bean>
    </property>
    <property name="buttonTitle">
        <value>Plume</value>
    </property>
    <property name="buttonHandler">
        <bean
            class="com.arondor.viewer.client.toppanel.behavior.document.GenericHandler">
            <constructor-arg>
                <bean
                    class="com.arondor.viewer.client.events.document.AskOpenPluginEvent">
                    <constructor-arg>
                        <value>plume</value>
                    </constructor-arg>
                    <property name="openInMultiView" value="true" />
                </bean>
            </constructor-arg>
        </bean>
    </property>
</bean>
```




``` xml
<bean id="topPanel" class="com.arondor.viewer.client.toppanel.TopPanel">
    <property name="containedWidgets">
        <list>
            [...]
            <ref bean="plumeButton" />
        </list>
    </property>
    <property name="moreButton">
        <ref bean="moreButton" />
    </property>
</bean>
[...]
<bean id="plumeButton"
    class="com.arondor.viewer.client.toppanel.presenter.ButtonPresenter"
    scope="prototype">
    <property name="enabled" value="true" />
    <property name="className" value="standardButton icon-plugin-plume toppanelButton" />
    <property name="buttonTitle">
        <value>Plume</value>
    </property>
    <property name="buttonHandler">
        <bean
            class="com.arondor.viewer.client.toppanel.behavior.document.GenericHandler">
            <constructor-arg>
                <bean
                    class="com.arondor.viewer.client.events.document.AskOpenPluginEvent">
                    <constructor-arg>
                        <value>plume</value>
                    </constructor-arg>
                    <property name="openInMultiView" value="true" />
                </bean>
            </constructor-arg>
        </bean>
    </property>
</bean>
```


Les points importants ici sont :

- *openInMultiView* qui annonce à ARender que ce plugin se lance en
  multiView et non pas en tant que document fullpage.
- *AskOpenPluginEvent* qui possède un constructor-arg qui doit
  posséder le même nom que le plugin défini côté serveur en XML.

Pour configurer le plugin en lui même, il suffit d'ajouter la
configuration soit dans le fichier arender-plugin.xml d'ARender Web-UI soit
d'ajouter à ce fichier plugin un import de votre XML contenant la
configuration de votre plugin.


``` xml
<?xml version="1.0" encoding="UTF-8"?>

<beans default-lazy-init="true" default-autowire="no"
    xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- xml imported by ARender, please add any plugins you wish to import in this file -->
    <import resource="plume.xml"/>
</beans>
```


``` xml
<?xml version="1.0" encoding="UTF-8"?>

<beans default-lazy-init="true" default-autowire="no"
    xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="plume" class="com.arondor.viewer.common.plugin.Plugin">
        <property name="iframeSrc" value="http://plume.arender.fr/" />
    </bean>
</beans>
```


Vous pourrez noter dans la configuration du plugin de classe
*com.arondor.viewer.common.plugin.Plugin* que nous avons utilisé la
propriété iframeSrc. Cette propriété permet de définir l'URL à utiliser
pour le plugin à intégrer dans ARender en tant qu'iframe.

Les modes de configuration sont les suivants :

- **iframeSrc :** spécifie la source URL de l'iframe d'intégration du
  plugin. Ceci implique le mode iframe.
- **html :** spécifie le contenu HTML total. Ceci permet un contrôle
  complet mais retire le paramétrage par JS.
- **innerHTML :** spécifie le HTML contenu à placer dans l'iframe.
  Permet une iframeSrc vide et un contenu innerHTML.
