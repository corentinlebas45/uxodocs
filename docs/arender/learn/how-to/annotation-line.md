---
title: "Annotation personalisé"
weight: 
draft: false
icon: mdi-message-cog-outline
## search related keywords
keywords: ["tutorial", "annotation", "custom" ]
---

## Exemple : L'annotation Line

L'annotation Line est tirée de l'annotation Arrow avec les éléments de
la tête (head) et de la queue (tail) à None. C'est donc une
personnalisation de cette annotation. Nous avons besoin que de deux
fichiers, _configurations/arender-custom-integration.xml_
et _configurations/arender-custom-client.properties_.

## Modification de _arender-custom-integration.xml_

A l'intérieur de ce fichier nous allons faire deux choses. Créer le
modèle de l'annotation et faire le bouton qui appelera cette
annotation.

### Modèle de l'annotation

Pour le faire, on peut partir de la base de l'annotation arrow et la
personnaliser. On peut récupérer le bean de arrowCreationAction qui se
trouve dans _event-configuration.xml_. Une
fois fait, pour avoir une ligne il faut que la propriété head et la
propriété tail soient à `NONE`.

{{< tag type="code" title="configurations/arender-custom-integration.xml">}}

``` xml
<bean id="lineCreationAction" class="com.arondor.viewer.client.toppanel.behavior.annotation.CreateAnnotationButtonHandler">
  <constructor-arg>
    <bean class="com.arondor.viewer.client.annotation.events.PrepareAnnotationCreationEvent">
      <constructor-arg>
        <value type="com.arondor.viewer.annotation.common.AnnotationType">Line</value>
      </constructor-arg>
      <property name="model">
        <!-- Annotation class -->
        <bean class="com.arondor.viewer.annotation.api.LineElemType">
          <!-- annotation properties -->
          <property name="head">
            <value type="com.arondor.viewer.annotation.api.LineEndType">NONE</value>
          </property>
          <property name="tail">
            <value type="com.arondor.viewer.annotation.api.LineEndType">NONE</value>
          </property>
        </bean>
      </property>
    </bean>
  </constructor-arg>
</bean>
```

[shortcode]

Il est possible de personnaliser ensuite l'annotation pour avoir une
couleur ou une taille par défaut.

### Bouton de l'annotation

On peut maintenant faire le bouton de l'annotation. On peut partir du
modèle de base de la flèche qui se trouve dans _toppannel-annotations-configuration.xml_
et le personnalisé dans _arender-custom-integration.xml_.

[shortcode]
[shortcode]

``` xml
<bean id="addLineAnnotationButton"
    class="com.arondor.viewer.client.toppanel.presenter.ButtonPresenter"
    scope="prototype">
    <property name="enabled" value="${topPanel.annotationMenu.line}" />
    <property name="imageResource">
        <bean class="com.arondor.viewer.client.defferedmodules.ExternalImageResource">
            <property name="width" value="32" /><property name="height" value="32" />
            <property name="url" value="icons/line.png" />
        </bean>
    </property>
    <property name="buttonTitle">
        <value>Line</value>
    </property>
    <property name="buttonHandler">
        <ref bean="lineCreationAction" />
    </property>
</bean>
```

[shortcode]

[shortcode]

``` xml
<bean id="addArrowAnnotationButton"
		class="com.arondor.viewer.client.toppanel.presenter.ActivableButtonPresenter">
		<constructor-arg value="addArrowAnnotationButton" />
		<property name="name" value="Line" />
		<property name="supportDoubleClick" value="${topPanel.annotationMenu.arrow.repeat}" />
		<property name="enabled" value="${topPanel.annotationMenu.arrow}" />
		<property name="className" value="standardButton icon-add-arrow toppanelButton" />
		<property name="buttonGroup" value="topPanel" />
	  <property name="buttonTitle">
			<ref bean="labels#addArrowAnnotation" />
		</property>
		<property name="visibilityForTopPanel">
			<ref bean="topPanelVisibilityMode" />
		</property>
		<property name="doubleClickButtonHandler">
			<ref bean="arrowCreationRepeatableAction" />
		</property>
		<property name="inactiveButtonHandler">
			<ref bean="quitAnnotationCreationAction" />
		</property>
		<property name="buttonHandler">
			<ref bean="arrowCreationAction" />
		</property>
		<property name="supportShortCut" value="true"/>
		<property name="shortcut">
			<bean
				class="com.arondor.viewer.client.documentcontent.shortcuts.KeyboardShortCut"
				scope="prototype">
				<property name="ctrl" value="true" />
				<property name="key" value="${shortcut.annotation.arrow.key}" />
				<property name="enabled" value="${shortcut.annotation.arrow.enabled}" />
			</bean>
		</property>
	</bean>
```

[shortcode]

[shortcode]

``` xml
<bean id="addArrowAnnotationButton"
		class="com.arondor.viewer.client.toppanel.presenter.ActivableButtonPresenter">
		<constructor-arg value="addArrowAnnotationButton" />
		<property name="supportDoubleClick" value="${topPanel.annotationMenu.arrow.repeat}" />
		<property name="enabled" value="${topPanel.annotationMenu.arrow}" />
		<property name="className" value="standardButton icon-add-arrow toppanelButton" />
		<property name="buttonGroup" value="topPanel" />
	  <property name="buttonTitle">
			<ref bean="labels#addArrowAnnotation" />
		</property>
		<property name="visibilityForTopPanel">
			<ref bean="topPanelVisibilityMode" />
		</property>
		<property name="doubleClickButtonHandler">
			<ref bean="arrowCreationRepeatableAction" />
		</property>
		<property name="inactiveButtonHandler">
			<ref bean="quitAnnotationCreationAction" />
		</property>
		<property name="buttonHandler">
			<ref bean="arrowCreationAction" />
		</property>
		<property name="supportShortCut" value="true"/>
		<property name="shortcut">
			<bean
				class="com.arondor.viewer.client.documentcontent.shortcuts.KeyboardShortCut"
				scope="prototype">
				<property name="ctrl" value="true" />
				<property name="key" value="${shortcut.annotation.arrow.key}" />
				<property name="enabled" value="${shortcut.annotation.arrow.enabled}" />
			</bean>
		</property>
	</bean>
```

[shortcode]
[shortcode]

Dans l'exemple l'image est chargé à partir du dossier icons de la Web-UI. La
value peut aussi être une URL externe provenant d'un site.

## Modification de _configurations/arender-custom-client.properties_

### Ajout du bouton

Si la valeur `topPanel.annotation.buttons.beanNames` n'existe pas
rajouter là, et rajouter votre bouton.

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.annotation.buttons.beanNames=addLineAnnotationButton
```

[shortcode]

Attention, si vous voulez avoir tout les boutons d'annotations, il faut
récupérer le `topPanel.annotation.buttons.beanNames` de _configurations/arender-custom-client.properties_
et rajouter votre bouton. Ensuite, il suffit d'activer votre annotation.

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.annotationMenu.line=true
```

[shortcode]

Relancer votre Web-UI et votre annotation line apparaitra.
