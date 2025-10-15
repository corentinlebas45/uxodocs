+++
date = "2001-03-03T13:20:01+02:00"
title = "Raccourcis"
+++

# Raccourcis de création

Le bouton `Créer` présent dans la barre de menu permet de faciliter l'accès à la création d'un composant d'une classe donnée.

Ce bouton se configure à l'aide d'objet de type ``ComponentReference`` permettant de définir :
 
* ``category`` : le type d'objet à créer (document, dossier, tâche...)
* ``id`` : l'identifiant de la classe 
 
__Exemple :__ Référence d'un document de classe `DocumentAgent`

```xml
<bean id="documentAgentRef" class="com.flower.docs.domain.component.ComponentReference">
	<property name="category">
		<value type="com.flower.docs.domain.component.Category">DOCUMENT</value>
	</property>
	<property name="id">
		<bean class="com.flower.docs.domain.common.Id">
			<property name="value" value="DocumentAgent" />
		</bean>
	</property>
</bean>	
```


Cette référence doit ensuite être ajoutée dans le bouton raccourci. Pour cela, il est nécessaire d'éditer la configuration du bean ``componentCreationShortcuts`` 
(ou le définir s'il n'existe pas) tel que : 

```xml 
<bean id="componentCreationShortcuts" class="java.util.ArrayList">
   <constructor-arg>
     <list>
       <ref bean="documentAgentRef"/>
     </list>
   </constructor-arg>
</bean>
```


Par défaut, la création de document est effectuée en passant par la place d'insertion de document puis celle d'indexation, ce qui permet d'afficher le contenu du document lors de son indexation. 

Il est également possible d'avoir un comportement similaire aux autres types de composants et créer ceux-ci en popup en renseignant la propriété d'une équipe ``shortcut.document.creation.popup`` avec la valeur ``true``.
