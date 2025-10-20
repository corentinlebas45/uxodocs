+++
date = "2002-04-28T13:20:01+02:00"
title = "Suivi d'un composant"
description = ""
+++

Le suivi d’un composant permet de visualiser les différentes tâches liées à un composant. Ce `suivi des tâches` peut être configuré grâce au fragment XML suivant, en définissant la catégorie voulue via la propriété ``category`` d'un bean ``taskTrackingConfiguration``.

<br/>
__Exemple :__ Effectuer le suivi des documents liés

```xml
<bean id="taskTrackingConfiguration" 
class="com.flower.docs.gui.client.task.tracking.TaskTrackingConfiguration">
	<property name="category">
		<value type="com.flower.docs.domain.component.Category">DOCUMENT</value>
	</property>
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR" />
				<property name="value" value="Suivi des copies" />
			</bean>
		</list>
	</property>
</bean>
```

__Note :__ *Cette configuration est globale pour un scope donné.*