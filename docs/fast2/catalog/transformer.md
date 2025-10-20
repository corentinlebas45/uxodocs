## AlterDocumentContent ** - Create, embed, delete or update document content ** <!-- Commentaire nettoyé -->

Use this task to remove existing content of a processed document, add content to this document based on a dynamically resolved path, of even more.

**Mandatory settings**

| Key          | Type    | Description                                                                                                                                                                                                                                                                                        |
| ------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content path | Pattern | The path of the content. Leave this value empty and check 'delete content' to delete the content. This value will be resolved by Fast2 prior to the task execution. Wildcard characters are supported.  <!-- Commentaire nettoyé --> |

**Optional settings**

| Key                       | Type          | Description                                                                                                                                                                                                           |
| ------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Check if file exists      | `Boolean`     | Check if the content referenced by the path is existing and accessible. If not, an exception is thrown. If a wildcard is used as content path, the new content path will be skipped if this option is disabled. |
| Files to exclude          | `String list` | List here all patterns for files you wish to exclude. One line per match.  <!-- Commentaire nettoyé -->                                      |
| Add content as annotation | `Boolean`     | Check this option to add the content as annotation for document. If disabled, the content will be added as regular content to the document.                                                                           |
| Delete in-place content   | `Boolean`     | Override existing content with the new one, or remove the content attached to the document                                                                                                                            |

## AlterDocumentFolder ** - Change document folders classification ** <!-- Commentaire nettoyé -->

**Optional settings**

| Key                                | Type                 | Description                                                 | Default value |
| ---------------------------------- | -------------------- | ----------------------------------------------------------- | ------------- |
| Clear existing folders             | `Boolean`            | Delete all existing folders                                 | `false `      |
| Create folders                     | `Boolean`            | Set the permission to create new folders                    | `true `       |
| Append as child to existing folder | `Boolean`            | Add as a child of an already existing folder the new folder | `false `      |
| Target folder class name           | Pattern              | The symbolic name of your new folder, i.e. the path         |
| Folder name to create              | Pattern              | Leave empty to not create folder                            |
| Property map                       | `String/Pattern map` |  <!-- Commentaire nettoyé -->          |

## AlterDocumentProperties ** - Alter multiple document properties ** <!-- Commentaire nettoyé -->

Dive into the punnet to go and modify one or more properties carried by the document

**Mandatory settings**

| Key          | Type                 | Description                                                                                                     |
| ------------ | -------------------- | --------------------------------------------------------------------------------------------------------------- |
| Property map | `String/Pattern map` | List of the properties to modify. One line per property  <!-- Commentaire nettoyé --> |

## AlterPunnetProperty ** - Create or update a punnet metadata ** <!-- Commentaire nettoyé -->

Dive at the punnet level to add (or udpate) one or more properties carried by the punnet itself

**Mandatory settings**

| Key             | Type    | Description                                                      |
| --------------- | ------- | ---------------------------------------------------------------- |
| Source metadata | Pattern | This field will be resolved by Fast2 prior to the task execution |

**Optional settings**

| Key             | Type     | Description                                                                       |
| --------------- | -------- | --------------------------------------------------------------------------------- |
| Target property | `String` | Name of the porperty to change. If not set or empty, Fast2 will skip the document |

## ApplyDroolsTask ** - Rules from Excel file ** <!-- Commentaire nettoyé -->

Apply functional and/or technical rules from an Excel file. Mainly used for mapping properties during complex migrations but can be used for simple data transformations.

**Mandatory settings**

| Key             | Type          | Description                                                               |
| --------------- | ------------- | ------------------------------------------------------------------------- |
| Worksheets name | `String list` | Apply the content of the mentioned sheet. Take the first sheet if not set |
| Excel file path | `String`      | Path to the Excel worksheet  <!-- Commentaire nettoyé -->        |

**Optional settings**

