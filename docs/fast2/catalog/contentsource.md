## AWSContentSource ** - Extract content from AWS S3 bucket ** 



**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | AWS access credentials | [AWSConnectionProvider](credentials.md#AWSConnectionProvider) | Credentials of the user (must have been granted AmazonS3FullAccess permission). | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | ARN key for getAwsPrefixKMS encryption | `String` |  | 
 | Bucket name | `String` | Name of the S3 bucket where the content is stored. | `$ ` | 
 | Export attached CMOD resources | `Boolean` |  | `true ` | 



## DctmContentExtractor ** - Extract document-related details from Documentum ** 

This Documentum connector is designed for extraction of document versions, metadata, folders and content (only the 1st content of a document) from a Documentum repository. Multiversion documents will be retrieved from the shared 'i_chronicle_id'. Since Documentum architecture involves particular port and access management, a worker should be started on the same server where Documentum is running; Make sure to check the basic requirements at [the setup for Documentum](https://www.fast2.tech/documentation/setup-with-environment/documentum).

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| Query | String | SELECT [Id],[DocumentTitle] FROM Document WHERE [Property] = `'$\{myCriterion\}'` | |
| Extract folders absolute path | `Boolean` | The absolute path of the folder inside the FileNet instance will be extracted during the process | `false ` |
| Extract content | `Boolean` | The document content will be extracted during the process | `true ` |
| Extract all versions | `Boolean` | Extract the superseded versions of the documents matching the query | |
| Extract annotations | `Boolean` | All annotations owned by the document will be extracted | `true ` | 



## FlowerContentExtractor ** -  ** 



**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Flower component category (DOCUMENT, TASK, FOLDER or VIRTUAL_FOLDER) | `String` |  | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Extract document annotations | `Boolean` |  | `false ` | 
 | Extract component facts | `Boolean` |  | `false ` | 
 |  | [FlowerDocsConnectionProvider](credentials.md#FlowerDocsConnectionProvider) |  | 
 | Extract document file content | `Boolean` |  | `false ` | 



## IDMISContentExtractor ** - ImageServices WAL JNI-bridged Extractor ** 

This task extracts documents from the Panagon Image Services ECM (indexes, optional content and annotations). One punnet of one document for each ECM document. However, it's not a real source task. The documents to be extracted are identified by a [BlankSource](#BlankSource) task generating a set of empty Punnets, i.e. containing only documents each bearing a document number (documentId) to extract.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Password | `String` | Password of the aforementioned username | 
 | Connection organization | `String` | Organization name for the connection | 
 | Connection domain | `String` | Domain name of the connection | 
 | Username | `String` | Login with scope to access the docbase with proper rights | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Annotations in ARender format | `Boolean` | Convert annotations to ARender format | `false ` | 
 | Annotation converter | ParseISAnnotation | Specific converter from IS format. Allow to resize the extracted annotations | 
 | Annotations in raw format | `Boolean` | Save annotation contents in raw format inside the punnet | `false ` | 
 | Version of libIDMIS | `String` | This task is based on the WAL library and on the specific Fast2 library 'libIDMIS.dll'. This library must be in a directory of the Windows PATH. In the wrapper.conf or hmi-wrapper.conf file, activate the use of this library: wrapper.java.library.path.increment = ../libIDMIS/w32For the moment, only 32-bit libraries are configured | `libIDMIS-1.0.15 ` | 
 | Test scenarios | `Boolean` | Empty testing stub instead of libIDMIS | `false ` | 
 | Connection terminal | `String` | Terminal name for the connection | 
 | Use opacity for annotations | `Boolean` |  | `false ` | 
 | Unrecognized annotation file path | `String` | Path of the alternative annotation xml file for unrecognized annotation. If not specified the punnet will go in exception | 
 | Extract document content | `Boolean` | The document will be extracted with its content | `true ` | 
 | Extract document annotation | `Boolean` | The associated annotations will be extracted | `true ` | 



## MDOParserExternalContent ** - Parse FWTF (Fixed Width Text File) with external content to a punnet description ** 

An MDO file is a flat file defined such as: each line corresponds to a document and each line contains information about the document
The extraction of information from each line is based on a CSV configuration file, which provides the name of the metadata to be inserted into the punnet document, as well as its characteristics.


It consists of the following columns, separated by a comma:

- Field: name of the metadata to add \n
- Length: length of the metadata. If the value is greater than this length, then it will be truncated. If the value is lower, it will be completed by spaces on the right \n
- Offset: position in MDO file \n
- Mandatory: Y / N \n
- Occurs: number of occurrences allowed for the field. The successive values ​​of the field will then be added to the values ​​of the metadata (respecting the Length parameter for each one) \n
- Type: Type of metadata to add to the punnet document \n


The MDOParserExternalContent task is used to retrieve external content for each document. To do this, the name of the column defining the content path is specified in the task settings.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | MDO format specification file path | `String` | CSV configuration absolute file path containing MDO format specification | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | File scanner | FileScanner | Recovers your files | 
 | Date format | `String` | Date format used in MDO file. Must be the same for each line of the document | `yyyy-MM-dd ` | 
 | Property name containing path content | `String` | Name of the field in the configuration file that contains the path to the content. If not filled, the content will not be saved in the punnet | 
 | Create one punnet for each document of FWTF | `Boolean` | If true then a punnet with one document will be created for each entry in the MDO file. Otherwise, one punnet will be created containing as many documents as there are entries in the MDO file | `false ` | 
 | Dataline property name | `String` | Name of the metadata that will contain the MDO line read. If not specified, the line read will not be saved in the punnet | 
 | contentLocationAbsolute | `Boolean` |  | 
 | Last punnet property name | `String` | Data name indicating which punnet is the last of document in punnet. If null, data isn't added in punnet. For multipunnet case only | 



## MDOParserInternalContent ** - FWTF (Fixed Width Text File) parser with internal content ** 

Like the MDOParserExternalContent task, the MDOParserExternalContent source allows you to parse each line of the MDO file in Punnet. The difference between these two tasks is that the content is stored inside the MDO itself. The start and end of the content is defined by a tag specified in the task settings

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | MDO format specification file path | `String` | CSV configuration absolute file path containing MDO format specification | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | File scanner | FileScanner | Recovers your files | 
 | Date format | `String` | Date format used in MDO file. Must be the same for each line of the document | `yyyy-MM-dd ` | 
 | End tag | `String` | End tag property name signifying the end of the content | 
 | Create one punnet for each document of FWTF | `Boolean` | If true then a punnet with one document will be created for each entry in the MDO file. Otherwise, one punnet will be created containing as many documents as there are entries in the MDO file | `false ` | 
 | Dataline property name | `String` | Name of the metadata that will contain the MDO line read. If not specified, the line read will not be saved in the punnet | 
 | Last punnet property name | `String` | Data name indicating which punnet is the last of document in punnet. If null, data isn't added in punnet. For multipunnet case only | 
 | Original text content property name | `String` | Data name containing original text content. If null, data isn't added in the punnet | 



## OpenTextContentSource ** - OpenText content extractor using OpenText REST protocol ** 



**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | OpenText credentials | [OpenTextCredentials](credentials.md#OpenTextCredentials) |  | 
 | OpenText client | OpenTextRestClient |  | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Extract all versions | `Boolean` | Extract the superseded versions of the documents matching the query | 
 | Extract document metadata | `Boolean` | Save metadata as document metadata | `false ` | 
 | Extract document categories | `Boolean` | Save categories as document metadata | `false ` | 
 | Extract content | `Boolean` | The document content will be extracted during the process | `true ` | 
 | Ticket period | `Integer` | Time in seconds between two ticket creation | `60 ` | 



## SQLContentExtractor ** - Extract document content from SQL ** 

Extract clob and blob object-types. Classic types like varchar are extraced as well

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | SQL connection provider | [SQLQueryGenericCaller](credentials.md#SQLQueryGenericCaller) |  | 
 | SQL query | Pattern | Select precisely documents you want to extract through a classic SQL query | 


**Optional settings**

|Key      | Type    | Description | 
| - | - | - |
 | SQL mapping for content | `String/String map` | Mapping of SQL properties to document content. | 



