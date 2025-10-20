---
title: "Alfresco"
draft: false
weight: 4
keywords: ["docker"]
image: /images/icons/alfresco.png
---

## ARender UI pour Alfresco

Pour démarrer le conteneur, exécuter:

```bash
-e ARENDERSRV_ARENDER_SERVER_ALFRESCO_ATOM_PUB_URL="http://<alfresco-host>:<alfresco-port>/alfresco/api/-default-/cmis/versions/1.1/atom"
```

## Alfresco dans Docker

Ajouter le plugin arender-for-alfreco-share dans le conteneur d'Alfresco Share et le conteneur Alfresco content repository.

Si besoin, voici quelques ressources à propos d'ARender pour Alfresco :

- [Voir la documentation Alfresco]({{< relref "/guides/configurations/web-ui/connectors/_index.fr.md">}})
Le plugin share doit être situé dans /tomcat/shared/lib. Assurez-vous que ces chemins sont listés dans la propriété shared.lib dans le fichier **catalina.properties** des composants Alfresco.  

Pour informer Alfresco Share de l'emplacement du server ARender UI, ajouter les lignes suivantes dans le fichier de configuration :

{{< tag type="code"
  title="tomcat/shared/classes/alfresco/web-extension/share-config-custom.xml" >}}

```XML
  <config evaluator="string-compare" condition="Arender">
    <url>http://{arender-web-ui_serveur}</url>
    <!-- example : <url>http://localhost</url> -->
  </config>
```

