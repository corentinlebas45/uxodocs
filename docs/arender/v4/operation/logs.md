---
title: "Logs"
draft: false
weight: 2
icon: mdi-file-alert-outline
keywords: [ "exploitation", "logs"]
---

Depuis la version 3, ARender s'appuyait sur deux librairies différentes logging : [Log4j](http://logging.apache.org/) 1.x (Web-UI) 
et [Logback](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-logging) (Rendition).

Notons que Log4J ne fournit plus de support pour sa version 1.x depuis Août 2015 ce qui peut être problèmatique pour les failles de sécurités 
qui ne seront jamais corrigé.

Pour harmoniser l'utilisation des logs Web-UI et Rendition, nous avons opté de passer sur du Logback côté Web-UI plutôt que de rester et monter la version Log4j en 2.x.

Bien évidemment, cela va avoir impact sur la configuration puisque la configuration Log4J est différente de Logback.

Pour migrer les fichiers log4j.properties vers son équivalent logback, vous pouvez utiliser le traducteur log4j.properties ([ici](http://logback.qos.ch/translator/)).

## Convertir le fichier de configuration Log4J vers Logback

Le fichier de configuration log4j pour la partie Web-UI ressemblait à cela : 

[shortcode]

```cfg
log4j.rootCategory=WARN, default
log4j.category.com.arondor = INFO
log4j.category.com.arondor.common.management = FATAL
log4j.category.arender-startup=INFO

log4j.category.com.arondor.viewer.common.logger = INFO, perf

log4j.category.com.arondor.common.reflection.parser.spring=OFF

# Avoid to have the performance log in the default log
log4j.additivity.com.arondor.viewer.common.logger=false

log4j.appender.default=org.apache.log4j.ConsoleAppender
log4j.appender.default.layout=org.apache.log4j.PatternLayout
log4j.appender.default.layout.ConversionPattern=%d{ISO8601} %p [%t] %c:%L - %m%n

log4j.appender.VIEWER=org.apache.log4j.RollingFileAppender
log4j.appender.VIEWER.MaxFileSize=20000KB
log4j.appender.VIEWER.MaxBackupIndex=6
log4j.appender.VIEWER.File=/tmp/viewer/server.log
log4j.appender.VIEWER.layout=org.apache.log4j.PatternLayout
log4j.appender.VIEWER.layout.ConversionPattern=%d{ISO8601} %p [%t] %c:%L - %m%n

log4j.appender.perf=org.apache.log4j.RollingFileAppender
log4j.appender.perf.MaxFileSize=20000KB
log4j.appender.perf.MaxBackupIndex=6
log4j.appender.perf.File=arender-hmi-perf.log
log4j.appender.perf.layout=org.apache.log4j.PatternLayout
log4j.appender.perf.layout.ConversionPattern=%m%n
```

[shortcode]

A présent, une fois passé par le traducteur log4j.properties, nous obtenons le résultat suivant :

[shortcode]

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <!-- File Appender for Web-UI server log -->
    <appender name="SERVER" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>arender-server.log</file>
        <encoder>
            <pattern>%d{ISO8601} %p [%t] %c:%L - %m%n</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <fileNamePattern>arender-server.%i.log.zip</fileNamePattern>
            <minIndex>1</minIndex>
            <maxIndex>20</maxIndex>
        </rollingPolicy>
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <maxFileSize>50MB</maxFileSize>
        </triggeringPolicy>
    </appender>

    <!-- File Appender for Web-UI perf log -->
    <appender name="PERF" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>arender-perf.log</file>
        <encoder>
            <pattern>%msg%n</pattern>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <fileNamePattern>arender-perf.%i.log.zip</fileNamePattern>
            <minIndex>1</minIndex>
            <maxIndex>6</maxIndex>
        </rollingPolicy>
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <maxFileSize>50MB</maxFileSize>
        </triggeringPolicy>
    </appender>

    <!-- Console Appender -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{ISO8601} %p [%t] %c:%L - %m%n</pattern>
        </encoder>
    </appender>
    
    <!-- Logger -->
    <logger name="arender-startup" level="INFO" />
    <logger name="com.arondor.common.reflection.parser.spring" level="OFF"/>
    <logger name="com.arondor.viewer.common.logger" level="INFO" additivity="false">
        <appender-ref ref="PERF" />
    </logger>
    <logger name="com.arondor" level="INFO">
    	<appender-ref ref="SERVER" />
    </logger>
    <logger name="com.arondor.common.management" level="FATAL" />
    
    <root level="WARN">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```

[shortcode]

## Emplacement des fichiers de logs

L'emplacement du fichier de log en sortie, pour le serveur de présentation (Web-UI) se trouve dans <TOMCAT_PATH>/bin

Pour les fichiers de log de la rendition, vous les trouverez dans les emplacements suivants :

| Micro-Service        |                              Chemin                               |                                                  Détail |
| :------------------- | :---------------------------------------------------------------: | ------------------------------------------------------: |
| RenditionEngine      |       Rendition/modules/RenditionEngine/arender-server.log        |                        Logs dédié au routage des appels |
| TaskConversionEngine | Rendition/modules/TaskConversionEngine/arender-taskconversion.log |                 Logs dédiés à la conversion de document |
| JNIPDFEngine         |         Rendition/modules/JNIPDFEngine/arender-jnipdf.log         |                     Logs dédiés à la génération d'image |
| PDFBoxEngine         |         Rendition/modules/PDFBoxEngine/arender-pdfbox.log         |          Logs dédiés à la manipulation des fichiers PDF |


## Emplacement du fichier de configuration de log

### Web-UI

| Service              |                              Chemin                               |                                                  Détail |
| :------------------- | :---------------------------------------------------------------: | ------------------------------------------------------: |
| Web-UI Serveur       |      <TOMCAT_PATH>/<arender-web-ui>/WEB-INF/classes/logback.xml   |                   Logs dédié au serveur de présentation |

### Rendition

Pour chacun des micro services, vous trouverez le fichier de configuration logback par défaut dans leur jar.

| Service              |                              Chemin                               |                                                  Détail |
| :------------------- | :---------------------------------------------------------------: | ------------------------------------------------------: |
| RenditionEngine      |                BOOT-INF/classes/logback-spring.xml                |                              Configuration des journaux |
| TaskConversionEngine |                BOOT-INF/classes/logback-spring.xml                |                              Configuration des journaux |
| JNIPDFEngine         |                BOOT-INF/classes/logback-spring.xml                |                              Configuration des journaux |
| PDFBoxEngine         |                BOOT-INF/classes/logback-spring.xml                |                              Configuration des journaux |


Afin d'externaliser la configuration logback, il suffit de créer votre fichier logback.xml puis de créer un fichier application.properties situé
à côté du jar de chacun des micro services avec la propriété suivante pour indiquer l'emplacement du fichier de configuration logback customisé.

{{< tag type="exemple" title="application.properties">}}

```cfg
logging.config=file:<VOTRE_CHEMIN>/logback-spring.xml
```

[shortcode]

## Formater les logs en JSON

La plupart des bibliothèques de journalisation (log) Java offrent aujourd'hui différentes options de mise en page pour le formatage des journaux, afin de répondre précisément aux besoins de chaque projet.

Nous verrons ici comment formater et produire nos entrée de journal au format JSON.

Voici un exemple de la configuration par défaut du micro service Broker afin que les journaux soient sauvegardés dans un fichier :

{{< tag type="example" title="logback-spring.xml">}}

```xml
<appender name="SERVER" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <file>arender-server.log</file>
    <encoder>
        <pattern>%date %level [%thread] %logger{10} [%file:%line] %msg%n</pattern>
    </encoder>
    <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
        <fileNamePattern>arender-server.%i.log.zip</fileNamePattern>
        <minIndex>1</minIndex>
        <maxIndex>100</maxIndex>
    </rollingPolicy>
    <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
        <maxFileSize>50MB</maxFileSize>
    </triggeringPolicy>
</appender>
```

[shortcode]


Pour configurer le formatage en JSON, il faut redéfinir la balise **encoder** pour utiliser le **LayoutWrappingEncoder**.
Cela nous permettra d'utiliser la balise **layout** pour définir le formatage JSON comme décrit ci-dessous :

 {{< tag type="example" title="logback-spring.xml">}}

```xml
<appender name="SERVER" class="ch.qos.logback.core.rolling.RollingFileAppender">
    <file>arender-server.log</file>
    <encoder class="ch.qos.logback.core.encoder.LayoutWrappingEncoder">
        <layout class="ch.qos.logback.contrib.json.classic.JsonLayout">
            <jsonFormatter class="ch.qos.logback.contrib.jackson.JacksonJsonFormatter">
                <prettyPrint>true</prettyPrint>
            </jsonFormatter>
            <timestampFormat>yyyy-MM-dd' 'HH:mm:ss.SSS</timestampFormat>
        </layout>
    </encoder>
    <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
        <fileNamePattern>arender-server.%i.log.zip</fileNamePattern>
        <minIndex>1</minIndex>
        <maxIndex>100</maxIndex>
    </rollingPolicy>
    <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
        <maxFileSize>50MB</maxFileSize>
    </triggeringPolicy>
</appender>
```

[shortcode]


### Rechargement automatique du fichier de configuration lors de la modification

Si configuré, logback-classic recherchera les modifications dans son fichier de configuration et se reconfigurera automatiquement 
lorsque le fichier de configuration changera. 
Afin de demander à logback-classic de rechercher les modifications dans son fichier de configuration et de se reconfigurer automatiquement, 
définissez l'attribut scan de l'élément <configuration> sur true, comme indiqué ci-après.

{{< tag type="example" title="logback-spring.xml">}}

```xml
<configuration scan="true">
    ...
</configuration>
```

[shortcode]
