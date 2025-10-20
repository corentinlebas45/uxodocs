---
title: Search
icon: mdi-card-search-outline
keyword: ["feature", "search", "advanced"]
related:
    - name : "Redaction"
      rel: '/features/redact.en.md'
---

## Search text
Click on the "Search text" area and enter the text you need to search.




For example, enter "Solution" as word and click on "Enter" key:



## Advanced search
### General
Advanced search is accessible from the search explorer. By default, it is enabled.
The width of the explorer is configurable.




| Property                         | Description                      | Default value  |
| -------------------------------- | -------------------------------- | -------------- |
| advanced.searchexplorer.enabled  | Activate search explorer         | true           |
| documentnavigator.search.width   | Change the width of the explorer | 400            |


```cfg
advanced.searchexplorer.enabled=true
```



### Use
Click on the search box and enter the term(s) you are looking for.


#### Search Options
Several search options are available.


To the right of the search area there are:
* Case-sensitive button: upper and lower case texts can be treated as separate (case-sensitive) or equivalent (case-insensitive).
* The accents sensitive button: the sensitivity of the accent is linked to the consideration of accents.
* Regular expressions button: Regular expressions (“regex”) are templates used to match character combinations in strings.




If you click on the button to the left of the search box, two drop-down lists will appear.


The drop-down list on the left allows you to choose the scope of the search:
* The whole document
* Current page
* All documents



The drop-down list on the right allows you to choose the target content of the search:
* With annotations
* Without annotations
* Only annotations





#### Launch the search
ARender offers several types of search:
* The classic search
* The search that highlights the text corresponding to the search on the document
* The search that redact the text corresponding to the search on the document


If you have enabled the redact property and you have the rights to it, the search and delete button will appear.


The search button that highlights the results is enabled by default.

| Property                                          | Description                                | Default value     |
| ------------------------------------------------- | ------------------------------------------ | ----------------- |
| advanced.searchexplorer.search.highlight.enabled  | Activate the search and highlight button   | true              |




```cfg
advanced.searchexplorer.search.highlight.enabled=true
```



The results will appear in the search explorer and the text corresponding to the search will be highlighted on the document.

#### Management of research results
With the header buttons you can refresh the search results (1), reset the search (2) and reduce/expand (3) the display of the results.

