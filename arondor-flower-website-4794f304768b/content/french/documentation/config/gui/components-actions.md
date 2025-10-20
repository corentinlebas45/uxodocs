+++
date = "2003-03-28T13:20:01+02:00"
title = "Actions liées aux composants"
draft = "true"
+++


# Actions liées aux composants

## Actions personnalisées

Il est possible d'ajouter de(s) action(s) personnalisée(s) sur les composants.


### Actions basées sur une URL
 
Une action se compose de : 

* un nom, une icône et un titre servants à la présentation.
* une liste de classes de composants, de phases et d'identités qui vont conditionner l'affichage de l'action
* une URL cible qui va définir la page ouverte dans une popup. 

Si la liste d'identités n'est pas renseignée, alors l'action sera visible par tous.

Plusieurs variables sont mises à disposition pour construire dynamiquement l'URL à ouvrir :  

* l'identifiant de l'utilisateur connecté : ``user.name``
* les autorités de l'utilisateur connecté : ``user.authorities``
* un token utilisateur : ``user.token``
* la valeur d'un tag : ``tags.tagName`` (remplacez ``tagName`` par le nom du tag souhaité)
* l'identifiant du composant ouvert : ``component.id``


```xml 
<bean id="openARender" class="com.flower.docs.gui.client.action.CustomizedAction">
	<property name="name" value="VisualizeDocument" />
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Document visualization"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Visualisation du document"/>
			</bean>
		</list>
	</property>
	<property name="icon" value="fas fa-eye" />
	<property name="url" value="./ARender.html?scope=GEC&amp;docId=${component.id_value}" />
	<property name="allowedClasses">
		<list>
			<bean class="com.flower.docs.domain.common.Id">
				<property name="value" value="CourrierEntrant" />
			</bean>
		</list>
	</property>
	<property name="phase">
		<list>
			<value type="com.flower.docs.domain.componentclass.Phase">INSERT</value>
			<value type="com.flower.docs.domain.componentclass.Phase">MODIFY</value>
		</list>
	</property>
	<property name="principal">
		<list>
			<value>ADMIN</value>
			<value>userId</value>
		</list>
	</property>
</bean>
```
	
Pour que cette action soit disponible, elle doit être définie dans le catalogue d'action dédié :
	
```xml 
<bean id="customizedActions" class="com.flower.docs.gui.client.action.CustomizedActionCatalog">
	<property name="actions">
		<list>
			<ref bean="openARender" />
		</list>
	</property>
</bean>
```


### Actions basées sur une fonction JavaScript

Ce type d'action permet d'exécuter une fonction JavaScript.
Pour utiliser ce type d'action, la configuration nécessaire est la suivante : 

* ``name`` : Nom de l'action
* ``buttonStyle`` : Style de l'action correspondant à une icone FontAwesome
* ``title`` : Libellé affiché dans le conteneur d'action
* ``javaScriptFunction`` : Nom de la fonction JavaScript à exécuter lorsque l'utilisateur clique sur l'action 

La fonction JavaScript doit prendre en paramètre la catégorie de composant, la phase d'ouverture et un tableau d'identifiants de composant : 

```javascript
function exportToCRM(category, phase, componentIds){
	// Ajax request allowing to export a component to an external CRM
}
```

__Attention :__ Si cette fonction est définie dans un fichier JavaScript personnalisé, il est nécessaire d'enregistrer cette fonction au niveau de l'objet ``window`` :

```javascript
window.exportToCRM = exportToCRM;

function exportToCRM(category, phase, componentIds) {
	console.log("Exporting category=" + category + ", phase=" + phase + ", component ids=" + componentIds);
}
```

__Exemple :__ Définition d'une action permettant d'exécuter une fonction JavaScript

```xml 
<bean id="exportToCRM" class="com.flower.docs.gui.client.component.action.JavaScriptComponentAction">
	<constructor-arg value="ExportToCRM" />
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Export to CRM"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Exporter dans le CRM"/>
			</bean>
		</list>
	</property>	
	<property name="buttonStyle" value="far fa-file" />
	<property name="javaScriptFunction" value="exportToCRM" />
</bean>
```


