---
title: Menus contextuels
---

Lors du clic droit sur un ou plusieurs résultats de recherche, un menu contextuel apparaît. Celui-ci présente à la fois : 

* Les actions natives (ouvrir, visualiser...)
* Les tâches que l'on peut créer à partir des résultats sélectionnés

Ces actions sont également ajoutés dans l'en-tête du tableau de résultats de recherche. 

Pour désactiver une action native, il est possible d'ajouter la propriété  ``menu.contextual.${category}.hidden.actions`` où ``${category}`` est la catégorie de composant concerné. S'il s'agit de désactiver l'action `Télécharger` du menu contextuel par défaut des documents, ajouter la propriété  ``menu.contextual.document.hidden.actions=DOWNLOAD_CONTENT``.


# Déterminer l'identifiant du bean Spring
 
Pour aller plus loin et personnaliser le menu contextuel, il est possible de définir les actions s'y trouvant. 

Pour cela, il est tout d'abord nécessaire de définir quel menu contextuel configurer : 

* pour quelle catégorie de composant ? 
* pour quel contexte ? Une recherche ? Un dossier ? Un dossier virtuel ? 

Quelques exemples ci-dessous de clé à utiliser en fonction du contexte : 

* ``contextualMenuDocument`` : pour définir manuellement le menu contextuel par défaut
* ``contextualMenuDefaultsearchDocument``: pour définir le menu contextuel d'un formulaire de recherche spécifique ``DefaultSearch``
* ``contextualMenuDossierAgentDocument``: pour définir le menu contextuel des documents contenus dans un dossier virtuel de classe ``DossierAgent``


# Déterminer la classe du bean Spring

En fonction de la catégorie de composant, utiliser la classe Java indiquée : 

* document : ``com.flower.docs.gui.client.search.document.DocumentContextualMenuPresenter``
* tâche : ``com.flower.docs.gui.client.search.task.TaskContextualMenuPresenter``
* dossier : ``com.flower.docs.gui.client.search.folder.FolderContextualMenuPresenter``
* dossier virtuel : ``com.flower.docs.gui.client.search.virtualfolder.VirtualFolderContextualMenuPresenter``


__Exemple :__ Définition du menu contextuel pour le formulaire de recherche de document ``DefaultSearch`` 

```xml      
<bean id="contextualMenuDefaultsearchDocument" 
class="com.flower.docs.gui.client.search.document.DocumentContextualMenuPresenter" scope="prototype">
</bean>
```

# Définir les actions personnalisées

Pour définir des actions, il est nécessaire de : 

* les définir dans le contexte Spring. Pour cela, se réferer à [cette partie de la documentation](broken-link.md).
* les référencés dans le menu contextuel adéquat. 

__Exemple :__ Ajout d'une action JavaScript ``exportToCRM`` dans le menu contextuel du formulaire de recherche de document ``DefaultSearch`` 

```xml   
<bean id="contextualMenuDefaultsearchDocument" 
class="com.flower.docs.gui.client.search.document.DocumentContextualMenuPresenter" scope="prototype">
	<property name="actions">
		<list>
			<ref bean="exportToCRM" />
		</list>
	</property>
</bean>
```