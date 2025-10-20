```xml
## AWSConnectionProvider ** - AWS S3 user credentials ** <!-- Commentaire nettoyé -->
```

With an access key id and the secret access key, you have the option to connect to an AWS S3 instance by specifying the region concerned. However, to perform this king of connection, Fast2 required the permission : AmazonS3FullAccess

**Mandatory settings**

| Key               | Type     | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| Access key Id     | `String` | This field is mandatory unless 'Use Instance Profile' is set |
| Secret access key | `String` | This field is mandatory unless 'Use Instance Profile' is set |
| AWS Region        | `String` |                                                              |

**Optional settings**

| Key                                                 | Type                | Description                                                                                           | Default value |
| --------------------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------- | ------------- |
| AWS URL endpoint                                    | `String`            | Service endpoint & signing region                                                                     |
| Use settings for Snowball                           | `Boolean`           | Snowball S3 endpoint requires specific S3Client settings                                              | `false `      |
| Use Instance Profile instead of Access Key & Secret | `Boolean`           | From your local variable, Fast2 will retrieve your connection information                             | `false `      |
| Role ARN name                                       | `String`            |                                                                                                       |
| sessionName                                         | `String`            |                                                                                                       |
| AWS extra Client Configuration                      | ClientConfiguration | Use this AWS class to fine-tune connection details to S3, such as timeouts, connection pool size, ... |

```xml
## AlfrescoCMISConnectionProvider ** - CMIS connection provider ** <!-- Commentaire nettoyé -->
```

From a URI and giving a username with password, this class allow you to access any Alfresco instance

**Mandatory settings**

| Key                         | Type     | Description |
| --------------------------- | -------- | ----------- |
| Password                    | `String` |             |
| Username                    | `String` |             |
| URI for connection settings | `String` |             |

```xml
## AlfrescoRESTConnectionProvider ** - ** <!-- Commentaire nettoyé -->
```

**Mandatory settings**

| Key                        | Type     | Description |
| -------------------------- | -------- | ----------- |
| Password                   | `String` |             |
| URL to connect to Alfresco | `String` |             |
| Username                   | `String` |             |

```xml
## CMConnectionProvider ** - Connection provider for Content Manager solution ** <!-- Commentaire nettoyé -->
```

The CM connection provider will help you to manage a pool of connections. For performance reasons, it is sometimes desirable to limit the number of connections created by the pool.The connection pool will allow you to specify the maximum number of connections that should exist at one time, whether in use or in the pool.Once this maximum value is reached, an error may be thrown or you may optionally wait for an existing connection to be freed

**Mandatory settings**

| Key      | Type     | Description                                               | Default value |
| -------- | -------- | --------------------------------------------------------- | ------------- |
| Password | `String` | Password of the aforementioned username                   |
| Username | `String` | Login with scope to access the docbase with proper rights | `icmadmin `   |

**Optional settings**

| Key                       | Type      | Description                                                     | Default value |
| ------------------------- | --------- | --------------------------------------------------------------- | ------------- |
| Data source type          | `String`  |                                                                 | `ICM `        |
| Connection pool size      | `Integer` | Maximum number of connections to be created                     | `64 `         |
| Server name               | `String`  | Name of the server involved in the migration                    | `ICMNLSDB `   |
| Connection free pool size | `Integer` | Maximum number of connections that may be held in the free pool | `5 `          |
| Internal connection       | `Integer` | Maximum number of connections for internal side                 | `64 `         |
| Connection duration       | `Long`    | Length of time to kill a free connection in milliseconds        | `100000 `     |

```xml
## CMODConnectionProvider ** - CMOD connection provider ** <!-- Commentaire nettoyé -->
```

With a username / password and an IP address, this class allow you to connect at your CMOD instance.To optimize connections between Fast2 and CMOD you can use a single connection

**Mandatory settings**

| Key               | Type     | Description | Default value    |
| ----------------- | -------- | ----------- | ---------------- |
| Server IP address | `String` |             | `192.168.0.189 ` |
| Password          | `String` |             |
| Username          | `String` |             | `admin `         |

**Optional settings**

| Key                  | Type      | Description                                             | Default value |
| -------------------- | --------- | ------------------------------------------------------- | ------------- |
| Port number          | `Integer` |                                                         | `1445 `       |
| Singleton connection | `Boolean` | Optimization of the connection in case of regular calls | `false `      |

```xml
## DctmConnectionProvider ** - Documentum connection provider ** <!-- Commentaire nettoyé -->
```

Module used by Fast2 to establish to communication with the destination Documentum instance.

**Mandatory settings**

| Key          | Type     | Description                                                |
| ------------ | -------- | ---------------------------------------------------------- |
| Docbase name | `String` | Name of the docbase involved in the migration.             |
| Password     | `String` | Password of the aforementioned username.                   |
| Username     | `String` | Login with scope to access the docbase with proper rights. |

