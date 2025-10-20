```xml
## AlfrescoBulkImporter ** - Perform a bulk import on Alfresco ** <!-- Commentaire nettoyé -->
```

Load documents and metadata into Alfresco without changing the current tree structure of those same documents. The good performances of such injection are restrained with the complexity of the tree-view setup

**Mandatory settings**

| Key                          | Type                       | Description                                                                                                  |
| ---------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Source directory             | `String`                   | Path to the folder to migrate into Alfresco                                                                  |
| Target path                  | `String`                   | Path where the folder will be stored into Alfresco                                                           |
| Alfresco connection provider | AlfrescoConnectionProvider | This modules is responsible of the two-way communication between Fast2 and the designated Alfresco instance. |
| Target NodeRef               | `String`                   | NodeRef of the parent where the folder will be stored into Alfresco                                          |

**Optional settings**

| Key               | Type      | Description                                                                                          | Default value |
| ----------------- | --------- | ---------------------------------------------------------------------------------------------------- | ------------- |
| Clean destination | `Boolean` | Replace all existing content or metadata present in the destination folder before injection          | `false `      |
| Disable rules     | `Boolean` | Disable rules for injection to prevent Alfresco to run checks on each document                       | `false `      |
| Add metadata      | `Boolean` | Load document content and its metadata. All metadata might not me compatible with Alfresco standards | `false `      |
| Number of threads | `Integer` | Number of threads to allocate for the bulk import                                                    | `1 `          |
| Timeout           | `Integer` | Time to wait before closing the session. Of not set, the value will be set to 300'000                |
| Copy files        | `Boolean` | Leave all documents in the source folder                                                             | `false `      |
| Batch size        | `Integer` | Size of the batch to build for upload                                                                | `0 `          |

```xml
## AlfrescoInjector ** - Injection into Alfresco ECM using CMIS protocol ** <!-- Commentaire nettoyé -->
```

This task can be used to inject documents into Alfresco, using the CMIS protocol on top of HTTP. We rely on v1.0 of the opencmis module made available by Alfresco.

**Mandatory settings**

