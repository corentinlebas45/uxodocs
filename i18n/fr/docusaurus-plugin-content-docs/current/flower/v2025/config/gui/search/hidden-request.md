+++
date = "2004-04-03T13:20:01+02:00"
title = "Requête cachée"
+++

Pour chaque formulaire de recherche, il est possible de définir une requête de recherche cachée et donc non-visible des utilisateurs.

Cette requête permet par exemple de : 

* ajouter des critères masqués
* configurer les colonnes à afficher
* définir le tri par défaut
* définir le nombre de résultats à remonter


L'objet `ComponentSearchPresenter` accepte une propriété `hiddenRequest` avec un bean de classe `com.flower.docs.domain.search.SearchRequest`.


[shortcode]
```xml
<bean id="monFormulaire" class="com.flower.docs.gui.client.search.ComponentSearchPresenter"
		scope="prototype">
		<!-- ... -->
		<property name="hiddenRequest">
			<bean class="com.flower.docs.domain.search.SearchRequest">
				<property name="selectClause">
					<bean class="com.flower.docs.domain.search.SelectClause">
						<property name="fields">
							<list>
								<!-- Colonnes à afficher -->
								<value>name</value>
								<value>TypeCourrier</value>
							</list>
						</property>
					</bean>
				</property>
				<property name="filterClauses">
					<list>
						<bean class="com.flower.docs.domain.search.AndClause">
							<!-- Critères masqués -->
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
												<value>CourrierEntrant</value>
											</list>
										</property>
									</bean>
								</list>
							</property>
						</bean>
					</list>
				</property>
				<!-- Nombre de résultats à afficher -->
				<property name="max" value="42" />
			</bean>
		</property>
		<!-- ... -->
	</bean>
```
[shortcode]


<br/>

Dans certains cas, il peut être nécessaire d'ajouter des tags dans la `selectClause` de la requête cachée afin de remonter les valeurs d'un tag sans pour autant vouloir que la colonne soit visible. Pour cela, il est possible d'ajouter sur l'objet `ComponentSearchPresenter` la propriété ``hiddenColumns`` tel que : 

```xml 
<property name="hiddenColumns">
	<list>
		<value>TypeCourrier</value>
	</list>
</property>
```
	

:::info

* Il est préconisé d'utiliser la notion de requête cachée afin de simplifier l'accès à des composants et non pour sécuriser l'accès à ceux-ci.
* Ajouter le critère `ADD_FILTERS_TO_SELECT` avec la valeur `true` dans les contextes de la requête permet d'afficher les critères renseignés en tant que colonnes.

:::