## DctmConfiguration ** - Module for customized Documentum configuration ** <!-- Commentaire nettoyé -->





**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Document ACL | `String` | Default ACL to set for the document. Can be overrided by adding a value 'acl_name' as document metadata. | 
 | Annotations user | `String` | Default user in charge of retrieving the annotations. If not set, an error will be thrown. | `dmadmin ` | 
 | Retrieve mime-type from content | `Boolean` | Ask Fast2 to get the document mime-type from the content encoding, instead of using 'DfClientX' provided by the Documentum client. | `true ` | 
 | Annotation ACL | `String` | This ACL should have write access. | `ar_company_wide ` | 
 | Date format | `String` | Date format which the documents will have to match in order to properly be loaded into Documentum. | `dd/MM/yyyy ` | 
 | Annotation path | `String` | Path to the folder where the annotations will be retrieved by Fast2. If not set, an error will be thrown. | `/System/Applications/ARender/Annotations ` | 



## WcmApiConfigSettings ** - URL configuration ** <!-- Commentaire nettoyé -->

This class allows to configure several elements associated with a URL.



**Optional settings**

|Key      | Type    | Description | 
| - | - | - |
 | Download URL | `String` |  | 
 | Upload URL | `String` |  | 
 | Credentials portection for user token | `String` |  | 
 | Remote URL | `String` |  | 
 | Credentials protection | `String` |  | 