### Actions basées sur une activité 

Ce type d'action va permettre d'ouvrir différents écrans dans une popup:

* Ecran de création avec vérification
* Ecran de modification de composants

La popup est personnalisable de la façon suivante : 

* ``icon`` :  Icone de la popup 
* ``style`` : Style de la popup
* ``title`` : Titre de la popup
* ``description`` : Description de la popup
* ``place`` : La place correspondant à l'écran voulu

Le titre du bouton va être défini en le passant en paramètre à l'action. 

#### Ecran de création avec vérification

La place de création avec vérification va être construite à l'aide d'un identifiant de template de recherche et de la catégorie de composant ci-dessous :

```xml 
<bean class="com.flower.docs.gui.client.activity.action.ActivityActionPresenter">
	<constructor-arg type="java.util.List">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Create envelope"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Créer une enveloppe"/>
			</bean>
		</list>
	</constructor-arg>
	<constructor-arg>
		<bean class="com.flower.docs.gui.client.search.CreateWithVerificationPlace">
			<property name="id">
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="EnvelopeSearch" />
				</bean>
			</property>
			<property name="category">
				<value type="com.flower.docs.domain.component.Category">TASK</value>
			</property>
		</bean>
	</constructor-arg>
	
	<property name="style" value="envelope" />
	<property name="icon" value="envelope fas fa-envelope" />
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Envelope creation"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Création d'enveloppe"/>
			</bean>
		</list>
	</property>
	<property name="description">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Before creating an envelope, please verify if it does not exist before"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Avant de créer une enveloppe, merci de vérifier que celle-ci n'existe pas déjà"/>
			</bean>
		</list>
	</property>	
</bean>
```

#### Ecran de modification d'un composant

Une place de modification de composant va permettre de visualiser les métadonnées de celui-ci. Toutes ces places sont construites de la même façon, avec l'identifiant du composant et la propriété ``supportVisualisation`` (sauf pour les dossiers).

*Dossier virtuel*

```xml 
<bean class="com.flower.docs.gui.client.activity.action.ActivityActionPresenter">
	<constructor-arg type="java.util.List">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Collective tab"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Bannette collective"/>
			</bean>
		</list>
	</constructor-arg>
	<constructor-arg>
		<bean class="com.flower.docs.gui.client.virtualfolder.modify.ModifyVirtualFolderPlace">
			<constructor-arg>
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="My_Virtual_Folder_Id" />
				</bean>
			</constructor-arg>
			<property name="supportVisualisation" value="false" />
		</bean>
	</constructor-arg>
	<property name="style" value="bannette" />
	<property name="icon" value="bannette fas fa-envelope" />
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Collective tab"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Bannette collective"/>
			</bean>
		</list>
	</property>
</bean>
```

*Tâche*
	
```xml 
<bean class="com.flower.docs.gui.client.activity.action.ActivityActionPresenter">
	<constructor-arg type="java.util.List">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Collective tab"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Bannette collective"/>
			</bean>
		</list>
	</constructor-arg>
	<constructor-arg>
		<bean class="com.flower.docs.gui.client.task.modify.ModifyTaskPlace">
			<constructor-arg>
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="My_Task_Id" />
				</bean>
			</constructor-arg>
			<property name="supportVisualisation" value="false" />
		</bean>
	</constructor-arg>
</bean>
```

*Document*
	
```xml 
<bean class="com.flower.docs.gui.client.activity.action.ActivityActionPresenter">
		<constructor-arg type="java.util.List">
			<list>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="EN"/>
					<property name="value" value="Bill"/>
				</bean>
				<bean class="com.flower.docs.domain.i18n.I18NLabel">
					<property name="language" value="FR"/>
					<property name="value" value="Facture"/>
				</bean>
			</list>
		</constructor-arg>
		<constructor-arg>
		<bean class="com.flower.docs.gui.client.document.modify.ModifyDocumentPlace">
			<constructor-arg>
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="My_Document_Id" />
				</bean>
			</constructor-arg>
			<property name="supportVisualisation" value="false" />
		</bean>
	</constructor-arg>
</bean>
```

