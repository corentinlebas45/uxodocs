---
title: Clustering & HA
---

# Activation

Une stack FlowerDocs composée de plusieurs instances nécessitant la synchronisation de certaines données pour fonctionner aussi bien au niveau de FlowerDocs Core que de FlowerDocs GUI.
Pour cela, FlowerDocs s'appuie sur la base de données clé-valeur [Redis](https://redis.io/) afin de gérer : 


* la persistance des sessions entre les différentes instances de GUI
* un cache distribué pour le maintien des réservations de composant
* le renouvellement des caches "statiques" (classes de composants, ACLs, configurations GUI...) entre les différentes instances de FlowerDocs Core et de FlowerDocs GUI
* la persistance et la distribution des ``OperationHandler`` asynchrones 

<br/>
Cette base de données offre des performances élevées dans la mesure où les données sont stockées en mémoire. 


:::info
Pour activer ce connecteur, il est nécessaire d'ajouter la propriété `redis.enabled=true`.
:::


# Accès

En fonction de l'architecture retenue, la configuration permettant d'accéder à Redis est à adapter. 


## Simple

Ce mode de communication permet l'utilisation d'une seule instance Redis. Celle-ci peut être configurée en renseignant les propriétés `spring.redis.host` et `spring.redis.port`.

<br/>
__Note :__ *Ce type de configuration est déconseillé pour un environnement de production.*


## Sentinel 
Le mode [Redis Sentinel](https://redis.io/topics/sentinel) permet la mise en place de Redis en haute-disponibilité.
Ce mode s'active en renseignant le nom du master Redis via la propriété `spring.redis.sentinel.master` et l'ensemble des noeuds Redis avec `spring.redis.sentinel.nodes` (liste de couples *host:port* séparés par des virgules).   
 
## Configuration


Les propriétés listées ci-dessous permettent de configurer la communication avec Redis.

| Propriété                       | Description                                                                                                             |
|---------------------------------|------------------------------------------|
|spring.redis.password            | Mot de passe                             |
|spring.redis.timeout 	          | Timeout des échanges avec Redis          |
|spring.redis.database	          | Index de la base de données Redis         |
|spring.redis.timeout             | Temps maximum de connexion               |

:::info 

* Il est recommandé de suivre [les préconisations Redis](https://redis.io/topics/security) pour garantir la sécurité de ce composant.
* La mise en place d'un tunnel chiffré entre FlowerDocs et Redis peut être réalisée avec l'utilitaire [spiped](http://www.tarsnap.com/spiped.html) comme [indiqué par Redis](https://redis.io/topics/encryption). 
:::