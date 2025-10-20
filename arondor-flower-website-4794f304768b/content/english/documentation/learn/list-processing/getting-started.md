+++
 date = "2020-01-01T11:20:01+02:00"
title = "Getting Started"
+++

# Goals

In this module, you will configure an example of a processing session that can be started from certain virtual folder aggregations. This example allows you to manipulate the processing session so that only tasks with the same priority are opened. 
 
# Before getting started

This tutorial is based on the configuration of a processing session via the [FlowerDocs JS API](broken-link.md)

In this tutorial we will be using the following components: 

* `Choice list` type `Priority` tag containing the values 
	* Urgent
	* Critical 
	* Normal
* `Choice list` type `Status` tag containing the values 
	* `TOBEPROCESSED`
	* `UNDERWAY`
	* `PROCESSED`
*  `Mail` class task containing `Priority` and `Status` tags
*   `Mail` virtual folder whose search is configured as follows: 
	* Identifier: `SearchMails`
	* Number of results: `100`
	* Aggregation: `Status`
	* Tick: `Priority`
	* Category: `Task`
	* Criterion: `Class equal to Mail` 
	
:::info
Add a tab for easy access to the virtual folder. 
:::	