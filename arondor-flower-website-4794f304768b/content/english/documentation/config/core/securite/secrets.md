+++
date = "2019-06-03T13:20:01+02:00"
title = "Secrets"
description = "To keep secrets secret"
+++

It is not advisable to store passwords in clear text in configuration files. To avoid storing secrets in clear text in the `core.properties` and `gui.properties` files, FlowerDocs provides a secret encryption mechanism. 

<br/>

To indicate to FlowerDocs that a property value is encrypted, it must be defined as `ENC(<encrypted value>)`. An encrypted property is decrypted at application startup using its main secret (`secret`). In this way, a different cipher can be defined for each application.

*The application cannot be started if a property, indicated as encrypted, cannot be decrypted.*

<br/>

Property encryption can be achieved in several ways, starting with a master secret: 

<clm> string encrypt --secret=<secret> --password=<property to encrypt>
{{< /tab >>}}
curl -X POST \
  <core>/rest/encrypt \
  -H 'token: <token>' \
  -d {{toEncrypt}}

:::info
With this method, we recommend setting the properties `token.key` and `system.admin.password` as a minimum.

This recommendation also applies to components developed around the FlowerDocs ecosystem: GUI plugins and operation handlers.
:::

The secret for each application can be defined in different ways: 

* as an environment variable: the name is `secret` and the value is `,<secret>`, the machine must be rebooted to take effect    
* as a property of the JVM by adding: `--secret=<secret>` when running the application
* in the `core.properties` and `gui.properties` files (*not recommended*) 



:::warning
The secret declared in system variables takes precedence over the one defined in the properties file.
:::