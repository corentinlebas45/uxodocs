+++
date = "2000-03-31T13:20:01+02:00"
title = "Core Configuration"
+++

This section describes the various FlowerDocs Core configurations to be defined in the application's `core.properties` file.


# General

|Property			   |	  Description														|
|----------------------|------------------------------------------------------------------------|
|system.admin.username |System account identifier											|
|system.admin.password |System account password, can be encrypted with a secret			|
|secret				   |Secret used to encode password *(optional)*				|
|core.context		   |Application context												|


# Logging

|Property			|	  Description														|
|-------------------|-----------------------------------------------------------------------|
|logging.file.name  |Log file path and name										|
|logging.level.root |Log level: `WARN`, `ERROR`, `INFO`, `DEBUG`					|

# OpenSearch

|Property  |	  Description														|
|-----------|-----------------------------------------------------------------------|
|es.nodes   |Addresses of the various OpenSearch nodes separated by a ``,``      |
|es.cluster |OpenSearch cluster name											|
|es.username|User name *(optional)*									|
|es.password|User password *(optional)*							|


# Redis

|Property		  |	  Description														|
|-----------------|---------------------------------------------------------------------|
|redis.enabled    |Enables Redis, a prerequisite for high availability 	    |
|spring.redis.host|Host name Redis														|
|spring.redis.port|Redis listening port												|

# ARender

|Property					   |	  Description	   											   |
|------------------------------|-------------------------------------------------------------------|
|arender.rendition.nodes	   |Addresses of the various OpenSearch nodes separated by a ``,`` |

:::warning
It is not recommended to modify ARender properties by setting parameters in the `core.properties` file. Properties that are not defined in the documentation are not qualified by FlowerDocs: the correct operation of the application is therefore not guaranteed with these modifications.
:::