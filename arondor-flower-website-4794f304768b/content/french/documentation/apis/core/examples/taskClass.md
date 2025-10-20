+++
date = "2001-04-29T13:30:01+01:02"
title = "Manipuler les classes de tâches"
description = "Créez, récupérez, modifiez, supprimez vos classes de tâches"
+++

Le service `TaskClassService` expose toutes les opérations disponibles autour des composants de type `TaskClass`.

# Récupération des classes de tâches

## Récupération de toutes les classes de tâches

Les exemples ci-dessous indiquent comment récupérer toutes les classes de tâches.

GET {{core}}/rest/taskclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}

	@Autowired
    private TaskClassService taskClassService;

    public List<TaskClass> getAll() throws FunctionalException, TechnicalException
    {
        return taskClassService.getAll();
    }

## Récupération d'une liste définie de classes de tâches

Les exemples ci-dessous indiquent comment récupérer une liste de classes de tâches à partir de leurs identifiants.

GET {{core}}/rest/taskclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids: liste d'identifiants de classes de tâches

-- Headers -- 
token: {token}

	@Autowired
    private TaskClassService taskClassService;

    public List<TaskClass> getTaskClasses() throws FunctionalException, TechnicalException
    {
        List<Id> taskClassesIds = Lists.newArrayList(new Id("taskClassId"));
        taskClassesIds.add(new Id("taskClass2Id"));
        return taskClassService.get(taskClassesIds);
    }

# Création de classes de tâches

Les exemples ci-dessous indiquent comment créer une classe de tâches. 

POST {{core}}/rest/taskclass HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "answers": [
      {
        "displayNames": [
          {
            "language": "FR",
            "value": "Traiter"
          }
        ],
        "id": "Treat"
      }
    ],
    "autoAssign": true,
    "category": "TASK",
    "data": {
      "ACL": "acl-treatment",
      "creationDate": "2024-03-07 13:59:54.854 +0100",
      "lastUpdateDate": "2024-03-07 13:59:54.854 +0100",
      "owner": "fadmin"
    },
    "displayNames": [
      {
        "language": "FR",
        "value": "Traitement du courrier"
      }
    ],
    "icon": "fa fa-clone",
    "id": "GEC_traitement",
    "tagReferences": [
      {
        "descriptions": [
          {
            "language": "FR",
            "value": "Référence du client"
          }
        ],
        "mandatory": true,
        "multivalued": false,
        "order": 0,
        "readonly": false,
        "tagName": "NumReference",
        "technical": false
      }
    ],
    "technical": true,
    "workflow": "GEC"
  }
]
	@Autowired
    private TaskClassService taskClassService;
    
	public void createTaskClasses() throws FunctionalException, TechnicalException
    {
        List<I18NLabel> answerLabels = new ArrayList<>();
        I18NLabel answerlabelFR = new I18NLabel("Traiter", "FR");
        answerLabels.add(answerlabelFR);

        List<I18NLabel> classLabels = new ArrayList<>();
        I18NLabel classlabelFR = new I18NLabel("Traitement du courrier", "FR");
        classLabels.add(classlabelFR);

        Answer treatAnswer = new Answer();
        treatAnswer.setId(new Id("Treat"));
        treatAnswer.setDisplayNames(answerLabels);
        List<Answer> answers = new ArrayList<>();
        answers.add(treatAnswer);

        TagReference tag = new TagReference();
        tag.setTagName("NumReference");
        tag.setMandatory(true);
        List<TagReference> tags = new ArrayList<>();
        tags.add(tag);

        TaskClass taskClass = new TaskClass();
        taskClass.setId(new Id("GEC_Traitement"));
        taskClass.setAnswers(answers);
        taskClass.setTagReferences(tags);
        taskClass.setData(new Data());
        taskClass.getData().setACL(new Id("acl-treatment"));
        taskClass.setIcon("fa fa-clone");
        taskClass.setAutoAssign(true);
        taskClass.setWorkflow(new Id("GEC"));
        taskClass.setDisplayNames(classLabels);

        List<TaskClass> taskClasses = new ArrayList<>();
        taskClasses.add(taskClass);

        taskClassService.create(taskClasses);
    }

# Modification de classes de tâches

Les exemples ci-dessous indiquent comment modifier une classe de tâche.

POST {{core}}/rest/taskclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de tâches à mettre à jour, séparés par des virgules

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "answers": [
      {
        "displayNames": [
          {
            "language": "FR",
            "value": "Traiter"
          }
        ],
        "id": "Treat"
      },
      {
        "displayNames": [
          {
            "language": "FR",
            "value": "Refuser"
          }
        ],
        "id": "Refuse"
      }
    ],
    "autoAssign": false,
    "category": "TASK",
    "data": {
      "ACL": "acl-treatment",
      "creationDate": "2024-03-07 13:59:54.854 +0100",
      "lastUpdateDate": "2024-03-07 13:59:54.854 +0100",
      "owner": "fadmin"
    },
    "displayNames": [
      {
        "language": "FR",
        "value": "Traitement du courrier"
      }
    ],
    "icon": "fa fa-envelope",
    "id": "GEC_traitement",
    "tagReferences": [
      {
        "descriptions": [
          {
            "language": "FR",
            "value": "Référence du client"
          }
        ],
        "mandatory": true,
        "multivalued": false,
        "order": 0,
        "readonly": false,
        "tagName": "NumReference",
        "technical": false
      }
    ],
    "technical": true,
    "workflow": "GEC"
  }
]
	@Autowired
    private TaskClassService taskClassService;
    
	public List<TaskClass> updatetaskClass(TaskClass taskClass) throws FunctionalException, TechnicalException
    {
        List<I18NLabel> answerLabels = new ArrayList<>();
        I18NLabel answerlabelFR = new I18NLabel("Refuser", "FR");
        answerLabels.add(answerlabelFR);

        Answer refuseAnswer = new Answer();
        refuseAnswer.setId(new Id("Refuse"));
        refuseAnswer.setDisplayNames(answerLabels);

        taskClass.setIcon("fa fa-envelope");
        taskClass.getAnswers().add(refuseAnswer);
        taskClass.setAutoAssign(false);

        List<TaskClass> taskClasses = new ArrayList<>();
        taskClasses.add(taskClass);

        return taskClassService.update(taskClasses);
    }

:::warning
En utilisant le service REST, les informations non renseignées seront vidées : il faut envoyer la totalité de la classe de tâche et non pas seulement les informations à modifier. 
:::

# Suppression de classes de tâches

Les exemples ci-dessous indiquent comment supprimer une liste de classes de tâches.

DELETE {{core}}/rest/taskclass/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de classe de tâches à supprimer, séparés par des virgules

-- Headers --
token: {token}

	@Autowired
	private TaskClassService taskClassService;
	
    public void deleteTaskClasses() throws FunctionalException, TechnicalException
    {
        List<Id> taskClassesIds = Lists.newArrayList(new Id("taskClassId"));
        taskClassService.delete(taskClassesIds);
    }

:::warning
Avant de supprimer une classe de tâche, il est important de s'assurer d'avoir bien supprimé toutes les instances de cette classe, ainsi que les références à celle-ci au niveau des objets de type workflow.
:::