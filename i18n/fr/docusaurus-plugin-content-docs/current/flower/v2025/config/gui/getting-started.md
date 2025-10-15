+++
date = "1998-03-28T13:20:01+02:00"
title = "Getting Started"
description="Configurer l'interface graphique."
+++

# Introduction

La configuration de l'interface graphique s'effectue à l'aide de fichier XML.
Ces fichiers XML sont stockés dans FlowerDocs en tant que documents de classe `GUIConfiguration`.

Ces fichiers doivent respecter le format Spring Beans. Les différents fragments XML décrits dans cette documentation doivent être ajoutés dans la balise `beans` : 


```xml
	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans" 
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xmlns:context="http://www.springframework.org/schema/context"
		xsi:schemaLocation="http://www.springframework.org/schema/beans
	       http://www.springframework.org/schema/beans/spring-beans.xsd  
	       http://www.springframework.org/schema/context
	       http://www.springframework.org/schema/context/spring-context.xsd">
	
		<!-- Placer votre configuration personnalisée ici -->
	
	</beans>  
```

Pour faciliter l'édition de ces fichiers de configuration, ils peuvent être modifiés directement depuis la console d'administration.

# Description de l'instance

Les propriétés suivantes permettent de définir l'instance déployée, elles sont à ajouter dans le fichier `gui.properties` : 

* ``gui.client.app.desc``  : définit la description de l'instance
* ``gui.client.app.logo``  : définit le logo de l'instance
* ``gui.client.app.env``   : définit l'environnement sur lequel est déployée l'instance
* ``gui.client.app.style`` : définit une feuille de style (CSS) personnalisée à appliquer
* ``gui.password.change.enabled`` : activer/désactiver l'action permettant de changer le mot de passe d'un utilisateur


