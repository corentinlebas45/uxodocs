+++
date = "2004-02-03"
title = "Les tâches & processus"
Description = "Manipuler des tâches en JavaScript"
Intro = "" 
+++


# Manipuler les pièces jointes

Afin de contextualiser le traitement d'une tâche, des composants peuvent être attachés à une tâche. C'est la notion de pièce jointe. 
Les pièces jointes d'une tâche peuvent être manipulées à l'aide de l'API JS. 

L'ajout de composants en tant que pièces jointes d'une tâche peut être réalisé à l'aide des deux fonctions suivantes : 

* `addAttachment(attachmentId, componentId, category)` pour attacher un seul composant à partir de son identifiant `componentId`
* `addAttachments(attachmentId, componentIds, category)` pour attacher plusieurs composants à partir de leur identifiant fourni dans un tableau `componentIds`

L'utilisation de ces fonctions nécessitent en entrée l'identifiant de la pièce jointe et la catégorie de composant attendue (définies sur la classe de tâche).
Les modifications des pièces jointes d'une tâche nécessitent d'être sauvegardées à l'aide des fonctions `create` ou `update` exposées par l'objet `JSAPI.get().task()`.

[shortcode]
[shortcode]
JSAPI.get().task().get([id], function (tasks) {
    let task = tasks[0];
    task.addAttachments('Appendices', documentId, 'DOCUMENT');
    JSAPI.get().task().update([task], function (updated) {
        console.info('The document has been attached to task');
    });
});
[shortcode]
[shortcode]


Sur le même principe, la fonction suivante permet de récupérer les pièces jointes existantes : 

* `getAttachmentIds(attachmentId)` pour récupérer les identifiants de composant liés à cette pièce jointe.

L'argument `attachmentId` de ces différentes fonctions est obligatoire. Il correspond à l'identifiant affiché pour le type de pièce jointe que l'on veut ajouter ou récupérer. Il doit être donné sous la forme d'une chaîne de caractères.

# Répondre à des tâches

La notion de réponses à une tâche permet aux utilisateurs de prendre des décisions sur le traitement de tâches. 
Pour chaque décision prise, un comportement spécifique peut être ainsi ajouté pour prendre en compte cette décision et appliquer le traitement adéquat. 

Une réponse peut être appliquée à une ou plusieurs tâches à l'aide de la fonction `answer(ids, answer)` avec pour paramètres : 

* un tableau d'identifiants de tâches
* un objet `Answer` (ou `ReasonedAnswer`) représentant la réponse à appliquer

[shortcode]
[shortcode]
var taskAPI = JSAPI.get().task();
taskAPI.answer([id], new Answer("Validate"), function(){
    JSAPI.get().getNotificationAPI().sendInformation("Answer was applied");
});
[shortcode]
[shortcode]

# Assignation de tâches

## Assigner des tâches

Une tâche doit être assignée à un utilisateur afin d'être traitée. FlowerDocs met ainsi à disposition plusieurs mécanismes d'assignation dont fait partie l'API JS. 
La fonction `assign(ids, userId)` permet d'assigner une ou plusieurs tâches à un utilisateur à l'aide de : 

* un tableau d'identifiants de tâches
* l'identifiant de l'utilisateur auquel assigner les tâches

[shortcode]
[shortcode]
JSAPI.get().task().assign([id], 'sarah.hubert', function () {
    console.info('The task ' + id + ' has been assigned');
});
[shortcode]
[shortcode]

L'utilisateur auquel une tâche est assignée peut être récupéré grâce à la fonction `getAssignee()` exposée sur l'objet `Task`.

## Réagir à une assignation 

L'assignation d'une tâche à un utilisateur peut nécessiter dans certains cas des actions au niveau de l'interface graphique. 
Pour cela, l'API JS met à disposition des hooks permettant de réagir au lancement du processus d'assignation par une action native de l'interface graphique : 

* depuis un formulaire d'indexation avec les actions d'assignation et d'appropriation
* depuis le menu contextuel ouvert à partir de résultats de recherche avec ces mêmes actions

<br/>
Ces hooks permettent de réagir ou interrompre le processus en réagissant avant l'envoi de la requête à FlowerDocs Core ou après. 
Un hook d'assignation est une fonction prenant en entrée les trois paramètres suivants (fournis par FlowerDocs GUI) : 

* un tableau des tâches à assigner
* l'identifiant de l'utilisateur auquel assigner les tâches
* un objet `executor` permettant de bloquer l'exécution de l'assignation et/ou de la reprendre par la suite avec son contexte




[shortcode]
[shortcode]
JSAPI.get().task().registerBeforeAssign(function(tasks, assignee, executor){
  // Action à effectuer avant l'assignation
});
[shortcode]
[shortcode]
JSAPI.get().task().registerAfterAssign(function(tasks, assignee, executor){
  // Action à effectuer après le processus d'assignation
});
[shortcode]
[shortcode]

L'objet `executor` fourni en entrée du hook permet de bloquer le processus d'assignation afin d'attendre l'exécution d'un traitement asynchrone. 
En effet, lorsqu'un traitement asynchrone doit être finalisé avant la reprise du processus d'assignation, il est possible de l'interrompre en appelant la fonction `executor.hold()` et de le reprendre une fois terminé avec `executor.resume()`.

Dans les exemples ci-dessous, le traitement asynchrone est simulé par l'utilisation d'un timeout de 5 secondes : 

[shortcode]
[shortcode]
JSAPI.get().task().registerBeforeAssign(function(tasks, assignee, executor){
    executor.hold();
    setTimeout(function(){
      executor.resume();
    }, 5000);
});
[shortcode]
[shortcode]
JSAPI.get().task().registerAfterAssign(function(tasks, assignee, executor){
    executor.hold();
    setTimeout(function(){
      executor.resume();
    }, 5000);
});
[shortcode]
[shortcode]

# Informations liées à un processus

| Fonctions                                                                   | Description                                                                    |
|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------|
|getWorkflow()                                                                | Déterminer l'identifiant du traitement de la tâche                             |
|setWorkflow(String workflow)                                                 | Définir l'identifiant du traitement de la tâche                                |                
|getParticipants()                                                            | Déterminer les identités ayant participées au traitement                       |        
|addParticipant(String participant)                                           | Ajout d'un participant à une tâche                                             |        
