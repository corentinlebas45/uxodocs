---
title: Obfusquer du contenu
description: Obfusquez des données sensibles au sein des documents
---

Le service `ObfuscationService` expose une opération de `create`. Toutes les parties du contenu du document correspondant à la recherche définie dans l'appel, seront automatiquement obfusquées. 

# Recherche de zone à obfusquer

Le modèle de la recherche, utilisé au sein de l'appel de création, se présente comme ceci: 

```json
{
  "accentSensitive": true,
  "caseSensitive": true,
  "regex": true,
  "text": "string"
}
```

Le `text` est la valeur ou motif recherché. Par défaut, la valeur est un motif. Pour rechercher la valeur exacte et non un motif, la valeur `regex` doit être positionnée à `false`. 
<br>
Les paramètres `accentSensitive` et `caseSensitive` indiquent respectivement que la recherche doit être sensible aux accents et à la casse.

# Exemple

Les exemples ci-dessous indiquent comment obfusquer une valeur (dans l'exemple : "Demo") et un motif (ici masque les IBAN dans le document).

POST {{core}}/rest/documents/{{documentId}}/obfuscations HTTP/1.1

--Paramètres d'URL
core: host de FlowerDocs core
documentId : identifiant du document à obfusquer

--Headers
token: {token}
Content-Type: application/json

--Body (json)
{
  "accentSensitive": true,
  "caseSensitive": false,
  "regex": false,
  "text": "Demo"
}
POST {{core}}/rest/documents/{{documentId}}/obfuscations HTTP/1.1

-- Paramètres d'URL
core: host de FlowerDocs core
documentId : identifiant du document à obfusquer

--Headers
token: {token}
Content-Type: application/json

--Body (json)
{
  "accentSensitive": false,
  "caseSensitive": false,
  "regex": true,
  "text": "IBAN : (.{4}-){3}.{4}"
}
