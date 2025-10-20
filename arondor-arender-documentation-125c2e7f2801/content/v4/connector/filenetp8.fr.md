---
title: "Connecteur FileNet"
weight: 4
draft: false
# search related keywords
keywords: ["filenet", "connecteur"]
---

## ARender pour IBM FileNet

ARender dispose d'un connecteur pré-configuré pour les GED IBM FileNet P8 (4.x) et IBM FileNet Content Manager (5.x).

| Paramètre       | Description                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| id              | Identifiant unique d'une version d'un document                                                                             |
| vsId            | Identifiant d'une VersionSeries permettant de récupérer la dernière version d'un document                                  |
| objectStoreName | Nom de l'ObjectStore dans lequel est stocké le document                                                                    |
| objectType      | Type du document à visualiser : document, folder, contentContainerXML, mixedObjects (facultatif dans le cas d'un document) |

Voici quelques exemples :

- Ouverture d'un document simple stocké dans FileNet P8 :

    `http://{arender_serveur}/ARender.html?id={345A81-KT7SK95747S-5IS8-8SK0}&objectStoreName=OS1`

- Ouverture de deux documents simultanément avec la syntaxe mixedObjects :

    `http://{arender_serveur}/ARender.html?ids=doc:{345A81-KT7SK95747S-5IS8-8SK0},doc:{F64A9342-6114-4A5C-A5E1-589A2FFB159F}&objectStoreName=OS1&objectType=mixedObjects`

- Ouverture de deux documents et d'un folder simultanément :

    `http://{arender_serveur}/ARender.html?objectStoreName=OS1&ids=doc:{3DBE573A-1AC9-4B08-8CB1-8F9495619954},doc:{F64A9342-6114-4A5C-A5E1-589A2FFB159F},folder:{55714817-BDAC-4C8A-9EFB-963E4620A4E4}&objectType=mixedObjects`


La syntaxe mixedObjects est la suivante :
**ids=[ [ "doc" | "folder" ] ":" [ Id du document ou Folder ] [ ","] ]+**

## Ouverture d'un document

Pour ouvrir une version spécifique du document :

- Syntaxe: 
`http://{arender_server}/ARender.html?objectStoreName={objectStoreName}&id={documentId}`

- Syntaxe: 
`http://{arender_server}/ARender.html?objectStoreId={objectStoreId}&id={documentId}`

Pour ouvrir la dernière version du document :

- Syntaxe: 
`http://{arender_server}/ARender.html?objectStoreName={nomObjectStore}&vsId={documentVersionId}`

- Syntaxe: 
`http://{arender_server}/ARender.html?objectStoreId={idObjectStore}&vsId={documentVersionId}`

## Ouverture d'un dossier

Pour ouvrir tous les documents du dossier et tous les sous-dossiers de manière récursive :

- Syntaxe: 
`http://{arender_server}/Arender.html?objectStoreName={nomObjectStore}&objectType=folder&id={dossierId}`

- Syntaxe: 
`http://{arender_server}/Arender.html?objectStoreId={idObjectStore}&objectType=folder&id={dossierId}`

## Chargement en deux étapes à l'aide de /arendergwt/openExternalDocument

Construire l'URL requise par ARender peut impliquer de fournir des informations au navigateur de l'utilisateur final que nous aimerions masquer.
Le mécanisme de chargement en deux étapes est là à cet effet.
Le document est d'abord enregistré dans ARender depuis l'application appelante.
L'URL fournie à l'utilisateur final ne contient qu'un UUID générique sans signification que l'utilisateur ne peut pas pirater, enregistrer ou même partager.
La ressource **/arendergwt/openExternalDocument** permet d'enregistrer indirectement les ressources documentaires.

**/arendergwt/openExternalDocument** et **Arender.html** utilisent tous deux la liste des modules d'analyseur d'URL enregistrés pour analyser les URL entrantes, mais les résultats varient.

- **Arender.html** ouvre directement l'interface graphique ARender.

- **/arendergwt/openExternalDocument** ne génère qu'un UUID volatile correspondant à l'analyse du document. Cet UUID peut ensuite être utilisé pour ouvrir le document.

Le chargement en deux étapes est le suivant :

`http://{arender_server}//arendergwt/openExternalDocument?{cléValeurArguments}`

Génère un UUID volatil.

`http://{arender_server}/Arender.html?uuid={uuidGénéré}`

Charge l'interface graphique et ouvre le document correspondant.

Voici quelques exemples :

- Ouverture d'un document externe récupéré par http : 

`http://Arender.html?url=http://ARender/pdf/pdf/PDFReference15_v5.pdf`

- Utilisation d'un chargement en deux étapes :

`http://ARender//arendergwt/openExternalDocument?url=http://ARender/pdf/pdf/PDFReference15_v5.pdf`

Génère l'UUID d04cca4f-e159-3eec-b85f-21aa3ac79984 (l'URL est hachée à l'aide de la méthode standard UUID).
Et peut ainsi être ouvert :

`http://ARender/Arender.html?uuid=d04cca4f-e159-3eec-b85f-21aa3ac79984`

Charge l'URL correspondante.

## POST and IBM FileNet AREnder plugin - xmlDescriptor

Le xmlDescriptor est un fichier XML qui peut être utilisé par l'application appelante pour créer une liste structurée de documents stockés dans FileNet et les afficher directement dans une seule instance ARender.

{{< tag type="code" title="multi-folder.xml">}}
```xml
<?xml version="1.0" encoding="UTF-8"?>
<folder title="My virtual folder root">
  <folder title="A first folder">
      <document title="Facture en français" id="{2659D649-D21D-4E03-9448-3F6B4EB9BFB5}"/>
      <document title="Autre Facture" id="{18810D4A-A438-4192-9B6F-05CCC09CE5A7}"/>
  </folder>
  <folder title="A second folder">
      <document title="Another invoice here" id="{4CC448B2-4C8B-4F94-AF36-3A3B764EE947}"/>
      <document title="Document interdit" id="{3613A122-9251-4B71-A7C5-89A25AB713B1}"/>
  </folder>
</folder>
```

Ce fichier XML doit être envoyé à la page **/arendergwt/openExternalDocument** à l'aide d'une requête POST :

`http://{arender_server}//arendergwt/openExternalDocument?objectStoreName=AnyObjectStore&objectType=contentContainerXML`

Le *objectStoreName* est obligatoire pour déclencher le module d'analyse d'URL FileNet CE, mais il n'est pas utilisé en soi dans le processus.
Le résultat de la requête est un UUID correspondant à l'enregistrement de cette multi-sélection, qui à son tour peut être utilisé dans l'URL suivante :

`http://{arender_server}/Arender.html?objectStoreName={objectStore name}1&objectType=multiSelect&multiSelectId={multi-select Id}`

## Configuration de l'accès aux documents

Selon le mode d'authentification choisi, deux types de fournisseur
peuvent être utilisés pour fournir un accès aux documents.

### Partage de la session FileNet

Dans la même JVM (ou à minima partage de contexte JAAS) en utilisant le
protocole IIOP :

| Paramètre             | Description                                      |
| --------------------- | ------------------------------------------------ |
| content_engine_server | URI du Content Engine utilisant le protocol IIOP |


```cfg
arender.server.filenet.authentication.method=jaasObjectStoreProvider
arender.server.filenet.ce.url=iiop://{content_engine_server}:2809/FileNet/Engine
```


### Compte de service

L'utilisation d'un compte de service dans ARender pour la connexion à FileNet Content Platform Engine, requiert les modifications ci-dessous.

#### Désactivation des contraintes de sécurité

Commenter les security-constraint et security-role configurés.


```XML
<?xml version="1.0" encoding="UTF-8"?>
<web-fragment xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-fragment_3_0.xsd" id="WebAppFragment_ID" version="3.0">
    <name>web_fragment_ecm</name>
    <!--security-constraint>
        <web-resource-collection>
            <web-resource-name>action</web-resource-name>
            <description>Define the container secured resource</description>
            <url-pattern>/ArondorViewer.jsp</url-pattern>
            <url-pattern>/ARender.jsp</url-pattern>
            <url-pattern>/ARender.html</url-pattern>
            <url-pattern>/DownloadDocumentWithAnnotations.jsp</url-pattern>
            <url-pattern>/arendergwt/*</url-pattern>
            <url-pattern>/openExternalDocument.jsp</url-pattern>
        </web-resource-collection>
        <auth-constraint>
            <role-name>All Authenticated</role-name>
        </auth-constraint>
        <user-data-constraint>
            <description>User data constraints</description>
            <transport-guarantee>NONE</transport-guarantee>
        </user-data-constraint>
    </security-constraint>

    <security-role>
        <description>All Authenticated</description>
        <role-name>All Authenticated</role-name>
    </security-role-->
</web-fragment>
```

#### Modifier le contexte utilisateur

Modifier le bean d'id urlFilter (par défaut configuré avec la classe JAASUserFilter) par celui ci-dessous :


```XML
<bean id="urlFilter"
          class="com.arondor.viewer.server.security.RequestParameterAuthenticationFilter">
    <property name="authenticationManager" ref="authenticationManager" />
</bean>
```

#### Configurer la connexion HTTP

| Parameter             | Description                                              |
| --------------------- | -------------------------------------------------------- |
| content_engine_server | URI of Content Engine based on FileNet WS (MTOM ou DIME) |
| p8_identifiant        | Username of technical account                            |
| p8_password           | Password of technical account                            |


```cfg
arender.server.filenet.authentication.method=loginPasswordObjectStoreProvider
arender.server.filenet.ce.url=http://{content_engine_server}/wsi/FNCEWS40MTOM/
arender.server.filenet.ce.login={p8_identifiant}
arender.server.filenet.ce.password={p8_password}
```


## Gestion du format de stockage des annotation

### Stockage des annotations au format XML FileNet

Configuration par défaut, aucune configuration à faire.

### Stockage des annotations au format XFDF

Ajouter simplement la ligne suivante dans le fichier suivant :


```cfg
arender.server.default.annotation.accessor=xfdfAnnotationAccessor
```


## Gestion des métadonnées à récupérer

``` xml
<bean id="documentPropertiesConfiguration" class="com.arondor.viewer.filenetce.config.DocumentPropertiesConfiguration">
</bean>
```

### Récupérer des métadonnées système

Par défaut, aucune métadonnée système n'est récupérée. Pour forcer la
récupération d'une ou plusieurs, il faut ajouter/éditer la propriété
*includedSystemProperties*.


```xml
<property name="includedSystemProperties">
    <list>
        <value>DateCreated</value>
        <value>DateLastModified</value>
        <value>Creator</value>
        <value>LastModifier</value>
    </list>
</property>
```


### Exclure des métadonnées personnalisées

Par défaut, l'ensemble des métadonnées personnalisées sont récupérées et
affichées. Pour forcer, l'exclusion d'une ou plusieurs, il faut
ajouter/éditer la propriété *excludedCustomProperties*.


```xml
<property name="excludedCustomProperties">
    <list>
        <value>FactureRef</value>
    </list>
</property>
```


Si l'erreur suivante apparaît : *No LoginModules configured
for FilenetP8WSI*, une configuration WAS est nécessaire :

- Déposer le fichier [jaas.conf.WebSphere](../../_static/docs/jaas.conf.WebSphere) dans un dossier du serveur
  WAS

- Ajouter un paramètre à la JVM ARender :
  - "Menu Server" puis "Gestion des processus et Java"; puis "définition des processus"; puis
    "Arguments de commande de démarrage" et ajouter la commande ci-dessous :

       `-Djava.security.auth.login.config=[Chemin_vers_fichier_jaas.conf.WebSphere]`


## Depuis une interface graphique

### IBM Workplace & Workplace XT

Pour définir quels types de documents doivent s'ouvrir avec ARender, il
suffit d'éditer le fichier content-redir.properties (Pour la Workplace
XT, situé par défaut dans le dossier : *C:Program
FilesFileNetConfigWebClient*) :

