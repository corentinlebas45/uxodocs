+++
date = "2012-03-28T13:20:01+02:00"
title = "Versions"
Description = "Stratégies de version de documents"
+++
Une stratégie de nommage permet de définir les libellés que l’utilisateur peut renseigner lors de la création d’une version d'un document. Différentes stratégies sont disponibles : 

* `MINOR` :  Version MINEURE uniquement. 
* `MAJOR`  : Version MAJEURE uniquement.
* `NUMBERED` : Version MINEURE et MAJEURE.
* `CUSTOM` : Libellé personnalisé uniquement.
* `ALL` : Les trois stratégies sont proposées à l'utilisateur : MINOR, MAJOR et CUSTOM.
* `NONE` : Aucune stratégie, l'action de promotion n'est pas affichée.

<br/>
Par défaut, la stratégie `ALL` est appliquée. L’API Javascript permet de restreindre ces stratégies de nommage proposées aux utilisateurs : 

```javascript 
var versioningAPI = JSAPI.get().getVersioningAPI();
versioningAPI.register(function (component,callback) {
        callback.onSuccess("CUSTOM");
      });
```
Plusieurs resolvers peuvent être définis, cependant la première valeur valide est utilisée comme stratégie de nommage.
:::info
Les numéros de versions sont proposés automatiquement à partir du libellé de la version précédente. 

* Ainsi si la version précédente est 1.0 alors pour une version mineure 1.1 sera proposé et 2.0 pour une majeure. 
* Si pour la version précédente, le libellé est personnalisé (noté : xxx) alors les libellés proposés seront xxx**_0.1** pour une version mineure et xxx**_1.0** pour une version majeure. 
:::
