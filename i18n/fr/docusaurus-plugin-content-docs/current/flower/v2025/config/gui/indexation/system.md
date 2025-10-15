+++
date = "2002-03-28T13:20:01+02:00"
title = "Métadonnées système"
description = "Configurez les formulaires d'indexation"
+++

# Métadonnées système


:::info
Les métadonnées système sont les métadonnées présentes sur l'ensemble des composants de manière native (nom, classe, date de création...).
Leur configuration sur les écrans d'indexation peut être modifiée en surchargeant la configuration de base.
:::

Pour créer une configuration de ces métadonnées, il faut créer un nouveau bean ``ComponentPropertiesConfiguration`` (contenant une liste de définitions de champ) associé à un contexte.

<br/>
Ces associations doivent être ajoutées dans l'objet suivant : 


```xml 
<bean id="componentProperties" class="com.flower.docs.gui.client.componentclass.ComponentPropertiesConfigurations">
	<property name="propertiesConfiguration" />
</bean>
```

 
## Définition de champ


Pour définir une configuration, il faut créer un nouveau bean ``ComponentPropertiesConfiguration`` et lui assigner des définitions de champ (``FieldDefinition``) permettant de définir une métadonnée en particulier.

 
Les définitions de champs suivantes sont fournies par défaut : 

|Identifiant      |Description                             |
|-----------------|----------------------------------------|
|Name             |Nom du composant                        |
|Class            |Classe du composant                     |
|Class-ReadOnly   |Classe du composant                     |
|creationDateData |Date à laquelle le composant a été créé |
|lastUpdateDate   |Date de dernière mise à jour            |


Il est également possible de les définir manuellement : 


```xml
<bean id="NameDefinition" class="com.flower.docs.gui.api.model.fields.FieldDefinition">
	<property name="name" value="name" />
	<property name="type">
		<value type="com.flower.docs.gui.api.model.fields.FieldType">String</value>
	</property>
	<property name="mandatory" value="false" />
	<property name="label" ref="NameLabel" />
</bean> 

<bean id="NameLabel" class="com.flower.docs.gui.api.model.i18n.I18NLabel">
	<property name="languageMap">
		<map>
			<entry>
				<key>
					<ref bean="EN" />
				</key>
				<value>Name</value>
			</entry>
			<entry>
				<key>
					<ref bean="FR" />
				</key>
				<value>Nom</value>
			</entry>
		</map>
	</property>
</bean>
```

## Configuration 

Afin d'associer des définitions de champ à un contexte, elles doivent être regroupées dans un objet ``ComponentPropertiesConfiguration`` :

```xml
<bean id="insertDocumentConfiguration" 
class="com.flower.docs.gui.client.componentclass.ComponentPropertiesConfiguration">
    <property name="propertiesConfiguration">
        <list>
            <ref bean="NameDefinition" />
            <ref bean="Class" />
        </list>
    </property>
</bean>
```
Il faut ensuite définir l'ensemble des associations (contexte / configuration) dans l'objet suivant : 

```xml 
<bean id="componentProperties" 
class="com.flower.docs.gui.client.componentclass.ComponentPropertiesConfigurations">
	<property name="propertiesConfiguration">
		<map>
		  <entry>
			<key>
			  <ref bean="documentInsertContext" />	
			</key>
			<ref bean="insertDocumentConfiguration" />
		   </entry>
		</map>
	</property>
</bean>
```

:::info
**Note** : un seul bean `componentProperties` peut être défini par scope. Dans le cas contraire, le dernier chargé surcharge les autres.
:::
