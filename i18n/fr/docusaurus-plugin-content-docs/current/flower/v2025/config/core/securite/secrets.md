---
title: Secrets
description: Pour que les secrets restent secrets
---

Il est déconseillé de stocker des mots de passe en clair dans des fichiers de configuration. Afin d'éviter de stocker les différents secrets en clair dans les fichiers `core.properties` et `gui.properties`, FlowerDocs fourni un mécanisme de chiffrement des secrets. 

<br/>

Afin d'indiquer à FlowerDocs que la valeur d'une propriété est chiffrée, elle doit être définie telle que `ENC(<valeur chiffrée>)`. Une propriété chiffrée est déchiffrée au démarrage de l'application à l'aide de son secret principal (`secret`). Ainsi un chiffrement différent peut être défini pour chacune des applications.

*L'application ne peut pas démarrer si une propriété, indiquée comme étant chiffrée, ne peut être déchiffrée.*

<br/>

Le chiffrement de propriété peut être réalisé de plusieurs façons à partir d'un secret principal : 

<clm> string encrypt --secret=<secret> --password=<propriété à chiffrer>
{{< /tab >>}}
curl -X POST \
  <core>/rest/encrypt \
  -H 'token: <token>' \
  -d {{toEncrypt}}

:::info
Il est conseillé de définir, avec cette méthode, les propriétés `token.key` et `system.admin.password` à minima.

Cette préconisation est également valable pour les composants développés autour de l'écosystème FlowerDocs : plugins GUI et operation handlers.
:::

Le secret de chacune des applications peut être défini de différentes manières : 

* comme variable d'environnement : le nom est `secret` et la valeur est `<secret>`, il faut redémarrer la machine pour prise en compte
* comme propriété de la JVM en ajoutant : `--secret=<secret>` lors de l'exécution de l'application
* dans les fichiers `core.properties` et `gui.properties` (*déconseillé*) 



:::warning
Le secret déclaré dans les variables système prévaut sur celui défini au sein du fichier properties.
:::