+++
date = "2018-04-03T12:20:01+01:57"
title = "Gestion des processus"
description = "Créez, récupérez, modifiez, supprimez vos processus"
+++

Le service `WorkflowService` expose toutes les opérations disponibles autour des `Processus`.


# Récupération des processus

## Récupération de tous les processus

Les exemples ci-dessous indiquent comment récupérer tous les processus présents sur le scope.

[shortcode]
[shortcode]
GET {{core}}/rest/workflow HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {{token}}

[shortcode]
[shortcode]
	@Autowired
    private WorkflowService wkfService;

    public List<Workflow> getAllWorkflow() throws FunctionalException, TechnicalException
    {
        return wkfService.getAll();
    }
[shortcode]
[shortcode]

## Récupération d'une liste définie de processus

Les exemples ci-dessous indiquent comment récupérer une liste de processus à partir de leurs identifiants.

[shortcode]
[shortcode]
GET {{core}}/rest/workflow/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids: liste d'identifiants de processus, séparés par des virgules

-- Headers -- 
token: {{token}}

[shortcode]
[shortcode]
	@Autowired
    private WorkflowService wkfService;

    public List<Workflow> getWorkflow() throws FunctionalException, TechnicalException
    {
        List<Id> workflowIds = Lists.newArrayList(new Id("processId"));
        workflowIds.add(new Id("processId"));
        return wkfService.get(workflowIds);
    }
[shortcode]
[shortcode]

# Création de classes de processus

Les exemples ci-dessous indiquent comment créer un processus. 

[shortcode]
[shortcode]
POST {{core}}/rest/workflow HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core

-- Headers -- 
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
    {
        "startTaskClass": "GEC_Step0_Creation",
        "taskClasses": [
            "GEC_Step1_Distribution",
            "GEC_Step2_ATraiter",
            "GEC_Step0_Creation"
        ],
        "id": "GECTest"
    }
]
[shortcode]
[shortcode]
	@Autowired
    private WorkflowService wkfService;
    
	public void createWorkflow() throws FunctionalException, TechnicalException
    {
        List<Id> taskClasses = new ArrayList<>();
        taskClasses.add(new Id("GEC_Step0_Creation"));
        taskClasses.add(new Id("GEC_Step1_Distribution"));
        taskClasses.add(new Id("GEC_Step2_ATraiter"));

        Workflow wkf = new Workflow();
        wkf.setId(new Id("GecTest"));
        wkf.setStartTaskClass(new Id("GEC_Step0_Creation"));
        wkf.setTaskClasses(taskClasses);

        List<Workflow> workflowList = new ArrayList<>();
        workflowList.add(wkf);

        wkfService.create(workflowList);
    }
[shortcode]
[shortcode]

# Modification de processus

Les exemples ci-dessous indiquent comment modifier un processus.

[shortcode]
[shortcode]
POST {{core}}/rest/workflow/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de workflow à mettre à jour, séparés par des virgules

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
    {
        "id": "GECTest",
        "startTaskClass": "GEC_Step0_Creation",
        "taskClasses": [
            "GEC_Step1_Distribution",
            "GEC_Step2_ATraiter",
            "GEC_Step3_CourrierTraite",
            "GEC_Step0_Creation"
        ]
    }
]
[shortcode]
[shortcode]
	@Autowired
    private WorkflowService wkfService;
    
	public List<Workflow> updateWorkflow(Workflow wkf) throws FunctionalException, TechnicalException
    {
        wkf.getTaskClasses().add(new Id("GEC_Step3_CourrierTraite"));
        List<Workflow> workflowList = new ArrayList<>();
        workflowList.add(wkf);

        return wkfService.update(workflowList);
    }
[shortcode]
[shortcode]

:::warning
En utilisant le service REST, les informations non renseignées seront vidées : il faut envoyer la totalité du processus et pas seulement les informations à modifier. 
:::

# Suppression de processus

Les exemples ci-dessous indiquent comment supprimer une liste de processus.

[shortcode]
[shortcode]
DELETE {{core}}/rest/workflow/{ids} HTTP/1.1

-- Paramètre d'URL -- 
core: host de FlowerDocs core
ids : liste des identifiants de processus à supprimer, séparés par des virgules

-- Headers --
token: {{token}}

[shortcode]
[shortcode]
	@Autowired
	private WorkflowService wkfService;
	
    public void deleteWorkflow() throws FunctionalException, TechnicalException
    {
        List<Id> workflowIds = Lists.newArrayList(new Id("workflowId"));
        wkfService.delete(workflowIds);
    }
[shortcode]
[shortcode]

:::warning
La suppression ne fait aucun contrôle : il faut donc vérifier qu'il n'y a pas d'instances en cours avant la suppression d'un processus.
:::