```cfg
    {mimeType}=/../ARender/ARender.html?{JSP_QUERY_STRING}
```

### IBM Content Navigator

Un plugin spécifique a été développé pour permettre l'intégration
d'ARender avec ICN.

{{< tag type="note ">}}
Le connecteur ICN est basé sur la syntaxe
mixedObjects cité ci-dessus.

1) Se connecter au Content Navigator.

2) Aller dans la vue "Administration" et cliquer sur "Plug-ins".

3) Cliquer sur "Nouveau Plug-in".

4) Entrer le chemin et nom du JAR et cliquer sur "Charger".(Example : _C:\sources\arender-web-ui\arondor-arender-navigator-plugin-2.2.1.jar_)

5) Dans le champ ARender context root entrer l'adresse (host + port +
context root) de ARender. Cf. exemple ci-dessous :
Si vous souhaitez que le plugin ICN détecte l'hôte de la machine avant
de l'envoyer au poste client, utilisez le mot clé `--arender.hostname--`
dans la configuration. Cela remplacera la balise automatiquement.

6) La liste des propriétés définies dans la classe ARenderPlugin est
automatiquement chargée dans l'interface, cliquer sur "Sauvegarder".

7) Cliquer sur "Éditer" et vérifier que le plug-in a été correctement
installé.

