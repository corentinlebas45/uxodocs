---
date: "2002-03-28T13:20:01+02:00"
title: "ExceptionBuilder"
description: "Building a JAVA Exception with FlowerDocs identifiers"
---


You can pass it one or more parameters, including FlowerDocs identifiers, which will be formatted when the error message is returned. 

<br/>
The following example shows how to create a TechnicalException with error code T00000 and a message indicating the problem :

	Id tagId = new Id("idMyTag");
	ExceptionBuilder.createTechnicalException(T00000, "Tag {} cannot have the value {}", tagId, "wrongValue", e);

* With the builder : "Tag idMyTag cannot have the value wrongValue".
* Without the builder : "Tag [Id=(value="idMyTag")] cannot have the value wrongValue".