*Dossier*
	
```xml 
<bean class="com.flower.docs.gui.client.activity.action.ActivityActionPresenter">
	<constructor-arg type="java.util.List">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="My bills"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Mes factures"/>
			</bean>
		</list>
	</constructor-arg>
	<constructor-arg>
		<bean class="com.flower.docs.gui.client.folder.modify.ModifyFolderPlace">
			<constructor-arg>
				<bean class="com.flower.docs.domain.common.Id">
					<property name="value" value="My_folder_Id" />
				</bean>
			</constructor-arg>
		</bean>
	</constructor-arg>
</bean>
```
	
## Configuration en fonction du contexte 

### Définition du contexte

Le formulaire d'un composant a plusieurs conteneurs d'action personnalisables : 

* celui contenant les actions natives (supprimer, attacher, télécharger...) : ``headerActions``
* celui dédié au déclenchement de tâche : ``taskActions`` 

 
La configuration par défaut d'un conteneur peut être modifiée en définissant un bean Spring Beans dont l'identifiant est composé de la manière suivante :
 
* Nom de l'objet graphique : ``headerActions``, ``taskActions`` 
* Type de composant : ``Document``, ``Task``, ``Folder`` ou ``VirtualFolder``
* Phase : ``Insert``, ``ReadOnly``, ``Modify``

__Exemple :__ Dans le cas de la modification des actions lors de la modification d'un composant de type *Document*, le nom du bean à définir est `headerActionsDocumentModify``.


### Ajout d'une action personnalisée

Afin d'ajouter une action personnalisée dans un conteneur d'action, il est nécessaire de : 

* connaitre l'identifiant du conteneur en fonction du contexte (cf. partie ci-dessus)
* repérer le bean en fonction de cet identifiant dans la configuration XML ou le définir tel que : 

```xml 
<bean id="identifiant-du-conteneur" class="classe-definissant-le-type-de-conteneur"
 scope="prototype">
	<property name="actions">
		<list>
		</list>
	</property>
</bean>
```

Pour ajouter une action personnalisée, il est ensuite nécessaire de la référencer à l'aide de son identifiant et de la balise ``<ref bean="identifiant-action"/>``.

--

__Exemple :__ Ajout d'une action personnalisée ``exportToCRM``  lors de la modification d'un document

```xml 
<bean id="headerActionsDocumentModify" class="com.flower.docs.gui.client.component.action.ComponentHeaderActions" 
scope="prototype">
	<property name="actions">
		<list>
			<bean class="com.flower.docs.gui.client.component.action.DeleteComponentAction" />
			<ref bean="exportToCRM"/>
		</list>
	</property>
</bean>
```


### Déclenchement de tâche

Un type de widget graphique permet l'ajout d'actions permettant la création de tâche depuis un composant: ``taskActions``.

Les actions sont affichées seulement  :

* si l'utilisateur a la permission ``CREATE`` sur le composant
* si la classe du composant est autorisée en tant que fille de la classe de tâches à créer   


Deux objets sont mis à disposition : 

* par défaut : l'ensemble des tâches que l'utilisateur a la possibilité de créer à partir du composant ouvert

* ``com.flower.docs.gui.client.component.action.CustomComponentActionsPresenter`` pour définir manuellement les tâches que les utilisateurs pourront créer. 

Dans l'exemple ci-dessous, les classes de tâches ``Move`` et ``Copie`` ont été définies : 

```xml 
<!-- taskActions widget configuration int document modification context --> 
<bean id="taskActionsDocumentModify" class="com.flower.docs.gui.client.component.action.CustomComponentActionsPresenter" 
  scope="prototype">
	<property name="actions">
		<list>
			<bean class="com.flower.docs.gui.client.task.list.CreateTaskAction">
				<constructor-arg value="Move" />
			</bean>
			<bean class="com.flower.docs.gui.client.task.list.CreateTaskAction">
				<constructor-arg value="Copie" />
			</bean>
		</list>
	</property>
</bean>
```


