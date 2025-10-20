---
title: Résultats de recherche
description: Personnaliser la présentation des résultats de recherche.
Intro: La configuration de la présentation des résultats s'effectue par formulaire de recherche au niveau du bean `ComponentSearchPresenter`.
---

# Masquer des colonnes

Dans le tableau de résultats il est possible de masquer des colonnes. Pour cela, il faut ajouter la propriété ``hiddenColumns``. 

```xml 
<property name="hiddenColumns">
	<list>
		<value>TypeCourrier</value>
	</list>
</property>
```
	


# Affichage

FlowerDocs permet d'afficher les résultats d'une recherche de trois façons différentes : 

* tabulaire : les résultats sont présentés de manière classique sous forme de tableau
* en vignette : ARender est utilisé pour générer une vignette du composant 
* agrégation : les résultats de recherches sont affichés sous forme d'arborescence  

## Tabulaire et vignettes 

L'affichage par défaut laisse à l'utilisateur la possibilité de choisir entre le mode de présentation des résultats. 
Par défaut, l'affichage tabulaire est présenté à l'utilisateur.


<br/>
Pour afficher, par défaut, les résultats de recherche sous forme de vignette, ajouter la propriété `tableByDefault` avec la valeur `false` : 

```xml
<property name="responsePresenterProvider">
	<bean class="com.flower.docs.gui.client.search.response.SwitcherSearchResponsePresenterProvider">
		<property name="tableByDefault" value="false" />
	</bean>
</property>
```

<br/>
Pour aller plus loin et configurer le contenu des miniatures, ajouter la propriété suivante sur l'objet ``SwitcherSearchResponsePresenterProvider`` : 

```xml 
<property name="cardPresenter">
	<bean class="com.flower.docs.gui.client.search.response.CardSearchResponsePresenterProvider">
		<property name="titleTemplate">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="${name}" />
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="${name}" />
				</bean>
			</list>
		</property>
		<property name="headingTemplate">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="Added ${creationDate}, by ${owner}" />
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="Ajouté le ${creationDate}, par ${owner}" />
				</bean>
			</list>
		</property>
	</bean>
</property>
```
## Tabulaire 

Dans le cas où vous souhaitez que l'utilisateur ne puisse voir/utiliser que le mode de présentations sous forme tabulaire : 

```xml
<property name="responsePresenterProvider">
	<bean class="com.flower.docs.gui.client.search.response.TableSearchResponsePresenterProvider" />
</property>	
```

## Vignettes 

Dans le cas où vous souhaitez que l'utilisateur ne puisse voir/utiliser que le mode de présentations sous forme de vignettes : 

```xml
<property name="responsePresenterProvider">
	<bean class="com.flower.docs.gui.client.search.response.CardSearchResponsePresenterProvider">
		<property name="titleTemplate">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="${name}" />
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="${name}" />
				</bean>
			</list>
		</property>
		<property name="headingTemplate">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="Added ${creationDate}, by ${owner}" />
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="Ajouté le ${creationDate}, par ${owner}" />
				</bean>
			</list>
		</property>
	</bean>
</property>	
```

# Export

Les résultats de la recherche peuvent être exportés sous forme de fichier CSV.

Pour assurer une performance optimale, l'export des résultats de recherche est limité aux 200 premiers résultats.