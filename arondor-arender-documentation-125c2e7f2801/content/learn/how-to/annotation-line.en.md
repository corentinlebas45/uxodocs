---
title: "Custom annotation"
weight: 
draft: false
icon: mdi-message-cog-outline
## search related keywords
keywords: ["tutorial", "annotation", "custom" ]
---

## Example: Line annotation

The Line annotation is a variant of the Arrow annotation, with
properties head and tail at None. We need only two files for this
cookbook concerning ARender font end web application,
_configurations/arender-custom-integration.xml_ and
_configurations/arender-custom-client.properties_.

## Modification of _arender-custom-integration.xml_

In this file, we will do two things. Create the annotation model and
made the button to call this annotation.

### Annotation's model

To do it, we can use the arrow annotation and customize it. Retrieve the
arrowCreationAction's bean from the file named
_event-configuration.xml_. Once it's done,
to have a line, we need the head and tail properties set to NONE

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


It's possible to custom furthermore the annotation to have a particular
color or a default size.

### Annotation's button

Now, we will made the annotation button. We can use the arrow button
model from_toppannel-annotations-configuration.xml_and custom it in _arender-custom-integration.xml_.



``` xml
<bean id="addLineAnnotationButton"
    class="com.arondor.viewer.client.toppanel.presenter.ButtonPresenter"
    scope="prototype">
    <property name="enabled" value="${topPanel.annotationMenu.line}" />
    <property name="imageResource">
        <bean class="com.arondor.viewer.client.defferedmodules.ExternalImageResource">
            <property name="width" value="32" /> <property name="height" value="32" />
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


In the example, the icon has been loaded from the icons folder of
ARender front end server. The value could be an external URL from a
website.

## Modification of _configurations/arender-custom-client.properties_

### Adding the button

If the value `topPanel.annotation.buttons.beanNames` doesn't exist,
add it, and add your button.

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.annotation.buttons.beanNames=addLineAnnotationButton
```


Warning, if you want all the annotations buttons, you should retrieve
_configurations/arender-custom-client.properties_'s `topPanel.annotation.buttons.beanNames` and
add your button in the list. After that, you should activate your annotation.

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.annotationMenu.line=true
```


Reload your ARender front end application server and your line
annotation will be in the annotation menu.
