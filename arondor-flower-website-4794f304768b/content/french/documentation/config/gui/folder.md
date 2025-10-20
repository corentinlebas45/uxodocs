+++
date = "2004-03-28T13:20:01+02:00"
title = "Contenu d'un dossier"
+++


# Contenu d'un dossier

Afin de modifier l'affichage des données des documents, dossiers et dossier virtuels contenus dans un dossier, le bean ``folderSearchCatalog`` est utilisé. Il est composé de 3 propriétés :

* ``documents``, qui permet de configurer l'affichage des documents fils 
* ``folders``, qui permet de configurer l'affichage des dossiers fils 
* ``virtualFolders``, qui permet de configurer l'affichage des dossiers virtuels fils 

Ces 3 propriétés fonctionnent de la même façon :

* une requête ``request``
* une liste de colonnes cachées ``hiddenColumns``

Par défaut les identifiants de documents sont récupérés puis cachés afin de récupérer uniquement les données demandées lors de la recherche


Par défaut dans le fichier ``flower-docs-gui-client.xml``, le catalogue ``folderSearchRequest`` est utilisé et permet l'affichage des noms, des classes de documents, date de création ainsi que la date de dernière modification.

 
__Exemple :__ 

```xml 
<bean id="folderSearchCatalog" class="com.flower.docs.gui.client.search.folder.FolderChildrenTableCatalog" scope="prototype">
	<property name="documents">
		<bean class="com.flower.docs.gui.client.search.document.DocumentTablePresenter">
			<property name="request" ref="folderSearchRequest" />
			<property name="hiddenColumns">
				<list>
					<value>id_value</value>
					<value>status</value>
				</list>
			</property>
		</bean>
	</property>
	<property name="folders">
		<bean class="com.flower.docs.gui.client.search.folder.FolderTablePresenter">
			<property name="request" ref="folderSearchRequest" />
			<property name="hiddenColumns">
				<list>
					<value>id_value</value>
					<value>status</value>
				</list>
			</property>
		</bean>
	</property>
	<property name="virtualFolders">
		<bean class="com.flower.docs.gui.client.search.virtualfolder.VirtualFolderTablePresenter">
			<property name="request" ref="folderSearchRequest" />
			<property name="hiddenColumns">
				<list>
					<value>id_value</value>
					<value>status</value>
				</list>
			</property>
		</bean>
	</property>
</bean>

<bean name="folderSearchRequest" class="com.flower.docs.domain.search.SearchRequest">
	<property name="selectClause">
		<bean class="com.flower.docs.domain.search.SelectClause">
			<property name="fields">
				<list>
					<value>name</value>
					<value>classid</value>
					<value>creationDate</value>
					<value>lastUpdateDate</value>
				</list>
			</property>
		</bean>
	</property>
</bean>
```