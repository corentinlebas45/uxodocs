---
title: "Create custom localized labels"
weight:
draft: false
icon: mdi-web
# search related keywords
keywords: ["label", "locale", "internationalization"]
---

This guide will help you create custom localized labels.

## Default custom localized resources path

ARender internationalization approach uses **.properties** files where localizable information are stored in.

ARender allows you to customize localized labels from external custom resource files.

By default, ARender uses the following order to fetch custom localized resource files: 
- Configuration properties
- <HOME_DIR>/ARenderCustomLabels/


## To go further

### Define the folder path containing the custom labels

To define the folder path where the custom labels are stored, you must edit the following property :

{{< tag type="code" title="configurations/arender-custom-server.properties">}}

```cfg
# ARender label configuration
# Define the folder path where the custom labels are stored
# Otherwise leave empty so that ARender can look in the <HOME_DIR>/ARenderCustomLabels/ or in the labels/ folder
# NB: Make sure the path ends with a file separator, the slash /
arender.server.external.custom.labels.path=
```

### Create your own custom localized labels

Typical resource files are named as **CustomLabels\_{lang}.properties**, which *lang* corresponds to locale code :
- ar (Arabic)
- de (German)
- en (English)
- es (Spanish)
- fr (French)
- he (Hebrew)
- it (Italian)
- ja (Japanese)
- pl (Polish)
- pt (Portuguese)
- pt-BR (Brazilian Portuguese)
- ru (Russian)
- zh-CN (Simplified Chinese)
- zh-TW (Traditional Chinese)

For each language or the one needed, store localizable information in the form of case-sensitive key-value pairs.

To provide a concrete example, suppose you need a custom label for a custom button in 3 different languages: english, spanish and french :


{{< tag type="code" title="CustomLabels_en.properties">}}

```cfg
hello=Hello World
```

{{< tag type="code" title="CustomLabels_es.properties">}}

```cfg
hello=Hola Mundo
```

{{< tag type="code" title="CustomLabels_fr.properties">}}

```cfg
hello=Bonjour le monde
```

To use this custom label, you will need to reference it with the tag **customLabels#{label-key}**.

Since version 2023.0.0: 

{{< tag type="code" title="configurations/arender-custom-server-integration.xml ">}}

```xml
<!-- Sample implementation of a Custom button -->
<bean id="customButton"
		class="com.arondor.viewer.client.toppanel.presenter.ButtonPresenter">
		<constructor-arg value="customButton"/>
		<property name="enabled" value="true" />
		<property name="className" value="standardButton icon-arender" />
		<property name="buttonTitle">
			<value>Custom Button</value>
		</property>
		<property name="buttonHandler">
			<bean class="com.arondor.viewer.client.jsapi.toppanel.JSCallButtonHandler">
				<property name="jsCode">
					<value>
						try
						{
						alert('Hello world !');
						$wnd.getARenderJS().getGenericNotificationJSAPI().askNotification("hello");
						alert("Finished !");
						}
						catch(e)
						{
						alert("error !" + e);
						}
					</value>
				</property>
			</bean>
		</property>
	</bean>
```
