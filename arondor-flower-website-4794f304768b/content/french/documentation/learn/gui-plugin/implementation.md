+++
 date = "2020-02-01T11:20:01+02:00"
title = "Implémentation"
+++

# Objectif

Ce module de formation a pour objectif de poser les bases du développement d'un [plugin de la GUI](broken-link.md) sécurisé.
Ce plugin pourra être consommé depuis et à travers FlowerDocs GUI. Il exposera un service consommant les services exposés par FlowerDocs Core.


# Prérequis

Ce tutoriel est basé sur Maven et nécessite l'utilisation de l'Artifactory Arondor dans lequel sont déployées les librairies FlowerDocs.
Si vous êtes externe à Arondor, veuillez contacter le support FlowerDocs pour obtenir les librairies mentionnées.

# Mise en place

## Création du projet

A l'aide de votre IDE préféré, commencez par créer un nouveau projet Maven avec le POM suivant : 

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

    <groupId>com.flower.docs.samples</groupId>
    <artifactId>secured-gui-plugin</artifactId>
    <version>0.0.1-SNAPSHOT</version>

	<dependencies>
		<dependency>
			<groupId>com.flower.docs</groupId>
			<artifactId>flower-docs-starter-client</artifactId>
			<version>2025.2.0</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
				<executions>
					<execution>
						<goals>
							<goal>repackage</goal>
							<goal>build-info</goal>
						</goals>
					</execution>
				</executions>
				<configuration>
					<executable>true</executable>
				</configuration>
			</plugin>
		</plugins>
	</build>
</project>
```

## Application Spring Boot

Cette application Spring Boot s'appuie sur le [starter Spring Boot](broken-link.md) fourni par FlowerDocs.

Pour commencer, nous avons besoin d'une _main class_ Spring Boot annotée avec l'annotation `@SpringBootApplication` : 

```java
package com.flower.samples;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.flower.docs.FlowerDocsClient;
import com.flower.docs.SecurityMode;

@SpringBootApplication
@FlowerDocsClient(security = SecurityMode.TOKEN)
public class SecuredGUIPlugin
{
	public static void main(String[] args)
	{
		SpringApplication.run(SecuredGUIPlugin.class, args);
	}
}
```

Ici l'annotation `@FlowerDocsClient` permet de configurer automatiquement : 

* le client Java permettant de consommer les web services exposés par FlowerDocs Core
* la sécurisation des requêtes : un token est exigé pour consommer les `@RestController` exposés par l'application

<br/>
Afin de configurer l'application, ajoutez ensuite le fichier `application.properties` dans le répertoire `src/main/resources` de votre projet : 

## Configuration

```bash
spring.application.name=secured-gui-plugin
server.port=2802
server.servlet.context-path=/secured
ws.url=http://localhost:8081/core/services
```
:::info
Les autres moyens de configuration offerts par le framework Spring Boot peuvent également être utilisés.
Il est ainsi possible d'externaliser la configuration de l'application.
:::

## Développement du web service

Dans cet exemple, le web service permettra de compter le nombre de documents accessibles par l'utilisateur connecté.
Le web service sera implémenté à l'aide de l'annotation Spring `@RestController`.

```java
package com.flower.samples;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flower.docs.domain.exception.FunctionalException;
import com.flower.docs.domain.exception.TechnicalException;
import com.flower.docs.domain.search.SearchRequest;
import com.flower.docs.service.api.document.DocumentService;

@RestController
public class FlowerRestController
{
	@Autowired
	private DocumentService documentService;

	@GetMapping("/count")
	public String count() throws TechnicalException, FunctionalException
	{
		return "documents: " + documentService.search(new SearchRequest()).getFound();
	}
}
```

Ici le service de gestion de documents `documentService` permet de déterminer le nombre total de documents.