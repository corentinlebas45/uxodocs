+++
date = "2004-04-02T13:20:01+02:00"
title = "Formulaire"
+++


# Sélecteur de catégorie

Pour exécuter une recherche, il est nécessaire de définir le type d'objet recherché (documents, dossiers...) : une catégorie de composant. 

Pour cela, un sélecteur de catégorie est mis à disposition. Pour le masquer, la classe ``FakeCategorySelectorPresenter`` est mise à disposition afin de définir la catégorie sans que l'utilisateur n'ait à la sélectionner.

__Exemple :__ Définition de la catégorie pour une recherche de dossiers virtuels
   
```xml 
<property name="categorySelectorPresenter">
        <bean class="com.flower.docs.gui.client.search.criteria.item.FakeCategorySelectorPresenter">
            <property name="value">
                <value type="com.flower.docs.domain.component.Category">VIRTUAL_FOLDER</value>
            </property>
        </bean>
</property>
```


# Recherche par mot clés

La recherche par mot clés se configure en ajoutant la propriété suivante :

```xml 
<property name="keywordCriteriaPresenter">
	<bean class="com.flower.docs.gui.client.search.criteria.KeywordCriteriaPresenter" />
</property>
```

Pour désactiver la recherche par mot clés, il faut ajouter au bean de classe ``KeywordCriteriaPresenter`` la propriété suivante : 

```xml 
<property name="enabled" value="false" />
```

Par défaut, la recherche par mot-clé va permettre une recherche sur tous les tags de composants. Il est possible de changer ce comportement et de spécifier sur quels tags
cette recherche par mot clés doit être effectuée : 

```xml 
<property name="fields">
    <list>
    	<value>Matricule</value>
    	<value>Contractor</value>
    </list>
</property>
```

# Recherche avancée

La recherche avancée peut être configurée en ajoutant la propriété suivante :

```xml 
<property name="advancedCriteriaPresenter">
    <bean class="com.flower.docs.gui.client.search.criteria.advanced.AdvancedCriteriaPresenter" />
</property>
```


Pour désactiver la recherche avancée, il faut ajouter la propriété suivante :

```xml 
<property name="enabled" value="false" />
```

Par défaut, la recherche avancée permet de filtrer sur une ou plusieurs classes de composants.
Pour ne pas afficher le sélecteur de classes, il faut ajouter la propriété suivante :

```xml 
<property name="displayClassSelector" value="false" />
```

<!--
Pour que la recherche avancée soit disposée en ligne, il faut ajouter la propriété suivante :

```xml 
<property name="inline" value="true" />
```
--> 

Pour que la recherche avancée soit ouverte et cacher le bouton permettant de la réduire, il faut ajouter la propriété suivante :

```xml 
<property name="forceOpen" value="true" />
```

Le libellé par défaut de l'action est ``Rechercher``, il peut être surchargé en ajoutant la propriété : 	

```xml 
<property name="searchButtonTitle">
	<list>
		<bean class="com.flower.docs.domain.i18n.I18NLabel">
			<property name="language" value="EN"/>
			<property name="value" value="Verify"/>
		</bean>
		<bean class="com.flower.docs.domain.i18n.I18NLabel">
			<property name="language" value="FR"/>
			<property name="value" value="Vérifier"/>
		</bean>
	</list>
</property>
```

:::info
En utilisant un critère de recherche sur un tag `CONDITIONAL`, si le tag dont il dépend n'est pas renseigné, l'ensemble des valeurs du tag `CONDITIONAL` est affiché.
:::


## Critères libres


Par défaut, l'ensemble des classes de tags définies comme **recherchables** peuvent être ajoutées comme critère de recherche.
Afin de restreindre la portée des recherches effectuées, il est possible de  : 

*	Empêcher les utilisateurs d'ajouter un critère libre grâce au bouton ``+`` : ajouter la propriété suivante au bean ``AdvancedCriteriaPresenter`` : 
```xml 
<property name="addEmptyCriterion" value="false" />
```
	
*	Masquer un tag dans la liste des critères disponibles : ajouter la valeur de son idenfiant à la propriété ``unsearchableCriteria``
```xml 
<property name="unsearchableCriteria">
	<list>
		<value>ServiceName</value>
		<value>Assignee</value>
	</list>
</property>
```

*	Forcer les tags pouvant être utilisés comme critères dans un formulaire de recherche : ajouter la valeur de son idenfiant à la propriété ``searchableCriteria``.
	Lorsque cette propriété est définie, la propriété ``unsearchableCriteria`` n'est pas utilisée.
