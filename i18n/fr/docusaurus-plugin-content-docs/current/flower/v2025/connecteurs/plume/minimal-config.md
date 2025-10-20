---
title: Configuration minimale
intro: 
---

:::info
Cette documentation décrit les différents connecteurs disponibles pour Plume. Il faut à minima en définir un dans le fichier ``plume.properties`` présent dans le dossier ``plume.config.dir`` renseigné dans la partie précédente.
:::

L'expéditeur du mail est renseigné par la propriété ``email.from`` avec pour valeur par défaut ``plume@arondor.com``.

# Connecteurs 

## FlowerDocs

Le connecteur FlowerDocs permet de stocker les emails rédigés à l’aide de Plume dans FlowerDocs.
Pour l’activer, il est nécessaire d’ajouter la propriété `flower.enabled=true`. 

De plus, il est nécessaire de renseigner la propriété `flower.url` avec l'URL des web services FlowerDocs. 

```properties
flower.enabled=true
flower.url=http://<host>:<port>/<Core path>/services
```

## SMTP

Le connecteur SMTP permet l’envoi d’un email rédigé dans Plume en utilisant le protocole SMTP.
Pour activer ce connecteur, il est nécessaire de rajouter la propriété `smtp.enabled=true`

```properties
smtp.enabled=true
smtp.host=SSL0.OVH.NET
smtp.username=no-reply@flowerdocs.com
smtp.password=***
smtp.parameters.socketFactory.port=465
smtp.parameters.socketFactory.class=javax.net.ssl.SSLSocketFactory
smtp.parameters.starttls.enable=true
```

Il est possible de rajouter des paramètres au connecteur SMTP en ajoutant des propriétés `smtp.parameters.<name>=<value>`.


# Activation dans l'IHM

Afin d'activer Plume dans ARender, il faut  : 
	
* Ajouter la propriété ``plume.enabled`` dans le profil fourni à ARender  

```properties
	gui.client.arender.profile=arender&plume.enabled=true
```

* Configurer Plume comme un plugin de FlowerDocs GUI : 

```properties
	plugins.routes.plume.path=/plume/**
	plugins.routes.plume.url=http://localhost:8080/plume
```

Pour plus d'informations, concernant l'utilisation de plugin de FlowerDocs GUI, la documentation est disponible  [ici](broken-link.md).