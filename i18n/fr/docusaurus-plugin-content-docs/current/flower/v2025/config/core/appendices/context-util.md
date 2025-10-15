---
date: "2002-03-28T13:20:01+02:00"
title: "ContextUtil"
description: ""
related:
  - name : "Gestionnaire d'opérations Drools"
    rel: '/documentation/config/core/operation/handlers/drools'
  - name : "Gestionnaire d'opérations Script"
    rel: '/documentation/config/core/operation/handlers/script'
---

# Accès aux services

Cet objet expose des méthodes permettant d'accéder aux services exposés par FlowerDocs Core pour interagir avec eux : 

[shortcode]
[shortcode]
|Nom | Description |
|----------|-------------|
|`getDocumentService()` | Récupère le service de gestion de document|
|`getVersionService()` | Récupère le service de gestion des versions d'un document|
|`getFolderService()` | Récupère le service de gestion de dossier|
|`getTaskService()` | Récupère le service de gestion de tâche|
|`getVirtualFolderService()` | Récupère le service de gestion de dossier virtuel|
|`getService(Component component)` | Récupère le service de gestion de composant|
[shortcode]
[shortcode]
|Nom | Description |
|----------|-------------|
|`getClassService(Component component)` | Récupère le service de gestion des classes de composants|
|`getTagClassService()` | Récupère le service de gestion des classes de tags|
|`getAclService()` | Récupère le service de gestion d'ACL|
[shortcode]
[shortcode]
|Nom | Description |
|----------|-------------|
|`getUserService()` | Récupère le service de gestion des utilisateurs|
|`getGroupService()` | Récupère le service de gestion des groupes|
[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`createFact(Fact fact)` | Génère un fait métier|
|`getFeatureService()`| Récupère le service accédant aux informations des fonctionnalités internes de FlowerDocs |
|`getReservationService()`| Récupère le service de gestions des réservations |
[shortcode]
[shortcode]


# Persistance d'un composant

Les méthodes suivantes permettent quant à elles de modifier un composant : 

[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`create(Component component)` | Crée le composant fourni en entrée et retourne celui réellement créé|
|`update(Component component)` | Modifie le composant fourni en entrée|
[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`changeClass(Component component, String classId)` | Modifie la classe du component fourni en entrée et propage uniquement les tags en commun entre la classe initiale et la nouvelle|
[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`getAttachments(Task task)` | Récupère les composants attachés à la tâche|
[shortcode]
[shortcode]

# RuleUtil

Les autres méthodes sont quant à elles exposées dans un second objet appellé `RuleUtil` : 

[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`getClassId(Component component)` | Récupère la valeur de la classe du composant sinon vide|
|`setClassId(Component component, String classId)` | Définit la valeur de la classe du composant|
|`getStatus(Component component)` | Récupère la valeur du statut du composant|
|`setStatus(Component component, Status status)` | Définit la valeur du statut du composant|
[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`getTagValue(Component component, String tagName)` | Récupère la première valeur d'un tag sinon null|
|`getTagValues(Component component, String tagName)` | Récupère la liste de valeurs d'un tag sinon null|
|`setTagValue(Component component, String tagName, String value)` | Définit la valeur d'un tag en modifiant sa valeur s'il existe, sinon en ajoutant un tag|
|`setTagValues(Component component, String tagName, List<String> values)` | Définit la liste de valeurs d'un tag en modifiant sa valeur s'il existe, sinon en ajoutant un tag|
|`setTagReadOnly(Component component, String tagName, boolean readonly)` | Modifie un tag en le mettant en lecture seule ou lecture écriture|
|`addTagValue(Component component, String tagName, String value` | Ajoute une valeur à un tag existant ou ajoute le tag|
|`addTagValues(Component component, String tagName, List<String> values)` | Ajoute une liste de valeurs à un tag existant ou ajoute le tag|
[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`getAnswerId(Task task)` | Récupère la dernière réponse appliquée sur une tâche|
[shortcode]
[shortcode]
| Méthodes | Description |
|-----|-------------|
|`log(String message)` | Affiche dans les logs un message préfixé par `[Drools] ` en `INFO`|
[shortcode]
[shortcode]

