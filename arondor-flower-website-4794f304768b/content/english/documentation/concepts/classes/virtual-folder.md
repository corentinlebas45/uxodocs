+++
date = "2018-03-02T14:20:01+02:00"
title = "Virtual folders"
description = "Virtual folder classes"
+++


:::info
Unlike folders, which have a parent-child relationship with the components they contain, virtual folders are made up of searches that allow components to be found dynamically. 

<br/>

A virtual folder class defines the virtual folder model to be created. What sets it apart is the notion of research.

:::

<br />

Virtual folders of the same class share the same search list, so they all have the same component presentation.

The special feature of file searches is the ability to aggregate results according to a specific criterion, and the variability of searches. 

# Aggregation

If the search defined in the folder contains an aggregation, the components brought up by the search will be grouped together in the form of  `Bucket`. Aggregations can also be nested to create `buckets` based on multiple criteria.

:::warning
It is recommended not to aggregate more than 3 levels.

When the tree structure of a virtual folder is in `View` mode, we recommend not exceeding 100 documents displayed in ARender.
:::

# Research variabilization 

In searches for a class of virtual folders, the defined criteria can be either fixed values or variables. It works in the same way as conditional tags for [variable resolution](broken-link.md).

Thanks to this mechanism, it is possible to define a single virtual folder of the *Personal tray* using a criterion `assignee = ${user.id}`. 
Variables of `tags` type are based on the tags carried by the virtual folder.

:::warning
We recommend using criteria with fixed values (such as choice lists) and not exceeding 100 possible values.

Aggregations on date, integer, string and text criteria are not supported by FlowerDocs.
:::