| Key                           | Type      | Description                                                                                     | Default value |
| ----------------------------- | --------- | ----------------------------------------------------------------------------------------------- | ------------- |
| Static cache                  | `Boolean` | Use a static cache for rules file. If false, the Excel file will be refreshed for each campaign | `true `       |
| worksheet                     | `String`  |                                                                                                 |
| Worksheets character encoding | `String`  | Inform Fast2 of character encoding used by the worksheet                                        | `Cp1252 `     |

## CSVKeyValueParser ** - CSV parser ** <!-- Commentaire nettoyé -->

Parse a CSV content and put parsed values as document data

**Mandatory settings**

| Key                       | Type     | Description                            |
| ------------------------- | -------- | -------------------------------------- |
| Document Id property name | `String` | Property name where the Id is based on |

**Optional settings**

| Key                      | Type     | Description                              | Default value                      |
| ------------------------ | -------- | ---------------------------------------- | ---------------------------------- |
| Regex to parse each line | `String` | The regex used for parsing each document | `^\"?([^\"]*)\"?;\"?([^\"]*)\"?$ ` |

## CSVQueryTask ** - CSV Mapping: fetch data from a CSV file ** <!-- Commentaire nettoyé -->

Fetch data from CSV using a key and and extra data from the CSV columns.

**Optional settings**

| Key                           | Type          | Description                                                              | Default value         |
| ----------------------------- | ------------- | ------------------------------------------------------------------------ | --------------------- |
| Data name to report results   | `String`      | Name of the property where the result status is stored inside the punnet | `CsvQueryTaskStatus ` |
| Check result unicity          | `Boolean`     | If it's not, populate first found result                                 | `false `              |
| Definition of the CSV to read | CsvDescriptor |                                                                          |
| Skip exception                | `Boolean`     | Silent fail instead of throwing exceptions                               | `false `              |

## ContentURLResolver ** - Build absolute URL for content ** <!-- Commentaire nettoyé -->

Simple Content URL renaming task : if target property (a list of string) is set, try to find the first path in this list which exists, converting this path to a fully-defined path including intermediary paths, corresponding documentId, extension, .... Otherwise, use Content URL included in Punnet as a wildcarded path (e.g. C:/input/_/_.xml), and resolve to a fully-defined path.

**Mandatory settings**

| Key           | Type     | Description                                                                                  |
| ------------- | -------- | -------------------------------------------------------------------------------------------- |
| Source folder | `String` | Path of the parent folder, which will be the common part for all target paths in target list |

**Optional settings**

