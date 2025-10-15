---
title: "Démarage rapide"
draft: false
weight: 1
type: docs
icon: mdi-clock-fast
## search related keywords
keywords: ["quickstart", "général"]
StartPage : '?'
---

## Le visualiseur ARender

### Description

ARender est une visionneuse HTML5 qui vous permet de voir et d’annoter
plus de 300 formats de documents en ligne directement dans votre
navigateur.

Les navigateurs suivants sont supportés :
* Safari 11+
* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Internet Explorer 11+
* Safari Mobile
* Chrome Android

ARender est également convivial pour les mobiles, car nous
avons des interfaces dédiées pour les téléphones et les tablettes !

Vous pouvez essayer ARender en ligne dès maintenant, à cette adresse:
<https://arender.io/demo>

### Fonctionnement

ARender fait le rendu des documents à la volée de sorte que vous n’ayez
plus besoin de stocker plusieurs versions converties d’un document dans
votre GED.

Si vous possédez déjà ces rendus, ARender peut toujours les utiliser et
prendre le format le plus optimisé pour afficher le document.

ARender est construit sur deux composants:

- Le serveur Web Java frontal (appelé serveur Web-UI): sert
  l'application HTML et gère les demandes de l'utilisateur final.
- Le serveur Java principal (appelé serveur Rendition): fournit les
  rendus de documents et de nombreux autres services à l'aide d'une
  API REST au serveur Web-UI.

Si vous souhaitez en savoir plus sur le fonctionnement du serveur de
rendu, une présentation est disponible sous forme de
[diaporama](https://docs.google.com/presentation/d/1AMbT8v-iaTEiTbZnCdpaE14JKJt-Rn9lk-Ctdn08-xo/present?usp=sharing).

### Rendu d'un document

Si un utilisateur final souhaite consulter un document, une demande est
envoyée à ARender. Le serveur frontal (Web-UI) analysera ensuite la demande
de l'utilisateur final et recherchera les ID, ainsi que toute
information supplémentaire nécessaire à la récupération du document. Le
document est ensuite envoyé au serveur Rendition pour le rendu.

Si le document est un format natif pour ARender (PDF, MP4), il sera
rapidement traité et renvoyé sous forme de (images des pages, vidéo) à
l'utilisateur final.

Si le document nécessite une conversion, ARender utilisera ses outils de
détection pour rechercher le type de document et le convertir en un des
deux formats natifs. Il sera ensuite affiché.

La liste des documents pris en charge par ARender est extensible et,
tant qu’il existe un outil pour la convertir en l’un de nos formats
natifs cibles, ARender peut gérer le document.

### Annoter des documents

ARender utilise la norme XFDF introduite par Adobe pour produire des
annotations compatibles avec le format Adobe. Lorsque vous annotez avec
ARender, vos annotations sont prises en charge pour de nombreuses
versions à venir !

Ce format de stockage est notre propre structure interne et peut être
sauvegardé soit dans votre GED, soit dans un système de fichiers local,
une base de données, etc. Les annotations ne sont donc jamais stockées
directement sur vos documents et vous pouvez toujours consulter la
version originale. Modifier un document nécessite une décision et une
action manuelle pour produire une nouvelle version d'un document dans
lequel les annotations sont incorporées.

Nous proposons également l’exportation de nos annotations au format
binaire natif d’Adobe, FDF, pour une compatibilité élargie. Vous n'êtes
pas coincé avec ARender, mais nous sommes vraiment heureux de votre
séjour avec nous !

### Performances et la mise en cache des documents

Par défaut, et pour ne pas refaire le même travail plusieurs fois,
ARender stocke un petit cache de documents d'une heure sur le serveur
Rendition.

Ce cache est automatiquement supprimé et purgé. Dans la plupart des cas
d'utilisation, il n'est pas nécessaire de modifier les valeurs de ce
mécanisme de cache, car celui-ci est correctement dimensionné en
fonction des capacités de votre plate-forme.

Veuillez noter qu'ARender ne produira pas à cet égard de demande de
téléchargement des documents chaque fois qu'un utilisateur consultera
un document. Si vous souhaitez créer des traces d'audit basées sur vos
téléchargements GED, veuillez consulter le reste de la documentation
d'ARender pour comprendre les possibilités d'audit qu'ARender peut vous
offrir, en plus de vos fonctionnalités GED.

### Intégration d'ARender a votre GED

Nous avons de nombreuses intégrations prêtes à l'emploi: Alfresco, IBM
ICN, ICM, FlowerDocs et de nombreux autres GED personnalisés !

Si vous ne trouvez pas dans la documentation pour intégrer votre GED à
ARender, veuillez nous contacter et nous verrons avec vous si cette GED
n'est pas déjà gérée par l'un des nombreux partenaires d'ARender.

Si votre société possède une GED purement personnalisée, vous pouvez
facilement intégrer ARender dans un Iframe et contrôler ARender à l’aide
de l’API Javascript étendue (documentation complète disponible en ligne
sur ce site).
