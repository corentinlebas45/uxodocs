---
title: Redaction
description: ""
icon: mdi-image-edit-outline
keyword: ["feature", "redaction", "obfuscate", "biffer"]
---
## Comportement par défaut 

ARender offre la possibilité de cacher le contenu de n'importe quel type de document via la fonctionnalité de Rédaction.

![image]([shortcode])

Pour afficher les boutons de Redaction, ajouter les propriétés suivantes :

{{< tag type="code" title="WEB-INF/classes/arender.properties">}}

```cfg
topPanel.obfuscate=true
topPanel.obfuscateZone=true
```
[shortcode]

{{< tag type="warning">}}
Par défaut, seul l'utilisateur **admin** peut sauvegarder les Redactions

Pour tester veuillez :
* Vous connecter à ARender en tant qu'admin :
    * Vider les Cookies ARender,
    * Ou ouvrir ARender en navigation privée.
* Ouvrir le lien suivant : [LIVE EXAMPLE](https://www.demo.arender.io/?user=admin&topPanel.obfuscate=true&topPanel.obfuscateZone=true)
  [shortcode]

## Redaction avancée

Dans l'exemple précédent le texte derrière la Redaction est téléchargé et peut être copié par l'utilisateur.

Si le besoin est d'empêcher certains utilisateurs d'avoir accès au texte derrière la Redaction, merci de suivre la procédure ci-dessous :

* Activer la récupération des Redactions avant la génération d'image :

{{< tag type="code" title="WEB-INF/classes/arender-server.properties">}}

```cfg
arender.server.process.annotations.rendition=true
```
[shortcode]

* Implémenter l'interface **AuthenticationServiceProvider**. Exemple disponible sur GitHub : [GitHub](https://github.com/arondor-connectors/sample-connectors/blob/master/arender-sample-hmi/arender-sample-hmi-connector/src/main/java/com/arondor/arender/sample/connector/authentication/service/CustomAuthenticationServiceProvider.java)