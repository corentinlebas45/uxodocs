---
title: "Service broker"
draft: false
weight: 2
type: docs
icon: mdi-file-cog-outline
---

## Environment

- Key: *Kubeprovider*

    | Description                    | Parameter Key | Type             |
    | ------------------------------ | ------------- | ---------------- |
    | Use localhost for all services | useLocalhost  | Boolean          |
    | Map of service host and ports  | kubeHosts     | Map<String, int> |


```yaml
kubeprovider:
  useLocalhost : true
  kubeHosts:
    conversion-service: 19999
    jni-service: 9091
    pdfbox-service: 8899
```


- Key: *provider*

    | Description                 | Parameter Key | Type                    |
    | --------------------------- | ------------- | ----------------------- |
    | Specify running environment | environment   | Enum(LOCAL, KUBERNETES) |


```yaml
provider:
  environment: local
```



Metrics server must be installed on Kubernetes if `provider.environment` is set to `KUBERNETES`


## Temporary file storage

When the rendition server starts, folders and files in the temporary files folder path will be deleted.
This deletion will not be automatic if the default path *../../tmp* has been modified.
In this case, the following configuration needs to be done.


```cfg
default.document.path.startup.clear=true
```


## Checking disk space

Since version 2023.14.0, a disk space availability check has been added.
When a request to upload a new document to the rendition arrives and there is not enough disk space available,
the request is rejected and a 503 response is returned.

By default, the available space threshold is 1GB, a value that can be configured via properties:

```cfg
# Disk free space threshold (in GB)
disk.free.space.threshold=2
```
