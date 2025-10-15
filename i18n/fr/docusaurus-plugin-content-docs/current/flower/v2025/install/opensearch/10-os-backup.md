+++
date = "2005-03-28T13:20:01+02:00"
title = "Sauvegarde & restauration"
intro = "Faites des sauvegardes le plus régulièrement possible."
+++

La procédure de sauvegarde & restauration décrite ci-dessous se base sur le mécanisme de [snapshot](https://opensearch.org/docs/[shortcode]/opensearch/snapshot-restore/) d'OpenSearch.

# Répertoire de sortie

Pour définir le répertoire où les snapshots seront sauvegardés, 
ajoutez dans le fichier ``${OPENSEARCH_HOME}/config/opensearch.yml`` dans la partie "Paths" :
``path.repo: ["/mnt/snapshots"]``

Puis redémarrez tous les noeuds OpenSearch.


Exécutez ensuite la commande :

[shortcode]
[shortcode]
$ curl -X PUT 'http://localhost:9200/_snapshot/my-snapshots-repository' -d '{
	"type": "fs",
	"settings": {
		"location": "/mnt/snapshots",
		"compress": true
	}
}'
{{< /tab >>}}

[shortcode]
PUT /_snapshot/my-snapshots-repository
{
	"type": "fs",
	"settings": {
		"location": "/mnt/snapshots",
	}
}
[shortcode]
[shortcode] 

Afin de visualiser les informations du répertoire créé, exécutez la commande :
[shortcode]
[shortcode]
$ curl -X GET 'http://localhost:9200/_snapshot/'
{{< /tab >>}}

[shortcode]
GET /_snapshot
[shortcode]
[shortcode] 

Enfin pour vérifier que le répertoire créé est fonctionnel, exécutez la commande :

[shortcode]
[shortcode]
$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/_verify'
{{< /tab >>}}

[shortcode]
POST /_snapshot/my-snapshots-repository/_verify
[shortcode]
[shortcode] 

Cette commande permet de lister tous les noeuds où la vérification a été un succès.

<br/>

# Génération d'un snapshot

Un répertoire peut contenir plusieurs snapshots pour un même cluster. Un snapshot est identifié par un nom unique dans un cluster. 
La commande suivante permet de créer le snapshot `my-snapshot` dans le répertoire créé précédemment :
[shortcode]
[shortcode]
$ curl -X PUT 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot?wait_for_completion=true'
{{< /tab >>}}
[shortcode]
PUT /_snapshot/my-snapshots-repository/my-snapshot?wait_for_completion=true 
[shortcode]
[shortcode] 

Le paramètre ``wait_for_completion`` spécifie si oui ou non la demande doit retourner une réponse immédiatement après l’initialisation du snapshot (par défaut) ou attendre l’achèvement du snapshot. 
Pendant l’initialisation du snapshot, des informations sur tous les snapshots précédents sont chargées dans la mémoire, ce qui signifie que pour les grands répertoires cela peut prendre plusieurs secondes (voire quelques minutes).

Par défaut, un snapshot de tous les index ouverts et démarrés est créé. 
Il est cependant possible de spécifier seulement les index à inclure dans le snapshot grâce à la commande suivante :

[shortcode]
[shortcode]
$ curl -X PUT 'http://localhost:9200/_snapshot/my-snapshots-repository' -d '{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false
}'
{{< /tab >>}}
[shortcode]
PUT /_snapshot/my-snapshots-repository/my-snapshot
{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false
}
[shortcode]
[shortcode] 


Pour voir les informations relatives à un snapshot, la commande à saisir est la suivante :

[shortcode]
[shortcode]
$ curl -X GET 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot'
{{< /tab >>}}
[shortcode]
GET /_snapshot/my-snapshots-repository/my-snapshot
[shortcode]
[shortcode]


Enfin, il est possible de supprimer un snapshot avec la commande :

[shortcode]
[shortcode]
$ curl -X DELETE 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot'
{{< /tab >>}}
[shortcode]
DELETE /_snapshot/my-snapshots-repository/my-snapshot
[shortcode]
[shortcode] 

# Restauration

Un snapshot peut être restauré grâce à la commande suivante :

