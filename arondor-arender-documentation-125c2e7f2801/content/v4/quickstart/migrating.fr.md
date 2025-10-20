---
title: "Migrer depuis ARender3"
weight: 2
draft: false
icon: mdi-package-up
## search related keywords
keywords: ["quickstart", "migration"]
---

## Migration d’ARender 3 à ARender 4

Les API ARender 3 et 4 sont proches, mais la migration à partir
d'ARender peut entraîner des différences mineures.

Si vous avez lu le guide de démarrage rapide jusqu'à présent, vous avez
peut-être une idée de ce qui a changé. Vous trouverez ici une liste de
ces principaux changements.

### Le serveur de rendition change de nom

L'ancien packaging du serveur de rendition n'existe plus.

Un peu complexe à intégrer à d’autres partenaires/clients et souvent
intégré/installé de manière automatique le format jar IzPack n’est plus
utilisé. Au lieu de cela, une archive zip simple est devenue le nouveau
format.

Cela implique cependant de nouveaux changements:

- pas de configuration possible au moment de l'installation (pas
  d'installation)
- Les logiciels tiers ne sont pour l'instant pas fournis avec
  l'archive zip
- "installation" plus simple : décompressez le fichier\!
- processus de "suppression" plus simple: supprimez le dossier\!

### ARender renouvelle ses librairies

Spring Boot 1.5, Netflix Eureka pour la découverte, l’architecture de
micro-service, le niveau de l’API et les fonctionnalités offertes ont
été tous deux soulevés pour ARender 4.

Pour la Web-UI, nous avons mis à niveau à la dernière version de GWT, qui
comprend des modifications très utiles et attendues.

Ces deux mises à niveau impliquent l'utilisation de Java 8 (minimum), à
la fois pour le serveur de rendition et pour le serveur hébergeant la
Web-UI.

### Prise en charge du navigateur ARender

ARender 4 se concentre et apporte de nouvelles fonctionnalités au monde
de l'aperçu/annotation de documents. Pour ce faire, nous avons dû
exclure du support les navigateurs qui ne fonctionneraient plus avec
certaines de ces nouvelles fonctionnalités.

C’est la raison pour laquelle ARender 4 prend désormais en charge les
versions récentes de Chrome et Firefox (car il s’agit de navigateurs à
mise à jour automatique) et d’Internet Explore 11. Edge n’est pas encore
considéré comme un navigateur pris en charge (même s'il fonctionne de
manière convenable) en raison de certains problèmes qu’il rencontre, au
délà ARender.

### Code client personnalisé et ARender 4

Comme indiqué précédemment, le backend de rendition a changé dans
ARender 4, et sa propre API de communication interne également.

Le protocole RMI a maintenant disparu et le code XML est déconseillé au
profit de la nouvelle API JSON. Plus rapide, plus claire et plus facile
à utiliser, la nouvelle API REST est le seul moyen d'accéder au serveur
de rendition.

ARender 4 propose un ensemble de points de terminaison HTTP identiques à
ceux d'ARender 3, ainsi qu'un nouvel ensemble de points de terminaison
retravaillés, plus normalisés et adaptés à un usage externe.

Cette modification de l'API implique que votre code doit:

- Implémenter l'interface DocumentAccessorHasContentSize
- Pouvoir être sérialisé en JSON

Pour la première option, qui est la plus simple et la plus recommandée,
votre code personnalisé restera dans la Web-UI et il vous suffira d'inclure
votre code dans le dossier lib de déploiement du war. Le contenu sera
diffusé en continu sur le serveur de rendition à l'aide de notre propre
API et objets.

Si vous souhaitez opter pour une sérialisation JSON de votre
DocumentAccessor (moins de transferts de données), il atteindra le
serveur de rendition et devra être reconnu par celui-ci. Nous avons
introduit dans ARender 4.0.1 un dossier nommé *client_libs* où vous
pouvez placer votre code personnalisé. Une fois ouvert et désérialisé
par notre serveur, le document sera récupéré et la logique du code
personnalisé ne sera pas propagée dans les micro-services de rendu.

### Phase de démarrage du serveur ARender 4

Un élément qui a beaucoup changé depuis ARender 3 est la nouvelle phase
de démarrage d’ARender 4. Etant donné que nous comptons maintenant sur
la découverte des services, le démarrage complet d’un serveur de
rendition prend plus de temps qu’avant, avec la garantie que chaque
service est véritablement sain pendant la phase de démarrage d'ARender.

Pour compenser cela, un point de terminaison est exposé sur
`http://{hôte-rendition}:8761/heatlh/records` afin de vous montrer en
direct l'état de votre état de démarrage du serveur et son état de
fonctionnement actuel après le démarrage.

Ce noeud final est également propagé sur le serveur frontal à l'adresse
`http://{hôte-Web-UI}:{port-Web-UI}/{contexte_arender}/arendergwt/health/records`.

Il vous montrera un résumé de tous les serveurs et contiendra un lien vers la documentation
swagger pour ceux-ci.

### Personnalisation du serveur de rendition d'ARender 4

Nous vous recommandons de consulter les "cookbook" de la documentation
pour connaître les nouvelles possibilités de configuration d’ARender 4.

Comme ARender 4 s'appuie désormais beaucoup sur Spring Boot, vous pouvez
ouvrir chaque fichier jar de micro-service pour rechercher dans le
dossier "BOOT-INF/classes/" toutes les propriétés de
configuration possibles.

Vous pouvez ensuite remplacer toutes les propriétés que vous souhaitez
en plaçant dans le même dossier du micro service un fichier nommé
"application.properties" ou "application.yaml" (en fonction de la
syntaxe de configuration avec laquelle vous êtes le plus familier). Cela
inclut par exemple l’hôte par défaut sur lequel le service doit écouter,
les types MIME pris en charge par ARender, etc...
Il est conseillé de ne pas toucher au fichier « application.yaml »,
il existe pour chaque module un fichier externe « application-security.yml »
dans lequel vous pourrez ajouter les modifications.
