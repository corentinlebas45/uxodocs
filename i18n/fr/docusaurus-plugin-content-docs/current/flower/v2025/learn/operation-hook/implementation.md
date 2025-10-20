---
title: Implémentation
---

:::info
Ce tutoriel est basé sur Maven et nécessite l'utilisation de l'Artifactory Arondor dans lequel sont déployées les librairies FlowerDocs.
Si vous êtes externe à Arondor, veuillez contacter le support FlowerDocs pour obtenir les librairies mentionnées.

Quand vous aurez terminé ce module de formation, vous serez capable de développer un [`OperationHook`](broken-link.md) sécurisé permettant de réagir à la création de documents et de les renommer automatiquement.
:::

# Création du projet

A l'aide de votre IDE préféré, commencez par créer un nouveau projet Maven avec le POM suivant : 

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

# Application Spring Boot

Cette application Spring Boot s'appuie sur le [starter Spring Boot](broken-link.md) fourni par FlowerDocs.

* Pour commencer, nous avons besoin d'une _main class_ Spring Boot annotée avec l'annotation `@SpringBootApplication` : 

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

* Ajoutez ensuite le fichier `application.properties` dans le répertoire `src/main/resources` de votre projet pour configurer l'application : 
spring.application.name=modify-hook
server.port=7777
server.servlet.context-path=/modify

ws.url=http://localhost:8081/core/services

internal.realm.users[0].id=<user>
internal.realm.users[0].password=<password>








# Développement du hook

Passons maintenant à l'`OperationHook` ! Pour implémenter votre premier hook, créez la classe `ModifyOperationHook` telle que : 

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





