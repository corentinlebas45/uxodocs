+++
date = "2020-02-01"
title = "Export results"
Description = "Export search results"
+++

This section describes how to configure the download of search results in CSV format. 

# Presentation
Users can download this list in CSV format from the search results. All tags used for the search, including technical tags that are not visible, are exported to the file.

:::warning
For `USER` tags, the user identifiers are exported.
:::

# Configuration

The following configurations are possible and can be set in the `core.properties` file:

| Property name           			  | Description                               					 | Default value  		 |
|---------------------------------------------|--------------------------------------------------------------|---------------------------|
|`search.export.hiddenColumns`     	  |Columns to exclude from the CSV file    							 |`context,acl,status`  |
|`search.export.separator`     		  |Separator used between columns  						 |`;`       				 |
|`search.export.multivalued.separator`|Separator used between multi-valued tag values    |`,`     					 |
|`search.export.fileEncoding`     	  |File encoding    										 |`windows-1252`          |