### Activation
	
Les actions peuvent posséder une stratégie d'activation permettant de définir sur quels critères une action doit être activée ou désactivée.
Certaines actions en possèdent une par défaut comme celles permettant la création de tâches, d'autres non.

Différentes stratégies sont fournies nativement. 

<br/>

#### Liée à une permission


* En fonction d'une permission : ``ComponentPermissionEnablingStrategy`` afin de **n'**activer une action **que** si l'utilisateur connecté possède la permission sur le composant

__Exemple :__ Définition d'une stratégie n'activant une action que si l'utilisateur à la permission ``UPDATE_CONTENT`` sur le composant ouvert

```xml 
<bean class="com.flower.docs.gui.client.component.action.ComponentPermissionEnablingStrategy">
	<constructor-arg>
		<value type="com.flower.docs.domain.acl.Permission">UPDATE_CONTENT</value>
	</constructor-arg>
</bean>	
```

<br/>	
#### En fonction des tags

La stratégie ``TagBasedEnablingStrategy`` peut être utilisée afin de restreindre l'activation d'une action en fonction des tags d'un composant.

__Exemple 1 :__ Définition d'une stratégie n'activant une action que si la valeur du tag ``Assignee`` est égale à l'identifiant de l'utilisateur connecté

```xml
<bean class="com.flower.docs.gui.client.component.action.TagBasedEnablingStrategy">
	<property name="requiredTags">
		<list>
			<bean class="com.flower.docs.domain.component.Tag">
				<property name="name" value="Assignee" />
				<property name="value">
					<list>
						<value>${user.id}</value>
					</list>
				</property>
			</bean>
		</list>
	</property>
</bean>
```


__Exemple 2 :__ Définition d'une stratégie n'activant une action que si le composant ouvert possède une autre valeur que celles définies pour le tag ``Assignee`` 

```xml
<bean class="com.flower.docs.gui.client.component.action.TagBasedEnablingStrategy">
	<property name="valueOperator">
		<value type="com.flower.docs.domain.search.Operators">DIFFERENT</value>
	</property>		
	<property name="requiredTags">
		<list>
			<bean class="com.flower.docs.domain.component.Tag">
				<property name="name" value="Assignee" />
				<property name="value">
					<list>
						<value>Comptables</value>
						<value>RH</value>
					</list>
				</property>
			</bean>
		</list>
	</property>
</bean>
```

<br/>

La stratégie ``EmptyTagEnablingStrategy`` peut être utilisée afin de **n'**activer une action **que** si le composant possède un tag donné vide.

__Exemple :__ Définition d'une stratégie n'activant une action que si le composant ouvert possède le tag ``Assignee`` sans aucune valeur 

```xml
<bean class="com.flower.docs.gui.client.component.action.EmptyTagEnablingStrategy">	
	<property name="tag" value="Assignee"/>
</bean>
```




#### En fonction de plusieurs ``EnablingStrategy`` 


La stratégie ``EnablingStrategyWrapper`` afin de composer une stratégie complexe basée sur plusieurs critères.

__Exemple :__ Définition d'une stratégie n'activant une action que si le composant ouvert possède le tag ``Assignee`` sans aucune valeur ainsi que la permission ``UPDATE_CONTENT``  

```xml
<bean class="com.flower.docs.gui.calyx.action.EnablingStrategyWrapper">	
	<property name="strategies">
		<list>
			<bean class="com.flower.docs.gui.client.component.action.EmptyTagEnablingStrategy">	
				<property name="tag" value="Assignee"/>
			</bean>
			<bean class="com.flower.docs.gui.client.component.action.ComponentPermissionEnablingStrategy">
				<constructor-arg>
					<value type="com.flower.docs.domain.acl.Permission">UPDATE_CONTENT</value>
				</constructor-arg>
			</bean>
		</list>
	</property>
</bean>
```


