+++
date = "2024-04-08T12:00:00+02:00"
title = "Release notes"
tags = ["release-note"]
banner = "img/banner/edit.png"
 
+++


# Changements importants de la 2.8

## Correctifs de sécurité

Dans l'objectif d'améliorer la sécurité au sein de FlowerDocs, plusieurs correctifs ont été apportés : 


## Améliorations de la recherche

Plusieurs modifications ont été apportées à la recherche afin de faciliter et fluidifier son usage :




</br>

Lorsque les critères sont affichés en colonne :


## SSO


## Administration


## WS


# Faciliter les intégrations


## Recherche plein texte


## Les ScriptOperationHandler



## Les tâches


## Scope de base



# Bug fixes

## Tags


## Menus (Dossiers virtuels)


## Tableau de résultats



## Dossiers (Dossiers virtuels)


## Tâches


## Historique


## Plugin Companion, interface avec la suite Office



## RGAA




## Administration






## WS


# Anomalies connues

## Recherche

* Recherche plein texte - Suite à la restauration d’une version de document, le contenu de la version restaurée n’est pas réindexé donc non recherchable
* L’action “Réinitialiser” ne doit pas être présente sur la pop-up de recherche de document
* Le focus reste présent sur l’action “Réinitialiser” après avoir cliqué dessus


# Versions correctives

## 2.8.1 _03/06/2024_

### :closed_lock_with_key: Sécurité

**Montée de version ARender 4.8.17 afin de bénéficier du correctif pour résoudre une vulnérabilité.**

Cette correction renforce la sécurité de l'application et protège nos utilisateurs contre les menaces potentielles.

Pour plus de détails n'hésitez pas à contacter nos services via notre outil de ticketing !

### ARender

**Montée de version ARender de la version 4.8.13 à la version 4.8.17 afin de bénéficier de toutes les améliorations apportées dans la visionneuse.**

Si vous souhaitez plus d’informations, consultez les releases notes ARender[ici](https://hub.arender.io/fr/technical-blog)


### RGAA


### Bug fixes


Afin d’éviter une surcharge visuelle sur les pop-ups de recherche de document, l’action pour réinitialiser le formulaire de recherche a été enlevée.
<br/><br/>


Il est maintenant possible de rechercher sur le contenu d’un document après en avoir restauré une version.

Dans les versions précédentes du produit, suite à une restauration, le contenu associé n’était pas indexé et donc non recherchable.
<br/><br/>


Voici le nouveau fonctionnement pour respecter les règles RGAA :
la vérification des tâches existantes est lancée lorsque le focus est sur le bouton “Vérifier” de la pop-up.

La pop-up est fermée si l’utilisateur utilise la touche “Echap” ou si le focus est sur le bouton “Fermer”.

Si le focus est dans un champ de la pop-up alors lors de l’utilisation de la touche entrée l’action est réalisée dans le champ (validation de la saisie, déroulement de la liste..)
<br/><br/>


Lorsqu’un document est consulté dans la visionneuse en mode externe, c'est-à-dire sans avoir les formulaires FlowerDocs affichés, les droits utilisateurs paramétrés dans FlowerDocs sont à nouveau pris en compte.

Ex: un utilisateur qui a le droit de télécharger ou imprimer le document peut à nouveau le faire.


## 2.8.2 _27/06/2024_


## 2.8.3 _31/12/2024_


## 2.8.4 _04/03/2025_

