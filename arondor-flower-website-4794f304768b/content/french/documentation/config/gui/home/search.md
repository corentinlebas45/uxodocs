+++
date = "2000-04-01T13:20:01+02:00"
title = "Recherche"
+++


Ce type de widget permet d'afficher la concaténation des champs présents dans la `selectClause` de la recherche pour chaque composant remonté par la recherche configurée.

Les utilisateurs ont la possibilité de cliquer sur un des résultats affichés afin d'accéder au composant. 

Dans l'exemple ci-dessous, nous commençons par définir la requête qui va alimenter le widget :

```xml
<bean id="tenLastBillRequest" class="com.flower.docs.domain.search.SearchRequest">
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
	<property name="filterClauses">
		<list>
			<bean class="com.flower.docs.domain.search.AndClause">
				<property name="criteria">
					<list>
						<bean class="com.flower.docs.domain.search.Criterion">
							<property name="name" value="classid" />
							<property name="type">
								<value type="com.flower.docs.domain.search.Types">STRING</value>
							</property>
							<property name="operator">
								<value type="com.flower.docs.domain.search.Operators">EQUALS_TO</value>
							</property>
							<property name="values">
								<list>
									<value>ProviderBill</value>
								</list>
							</property>
						</bean>
					</list>
				</property>
			</bean>
		</list>
	</property>
	<property name="orderClauses">
		<list>
			<bean class="com.flower.docs.domain.search.OrderClause">
				<property name="name" value="creationDate" />
				<property name="ascending" value="false" />
			</bean>
		</list>
	</property>
</bean>
```

Ensuite, nous construisons le widget ``tenLastBillWidget`` qui va permettre d'afficher la recherche. 
Dans cet exemple, nous définissons : 

* le type de composant recherché, la catégorie: ici ``DOCUMENT``, les catégories disponibles sont ``DOCUMENT``, ``TASK``, ``FOLDER``, ``VIRTUAL_FOLDER``. 
* les titre et description internationalisés du widget
* la requête définie précédemment ``tenLastBillRequest``

```xml
<bean id="tenLastBillWidget" class="com.flower.docs.gui.client.home.HomeSearchPresenter">
	<property name="description" >
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="My first search" />
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="Ma première recherche configurée" />
			</bean>
		</list>
	</property>
	<property name="search">
		<bean class="com.flower.docs.domain.search.Search">
			<property name="category">
				<value type="com.flower.docs.domain.component.Category">DOCUMENT</value>
			</property>
			<property name="request" ref="tenLastBillRequest" />
			<property name="displayNames">
				<list>
					<bean class="com.flower.docs.domain.i18n.I18NLabel">
						<property name="language" value="EN" />
						<property name="value" value="My last bills" />
					</bean>
					<bean class="com.flower.docs.domain.i18n.I18NLabel">
						<property name="language" value="FR" />
						<property name="value" value="Mes 10 dernières factures" />
					</bean>
				</list>
			</property>
		</bean>
	</property>
</bean>
```

Et pour finir, nous associons le widget ``tenLastBillWidget`` à un catalogue nommé ``homeWidgets``

```xml
<bean id="homeWidgets" class="com.flower.docs.gui.client.util.SimpleWidgetCatalog">
	<property name="widgets">
		<list>
			<ref bean="tenLastBillWidget" />
		</list>
	</property>
</bean>
```
