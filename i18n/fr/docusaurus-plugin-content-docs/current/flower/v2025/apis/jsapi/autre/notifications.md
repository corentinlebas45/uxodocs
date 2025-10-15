+++
date = "2018-03-28T13:20:01+02:00"
title = "Notifications"
+++

Pour envoyer des notifications, l'API de notification est accessible en utilisant la fonction  ``JSAPI.get().getNotificationAPI()``. 
Elle expose les fonctions suivantes : 


* ``sendInformation(String message)``
* ``sendWarning(String message)``
* ``sendError(String message)``

Ces trois fonctions permettent d'ouvrir des fenêtres modales.

Pour envoyer une notification sur FlowerDocs, il est possible d'utiliser la fonction ``sendNotification(String message)``.
  

__Exemple :__ 

```javascript
JSAPI.get().getNotificationAPI().sendError("Une erreur est survenue");
```