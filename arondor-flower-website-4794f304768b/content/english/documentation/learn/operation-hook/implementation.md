+++
 date = "2020-02-01T11:20:01+02:00"
title = "Implementation"
+++

:::info
This tutorial is based on Maven and requires the use of the Arondor Artifactory in which the FlowerDocs libraries are implemented.
If you are extern to Arondor, please ask the FlowerDocs support to get the mentioned librairies.

When you have completed this training module, you will be able to develop a secure [`OperationHook`](broken-link.md) to respond to the creation of documents and rename them automatically.
:::

# Project creation

Using your favorite IDE, start by creating a new Maven project with the following POM: 

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

    <groupId>com.flower.docs.samples</groupId>
    <artifactId>modify-operation-hook</artifactId>
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

# Spring Boot application

This Spring Boot application is based on the [Spring Boot starter](broken-link.md) provided by FlowerDocs.

* To start with, we need a _main class_ Spring Boot annotated with the `@SpringBootApplication` annotation: 

package com.flower.samples;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.flower.docs.FlowerDocsClient;
import com.flower.docs.SecurityMode;

@SpringBootApplication
@FlowerDocsClient(security = SecurityMode.USER)
public class ModifyHookApplication
{
    public static void main(String[] args)
    {
        SpringApplication.run(ModifyHookApplication.class, args);
    }
}

* Then add the `application.properties` file to your project's `src/main/resources` directory to configure the application: 
spring.application.name=modify-hook
server.port=7777
server.servlet.context-path=/modify

ws.url=http://localhost:8081/core/services

internal.realm.users[0].id=<user>
internal.realm.users[0].password=<password>








# Hook development

Now we move on to `Operation Hook`! To implement your first hook, create a `ModifyOperationHook` class such as: 

package com.flower.samples;

import org.springframework.web.bind.annotation.RestController;
import org.terracotta.statistics.Time;

import com.flower.docs.domain.component.Component;
import com.flower.docs.domain.exception.FunctionalException;
import com.flower.docs.domain.exception.TechnicalException;
import com.flower.docs.operation.api.DefaultComponentOperationContext;
import com.flower.docs.operation.api.OperationContext;
import com.flower.docs.operation.api.OperationHook;

@RestController
public class ModifyOperationHook extends OperationHook
{
    @Override
    public void process(OperationContext context) throws TechnicalException, FunctionalException
    {
        if (context instanceof DefaultComponentOperationContext)
        {
            DefaultComponentOperationContext componentContext = (DefaultComponentOperationContext) context;
            for (Component component : componentContext.getComponents())
            {
                component.setName(component.getName() + "_" + Time.absoluteTime());
            }
        }
    }
}






