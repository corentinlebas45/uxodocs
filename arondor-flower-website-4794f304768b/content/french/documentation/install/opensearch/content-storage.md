+++
date = "2003-03-28T13:20:01+02:00"
title = "Stockage des contenus"
categories = []
banner = "img/banner/historique.png"
description = "Gérer le stockage du contenus des documents"
+++

Le connecteur OpenSearch fournit deux types de stockage pour les contenus (ou fichiers) de document.

## Système de fichier

Ce connecteur permet le stockage des fichiers sur un système de fichier vu comme local par la JVM (local, NFS...).
Le répertoire utilisé peut être configuré : 

file.dir=/opt/FlowerDocs/Files/


## Amazon S3

Avec le connecteur Amazon S3, les contenus de document sont stockés dans un bucket S3.
Pour utiliser ce connecteur, la configuration suivante est nécessaire :

```properties
core.services.file.dao=s3
s3.region=<region AWS>
```

__Paramétrage du client Amazon S3__

| Propriété                     | Valeur par défaut|Description                                                                         |
|-------------------------------|-------------------------------------------------------------------------------------|-------------------|
| s3.max.connections            |100 | Le nombre maximum de connexions HTTP ouvertes                                                     |       
| s3.max.error.retry            | 2 | Le nombre maximum d'essais pour des requêtes pouvant être rejouées (erreur 5xx)                 |
| s3.socket.timeout             | 100000|  Le temps d'attente (en ms) pour que les données soient transférées                             |


Par défaut, le fichier contenant la paire de clés d'accès et secrète doit se trouver dans le dossier ``${USER_HOME}/.aws/credentials`` et le profil utilisé est ``default``. 

L'utilisation d'un autre fichier de clés ou d'un autre profil est possible grâce aux paramètres suivants : 

```properties
s3.profile=<nom du profil>
s3.configFilePath=<chemin du répertoire>/<fichier contenant les clés>
```

L'utilisation des rôles de l'instance AWS est possible en ajoutant la propriété  : 

```properties
s3.instanceProfile=true
```

Un bucket unique peut être utilisé pour tous les scopes FlowerDocs avec la configuration suivante : 

```properties
s3.bucket.scoped=false
s3.bucketName=<nom du bucket>
```

	