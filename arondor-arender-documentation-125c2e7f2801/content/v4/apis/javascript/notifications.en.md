---
title: "Notifications"
draft: false
weight: 4
icon: mdi-bell-ring
keywords: ["configuration", "js", "javascript", "api"]
---

## Change notifications

- Objet: getARenderJS()

    | function                     | Description                                              | Arguments                           |
    | ---------------------------- | -------------------------------------------------------- | ----------------------------------- |
    | registerNotifyLogEvent(hook) | Trigger a hook function when a notification is displayed | **hook:** The hook function to call |

The following functions allow to alterate the received notification event caught by the hook function.

- Object: getARenderJS()

    | Function                           | Description                                  | Argument                                                                                                                                                                                  |
    | ---------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


``` javascript
getARenderJS().registerNotifyLogEvent(function(event, level, message){
  getARenderJS().setLogEventMessage(event, "Error: " + message);
  getARenderJS().setLogEventLevel(event, "SEVERE");
  getARenderJS().setLogEventDisplay(event, true);
});
```