<br/>

Une stratégie d'activation se positionne sur une action grâce à la propriété ``enablingStrategy``. 
Dans le cas où une action n'a pas de stratégie d'activation, celle de son conteneur est utilisée. Cette dernière peut également être surchargée grâce à la même propriété.   



__Exemple :__ 

```xml 
<bean id="exportToCRM" class="com.flower.docs.gui.client.component.action.JavaScriptComponentAction">
	<constructor-arg value="ExportToCRM" />
	<property name="title">
		<list>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="EN"/>
				<property name="value" value="Export to CRM"/>
			</bean>
			<bean class="com.flower.docs.domain.i18n.I18NLabel">
				<property name="language" value="FR"/>
				<property name="value" value="Exporter dans le CRM"/>
			</bean>
		</list>
	</property>	
	<property name="buttonStyle" value="far fa-file" />
	<property name="javaScriptFunction" value="exportToCRM" />
	
	<property name="enablingStrategy" ref="updateContenPermissionEnabling" />
</bean>
	
<bean id="updateContenPermissionEnabling" 
class="com.flower.docs.gui.client.component.action.ComponentPermissionEnablingStrategy">
	<constructor-arg>
		<value type="com.flower.docs.domain.acl.Permission">UPDATE_CONTENT</value>
	</constructor-arg>
</bean>
```

#### En fonction des tags dates



La stratégie ``DateTagEnablingStrategy`` est utilisée afin d'activer une action seulement si le composant possède un tag de type Date dont la valeur correspond à la règle définie.
Pour activer cette action, il faut utiliser la configuration suivante :

* ``condition`` : Tag de type Date sur lequel la stratégie d'activation est basée. Il est possible de renseigner la valeur **${dayDate}** correspondant à la date du jour
* ``shouldBeLess`` : Précise si la date doit être inférieure à la date renseignée (false par défaut)
* ``daysInterval`` : Le nombre de jours de tolérance. Si non renseignée, la valeur du tag du composant sera évaluée par rapport à la valeur de la condition et la valeur de la propriété ``shouldBeLess``

__Exemple :__ Définition d’une stratégie n’activant une action que si le composant ouvert possède le tag ``ReceivedDate`` 
qui est supérieur à la date du jour.


```xml 
<bean id="dateEnablingStrategy" class="com.flower.docs.gui.client.component.action.DateTagEnablingStrategy">
	<property name="condition">
		<bean class="com.flower.docs.domain.component.Tag">
			<property name="name" value="ReceivedDate" />
			<property name="value" >
				<list>
					<value>${dayDate}</value>
				</list>
			</property>				
		</bean>
	</property>
	<property name="shouldBeLess" value="false"/>
</bean>
```

### Redirection

En fonction d'une action ou d'un conteneur d'action, une redirection peut être configurée. Il s'agit de définir vers quel écran l'utilisateur sera redirigé après l'exécution d'une action.

Pour appliquer une configuration particulière, il est nécessaire de définir la propriété ``redirectionStrategy`` comme suit :  

* Pour aucune redirection : ``NoRedirectionStrategy`` 
* Rechargement de l'écran courant : ``ReloadRedirectionStrategy``
* Aller à l'écran précédent : ``GoBackRedirectionStrategy``
* Aller sur un écran particulier : ``PlaceRedirectionStrategy``
 
 
 
__Exemple :__ Rediriger l'utilisateur sur l'écran précédent lorsqu'il crée une tâche depuis l'écran d'indexation d'un document


```xml 
<bean id="taskActionsDocumentModify" class="com.flower.docs.gui.client.task.list.ComponentTaskActionsPresenter" 
scope="prototype">
	<property name="redirectionStrategy" ref="goBackRedirection" />
</bean>
<bean id="goBackRedirection" class="com.flower.docs.gui.client.action.redirect.GoBackRedirectionStrategy" />
```