[shortcode]
[shortcode]
$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot/_restore'
{{< /tab >>}}
[shortcode]
POST /_snapshot/my-snapshots-repository/my-snapshot/_restore
[shortcode]
[shortcode] 


Cette commande permet de restaurer tous les index du snapshot. 
Cependant il est possible de restaurer uniquement certains index, avec la commande suivante :

[shortcode]
[shortcode]
$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/_restore' -d '{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false,
	"rename_pattern": "index_(.+)",
	"rename_replacement": "restored_index_$1"
}'[shortcode]
[shortcode]
POST /_snapshot/my-snapshots-repository/my-snapshot/_restore
{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false,
	"rename_pattern": "index_(.+)",
	"rename_replacement": "restored_index_$1"
}[shortcode]
[shortcode] 


Un index peut être restauré seulement s’il est fermé. Si l’index n’existe pas dans le cluster, il est créé lors de la restauration du snapshot. 

## Changer les paramètres de l'index pendant la restauration

Pendant la restauration, il est possible de modifier certains paramètres de l’index. 
Dans l’exemple ci-dessous, l’index ``index_1`` est restauré avec 3 répliques et avec un intervalle de rafraichissement par défaut de 1s :


[shortcode]
[shortcode]
$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/_restore' -d '{
	"indices": "index_1",
	"index_settings": {
		"index.number_of_replicas": 3
	},
	"ignore_index_settings": [
		"index.refresh_interval"
	]
}'[shortcode]
[shortcode]
POST /_snapshot/my-snapshots-repository/my-snapshot/_restore
{
	"indices": "index_1",
	"index_settings": {
		"index.number_of_replicas": 3
	},
	"ignore_index_settings": [
		"index.refresh_interval"
	]
}[shortcode]
[shortcode]

## Restauration vers un cluster différent

Un snapshot n’est pas spécifique à un cluster. Un snapshot d’un cluster A peut être restauré sur un autre cluster B. 


Enregistrer le répertoire contenant le snapshot dans le cluster B et lancer le processus de restauration. 

:::warning

Attention à la capacité du cluster. Le nombre d’index disponible sur le cluster doit être égal ou supérieur au nombre d’index du snapshot. Si le cluster a une plus petite taille, il est possible de changer les paramètres de l’index durant la restauration en réduisant par exemple le nombre de répliques.
:::

# Gestion du snapshot

## Statut du snapshot

* La liste des snapshots en cours d’exécution peut être visible grâce à la commande :

[shortcode]
[shortcode]
$ curl -X GET 'http://localhost:9200/_snapshot/_status'
{{< /tab >>}}

[shortcode]
GET /_snapshot/_status
[shortcode]
[shortcode] 

* Il est possible d’affiner la recherche à un répertoire :

[shortcode]
[shortcode]
$ curl -X GET 'http://localhost:9200/_snapshot/my-snapshots-repository/_status'
{{< /tab >>}}

[shortcode]
GET /_snapshot/my-snapshots-repository/_status
[shortcode]
[shortcode] 


* Il est également possible de voir le statut d’un snapshot précis :

[shortcode]
[shortcode]
$ curl -X GET 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot/_status'
{{< /tab >>}}

[shortcode]
GET /_snapshot/my-snapshots-repository/my-snapshot/_status
[shortcode]
[shortcode] 

## Progression

La commande ``GET /_snapshot/my-snapshots-repository/my-snapshot/_status`` permet de visualiser les informations du snapshot avant que celui-ci ne soit arrêté. Ainsi, il est possible d’avoir les informations du snapshot lorsqu’il est en cours d'exécution contrairement à la commande ``GET /_snapshot/my-snapshots-repository/my-snapshot`` qui va attendre la fin de l’exécution pour donner les informations.

## Arrêt

Si un snapshot a été exécuté par erreur, ou si l’exécution est anormalement longue, il est possible de l’arrêter en utilisant une opération de suppression du snapshot. L’opération va alors arrêter le snapshot avant de le supprimer. 

Pour annuler une restauration, les indices en cours de restauration doivent être supprimés. Toutes les données des indices effacés seront également supprimées du cluster. 
