+++
date = "2018-03-07T13:20:01+02:00"
title = "Textual"
description = "Use textual tags."
+++

The FlowerDocs data model allows you to define textual tags: 

* character strings `STRING`
* text fields `TEXT`


# Character strings

This type allows free input of a character string.
With this type of tag, you can add a regular expression to the `pattern` attribute to validate the user's input.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="http://flower.com/docs/domain/common" xmlns:ns2="http://flower.com/docs/domain/tagclass"
	xmlns:ns3="http://flower.com/docs/domain/i18n">
	<id>CustomerName</id>
    <ns2:type>STRING</ns2:type>
    <ns2:pattern>[A-Z]*</ns2:pattern>
</ns2:TagClass>
```

# Text

This type allows free input in a text zone.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ns2:TagClass xmlns="http://flower.com/docs/domain/common" xmlns:ns2="http://flower.com/docs/domain/tagclass"
	xmlns:ns3="http://flower.com/docs/domain/i18n">
	<id>Comment</id>
    <ns2:type>TEXT</ns2:type>
</ns2:TagClass>
```
