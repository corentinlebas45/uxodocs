+++
 date = "2020-02-01T11:20:01+02:00"
title = "Implementation"
+++

# Goal

The aim of this training module is to lay the foundations for the development of a secured [GUI plugin](broken-link.md).
This plugin can be consumed from and through FlowerDocs GUI. It will expose a service consuming the services exposed by FlowerDocs Core.


# Prerequisites

This tutorial is based on Maven and requires the use of the Arondor Artifactory in which the FlowerDocs libraries are implemented.
If you are extern to Arondor, please ask the FlowerDocs support to get the mentioned librairies.

# Set up

## Project creation

Using your favorite IDE, start by creating a new Maven project with the following POM: 

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

## Spring Boot application

This Spring Boot application is based on the [Spring Boot starter](broken-link.md) provided by FlowerDocs.

To start with, we need a _main class_ Spring Boot annotated with the `@SpringBootApplication` annotation: 

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

Here, the `@FlowerDocsClient` annotation automatically configures: 

* the Java client for consuming the web services exposed by FlowerDocs Core
* secure requests: a token is required to consume the `@RestController` exposed by the application

<br/>
To configure the application, this `application.properties` file in the `src/main/resources` directory of your project. 

## Configuration

```bash
spring.application.name=secured-gui-plugin
server.port=2802
server.servlet.context-path=/secured
ws.url=http://localhost:8081/core/services
```
:::info
The other configuration options offered by the Spring Boot framework can also be used.
This makes it possible to outsource application configuration.
:::

## Web service development

In this example, the web service will count the number of documents accessible by the logged-in user.
The web service will be implemented using the `@RestController` Spring annotation.

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

Here, the `documentService` document management service is used to determine the total number of documents.