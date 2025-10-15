+++
date = "2001-04-29T13:30:01+02:00"
title = "Manipuler une tâche"
description = "Créez, récupérez, modifiez, supprimez, répondez et assignez vos tâches"
+++

Le service `Task` expose toutes les opérations disponibles autour des composants de type `TASK`.

# Récupération de tâche

Les exemples ci-dessous indiquent comment récupérer des tâches à partir d'une liste d'identifiant.

[shortcode]
[shortcode]
GET {{core}}/rest/tasks/{ids} HTTP/1.1

-- Paramètres d'URL --
core : host
ids : identifiants des tâches à récupérer

-- Headers --
token: {{token}}
Content-Type: application/json

[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public List<Task> get() throws TechnicalException, FunctionalException
    {
        List<Id> ids = Lists.newArrayList(new Id("taskId"));
        return taskService.get(ids);
    }
[shortcode]
[shortcode]

# Création de tâche

Les exemples ci-dessous indiquent comment créer une liste de tâches en utilisant l'opération suivante.

[shortcode]
[shortcode]
GET {{core}}/rest/tasks/ HTTP/1.1

-- Paramètres d'url --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
	"workflow": "Inform",
    "assignee": "fadmin",
    "category": "TASK",
    "data": {
		"classId": "GEC_Step3_CourrierLu",
		"owner": "clm",
		"ACL": "ACL_TASK"
    },
	"name": "3-Courrier lu",
    "tags": [
		{
			"value": [
				"Jean"
			],
			"name": "PrenomClient",
			"readOnly": false
		},
		{
			"value": [
				"123456"
			],
			"name": "RefClient",
			"readOnly": false
		},
		{
			"value": [
				"DUPONT"
			],
			"name": "NomClient",
			"readOnly": false
		}
    ],
    "attachments": [
		{
			"componentIds": [
				"c46de78c-92d4-45ef-b262-8395aa76a4a8"
			],
			"id": "Courrier",
			"category": "DOCUMENT",
			"order": 0
		}
	]
  }
]

[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public List<Task> create() throws FunctionalException, TechnicalException
    {
        Task task = new Task();
        task.setAssignee("user_responsable");
        task.getData().setACL(new Id("acl-creation"));
        task.getData().setClassId(new Id("demandeConge_creation"));
        task.getData().setOwner("jna");
        task.setName("Demande de congé");
        task.setTags(new Tags());
        task.getTags().getTags().add(TagBuilder.name("RefClient").value("TT2587496").build());
        task.getTags().getTags().add(TagBuilder.name("DureeConge").value("5").build());

        return taskService.create(Arrays.asList(task));
    }
[shortcode]
[shortcode]

# Modification de tâche

Cette opération permet de mettre à jour les données d'une tâche : tags et data (identifiant de la classe, nom de la tâche, ACL ...).

:::info
Ce service fonctionne en annule et remplace, l'ensemble des valeurs de tags doit donc être fourni par le service au moment de la mise à jour. Il est donc préconisé de réaliser une récupération de la tâche, effectuer les modifications et faire l'appel au service de mise à jour.
:::

[shortcode]
[shortcode]
GET {{core}}/rest/tasks/{ids} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids: identifiants des tâches à mettre à jour

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
	"workflow": "Inform",
    "assignee": "fadmin",
    "category": "TASK",
    "data": {
		"classId": "GEC_Step3_CourrierLu",
		"owner": "clm",
		"ACL": "ACL_TASK"
    },
    "name": "3-Courrier lu",
    "tags": [
		{
			"value": [
				"Jean"
			],
			"name": "PrenomClient",
			"readOnly": false
		},
		{
			"value": [
				"123456"
			],
			"name": "RefClient",
			"readOnly": false
		},
		{
			"value": [
				"DUPONT"
			],
			"name": "NomClient",
			"readOnly": false
		}
    ],
    "attachments": [
		{
			"componentIds": [
				"c46de78c-92d4-45ef-b262-8395aa76a4a8"
			],
			"id": "Courrier",
			"category": "DOCUMENT",
			"order": 0
		}
	]
  }
]

[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public List<Task> update(Task task) throws FunctionalException, TechnicalException
    {
        task.getTags().getTags().add(new Tag(Arrays.asList("DUPONT"), "NomClient", false));
        return taskService.update(Arrays.asList(task));
    }
[shortcode]
[shortcode]

# Recherche de tâche

Les opérations de recherche fonctionnent toutes sur le même modèle décrit [ici](broken-link.md).

# Suppression de tâche

Les exemples ci-dessous indiquent comment supprimer une liste de tâches à partir d'une liste d'identifiant.

[shortcode]
[shortcode]
DELETE {{core}}/rest/tasks/{ids} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public void delete() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("taskId"));
        taskService.delete(ids);
    }
[shortcode]
[shortcode]

# Application d'une réponse

## Réponse simple
Les exemples ci-dessous indiquent comment appliquer une réponse simple sur une liste de tâches à partir d'une liste d'identifiant.

[shortcode]
[shortcode]
PUT {{core}}/rest/tasks/{ids}/answer HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids : identifiants des tâches sur lesquels appliquer la réponse

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
{
  "id": "Refuser"
}
[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public void answer() throws FunctionalException, TechnicalException
    {
        Answer answer = new Answer();
        answer.setId(new Id("Refuser"));
        taskService.answer(Lists.newArrayList(new Id("taskId")), answer);
    }
[shortcode]
[shortcode]


## Réponse avec motif
Les exemples ci-dessous indiquent comment appliquer une réponse avec motif sur une liste de tâches à partir d'une liste d'identifiant.  

[shortcode]
[shortcode]
PUT {{core}}/rest/tasks/{ids}/answer HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids : identifiants des tâches sur lesquels appliquer la réponse

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --

{
  "id": "Refuser",
   "type": "com.flower.docs.domain.taskclass.ReasonedAnswer",
   "tags": [
      {
        "name": "Commentaire",
        "value": [
          "Le justificatif n'est pas à jour."
        ]
      }
    ]
}
[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public void answer() throws FunctionalException, TechnicalException
    {
        ReasonedAnswer answer = new ReasonedAnswer();
        answer.setId(new Id("Refuser"));
        answer.setTags(null);
        answer.setTags(new Tags());
        answer.getTags().getTags().add(TagBuilder.name("Commentaire").value("Le jusitifcatif n'est pas à jour.").build());
        taskService.answer(Lists.newArrayList(new Id("taskId")), answer);
    }
[shortcode]
[shortcode]

# Assignation de tâche

Les exemples ci-dessous indiquent comment assigner une liste de tâches à un utilisateur à partir d'une liste d'identifiant.

[shortcode]
[shortcode]
PUT {{core}}/rest/tasks/{ids}/assignee/{username} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
ids: identifiants des tâches à assigner
username: identifiant de l'utilisateur assigné

-- Headers --
token: {{token}}
Content-Type: application/json

[shortcode]
[shortcode]
	@Autowired
    private TaskService taskService;

    public void assign() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("taskId"));
        taskService.assign(ids, "jna");
    }
[shortcode]
[shortcode]
