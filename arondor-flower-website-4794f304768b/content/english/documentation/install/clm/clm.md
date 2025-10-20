+++
date = "2004-03-21T13:20:01+02:00"
title = "Command Line Manager (CLM)"
+++

This tool lets you interact with FlowerDocs from the command line. It offers a range of features:

* import
* export
* merge several modules
* administration

<br/>
__Download:__

__Note:__ In this section, the extraction file is referred to as ``${CLM_HOME}``


# Execution



The CLM is an executable JAR and can be run with a command like: 

```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar
```

To interact with FlowerDocs, you need to define the URL for accessing web services, as well as login details: 

```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar --ws.url=http://<server>:<port>/<context>/services	--password=<password>
```

*The default user name is `system`, which can be changed by adding the `--USER=<user>` parameter.*
 
 <br/>

The `clm.batch.size=1` parameter sets the batch size for processing jobs in CLM. It can prove useful for resolving conflict issues during updates, as it ensures that each operation is processed individually, thus preventing concurrency errors.

<br/>

**Usage example :**
```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar update --ws.url=http://<server>:<port>/<context>/services --clm.batch.size=1 […]
```


:::info
__Note:__ In the following sections ``<clm>`` is the command to run CLM from the command line.
:::

# Jobs

A list of jobs is supplied to the CLM to indicate the instructions to be executed. These jobs are supplied after the CLM execution command:


```properties
<clm> job1 job2
```

The various possible jobs are listed in the following sections.
