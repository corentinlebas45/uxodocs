+++
date = "2018-03-28T13:20:01+02:00"
title = "Notifications"
+++

To send notifications, the Notification API can be accessed using the ``JSAPI.get().getNotificationAPI()`` function. 
It features the following functions: 


* ``sendInformation(String message)``
* ``sendWarning(String message)``
* ``sendError(String message)``

These three functions open modal windows.

To send a notification to FlowerDocs, you can use the ``sendNotification(String message)`` function.
  

__Example:__ 

```javascript
JSAPI.get().getNotificationAPI().sendError("An error has occurred");
```