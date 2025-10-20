---
date: "2009-03-28T13:20:01+02:00"
title: "Content indexing"
description: "Index document content"
---

# Principle

This operation manager is used to index the content of text documents.
This processing is necessary to use full-text searches based on the `content` criterion.

This operation can be activated on the `CREATE` and `ADD_CONTENT` actions.

:::info
To manually define this operation handler, the `com.flower.docs.core.tsp.operation.fulltext.FullTextOperationHandler` identifier must be used as the value of the `OperationHandler` tag.
:::

# Using an external library
It is possible to call an external hook for indexing content using a library other than Tikka, which is the one used internally by FlowerDocs. To do this, you can add the URL of the external hook and the specific mime types on which it will be called. 
<br/>
The external hook url can be built as follows : `http://{ip de la machine host}:{port}/{route}`, for example : http://25.42.62.95:3079/fullText/indexation.
:::info
The user token is automatically transmitted to this external hook : the prerequisite for using an external library is to have token authentication.
:::