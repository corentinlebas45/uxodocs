---
title: Critères
---

:::info

Afin de pouvoir utiliser un tag comme critère de recherche, il faut l'avoir défini comme **recherchable** lors de sa création !

:::

</br>

Les critères de recherche représentent le contenu du formulaire de recherche.

</br>

La recherche avancée peut être configurée pour afficher, par défaut, des critères que l'utilisateur n'aura plus qu'à remplir avant d'exécuter sa recherche. Cette propriété est à placer dans le bean `AdvancedCriteriaPresenter`. L'ajout de critères se fait via la propriété `fixedCriterionPresenters` :

</br>

```xml

<property name="fixedCriterionPresenters">
	<list>
	</list>
</property>

```
</br>

Entre les balises `<list>` et `</list>` ajoutez les différents critères de recherches.

Placez la définition du critère au début du corps XML. La définition du critère de recherche `NomAdherentCriterion` se fait comme suit :

* le tag `NomClient` qui est un critère de recherche
* Le critère est une chaîne de caractères `STRING`
* `EQUALS_TO` est l'opérateur qui va aider la recherche à trouver le client

{{% code title="Code XML : Définition de Critère"%}}
```xml

<bean id="NomAdherentCriterion" class="com.flower.docs.gui.client.search.criterion.SimpleCriterionPresenter">
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

```
{{%/ code %}}

_Note : La définition reste la même pour les critères `RefClientCriterion` et `PrenomClientCriterion`, il suffit juste de changer les valeurs des propriétés `description`, `nom` et l'identifiant `id` du bean._

</br>

Les différentes propriétés d'un critère :

* `name` : (ici égal à `NomClient`) le nom symbolique du tag qui doit être utilisé comme critère.

* `type` : le type de valeur à saisir dans le champ ([Type de champ](/javadocs/domain/com/flower/docs/domain/search/Types.html)).

* `operator` : l'opérateur par défaut affiché dans la recherche ([Opérateur] (/javadocs/domain/com/flower/docs/domain/search/Operators.html)).

</br>

Référencez les critères dans la liste à l’aide de l’identifiant du bean :

</br>

```xml

<property name="fixedCriterionPresenters">
	<list>
		<ref bean="RefClientCriterion" />
		<ref bean="NomAdherentCriterion" />
        <ref bean="PrenomClientCriterion" />
	</list>
</property>

```
</br>