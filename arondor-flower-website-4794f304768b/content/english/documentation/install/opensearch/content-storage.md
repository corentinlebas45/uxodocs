+++
date = "2003-03-28T13:20:01+02:00"
title = "Content storage"
categories = []
banner = "img/banner/history.png"
description = "Manage document content storage"
+++

The OpenSearch connector provides two types of storage for document content (or files).

## File system

This connector enables files to be stored on a file system considered local by the JVM (local, NFS, etc.).
The directory used can be configured: 

file.dir=/opt/FlowerDocs/Files/


## Amazon S3

The Amazon S3 connector stores document content in an S3 bucket.
To use this connector, the following configuration is required:

```properties
core.services.file.dao=s3
s3.region=<region AWS>
```

__Amazon S3 client configuration__

| Property                     | Default value|Description                                                                         |
|-------------------------------|-------------------------------------------------------------------------------------|-------------------|
| s3.max.connections            |100 | Maximum number of open HTTP connections                                                     |       
| s3.max.error.retry            | 2 | Maximum number of retries for replayable requests (error 5xx)                 |
| s3.socket.timeout             | 100000|  Waiting time (in ms) for data to be transferred                             |


By default, the file containing the access and secret key pair must be located in the ``${USER_HOME}/.aws/credentials`` folder, and the ``default`` profile used. 

Another key file or profile can be used using the following parameters: 

```properties
s3.profile=<profile name>
s3.configFilePath=<path to directory>/<file with key>
```

AWS instance roles can be used by adding the following property: 

```properties
s3.instanceProfile=true
```

A single bucket can be used for all FlowerDocs scopes with the following configuration: 

```properties
s3.bucket.scoped=false
s3.bucketName=<bucket name>
```

	