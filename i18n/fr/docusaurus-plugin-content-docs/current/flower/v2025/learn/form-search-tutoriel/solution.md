+++
date = "2020-07-07T12:20:01+02:00"
title = "Exemple complet"
+++

Rappel :  Accédez à l'éditeur via le menu **Administration > Configuration > XML** : 

* Cliquez sur le **+** pour créer un nouveau fichier XML,
* Dans le premier champ, saisissez **Recherche de dossiers clients** pour nommer le fichier XML
* Copiez le code XML ci-dessous,
* Collez le code dans l'éditeur,
* Cliquez sur le bouton **Sauvegarder**.

</br>

{{< img src="/img/documentation/learn/advanced_search_form.png">}}

</br>

[shortcode]

```xml 

<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context"
	xsi:schemaLocation="http://www.springframework.org/schema/beans  
       http://www.springframework.org/schema/beans/spring-beans.xsd    
       http://www.springframework.org/schema/context  
       http://www.springframework.org/schema/context/spring-context.xsd">
  	<bean id="NomAdherentCriterion"
		class="com.flower.docs.gui.client.search.criterion.SimpleCriterionPresenter">
		<property name="model">
			<bean class="com.flower.docs.domain.search.Criterion">
				<property name="name" value="NomClient" />
				<property name="type">
					<value type="com.flower.docs.domain.search.Types">STRING</value>
				</property>
				<property name="operator">
					<value type="com.flower.docs.domain.search.Operators">EQUALS_TO</value>
				</property>
			</bean>
		</property>
	</bean>
    	<bean id="PrenomClientCriterion"
		class="com.flower.docs.gui.client.search.criterion.SimpleCriterionPresenter">
		<property name="model">
			<bean class="com.flower.docs.domain.search.Criterion">
				<property name="name" value="PrenomClient" />
				<property name="type">
					<value type="com.flower.docs.domain.search.Types">STRING</value>
				</property>
				<property name="operator">
					<value type="com.flower.docs.domain.search.Operators">EQUALS_TO</value>
				</property>
			</bean>
		</property>
	</bean>
		<bean id="RefClientCriterion"
		class="com.flower.docs.gui.client.search.criterion.SimpleCriterionPresenter">
		<property name="model">
			<bean class="com.flower.docs.domain.search.Criterion">
				<property name="name" value="RefClient" />
				<property name="type">
					<value type="com.flower.docs.domain.search.Types">STRING</value>
				</property>
				<property name="operator">
					<value type="com.flower.docs.domain.search.Operators">EQUALS_TO</value>
				</property>
			</bean>
		</property>
	</bean>
	<bean id="dossierClientSearch"
		class="com.flower.docs.gui.client.search.ComponentSearchPresenter"
		scope="prototype">
		<property name="title">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN"/>
					<property name="value" value="Customer folders"/>
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR"/>
					<property name="value" value="Dossiers Clients"/>
				</bean>
			</list>
		</property>
		<property name="description">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN"/>
					<property name="value" value="Search customer folder by reference, name or first name."/>
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR"/>
					<property name="value" value="Rechercher un dossier client par sa référence, son nom ou son prénom."/>
				</bean>
			</list>
		</property>
		<property name="categorySelectorPresenter">
			<bean
				class="com.flower.docs.gui.client.search.criteria.item.FakeCategorySelectorPresenter">
				<property name="value">
					<value type="com.flower.docs.domain.component.Category">VIRTUAL_FOLDER</value>
				</property>
			</bean>
		</property>
      	<property name="keywordCriteriaPresenter">
			<bean
				class="com.flower.docs.gui.client.search.criteria.KeywordCriteriaPresenter">
				<property name="enabled" value="false" />
			</bean>
		</property>
		<property name="advancedCriteriaPresenter">
			<bean
				class="com.flower.docs.gui.client.search.criteria.advanced.AdvancedCriteriaPresenter ">
				<property name="enabled" value="true" />
				<property name="forceOpen" value="true" />
				<property name="displayClassSelector" value="false" />
				<property name="addEmptyCriterion" value="true" />
				<property name="showSearchButton" value="true" />
				<property name="fixedCriterionPresenters">
					<list>
                      	<ref bean="RefClientCriterion" />
						<ref bean="NomAdherentCriterion" />
                      	<ref bean="PrenomClientCriterion" />
					</list>
				</property>
			</bean>
		</property>
		<property name="hiddenColumns">
			<list>
				<value>status</value>
				<value>classid</value>
			</list>
		</property>
		<property name="hiddenRequest">
			<bean class="com.flower.docs.domain.search.SearchRequest">
				<property name="selectClause">
					<bean class="com.flower.docs.domain.search.SelectClause">
						<property name="fields">
							<list>
								<value>name</value>
								<value>NomClient</value>
								<value>RefClient</value>
							</list>
						</property>
					</bean>
				</property>
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
										<value>DossierClient</value>
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
		<property name="max" value="100" />
			</bean>
		</property>
	</bean>
</beans>

```
[shortcode]

</br>

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->

