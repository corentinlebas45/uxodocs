---
title: "Alfresco"
draft: false
weight: 4
keywords: ["docker"]
---

## ARender UI pour Alfresco


Pour démarrer le conteneur, exécuter:

```bash
-e ARENDERSRV_ARENDER_SERVER_ALFRESCO_ATOM_PUB_URL="http://<alfresco-host>:<alfresco-port>/alfresco/api/-default-/cmis/versions/1.1/atom"
```

## Alfresco dans Docker

Ajouter le plugin arender-for-alfreco-share dans le conteneur d'Alfresco Share et le conteneur Alfresco content repository.

Si besoin, voici quelques ressources à propos d'ARender pour Alfresco :

- [Voir la documentation Alfresco]({{< relref "/v4/connector/alfresco/_index.fr.md">}})

Le plugin doit être situé dans tomcat/lib ou /tomcat/shared/lib. Assurez-vous que ces chemins sont listés dans la propriété shared.lib dans le fichier **catalina.properties** des composants Alfresco.

Pour informer Alfresco Share de l'emplacement du server ARender UI, ajouter les lignes suivantes dans le fichier de configuration :

{{< tag type="code"
  title="tomcat/shared/classes/alfresco/web-extension/share-config-custom.xml" >}}

```XML
  <config evaluator="string-compare" condition="Arender">
    <url>http://{arender-web-ui-serveur}</url>
    <!-- example : <url>http://localhost</url> -->
  </config>
```

