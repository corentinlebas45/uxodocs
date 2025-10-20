---
title: "Créer des libellés localisés personnalisés"
weight:
draft: false
icon: mdi-web
# search related keywords
keywords: ["label", "locale", "internationalization", "étiquette", "etiquette", "libellé", "langue"]
---

Ce guide vous aidera à créer des libellés localisés personnalisés.

## Chemin par défaut des ressources localisées personnalisées

L'approche d'internationalisation d'ARender utilise les fichiers **.properties** dans lesquels les informations localisables sont stockées.

ARender vous permet de personnaliser des libellés localisés à partir de fichiers de ressources personnalisés externes.

Par défaut, ARender utilise l'ordre suivant pour récupérer les fichiers de ressources personnalisés externes :
- Propriété de configuration
- <HOME_DIR>/ARenderCustomLabels/


## Pour aller plus loin

### Définir le chemin de dossier contenant les libellés personnalisés

Pour définir le chemin de dossier où se situent les libellés personnalisés, vous devez modifier la propriété suivante :

{{< tag type="code" title="configurations/arender-custom-server.properties">}}

```cfg
# Configuration des libellés ARender
# Définir le chemin où les libellés personnalisés sont stockés
# Sinon laisser vide pour qu'ARender aille chercher dans le <HOME_DIR>/ARenderCustomLabels/ ou dans le dossier labels/
# NB: Assurer que le chemin finisse par un séparateur de fichier, le slash /
arender.server.external.custom.labels.path=
```

### Créez vos propres libellés localisés personnalisés

Les fichiers ressources sont nommés **CustomLabels\_{lang}.properties**, dont *lang* correspond au code de paramètres régionaux :
- ar (Arabe)
- de (Allemand)
- en (Anglais)
- es (Espagnol)
- fr (Français)
- he (Hébreu)
- it (Italien)
- ja (Japonais)
- pl (Polonais)
- pt (Portuguais)
- pt-BR (Portugais Bresilien)
- ru (Russe)
- zh-CN (Chinois Simplifié)
- zh-TW (Chinois Traditionnel)

Pour chaque langue ou celle nécessaire, stockez les informations localisables sous la forme de paires clé-valeur sensible à la casse.

Pour donner un exemple concret, supposons que vous ayez besoin d'un libellé pour un bouton personnalisé dans 3 langues différentes : anglais, espagnol et français.


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

Pour utiliser ce libellé personnalisé, vous devrez le référencer avec le tag **customLabels#{label-key}**.

Depuis la version 2023.0.0 : 

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
