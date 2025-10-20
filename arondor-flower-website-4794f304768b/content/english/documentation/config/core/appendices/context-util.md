---
date: "2002-03-28T13:20:01+02:00"
title: "ContextUtil"
description: ""
related:
  - name: "Drools operations manager"
    rel: '/documentation/config/core/operation/handlers/drools'
  - name: "Script operations manager"
    rel: '/documentation/config/core/operation/handlers/script'
---

# Access to services

This object exposes methods for accessing and interacting with the services exposed by FlowerDocs Core:  

|Name | Description |
|----------|-------------|
|`getDocumentService()` | Get document management service|
|`getVersionService()` | Get document version management service|
|`getFolderService()` | Get folder management service|
|`getTaskService()` | Get task management service|
|`getVirtualFolderService()` | Get virtual folder management service|
|`getService(Component component)` | Get component management service|
|Name | Description |
|----------|-------------|
|`getClassService(Component component)` | Get component class management service|
|`getTagClassService()` | Get tag class management service|
|`getAclService()` | Get ACL management service|
|Name | Description |
|----------|-------------|
|`getUserService()` | Get users management service|
|`getGroupService()` | Get group management service|
| Methods | Description |
|-----|-------------|
|`createFact(Fact fact)` | Create a business fact|
|`getFeatureService()`| Get the service accessing information from FlowerDocs internal features |
|`getReservationService()`| Get reservation management service |


# Component persistence

The following methods can be used to modify a component: 

| Methods | Description |
|-----|-------------|
|`create(Component component)` | Create the component supplied as input and return the one actually created|
|`update(Component component)` | Modify the component supplied as input|
| Methods | Description |
|-----|-------------|
|`changeClass(Component component, String classId)` | Modify the class of the component supplied as input and propagate only the tags in common between the initial class and the new one|
| Methods | Description |
|-----|-------------|
|`getAttachments(Task task)` | Get the components attached to the task|

# RuleUtil

The other methods are exposed in another object named `RuleUtil`: 

| Methods | Description |
|-----|-------------|
|`getClassId(Component component)` | Get component class value otherwise empty|
|`setClassId(Component component, String classId)` | Set component class|
|`getStatus(Component component)` | Get component status value|
|`setStatus(Component component, Status status)` | Set component status value|
| Methods | Description |
|-----|-------------|
|`getTagValue(Component component, String tagName)` | Get the first tag value otherwise null|
|`getTagValues(Component component, String tagName)` | Get the list of tag values otherwise null|
|`setTagValue(Component component, String tagName, String value)` | Set a tag value by modifying its value if it exists, otherwise by adding a tag|
|`setTagValues(Component component, String tagName, List<String> values)` | Set the list of tag values by modifying its value if it exists, otherwise by adding a tag|
|`setTagReadOnly(Component component, String tagName, boolean readonly)` | Set a tag to read-only or read-write|
|`addTagValue(Component component, String tagName, String value)` | Add a value to an existing tag or add the tag|
|`addTagValues(Component component, String tagName, List<String> values)` | Add a list of values to an existing tag or add the tag|
| Methods | Description |
|-----|-------------|
|`getAnswerId(Task task)` | Get the last answer applied to a task|
| Methods | Description |
|-----|-------------|
|`log(String message)` | Display in logs a message prefixed by `[Drools] ` in `INFO`|
