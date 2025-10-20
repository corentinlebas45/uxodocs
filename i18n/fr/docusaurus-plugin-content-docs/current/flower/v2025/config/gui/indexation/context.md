---
title: Contextes
description: Configurez les formulaires d'indexation
---

Pour configurer un écran d'indexation, il est d'abord nécessaire d'identifier les composants pour lesquels vous souhaitez appliquer la configuration. Cette identification se fait sur la base d'un contexte.

<br/>
*Ces contextes seront utilisés dans les sections suivantes pour appliquer une configuration particulière dans un contexte spécifique.*

<br/>
Par défaut, les contextes génériques suivants sont fournis : 

| Identifiant                             | Description                      |
|-----------------------------------------|----------------------------------|
|`documentInsertContext`                  | Création de document             |
|`documentModifyContext`                  | Modification de document         |
|`documentReadOnlyContext`                | Document en lecture seule        |
|`folderInsertContext`                    | Création de dossier              |
|`folderModifyContext`                    | Modification de dossier          |
|`folderReadOnlyContext`                  | Dossier en lecture seule         |
|`virtualFolderInsertContext`             | Création de dossier virtuel      |
|`virtualFolderModifyContext`             | Modification de dossier virtuel  |
|`virtualFolderReadOnlyContext`           | Dossier virtuel en lecture seule |
|`taskInsertContext`                      | Création de tâche                |
|`taskModifyContext`                      | Modification de tâche            |
|`taskReadOnlyContext`                    | Tâche en lecture seule           |


Pour être plus précis dans l'identification des composants, il est possible de définir un contexte en fonction d'une classe de composants. Pour cela, il est nécessaire de le définir manuellement grâce à la classe ``IdBasedContext`` permettant de définir : 

* la catégorie de composant
* la classe de composants
* la phase

<br/>

Les différentes phases disponibles sont : 

|Valeur            |Description                              |
|------------------|-----------------------------------------|
|`INSERT`          |Création de composant                    |
|`MODIFY`          |Modification de composant                |
|`READONLY`        |Ouverture en lecture seule d'un composant|


Les différentes catégories disponibles sont : 

|Valeur                |Description     |
|----------------------|----------------|
|`DOCUMENT`            |Document        |
|`FOLDER`              |Dossier         |
|`VIRTUAL_FOLDER`      |Dossier virtuel |
|`TASK`                |Tâche           |
 
 
__Exemple :__ Définition d'un contexte permettant de configurer l'écran de création de documents de classe ``CourrierEntrant`` 

```xml 
<bean class="com.flower.docs.domain.componentclass.IdBasedContext">
	<property name="id">
		<bean class="com.flower.docs.domain.common.Id">
			<property name="value" value="CourrierEntrant" />
		</bean>
	</property>
	<property name="category">
		<value type="com.flower.docs.domain.component.Category">DOCUMENT</value>
	</property>
	<property name="phase">
		<value type="com.flower.docs.domain.componentclass.Phase">INSERT</value>
	</property>
</bean>
```