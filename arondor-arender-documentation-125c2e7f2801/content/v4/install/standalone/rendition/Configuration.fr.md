---
title: "Configuration"
draft: false
weight: 2
icon: mdi-cog-outline
keywords: [ "configuration", "rendition", "Microsoft Office", "hazelcast"]
---

## Configuration de Microsoft Office

**Pour les serveurs Windows avec Microsoft Office seulement**

Si vous avez choisi d'utiliser Microsoft Office avec ARender, veuillez suivre les instructions ci-dessous :


Télécharger le zip ci-après et exécuter *runCheck.bat* : [AromsCheck](/docs/AromsCheck.zip)


**Télécharger et installer des logiciels listés ci-dessous :**

* .Net 4.5:
  <https://www.microsoft.com/en-us/download/details.aspx?id=30653>

* Microsoft Visual C++ redistributable 2010:
  <https://www.microsoft.com/en-US/Download/confirmation.aspx?id=14632>

* Microsoft Visual C++ redistributable 2008:
  <https://www.microsoft.com/en-us/download/details.aspx?id=15336>

**Créer les dossiers systèmes ci-dessous :**

* C:\Windows\System32\config\systemprofile\Desktop

* C:\Windows\SysWOW64\config\systemprofile\Desktop




* Il est impératif de lancer la rendition avec un compte utilisateur - administrateur ou non - (Services > ARender Rendition Service > Connexion) qui ouvre Microsoft Office sans soucis et sans pop-ups. Les pop-ups empêchent le bon fonctionnement d’Office et donc de notre rendition pilotée.
* Pour la configuration des conversions de fichiers Excel, vérifiez que l'utilisateur possède une imprimante par défaut configurée et fonctionnelle (par exemple, conversion vers XPS) afin de pouvoir faire des opérations de travail sur les pages des feuilles Excel.
* Ne pas utiliser l'imprimante proposée par défaut, cette imprimante sera seulement utilisée pendant la connexion à distance sur le serveur et s'arrêtera dès que vous le quitterez.


### Configurer les propriétés Microsoft Office dans ARender

Il est possible de configurer le rendu des documents générés par ARender via Microsoft Office.
Pour cela, il faut modifier le fichier **aroms.properties** situé dans le dossier  modules\TaskConversion\aroms2pdf de votre installation de ARender Rendition.

Voici la liste des propriétés modifiables :

| Propriété            | Valeur par défaut      | Détail |
| :------------------- | :--------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PDF/A                | false                  | PDFs généré par ARender sont des PDF/A                                                                                                                               |
| processAutoKill      | false                  | Termine les anciens processus Office au démarrage de Aroms                                                                                                           |
| TimeoutS             | 120                    | Temps maximum de conversion pris par ARender pour générer un PDF via MS Office. Au delà de ce temps, le processus est terminé                                        |
| AromsHost            | http://localhost:8000/ | URL sur laquelle Aroms est exposé                                                                                                                                    |
| LockFields           | false                  | Désactive la mise à jour des champs variable (comme les dates) du document Office                                                                                    |
| IgnorePrintAreas     | true                   | Désactive l'impression des lignes vides                                                                                                                              |
| FitSheetOnOnePage    | true                   | True: MS Office va imprimer le document sur une seule page. False: Comportement par défaut de MS Office (découpage en plusieurs page si le document est trop grand). |

## Configuration de Hazelcast

Depuis la version 4.5 de ARender, Hazelcast peut être utilisé pour partager le cache entre toutes les Rendition, **si et seulement si, le dossier de cache des binaires est partagé entre toutes les Renditions**.

