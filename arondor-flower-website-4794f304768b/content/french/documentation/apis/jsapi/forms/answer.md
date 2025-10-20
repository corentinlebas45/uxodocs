+++
date = "2001-03-28T13:22:01+02:00"
title = "Réponse avec motif"
+++

Les fonctions disponibles sur l'API de réponses avec motifs sont : 


| Fonction                                                   | Description                                                                    |
|------------------------------------------------------------|--------------------------------------------------------------------------------|
|getPopup()                                                  | Récupère la popup de réponse                                           |        
|registerForFieldChange(String fieldName, function callback) | Permet l'abonnement à la modification d'un champ dans la popup de réponse      |
|getReasonedAnswerId()                                       | Récupère l'identifiant de la réponse                                           |
|getTasks()                                                  | Récupère la liste des tâches associées à la réponse                            |


__Exemples :__  

```javascript
JSAPI.get().registerForReasonedAnswerOpen(function(reasonedAnswerAPI, reasonedAnswerId) {
	console.log("Opened reasoned answer Id : " + reasonedAnswerAPI.getReasonedAnswerId());
});
```

```javascript
JSAPI.get().getReasonedAnswerAPI(<identifiant de la réponse>).registerForFieldChange("Comments", function(fieldName, fieldValue) {
    console.log("Value of " + fieldName + " changed to : " + fieldValue);
});
```
	
__Note :__ Dans cette partie, la variable ``reasonedAnswerId`` permet d'utiliser l'identifiant de la réponse venant d'être ouverte

__Attention :__ Dans le cas de l'affichage de plusieurs formulaires de réponses avec motifs, il peut être nécessaire d'accéder à un formulaire en particulier : ``JSAPI.get().getReasonedAnswerAPI(<identifiant de la réponse>)``. 
