## AWSSource ** - Complete extractor module from AWS S3 ** 

This AWS extractor performs from a list of sources the extraction of your document content. Many options (suffix, prefix...) exist to optimally specify the documents you want to take into account

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | AWS connection provider | [AWSConnectionProvider](credentials.md#AWSConnectionProvider) | Must have AmazonS3FullAccess permission | 
 | Source buckets | `String list` | Buckets where folders are stored | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Accept quotes in values | `Boolean` | If enabled, this option will accept quotes in values | 
 | AWS start-after key | `String` | Absolute path of S3 object to start after | 
 | ARN key for KMS encryption | `String` |  | 
 | New column names to set | `String list` | If empty, populated from first line | 
 | Replace empty titles | `Boolean` | If enabled, any empty title in the CSV file will be replaced by the default value. If several titles miss, the default title will be suffixed with an incremental index. | 
 | AWS suffix | `String` | S3-object will be extracted if its key has such suffix | 
 | Number of lines to skip | `Integer` | This option helps to skip lines, meaning their data will not be processed. By default, only the 1st line is skipped considering it surely consists in the headers row   | `1 ` | 
 | Default column title | `String` | Default value used for untitled columns. Will be incremented with a number if many. Will only be used if the replace empty titles option is enabled. | `Untitled ` | 
 | Continue processing CSV on fail | `Boolean` | If enabled, the following errors will not trigger an exception: - CSV file does not exist - CSV file is empty (no line) - CSV file has only headers and no line for documents.Note that if you give 5 CSV paths and the number 3rd is in error, only the Fast2 logs will provide information regarding the failing CSV file. | 
 | Source folders | `String list` | Folders in the S3 bucket(s) containing the files to migrate | 
 | AWS prefix | `String` | S3-object will be extracted if its key has such prefix | 
 | Stop at first error in CSV | `Boolean` | Fast2 will automatically be stopped at the first error encountered in the CSV | `false ` | 
 | Column headers in first CSV file only | `Boolean` | Only read column definitions from the first parsed CSV file | `false ` | 
 | Documents per punnet from CSV | `Integer` | Number of documents each punnet will carry when processing a CSV file   | `1 ` | 
 | CSV separator | `String` | Separator between each value. This option will be ignored if 'Process files as list of punnets' is disabled. | `, ` | 
 | Process files as list of punnets | `Boolean` | The expected format is a CSV file (1 row for headers, next rows for 1 punnet each), but the `.csv` extension is not mandatory. Only single-documents punnets will be created (ex/ not working for multiversions documents). Multivalue data will be concatenated to one whole String value. The first line of the file will be considered as CSV header line. | 
 | extraColumns | `String list` |  | 



## AlfrescoRestSource ** - Alfresco extractor using Alfresco REST protocol ** 

This task relies on the Alfresco public REST API (with v1.0.4 of the Alfresco REST client) to retrieve documents and metadata into a given Alfresco instance

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | CMIS query or AFTS query | `String` | Query used to retrieve the objects from Alfresco   | 
 | Alfresco connection provider | [AlfrescoRESTConnectionProvider](credentials.md#AlfrescoRESTConnectionProvider) |  | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Max item to return per call | `Integer` | Set the paging max items threshold to specify the number of Alfresco objects to retrieve per call. | `100 ` | 
```xml
 | Fields to extract | `String` | The less the better ! Only the 'id' is necessary to start the migration workflow. Separate the different values with a comma, no space. Use properties from <a href="https:github.comAlfrescoalfresco-client-sdkblobmasterclient-javaalfresco-java-clientsrcmainjavacomalfrescoclientapicommonconstantPublicAPIConstant.java#L27">com.alfresco.client.api.common.constant.PublicAPIConstant Ex/  id,name Ex/  SELECT * FROM cmis:document Ex/  The input file includes 10 lines meaning 10 document identifiers to extract. By setting this value to 2, Fast2 will create 5 punnets, each containing 2 documents Ex/  WHERE Date = '2012-11-14' Ex/  `C:/samples/myDocument.csv``C:&#92;&#92;samples&#92;&#92;myDocument.csv``C:&#92;&#92;&#92;&#92;samples&#92;&#92;&#92;&#92;myDocument.csv``&#92;"C:&#92;&#92;samples&#92;&#92;myDocument.csv&#92;"``C:/samples/$&#92;{map&#92;}.csv` Ex/  In a file of 10 lines, putting '3' in the input field will skip the 1st, 2nd and 3rd lines Ex/  By setting this value to 2, each punnet created will contain 2 documentsthe setup for Documentum Ex/  `SELECT r_object_id FROM dm_document WHERE ...` Ex/  `myMap_Run1` Ex/  By setting this value to 2, each punnet created will contained 2 documents Ex/  By setting this value to 2, each punnet created will contained 2 documents Ex/  `C:/samples/myDocument.txt` -> retrieve only one document`C:&#92;&#92;samples&#92;&#92;myDocument.txt``C:&#92;&#92;&#92;&#92;samples&#92;&#92;&#92;&#92;myDocument.txt``&#92;"C:&#92;&#92;samples&#92;&#92;myDocument.txt&#92;"``C:/samples/*.*` -> retrieve all files directly at the root of the `samples/` folder, no matter their extension`C:/samples/**` -> retrieve all files directly at the root of the `samples/` folder, as well as file inside subfolders`C:/samples/**/*.yes` -> retrieve all files directly at the root of the `samples/` folder, as well as file inside subfolders, whose extension is `.yes`. Ex/  cc:copy:&#92;"/&#92;&#92;&lt;/a&gt; |?*` | 
```
 | Search in Subject | `String` |  | 
 | Search in Body | `String` |  | 
 | Only unread messages | `Boolean` |  | 



## OpenTextSource ** - OpenText extractor using OpenText REST protocol ** 



**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | OpenText credentials | [OpenTextCredentials](credentials.md#OpenTextCredentials) |  | 
 | OpenText client | OpenTextRestClient |  | 
 | Node Id | `Integer` |  | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Order by named column | `String` | Format can be 'name' or 'asc_name' or 'desc_name'. If the prefix of asc or desc is not used then asc will be assumed   | 
 | Ticket period | `Integer` | Time in seconds between two ticket creation | `60 ` | 



## RandomSource ** - Random punnet generator ** 

Randomly produces punnets containing documents, metadata, content...

**Mandatory settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Number of punnet to generate | `Integer` | If 'minimum punnet number' is set, this value here will be considered as the higher threshold | `1000 ` | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Maximum document number | `Integer` | Excluded | `1 ` | 
 | Minimum metadata number | `Integer` | Included | `1 ` | 
 | Minimum punnet number | `Integer` | If not set, the number of generated punnets will be exactly the number set at 'Number of punnets to generate' | 
 | Maximum number of metadata values | `Integer` | Included | `6000 ` | 
 | Minimum number of metadata values | `Integer` | Included | `0 ` | 
 | Maximum metadata number | `Integer` | Excluded | `10 ` | 
 | Minimum document number | `Integer` | Included | `1 ` | 



## SQLSource ** - Complete extractor from SQL database ** 

Extract and map to punnet or document layout specified properties

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | SQL connection provider | [SQLQueryGenericCaller](credentials.md#SQLQueryGenericCaller) |  | 
 | SQL query | `String` | Select precisely documents you want to extract through a classic SQL query | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Property name to group by document | `String` | Column used to group lines by document. If used set an 'ORDER BY' in your sql query | 
 | SQL mapping for punnet | `String/String map` | Mapping of SQL properties to punnet metadata. Use 'punnetId' for Punnet Id | 
 | Allow duplicates data | `Boolean` |  | 
 | Property name to group by punnet | `String` | Column used to group lines by punnet. If used set an 'ORDER BY' in your sql query | 
 | SQL mapping for document | `String/String map` | Mapping of SQL properties to document metadata. Use 'documentId' for Document Id, otherwise the first column will be used as documentId | 
 | Push remaining, non-mapped columns as document properties | `Boolean` |  | `true ` | 



## ZipSource ** -  ** 