```xml 
<property name="searchableCriteria">
	<list>
		<value>Nature</value>
	</list>
</property>
```

## Critères fixes
   
La recherche avancée peut être configurée pour afficher, par défaut, des critères fixes que l'utilisateur n'aura plus qu'à remplir avant d'exécuter sa recherche.
Pour les critères de type chaine de caractères, il est possible de définir une description, à l'aide de la propriété `description`, qui sera présentée à l'utilisateur.

Pour définir un critère fixe : 

```xml 
<bean id="FirstnameCriterionPresenter" class="com.flower.docs.gui.client.search.criterion.SimpleCriterionPresenter">
    <property name="model">
        <bean class="com.flower.docs.domain.search.Criterion">
            <property name="name" value="Firstname" />
            <property name="type">
                <value type="com.flower.docs.domain.search.Types">STRING</value>
            </property>
            <property name="operator">
                <value type="com.flower.docs.domain.search.Operators">CONTAINS</value>
            </property>
        </bean>
    </property>
	<property name="description">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Collaborator firstname"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Prénom du collaborateur"/>
			</bean>
		</list>
	</property></bean>
```
    
Pour affecter ces critères à une recherche avancée :

```xml 
<property name="fixedCriterionPresenters">
	<list>
		<ref bean="FirstnameCriterionPresenter" />
	</list>
</property>
```

Il est possible de personnaliser l'affichage d'un champ avec un bean de classe ``com.flower.docs.gui.client.search.criterion.FilterCriterionPresenter`` à l'aide de différentes propriétés : 

* ``displayOperatorSelector`` : permet de cacher le sélecteur d'opérateur
* ``forceMonovalued`` : pour un  critère normalement multivalué, force l'utilisateur à ne choisir qu'une valeur
* ``mandatory`` : rend le champ obligatoire pour effectuer la recherche

__Exemple :__
 
```xml 
<bean id="ValidationStatusCriterionPresenter" class="com.flower.docs.gui.client.search.criterion.FilterCriterionPresenter">
	<property name="description">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Enter a value"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Saisissez une valeur"/>
			</bean>
		</list>
	</property>
	<property name="displayOperatorSelector" value="false" />
	<property name="forceMonovalued" value="true" />
	<property name="mandatory" value="true" />
	<property name="model">
		<bean class="com.flower.docs.domain.search.Criterion">
			<property name="name" value="ValidationStatus" />
			<property name="type">
				<value type="com.flower.docs.domain.search.Types">STRING</value>
			</property>
			<property name="operator">
				<value type="com.flower.docs.domain.search.Operators">STARTS_WITH</value>
			</property>
		</bean>
	</property>
</bean>
```
 

Pour affecter ces critères à une recherche avancée :

```xml 
<property name="fixedCriterionPresenters">
	<list>
		<ref bean="ValidationStatusCriterionPresenter" />
	</list>
</property>
```

__Critères multiples :__ 

Par défaut, l'ensemble de ces critères est défini comme ``unique``, à savoir que chaque tag présent dans la liste des critères ne peut être utilisé qu'une seule fois.
Cependant, il est possible de définir qu'un tag puisse correspondre à plusieurs critères, grâce à la propriété ``nonUniqueCriteria`` :

```xml 
<property name="nonUniqueCriteria">
	<list>
		<value>name</value>
		<value>TIAmount</value>
		<value>creationDate</value>
	</list>
</property>
```

Cette fonctionnalité est désactivable en ajoutant la propriété ``activateUniqueCriteria``

```xml 
<property name="activateUniqueCriteria" value="false" />
```

# Sélecteur de classe

Il est possible de personnaliser la sélection de la classe de composants lors d'une recherche à l'aide d'un bean de classe 
``com.flower.docs.gui.client.search.criteria.clazz.ComponentClassCriterionSelectorPresenter``. 

Ce critère de classe est personnalisable de la même façon que les critères filtres cités ci-dessus :  

* ``displayOperatorSelector`` : permet de cacher le sélecteur d'opérateur
* ``forceMonovalued`` : pour un  critère normalement multivalué, force l'utilisateur à ne choisir qu'une valeur
* ``mandatory`` : rend le champ obligatoire pour effectuer la recherche

__Exemple :__

