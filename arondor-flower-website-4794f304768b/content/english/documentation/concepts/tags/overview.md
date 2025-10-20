+++
date = "2018-03-02T13:20:01+02:00"
title = "Overview"
description = "Tag your components to find them more easily."
+++

 `tags` are metadata defined on a component to characterize it and make it easier to find. 

This metadata can be of different types to ensure consistency of the data stored in FlowerDocs.

<br/>
A [tag class](/javadocs/domain/com/flower/docs/domain/tagclass/TagClass.html) defines the typology and characteristics of a tag within a scope. 
This tag class applies to all tags associated with components, and is made up of the following elements: 

* `id`: technical tag identifier
* `displayNames`: tag display name (ex : Agency name, building no., etc.) internationalized
* `searchable`: Boolean to make the tag searchable or not  
* `Type`: tag id

|Type|Description|
|------|---------------------|
|`STRING`|[String](broken-link.md) (e.g. reference, customer name ...)|
|`TEXT`|[Text field](broken-link.md) (ex: comment ...)|
|`CHOICELIST`|[Choice list](broken-link.md) (e.g. type of document ...)|
|`ICON`|[Icon list](broken-link.md) (e.g. input channel ...)|
|`FREELIST`|[Choice list](broken-link.md) (e.g.: reference linked to an external IS ...)|
|`CONDITIONAL`|[Conditional value list](broken-link.md) (e.g.: list of departments according to direction ...)|
|`FLOAT`|[Decimal number](broken-link.md) (e.g.: rate, proportion ...)|
|`INT`|[Integer](broken-link.md) (e.g.: number of supporting documents ...)|
|`CURRENCY`|[Decimal number](broken-link.md) limited to 2 decimal places (e.g.: amount ...)|
|`DATE`|[Date](broken-link.md) (e.g. due date ...)|
|`BOOLEAN`|Check box (e.g.: medical confidentiality ...)|
|`USER`|Linked to a directory user (e.g. manager)|

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns2:TagClass xmlns="http://flower.com/docs/domain/common" xmlns:ns2="http://flower.com/docs/domain/tagclass"
	xmlns:ns3="http://flower.com/docs/domain/i18n">
	<id>Identifier</id>
	<ns2:displayNames language="EN">
		<ns3:value>Display name</ns3:value>
	</ns2:displayNames>
	<ns2:displayNames language="FR">
		<ns3:value>Display name</ns3:value>
	</ns2:displayNames>
	<ns2:data>
        <owner>owner</owner>
        <creationDate>2017-10-03 23:26:32.169 +0200</creationDate>
        <lastUpdateDate>2017-04-02 11:44:40.909 +0200</lastUpdateDate>
    </ns2:data>
	<ns2:type>TYPE</ns2:type>
    <ns2:searchable>true</ns2:searchable>
</ns2:TagClass>
```

:::info
Add tags to your components by [referencing a tag class](broken-link.md) at component class level.
:::
