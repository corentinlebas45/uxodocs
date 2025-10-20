---
title: Configuration
description: Configurer la visionneuse ARender.
---

# Surcharge de profil 

## Global 

Il est possible de surcharger le profil ARender (et ses paramètres) en définissant la propriété : ``gui.client.arender.profile`` dans le fichier ``gui.properties``. La valeur de cette propriété sera rajoutée à l'URL d'appel à ARender.


## Par scope 

Dans le cadre d'une plateforme FlowerDocs mutualisée, il est possible d'avoir des besoins de paramétrages différents par scope. Afin de surcharger le profil ARender par scope, un document `GUIConfiguration` doit être créé contenant le bean `arenderConfig` suivant : 

```xml 
<bean id="arenderConfig" class="com.flower.docs.gui.client.files.viewer.ARenderConfiguration" scope="singleton">
		<property name="profil" value="arender&amp;annotation.stickyNote.default.color=%23000000" />
</bean>
```

Cet exemple permet de changer la couleur par défaut des notes textuelles. 

:::warning
Il n'est pas préconisé de modifier des propriétés d'Arender via du paramétrage dans les fichiers properties. Les propriétés non définies dans la documentation ne sont pas qualifiées par FlowerDocs : le bon fonctionnement de l'application n'est donc pas garanti avec ces modifications.
:::