```xml 
<bean id="classIdCriterionPresenter" class="com.flower.docs.gui.client.search.criteria.clazz.ComponentClassCriterionSelectorPresenter">
	<property name="displayOperatorSelector" value="false" />
	<property name="forceMonovalued" value="true" />
	<property name="mandatory" value="true" />
	<property name="model">
		<bean class="com.flower.docs.domain.search.Criterion">
			<property name="name" value="classid" />
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

Le sélecteur de classe de type `com.flower.docs.gui.client.search.criteria.clazz.CreatableTaskClassCriterionSelectorPresenter` 
va permettre d'afficher uniquement les tâches qui n'ont pas de pièces jointes obligatoires et techniques et où l'utilisateur a les droits de création. 

Pour affecter ce critère de classe à une recherche avancée, il faut définir la propriété `classCriterionPresenter` et afficher le critère de classe:

```xml 
<property name="advancedCriteriaPresenter">
		<bean class="com.flower.docs.gui.client.search.criteria.advanced.AdvancedCriteriaPresenter">
			<property name="enabled" value="true" />
			<property name="displayClassSelector" value="true" />
			<property name="showSearchButton" value="true" />
			<property name="classCriterionPresenter" ref="classIdCriterionPresenter" />
		</bean>
</property>
```

# Filtres

Lorsqu'une agrégation est définie pour la [requête cachée](broken-link.md) du formulaire de recherche, les résultats sont affichés sous forme d'arborescence. Lors de la sélection d'un bucket, la recherche est exécutée avec les critères correspondant au bucket. 

# Données techniques
   
Les informations techniques positionnées par FlowerDocs peuvent également être utilisées en tant que critère ou filtre de recherche :

- `name` : titre du composant
- `id` : identifiant du composant
- `classid` : identifiant de la classe du composant
- `owner` : login de l'utilisateur ayant créé le composant
- `creationDate` : date de création du composant
- `lastUpdateDate` : date de dernière modification du composant
- `workflow` : identifiant du workflow, ne concerne que les composants de type `TASK`
- `assignee` : login de l'utilisateur à qui la tâche est assignée, ne concerne que les composants de type `TASK`
- `content` : contenu du fichier, ne concerne que les composants de type `DOCUMENT`

:::info
Pour pouvoir rechercher sur ces données, il est nécessaire de définir un bean `dataCriteriaCatalog` de type `com.flower.docs.gui.client.search.SearchableFieldCatalog`.
:::

# Validation

Afin de décider si le bouton de recherche doit être désactivé ou non, la propriété `enableIfInvalid` peut être définie. Cette propriété accepte les valeurs suivantes : 

* `true` : le formulaire de recherche peut être invalide
* `false` : le formulaire doit être valide pour activer l'action


```xml
<bean id="RechercheAgent" class="com.flower.docs.gui.client.search.ComponentSearchPresenter" scope="prototype">
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Agent folder search"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Rechercher des dossiers agents"/>
			</bean>
		</list>
	</property>  
	<property name="enableIfInvalid" value="true" />
