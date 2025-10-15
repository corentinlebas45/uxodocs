+++
date = "2020-02-02T08:20:01+02:00"
title = "Recherche avancée"
+++


La configuration des formulaires de recherches passe par des fichiers XML. Utilisez l'éditeur interne pour la rédaction du fichier.

</br>

L'éditeur est accessible via le menu **Administration > Affichage > XML** : 

* Cliquez sur le **+** pour créer un nouveau fichier XML,
* Dans le premier champ, saisissez **Recherche de dossiers clients** pour nommer le fichier XML,
* Saisissez le code XML décrit dans la suite du tutoriel,
* Cliquez sur le bouton **Sauvegarder**.

## Identifiant

La première chose à faire est de donner un identifiant unique `dossierClientSearch` à la recherche. Cet identifiant permettra d'appeler facilement cette recherche.

</br>

Cet identifiant permettra également de faire l'association entre le formulaire de recherche et l'équipe qui y aura accès.

</br>

```xml

	<bean id="dossierClientSearch" class="com.flower.docs.gui.client.search.ComponentSearchPresenter" scope="prototype">	  
	</bean>

```
</br>

_Note : Ces deux balises correspondent aux balises de début et de fin de la définition d'une recherche. Ainsi, tout ce qui sera décrit dans la suite de cet exemple est à insérer entre ces deux balises._

</br>

## Titre, description et catégorie

L'identifiant permet l'appel à la recherche d'un point de vue technique, mais il n'est pas visible pour les utilisateurs.

Dans ce cas, le nom, la description, et la catégorie permettront de faciliter l'utilisation de la recherche avancée : 

* Renseignez la propriété `title` avec sa valeur **Dossiers Clients**,
* Décrivez la propriété `description` avec sa valeur **Rechercher un dossier client par sa référence, son nom ou son prénom.**

</br>
```xml

<property name="title" value="Dossiers Clients" />
<property name="description" value="Rechercher un dossier client par sa référence, son nom ou son prénom."/>

```
</br>
Catégorisez la recherche à l'aide de la propriété `categorieSelectorPresenter` : 

* Permettez une seule catégorie avec la classe `FakeCategorySelectorPresenter`,
* Utilisez le type `VIRTUAL_FOLDER` pour les dossiers clients.

</br>
```xml
	<property name="categorySelectorPresenter">
		<bean class="com.flower.docs.gui.client.search.criteria.item.FakeCategorySelectorPresenter">
				<property name="value">
				<value type="com.flower.docs.domain.component.Category">VIRTUAL_FOLDER</value>
				</property>
		</bean>
	</property>
```
</br>

La recherche par mots-clés `keywordCriteriaPresenter` ne sera pas utilisée. Désactivez cette recherche à l'aide de la propriété `enabled` et sa valeur `false` :

</br>
```xml

<property name="keywordCriteriaPresenter">
	<bean class="com.flower.docs.gui.client.search.criteria.KeywordCriteriaPresenter">
		<property name="enabled" value="false" />
	</bean>
</property>

```
</br>

Toutes les propriétés qui seront décrites dans la suite de cette page doivent être placées dans le bean `AdvancedCriteriaPresenter`.
Définissez la recherche avancée avec la propriété `AdvancedCriteriaPresenter` : 

</br>
```xml

<property name="advancedCriteriaPresenter">
    <bean class="com.flower.docs.gui.client.search.criteria.advanced.AdvancedCriteriaPresenter" />
</property>

```

</br>

Désactivez le sélecteur de classe  `displayClassSelector` à l'aide de sa valeur `false` qui permet uniquement la recherche sur les dossiers clients de la manière suivante : 

</br>

```xml

<property name="displayClassSelector" value="false" />

```
</br>

Afin de forcer l'ouverture de la recherche avancée, ajoutez la propriété `forceOpen` avec sa valeur `true` :

</br>


```xml

<property name="forceOpen" value="true" />

```

</br>

Valorisez la propriété `addEmptyCriterion` avec `true` pour que l'utilisateur puisse ajouter des critères :

</br>

```xml

<property name="addEmptyCriterion" value="true" />

```

</br>

Définissez le bouton `showSearchButton` permettant de lancer la recherche : 

</br>


```xml

<property name="showSearchButton" value="true" />

```
