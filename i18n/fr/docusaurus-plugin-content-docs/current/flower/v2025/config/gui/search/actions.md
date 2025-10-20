---
title: Actions
description: Ajouter des actions sur formulaires de recherche.
---

Pour chaque formulaire de recherche, il est possible de définir une liste d'action qu'un utilisateur peut exécuter.

Ces actions doivent être définies à travers la propriété  ``actions`` sur l'objet `ComponentSearchPresenter`. 

```xml
<bean id="EnvelopeSearch" class="com.flower.docs.gui.client.search.ComponentSearchPresenter" scope="prototype">
	<property name="actions">
		<list>
			<ref bean="myAction1" />
			<ref bean="myAction2" />
		</list>
	</property>
</bean>
```


Par défaut ces actions ne sont visibles qu'à partir du moment où la recherche a été exécutée. Pour changer ce comportement, il est possible d'ajouter la propriété :   

```xml
<property name="enableActionsIfDirty" value="false" />
```

# Types d'action		

## Création de composant

Il est possible d'ajouter une action permettant aux utilisateurs de créer un composant à partir d'un formulaire de recherche. 
Ce type d'action permet ainsi de pré-indexer le composant à créer à partir des critères de la recherche effectuée. 

Par exemple, si un utilisateur recherche un document de classe ``Facture`` avec un tag ``statut`` dont la valeur est ``réglé`` alors l'action permettra de créer un document avec ces mêmes informations. 


```xml
<bean id="EnvelopeSearch" class="com.flower.docs.gui.client.search.ComponentSearchPresenter" scope="prototype">
	<property name="actions">
		<list>
			<ref bean="createComponentFromSearchAction" />
		</list>
	</property>
</bean>

<bean id="createComponentFromSearchAction" class="com.flower.docs.gui.client.search.action.ComponentCreationActionPresenter">
	<property name="componentRef">
		<bean class="com.flower.docs.domain.component.ComponentReference">
			<property name="category">
				<value type="com.flower.docs.domain.component.Category">FOLDER</value>
			</property>
			<property name="id">
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="Agency" />
				</bean>
			</property>
		</bean>
	</property>
</bean>
```

		
##  Changement d'écran 

Les actions de type ``GoToPlaceActionPresenter`` permettent de changer d'écran.


```xml
<bean class="com.flower.docs.gui.client.search.action.GoToPlaceActionPresenter">
	<constructor-arg type="java.util.List">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Create envelope"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Créer une enveloppe"/>
			</bean>
		</list>
	</constructor-arg>
	<property name="place">
		<bean class="com.flower.docs.gui.client.search.CreateWithVerificationPlace">
			<property name="id">
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="EEnvelopeSearch" />
				</bean>
			</property>
			<property name="category">
				<value type="com.flower.docs.domain.component.Category">TASK</value>
			</property>
		</bean>
	</property>
</bean>
```


# Activation

Comme toutes les actions, il est possible de définir quelle est la stratégie d'activation grâce à la propriété ``enablingStrategy``. 

Plusieurs stratégies sont fournies nativement : 

* Quelque soit les résultats de la recherche (par défaut) : ``AnyResultEnablingStrategy``

```xml 
<bean class="com.flower.docs.gui.client.search.action.AnyResultEnablingStrategy" />
```

* Seulement si la recherche ne remonte aucun résultat : ``NoResultEnablingStrategy``

```xml 
<bean class="com.flower.docs.gui.client.search.action.NoResultEnablingStrategy" />
```

	
* Si l'utilisateur a sélectionné, en fonction d'un opérateur, un certain nombre de composants : ``MultipleComponentsEnablingStrategy``
Cette stratégie d'activation à deux propriétés : 
 
	* ``operator`` : L'opérateur avec lequel évaluer le nombre de composants sélectionnés. Les opérateurs disponibles sont ``EQUALS_TO``, ``GREATER_THAN``, ``LESS_THAN`` et ``DIFFERENT``.
	* ``componentsCount`` : Le nombre de composants 

	__Exemple :__ Activation de l'action, si le nombre de composants sélectionnés est supérieur ou égal à 2   
	
	```xml 
	<bean class="com.flower.docs.gui.client.search.action.MultipleComponentsEnablingStrategy">
		<property name="componentsCount" value="2"/>
		<property name="operator">
			<value type="com.flower.docs.domain.search.Operators">GREATER_THAN</value>
		</property>
	</bean>
	```