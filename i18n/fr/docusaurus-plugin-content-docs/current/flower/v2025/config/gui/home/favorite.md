---
title: Favoris
---

Ce type de widget permet d'afficher les favoris de l'utilisateur en fonction d'une recherche configurée.

Les utilisateurs ont la possibilité de cliquer sur les résultats affichés pour accéder au composant. 

Dans l'exemple ci-dessous, nous commençons par définir la requête qui va alimenter le widget :

```xml
<bean id="favoriteRequest" class="com.flower.docs.domain.search.SearchRequest">
	<property name="selectClause">
		<bean class="com.flower.docs.domain.search.SelectClause">
			<property name="fields">
				<list>
					<value>name</value>
				</list>
			</property>
		</bean>
	</property>
	<property name="max" value="10" />
</bean>
```
À savoir que la propriété ``id`` utilisée dans ce bean représente l'identifiant du bean pour une recherche paramétrée.

Ensuite, nous construisons le widget ``favoriteDocumentsWidget`` qui va permettre d'afficher la recherche. 
Dans cet exemple, nous définissons : 

* le type de composant recherché, la catégorie : ici ``DOCUMENT``, les catégories disponibles sont ``DOCUMENT``, ``TASK``, ``FOLDER``, ``VIRTUAL_FOLDER``. 
* les titre et description internationalisés du widget
* la requête définie précédemment ``favoriteRequest``

```xml
<bean id="favoriteDocumentsWidget" class="com.flower.docs.gui.client.preferences.favorite.HomeFavoritesPresenter">
	<property name="search">
		<bean class="com.flower.docs.domain.search.Search">
			<property name="id">
			    <bean class="com.flower.docs.domain.common.Id">
			        <property name="value" value="documentSearch" />
			    </bean>
			</property>				
			<property name="category">
				<value type="com.flower.docs.domain.component.Category">DOCUMENT</value>
			</property>
			<property name="request" ref="favoriteRequest" />
			<property name="displayNames">
				<list>
					<bean class="com.flower.docs.domain.i18n.I18NLabel">
						<property name="language" value="EN"/>
						<property name="value" value="My favorites"/>
					</bean>
					<bean class="com.flower.docs.domain.i18n.I18NLabel">
						<property name="language" value="FR"/>
						<property name="value" value="Mes favoris"/>
					</bean>
				</list>
			</property>
		</bean>
	</property>
</bean>
```

Et pour finir, nous associons le widget ``favoriteDocumentWidget`` à un catalogue nommé ``homeWidgets``

```xml
<bean id="homeWidgets" class="com.flower.docs.gui.client.util.SimpleWidgetCatalog">
	<property name="widgets">
		<list>
			<ref bean="favoriteDocumentsWidget" />
		</list>
	</property>
</bean>

```
Le titre du widget est cliquable, permettant aux utilisateurs d'accéder directement aux résultats de la recherche associée en appuyant sur ce dernier.