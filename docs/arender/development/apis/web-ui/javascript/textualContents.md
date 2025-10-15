---
title: "Contenu textuel"
draft: false
weight: 10
icon: mdi-text
keywords: ["configuration", "js", "javascript"]
---

## Utiliser la fonctionnalité lasso

- Objet : getARenderJS()


La fonctionnalité de lasso est disponible depuis la version 4.5. Le principe est d'enregistrer l'écoute d'un évènement puis d'activer le mode lasso qui va permettre à l'utilisateur de sélectionner un texte du document qui sera récupéré via l'évènement écouté. Ce texte pourra être utilisé par la suite pour remplir un champs texte automatiquement par exemple.

| Fonction                                           | Description                                                                             | Arguments                                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| registerNotifyLassoSelectedTextEvent(callback)     | Enregistre une fonction callback à appeler en cas de récupération de texte via le lasso | **callback :** la fonction callback à appeler en cas de récupération de texte via le lasso                              |
| askActivateLassoMode(lassoID)                      | Active le mode lasso avec un id qui sera renvoyé en même temps que le texte sélectionné | **lassoID :** ID permettant d'identifier d'où provient l'activation du mode lasso pour l'utilisation du texte récupéré  |
| askDeactivateLassoMode()                           | Désactive le mode lasso                                                                 |                                                                                                                         |

[shortcode]

```js
var arenderjs;

function arenderjs_init(arenderjs_)
{
  arenderjs = arenderjs_
  arenderjs.registerNotifyLassoSelectedTextEvent(function(text, lassoID){
    armt_onSubmitNotifyLassoSelectedTextEvent(text,lassoID);
  });
}

function armt_onSubmitNotifyLassoSelectedTextEvent(text,lassoID)
{
  var elem = document.getElementById(lassoID);
  elem.innerHTML = text;
}

function armt_activatingLasso(lassoID)
{
  arenderjs.askActivateLassoMode(lassoID); 
}

function armt_deactivatingLasso()
{
  arenderjs.askDeactivateLassoMode();
}
```

[shortcode]