---
date: "2002-03-28T13:20:01+02:00"
title: "ExceptionBuilder"
description: "Construire une JAVA Exception avec des identifiants FlowerDocs"
---

Le builder Java API peut être utilisé pour créer des TechnicalException ou FunctionalException avec un code d'erreur. 

Il est possible de lui passer un ou plusieurs paramètres, dont des identifiants FlowerDocs qui seront formattés à la restitution du message d'erreur. 

<br/>
L'exemple suivant montre comment créer une exception de type TechnicalException avec un code d'erreur T00000 et un message indiquant le problème : 

[shortcode]
[shortcode]
	Id tagId = new Id("idMyTag");
	ExceptionBuilder.createTechnicalException(T00000, "Tag {} cannot have the value {}", tagId, "wrongValue", e);
[shortcode]
[shortcode]

* Avec le builder : "Tag idMyTag cannot have the value wrongValue".
* Sans le builder : "Tag [Id=(value="idMyTag")] cannot have the value wrongValue".