+++
date = "2019-06-06"
title = "Liste de contrôle d'accès"
Description = "Sécurisez l'accès aux composants"
Intro = "Une liste de contrôle d'accès (ACL) définit une liste d'entrées (ACE) permettant d’attribuer des permissions à des identités."
+++


# Les permissions

Les permissions suivantes s'appliquent à l'ensemble des composants : 

|Permission                |	Description|
|--------------------------|-------------------------|
| `CREATE`                  |	Autorise la création |
| `READ` | Autorise l'accès en lecture|
| `UPDATE` | Autorise la modification|
| `DELETE`| Autorise la suppression|
| `READ_HISTORY`| Accès à l'historique|
| `READ_TASK_HISTORY`| Accès au suivi des tâches|

## Les permissions propres aux documents	

|Permission                |	Description|
|--------------------------|-------------------------|
| `READ_CONTENT`  | Accès en lecture au contenu|
| `UPDATE_CONTENT`  | Modification du contenu|
| `DOWNLOAD_CONTENT`  | Téléchargement du contenu (visionneuse) |
| `PRINT`  | Impression (visionneuse) |
| `CREATE_ANNOTATION`  | Création d'annotation (visionneuse) |
| `READ_ANNOTATION`  | Lecture des annotations existantes (visionneuse) |
| `BUILD_NEW_DOCUMENT`  | Activation du découpage de document (visionneuse) |
| `OBFUSCATE`  | Création d'annotations d'obfuscation et lecture des données masquées (visionneuse) |

:::info
**Note** : les annotations sont stockées sous forme de document dans FlowerDocs. 

Pour qu'un utilisateur soit habilité à créer des annotations, il doit disposer :

* des droits `READ_ANNOTATION` et `CREATE_ANNOTATION` sur la classe de document métier
* du droit `CREATE` sur la classe de document `Annotation`.

Pour qu'un utilisateur soit habilité à voir les annotations, il doit disposer : 

* du droit `READ_ANNOTATION` sur la classe de document métier
* du droit `READ` sur la classe de document `Annotation`.

**Cas particulier pour les obfuscations** : 
Pour qu'un utilisateur soit habilité à obfusquer les documents, il doit disposer des permissions `CREATE_ANNOTATION` et `OBFUSCATE` sur la classe de document métier.

:::

:::info
**Rotation de page**:  
Tous les utilisateurs peuvent effectuer des rotations sur les pages. Ces rotations sont automatiquement enregistrées pour être accessible par les autres utilisateurs.
:::

## Les permissions propres aux tâches

|Permission                |	Description|
|--------------------------|-------------------------|
| `APPROPRIATE`  | S'approprier une tâche non assignée|
| `APPROPRIATE_ALREADY_ASSIGNED`  | S'approprier une tâche déjà assignée |
| `ASSIGN`  | Assigner une tâche à un utilisateur |
| `APPLY_ANSWER`  | Appliquer une réponse |
| `UPDATE_CONTENT`| Modification des pièces jointes |
| `DELETE_CONTENT`| Suppression d'une pièce jointe |
| `READ_CONTENT`| Visualisation des pièces jointes |

## Les permissions propres aux dossiers virtuels	

|Permission                |	Description|
|--------------------------|-------------------------|
| `DOWNLOAD_CONTENT`  | Accès à l'export en zip des documents contenus dans le dossier|

# Les identités

Au sens FlowerDocs, une identité est soit un utilisateur, un groupe ou une équipe. La notion d’équipe a été introduite afin de centraliser et mutualiser la gestion des autorisations communes à une ou plusieurs identités.

# ACL Proxy

:::warning
Cette fonctionnalité est en beta. Pour toute volonté d'intégration utilisant les Proxy d'ACl, nous vous invitons à contacter l'équipe FlowerDocs afin de vous accompagner pour trouver une solution optimale à votre besoin.
:::

Les objets de type ``ACLProxy`` permettent d'ajouter un aspect métier à la gestion des habilitations.

Un proxy est également un ``SecurityObject`` permettant de définir la sécurité à appliquer sur un composant. Il s'appuie sur des conditions pour déterminer quelle est l'ACL à appliquer sur un composant.

__Exemple :__

Pour une classe de documents `Facture`, le proxy suivant pourrait être utilisé : 

* si montant < 100€ : tout le monde a le droit de voir / modifier le document
* si montant > 100€ : tout le monde a le droit de voir en lecture seule le document


__Schéma__


		
                          SecurityObject
                                |
             _______________________________
            |                               |
     AcessControlList  <-----            ACLProxy
            |                |              |
            | 1:N            |              | * rules : List<ACLRule>  ---
            |                |                                           |
    AccessControlEntry       |                                           |
                             |                                           |
                             |           ACLRule  <-----------------------
                             |              |
                             |              | * conditions : List<String>
                             |____1:1_______| * aclId : Id



## Règle par défaut

La définition d'une entrée sans condition dans un proxy permet de définir quelle est l'ACL à évaluer pour créer un composant depuis FlowerDocs GUI. 

# Rôles

Les rôles donnent accès à des fonctionnalités FlowerDocs à travers la notion d'équipe. 

Pour affecter un rôle à un utilisateur : 

* créez une équipe dont l'identifiant est le nom du rôle
* ajoutez des utilisateurs dans une équipe 


|Rôle                |	Description|
|--------------------------|-------------------------|
| `ADMIN`  | Administre un scope|
| `DOCUMENT_CREATOR`  | Accède à l'onglet Insérer |