| Key                                       | Type          | Description                                                                                                                                                                                | Default value |
| ----------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| New mime type                             | `String`      | New mime type to set at the end of the new content path                                                                                                                                    |
| Extension to use                          | `String`      | Wildcards accepted                                                                                                                                                                         | `* `          |
| Process annotation contents               | `Boolean`     | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata                                                                            | `false `      |
| Scan recursive content                    | `Boolean`     | Only convert terminal contents and not container ones                                                                                                                                      | `false `      |
| Mime type blacklist                       | `String`      | Restrict action on content with this mimetype                                                                                                                                              |
| Supported mime-types                      | `String list` | Specify the list of all mime-types of documents which Fast2 will convert                                                                                                                   |
| List of paths to resolve                  | `String list` | Regex wildcards accepted                                                                                                                                                                   |
| Throw conversion exceptions               | `Boolean`     | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed                                                         | `true `       |
| Exception on multi-page content           | `Boolean`     | Ask Fast2 to throw a task exception when running into multi-page contents                                                                                                                  | `false `      |
| Mime-type : Check document before content | `Boolean`     | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false `      |
| findMimeType                              | `Boolean`     |                                                                                                                                                                                            |
| Process all contents                      | `Boolean`     | Fast2 will either only focus on the first encountered content, or process them all                                                                                                         | `true `       |

## ConvertAndSaveIS ** - Convert FileNet Image Services annotations ** <!-- Commentaire nettoyé -->

This task is used to perform the IS annotation conversion and its save into a target referential

**Mandatory settings**

| Key                  | Type                           | Description                                             |
| -------------------- | ------------------------------ | ------------------------------------------------------- |
| Annotation converter | FileNetXFDFAnnotationConverter | The FileNet XFDF module used to convert the annotations |
| IS annotation parser | ParseISAnnotation              | Specific module to parse the Image Services annotations |

**Optional settings**

| Key                                      | Type               | Description                                                                                                            | Default value                 |
| ---------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| Status for all annotation converted      | `String`           | Value when all annotation have been converted                                                                          | `2 `                          |
| Status for some annotations in exception | `String`           | Value when some annotation are in exception                                                                            | `8 `                          |
| Property name result                     | `String`           | Keep the conversion result                                                                                             | `AnnotationConversionStatut ` |
| Skip conversion error                    | `Boolean`          | Either Fast2 will throw an exception if an error occured during the conversion, or it will skip to the next annotation | `false `                      |
| Convert annotation to XFDF               | `Boolean`          | Either Fast2 converts during annotation process, or leave the annotation to its original format                        | `true `                       |
| Annotation accessor                      | AnnotationAccessor | Choose annotation accessor to save annotations                                                                         |
| Document layout DPI                      | `Float`            | Set here the layout DPI for the document                                                                               | `72.0 `                       |
| Status for no-conversion annotation      | `String`           | Value when no annotation has been converted                                                                            | `9 `                          |

## ConvertDateProperties ** - Convert multiple document/folder date properties ** <!-- Commentaire nettoyé -->

Easily convert date properties from one format to another.

**Mandatory settings**

| Key                | Type           | Description                                                             |
| ------------------ | -------------- | ----------------------------------------------------------------------- |
| Properties names   | `List<!-- Commentaire nettoyé --> Ex/ targetProperty = documentStringGetter |

**Optional settings**

| Key                                     | Type      | Description                                                                 | Default value |
| --------------------------------------- | --------- | --------------------------------------------------------------------------- | ------------- |
| Exception when property rename conflict | `Boolean` | Throws an exception if the target property exists, otherwise fails silently | `true `       |

## UpdateSharedObject ** - Update a shared object value from its name ** <!-- Commentaire nettoyé -->

Use this task to change a system-wide configuration setting at runtime. Mainly used for dynamic campaign variables built as a shared object in Fast2. Be careful: only works with shared object set with Global scope

**Mandatory settings**

| Key                          | Type     | Description                                                                                                                                                                                                                                                                                          |
| ---------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shared object new value      | `String` | Can be almost any type of variable (String, int...) except object and tasks of the Fast2 catalog. You can also access to any custom document data value from the pattern using `${variableName}`. Already known variables : base, campaign, taskFlowMap, step, punnetTraceId, punnetId and documentId. |
| Shared object name to update | `String` | Name of the object to update. The shared object will be automatically created if does not already exists.                                                                                                                                                                                            |

**Optional settings**

| Key                  | Type      | Description                                 | Default value |
| -------------------- | --------- | ------------------------------------------- | ------------- |
| Number of executions | `Integer` | Means the number of executions per campaign | `1 `          |

## XSLTransform ** - Apply a XSL transformation on XML Punnets ** <!-- Commentaire nettoyé -->

With pretty much straight-forward task you can fine-tune any punnet or document metadata, or even the content targetted by the migration. Build your custom XSL file, and ask Fast2 to apply the changes onto the migration-related data

**Mandatory settings**

| Key           | Type     | Description                                                                                                                                       |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| XSL file path | `String` | Specify here the absolute path of the XSL file, as well as the name and the extension of the file. This file can be located on a separate machine |

**Optional settings**

| Key                    | Type     | Description                            |
| ---------------------- | -------- | -------------------------------------- |
| XSL Stylesheet content | `String` | Enter here your xsl:stylesheet content |
