---
title: "Création d'annotation par règle"
weight: 
draft: false
icon: mdi-pencil-ruler-outline
## search related keywords
keywords: ["tutorial", "rules" ]
---

## Concept général

Le principe de création des annotations par des règles repose sur la recherche d'un texte ou d'une expression régulière sur laquelle on va venir appliquer une annotation qui aura été définie.

Par exemple, il est possible d'automatiser la biffure d'information sensible ayant un pattern spécifique.

## Structure des règles de création d'annotation

Les règles seront définies via des *bean* dans les fichiers de configurations d'ARender. Une règle est composée de trois grandes parties : 
- Détails de la règle
- Détails de la recherche
- Détails de l'annotation

### Détails de la règle

Une règle a besoin d'un identifiant et d'un nom.

{{< tag type="code" title="">}}

```xml
<property name="ruleId" value="annotationCreationRuleExample" />
<property name="ruleName" value="Example of annotation creation rule" />
```


### Détails de la recherche

Les détails de la recherche vont permettre de choisir un terme à rechercher ou bien une expression régulière. La recherche peut être affinée en choisissant la prise en compte des accents ou de la casse.

Différents types de recherches sont configurables afin de l'appliquer sur différentes zones du document. L'application peut se faire soit sur la page courante, soit sur toutes les pages ou bien une sélection de page : 
- CURRENT_PAGE
- ALL_PAGES
- SELECTED_PAGES


{{< tag type="code" title="">}}

```xml
<property name="searchOptions">
	<bean
		class="com.arondor.viewer.client.api.search.SearchOptions">
		<property name="searchText" value="your_text_to_be_search" />
		<property name="accentSensitive" value="false" />
		<property name="caseSensitive" value="false" />
		<property name="regex" value="true" />
		<property name="searchAction">
			<value
				type="com.arondor.viewer.client.api.search.SearchAction">CURRENT_PAGE</value>
		</property>
	</bean>
</property>
```


Lorsque l'option *SELECTED_PAGES* est utilisée, il faut ajouter au *bean* de la règle la propriété *pageSelection* qui permet de faire la liste des pages ciblées.


{{< tag type="code" title="">}}

```xml
<!--ONLY FOR THE SEARCH ACTION *SELECTED_PAGES* -->
<property name ="pageSelection">
	<list>
		<value>your_page_number_here</value>
		<value>another page number..</value>
	</list>
</property>
```



### Détails de l'annotation

Les annotations étant compatibles avec cette fonctionnalité sont les annotations de type Barré, Souligné, Surligné, Biffure et Biffure de texte. Les valeurs associées pour chaque type d'annotations sont : 
- Strikeout
- Underline
- Highlight
- Redact
- RedactText

Une annotation aura besoin d'avoir l'opacité et la couleur du fond de définis afin de pouvoir être construite. La couleur de fond ne prend en valeur que de l'hexadécimal.

{{< tag type="code" title="">}}

```xml
<property name="annotationTemplate">
	<bean
		class="com.arondor.viewer.client.api.annotation.templates.AnnotationTemplate">
		<property name="name" value="" />
		<property name="annotationType">
			<value
				type="com.arondor.viewer.annotation.common.AnnotationType">Underline</value>
		</property>
		<property name="annotationStyle">
			<bean class="com.arondor.viewer.client.api.annotation.AnnotationStyle">
				<property name="backgroundColor" value="#ff0000" />
				<property name="opacity" value="0.8f" />
			</bean>
		</property>
	</bean>
</property>
```


### Règle complète

Voici une exemple de *bean* d'une règle complète réunissant les trois grandes parties. L'exemple permet de souligner en rouge chaque lettre 'e' de la page courante.

{{< tag type="code" title="configurations/arender-custom-server-integration.xml ">}}

```xml
<bean id="annotationCreationRuleExample"
	class="com.arondor.viewer.client.api.annotation.AnnotationCreationRule">
	<!-- Détails de la règle -->
	<property name="ruleId" value="annotationCreationRuleExample" />
	<property name="ruleName" value="Example of annotation creation rule" />
	<!-- Détails de la recherche -->
	<property name="searchOptions">
		<bean
			class="com.arondor.viewer.client.api.search.SearchOptions">
			<property name="searchText" value="e" />
			<property name="accentSensitive" value="false" />
			<property name="caseSensitive" value="false" />
			<property name="regex" value="true" />
			<property name="searchAction">
				<value
					type="com.arondor.viewer.client.api.search.SearchAction">CURRENT_PAGE</value>
			</property>
		</bean>
	</property>
	<!-- Détails de l'annotation -->
	<property name="annotationTemplate">
		<bean
			class="com.arondor.viewer.client.api.annotation.templates.AnnotationTemplate">
			<property name="name" value="" />
			<property name="annotationType">
				<value
					type="com.arondor.viewer.annotation.common.AnnotationType">Underline</value>
			</property>
			<property name="annotationStyle">
				<bean class="com.arondor.viewer.client.api.annotation.AnnotationStyle">
					<property name="backgroundColor" value="#ff0000" />
					<property name="opacity" value="0.8f" />
				</bean>
			</property>
		</bean>
	</property>		
</bean>
```


