---
title: Pièces jointes de tâche
---

# Document en tant que pièce jointe sans indexation

Il est possible d'utiliser l'ancien mode de création de document en tant que pièce jointe sans formulaire d'indexation en définissant une stratégie d'activation du mode *Legacy*.

Dans l'exemple suivant, les pièces jointes ayant pour identifiant `Appendices` utilisent l'ancien mode, les autres le nouveau.  

```javascript
LegacyDocumentAttachmentCreationStrategy.registerStrategy(function(task,attachment){
	if("Appendices" == attachment.getId()){ 
		return true;
	}
    return false;
});
```

# Résumé

Le résumé des pièces jointes peut être surchargé à l'aide de l'API `TaskAttachmentSynopsisHelper`. 

__Exemple :__ Définir le résumé d'une pièce basé sur les tags de la tâche parente

```javascript
helper = JSAPI.get().getHelperFactory().getTaskAttachmentSynopsisHelper();
helper.register(function(task, definition, attachedComponent, callback){
	new TemplateResolver("TASK").resolveTemplate(task, "${Priority}", function(resolved){
	    console.log("Resolved template: " + resolved); 
	    callback.onSuccess(resolved);
	});
});
```

__Exemple :__ Définir le résumé d'une pièce jointe non-renseignée

```javascript
helper = JSAPI.get().getHelperFactory().getTaskAttachmentSynopsisHelper();
helper.register(function(task, definition, attachedComponent, callback){
	if(!attachedComponent){
		callback.onSuccess("Pièce à définir");
	}
	else{
		//Utilisation du résumé défini pas défaut
		callback.onSuccess();
	}
});
```