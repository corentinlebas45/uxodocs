---
title: Panneau de chargement
---

Pour notifier l'utilisateur d'un traitement en cours lors de l'exécution de JavaScript, le panneau de chargement peut être affiché puis caché à la fin du traitement avec les fonctions suivantes disponibles depuis l'API ``FlowerJSAPI.get()`` : 


| Fonction                                  | Description                                                                    |
|--------------------------------------------|--------------------------------------------------------------------------------|
|showLoadingPanel()                          | Affiche le panel de chargement                                                 |        
|hideLoadingPanel()                          | Cache le panel de chargement                                                   |


__Exemple d'affichage du panneau de chargement pendant 3 secondes__
```javascript
JSAPI.get().showLoadingPanel();
setTimeout(function() {
	JSAPI.get().hideLoadingPanel();
}, 3000)
```