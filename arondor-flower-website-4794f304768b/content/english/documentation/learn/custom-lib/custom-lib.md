+++
date = "2020-02-01T12:20:01+02:00"
title = "Customised library"
description = "Develop a Java library to override a Core behavior."
+++

# Goal

In this module, we will develop a Java library enabling us to override a native FlowerDocs Core behavior: user token generation during authentication.

In fact, we are going to add to each user token a custom attribute named `custom`.

# Library development

## Maven project

To start developing the custom library, first open your favorite IDE, then create a new Maven project from the following POM.
In this module, we will need the following two dependencies: 

* Spring Boot: to take advantage of the framework's configuration mechanisms, so that the library can be used by FlowerDocs Core
* FlowerDocs Core Services to override the default token generator used by the service layer


<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
    <groupId>com.flower.docs.samples</groupId>
	<artifactId>flower-docs-lib-sample</artifactId>
    <version>0.0.1-SNAPSHOT</version>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>com.flower.docs.core</groupId>
			<artifactId>flower-docs-services</artifactId>
			<version>2025.2.0</version>
		</dependency>
	</dependencies>
</project>

## Token generator

In this module, we want to add a `custom` attribute to users authenticating to FlowerDocs.
To do this, we will override the `JWTTokenHelper` token generator used by FlowerDocs Core by default.

package com.flower.samples;

import com.flower.docs.domain.security.AuthenticatedUser;
import com.flower.docs.domain.security.IdentityAttribute;
import com.flower.docs.domain.security.Token;
import com.flower.docs.security.token.JWTTokenHelper;
import com.google.common.collect.Lists;

public class CustomTokenHelper extends JWTTokenHelper
{
    @Override
    public Token generate(AuthenticatedUser user, long validityTime)
    {
        user.getAttributes().add(new IdentityAttribute("custom", Lists.newArrayList("value")));
        return super.generate(user, validityTime);
    }
}


## Auto-configuration

In order for the library to define the previously added token generator, we are going to use Spring Boot's [Auto-configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-auto-configuration) mechanism.
Our configuration class will automatically instantiate a `CustomTokenHelper` object and supply it to the Spring Beans context.

package com.flower.samples;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class SampleLibAutoConfiguration
{
    @Bean
    @Primary
    CustomTokenHelper customTokenHelpder()
    {
        return new CustomTokenHelper();
    }
}

For this configuration class to be loaded automatically by the Auto-configuration mechanism, it must be referenced in a `META-META-INF/spring.factories` file. 
With Maven, this file must be placed in the `src/main/resources` directory of your project.

org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.flower.samples.SampleLibAutoConfiguration

## Compilation

To compile the library, use your IDE with the `clean` and `install` goals or run the `mvn clean install` command at the root of your project.

# Modification of the classpath

## Linux service

When the Core is started as a Linux service (as shown [here](broken-link.md) ), the `libs` folder is added to the JVM classpath launched by the service.
All JARs included in this directory will be added to the JVM classpath.

All you need to do is copy the library into this directory with the same user as the one with whom the service is launched (or who has read rights on the file).

## Executable JAR

When the Core is started as an executable JAR with a command such as `java -jar`, the custom library must be manually added to the JVM classpath. 
To do this, use the `-cp` parameter.

# Test

* Generate a token (e.g. using Swagger `/core/swagger-ui/index.html`) using the: 
    * Scope
    * User identifier
    * Password

* From the generated token: 
    * Open a browser and go to [jwt.io](https://jwt.io/) 
    * Paste the generated token into the _Encoded_ field

The `custom` attribute added by the `CustomTokenHelper` object is indeed present in the attributes added to the token.

