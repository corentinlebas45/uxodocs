+++
date = "2005-02-02"
title = "Searches"
description = "Enjoy the richness of FlowerDocs"
+++

FlowerDocs' search capabilities make the most of the document base, while maintaining the ergonomics required by end-users.

<br/>
The classic search functions of a DMS are described, including: 

* selection of fields to be displayed
* search filters
* sorting on metadata
* pagination of results
* etc.

_more details can be found in the [technical documentation](broken-link.md)_

<br/>

:::infoWe recommend using a maximum of 20 criteria in a search. :::
Searches can be saved and shared between FlowerDocs users.


:::warning
Searches return a maximum of 10,000 results; an error occurs when paging after this limit. This limit is the same using user interface and web services.
:::

# Full-text search

With FlowerDocs, it is possible to configure a full-text search. This allows a user to search on the content of a document rather than on its metadata.

In a search form, you can add the “Content” criterion to perform a full-text search.


<br/>

The full-text search function is based on the OpenSearch search function, with the following specific features for writing down search items :

* The order of words in the search doesn't matter 
	* Search for the following value “{word A} {word B}” retrieves documents containing words A and B, regardless of where words A and B appear in the content. 
* There are AND, OR and NOT operators, which allow you to specify what you are looking for : 
	* Searching for “{word A} {word B}” retrieves documents containing words A and B, but not documents containing only word A, word B or containing neither A nor B. 
	* Searching for “{word A} OR {word B}” retrieves documents containing word A, word B or both words, but does not retrieve documents containing neither word. 
	* Searching for “{word A} AND NOT {word B}” retrieves documents containing word A, but not word B. 
	
:::warning
The characters +, -, =, ||, >, <, !, (, ),{, }, [, ], ^, ”, ~, *, ?, :, \ and / must not be used in full-text searches. To find a document containing the name “John-Peter”, use the search “John Peter”.
:::
	
:::infoFull-text search works only on documents whose content has been indexed beforehand. The content is indexed using a [operation subscription](broken-link.md).:::
