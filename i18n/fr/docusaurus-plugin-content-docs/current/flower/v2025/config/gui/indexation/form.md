---
title: Formulaire d'indexation
description: Configurez les formulaires d'indexation
---

Les vues d'indexation sont composées de deux parties : 

* les détails du composant (métadonnées, etc.) 
* le contenu du composant (ARender la visionneuse, tableau de résultats...) 

<br/>

Pour ajouter une configuration, il faut d'abord définir le bean ``componentActivityConfigurations`` et enregistrer la configuration, portée par l'objet ``ComponentActivityConfiguration``, en fonction du [contexte](broken-link.md) : 

__Exemple :__ 

```xml 
<bean id="componentActivityConfigurations" class="com.flower.docs.gui.client.component.activity.ComponentActivityConfigurations">
	<property name="activityConfigurations">
		<map>
			<entry>
				<key>
					<ref bean="documentModifyContext" />
				</key>
				<bean class="com.flower.docs.gui.client.component.activity.ComponentActivityConfiguration">
					<!-- Custom configuration for document modifications -->
				</bean>	
			</entry>
		</map>
	</property>
</bean>
```

# Configuration générale

* ``leftPanelWidthRatio`` : permet de définir le ratio occupé par le panneau de gauche (valeur comprise entre `0.1f` et `1.0f`)
* ``goBackAfterSave`` : détermine si l'utilisateur doit être redirigé ou non après la sauvegarde d'un composant (y compris lors de l'application d'une réponse sur une tâche) 


## Création de tâche

* ``saveBeforeTaskCreation`` : détermine si le composant doit être sauvegardé avant la création d'une tâche à partir de celui-ci 
* ``saveAfterTaskCreation`` : détermine si le composant doit être sauvegardé après la création d'une tâche à partir de celui-ci
* ``allowTaskCreationIfInvalid`` : détermine s'il est possible de créer une tâche à partir d'un composant invalide (si c'est le cas et que la sauvegarde avant/après est activée alors le statut est positionné à ``INVALID``)


## Confirmations

* ``showSaveConfirmationBeforeGo`` : permet de définir l'affichage d'une popup de confirmation de sauvegarde en cas de sortie de l'indexation d'un composant modifié.
<br/> Si la valeur est ``false`` : 
      - la popup de confirmation affichée est une popup de confirmation d'annulation des modifications
      - ``showCancelConfirmation`` est ``false``, aucune popup de confirmation n'est affichée

### Sauvegarde

* ``showSaveConfirmation`` : permet de définir l'affichage ou non d'une popup de confirmation de sauvegarde lors de l'indexation d'un composant
* ``excludedClassesFromSaveConfirmRule`` : permet d'exclure des classes de composants de la règle définie par ``showSaveConfirmation``
   - Si la valeur de ``showSaveConfirmation`` est ``true``, alors la modification d'un composant d'une classe présente dans cette liste n'entrainera pas l'affichage d'une popup de confirmation. 

### Annuler
* ``showCancelConfirmation`` : permet de définir l'affichage ou non d'une popup de confirmation en cas d'annulation des modifications lors de l'indexation d'un composant
* ``excludedClassesFromCancelConfirmRule`` : permet d'exclure des classes de composants de la règle définie par ``showCancelConfirmation``
   - Si la valeur de ``showCancelConfirmation`` est ``true``, alors l'annulation des modifications d'un composant d'une classe présente dans cette liste n'entrainera pas l'affichage d'une popup de confirmation. 

# Configuration spécifique

## Document

* ``minFilesUpload`` : le nombre minimum de fichiers à uploader pour un document
* ``maxFilesUpload`` : le nombre maximum de fichiers à uploader pour un document

:::info 
Il n'est pas recommandé de dépasser un nombre maximum de 10 fichiers pour un document.
:::

## Dossier virtuel
* ``useAlternativeView`` : permet d'utiliser la vue de résultats sous forme de liste plutôt que l'affichage dans la visionneuse
   
### Personnaliser la recherche du dossier virtuel

Il est possible de surcharger la recherche associée à une classe de dossiers virtuels pour masquer des colonnes ou ajouter des critères.

L'identifiant associé au bean de la recherche d'une classe de dossier virtuel `DossierVirtuel` est ``contentDossiervirtuelVirtualFolder``.


## Tâche

* ``allowInvalidSaving`` : permet de définir si le composant peut être enregistré malgré l'invalidité de ses données


__Exemple :__ 

```xml 
<bean id="componentActivityConfigurations" class="com.flower.docs.gui.client.component.activity.ComponentActivityConfigurations">
	<property name="activityConfigurations">
		<map>
			<entry>
				<key>
					<ref bean="documentModifyContext" />
				</key>
				<bean class="com.flower.docs.gui.client.component.activity.ComponentActivityConfiguration">
					<property name="leftPanelWidthRatio" value="0.65f" />
					<property name="showSaveConfirmation" value="true"/>
					<property name="excludedClassesFromSaveConfirmRule">
						<list>
							<bean class="com.flower.docs.domain.common.Id">
								<property name="value" value="MyClassId"/>
							</bean>
						</list>
					</property>
				</bean>	
			</entry>
		</map>
	</property>
</bean>
```