8) Mapping du nouveau viewer. Aller dans l'onglet "Mappes d'afficheur".

9) La mappe par défaut s'appelle "Mappe de l'afficheur par défaut" et n'est
pas modifiable, cliquer dessus et cliquer sur "Copier".

10) Cliquer sur "Nouveau mappage" et sélectionner le nouveau viewer qui
apparaît dans la liste des afficheurs disponibles.

11) Vous pouvez alors choisir dans la liste des types mimes supportés.

12) Pour utiliser cette mappe d'afficheur, il suffit de l'associer à un
bureau (dans l'onglet général de définition du bureau, Mappe
d'afficheur).

## Fonctionnalités avancées

### Découpage de document avec fusion des métadonnées avancées

#### Description et configuration de la fonctionnalité

Voici en premier lieu un descriptif de la fonctionnalité. Pour chaque document source (FileNet) utilisé dans la composition du Document Builder :  

  - Si tous les documents partagent une même métadonnée, avec une même valeur
    - La métadonnée et sa valeur sont propagées
  - Si la métadonnée est commune aux documents, mais les valeurs sont différentes 
    - La métadonnée est propagée, mais la valeur est remise à zéro : 
        - Les champs type String recevront une chaine vide
        - Les champs type Entiers/Double recevront 0
        - Les champs type Date sont remis à la date de l'opération de Document Builder
        - Les champs type Boolean sont à false
        - Les champs à cardinalité Liste seront quand à eux peuplés d'une liste d'une seule valeur du type correspondant (liste vide non supportée par l'Engine)
  - Si la métadonnée est unique à un seul document
    - Par défaut non propagée, elle pourra être propagée si la configuration l'autorise, par son SymbolicName
    
Pour propager une métadonnée unique à un document, voici la propriété où les différents SymbolicNames à autoriser sera à indiquer (séparés par des virgules)

```cfg
arender.server.filenet.document.builder.update.first.document.properties.advanced.updater.propagation.symbolic.names
```

#### Comment activer la fusion avancée des métadonnées

A la création de nouveau documents, pour activer cette fonctionnalité, il faudra modifier la propriété suivante : 

```cfg
arender.server.filenet.document.builder.update.first.document.properties.copy.bean.name
```

Les deux valeurs possibles sont _legacyFileNetPropertiesCopy_ pour ne pas activer la fusion des métadonnées avancées, 
ou _advancedFileNetPropertiesMerger_ pour l'activer.
Enfin, pour activer le comportement de fusion avancée de métadonnée lors d'une mise à jour du contenu d'un document 
(et non uniquement à la création), il suffit d'ajouter le bean suivant à la configuration: 

{{< tag type="code" title="arender-custom-server-integration.xml">}}
```xml

    <bean id="filenetDocumentUpdaterNewVersion"
          class="com.arondor.viewer.filenetce.helper.impl.FileNetDocumentUpdaterNewVersion">
        <property name="fileNetPropertiesUpdater"
                  ref="${arender.server.filenet.document.builder.update.first.document.properties.copy.bean.name}"/>
    </bean>
``` 

Ainsi le bean de mise à jour de document suivra aussi le même comportement que le bean de création de documents 
(par défaut, ce bean ne possède pas de propertyUpdater, afin de garder son comportement historique). 

### Interdire la sauvegarde de documents en fonction des IDs d'objectStore

Afin de pouvoir interdire la création de nouveaux documents à partir de certains objectStore FileNet, 
il est possible de bloquer la fonctionnalité directement dans le code connecteur. 

Pour ce faire, modifiez la propriété serveur Web-UI nommée :

```cfg
arender.server.filenet.document.builder.unauthorized.object.store.ids=
```

Et insérez, séparés par des virgules, la liste des IDs FileNet des objectStores qui n'autoriseront pas la sauvegarde 
de nouveaux documents via le Document Builder.

Par défaut, cette liste est livrée vide pour garder le comportement historique.

### Désactiver la fonctionnalité de découpage pour les documents checkout et archivés
Il est possible d'interdire la création de nouveaux documents à partir de document checkout ou archivé via l'activation
de la propriété serveur ci-dessous :

```cfg
arender.server.filenet.document.builder.disabled.for.checkout.and.archived.documents=true
```


## Configuration de l'affichage des filigranes

Vous avez la possibilité de configurer l'affichage des filigranes selon le groupe utilisateur et/ou la classe filenet du document ouvert.

Pour l'activation du paramétrage par groupe et/ou par classe de document, il vous faudra rajouter cette propriété : 


```cfg
arender.server.watermark.display.provider=fileNetDisplayWatermarkProvider
```


Pour afficher le filigrane pour les utilisateurs appartenant à certains groupes :


```cfg
#Valeurs séparées par des virgules qui indique quelle groupe Filenet doit avoir un filigrane définis dans arender.watermark.bean.name
arender.server.watermark.filenet.group.with=
```


Pour ne pas afficher le filigrane pour les utilisateurs appartenant à certains groupes :


```cfg
#Valeurs séparées par des virgules qui indique quelle groupe Filenet ne doit pas avoir un filigrane définis dans arender.watermark.bean.name
arender.server.watermark.filenet.group.without=
```


Les deux propriétés ne peuvent être utilisés en même temps.

Pour afficher selon la classe FileNet du document (Depuis 4.1.0 jusqu'à 4.2.x):


```cfg
#Valeurs séparées par des virgules qui indique quelle classe de document Filenet doit avoir un filigrane définis dans arender.watermark.bean.name
arender.server.watermark.filenet.document.class.with=
```


Pour afficher selon la classe FileNet du document (Depuis 4.3.0):

```cfg
#Valeurs séparées par des virgules qui indiquent quelles classes de document Filenet doit avoir un filigrane définis dans arender.watermark.bean.name
arender.server.watermark.filenet.document.class=
```


### Configuration avancé des filigranes

Pour définir un filigrane dépendant de la classe de document FileNet et/ou du groupe d'utilisateur, vous devez définir des usages de filigranes pour chaque filigrane voulu. Par défaut :


```xml

<bean id="fileNetWatermarkUsageDefinition"
    class="com.arondor.viewer.filenetce.annotation.FileNetWatermarkUsageDefinition"
    scope="singleton">
    <property name="displayWatermarkBeanName" value="${arender.watermark.bean.name}"/>
    <property name="filenetDocumentClass" ref="fileNetDocumentClassList"/>
    <property name="ldapGroupWithWatermark" ref="ldapGroup"/>
    <property name="ldapGroupWithoutWatermark" ref="ldapGroupException"/>        
</bean>

<!-- Liste des documentClass de FileNet qui seront affectés par la définition d'usage de filigranes-->
<bean id="fileNetDocumentClassList"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="${arender.server.watermark.filenet.document.class}"/>
</bean>

<!-- Liste de groupes LDAP qui auront le filigrane-->
<bean id="ldapGroup"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="${arender.server.watermark.filenet.group.with}"/>
</bean>

<!-- Liste de groupes LDAP qui n'auront pas le filigrane-->
<bean id="ldapGroupException"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="${arender.server.watermark.filenet.group.without}"/>
</bean>
```


#### Exemples

Vous pouvez créer un simple usage de filigrane :

```cfg
<bean id="newWatermarkDefinition"
    class="com.arondor.viewer.filenetce.annotation.FileNetWatermarkUsageDefinition"
    scope="singleton">
    <property name="displayWatermarkBeanName" value="myWatermarkBean"/>    
</bean>
```


Vous pouvez créer un usage de filigrane en filtrant par groupe LDAP :

```xml
<bean id="newWatermarkDefinition"
    class="com.arondor.viewer.filenetce.annotation.FileNetWatermarkUsageDefinition"
    scope="singleton">
    <property name="displayWatermarkBeanName" value="myWatermarkBean"/>
    <property name="ldapGroupWithWatermark" ref="ldapGroupExample"/>    
</bean>

<!-- Liste de groupes LDAP qui auront le filigrane-->
<bean id="ldapGroupExample"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="myGroup"/>
</bean>
```


Vous pouvez créer un usage de filigrane pour tous les utilisateurs sauf ceux définies ici :

```xml
<bean id="newWatermarkDefinition"
    class="com.arondor.viewer.filenetce.annotation.FileNetWatermarkUsageDefinition"
    scope="singleton">
    <property name="displayWatermarkBeanName" value="myWatermarkBean"/>
    <property name="ldapGroupWithoutWatermark" ref="ldapGroupExample"/>    
</bean>

<!-- Liste de groupes LDAP qui auront le filigrane-->
<bean id="ldapGroupExample"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="myGroup"/>
</bean>
```


Vous pouvez créer un usage de filigrane qui dépend des classes de document de FileNet :

```xml
<bean id="newWatermarkDefinition"
    class="com.arondor.viewer.filenetce.annotation.FileNetWatermarkUsageDefinition"
    scope="singleton">
    <property name="displayWatermarkBeanName" value="myWatermarkBean"/>   
    <property name="filenetDocumentClass" ref="fileNetDocumentClassListExample"/> 
</bean>

<!-- Liste des documentClass de FileNet qui seront affectés par la définition d'usage de filigranes-->
<bean id="fileNetDocumentClassListExample"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="${myDocumentClass}"/>
</bean>
```


Bien entendu, vous pouvez mixer les configurations pour définir des usages de filigrane avancés :

```xml
<bean id="newWatermarkDefinition"
    class="com.arondor.viewer.filenetce.annotation.FileNetWatermarkUsageDefinition"
    scope="singleton">
    <property name="displayWatermarkBeanName" value="myWatermarkBean"/>   
    <property name="filenetDocumentClass" ref="fileNetDocumentClassListExample"/> 
    <property name="ldapGroupWithWatermark" ref="ldapGroupExample"/>    
</bean>

<!-- Liste des documentClass de FileNet qui seront affectés par la définition d'usage de filigranes-->
<bean id="fileNetDocumentClassListExample"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="${myDocumentClass}"/>
</bean>

<!-- Liste de groupes LDAP qui auront le filigrane-->
<bean id="ldapGroupExample"
  class="org.springframework.util.StringUtils"
  factory-method="commaDelimitedListToStringArray">
  <constructor-arg value="myLDAPGroup"/>
</bean>
```



La ligne suivante est obligatoire :

```xml
<property name="displayWatermarkBeanName" value="exampleWatermarkBean"/>
```


#### Ajout des définitions d'usage de filigrane

Vous devez ajouter toutes les définitions d'usage de filigrane dans le provider de filigrane :


```xml

<!-- EXEMPLE -->

<bean id="fileNetDisplayWatermarkProvider"
    class="com.arondor.viewer.filenetce.annotation.FileNetDisplayWatermarkProvider"
    scope="singleton">
    <property name="fileNetWatermarkDocument" >
      <list>
        <ref bean="fileNetWatermarkUsageDefinition"/>
        <ref bean="newWatermarkDefinition"/>
      </list>
    </property>
</bean>
```


### Créer un PDF/A en tant que nouvelle version ou nouveau document via le document builder

Depuis la version 4.2.0 d'ARender, deux nouveaux comportements de mise à jour de contenu ont été ajouté pour
créer ou mettre à jour un document en PDFA.

Les comportements déjà existants sont :
- UPDATE_NO_DOCUMENT
- UPDATE_FIRST_DOCUMENT
- CREATE_NEW_FIRST_DOCUMENT
- UPDATE_ALL_DOCUMENT

Les deux nouveaux sont : 
- UPDATE_FIRST_DOCUMENT_PDFA
- CREATE_NEW_FIRST_DOCUMENT_PDFA

Les deux nouveaux comportements sont similaires à UPDATE_FIRST_DOCUMENT et CREATE_NEW_FIRST_DOCUMENT sauf que le format cible
des fichiers sera PDFA.

**En tant que prérequis, il est évidemment nécessaire de disposer du module de rendition PDFA.**

#### Exemple

Depuis le fichier de configuration **alterdocumentcontent-configuration.xml**, vous pouvez copier les 
beans **saveActionUpdateFirst** et **saveActionCreateFirst** vers le fichier **arender-custom-integration.xml**
et modifier la propriété **contentUpdateBehavior** comme cela:


```xml
<bean id="saveActionUpdateFirst"
	class="com.arondor.viewer.client.pictree.presenter.nodeaction.TreeNodeAction">
	<property name="enabled"
		value="${documentbuilder.button.updateFirst.enabled}" />
	<property name="availability">
		<bean
			class="com.arondor.viewer.client.pictree.presenter.nodeaction.TreeNodeActionAvailability$IsEnabledAndNotRoot" />
	</property>
	<property name="buttonTitle">
		<ref bean="labels#documentBuilderUpdateFirstDocument" />
	</property>
	<property name="className" value="pictreeButton saveDocumentUpdateFirstButton" />
	<property name="event">
		<bean
			class="com.arondor.viewer.client.events.documentbuilder.DocumentBuilderSaveDocumentEvent">
			<property name="freezeDocument" value="${documentbuilder.save.freeze}" />
			<property name="downloadDocument" value="${documentbuilder.save.download}" />
			<property name="deleteDocument" value="${documentbuilder.save.delete}" />
			<property name="contentUpdateBehavior">
				<value
					type="com.arondor.viewer.client.api.document.altercontent.AlterContentDescription$ContentUpdateBehavior">UPDATE_FIRST_DOCUMENT_PDFA</value>
			</property>
		</bean>
	</property>
</bean>

<bean id="saveActionCreateFirst"
	class="com.arondor.viewer.client.pictree.presenter.nodeaction.TreeNodeAction">
	<property name="enabled"
		value="${documentbuilder.button.createFirst.enabled}" />
	<property name="availability">
		<bean
			class="com.arondor.viewer.client.pictree.presenter.nodeaction.TreeNodeActionAvailability$IsEnabledAndNotRoot" />
	</property>
	<property name="buttonTitle">
		<ref bean="labels#documentBuilderCreateFirstDocument" />
	</property>
	<property name="className" value="pictreeButton saveDocumentCreateFirstButton" />
	<property name="event">
		<bean
			class="com.arondor.viewer.client.events.documentbuilder.DocumentBuilderSaveDocumentEvent">
			<property name="freezeDocument" value="${documentbuilder.save.freeze}" />
			<property name="downloadDocument" value="${documentbuilder.save.download}" />
			<property name="deleteDocument" value="${documentbuilder.save.delete}" />
			<property name="contentUpdateBehavior">
				<value
					type="com.arondor.viewer.client.api.document.altercontent.AlterContentDescription$ContentUpdateBehavior">CREATE_NEW_FIRST_DOCUMENT_PDFA</value>
			</property>
		</bean>
	</property>
</bean>
```



## Mise à jour des métadonnées

La servlet *updateDocumentMetadataServlet* est dédié à la mise à jour des métadonnées de document Filenet en utilisant un appel POST.

Voici un exemple de l'appel POST, où *{documentId}* est à remplacer par le documentId du document ciblé :


```cfg
http://{HOST_ARENDER}/arendergwt/updateDocumentMetadataServlet?uuid={documentId}
```


Ensuite, le corps de la requête va accepter une structure JSON définissant chaque nom de métadonnée à modifier et la valeur associée. Les *propertyKey* correspondent aux propriétés *symbolicName* et *displayName* de Filenet. La *propertyValue* est la valeur que va prendre la métadonnée.


```cfg
{
  "propertyKey1" : "propertyValue1",
  "propertyKey2" : "propertyValue2"
}
```


## Modification du nom de document par défaut

Dans Filenet, il est possible de définir un titre de document vide dans les propriétés du document.

Si c'est le cas, et comme ARender a besoin d'un nom de document pour fonctionner correctement, un nom de document par défaut doit être défini.

Par défaut, le titre sera défini "Document" mais pourra être changé en modifiant la propriété suivante :


```cfg
arender.server.default.filenet.document.name=Document
```

