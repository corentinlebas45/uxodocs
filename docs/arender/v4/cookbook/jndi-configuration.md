---
title: "Configuration JNDI pour ARender Web-UI"
description: ""
weight: 
draft: false
icon: mdi-folder-cog-outline
## search related keywords
keywords: ["tutorial", "jndi" ]
---

## Prérequis

- version >= ARender 3.1.9

## Intérêt du JNDI dans ARender Web-UI

La configuration du JNDI permet de ne plus avoir à modifier le binaire
ARender Web-UI à chaque livraison.

Depuis la version 3.1.9 d'ARender, la configuration serveur a été
externalisée dans un fichier de propriété : arender-server.properties
(situé dans le dossier WEB-INF/classes de ARender Web-UI). Ce qui a permis
de mettre en place la technologie JNDI dans ARender pour définir la
configuration directement depuis le serveur d'applciation. Ci-dessous
vous trouverez un détail par serveur d'application.

## Configuration JNDI pour Apache Tomcat

- Créer un fichier de propriété (exemple :
  *customer-<integration_type>.properties*, avec
  <integration_type> le type d'intégration; vanilla, alfresco,
  filenet) et enregistrer le dans le dossier de votre choix (Exemple :
  *C:\Dev\apache-tomcat-8.5.13\customConfiguration*).
- Y ajouter la configuration spécifique voulue en s'inpirant des
  propriétés définies dans arender-server.properties (situé dans le
  dossier WEB-INF/classes de ARender Web-UI) :
  
  ```cfg
  arender.server.rendition.hosts=http://localhost:8761/
  ```

- Ouvrir le fichier de configuration Apache Tomcat **context.xml**
  (situé dans le dossier *conf*)
- Y ajouter la variable d'environnement **propertiesFileLocation**
  ayant pour valeur le chemin menant vers le fichier de propriété
  *customer-<integration_type>.properties* créé ci-dessus. Exemple
  :

<!-- end list -->

``` xml
<Context>
    <Environment name="propertiesFileLocation" value="C:\Dev\apache-tomcat-8.5.13\customConfiguration" type="java.lang.String" override="false"/>
</Context>
```

- Redémarrer le serveur d'application.

## Configuration JNDI pour Wildfly

- Écraser la configuration du web.xml

  [shortcode]

  ```XML
  <!-- Commenter la configuration ci-dessous -->
  <!--
  	<resource-ref>
  description: ""
		<res-type>java.lang.String</res-type>
	</resource-ref>
  -->
  ```

  [shortcode]

- Écraser le contexte JNDI par défaut

  [shortcode]

  ```XML
  <!-- Commenter la configuration ci-dessous -->
  <!--<jee:jndi-lookup id="propertiesFileLocation" jndi-name="java:comp/env/propertiesFileLocation"
               expected-type="java.lang.String" default-value="#{systemProperties['user.home']}/ARenderConfiguration/"/>-->
  
  <!--Ajouter la configuration Wildfly ci-dessous -->
  <jee:jndi-lookup id="propertiesFileLocation" jndi-name="java:global/propertiesFileLocation"
                   expected-type="java.lang.String" default-value="#{systemProperties['user.home']}/ARenderConfiguration/"/>
  ```

  [shortcode]

- Créer un fichier de propriété (exemple :
  *customer-<integration_type>.properties*) et enregistrer le dans
  le dossier de votre choix (Exemple :
  *C:\Dev\customConfiguration*).
  - Y ajouter la configuration spécifique voulue en s'inspirant des
    propriétés définies dans arender-server.properties (situé dans le
    dossier WEB-INF/classes d’ARender Web-UI) :

    {{< tag type="code" title="customer-<integration_type>.properties">}}

  ```cfg
      arender.server.rendition.hosts=http://rendition-server:8761/`
  ```
  
    [shortcode]

- Ouvrir le fichier de configuration Wildfly **standalone.xml** (situé
  dans le dossier *configuration*)
  - Y ajouter le binding **propertiesFileLocation** ayant pour valeur le
    chemin menant vers le dossier contenant le fichier de propriété
    *customer-<integration_type>.properties* créé ci-dessus. Exemple
    :

    [shortcode]
  
  <!-- end list -->
  
  ``` xml
  <subsystem xmlns="urn:jboss:domain:naming:2.0">
      <bindings>
          <simple name="java:global/propertiesFileLocation" value="C:\Dev\customConfiguration\" type="java.lang.String"/>
      </bindings>
      <remote-naming/>
  </subsystem>
  ```
     [shortcode]

- Redémarrer le serveur d'application.

## Configuration JNDI pour Websphere

- Créer un fichier de propriété (exemple :
  *customer-<integration_type>.properties*) et enregistrer le dans
  le dossier de votre choix (Exemple :
  *C:\Dev\customConfiguration*).
- Y ajouter la configuration spécifique voulue en s'inpirant des
  propriétés définies dans arender-server.properties (situé dans le
  dossier WEB-INF/classes de ARender Web-UI) :
  {{< tag type="code" title="arender-server.properties">}}
  
  ```cfg
  arender.server.rendition.hosts=http://localhost:8761/
  ```
  
  [shortcode]
- Ouvrir la console Websphere et se rendre dans : Environnement ->
  Attribution des noms -> Liaisons de l'espace de nom :

![image]([shortcode])

- Cliquer sur nouveau puis sélectionner chaine et cliquer sur suivant :

![image]([shortcode])

- Remplir les champs comme suit puis cliquer sur suivant

  Identificateur de liaison : **propertiesFileLocation**

  Nom de l'espace de nom relatif pour rechercher un préfixe de nom
  'cell/node/**nodename**/servers/**serverName** (en remplaçant les noms de
  noeud et nom de serveur) :

  > cell/node/**nodename**/servers/**serverName**/propertiesFileLocation`

  Valeur de la chaîne : le chemin menant vers le dossier contenant le
  fichier de propriété *customer-<integration_type>.properties* créé
  ci-dessus

![image]([shortcode])

- Enfin cliquer sur Terminer

![image]([shortcode])

- Redémarrer le serveur d'application.