</bean>
```

# Configuration avancée de dossiers virtuels

Il est possible de configurer des filtres au sein d'un dossier virtuel et de surcharger la recherche utilisée pour ajouter ou masquer des colonnes dans la liste de résultats.

## Onglet

Pour cela, il suffit de respecter la convention de nommage du bean de recherche comme suit :

-  pour appliquer le formulaire à l'ensemble des recherches du dossier virtuel, il faut utiliser le nom de bean suivant : ``content{VirtualFolder class id avec la première lettre en majuscule}VirtualFolder``
	
    __Exemple :__ pour la classe de dossiers virtuels CourrierCollective, le nom du bean du formulaire de recherche associé sera ``contentCourriercollectiveVirtualFolder``

- pour appliquer le formulaire à l'une des recherches d'un dossier virtuel, il faut utiliser le nom de bean suivant : ``content{VirtualFolder class id avec la première lettre en majuscule}VirtualFolder{search id avec la première lettre en majuscule}``

    __Exemple :__ pour la classe de dossiers virtuels CourrierCollective avec la recherche CourrierSearch, le nom du bean du formulaire de recherche associé sera ``contentCourriercollectiveVirtualFolderCourriersearch``

- pour appliquer le formulaire à cette recherche tout dossier virtuel confondu, il faut utiliser le bean suivant : ``contentVirtualFolder{search id avec la première lettre en majuscule}``

    __Exemple :__ pour la recherche CourrierSearch, le nom du bean du formulaire de recherche associé sera ``contentVirtualFolderCourriersearch``

<br/>
:::warning
Si l'ID du dossier virtuel ou du formulaire de recherche contient des underscore (``_``), alors on ne le reporte pas dans le nom du bean et la lettre suivante doit être en majuscule.
    __Exemple :__ pour la classe de dossiers virtuels Courrier_Mail, le nom du bean du formulaire de recherche associé sera ``contentCourrierMailVirtualFolder``
:::

```xml
	<bean id="contentCourriercollectiveVirtualFolderCourriersearch" 
		class="com.flower.docs.gui.client.search.ComponentSearchPresenter"
		scope="prototype">
		<property name="responsePresenterProvider">
			<bean
				class="com.flower.docs.gui.client.search.response.TableSearchResponsePresenterProvider" />
		</property>
		<property name="categorySelectorPresenter">
			<bean
				class="com.flower.docs.gui.client.search.criteria.item.FakeCategorySelectorPresenter">
				<property name="value">
					<value type="com.flower.docs.domain.component.Category">TASK</value>
				</property>
			</bean>
		</property>
		<property name="keywordCriteriaPresenter">
			<bean
				class="com.flower.docs.gui.client.search.criteria.KeywordCriteriaPresenter">
				<property name="enabled" value="false" />
			</bean>
		</property>
		<property name="hiddenColumns">
			<list>
				<value>status</value>
				<value>classid</value>
				<value>B_DirectionDestinataire</value>
			</list>
		</property>
		<property name="advancedCriteriaPresenter">
			<bean
				class="com.flower.docs.gui.client.search.criteria.advanced.AdvancedCriteriaPresenter">
				<property name="enabled" value="true" />
				<property name="forceOpen" value="true" />
				<property name="inline" value="false" />
				<property name="displayClassSelector" value="false" />
				<property name="addEmptyCriterion" value="false" />
				<property name="showSearchButton" value="true" />
				<property name="searchButtonTitle">
					<list>
						<bean class="com.flower.docs.domain.i18n.I18NLabel">
							<property name="language" value="EN"/>
							<property name="value" value="Filter"/>
						</bean>
						<bean class="com.flower.docs.domain.i18n.I18NLabel">
							<property name="language" value="FR"/>
							<property name="value" value="Filtrer"/>
						</bean>
					</list>
				</property>				
				<property name="fixedCriterionPresenters">
					<list>
						<ref bean="ObjetCriterion" />
						<ref bean="DateCriterion" />
						<ref bean="NomAdherentCriterion" />
					</list>
				</property>
				<property name="searchableCriteria">
					<list>
						<value>B_DateCourrier</value>
						<value>B_NomClient</value>
						<value>B_ObjetCourrier</value>
					</list>
				</property>
			</bean>
		</property>
	</bean>
```

## Indexation

La définition d'un formulaire de recherche pour un dossier virtuel en indexation est très proche de celle en onglet, il suffit de respecter la convention de nommage du bean de recherche comme suit :

-  pour appliquer le formulaire à l'ensemble des recherches du dossier virtuel, il faut utiliser le nom de bean suivant : ``content{VirtualFolder class id avec la première lettre en majuscule}VirtualFolder{Phase}``
	
    __Exemple :__ pour la classe de dossiers virtuels CourrierCollective en modification, le nom du bean du formulaire de recherche associé sera ``contentCourriercollectiveVirtualFolderModify``

- pour appliquer le formulaire à l'une des recherches d'un dossier virtuel, il faut utiliser le nom de bean suivant : ``content{VirtualFolder class id avec la première lettre en majuscule}VirtualFolder{Phase}{search id avec la première lettre en majuscule}``

    __Exemple :__ pour la classe de dossiers virtuels CourrierCollective avec la recherche CourrierSearch, le nom du bean du formulaire de recherche associé sera ``contentCourriercollectiveVirtualFolderModifyCourriersearch``

- pour appliquer le formulaire à cette recherche tout dossier virtuel en indexation confondu, il faut utiliser le bean suivant : ``contentVirtualFolder{Phase}{search id avec la première lettre en majuscule}``

    __Exemple :__ pour la recherche CourrierSearch, le nom du bean du formulaire de recherche associé sera ``contentVirtualFolderModifyCourriersearch``

*NB :* Concernant la phase, les valeurs disponibles sont : `Modify` et `ReadOnly`.

<br/>
:::warning
Si l'ID du dossier virtuel ou du formulaire de recherche contient des underscore (``_``), alors on ne le reporte pas dans le nom du bean et la lettre suivante doit être en majuscule.
    __Exemple :__ pour la classe de dossiers virtuels Courrier_Mail, le nom du bean du formulaire de recherche associé sera ``contentCourrierMailVirtualFolderModify``
:::