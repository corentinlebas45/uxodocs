+++
date = "2000-04-03T13:20:01+02:00"
title = "Historique"
+++

Cette partie détaille l'affichage de widgets basés sur les composants modifiés, créés ou consultés par l'utilisateur courant.

Les composants sont déterminés à partir d'informations enregistrées dans le cache du navigateur. Cette fonctionnalité nécessite donc que le navigateur de l'utilisateur ait la fonction ``Local storage`` activée.
De plus, après purge du cache du navigateur, les informations sont donc supprimées.
 

Dans cet exemple, nous définissons en plus des propriétés décrites précédemment, la propriété ``property`` avec pour valeur : 

* ``OPENED`` : les derniers composants visualisés
* ``CREATED`` : les derniers composants créés
* ``UPDATED`` : les derniers composants mis à jour


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
