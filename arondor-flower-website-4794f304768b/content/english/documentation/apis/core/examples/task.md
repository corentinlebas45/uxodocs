+++
date = "2001-04-29T13:30:01+02:00"
title = "Handling a task"
description = "Create, retrieve, modify, delete, respond to and assign your tasks"
+++

The `Task` service exposes all the operations available around `TASK` type components.

# Task recovery

The examples below show how to retrieve tasks from an ID list.

GET {{core}}/rest/tasks/{ids} HTTP/1.1

-- URL parameters --
core : host
ids: identifier of the documents to be retrieved

-- Headers --
token: {token}
Content-Type: application/json

	@Autowired
    private TaskService taskService;

    public List<Task> get() throws TechnicalException, FunctionalException
    {
        List<Id> ids = Lists.newArrayList(new Id("taskId"));
        return taskService.get(ids);
    }

# Task creation

The examples below show how to create a to-do list using the following operation.

GET {{core}}/rest/tasks/ HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

-- Headers --
token: {token}
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

	@Autowired
    private TaskService taskService;

    public List<Task> create() throws FunctionalException, TechnicalException
    {
        Task task = new Task();
        task.setAssignee("user_responsable");
        task.getData().setACL(new Id("acl-creation"));
        task.getData().setClassId(new Id(“leaveRequest_creation"));
        task.getData().setOwner("jna");
        task.setName("Leave request");
        task.setTags(new Tags());
        task.getTags().getTags().add(TagBuilder.name("RefClient").value("TT2587496").build());
        task.getTags().getTags().add(TagBuilder.name(“LeaveDuration").value("5").build());

        return taskService.create(Arrays.asList(task));
    }

# Task modification

This operation updates a task's tags and data (class identifier, task name, ACL, etc.).

:::info
This service operates on a cancel and replace basis, so all tag values must be supplied by the service at the time of update. It is therefore advisable to recover the job, make the changes and call the update service.
:::

GET {{core}}/rest/tasks/{ids} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: identifiers of tasks to be updated

-- Headers --
token: {token}
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

	@Autowired
    private TaskService taskService;

    public List<Task> update(Task task) throws FunctionalException, TechnicalException
    {
        task.getTags().getTags().add(new Tag(Arrays.asList("DUPONT"), “NameClient", false));
        return taskService.update(Arrays.asList(task));
    }

# Job search

The search operations all work on the same model as described [here](broken-link.md).

# Task deletion

The examples below show how to delete a to-do list from an ID list.

DELETE {{core}}/rest/tasks/{ids} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

-- Headers --
token: {token}
Content-Type: application/json

	@Autowired
    private TaskService taskService;

    public void delete() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("taskId"));
        taskService.delete(ids);
    }

# Application of an answer

## Simple answer
The examples below show how to apply a simple answer to a list of tasks from a list of identifiers.

PUT {{core}}/rest/tasks/{ids}/answer HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: task identifiers on which to apply the response

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
{
  "id": "Decline"
}
	@Autowired
    private TaskService taskService;

    public void answer() throws FunctionalException, TechnicalException
    {
        Answer answer = new Answer();
        answer.setId(new Id("Decline"));
        taskService.answer(Lists.newArrayList(new Id("taskId")), answer);
    }


## Answer with reason
The examples below show how to retrieve tasks from an ID list.  

PUT {{core}}/rest/tasks/{ids}/answer HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: task identifiers on which to apply the response

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --

{
  "id": "Decline",
   "type": "com.flower.docs.domain.taskclass.ReasonedAnswer",
   "tags": [
      {
        "name": "Remark"
        "value": [
          "The receipt is not up to date."
        ]
      }
    ]
}
	@Autowired
    private TaskService taskService;

    public void answer() throws FunctionalException, TechnicalException
    {
        ReasonedAnswer answer = new ReasonedAnswer();
        answer.setId(new Id("Decline"));
        answer.setTags(null);
        answer.setTags(new Tags());
        answer.getTags().getTags().add(TagBuilder.name("Remark").value("The justification is not up to date.").build());
        taskService.answer(Lists.newArrayList(new Id("taskId")), answer);
    }

# Task assignment

The examples below show how to assign a task list to a user from an ID list.

PUT {{core}}/rest/tasks/{ids}/assignee/{username} HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host
ids: task identifiers on which to apply the response
username: assigned user identifier

-- Headers --
token: {token}
Content-Type: application/json

	@Autowired
    private TaskService taskService;

    public void assign() throws FunctionalException, TechnicalException
    {
        List<Id> ids = Lists.newArrayList(new Id("taskId"));
        taskService.assign(ids, "jna");
    }
