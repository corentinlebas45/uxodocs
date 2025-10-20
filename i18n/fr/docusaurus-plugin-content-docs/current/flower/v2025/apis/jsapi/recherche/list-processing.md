---
title: Traitement en série de tâches
description: Traiter une liste de tâches sans revenir sur la recherche
---

Pour un traitement plus performant d'une liste de tâches, il est possible de définir des sessions de traitement en série. Au cours de ces sessions, l'utilisateur va passer à la tâche suivante sans revenir sur la recherche ayant initiée la session. 

Le démarrage de ces sessions de traitement est configuré à l'aide de l'API JS : 
```javascript
JSAPI.get().batchSession().registerBuilder(function(session, callback){
		callback.enable(session);
});
```
Le contexte au démarrage de la session de traitement (requête de la recherche) est conservé tout au long de la session.
Cependant, l'API JS permet de modifier la session en exposant les méthodes suivantes : 

| Fonction                               | Description                                                        |
|----------------------------------------|--------------------------------------------------------------------|
|getRequest()                            | Récupère la requête exécutée au cours de la session de traitement  |        
|setRequest(SearchRequest request)       | Modifie la requête exécutée de la session de traitement            |        
|getPlace()                              | Récupère la place courante        								  |        
|getSourcePlace()                        | Récupère la place à l'origine de la session de traitement          |        
|getComponentSource()                    | Récupère le composant à l'origine de la session de traitement      |        
|getLast()                               | Récupère l'identifiant du dernier composant ouvert au cours de la session de traitement 	|        
|setEnabled(boolean enabled)             | Permet de désactiver la session de traitement				      |        
|isEnabled()                             | Détermine si la session de traitement est active ou inactive       |