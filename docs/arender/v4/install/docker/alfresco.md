---
title: "Alfresco"
draft: false
weight: 4
keywords: ["docker"]
---

## ARender UI pour Alfresco

Les tags d'ARender UI pour Alfresco ont pour suffixe "-alfresco" (eg. arender-ui:[shortcode]-alfresco)

Pour démarrer le conteneur, exécuter:

```bash
$> docker run [shortcode]/arender-ui:[shortcode]-alfresco \
-e ARENDERSRV_ARENDER_SERVER_ALFRESCO_ATOM_PUB_URL="http://<alfresco-host>:<alfresco-port>/alfresco/api/-default-/cmis/versions/1.1/atom"
```

## Alfresco dans Docker

Ajouter le plugin arender-for-alfreco-share dans le conteneur d'Alfresco Share et le conteneur Alfresco content repository.

Si besoin, voici quelques ressources à propos d'ARender pour Alfresco :

- [Voir la documentation Alfresco]({{< relref "/v4/connector/alfresco/_index.fr.md">}})
- [Télécharger le plugin arender-for-Alfresco-share](https://artifactory.arondor.cloud/artifactory/webapp/#/artifacts/browse/tree/General/arondor-release/com/arondor/arender/arender-for-alfresco-share-plugin/[shortcode]/arender-for-alfresco-share-plugin-[shortcode].jar)

[shortcode]
Le plugin doit être situé dans tomcat/lib ou /tomcat/shared/lib. Assurez-vous que ces chemins sont listés dans la propriété shared.lib dans le fichier **catalina.properties** des composants Alfresco.
[shortcode]

Pour informer Alfresco Share de l'emplacement du server ARender UI, ajouter les lignes suivantes dans le fichier de configuration :

{{< tag type="code"
  title="tomcat/shared/classes/alfresco/web-extension/share-config-custom.xml" >}}

```XML
  <config evaluator="string-compare" condition="Arender">
    <url>http://{arender-web-ui-serveur}</url>
    <!-- example : <url>http://localhost</url> -->
  </config>
```

[shortcode]