| Key                          | Type                                                                            | Description                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Alfresco connection provider | [AlfrescoCMISConnectionProvider](credentials.md#AlfrescoCMISConnectionProvider) | This modules is responsible of the two-way communication between Fast2 and the designated Alfresco instance |

**Optional settings**

| Key                      | Type           | Description                                                                                        | Default value    |
| ------------------------ | -------------- | -------------------------------------------------------------------------------------------------- | ---------------- |
| Alfresco ID key          | `String`       | Document metadata key with the Alfresco ID of the injected document.                               | `alfDocumentId ` |
| Property Helper          | PropertyHelper |                                                                                                    |
| Properties regex         | `String`       | Regex pattern to filter the properties to inject with the document.                                | `(cmis:.*) `     |
| Hash content column name | `String`       | Hash content column name to version a document only when the content is different (but same index) |
| Destination folder       | `String`       | Folder where the documents will be loaded into                                                     |
| SQL update query         | `String`       | CMIS SQL update query to select the document to update.                                            |
| Overwrite 'can create'   | `Boolean`      | Ask Fast2 to create destination folder(s) if they do not already exist                             | `true `          |
| Hash index column name   | `String`       | Hash index column name to version a document only when the content is different (but same index)   |
| Force update             | `Boolean`      | Throw an error if the document did not exist prior to the loading call                             |
| Prevent duplicate        | `Boolean`      | Fast2 will throw an error if the document has already been injected                                |

```xml
## AlfrescoRestInjector ** - Alfresco injector using Alfresco REST protocol ** <!-- Commentaire nettoyé -->
```

This task relies on the Alfresco public REST API (with v1.0.4 of the Alfresco REST client) to load documents and metadata into a given Alfresco instance. To force the type of resource to create in the destination system, use the `nodeType` data into the document dataset. Default value is `cm:content`.

**Mandatory settings**

| Key                          | Type                                                                            | Description |
| ---------------------------- | ------------------------------------------------------------------------------- | ----------- |
| Alfresco connection provider | [AlfrescoRESTConnectionProvider](credentials.md#AlfrescoRESTConnectionProvider) |             |

**Optional settings**

| Key                                                 | Type      | Description                                                                                                                                                                                                                                                                                                                                                | Default value |
| --------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Root folder name to inject in a specific repository | `String`  | '-my-', '-shared-', '-root-' are equivalent                                                                                                                                                                                                                                                                                                                | `-my- `       |
| Alfresco destination path                           | `String`  | The path of the folder where the documents will be saved in Alfresco. This field supports patterns (based on punnet, document and campaign metadata). If this path starts with Alfresco nodeRef prefix 'workspace://SpacesStore/', the document will be injected into the corresponding folder. However, such folder needs to be created beforehand. |
| Regex pattern filter for document properties        | `String`  |                                                                                                                                                                                                                                                                                                                                                            | `(cm:.*) `    |
| Safe update                                         | `Boolean` | If the document does not already exist, the first version will create the document. Later versions will be incremented on top of the existing version based on the data 'cm:versionLabel' property.                                                                                                                                                        |
| Auto rename feature                                 | `Boolean` | Triggers the Alfresco auto-rename feature, to prevent Alfresco to throw a 'duplicate document' error.                                                                                                                                                                                                                                                      | `false `      |
| Pivot metadata for multiversion                     | Pattern   | If all documents of the punnet have the same value for this metadata, they will be considered as being the different versions of a same document in Alfresco.                                                                                                                                                                                              |
| Overwrite documents when they already exist         | `Boolean` | Triggers the Alfresco overwrite feature, where the incoming document will replace an existing document having the same key.                                                                                                                                                                                                                                | `false `      |
```xml
| Alfresco ID for update                              | `String`  | Specify here the Alfresco UUID of the document to update. The value will be resolved by Fast2, syntax `$&#92;{...&#92;}` is supported. This value can start with 'workspace://SpacesStore/'  <!-- Commentaire nettoyé -->                                                                                                                         |
```

```xml
## AwsInjector ** - Injector into AWS S3 buckets ** <!-- Commentaire nettoyé -->
```

Fast2 proposes this task to load your documents, metadata and more within designated S3 buckets. Both client- and server-side encryption are supported (v1.6 of AWS encyption SDK). This loader relies on v1.11.848 of AWS Java SDK. The uploaded file will be title according to the `name` metadata of the processed document.

**Mandatory settings**

| Key                | Type                                                          | Description                                                     | Default value    |
| ------------------ | ------------------------------------------------------------- | --------------------------------------------------------------- | ---------------- |
| Destination bucket | `String`                                                      | The name of the bucket where the documents will be migrated to. | `fast2-default ` |
| AWS credentials    | [AWSConnectionProvider](credentials.md#AWSConnectionProvider) | Must have granted AmazonS3FullAccess permission                 |

**Optional settings**

| Key                   | Type      | Description                                                                                                                                                                 | Default value |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
```xml
| Encryption key        | `String`  | Key used for server-side encryption.  <!-- Commentaire nettoyé -->                                                                                 |
```
| Destination folder    | `String`  | The parent folder of the documents to inject. This field supports pattern (using punnet, document or campaign metadata). Leave empty for storing at the root of the bucket. |
| Dry run               | `Boolean` | Simulates an injection, performs document integrity controls, but does not load the document into AWS S3                                                                    | `false `      |
| Destination file name | `String`  | Metadata for the file name once injected into the S3 bucket. Pattern syntax is supported.                                                                                   | `$\{name\} `    |
```xml
| Encryption context    | `String`  | Context used for server-side encryption. This context is a JSON map.  <!-- Commentaire nettoyé -->                                                        |
| ARN key               | `String`  | Key used for client-side encryption, before loading the document into S3.  <!-- Commentaire nettoyé -->:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab<!-- Commentaire nettoyé --> Ex/ [Id]=`$&#92;{myFileNetDocumentId&#92;}`)<!-- Commentaire nettoyé -->/gName="!-- Balise avec caractères invalides supprimée --"` where `**` and `<!-- Commentaire nettoyé --> Ex/ [Id]=`$&#92;{myFileNetDocumentId&#92;}`<!-- Commentaire nettoyé --> ⚠️ **Deleted**: The `MobiusInjector` task is deleted and no longer available in Fast2 from v2025.0.0.
```

This task will upload documents and metadata onto Mobius, from version 8 up to version 11. Based on the `className` and `section` properties, specify exactly where you'd like your documents to be stored.

**Mandatory settings**

| Key                        | Type                                                                | Description                                                                                   |
| -------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Mobius connection provider | [MobiusConnectionProvider](credentials.md#MobiusConnectionProvider) | The Fast2 module required to establish the communication with the destination Mobius instance |

**Optional settings**

| Key                              | Type          | Description                                                                                                                            |
| -------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Properties to inject into Mobius | `String list` | List of names of the properties which will be added to the topic of the document. These properties have to be attached to the document |

```xml
## MultiUpdateSQLQueryTask ** - Update a database with several document data ** <!-- Commentaire nettoyé -->
```

**Mandatory settings**

| Key          | Type                                                          | Description                                                                                          |
| ------------ | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| WHERE clause | `String`                                                      | All matching rows will be updated. This field will be resolved by Fast2 before the task is executed  |
| Query caller | [SQLQueryGenericCaller](credentials.md#SQLQueryGenericCaller) | This modules is responsible of establishing the connection between Fast2 and the designated database |
| Table name   | `String`                                                      | The table of the row to update                                                                       |

**Optional settings**

| Key            | Type          | Description                                                                                                    | Default value |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------- | ------------- |
| Skip exception | `Boolean`     | Fast2 will either throw an error if no update action has been executed, or proceed to next document            | `true `       |
```xml
| Data to update | `String list` | The list of all key-values pairs to update the given rows with  <!-- Commentaire nettoyé --> |
```

```xml
## NuxeoInjector ** - Nuxeo injector using Nuxeo REST API ** <!-- Commentaire nettoyé -->
```

This task load documents and metadata into a given Nuxeo instance using the Nuxeo REST API. If the document does not have any folder property, he will be injected in the workspace root folder. The documents **have to be in the correct version order** before entering the Nuxeo task. For Nuxeo to identify the versions as different, either the 'name' or the 'dc:description' data needs to be different.

**Mandatory settings**

| Key                       | Type                                                              | Description |
| ------------------------- | ----------------------------------------------------------------- | ----------- |
| Nuxeo connection provider | [NuxeoConnectionProvider](credentials.md#NuxeoConnectionProvider) |             |

**Optional settings**

| Key                                        | Type          | Description                                                                                                                                                                                                          | Default value |
| ------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Attach punnet data                         | `Boolean`     | Check this option to map the punnet data to Nuxeo properties                                                                                                                                                         | `true `       |
| Blacklist                                  | `String list` | List of metadata (either on punnet or document) not to map to the Nuxeo documents.                                                                                                                                   |
| Attach document data                       | `Boolean`     | Check this option to map the document data to Nuxeo properties                                                                                                                                                       | `true `       |
| Injection path                             | `String`      | Default path to inject your documents                                                                                                                                                                                | `/ `          |
| Attach folders                             | `Boolean`     | Check this option to upload the documents into a specified folder architecture based on the details embedded in the document                                                                                         | `true `       |
| Delete annotations when they already exist | `Boolean`     |                                                                                                                                                                                                                      | `true `       |
| Replace document if already present        | `Boolean`     | Check this option to replace all versions of a document in Nuxeo, based on the data `documentId`. This feature acts like a replacement. If the document did not already exist, then it will be created from scratch. |
| Attach content                             | `Boolean`     |                                                                                                                                                                                                                      | `true `       |

```xml
## OpenTextInjector ** - OpenText Content Server injector based on custom Rest API ** <!-- Commentaire nettoyé -->
```

**Mandatory settings**

| Key                          | Type                                                      | Description                                                                                                                                                                                                     |
| ---------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
```xml
| Attribute file path          | `String`                                                  | OpenText category must be associated with their ids within the file. Fast2 will automatically translate the data name to the correct id specified by the file  <!-- Commentaire nettoyé --> |
```
| OpenText credentials         | [OpenTextCredentials](credentials.md#OpenTextCredentials) |                                                                                                                                                                                                                 |
| Expected folder architecture | `String list`                                             |                                                                                                                                                                                                                 |
| OpenText client              | OpenTextRestClient                                        |                                                                                                                                                                                                                 |

**Optional settings**

| Key                                      | Type          | Description                                                                                                                                                                                                                                                                        | Default value |
| ---------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| List of properties not to inject         | `String list` | These properties will be excluded                                                                                                                                                                                                                                                  |
| NodeId of the webReport parameter to use | `String`      | Opentext webReports allow users to build search request with specific parameters                                                                                                                                                                                                   |
| List of properties to inject             | `String list` | If empty the whole dataSet will be injected                                                                                                                                                                                                                                        |
| Version document if data exists          | `String`      | Fast2 will check if the data filled in this field for carrying the version and the 'nodeId' data are available at document level. If so, the document will be injected within OpenText and its version increased by one. A new data 'createdVersion' will be added to the document |
| Ticket period                            | `Integer`     | Time in seconds between two ticket creation                                                                                                                                                                                                                                        | `60 `         |

```xml
## SQLQueryTask ** - Add data to documents in database ** <!-- Commentaire nettoyé -->
```

Simple task to query a SQL database and fill each Document data with results

**Mandatory settings**

| Key                | Type                 | Description                                                                                                                      |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Key of target data | `String`             | The name of the data where the value must be added                                                                               |
| Query caller       | SQLQueryColumnCaller | This modules is responsible of establishing the connection between Fast2 and the designated database                             |
| Key of source data | `String`             | The name of the data to update the documents with. If the data is not retrieved from the document, Fast2 will skip this document |

**Optional settings**

| Key               | Type      | Description                              | Default value |
| ----------------- | --------- | ---------------------------------------- | ------------- |
| Reset target data | `Boolean` | Clean content when target already exists | `true `       |

```xml
## SQLStatementTask ** - Insert or updated database ** <!-- Commentaire nettoyé -->
```

With this task, you will be able to perform any SQL instruction (such as insertions and updates) on any given table of the specified database

**Mandatory settings**

| Key           | Type                                                          | Description                                                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
```xml
| SQL statement | `String`                                                      | The statement you want Fast2 to run on the database. The syntax needs to match SQL standards. Use a ? to reference your annotation  <!-- Commentaire nettoyé --> |
```
| Query caller  | [SQLQueryGenericCaller](credentials.md#SQLQueryGenericCaller) | This modules is responsible of establishing the connection between Fast2 and the designated database                                                                                                                          |

**Optional settings**

| Key                | Type      | Description                                                                                        |
| ------------------ | --------- | -------------------------------------------------------------------------------------------------- |
| Inject annotations | `Boolean` | Fast2 will either throw an error if the statement has not properly been executed, or fail silently |
| Skip exceptions    | `Boolean` |                                                                                                    |

```xml
## UpdateSQLQueryTask ** - Update SQL database ** <!-- Commentaire nettoyé -->
```

This task will perform update instructions base on document data onto a given SQL database

**Mandatory settings**

| Key                     | Type                                                          | Description                                                                         |
| ----------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| SQL connection provider | [SQLQueryGenericCaller](credentials.md#SQLQueryGenericCaller) | The module establishing the communication between Fast2 and the designated database |
| Name of the new column  | `String`                                                      | The name of the column which will be added to the row with the value to update      |
| Table name              | `String`                                                      | The name of the SQL table on which all update statements will be performed          |

**Optional settings**

| Key                        | Type      | Description                                                                                                                               | Default value |
| -------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| WHERE clause               | `String`  | All matching rows will be updated. This field will be resolved by Fast2. Leave empty to target all rows.                                  |
| Ignore when no row updated | `Boolean` | Skip exception when no database row has been updated                                                                                      | `true `       |
| Value to update            | `String`  | Name (= key) of the document metadata whose value will be inserted into the row. If none is found in the document, this latter is skipped |
