---
title: "Configuration ARender HMI"
description: "Configuration de l'application ARender HMI"
sidebar_position: 2
---

# Configuration ARender HMI

Cette partie décrit les différentes configurations pour l'application ARender HMI à définir au sein du fichier `arender-custom-server.properties` de l'application.

## Général

| Propriété | Description |
|-----------|-------------|
| `arender.server.rendition.hosts` | Adresses des différentes renditions ARender séparées par une `,` |
| `token.key` | Token partagé entre FlowerDocs Core, FlowerDocs GUI et ARender HMI |
| `ws.url` | URL d'accès aux WebServices FlowerDocs Core |

## Journalisation

Afin de configurer la journalisation des logs de ARender HMI et du connecteur FlowerDocs ARender, il est nécessaire de créer un dossier `configurations` à côté de l'application ARender HMI contenant le fichier `logback.xml` suivant : 

```xml 
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!-- File Appender for Web-UI server log -->
    <appender name="SERVER" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>arender-hmi-server.log</file>
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
        <file>arender-hmi-perf.log</file>
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

    <!-- Console appender -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{ISO8601} %p [%t] %c:%L - %m%n</pattern>
        </encoder>
    </appender>

    <!-- Logger configuration -->
    <logger name="com.arondor.viewer.performance" level="INFO" additivity="false">
        <appender-ref ref="PERF" />
    </logger>

    <root level="INFO">
        <appender-ref ref="SERVER" />
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```