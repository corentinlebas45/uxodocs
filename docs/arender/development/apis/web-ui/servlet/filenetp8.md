---
title: "Servlet FileNet"
weight:
draft: false
# search related keywords
keywords: ["filenet", "servlet"]
---


## Mise à jour des métadonnées

La servlet *updateDocumentMetadataServlet* est dédié à la mise à jour des métadonnées de document Filenet en utilisant un appel POST.

Voici un exemple de l'appel POST, où *{documentId}* est à remplacer par le documentId du document ciblé :

[shortcode]

```cfg
http://{HOST_ARENDER}/arendergwt/updateDocumentMetadataServlet?uuid={documentId}
```

[shortcode]

Ensuite, le corps de la requête va accepter une structure JSON définissant chaque nom de métadonnée à modifier et la valeur associée. Les *propertyKey* correspondent aux propriétés *symbolicName* et *displayName* de Filenet. La *propertyValue* est la valeur que va prendre la métadonnée.

[shortcode]

```cfg
{
  "propertyKey1" : "propertyValue1",
  "propertyKey2" : "propertyValue2"
}
```

[shortcode]