+++
date = "2000-04-03T13:20:01+02:00"
title = "History"
+++

This section details the display of widgets based on components modified, created or viewed by the current user.

Components are determined from information stored in the browser cache. This feature therefore requires the user's browser to have the ``Local storage`` function activated.
In addition, once the browser cache has been purged, the information is deleted.
 

In this example, in addition to the properties described above, we define the ``property`` property with the value: 

* ``OPENED``: the latest opened components
* ``CREATED``: the latest created components
* ``UPDATED``: the latest updated components


```xml
<bean id="tenLastConsultedDocumentWidget" class="com.flower.docs.gui.client.home.HomeUserSearchPresenter">
	<property name="property">
		<value type="com.flower.docs.gui.client.localstorage.LocalPersistentCacheKey">OPENED</value>
	</property>
	<property name="description">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN" />
				<property name="value" value="10 last opened documents" />
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR" />
				<property name="value" value="10 last opened documents" />
			</bean>
		</list>
	</property>
	<property name="search">
		<bean class="com.flower.docs.domain.search.Search">
			<property name="category">
				<value type="com.flower.docs.domain.component.Category">DOCUMENT</value>
			</property>
			<property name="request">
				<bean class="com.flower.docs.domain.search.SearchRequest">
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
			</property>
			<property name="displayNames">
				<list>
					<bean class="com.flower.docs.domain.i18n.I18NLabel">
						<property name="language" value="EN" />
						<property name="value" value="10 last opened documents" />
					</bean>
					<bean class="com.flower.docs.domain.i18n.I18NLabel">
						<property name="language" value="FR" />
						<property name="value" value="1O derniers documents consultés" />
					</bean>
				</list>
			</property>
		</bean>
	</property>
</bean>
```
