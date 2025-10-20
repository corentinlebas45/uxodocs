---
title: Les plugins
description: Intégrer des applications WEB personnalisée au sein de la GUI.
---

# Qu'est ce qu'un plugin de la GUI ? 

Un plugin permet de rediriger un flux HTTP reçu par FlowerDocs GUI vers une autre URL. Pour cela, FlowerDocs GUI inclut un module `reverse proxy` basé sur le produit open source Zuul de Netflix. Un plugin est exposé sous le chemin `/plugins/` en fonction des routes définies.

Un plugin de la GUI se configure à travers deux types d'information : 

* Le chemin des requêtes à intercepter (`Path`)
* L'URL vers laquelle les requêtes interceptées sont redirigées (`URL`)

<br/>
Pour accéder à une route définie par un plugin, le client doit être authentifié auprès de la GUI.


# Définir un plugin

Un plugin de la GUI peut être configuré pour un scope spécifique ou pour l'ensemble des scopes d'une instance FlowerDocs.

## Plugin spécifique à un scope

Un plugin peut être configuré à travers un document de classe `Route` avec les tags `Path` et `URL`.

La configuration de ces plugins est exposée dans la section _Administration > Configuration > Les plugins_ de la console d'administration. 

En définissant un plugin avec le chemin `/my-route/**` et l'URL `https://flowerdocs.com/my-plugin` pour le scope `<scope>`, la requête exécutée sur `/plugins/<scope>/my-route/test` est redirigée vers `https://flowerdocs.com/my-plugin/test`.


## Plugin global

Un plugin global est accessible depuis n'importe quel scope. Il doit être configuré à travers le fichier de propriété `gui.properties`.
Pour définir un nouveau plugin global, il est nécessaire de définir la route correspondante telle que : 

```properties
zuul.routes.<plugin-id>.path=<plugin path>
zuul.routes.<plugin-id>.url=<external plugin URL>
```

<br/>

**Exemple :** Définition d'un plugin nommé *myplugin*

```properties
zuul.routes.myplugin.path=/plugins/sample/**
zuul.routes.myplugin.url=http://localhost:3006/sample
```
Avec cet exemple, les requêtes émises sur `<gui>/plugins/sample` sont redirigées vers `http://localhost:3006/sample`.

<br/>


*Le timeout sur les plugins peut être configuré à l'aide des propriétés `zuul.host.connect-timeout-millis` et `zuul.host.socket-timeout-millis`.*
# Plugins par défaut

Par défaut, plusieurs plugins sont ajoutés permettant de consommer des ressources FlowerDocs. Ils sont listés dans le tableau ci-dessous.

| Chemin | URL cible | Description |
|--------|-----------|-------------|
|`/plugins/plume`|`${gui.client.plume.url}`|Redirige vers plume|
|`/plugins/rest`|`${core}/rest`|Redirige vers les services REST exposés par FlowerDocs Core|
|`/plugins/external`|`${core}/external`|Redirige vers des plugins exposés par FlowerDocs Core|

# Sécurité

Pour accéder à un plugin, à travers FlowerDocs GUI, le client qui émet  la requête doit être authentifié (à travers le cookie `SESSION`). Cette authentification est transmise au plugin sous la forme d'une en-tête HTTP `token` dont la valeur est le jeton de l'utilisateur effectuant la requête.

Avec le framework Spring MVC, il est possible de récupérer ce token en ajoutant le paramètre suivant à la méthode d'entrée : `@RequestHeader("token") String token`.