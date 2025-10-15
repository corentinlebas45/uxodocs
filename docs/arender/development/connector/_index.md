---
title: "Connecteur"
draft: false
weight: 1
type: docs
icon: mdi-file-code
keywords: [ "connecteur" , "ged", "document", "annotation" ]
---

Bienvenue dans la documentation du développement de connecteurs sur ARender. Cette documentation vous guidera à travers
le processus de création d'un connecteur pour ARender, en mettant l'accent sur l'implémentation en Java et les étapes
nécessaires pour intégrer le connecteur dans ARender WEB-UI.

## Prérequis
### Connaissances techniques nécessaires

Avant de commencer le développement du connecteur, assurez-vous de satisfaire les prérequis suivants :

* **ARender installé et fonctionnel** : assurez-vous qu'ARender est correctement installé et fonctionnel dans votre 
  environnement.
* Connaissances en **Java** : le développement du connecteur se fera en Java, donc des connaissances solides en Java sont 
  nécessaires.
* Connaissance en **Maven** : la construction du livrable est faite (dans cette documentation) par Maven 
  (https://maven.apache.org/).
* Connaissances dans l'**applicatif cible** : vous devez avoir des connaissances dans l'applicatif pour lequel vous 
  développez le connecteur. Cela inclut la récupération de documents via un Service Web, la gestion de la sécurité pour 
  cet applicatif, et la sécurisation de l'appel de récupération du document.
  
### Infrastructure réseau

![image]([shortcode])

## Partie 1 : Fonctionnement d'ARender avec un connecteur

ARender est un outil de rendu de documents qui peut être intégré avec différents systèmes de gestion de documents (GED)
grâce à des connecteurs personnalisés (voir 
[la liste des connecteurs existants]({{< relref "/content/what-is-arender/integrations.fr.md">}})).

Un connecteur permet à ARender de se connecter à une GED spécifique pour, entre autres, récupérer des 
documents et les afficher via ARender. Le processus se déroule comme suit :

* Ouverture d'une URL depuis l'application parente (GED) avec un liste de paramètres définis dans le connecteur. Ces 
  paramètres sont souvent des informations telles que le (ou les) identifiant(s) du (des) document(s) et un jeton de 
  sécurité.
  * Exemple : *http://localhost:8080/?id=1234&token=abcd*

* Parsing de l'URL : extraction des paramètres de l'URL et sélection du connecteur correspondant. Une fois le connecteur
  sélectionné, ce dernier définit l'ID de chaque document à afficher et crée un DocumentAccessor pour chacun.

* Récupération des documents : le connecteur utilise chacun des DocumentAccessor pour récupérer les documents depuis la 
  GED.
  
## Partie 2 : Développement du connecteur de document

### Prérequis

* Le couple login/mot de passe d'accès à notre répertoire de binaires (si vous n'avez pas d'accès merci de prendre 
  contact avec nous sur notre outil de ticketing ou par mail : arender-sales@arondor.com)
* Un environnement de développement Java and Maven.

### Configuration de Maven