```xml
## EmbeddedDbConnectionProvider ** - OpenSearch connection provider ** <!-- Commentaire nettoyé -->
```

Module used by Fast2 to connect to its own database.

**Mandatory settings**

| Key      | Type     | Description | Default value |
| -------- | -------- | ----------- | ------------- |
| Database endPoint | `String` | The endpoint of the Fast2 database | `"http://localhost:1790 ` |

```xml
## FileNet35ConnectionProvider ** - Connection provider for FileNet 3.5 solution ** <!-- Commentaire nettoyé -->
```

This task is used to provide connection information to connect specifically to the FileNet P8 3.5 ECM.

**Mandatory settings**

| Key      | Type     | Description                                               |
| -------- | -------- | --------------------------------------------------------- |
| Password | `String` | Password of the aforementioned username                   |
| Username | `String` | Login with scope to access the docbase with proper rights |

**Optional settings**

| Key                 | Type                                                   | Description                                                |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------------- |
| WCM Config resource | `String`                                               |                                                            |
| Object store name   | `String`                                               | Name of the docbase involved in the migration              |
| URL settings        | [WcmApiConfigSettings](helper.md#WcmApiConfigSettings) | Class used for setting multiple URLs (download, upload...) |

```xml
## FileNetConnectionProvider ** - Connection provider for FileNet P8 solution ** <!-- Commentaire nettoyé -->
```

Using this class allows you to provide connection information to specifically connect to your FileNet P8 5.x ECM

**Mandatory settings**

| Key         | Type     | Description                                                                                                    |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Password    | `String` | Password of the aforementioned username                                                                        |
```xml
| URI address | `String` | URI to determine which FileNet instance to connect to  <!-- Commentaire nettoyé -->/wsi/FNCEWS40MTOM/`<!-- Commentaire nettoyé --> Ex/ imap<!-- Commentaire nettoyé --> Ex/ imap.gmail.com<!-- Commentaire nettoyé --> Ex/ myValue.toAdd = true<!-- Commentaire nettoyé --> ⚠️ **Deleted**: The `MobiusConnectionProvider` module is deleted and no longer available in Fast2 from v2025.0.0.
```

This Mobius connection module is required for Fast2 to successfully establish the connection with your Mobius instance in order to properly migrate metadata and contents.

**Mandatory settings**

| Key               | Type     | Description                                                            |
| ----------------- | -------- | ---------------------------------------------------------------------- |
| Repository ID     | `String` | The Universally unique identifier (UUID) of the destination repository |
| Mobius Server URL | `String` |                                                                        |

**Optional settings**

| Key                        | Type     | Description                                                 |
| -------------------------- | -------- | ----------------------------------------------------------- |
| Authentication REST Header | `String` | The value of the 'Authorization' header of the REST request |

```xml
## NuxeoConnectionProvider ** - Connection settings for Nuxeo ** <!-- Commentaire nettoyé -->
```

**Mandatory settings**

| Key                | Type     | Description                                                              | Default value |
| ------------------ | -------- | ------------------------------------------------------------------------ | ------------- |
| Accessible schemas | `String` | List of document schemas accessible with this connexion                  | `* `          |
```xml
| Connexion URL      | `String` | `http://hostname:port/nuxeo`  <!-- Commentaire nettoyé --> |
```
| Password           | `String` |                                                                          |
| UserName           | `String` |                                                                          |

```xml
## OpenTextCredentials ** - OpenText user credentials ** <!-- Commentaire nettoyé -->
```

**Mandatory settings**

| Key      | Type     | Description |
| -------- | -------- | ----------- |
| Password | `String` |             |
| Username | `String` |             |

```xml
## SQLQueryGenericCaller ** - Generic query caller ** <!-- Commentaire nettoyé -->
```

This modules is responsible of establishing the connection between Fast2 and the designated database

**Mandatory settings**

| Key                   | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
```xml
| Connection definition | `String` | Use a standard jdbc:// syntax. If a driver is needed, the JAR file has to be added to the worker-libs/ folder. Make sure to pick up a version compatible with the JDK used by Fast2. If clear credentials is a problem, please use below fields username and password  <!-- Commentaire nettoyé -->;user=...;password=...;``jdbc//**:3306/<!-- Commentaire nettoyé --> |
```

**Optional settings**

| Key                      | Type      | Description                                                                                        |
| ------------------------ | --------- | -------------------------------------------------------------------------------------------------- |
| Password                 | `String`  | Password used by connectionString and fully encrypted for security reasons                         |
| Driver class             | `String`  | Optional driver class to load before connection. Leave empty to load none                          |
| Throw error if no result | `Boolean` | Throw exception when SQLQueryColumnCaller finds no result.                                         |
| Skip exceptions          | `Boolean` | Fast2 will either throw an error if the statement has not properly been executed, or fail silently |
| User                     | `String`  | Username used by connectionString                                                                  |