Vous trouverez la documentation complète sur [le site Hazelcast](https://docs.hazelcast.com/home/).

### Détail sur configuration par défaut

Le fichier de configuration pour Hazelcast se trouve côté rendition dans les ressources du document-service-broker. Le chemin du fichier de configuration est *ARender-Rendition-4.X.Y\modules\RenditionEngine\rendition-engine-micro-service-4.X.Y.jar\BOOT-INF\classes\hazelcast.yaml*.


```cfg
hazelcast:
  map:
    documentAccessors:
      max-idle-seconds: 3600
      eviction:
        eviction-policy: NONE
        max-size-policy: PER_NODE
        size: 5
  network:
    join:
      auto-detection:
        enabled: false
    rest-api:
      enabled: true
      endpoint-groups:
        CLUSTER_READ:
          enabled: true
        HEALTH_CHECK:
          enabled: true
        WAN:
          enabled: true
        DATA:
          enabled: true

```


| Propriété                   | Description                                                                                                                                                                                                                                                                                                                                                                                        | 
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| max-idle-seconds            | Cette propriété permet de définir le temps où le document est gardé en cache. Cette valeur est en seconde. Par défaut, un document reste en cache 1 heure, donc la valeur par défaut est *3600*. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/cloud/map-configurations#max-idle-seconds).                                           |
| eviction-policy             | Cette propriété permet de définir la politique d'éviction des documents en cache lorsque la valeur maximale du cache est dépassé. Par défaut, la valeur est *NONE* ce qui correspond à aucune éviction et que la taille maximum est ignoré. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/cloud/map-configurations#eviction-policy). |
| max-size-policy             | Cette propriété définie comment Hazelcast va calculer la taille maximum du cache. Par défaut la valeur est *PER_NODE* qui définie que la taille maximum du cache est appliqué pour chaque membre du cluster. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/cloud/map-configurations#max-size-policy).                                |
| size                        | Cette propriété définie la taille maximum du cache. Par défaut la valeur est *5*. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/cloud/map-configurations#max-size).                                                                                                                                                                  |
| network.join.auto-detection | Cette propriété permet de définir le mécanisme de détection d'Hazelcast des membres d'un clusters sur le même réseau. Par défaut la valeur est *false*. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/imdg/4.1.2/clusters/network-configuration#join).                                                                               |

#### rest-api

L'API REST est activé par défaut avec la propriété *enabled: true*. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/hazelcast/5.0/maintain-cluster/rest-api).

##### endpoint-groups

Cette section permet de définir les endpoint group qui peuvent être utilisés avec l'API REST. Vous pouvez retrouver plus de détails sur [la documentation associé d'Hazelcast](https://docs.hazelcast.com/hazelcast/5.0/maintain-cluster/rest-api#using-rest-endpoint-groups).

###### CLUSTER_READ

Permet l'accès aux endpoints suivants : 

- /hazelcast/rest/cluster
- /hazelcast/rest/management/cluster/state
- /hazelcast/rest/license (GET)
- /hazelcast/rest/management/cluster/version (GET)
- /hazelcast/rest/management/cluster/nodes
- /hazelcast/rest/instance
- /hazelcast/rest/log-level (GET)

###### HEALTH_CHECK

Permet l'accès aux endpoints suivants : 

- /hazelcast/health/node-state
- /hazelcast/health/cluster-state
- /hazelcast/health/cluster-safe
- /hazelcast/health/migration-queue-size
- /hazelcast/health/cluster-size
- /hazelcast/health/ready

## Configuration personnalisée

Pour personnaliser la configuration d'Hazelcast, il faudra créer votre fichier *hazelcast.yaml* et reprendre la configuration du fichier initiale *ARender-Rendition-4.X.Y\modules\RenditionEngine\rendition-engine-micro-service-4.X.Y.jar\BOOT-INF\classes\hazelcast.yaml*.


Pour chaque montée de version d'ARender, veuillez bien lire la release note pour prendre en compte de potentiels modifications de la configuration initiale.


Après avoir fait votre propre fichier de configuration, il faudra modifier le fichier *custom-setenv.bat* ou le fichier *custom-setenv.sh* afin 
de préciser le chemin du nouveau fichier à utiliser. Pour ce faire, vous devez rajouter l'argument *-Dhazelcast.config=* dans 
la liste des arguments JVM. Par défaut, si le chemin spécifié est *hazelcast.yaml* alors le chemin où doit être placé le fichier 
est *ARender-Rendition-4.X.Y\modules\RenditionEngine*.


```cfg
set ARENDER_BROKER_JVM_ARGS=-Djava.net.preferIPv4Stack=true -Djava.net.preferIPv6Addresses=false -Dloader.path="client_libs/" -Dfile.encoding=UTF-8 -Dhazelcast.config=hazelcast.yaml
```


## Répertoire de cache non partagé entre plusieurs rendition

### Désactiver la détection de chaque instance

Vous devez désactiver la propriété, vu précédemment, d'*auto-detection*. Cette propriété est désactivé par défaut.

### Configurer la Web-UI

Vous devez indiquer, dans la configuration du serveur Web-UI, chaque hôte de chaque rendition. La répartition se fera par la Web-UI selon les weather des renditions.

Les détails de configuration sont trouvables sur la [page](broken-link.md) dédiée.

## Répertoire de cache partagé entre plusieurs rendition

### Ouverture du port de Hazelcast

Par défaut, le port pour Hazelcast est le 5701. Pour la communication entre les machines, il faut ouvrir le port d'hazelcast pour chaque rendition.

### Activer la détection de chaque instance

Vous devez activer la propriété, vu précédemment, d'*auto-detection* qui permet à Hazelcast de connaitre chaque instance de rendition.

### Emplacement des instances de rendition

Chaque rendition doit être placé dans le même sous-réseau pour permettre le partage de répertoire de cache.

### Configurer le répertoire partagé

Dans le cadre de l'utilisation d'Hazelcast avec une multi-instance de rendition et un répertoire partagé, vous aurez obligatoirement besoins que le répertoire partagé soit en [NFS](https://fr.wikipedia.org/wiki/Network_File_System).

Pour chaque microservice de chaque instance de rendition, il est nécessaire de spécifier la localisation du répertoire de cache partagé qui sera utilisé. La propriété se trouve dans le fichier *application.yaml* pour chaque microservice.


{{< tabs id="2" tabs="document-service-broker, document-renderer, document-text-handler, document-converter">}}


```cfg

temp:
  files:
    folder: ../../tmp/

```


```cfg

shared-files:
  sharedPath: ../../tmp/

```


```cfg

shared-files:
  sharedPath: ../../tmp/

```


```cfg

tmp:
  dir:
    doc: ../../tmp/

shared-files:
  sharedPath: ../../tmp/

```


### Fonctionnement avec Load balancer

Dans le cas où vous avez un Load balancer entre la Web-UI et les renditions, vous devrez indiquer, dans la configuration du serveur Web-UI, l'hôte du Load balancer à la place de lister les hôtes de chaque rendition.


```cfg

arender.server.rendition.hosts=LOAD_BALANCER_HOST

```


Les détails de configuration sont trouvables sur la [page](broken-link.md) dédiée.

### Fonctionnement sans Load balancer

Dans le cas où vous n'avez pas de Load balancer entre la Web-UI et les renditions, vous devez indiquer, dans la configuration du serveur Web-UI, chaque hôte de chaque rendition. La répartition se fera par la Web-UI selon les weather des renditions.

Les détails de configuration sont trouvables sur la [page](broken-link.md) dédiée.

## Utilisation dans AWS

Dans un environnement AWS, si un describe d'instance se basant sur un tag a besoin d'être fait alors il faut s'assurer que le rôle attaché à l'instance EC2 ait le droit de faire du describe d'instance.


## Configurer le NFS  

La configuration de NFS est importante pour garantir la synchronisation des différents nœuds entre eux.\
Deux configurations d’optimisation principales dans NFS impliquent un risque fort de désynchronisation des clients NFS :
- L'écriture asynchrone (option async), positionnée par défaut
- Le cache de lecture local (lookupcache ou FS-Cache, option fsc)

La configuration requise pour NFS doit contenir les options suivantes pour garantir la synchronisation des clients : 

```cfg

sync,noac,lookupcache=none

```

**Références :** \
[nfs(5) - Linux man page 10.3](https://linux.die.net/man/5/nfs) \
[NFS Red Hat Enterprise Linux 6](https://access.redhat.com/documentation/fr-fr/red_hat_enterprise_linux/6/html/storage_administration_guide/fscachenfs)        