* Dans le fichier de configuration maven **.m2/settings.xml** (see 
  [maven documentation](https://maven.apache.org/settings.html)).
* Configurer le login et mot de passe dans un XML comme ci-dessous : 
  * Modifier les placeholders ci-dessous par votre couple login / mot de passe.

```xml
    <servers>
      <server>
        <id>arondor</id>
        <username>loginToReplaceByYours</username>
        <password>loginToReplaceByYours</password>
      </server>
    </servers>
```

* Ensuite configurer l'accès aux librairies ARender comme ci-dessous :
```xml
  <profiles>
  	<profile>
  		<repositories>
  			<repository>
  				<snapshots />
  				<id>arondor</id>
  				<url>https://artifactory.arondor.cloud/artifactory/arondor-all/</url>
  			</repository>
  		</repositories>

  		<pluginRepositories>
  			<pluginRepository>
  				<snapshots />
  				<id>arondor</id>
  				<url>https://artifactory.arondor.cloud/artifactory/arondor-all/</url>
  			</pluginRepository>
  		</pluginRepositories>
  	  
  		<id>artifactory</id>
  	</profile>
  </profiles>

  <activeProfiles>
    <activeProfile>artifactory</activeProfile>
  </activeProfiles>
```

### Développement

#### Introduction

Veuillez trouver ci-dessous le guide sur le développement d'un connecteur qui récupère un document de votre système de 
gestion électronique de documents (ECM).

Un exemple en ligne d'un connecteur est disponible à l'URL suivante :
https://github.com/arondor-connectors/sample-connectors/.

#### DocumentAccessor

Le développement d'un nouveau connecteur ARender doit commencer par l'implémentation de l'interface DocumentAccessor.

* Créer une classe qui implémente l'interface suivante : **com.arondor.viewer.rendition.api.document.DocumentAccessor**.

```java
InputStream getInputStream() throws IOException;
```

L'implémentation de cette dernière doit définir l'appel au service permettant de récupérer le document.
    
* Exemple d'implémentation en ligne : [ici](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/documentaccessors/SampleDocumentAccessor.java).

#### URLParser

Ensuite, la récupération des informations nécessaires au DocumentAccessor pour récupérer le document doivent être 
récupérées depuis l'URL. Pour cela :

* Créer une classe qui implémente l'interface suivante : **com.arondor.viewer.rendition.api.DocumentServiceURLParser**,
  * Appelons-la *SampleURLParser* pour la suite
* Deux méthodes seront à implémenter : 

```java
boolean canParse(DocumentService documentService, ServletContext application, HttpServletRequest request);
```

L'implémentation de cette dernière doit retourner vrai ou faux selon si les paramètres dans l'URL sont suffisant pour 
ARender pour aller récupérer le document.

```java
DocumentId parse(DocumentService documentService, ServletContext application, HttpServletRequest request) throws DocumentNotAvailableException, DocumentFormatNotSupportedException;
```
L'implémentation de cette méthode doit retourner l'Id du document à afficher au sens ARender.
  
* Exemple d'implémentation en ligne : [ici](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/urlparsers/SampleURLParser.java).

## Partie 3 : Configuration d'ARender

* Construire le package jar via maven,

[shortcode]
Le jar doit contenir les dépendances nécessaires au bon fonctionnement du connecteur avec la GED.

Le pom.xml doit contenir les dépendances ARender nécessaires au bon fonctionnement du produit dans sa version utilisée.
Exemple en ligne :
[ici](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/pom.xml#L19)
[shortcode]

```bash
$> mvn clean install
```

{{< tabs id="2" tabs="Classic mode (Non-Docker), Docker">}}
[shortcode]

* Placer le jar dans le dossier **lib/** d'ARender WEB-UI,
* Configurer l'URLParser développé précédemment, en ajoutant le contenu ci-dessous au fichier
  **configurations/arender-custom-server-integration.xml** :
  
```XML
	<bean id="sampleURLParser" class="com.arondor.arender.sample.connector.urlparsers.SampleURLParser"
          scope="prototype">
    </bean>
```

* Ajouter le nouveau parser, **sampleUrlParser**, dans la liste des parsers mettant à jour le fichier 
  **configurations/arender-custom-server.properties** avec le contenu ci-dessous :
  
```cfg
arender.server.url.parsers.beanNames=sampleUrlParser,DefaultURLParser,DocumentIdURLParser,FileattachmentURLParser,ExternalBeanURLParser,AlterContentParser,FallbackURLParser
```

[shortcode]
[shortcode]

* Configurer l'utilisation de l'URLParser développé précédemment, en tant que bean en créant un fichier nommé
  **arender-custom-server-integration.xml**, et ayant le contenu ci-dessous :

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans default-lazy-init="true" default-autowire="no"
       xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd">

  <!-- xml imported by ARender Java Web Server side, please add any customization you wish to see loaded in this file-->
  <bean id="sampleURLParser" class="com.arondor.arender.sample.connector.urlparsers.SampleURLParser" scope="prototype">
  </bean>
</beans>
```
* Ajouter le nouveau parser, **sampleUrlParser**, dans la liste des parsers en créant un fichier nommé 
  **arender-custom-server.properties**, et ayant le contenu ci-dessous :

```cfg
arender.server.url.parsers.beanNames=sampleUrlParser,DefaultURLParser,DocumentIdURLParser,FileattachmentURLParser,ExternalBeanURLParser,AlterContentParser,FallbackURLParser
```

* Mettre à jour le **docker-compose.yml** en ajoutant le contenu ci-dessous (penser à adapter les chemins selon votre 
  contexte) :

```yml
services:
  ui:
    image: artifactory.arondor.cloud:5001/arender-ui-springboot:${VERSION}
    container_name: ui
    volumes:
      - "/home/centos/ar-deployment/docker-compose/arender-connector-${VERSION}.jar:/home/arender/lib/arender-connector-${VERSION}.jar"
      - "/home/centos/ar-deployment/docker-compose/arender-custom-server-integration.xml:/home/arender/configurations/arender-custom-server-integration.xml"
      - "/home/centos/ar-deployment/docker-compose/arender-custom-integration.xml:/home/arender/configurations/arender-custom-integration.xml"     
```

[shortcode]
[shortcode]

## Partie 4 : Déploiement et test

Pour tester il faut :
* Redémarrer ARender
* Ouvrir une nouvelle fenêtre navigateur et charger l'URL attendue par l'URLParser défini ci-dessus.
  * Exemple : *http://localhost:8080/?id=1234*
* Résultat attendu :
  * **Le document voulu doit s'afficher dans ARender.**
  
### Debugging

Voir [cette page dédiée au logs ARender]({{< relref "/content/guides/exploitation/logs/_index.fr.md">}}).

## Pour aller plus loin - Gestion des annotations

Sans configuration particulière, ARender va stocker les annotations sur le système de fichier du serveur ARender WEB-UI.
Ce n'est pas valide pour un environnement de production.

Ainsi, deux choix s'offrent à vous : 
* Utiliser un connecteur d'annotation déjà existant (Exemple : le connecteur pour stockage dans une base de données).
  * Si c'est votre choix merci d'utiliser le connecteur JDBC existant : **arondor-arender-jdbc-annotation**. Une 
    documentation dédiée va être faite prochainement.
* Développer votre propre connecteur d'annotation. Ceci peut être utile pour stocker les annotations proches des 
  documents et hériter de la sécurité de ces derniers.
  * Si c'est votre choix suivez la documentation ci-après.

### Partie 5 : Développement du connecteur d'annotation

#### Partie 5.1 : Créer une classe implémentant l'Interface SerializedAnnotationContent

Un exemple en ligne est disponible [ici](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/annotationaccessors/SampleSerializedAnnotationContent.java).

Quand vous créez votre propre connecteur d'annotation vous devez définir comment : récupérer et mettre à jour les 
annotations. Pour ce faire, ARender offre une API qui définit deux méthodes principales à implémenter : 
**get()** and **update(..)**.

Ci-dessous les principales étapes afin d'initialiser votre connecteur d'annotation :

* Définition des variables de classe.
* Implémenter l'interface AnnotationAccessor.
* Créer les constructeurs.
* Implémenter les méthodes.

##### Définition des variables de classe

Deux variables de classes sont nécessaires : le logger et le documentId

``` java
private static final Logger LOGGER = Logger.getLogger(SampleSerializedAnnotationContent.class);

private final DocumentId documentId;
```

##### Implementer l'interface SerializedAnnotationContent

``` java
public class SampleSerializedAnnotationContent implements SerializedAnnotationContent 
{
  // Add your implementation here
}
```

#### Créer le constructeur

Un constructeur par défaut, générique, basé uniquement sur le documentId :

``` java
public SampleSerializedAnnotationContent(DocumentId documentId)
{
    this.documentId = documentId;
}
```

#### Implémenter les méthodes

**Méthode get**

Cette méthode doit retourner une liste d'annotations. Définissez ici comment les récupérer.

``` java
@Override
public InputStream get() throws InvalidAnnotationFormatException
{
    if (documentId == null)
    {
        throw new IllegalArgumentException("Invalid null documentId provided !");
    }
    // Add your implementation to get the Annotations by a call to your API to fetch Annotations
}
```

**Méthode update**

Cette méthode prend en paramètre une liste d'Annotation qui a été mise à jour et enregistrée.

Définissez ici où et comment créer ou mettre à jour ces annotations.

``` java
@Override 
public void update(InputStream inputStream)
            throws InvalidAnnotationFormatException, AnnotationCredentialsException, AnnotationNotAvailableException
{
    if (get() == null)
    {
        // Add your implementation to your API to create annotations in your repository
    }
    else
    {
        // Add your implementation to your API to update annotations in your repository
    }
}
```

#### Part 5.2: Créer une classe implémentant l'interface SerializedAnnotationContentAccessor

Un exemple en ligne est disponible [ici](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/annotationaccessors/SampleSerializedAnnotationContentAccessor.java).

Note : il est nécessaire d'utiliser dans cette implémentation la classe définie ci-dessus 
(SampleSerializedAnnotationContent), comme détailler ci-dessous : 

``` java
public class SampleSerializedAnnotationContentAccessor implements SerializedAnnotationContentAccessor
{
    private static final Logger LOGGER = Logger.getLogger(SampleSerializedAnnotationContentAccessor.class);

    @Override public Collection<SerializedAnnotationContent> getAll(DocumentId documentId)
            throws AnnotationsNotSupportedException, InvalidAnnotationFormatException
    {
        LOGGER.debug("getAll annotations for documentId: " + documentId);
        List<SerializedAnnotationContent> annotations = new ArrayList<SerializedAnnotationContent>();
        annotations.add(new SampleSerializedAnnotationContent(documentId));
        return annotations;
    }

    @Override public SerializedAnnotationContent getForModification(DocumentId documentId, Annotation annotation)
            throws AnnotationsNotSupportedException, InvalidAnnotationFormatException
    {
        LOGGER.debug("get annotations for documentId: " + documentId);
        return new SampleSerializedAnnotationContent(documentId);
    }

}
```

### Partie 6 : Configuration d'ARender

* Construire le package jar via maven,

[shortcode]
Le jar doit contenir les dépendances nécessaires au bon fonctionnement du connecteur avec la GED.

Le pom.xml doit contenir les dépendances ARender nécessaires au bon fonctionnement du produit dans sa version utilisée. 
Exemple en ligne :
[ici](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/pom.xml#L19)
[shortcode]
  
* Placer le jar dans le dossier **lib/** d'ARender WEB-UI,
* Configurer l'utilisation du nouveau connecteur d'annotation développé ci-dessus :

[shortcode]

``` xml
  <bean id="sampleXFDFAnnotationAccessor"
        class="com.arondor.viewer.xfdf.annotation.XFDFAnnotationAccessor"
        scope="prototype">
      <property name="contentAccessor">
          <bean
                  class="com.arondor.arender.sample.connector.annotationaccessors.SampleSerializedAnnotationContentAccessor">
          </bean>
      </property>
      <property name="annotationCreationPolicy">
          <bean
                  class="com.arondor.viewer.client.api.annotation.AnnotationCreationPolicy">
              <property name="canCreateAnnotations"
                        value="${arender.server.annotations.can.create}" />
              <property name="textAnnotationsSupportHtml"
                        value="${arender.server.annotations.text.html.support}" />
              <property name="textAnnotationsSupportReply"
                        value="${arender.server.annotations.text.reply.support}" />
              <property name="textAnnotationsSupportStatus"
                        value="${arender.server.annotations.text.status.support}" />
              <property name="textAnnotationsCommentSupportReply"
                        value="${arender.server.annotations.text.comment.reply.support}" />

              <!-- For each annotation, show a list of security levels to choose from -->
              <property name="annotationsSupportSecurity"
                        value="${arender.server.annotations.text.security.support}" />
              <property name="availableSecurityLevels"
                        ref="availableSecurityLevels" />
              <property name="annotationTemplateCatalog"
                        ref="annotationTemplateCatalog" />
          </bean>
      </property>
  </bean>
```
[shortcode]

[shortcode]
```cfg
arender.server.default.annotation.accessor=sampleXFDFAnnotationAccessor
```
[shortcode]

### Partie 7 : Déploiement et test

Pour tester il faut :
* Redémarrer ARender
* Ouvrir une nouvelle fenêtre navigateur et charger l'URL attendue par l'URLParser défini ci-dessus.
  * Exemple : *http://localhost:8080/?id=1234*
* Le document voulu doit s'afficher dans ARender.
* Ajouter une annotation sur le document
* Sauvegarder
* Résultat attendu :
  * **L'annotation doit être sauvegardée via le connecteur développé ci-dessus.**
  * **L'annotation doit être affichée sur le document après la sauvegarde ou après le rafraichissement de la page.**

#### Debugging

Voir [cette page dédiée au logs ARender]({{< relref "/content/guides/exploitation/logs/_index.fr.md">}}).
