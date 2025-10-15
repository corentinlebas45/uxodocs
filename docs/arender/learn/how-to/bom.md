---
title: "Importer les dépendances d'ARender"
weight: 
draft: false
icon: mdi-application-import
keywords: ["tutorial", "import", "maven", "bom", "dependencies"]
---

[shortcode]

Cette fonctionnalité est utilisable depuis la version 4.4.0

[shortcode]

## Introduction

Le BOM d'ARender est tout simplement un fichier POM contenant certaines des dépendances
d'ARender définit dans un dependencyManagement. Il permet entre autre à un projet utilisant
des libraires d'ARender d'être toujours assuré d'utiliser les même versions des libraires
tierces qu'ARender. L'avantage est que le BOM est importable ce qui laisse toujours la
possibilité à un projet d'avoir un autre POM parent.

## Les BOM ARender

Il y a en tout 3 BOM disponible, celui du web-ui, de la rendition et le root qui est le pom
parent de ces deux derniers et qui contient donc les librairies communes au web-ui et à la
rendition.

```cfg
<dependency>
	<groupId>com.arondor.arender</groupId>
	<artifactId>arender-bom-root</artifactId>
	<version>${arender.version}</version>
</dependency>

<dependency>
	<groupId>com.arondor.arender</groupId>
	<artifactId>arender-bom-web-ui</artifactId>
	<version>{arender.version}</version>
</dependency>

<dependency>
	<groupId>com.arondor.arender</groupId>
	<artifactId>arender-bom-rendition</artifactId>
	<version>{arender.version}</version>
</dependency>
```

### Exemple

```cfg
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.arondor.test</groupId>
    <artifactId>my-parent-pom</artifactId>
    <version>0.0.1-SNAPSHOT</version>
  </parent>

  <artifactId>custom-arender-connector</artifactId>
  <packaging>jar</packaging>

  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>com.arondor.arender</groupId>
        <artifactId>arender-bom-web-ui</artifactId>
        <version>${arender.version}</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>

  <dependencies>
    <dependency>
      <groupId>org.springframework.security</groupId>
      <artifactId>spring-security-oauth2-client</artifactId>
      <scope>provided</scope>
    </dependency>

    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <scope>provided</scope>
    </dependency>
  </dependencies>

</project>
```

Nous pouvons voir ici l'import du BOM dans le dependencyManagement ainsi que l'utilisation
de certaines dépendances qui n'ont pas version définit. En effet, maven saura automatiquement
utiliser la version définit dans le BOM.