### Ajout d'une règle au catalogue de règles

Les règles personnalisées ne sont connues d'ARender uniquement à partir du catalogue de règle qui liste les différents identifiants des règles.

{{< tag type="code" title="configurations/arender-custom-server-integration.xml ">}}

```xml
<bean id="annotationCreationRuleCatalog"
	class="com.arondor.viewer.client.api.annotation.AnnotationCreationRuleCatalog">
	<property name="annotationCreationRules">
		<list>
			<ref bean="annotationCreationRuleExample" />
		</list>
	</property>
</bean>
```



## Utilisation des règles par Javascript

Il est possible avec du javascript de déclencher l'application de toutes les règles du catalogue.


```js
$wnd.getARenderJS().createAnnotationByRuleWithCatalog();
```


Il est également possible de faire une liste des identifiants des règles présentes dans le catalogue qui doivent être déclenchées : 


```js
$wnd.getARenderJS().createAnnotationByRulesWithRuleId(["annotationCreationRuleExample"]);
```



## Exemple d'utilisation

L'exemple qui suit va permettre de définir une règle permettant de biffer les mots *view* sur la page courante.

### Création d'une règle personnalisée

{{< tag type="code" title="configurations/arender-custom-server-integration.xml ">}}

```xml
<bean id="redactRuleExample"
	class="com.arondor.viewer.client.api.annotation.AnnotationCreationRule">
	<!-- Détails de la règle -->
	<property name="ruleId" value="redactRuleExample" />
	<property name="ruleName" value="Example of annotation creation rule for redact" />
	<!-- Détails de la recherche -->
	<property name="searchOptions">
		<bean
			class="com.arondor.viewer.client.api.search.SearchOptions">
			<property name="searchText" value="view" />
			<property name="accentSensitive" value="false" />
			<property name="caseSensitive" value="false" />
			<property name="regex" value="true" />
			<property name="searchAction">
				<value
					type="com.arondor.viewer.client.api.search.SearchAction">CURRENT_PAGE</value>
			</property>
		</bean>
	</property>
	<!-- Détails de l'annotation -->
	<property name="annotationTemplate">
		<bean
			class="com.arondor.viewer.client.api.annotation.templates.AnnotationTemplate">
			<property name="name" value="" />
			<property name="annotationType">
				<value
					type="com.arondor.viewer.annotation.common.AnnotationType">RedactText</value>
			</property>
			<property name="annotationStyle">
				<bean class="com.arondor.viewer.client.api.annotation.AnnotationStyle">
					<property name="backgroundColor" value="#000000" />
					<property name="opacity" value="1.0f" />
				</bean>
			</property>
		</bean>
	</property>		
</bean>
```


### Configuration du catalogue des règles d'annotations

{{< tag type="code" title="configurations/arender-custom-server-integration.xml ">}}

```xml
<bean id="annotationCreationRuleCatalog"
	class="com.arondor.viewer.client.api.annotation.AnnotationCreationRuleCatalog">
	<property name="annotationCreationRules">
		<list>
			<ref bean="annotationCreationRuleExample" />
			<ref bean="redactRuleExample" />
		</list>
	</property>
</bean>
```


### Utilisation dans un bouton personnalisé

Premièrement, on définit un bouton personnalisé :

{{< tag type="code" title="arender-custom-integration.xml">}}

```xml
<bean id="customButtonToRedactSomething"
	class="com.arondor.viewer.client.toppanel.presenter.ButtonPresenter">
	<constructor-arg value="customButton"/>
	<constructor-arg value="Custom Button" />
	<constructor-arg value="standardButton"/>
	<property name="enabled" value="true" />
	<property name="buttonHandler">
		<bean class="com.arondor.viewer.client.jsapi.toppanel.JSCallButtonHandler">
			<property name="jsCode">
				<value>
					$wnd.getARenderJS().createAnnotationByRulesWithRuleId(["redactRuleExample"]);
				</value>
			</property>
		</bean>
	</property>
</bean>
```



Ensuite, nous devons ajouter l'identifiant du bean customButtonToRedactSomething à la liste des boutons d'annotation comme ci-dessous : 

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.annotation.buttons.beanNames=addStickyNoteAnnotationButton,addFreeTextAnnotationButton,customButtonToRedactSomething
```


Cet exemple de configuration ajoute 3 boutons à la section annotation du panneau supérieur.