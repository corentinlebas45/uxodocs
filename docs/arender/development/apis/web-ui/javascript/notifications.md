---
title: "Notifications"
draft: false
weight: 4
icon: mdi-bell-ring
keywords: ["configuration", "js", "javascript"]
---

## Modifier les notifications

- Objet : getARenderJS()

    | Fonction                     | Description                                                                     | Arguments                                                                   |
    | ---------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
    | registerNotifyLogEvent(hook) | Enregistre une fonction hook qui altère les notifications avant de les afficher | **callback :** la fonction à appeler en cas d'affichage d'une notification  |

Les fonctions suivantes permettent d'altérer les notifications reçues
via la fonction hook.

- Objet : getARenderJS()

    | Fonction                               | Description                             | Argument                                                                                                                                                                                           |
    | -------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | setLogEvenlMessage(event, message)     | Change le message envoyé par "message"  | [shortcode][shortcode]                                                                                   |
    | setLogEventDisplay(event, boolean)</p> | Autorise l'affichage de la notification | [shortcode][shortcode]                                                 |
    | setLogEvenlLevel(event, level)         | Modifie le niveau de la notification    | [shortcode][shortcode] |

[shortcode]

```js
getARenderJS().registerNotifyLogEvent(function(event, level, message){
    getARenderJS().setLogEventMessage(event, "Error : " + message);
    getARenderJS().setLogEventLevel(event, "SEVERE");
    getARenderJS().setLogEventDisplay(event, true);
});
```

[shortcode]