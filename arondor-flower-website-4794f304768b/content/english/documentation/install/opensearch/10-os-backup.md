+++
date = "2005-03-28T13:20:01+02:00"
title = "Backup & restoration"
intro = "Make backups as regularly as possible."
+++


# Output directory

Set the directory where snapshots will be saved, 
add to the ``${OPENSEARCH_HOME}/config/opensearch.yml`` file in the "Paths" section:
``path.repo: ["/mnt/snapshots"]``

Then restart all OpenSearch nodes.


Then run the command:

$ curl -X PUT 'http://localhost:9200/_snapshot/my-snapshots-repository' -d '{
	"type": "fs",
	"settings": {
		"location": "/mnt/snapshots",
		"compress: true
	}
}'
{{< /tab >>}}

PUT /_snapshot/my-snapshots-repository
{
	"type": "fs",
	"settings": {
		"location": "/mnt/snapshots",
	}
}

To view the information in the created directory, run the command:
$ curl -X GET 'http://localhost:9200/_snapshot/'
{{< /tab >>}}

GET /_snapshot

Finally, to check that the created directory is functional, run the command:

$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/_verify'
{{< /tab >>}}

POST /_snapshot/my-snapshots-repository/_verify

This command lists all nodes where verification has been successful.

<br/>

# Snapshot generation

A directory can contain several snapshots for a single cluster. A snapshot is identified by a unique name within a cluster. 
The following command creates the `my-snapshot` snapshot in the directory created previously:
$ curl -X PUT 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot?wait_for_completion=true'
{{< /tab >>}}
PUT /_snapshot/my-snapshots-repository/my-snapshot?wait_for_completion=true 

The ``wait_for_completion`` parameter specifies whether or not the request should return a response immediately after snapshot initialization (default) or wait for snapshot completion. 
During snapshot initialization, information on all previous snapshots is loaded into memory, which means that for large directories this can take several seconds (or even minutes).

By default, a snapshot of all open and started indexes is created. 
However, it is possible to specify only the indexes to be included in the snapshot with the following command:

$ curl -X PUT 'http://localhost:9200/_snapshot/my-snapshots-repository' -d '{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false
}'
{{< /tab >>}}
PUT /_snapshot/my-snapshots-repository/my-snapshot
{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false
}


To view snapshot information, enter the following command:

$ curl -X GET 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot
{{< /tab >>}}
GET /_snapshot/my-snapshots-repository/my-snapshot


Finally, you can delete a snapshot with the command:

$ curl -X DELETE 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot
{{< /tab >>}}
DELETE /_snapshot/my-snapshots-repository/my-snapshot

# Restoration

A snapshot can be restored with the following command:

$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot/_restore'
{{< /tab >>}}
POST /_snapshot/my-snapshots-repository/my-snapshot/_restore


This command restores all snapshot indexes. 
However, it is possible to restore only certain indexes with the following command:

$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/_restore' -d '{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false,
	"rename_pattern": "index_(.+)",
	"rename_replacement": "restored_index_$1"
POST /_snapshot/my-snapshots-repository/my-snapshot/_restore
{
	"indices": "index_1,index_2",
	"ignore_unavailable": "true",
	"include_global_state": false,
	"rename_pattern": "index_(.+)",
	"rename_replacement": "restored_index_$1"


An index can only be restored if it is closed. If the index does not exist in the cluster, it is created when the snapshot is restored. 

## Changing index parameters during restoration

During restoration, it is possible to modify certain index parameters. 
In the example below, the ``index_1`` index is restored with 3 replicas and a default refresh interval of 1s:


$ curl -X POST 'http://localhost:9200/_snapshot/my-snapshots-repository/_restore' -d '{
	"indices": "index_1",
	"index_settings": {
		"index.number_of_replicas": 3
	},
	"ignore_index_settings": [
		"index.refresh_interval
	]
POST /_snapshot/my-snapshots-repository/my-snapshot/_restore
{
	"indices": "index_1",
	"index_settings": {
		"index.number_of_replicas": 3
	},
	"ignore_index_settings": [
		"index.refresh_interval
	]

## Restoration to a different cluster

A snapshot is not cluster-specific. A snapshot from cluster A can be restored to another cluster B. 


Save the directory containing the snapshot in cluster B and start the restore process. 

:::warning

Pay attention to cluster capacity. The number of indexes available on the cluster must be equal to or greater than the number of indexes in the snapshot. If the cluster is smaller, it is possible to change the index parameters during restoration, for example by reducing the number of replicas.
:::

# Snapshot management

## Snapshot status

* The list of running snapshots can be viewed with the command:

$ curl -X GET 'http://localhost:9200/_snapshot/_status'
{{< /tab >>}}

GET /_snapshot/_status

* The search can be narrowed down to a directory:

$ curl -X GET 'http://localhost:9200/_snapshot/my-snapshots-repository/_status'
{{< /tab >>}}

GET /_snapshot/my-snapshots-repository/_status


* The status of a particular snapshot can also be viewed:

$ curl -X GET 'http://localhost:9200/_snapshot/my-snapshots-repository/my-snapshot/_status'
{{< /tab >>}}

GET /_snapshot/my-snapshots-repository/my-snapshot/_status

## Progression

The ``GET /_snapshot/my-snapshots-repository/my-snapshot/_status`` command is used to view snapshot information before the snapshot is stopped. This makes it possible to view snapshot information while the snapshot is running, unlike the ``GET /_snapshot/my-snapshots-repository/my-snapshot`` command, which waits until the snapshot has finished before displaying the information.

## Stop

If a snapshot has been executed by mistake, or if the execution is abnormally long, it can be stopped using a delete snapshot operation. The operation will then stop the snapshot before deleting it. 

To cancel a restore, the indices being restored must be deleted. All data from deleted indices will also be deleted from the cluster. 
