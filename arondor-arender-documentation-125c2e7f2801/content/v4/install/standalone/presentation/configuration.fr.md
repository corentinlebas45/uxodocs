---
title: "Configuration"
draft: false
weight: 4
icon: mdi-wrench-outline
keywords: [ "standalone", "hmi", "web ui", "configuration" ]
---

## Fichiers de configuration de ARender Web-UI

> Les fichiers de configuration ARender sont situés dans le dossier WEB-INF/classes de la webapp ARender

| Nom du fichier                                  | Modifiable | Rôle et Contenu                                                                                                                                                    |
| ----------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| arender-server-default.properties               | Non        | Contient la configuration des propriétés par défaut que vous pouvez utiliser dans arender-server-custom-<...\>.properties                                          |
| arender-server.properties                       | Non        | Configuration des propriétés supplémentaires relatives au packaging de l’application ARender Web-UI.                                                               |
| arender-server-custom-<...\>.properties         | Oui        | Configuration des propriétés spécifique client. Pour le modifier, copier les propriétés des fichiers arender-server-(default).properties avec les valeurs voulues. |
| arender.xml                                     | Non        | Point d'entrée de la configuration de l'application ARender Web-UI                                                                                                 |
| arender-custom-server-integration.xml           | Oui        | Point d'entrée de la configuration spécifique de l'application ARender Web-UI                                                                                      |
| ehcache.xml                                     | Oui        | Configuration du cache des documents ouverts via l’interface graphique.                                                                                            |
| log4j.properties                                | Oui        | Configuration des journaux applicatifs                                                                                                                             |
| arender-default.properties                      | Non        | Configuration de l'interface par défault de l'application ARender Web-UI.                                                                                          |
| arender.properties                              | Oui        | Configuration spécifique cliente de l'interface de l'application ARender Web-UI. (Cf. [Profil](broken-link.md))              |
| customClient/<...\>-custom-client-ui.properties | Oui        | Une autre configuration spécifique cliente de l'interface de l'application ARender Web-UI qui supporte un nom de fichier générique                                 |
| arender-env.properties                          | Non        | Configuration spécifique cliente de l'interface de l'application ARender Web-UI fournie via les variables d'environnement Docker                                   |

## Définition de serveur de rendition

Pour définir un ou plusieurs serveurs de rendition, renseigner le fichier de configuration
**arender-server-custom-<...\>.properties** de manière suivante :

{{< tag type="code" title="arender-server-custom-<...\>.properties">}}

```cfg
arender.server.rendition.hosts={serveur_de_rendition_1},{serveur_de_rendition_2},{serveur_de_rendition_n}
```


*Le contenu de la balise "{serveur_de_rendition_x}"
ci-dessus est à modifier par l'adresse du serveur de rendition
configuré.*

_(ne pas oublier de redémarrer votre Web-UI)_

## Définition du dossier de sauvegarde des annotations XFDF

Un dossier par défaut est configuré dans ARender pour sauvegarder les
annotations XFDF en tant que fichier XML.

**L'utilisateur lançant le serveur d'application doit avoir les droits
de lecture et d'écriture sur ce dossier.**

Par défaut, les annotations XFDF sont sauvegardées dans un dossier
*ARenderAnnotations/* lui même créé dans le dossier HOME de
l'utilisateur lançant le serveur d'application.

Si le serveur d'application est lancé en service sur
windows (*sans utilisateur configuré pour le lancer*) le dossier sera
créé dans _C:\Windows\System32\config\systemprofile_.

Pour configurer un dossier en particulier, il faut soit créer :

- soit modifier le fichier de propriété serveur
  *arender-server-custom-<...\>.properties* et y ajouter la propriété
  **arender.server.annotations.xfdf.localstorage.default.path** avec
  la valeur voulue
- une propriété système nommée
  **arender.annotation.xfdf.localstorage.default.path** et lui donner
  la valeur du dit dossier,

## Feuille de style : ARender-mat.css

La plupart des composants graphiques d’ARender peuvent être paramétrés
dans la feuille de style. Consulter le fichier pour plus de détails.

*Cette feuille de style est liée au profil par défaut.
Se référer au Guide de configuration pour plus de détails.*

## Validation de token personnalisée 

La validation d'un token est configurable si ce dernier est envoyé comme cookie ou attribut de requête POST à l'URL /arendergwt/validateToken.

Le token doit avoir comme nom "token".

La classe Java de validation personnalisée devra implémenter l'interface TokenValidator. Elle devra être déclarée dans la configuration ARender au travers de la propriété **arender.server.json.load.token.validator**.
Le validateur par défaut est le **NoopTokenValidator**.
