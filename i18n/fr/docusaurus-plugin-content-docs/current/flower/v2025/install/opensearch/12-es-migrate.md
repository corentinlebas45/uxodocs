+++
date = "2022-02-14T13:20:01+02:00"
title = "Montée de version FlowerDocs 2.6"
intro = "Migrez vos données vers FlowerDocs 2.6"
+++

Lors d'une montée de version de FlowerDocs d'une version 2.5 et inférieure vers une version 2.6 et ses mineures, il est nécessaire de migrer les données. En effet, le moteur d'indexation utilisé à partir de FlowerDocs 2.6.0 est OpenSearch, issu d'un fork de la version 7.10.2 d'Elasticsearch. Le modèle de données interne à Elasticsearch a été revu à la suite de la version 6.0 par la suppression du support des types dans les index. Une migration avec réécriture est donc  nécessaire afin d’effectuer cette montée de version. 

<br/>

Pour cela, FlowerDocs CLM met à disposition un `job`, chargé de ré-indexer les données d'un scope d'une instance Elasticsearch 5.2.1 dans une instance OpenSearch [shortcode].

<br/>

# Réindexation des données

Pour réindexer les données Elasticsearch dans OpenSearch, la commande CLM suivante doit être exécutée :

```properties
java -Des.nodes=<URL Cible OpenSearch> -jar <clm> es reindex --source=<URL source Elasticsearch> --scope=<scope cible> --reindex-source=true
```
<br/>


Il est nécessaire de fournir  à minima ces informations : 

* `--scope` : Scope à réindexer 
* `--source` : Source Elasticsearch
* `-Des.nodes` : Cible OpenSearch (en paramètre de JVM et non de la commande)

:::warning
Il est nécessaire de définir quelles sont les urls autorisées pour la réindexation dans la configuration OpenSearch `opensearch.yml` avec la propriété `reindex.remote.whitelist: "host1:port, host2:port"`
:::

# Suivi de l'avancement

Le processus de réindexation peut durer plus ou moins longtemps selon le volume de données à réindexer.
Afin de suivre l'avancement du processus, cet utilitaire fournit à intervalle régulier des informations sur le pourcentage d'avancement pour :

* chaque index Elasticsearch
* le processus complet de réindexation

<br/>

L'intervalle de temps entre chaque point d'avancement à lieu  toute les 20 secondes, il est configurable en ajoutant le paramètre `reindexation.sleep` avec une valeur en millisecondes de la manière suivante :

```properties
<clm> es reindex --reindexation.sleep=<intervalle en ms>
```
# Gestion de l'authentification 

## Source : Elasticsearch

Afin de fournir les identifiants permettant de se connecter à une instance Elasticsearch source sécurisée, les paramètres suivant doivent être fournis à la commande : 

* `--user` : Identifiant de l'utilisateur Elasticsearch
* `--password` : Mot de passe de l'utilisateur Elasticsearch

<br/>

```properties
java -jar <clm> es reindex --user=<utilisateur Elasticsearch> --password=<mot de passe Elasticsearch>  <autres paramètres>
```
## Cible : OpenSearch

Afin de fournir les identifiants permettant de se connecter à une instance OpenSearch cible sécurisée, les paramètres suivant doivent être fournis à la JVM :

* `es.user` : Identifiant de l'utilisateur OpenSearch
* `es.password` : Mot de passe de l'utilisateur OpenSearch

<br/>

```properties
java -Des.nodes=<URL Cible OpenSearch> -Des.user=<utilisateur OpenSearch> -Des.password=<mot de passe OpenSearch> -jar <clm> es reindex <paramètres>
```

# Suppression des tâches de réindexation

Par défaut, toutes les tâches sont supprimées à la fin de l'exécution de la commande. Il est possible de conserver les tâches pour les analyser via les API OpenSearch.
Pour cela, les paramètres suivants doivent être fournis à la commande : 

* `delete-tasks=false`, aucune tâche n'est supprimée après la réindexation.  
* `delete-failed-tasks=false`, uniquement les tâches en succès sont supprimées, les tâches en erreurs sont conservées.

<br/>

```properties
<clm> es reindex --delete-tasks=false
<clm> es reindex --delete-failed-tasks=false
```
# Création des index dans OpenSearch

Si les index existent déjà dans OpenSearch, il est possible de désactiver leur création en ajoutant le paramètre `create-indexes` :

```properties
<clm> es reindex --create-indexes=false
```

# Création des mappings dans OpenSearch

Si les mappings pour chacun des index existent déjà dans OpenSearch, il est possible de désactiver leur mise à jour en ajoutant le paramètre `update-mappings` :

```properties
<clm> es reindex --update-mappings=false
```


# Configuration de scripts de réindexation personnalisés

Il est possible de surcharger les scripts de réindexation interne à FlowerDocs en fournissant ses propres scripts. Pour qu'ils soient pris en compte, il est nécessaire de renseigner le chemin d'un dossier contenant les scripts en ajoutant le paramètre `reindexation.scripts.path` de la façon suivante :

```properties
<clm> es reindex --reindexation.scripts.path=<chemin du dossier>
```
<br/><br/>


Le fichier de réindexation doit être nommer `Documents-reindex.json`.