---
title: "ARender pour FileNet dans Apache Tomcat"
description: Guide de déploiement de ARender HMI pour FileNet dans le serveur d'application Apache Tomcat
draft: false
type: docs
weight : 2
keywords: [ "standalone", "hmi", "configuration", "filenet" ,  "apache" , "tomcat"]
---

Ci-dessous un exemple de déploiement de ARender HMI pour FileNet dans le serveur d'application Apache Tomcat.

[shortcode]

Limitation : l'authentification d'ARender vers FileNet doit se faire via un **compte technique**.

Par conséquent :
- Les documents/annotations/métadonnées vont être récupérés via le compte technique,
- Les annotations seront sauvegardées au nom du compte technique.

Si le besoin est de propager l'authentification il faut utiliser le déploiement dans le serveur d'application IBM Websphere (voir la documentation [ici](broken-link.md)).

[shortcode]

Dans notre exemple, nous déployons ARender HMI dans l'environnement suivant :

- Système d'exploitation : Windows Server 2016
- Filenet 5.5
- Apache Tomcat 9.0
- ARender HMI pour FileNet version [shortcode]

## Télécharger le WAR ARender HMI pour FileNet

En utilisant l'identifiant et mot de passe préalablement fournis,
vous pouvez récupérer l'application web en format EAR
[ici](https://artifactory.arondor.cloud/artifactory/arondor-all/com/arondor/arender/arondor-arender-hmi-filenet/[shortcode]/arondor-arender-hmi-filenet-[shortcode].war).

## Configuration d'ARender HMI WAR pour FileNet

Plusieurs configurations additionnelles sont nécessaires pour faire fonctionner ARender pour FileNet dans Apache Tomcat.

### Configuration du user-context

Ouvrir le fichier ci-dessous :
* arondor-arender-hmi-filenet-[shortcode].war\WEB-INF\classes\arender-user-context.xml

Et remplacer le bean ayant l'id suivant **urlFilter** par le bean ci-dessous :
``` xml
<bean id="urlFilter"
    class="com.arondor.viewer.server.security.RequestParameterAuthenticationFilter">
    <property name="authenticationManager" ref="authenticationManager" />
</bean>
```

### Configuration de la sécurité

Supprimer le fichier ci-dessous :
* arondor-arender-hmi-filenet-[shortcode].war\WEB-INF\lib\arondor-arender-filenet-ce-[shortcode].jar\META-INF\web-fragment.xml

### Configuration de la connexion avec un compte technique

Ouvrir le fichier ci-dessous :
* arondor-arender-hmi-filenet-[shortcode].war\WEB-INF\classes\arender-server-custom-filenet.properties

Et ajouter le contenu ci-dessous (en adaptant les valeurs selon votre contexte) :
``` cfg
# Default authentication method is jaasObjectStoreProvider. To activate connect throught a technical account use loginPasswordObjectStoreProvider and set the right login and password below
arender.server.filenet.authentication.method=loginPasswordObjectStoreProvider
# Exemple of URL for jaasObjectStoreProvider: iiop://localhost:2809/FileNet/Engine and for loginPasswordObjectStoreProvider : http://localhost:9080/wsi/FNCEWS40MTOM/
arender.server.filenet.ce.url=http://localhost:9080/wsi/FNCEWS40MTOM/
arender.server.filenet.ce.login=loginToChange
arender.server.filenet.ce.password=passwordToChange
```

### Ajout des librairies additionnelles

Télécharger les JARs ci-dessous : 
* **xercesImpl** version **2.11.0** : [Lien de téléchargement](https://mvnrepository.com/artifact/xerces/xercesImpl/2.11.0).
* **xml-apis** version **1.4.01** : [Lien de téléchargement](https://mvnrepository.com/artifact/xml-apis/xml-apis/1.4.01).

Et placer ces deux librairies dans le dossier : arondor-arender-hmi-filenet-[shortcode].war\WEB-INF\lib.