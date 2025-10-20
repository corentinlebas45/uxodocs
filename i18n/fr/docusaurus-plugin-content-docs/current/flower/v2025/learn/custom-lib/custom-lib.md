---
title: Librairie personnalisée
description: Développez une librairie Java pour surcharger un comportement du Core.
---

# Objectif

Dans ce module, nous développerons une librairie Java nous permettant de surcharger un comportement natif de FlowerDocs Core : la génération de jeton utilisateur lors de l'authentification.

En effet, nous allons ajouter à chaque jeton utilisateur un attribut personnalisé nommé `custom`.

# Développement de la librairie

## Projet Maven

Pour démarrer le développement de la librairie personnalisée, commencez par ouvrir votre IDE préféré puis créez un nouveau projet Maven à partir du POM suivant.
Dans ce module, nous aurons besoin des deux dépendances suivantes : 

* Spring Boot : pour profiter des mécanismes de configuration de ce framework et qu'ainsi la librairie puisse être utilisée par FlowerDocs Core
* FlowerDocs Core Services pour surcharger le générateur de jeton utilisé par défaut par la couche de services


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

## Générateur de jeton

Dans ce module, nous souhaitons ajouter un attribut `custom` aux utilisateurs qui s'authentifient sur FlowerDocs.
Pour cela, nous allons surcharger le générateur de jeton `JWTTokenHelper` utilisé par défaut par FlowerDocs Core.

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

Afin que la librairie définisse le générateur de jeton précédemment ajouté, nous allons utiliser le mécanisme d'[Auto-configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-auto-configuration) de Spring Boot.
Notre classe de configuration permettra d'instancier automatiquement un objet `CustomTokenHelper` et de le fournir au contexte Spring Beans.

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

Pour que cette classe de configuration soit chargée automatiquement par le mécanisme d'Auto-configuration, il est nécessaire de la référencer dans un fichier `META-INF/spring.factories`.
Avec Maven, ce fichier doit être placé dans le répertoire `src/main/resources` de votre projet.

org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.flower.samples.SampleLibAutoConfiguration

## Compilation

Pour compiler la librairie, utilisez votre IDE avec les goals `clean` et `install` ou lancez la commande `mvn clean install` à la racine de votre projet.

# Modification du classpath

## Service Linux

Lorsque le Core est démarré en tant que service Linux (comme indiqué [ici](broken-link.md) ), le dossier `libs` est ajouté au classpath de la JVM lancé par le service.
Ainsi tous les JARs inclus dans ce répertoire seront ajoutés au classpath de la JVM.

Il suffit donc de copier la librairie dans ce répertoire avec le même utilisateur que celui avec lequel le service est lancé (ou ayant les droits de lecture sur le fichier).

## JAR exécutable

Lorsque le Core est démarré comme un JAR exécutable avec une commande du type `java -jar`, la librairie personnalisée doit être ajoutée manuellement au classpath de la JVM. 
Pour cela, utilisez le paramètre `-cp`.

# Test

* Générez un token (par exemple à l'aide de Swagger `/core/swagger-ui/index.html`) à l'aide de la triade : 
    * Scope
    * Identifiant d'utilisateur
    * Mot de passe

* A partir du token généré : 
    * Ouvrez un navigateur et allez sur [jwt.io](https://jwt.io/) 
    * Collez le token généré dans le champ _Encoded_

L'attribut `custom` ajouté par l'objet `CustomTokenHelper` est bien présent dans les attributs ajoutés au jeton.