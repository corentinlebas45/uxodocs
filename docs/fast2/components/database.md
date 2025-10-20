# Internal database

:::warning

Prior to the v2.5, Fast2 was relying on an Elasticsearch database. This component has been dropped in favor of OpenSearch.

However the configuration of these two databases are very close (if not identical).

:::

Every object passing through Fast2 is stored into an internal database. Whether carried by the document or the punnet, all metadata are recorded in the warehouse. The major benefit of such architecture is the opportunity to check whether everything is going well by making counters about documents/data processed during your migrations.

In addition, we can easily rollback or resume operations in case of server crash. Nothing will be lost as Fast2 will precisely know where it all stopped.

There is the logic behind real-time backups in ES.

## :octicons-list-unordered-24: Indexes

Each database index referenced by Fast2 will be registered with a `f2_` prefix. An index is always written in lower case even if the campaign name in Fast2 contains characters in upper cases.

For example, the campaign `MyCampaign_Try10` will be stored in the index f2_mycampaign_try15.

During the step of broker intantiation at Fast2 startup, some indices are automatically created:

|            Index key | Description                                                        |
| -------------------: | ------------------------------------------------------------------ |
|         f2_campaigns | List of existing campaigns with processing dates and status        |
| f2_campaigns_sources | Links between campaigns and workers having performed this campaign |
|    f2_queue_settings | Reference information about source and task threads                |
|     f2_jobs_settings | Gather the configuration of save jobs                              |
|         f2_jobs_info | Information about jobs past execution details                      |

For each new campaign of Fast2, an index will be created: if you decided to run a new campaign named `EcmInjection`, the new index will be `f2_ecminjection_try1`.

## :material-database-cog: Configuration

### With or without

For an optimal migration setup, this third-party software can be easily configured at different levels to match you needs at most !
If required, it can even be disabled at will.

=== "v2.4-"

    ```ini title="./config/applications.properties"
    broker.elasticsearch.embedded.enabled=true
    ```

=== "v2.5+"

    ```ini title="./config/applications.properties"
    broker.opensearch.embedded.enabled=true
    ```

### Port

By default, Fast2 sends it data via the embedded database API made available on port `1790`.

However, in the case where this port is already used by either another Fast2 instance or any other process, the port number can be changed from the configuration files.

Since the embedded database has to be reach from both Fast2 broker and Kibana module — if the latter is enabled — there is exactly 3 places where to mention this change:

=== "v2.4-"

    | File                                           | Specification                                         |
    | ---------------------------------------------- | ----------------------------------------------------- |
    | ./config/application.properties                | `opensearch.port=1790`                                |
    | ./elasticsearch-X.Y.Z/config/elasticsearch.yml | `http.port: <!-- Commentaire nettoyé -->"]` |

=== "v2.5+"

    | File                                                           | Specification                                      |
    | -------------------------------------------------------------- | -------------------------------------------------- |
    | ./config/application.properties                                | `opensearch.port=1790`                             |
    | ./opensearch-X.Y.Z/config/opensearch.yml                       | `http.port: <!-- Commentaire nettoyé -->"]` |

If the dashboard component is installed, the database port also needs to be updated on this front as the dashboard needs to access the DB in order to read the data :

=== "v2.4-"

    ```ini title="./kibana-X.Y.Z/config/kibana.yml"
    elasticsearch.hosts: ["http://<DB-server:DB-port>"]
    ```

=== "v2.6+"

    ```ini title="./opensearch-dashboards-X.Y.Z/config/opensearch_dashboards.yml"
    opensearch.hosts: ["http://<DB-server:DB-port>"]
    ```



### Memory

The more documents, the more data. The more data, the more the database will need resources to digest, store, process data and respond to the broker.

Head out to the `./opensearch-X.Y.Z/config/jvm.options` file.

The configuration required are the following:

| Configuration | Purpose                                                                                |
| ------------: | :------------------------------------------------------------------------------------- |
|      `-Xms8g` | This setting will allocate 8GB of RAM to the database JVM heap, directly on startup.   |
|      `-Xmx8g` | Here, you specify the maximum memory which can be used, if available, by the database. |

:::warning

As specified in the `./opensearch-X.Y.Z/config/jvm.options` file, you should always set the min and max JVM heap size to **the same value**. See the [Official OpenSearch documentation](https://opensearch.org/docs/opensearch/install/important-settings/) for more information.

:::

For further comprehension of these parameters, check out the [Elasticsearch official documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/important-settings.html#heap-size-settings) on the topic or [OpenSearch official documenation](https://opensearch.org/docs/1.1/opensearch/install/important-settings/).
Upgrading the metrics will prevent `java.lang.OutOfMemoryError` to pop up during heavy migration executions.



<!-- Commentaire nettoyé -->

## Remote access to the database

The next operations need to happen when the database is shut down. To make sure of that, the `jcmd` command might be of great help.

:::warning

The database port needs to be opened from the Fast2 server, and accessible by your remote machine.

:::

1.  To check the database port is accessible from your machine, run the following command (from your work station):

    ```sh
    curl :<!-- Commentaire nettoyé -->:<!-- Commentaire nettoyé -->:<!-- Commentaire nettoyé -->]"
```



Let us now study this query:



| Section                               | Purpose                                                                                                                                                                                                                                        |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `http://server:port/f2_*`             | Here we ask to aim at all indices starting with the `f2_` prefix. This will prevent the deletion of additional indices which could be related to parallel work on the same database instance, such as Kibana reports, charts or data analysis. |
| `-f2_campaigns,-f2_campaigns_sources` | These 2 indices are needed if you decide to keep any other campaign. The `-` sign declares them as exception from the delete action.                                                                                                           |
| `[,-f2_<!-- Commentaire nettoyé -->without space,<!-- Commentaire nettoyé -->separated by commas (`,`)<!-- Commentaire nettoyé -->mentioning the `-` exclusion character**Do not forget to begin each name with the indice prefix.     |



Wildcards are supported, therefore an exception written `-f2_mycampaign*` will protect all the campaign with this _myCampaign_ radical (ex/ myCampaign_Try1, myCampaign_Try2...).

### Impossible to get results from Explorer place

Documents concerned by a migration can quickly add up, especially on cumulative campaigns. When heading to the Explorer to check punnets results, you may end up with too much information to retrieve from the database. An "error 500" message will then pop up, and if yu head out to the broker.log, the following stack will be found:

```log
Suppressed: org.opensearch.client.ResponseException: method [POST], host [http://localhost:1790], URI [/f2_campaign_try1/_search?pre_filter_shard_size=...], status line [HTTP/1.1 503 Service Unavailable]
<!-- Commentaire nettoyé -->],"type":"search_phase_execution_exception","reason":"all shards failed","phase":"query","grouped":true,"failed_shards":[<!-- Commentaire nettoyé -->}]},"status":503}
```

To fix this, you need to stop Fast2 (and the database), and add the following line:

```yml title="./opensearch-X.Y.Z/config/opensearch.yml"
search.max_buckets: 1000000
```

## Let's quickly wrap up, here

This integrated database guarantees data persistence to Fast2. If required, an embedded database can be shared among several Fast2 servers.


Allocated resources should be increased in order to resist charge of production environments.
