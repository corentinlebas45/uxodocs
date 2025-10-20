---
title: "Alfresco"
weight: 1
draft: false
# search related keywords
keywords: ["alfresco", "connector"]
---

## Introduction

Cet article détaille l'intégration et l'installation du connecteur CMIS
Arender. Ceci couvre la partie intégration dans Alfresco et la partie
configuration Web-UI.


## Architecture

Ci-dessous l'architecture d'ARender dans un contexte Alfresco :


Il est à mentionner que le connecteur se base sur le protocole CMIS,
donc intégrable dans toutes les GED supportant le
CMIS.

## Configuration de ARender Web-UI

### Définition de la connexion à Alfresco

Le connecteur ARender pour Alfresco permet une communication entre ARender et Alfresco Content Services (et Alfresco Process Services).

Par défaut, ARender est configuré pour communiquer en CMIS avec un Alfresco en local.

* Pour configurer la **communication CMIS** (recommandation éditeur) avec un Alfresco installé sur un autre serveur, ajouter la propriété ci-dessous avec la valeur voulue :


```cfg
arender.server.alfresco.atom.pub.url=http://alfrescoHost/alfresco/api/-default-/cmis/versions/1.1/atom
```

L'authentification à Alfresco se fera avec un **ticket Alfresco**

* Pour configurer la **communication SOAP**, ajouter les propriétés ci-dessous avec la valeur voulue :


```cfg
arender.server.alfresco.use.soap.ws=true
arender.server.alfresco.soap.ws.url=http://alfrescoHost/alfresco/cmisws/cmis?wsdl
arender.server.alfresco.user=userNameValue
arender.server.alfresco.password=passwordValue
```

*  Gestion du contexte

Le contexte est le chemin utilisé par les applications (par exemple, Alfresco Share, SOLR, SharePoint et d'autres).
Si vous souhaitez déployer vers un contexte qui n'est pas */alfresco*, il doit être spécifié avec la propriété suivante :

```cfg
arender.server.alfresco.context=mon-contexte
```

Par défaut, le contexte est *alfresco* (pour /alfresco).


### Annotations

#### Détails sur le stockage des annotations

Aucune configuration n'est nécessaire pour la gestion des annotations ARender dans Alfresco.

Ces dernières sont sauvegardées en tant que child node du document lui-même. Le nom du child node est : **cm:arender-annotations-v{version document}**


#### Désactivation de la migration des annotations

Ajouter la propriété ci-après si les deux conditions suivantes sont respectées :
* Aucune annotation ARender n'est présente dans Alfresco,
* ou, les annotations ARender présentes dans Alfresco n'ont été créées **qu'avec des versions d'ARender postérieur à la version 4.0.9**


```cfg
arender.server.alfresco.annotation.migrate.to.new.child.api=false
```
