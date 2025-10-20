---
title: Requête cachée
---

Dans la partie précédente vous avez vu comment définir le formulaire et les critères de recherche. Vous allez maintenant voir comment paramétrer l'affichage des résultats. 

</br>

Pour ce faire, vous allez utiliser une requête cachée parce que l'utilisateur ne peut interagir avec. 

</br>

Ce bloc XML est à placer dans le bean `ComponentSearchPresenter`, au même niveau que la propriété `advancedCriteriaPresenter`.

La définition de cette recherche cachée se fait via la propriété `hiddenRequest` : 

</br>

```xml

<property name="hiddenRequest">
	<bean class="com.flower.docs.domain.search.SearchRequest">
		<!-- Ajoutez ici les différentes parties décrites dans la suite -->
	</bean>
</property>

```

## Colonnes à afficher

Placez la propriété `SelectClause` dans le bean `SearchRequest`. Définissez cette propriété comme ci-dessous pour afficher les colonnes du tableau : 

{{% code title="Code XML : Définition des colonnes à afficher"%}}
```xml

<property name="selectClause">
	<bean class="com.flower.docs.domain.search.SelectClause">
		<property name="fields">
			<list>		
				<!-- Colonnes à afficher -->
				<value>name</value>
				<value>NomClient</value>
				<value>RefClient</value>
			</list>
		</property>
	</bean>
</property>

```
{{%/ code %}}

</br>

{{< img src="/img/documentation/learn/display_colonnes.png">}}

## Filtre

Placez la propriété `filterClauses` à la suite de la `selectClause`. Définissez la propriété `filterClauses` comme ci-dessous afin d'effectuer la recherche sur les dossiers clients :

* Le type `STRING` permet de dire que le critère à rechercher sera une chaîne de caractères,
* C'est l'opérateur `EQUALS_TO` qui effectuera la remontée des dossiers clients,
* les dossiers clients à rechercher seront du type `DossierClient`,

{{% code title="Code XML : Définition du filtre"%}}
```xml

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

``` 
{{%/ code%}}

## Tri
FlowerDocs permet le tri d'affichage des résultats en fonction des techniques et tags.

</br>

Dans ce cas, vous allez trier le résultat en fonction de la propriété `creationDate`, qui est la date de création des dossiers clients.

</br>

Utilisez la propriété `orderClauses` pour définir le tri d'affichage des dossiers clients du plus récent au plus ancien :

{{% code title="Code XML : Définition du Tri des dossiers clients"%}}
```xml

<property name="orderClauses">
	<list>
		<bean class="com.flower.docs.domain.search.OrderClause">
			<property name="name" value="creationDate" />
			<property name="ascending" value="false" />
		</bean>
	</list>
</property>

```
{{%/ code %}}

</br>

Le nombre de résultats remontés par la recherche. Cette propriété donne la possibilité d'instaurer un nombre de résultat à afficher par défaut par page de résultat :

</br>


```xml

<property name="max" value="25" />

```