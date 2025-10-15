---
title: "Alfresco"
draft: false
weight: 3
type: docs
image: /images/icons/alfresco.png
related:
    - name : "Installation standalone"
      rel: '/content/installation/standalone/web-ui/standalone/_index.fr.md'
    - name : "Connecteur Alfresco"
      rel: '/guides/configurations/web-ui/connectors/alfresco/features-acs.fr.md'
---


Cette page détaille la configuration d'ARender pour la GED Alfresco.

[shortcode]

Pour continuer sur cette page, ARender en standalone doit être correctement configuré.

Si ce n'est pas le cas, merci de vous rendre [ici]({{< relref "/content/installation/standalone/web-ui/standalone/_index.fr.md">}}).
[shortcode]

## Connecteur 

Ajouter le connecteur cmis dans le dossiers /lib.

* Télécharger le fichier jar [arondor-arender-cmis-[shortcode]-jar-with-dependencies.jar](https://artifactory.arondor.cloud/artifactory/arondor-release/com/arondor/arender/arondor-arender-cmis/[shortcode]/arondor-arender-cmis-[shortcode]-jar-with-dependencies.jar)

## Configurations 

### Définition de la connexion à Alfresco

Le connecteur ARender pour Alfresco permet une communication entre ARender et Alfresco Content Services (et Alfresco Process Services).

Par défaut, ARender est configuré pour communiquer en CMIS avec un Alfresco en local.

* Pour configurer la **communication CMIS** (recommandation éditeur) avec un Alfresco installé sur un autre serveur, ajouter la propriété ci-dessous avec la valeur voulue :

[shortcode]

```cfg
arender.server.alfresco.atom.pub.url=http://alfrescoHost/alfresco/api/-default-/cmis/versions/1.1/atom
```
[shortcode]

[shortcode]
L'authentification à Alfresco se fera avec un **ticket Alfresco**
[shortcode]

* Pour configurer la **communication SOAP**, ajouter les propriétés ci-dessous avec la valeur voulue :

[shortcode]

```cfg
arender.server.alfresco.use.soap.ws=true
arender.server.alfresco.soap.ws.url=http://alfrescoHost/alfresco/cmisws/cmis?wsdl
arender.server.alfresco.user=userNameValue
arender.server.alfresco.password=passwordValue
```
[shortcode]

*  Gestion du contexte

Le contexte est le chemin utilisé par les applications (par exemple, Alfresco Share, SOLR, SharePoint et d'autres).
Si vous souhaitez déployer vers un contexte qui n'est pas */alfresco*, il doit être spécifié avec la propriété suivante :

```cfg
Arender.server.alfresco.context=mon-contexte
```

Par défaut, le contexte est *alfresco* (pour /alfresco).


### Annotations

#### Détails sur le stockage des annotations

Aucune configuration n'est nécessaire pour la gestion des annotations ARender dans Alfresco.

Ces dernières sont sauvegardées en tant que child node du document lui-même. Le nom du child node est : **cm:arender-annotations-v{version document}**

![Annotation child node image]([shortcode])

## L'installation est terminée

Vous pouvez maintenant démarrer le serveur alfresco et tenter d'ouvrir un fichier avec un lien formé de cette manière :

```html
http://{arender_serveur}:{arender_port}/ARenderHMI/?nodeRef={nodeRef}&user={user}&alf_ticket={ticket}&versionLabel={version}
```


Plus d'informations sur le connecteur Alfresco [ici]({{< relref "/guides/configurations/web-ui/connectors/alfresco/features-acs.fr.md">}})