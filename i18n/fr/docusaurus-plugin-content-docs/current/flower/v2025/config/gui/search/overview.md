+++
date = "2004-03-28T13:20:01+02:00"
title = "Pour commencer"
+++


:::info
Les formulaires de recherches sont des modèles de recherche pré-configurés et mis à disposition des utilisateurs finaux.
:::

# Présentation 
Un formulaire de recherche permet de configurer entièrement un écran de recherche.
Ceux-ci sont associés à des équipes d'un scope afin de personnaliser l'affichage présenté à l'utilisateur.

<br/>
__Exemple :__ Un formulaire de recherche ``RechercheAgent`` basique dont le titre est Recherche de dossier agent avec une description 

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
					<property name="value" value="Rechercher de dossier agent"/>
				</bean>
			</list>
		</property>
		<property name="description">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN"/>
					<property name="value" value="Do not fill criteria to find all agent folders"/>
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR"/>
					<property name="value" value="Ne remplissez aucun critère pour retrouver l'ensemble des dossiers agents"/>
				</bean>
			</list>
		</property>
</bean>
```

<br/>

# Définir l'accès

Un formulaire de recherche peut être associé à une équipe d'utilisateur à travers une propriété qui peut être définie via :

* le CLM et le fichier `scope.xml` : 
[shortcode]
```xml
<profiles>
	<name>ALL_USERS</name>
	<Description>User profile</Description>
	<principals>ou=users,dc=arondor,dc=com</principals>
	<properties>
		<ns3:name>search.template</ns3:name>
		<ns3:value>RechercheAgent(fr=Recherche Agent,en=Agent search)</ns3:value>
	</properties>
</profiles>
```
[shortcode]
* la console d'administration : dans la section `Sécurité > Equipes > Propriétés`, ajouter une propriété `Formulaire de recherche`
 
<br/> 
Cette propriété prend pour valeur : `<identifiant>(<langue>=<libellé>,<langue2>=<libellé2>)` soit par exemple `template_id(fr=libellé du formulaire,en=form 	label)`

<br/>
:::info
Si aucun libellé n'est renseigné, le titre provenant du formulaire de recherche sera utilisé. 
:::