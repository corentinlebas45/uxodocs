---
title: "Nouvelle installation"
draft: false
weight: 4
type: docs
image: /images/icons/m-files-logo.png
---

Nous présentons ici l'installation de la Web-UI dans M-Files. 

Dans notre exemple, nous déployons la Web-UI
dans un environnement avec :

- Système d'exploitation : Windows Server 2016 Datacenter
- M-Files 
- Un serveur Tomcat9
- ARender Web-UI version [shortcode]
- Avoir une Rendition fonctionnelle. Il vous suffit de suivre cette **[documentation](broken-link.md)**.


## Étapes pour configurer la Rendition

Placez le *arondor-arender-mfiles-connector-1.0.5.jar* sous *rendition-engine-package-[shortcode]/modules/RenditionEngine/client_libs*

{{< download "arondor-arender-mfiles-connector-1.0.5.jar">}}[shortcode][shortcode]

Depuis la 4.8.8, il est nécessaire d'ajouter sous **rendition-engine-package-[shortcode]/modules/RenditionEngine** dans *application.properties* la propriété suivante : **authorized.urls=http://localhost/REST/**

{{< download "application.properties">}}[shortcode][shortcode]

- Démarrer le serveur ARender Rendition


## Étapes pour installer la Web-UI

En utilisant l'identifiant et mot de passe préalablement fournis (ou contacter arender-sales@arondor.com si vous souhaitez un accès),
vous pouvez récupérer la version de l'application web utilisée en format WAR
**[ici](https://artifactory.arondor.cloud:443/artifactory/arondor-all/com/arondor/arender/arondor-arender-hmi/[shortcode]/arondor-arender-hmi-[shortcode].war)**.

Vous devez utiliser le serveur Tomcat9. Il vous suffit de déployer votre war (*arondor-arender-hmi-[shortcode].war* dedans, de **le renommer** en *arondor-arender-mfiles.war*) et de le placer ici :

* Program Files
    * Apache Software Foundation
        * Tomcat 9.0
            * webapps

Copier le connecteur *arondor-arender-mfiles-connector-1.0.5.jar* précédemment téléchargé et placez le sous *arondor-arender-mfiles-[shortcode]\WEB-INF\lib*.

Par la suite :
- Placez ces fichiers *(ci-dessous)* sous ***arondor-arender-mfiles-[shortcode]\WEB-INF\classes***<br/>
{{< download "arender-editor-specific-integration.xml">}}[shortcode][shortcode]
{{< download "arender-server.properties">}}[shortcode][shortcode]

[shortcode]
Vous devez modifier différentes valeurs du fichier *arender-server.properties* en fonction de la configuration de votre coffre-fort M-Files
[shortcode] 


## Étapes pour déployer ARender sur M-Files
Pour installer ARender sur le coffre-fort M-Files, suivez les étapes ci-dessous :
- Téléchargez VAF_MFF_ArenderConnector :
{{< download "VAF_MFF_ArenderConnector_22.12.3.mfappx">}}[shortcode][shortcode]
- Exécuter la console d'administration M-Files
- Faites un clic droit sur le coffre-fort souhaité et sélectionnez **Applications**
- Cliquez sur **Installer...**
- Sélectionnez le fichier **VAF_MFF_ArenderConnector_22.12.3.mfappx** précédemment téléchargé
- Cliquez sur **Oui** si cette fenêtre apparaît
![mfiles]([shortcode])
- L'application est maintenant installée
- Cliquez sur **Fermer**
- Cliquez sur **Oui** si cette fenêtre apparaît
![mfiles]([shortcode])

Maintenant que nous avons installé ARender sur le coffre-fort M-Files, nous pouvons commencer à configurer l'application.

## Étapes pour configurer ARender sur M-Files

VAF_MFF_ArenderConnector utilise un fichier de configuration JSON. Vous pouvez le gérer via l'interface graphique du client M-Files Admin.

- Exécuter le client Administrateur M-Files
- Cliquez sur la flèche à côté de votre coffre-fort
![mfiles]([shortcode])
- Cliquez sur **Configurations** pour votre coffre-fort
- Sélectionnez **Autres applications** puis sélectionnez **VAF_MFF_ArenderConnector**. Le tableau de bord apparaît
- Cliquez sur l'onglet **Configuration**
- Remplissez toutes les propriétés de configuration. En cliquant sur l'icône **i**, vous obtiendrez une aide qui s'affichera.
![mfiles]([shortcode])
- Une fois que vous avez configuré, cliquez sur **Enregistrer**


## Étapes pour ouvrir un document avec M-Files

- Redémarrer le serveur IIS

![mfiles]([shortcode])

- Démarrer le serveur Tomcat9
- Accédez à M-Files sous le lecteur M:\

![mfiles]([shortcode])

- Sélectionnez votre coffre
- Faites glisser et déposez un document pour l'ouvrir avec ARender

![mfiles]([shortcode])
