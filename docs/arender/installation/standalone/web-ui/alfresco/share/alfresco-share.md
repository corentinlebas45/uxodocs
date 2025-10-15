---
title: "Installation dans Share"
draft: false
weight: 2
keywords: [ "standalone", "hmi", "web ui", "configuration", "alfresco", "share" ]
---

Nous présentons ici la suite de l'installation de la Web-UI, dans le module Share de Alfresco.

## Récupérer les archives du serveur de présentation

En utilisant l'identifiant et mot de passe préalablement fournis,
vous pouvez récupérer le plugin arender pour Share ici : [arender-for-alfresco-share-plugin-[shortcode].jar](https://artifactory.arondor.cloud/artifactory/arondor-all/com/arondor/arender/arender-for-alfresco-share-plugin/[shortcode]/arender-for-alfresco-share-plugin-[shortcode].jar)
et le plugin arender pour ACS ici : [arender-for-alfresco-ACS-plugin-[shortcode].jar](https://artifactory.arondor.cloud/artifactory/arondor-all/com/arondor/arender/arender-for-alfresco-ACS-plugin/[shortcode]/arender-for-alfresco-ACS-plugin-[shortcode].jar)

## Redéploiement du serveur de présentation dans Alfresco

Si votre Alfresco et module Share ne partage pas le même tomcat, il faudra déposer les plugins
**arender-for-alfresco-share-plugin-{version}.jar** et **arender-for-alfresco-ACS-plugin-{version}.jar** dans le dossier *lib/* de chacune de ces
applications déployées.

S’ils sont déployés dans le même tomcat, alors déposer les plugins **arender-for-alfresco-share-plugin-{version}.jar** et **arender-for-alfresco-ACS-plugin-{version}.jar** dans *{alfresco_tomcat}/shared/lib*.

Les deux plugins permettent respectivement d'étendre l'API REST d'ACS utilisée par ARender et l'intégration du viewer ARender dans share.

Ajouter les lignes suivantes dans le fichier _{alfresco_tomcat}/shared/classes/alfresco/web-extension/**share-config-custom.xml**_ entre les balises alfresco-config

```xml
<config evaluator="string-compare" condition="Arender">
        <url>http://{arender_serveur}:{arender_port}/{arender_contexte}</url>
        <!-- exemple : <url>http://192.168.1.8:8080/ARenderHMI</url> -->
</config>
```

![alfresco]([shortcode])

## Installation terminée

Vous pouvez maintenant démarrer le serveur alfresco et tenter d'ouvrir un fichier stocké dans celui-ci.

![alfresco]([shortcode])

Vous avez terminé l'installation rapide d'ARender pour Alfresco Share. Pour aller plus loin dans la configuration du connecteur ARender pour Alfresco rendez-vous sur cette page : **[Configuration avancée](broken-link.md)**
