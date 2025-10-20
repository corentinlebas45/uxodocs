+++
date = "2001-04-01T13:20:01+02:00"
title = "Client Java"
description="Consommer les web services à l'aide du client Java."
+++
:::info
Le client Java permet d'interagir avec FlowerDocs Core à travers les web services exposés.

:::



# Set-up

## Maven

Les librairies nécessaires à ce client Java sont publiées dans l'[Artifactory Arondor](https://artifactory.arondor.cloud/artifactory/arondor-release).
Si vous êtes externe à Arondor, veuillez contacter le support FlowerDocs pour obtenir les librairies mentionnées.

Afin d'utiliser le client Java dans un projet Maven, commencez par ajouter la dépendance suivante : 

```xml
<dependency>
    <groupId>com.flower.docs</groupId>
    <artifactId>flower-docs-starter-client</artifactId>
    <version>2025.2.0</version>
</dependency>
```

Cette dépendance tire les dépendances nécessaires pour démarrer un projet de client FlowerDocs.

## Application Spring Boot

Pour définir votre application Spring Boot comme étant un client FlowerDocs, ajouter l'annotation `@FlowerDocsClient` sur la classe principale tel que : 

```java
@SpringBootApplication
@FlowerDocsClient
public class SampleClient
{
    public static void main(String[] args)
    {
        SpringApplication.run(SampleClient.class, args);
    }
}
```

Cette annotation permet d'initialiser la configuration requise à l'initialisation d'un client FlowerDocs. Pour que le client démarre, il est nécessaire de  définir  de la propriété `ws.url` dans le fichier _application.properties_ avec l'URL d'accès aux web services exposés par FlowerDocs.


# Authentification 

Les appels effectués auprès de FlowerDocs Core nécessitent que les requêtes soient authentifiées. Une requête peut être authentifiée en fournissant un jeton utilisateur propre à FlowerDocs.

## Compte de service

Le développement d'une application qui interagit avec FlowerDocs requiert généralement l'utilisation d'un compte de service utilisé pour effectuer les opérations auprès de FlowerDocs Core.

Pour cela, le client Java fournit une classe utilitaire permettant de simplifier la gestion de l'authentification.

```java
@Autowired
private Authenticator authenticator;
...
authenticator.authenticate("scopeId"); 
```

La configuration du compte utilisé se fait à travers les propriétés : 

```properties
flower.user=<identifiant de l'utilisateur>
flower.password=<mot de passe>
```
*Ces propriétés peuvent être soit passées dans le fichier de configuration Spring `application.properties` soit en tant que propriétés de la JVM.*


## Génération d'un token

Un jeton utilisateur peut également être généré dynamiquement à l'aide du service `AuthenticationService` qui expose la méthode [login](/javadocs/service/com/flower/docs/service/api/security/AuthenticationService.html#login) : 

```java
@Autowired
AuthenticationService service;
...
ContextHelper.setScope(new Id("GEC"));
Token token = service.login("user","password");
```

# Développement


## Accès aux services

L'accès aux services FlowerDocs s'appuie sur le contexte Spring. Pour récupérer une instance de service, il suffit d'utiliser l'annotation [@Autowired](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Autowired.html).


Par exemple, pour accéder au service de gestion de documents : 

```java
@Autowired
private DocumentService documentService;
```

## Gestion des logs

Les APIs FlowerDocs s'appuient sur la couche d'abstraction de framework de log [SLF4J](https://www.slf4j.org/). Ce framework permet de s'abstraire du framework de log utilisé. Par défaut, l'implémentation utilisée est [Logback](https://logback.qos.ch/).

<br/>
Pour instancier un logger, il suffit de : 

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
...
private static final Logger LOGGER = LoggerFactory.getLogger(SampleClient.class);
...
LOGGER.info("Found {} documents", response.getFound());

```

:::info
La configuration des niveaux de log est identique à celle de FlowerDocs : [Logs](broken-link.md)
:::

# Définition du protocole

Par défaut, nos APIs utilisent le protocole SOAP.
<br/>
Il est toutefois possible de choisir d'utiliser les APIs en REST en configurant votre application.
Pour ce faire, il est nécessaire de définir la propriété `rest.client.enabled` avec pour valeur `true` dans un fichier _`application.properties`_. 