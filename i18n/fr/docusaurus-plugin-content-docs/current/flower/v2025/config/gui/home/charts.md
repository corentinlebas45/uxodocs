---
title: Graphiques
description: 
---

Dans la page d'accueil, il est possible d'afficher des graphiques définis à partir de recherche. Le type de graphique est automatiquement déterminé à partir du nombre d'agrégation : 

* un niveau d'agrégation : donut 
* deux niveaux d'agrégation : histogramme 

# Donut

__Exemple : Donut de mes courriers en fonction de leur statut__
 
```xml
	<bean id="myMailsGraph" class="com.flower.docs.gui.client.home.graph.HomeGraphPresenter">
		<property name="search">
			<bean class="com.flower.docs.domain.search.Search">
				<property name="id">
				    <bean class="com.flower.docs.domain.common.Id">
				        <property name="value" value="pliSearch" />
				    </bean>
				</property>				
				<property name="category">
					<value type="com.flower.docs.domain.component.Category">TASK</value>
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
						<property name="filterClauses">
							<list>
								<bean class="com.flower.docs.domain.search.AndClause">
									<property name="criteria">
										<list>
											<bean class="com.flower.docs.domain.search.Criterion">
												<property name="name" value="assignee" />
												<property name="type">
													<value type="com.flower.docs.domain.search.Types">STRING</value>
												</property>
												<property name="operator">
													<value type="com.flower.docs.domain.search.Operators">EQUALS_TO</value>
												</property>
												<property name="values">
													<list>
														<value>${user.id}</value>
													</list>
												</property>
											</bean>
										</list>
									</property>
								</bean>
							</list>
						</property>
						<property name="aggregation">
							<bean class="com.flower.docs.domain.search.FieldAggregation">
								<property name="field" value="Statut" />
							</bean>
						</property>
					</bean>
				</property>
				<property name="displayNames">
					<list>
						<bean class="com.flower.docs.domain.i18n.I18NLabel">
							<property name="language" value="EN"/>
							<property name="value" value="My mails"/>
						</bean>
						<bean class="com.flower.docs.domain.i18n.I18NLabel">
							<property name="language" value="FR"/>
							<property name="value" value="Mes courriers"/>
						</bean>
					</list>
				</property>
			</bean>
		</property>
		<property name="description">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="Mails which are assigned to me" />
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="Les courriers qui me sont assignés" />
				</bean>
			</list>
		</property>
	</bean> 
```

<br/>

Le résultat suivant sur la page d'accueil :



:::info
Pour rediriger l'utilisateur lors d'un clic sur une série, surchargez la méthode JavaScript `handleDonutClick(selector, fieldName, fieldValue, label)`.
:::

__Exemple : Redirection vers l'onglet PersonelleTab avec filtre sur la valeur de Statut selectionnée__

```js
	function handleDonutClick(selector, fieldName, fieldValue, label){
		if (selector.indexOf("#pliSearch") != -1 && fieldName==="Statut") {
	      	var place = new flower.docs.PlaceBuilder.build("browse(id=PersonnelleTab,leaf=" + fieldValue + ")");
	      	JSAPI.get().getNavigationAPI().goTo(place);
		}
	}
```

# Histogramme

Avec ce type de graphe, le premier niveau d'agrégation est utilisé pour afficher les colonnes verticales. Le second niveau permet de définir les séries.

__Exemple : Histogramme de tous les courriers en fonction du service et du statut__

```xml
	<bean id="allMailsGraph" class="com.flower.docs.gui.client.home.graph.HomeGraphPresenter">
		<property name="search">
			<bean class="com.flower.docs.domain.search.Search">
				<property name="id">
				    <bean class="com.flower.docs.domain.common.Id">
				        <property name="value" value="allSearch" />
				    </bean>
				</property>				
				<property name="category">
					<value type="com.flower.docs.domain.component.Category">TASK</value>
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
						<property name="filterClauses">
							<list>
								<bean class="com.flower.docs.domain.search.AndClause">
									<property name="criteria">
										<list>
											<bean class="com.flower.docs.domain.search.Criterion">
												<property name="name" value="assignee" />
												<property name="type">
													<value type="com.flower.docs.domain.search.Types">STRING</value>
												</property>
												<property name="operator">
													<value type="com.flower.docs.domain.search.Operators">DISPLAY</value>
												</property>
												<property name="values">
													<list>
														<value>${user.id}</value>
													</list>
												</property>
											</bean>
										</list>
									</property>
								</bean>
							</list>
						</property>
						<property name="aggregation">
							<bean class="com.flower.docs.domain.search.FieldAggregation">
								<property name="field" value="ServiceDestinataire" />
								<property name="nested">
									<list>
										<bean class="com.flower.docs.domain.search.FieldAggregation">
											<property name="field" value="Statut" />
										</bean>
									</list>
								</property>
							</bean>
						</property>
					</bean>
				</property>
				<property name="displayNames">
					<list>
						<bean class="com.flower.docs.domain.i18n.I18NLabel">
							<property name="language" value="EN"/>
							<property name="value" value="All mails"/>
						</bean>
						<bean class="com.flower.docs.domain.i18n.I18NLabel">
							<property name="language" value="FR"/>
							<property name="value" value="Tous les courriers"/>
						</bean>
					</list>
				</property>
			</bean>
		</property>
		<property name="description">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN" />
					<property name="value" value="All the mails in FlowerDocs" />
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR" />
					<property name="value" value="Tous les courriers dans FlowerDocs" />
				</bean>
			</list>
		</property>
	</bean>
```

Le résultat suivant sur la page d'accueil :




:::info
Pour rediriger l'utilisateur lors d'un clic sur une série, surchargez la méthode JavaScript `handleStackedBarClick(selector, bar, serie)`.
:::

__Exemple : Redirection vers l'onglet CollectiveTab avec filtre sur la série et la valeur de Statut selectionnées__

```js
	function handleStackedBarClick(selector, barName,barValue, serieName, serieValue){
		if (selector.indexOf("#allSearch") != -1) {
			var place = new flower.docs.PlaceBuilder.build("browse(id=CollectiveTab,leaf=" + barValue + "__"+ serieValue + ")");
		  	JSAPI.get().getNavigationAPI().goTo(place);
		}
	}
```