---
title: Montée de version OpenSearch
intro: Installer un nouveau cluster OpenSearch et utiliser la procédure d'index from remote
---

Pour effectuer la montée de version d'OpenSearch, il est nécessaire d'installer un nouveau cluster OpenSearch dans la version cible. 
Ensuite, la procédure suivante décrit comment pousser les données d'un cluster OpenSearch à un autre après avoir créé votre scope à partir du CLM.


# Lancement de la ré-indexation 

Dans cette section, nous allons demander à OpenSearch la population d'un index à partir d'un autre index distant. 

OpenSearch va tout d'abord vérifier la demande puis retourner l'identifiant d'une tâche asynchrone.
Pour cela, exécutez la requête suivante sur le cluster cible en adaptant aux environnements : 
	

```yaml
POST /_reindex?wait_for_completion=false
{
  "source": {
    "remote": {
      "host": "http://localhost:9200",
      "username": "user",
      "password": "password"
    },
    "index": "<scope>-flower-docs",
    "type": "document",
    "size": 100
  },
  "dest": {
    "index": "<scope>-flower-docs"
  }
}
```

__Note :__ Dans cette requête, ``<scope>`` est l'identifiant du scope FlowerDocs en minuscule.


La réponse retournée par OpenSearch est du type : 

```yaml
{
    "task": "<nodeId>:<taskId>"
} 
```

# Etat de la ré-indexation 

La tâche de ré-indexation étant asynchrone, il est possible de connaître son état : 

```properties
GET /_tasks/<nodeId>:<taskId>
```

Selon la réponse retournée, il est donc possible de déterminer si la ré-indexation a été exécutée avec succès ou si elle est encore en cours d'exécution.

* Un flag ``completed`` indique si la ré-indexation est terminée ou non 
* La tâche récupérée mentionne un objet ``response`` ou ``error`` indiquant si la tâche a pu être terminée avec succès  


L'ensemble des tâches de ré-indexation peuvent être également consultées avec : 

```properties
GET /_tasks?detailed=true&actions=*reindex
```