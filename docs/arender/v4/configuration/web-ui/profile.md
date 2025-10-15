---
title: "Profils"
draft: false
icon: mdi-badge-account-horizontal-outline
keywords: ["configuration", "profils"]
---

## Introduction

Dans ARender un profil permet de configurer l'interface ARender de
différentes manières selon les appels.

Il est possible de jouer sur de nombreux paramètres comme le CSS,
l'affichage ou non des icônes, la largeur des panels etc...

## Profils livrés avec le produit

ARender est livré avec les profils décrits ci-dessous :

| Nom                               | Description                                                                                                                   |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Base : arender-default.properties | Fichier de configuration par défaut offrant une configuration de base pour une utilisation standalone. **Ne pas le modifier** |
| arender                           | Profil dédié à la configuration partagée par tous les utilisateurs. **Modifiable**                                            |
| book                              | Profil permettant une visualisation de type livre.                                                                            |
| jsapi-demo                        | Profil démontrant les capacités de l'API Javascript ARender.                                                                  |

[shortcode]
`https://www.demo.arender.io/?url=https://arender.io/docs/demo/ARender-doc-demo.pdf&props=jsapi-demo`
[shortcode]

## Ajout d'un ou N profils

Il est possible d'ajouter 1 ou plusieurs profil(s) spécifique(s) à
ARender de manière à dédier différentes interface à différents
utilisateurs ou groupes d'utilisateurs.

Les propriétés sont listées dans le fichier
**arender-default.properties**, lui-même présent dans le dossier
*WEB-INF/classes* du WAR (ou EAR) ARender.

### Étapes pour créer un nouveau profil

- Créer un fichier nommé par exemple *nouveauProfil.properties*
- Y renseigner les propriétés à modifier (Exemple :
  `visualization.rotation.save.enabled=true`)
- Enregistrer le fichier et ajouter le au classpath du serveur
  d'application (Exemple : dans le dossier *WEB-INF/classes* du WAR (ou
  EAR) ARender)

[shortcode]
Pour déclencher l'utilisation de ce profil dans ARender il faut
ajouter le paramètre props dans l'URL avec comme valeur le nom (sans
l'extension) du fichier :

`http://localhost:8080/ARenderHMI/?url=../samples/arender.pdf&props=nouveauProfil`
[shortcode]
