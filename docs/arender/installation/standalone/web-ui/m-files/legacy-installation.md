---
title: "Ancienne installation"
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

- Dézipper ARenderApp.zip avec 7zip
{{< download "ARenderApp.zip">}}[shortcode][shortcode]
- Ouvrez **dashboard.html**
- Modifiez l'URL de l'UI par celle que vous déployez (dans l'exemple il s'agit du 4.8.7)
![mfiles]([shortcode])
![mfiles]([shortcode])
- Ouvrez votre coffre
- Installer le ARenderApp.zip dans les applications de votre coffre.

![mfiles]([shortcode])
*( M-Files Admin -> choisir le coffre -> clique droit -> Applications -> Installer )*

- Déconnectez-vous du coffre et reconnectez-vous pour vous assurer que les changements sont pris en compte


## Étapes pour ouvrir un document avec M-Files

- Redémarrer le serveur IIS

![mfiles]([shortcode])

- Démarrer le serveur Tomcat9
- Accédez à M-Files sous le lecteur M:\

![mfiles]([shortcode])

- Sélectionnez votre coffre
- Faites glisser et déposez un document pour l'ouvrir avec ARender

![mfiles]([shortcode])
