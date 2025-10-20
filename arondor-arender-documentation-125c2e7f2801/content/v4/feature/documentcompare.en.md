---
title: Document comparison
description: 
icon: mdi-file-compare
keyword: ["feature", "comparison"]
---

## Compare two documents


The image comparison is a feature available from version 4.4.0


### Manual processing

To do a comparison between two documents, right click on a document's
thumb in the navigation panel and select *Open as new and compare*
or *Open as new and compare images* if both documents are images.

#### Case of textual documents


The chosen document opens next to the current one, then the comparison
results are displayed.


#### Case of image documents


The chosen document opens next to the current one, then the comparison
result is displayed as a new image.


### Automatic comparison on start up

To automatically start the comparison after the application loading, use
the following parameter:

    visualization.multiView.doComparison=true

The comparison will only be triggered if at least two documents are
loaded.

The first document of these will be opened on the left and the second
one on the right.

If both documents are images, then the image comparison will be
triggered.

## Close comparison mode

- To go back to the simple view mode, click on the red cross in the
  upper right corner of the document to close.


- It is also possible to close the comparison mode by right clicking
  on a document and select *Close multiView*.


## Parse comparison results

Each difference type between two documents corresponds to a specific
color:

| Color  | Meaning                          |
| ------ | -------------------------------- |
| Green  | Added line                       |
| Red    | Removed line                     |
| Grey   | Modified line                    |
| Orange | Modified text on a specific line |


## Browse results

### Navigate through results


Clicking on the *Next result* or *Previous result* button will redirect
to the closest one, regardless of the document.


### Synchronized scroll between documents

The synchronized scroll function is enabled by default when a comparison
is done. It can be disabled using the corresponding button in the top
panel.

### Result's match

Clicking on a specific result redirects to the matching line on the
other document.




## Comparison mode's specifications

- The multi-view mode comes with the concept of current document which
  is defined has the last document hovered.
  
  This document is used for most of functionalities: Annotations,
  Download, Printing, Text searching, Page rotation, ...

- Document changing using navigation panel's thumbs is disabled.
  
  Only thumbs corresponding to documents currently opened in
  comparison mode allow to jump to the selected page on it.

## How define the focus of document by click

To define the focus of the document by click use the parameter:

    visualization.multiView.focusOnClick=true

## The image comparison result

After launching image comparison, a new view is displayed where
you can see the both images compared, a configuration box in which
you can modifiate the "fuzz", "highlight color" and "lowlight color" values,
and the image result.



The image comparison is based on mathematical calculations influenced
by the value of the "fuzz". A greater "fuzz" value means a less accurate
pixel comparison calculation.

The default fuzz value is 3, and is configurable with the following property: 


```cfg
# Setup the default image comparison tolerance value. Value between 0 and 100. Value in percentage.
visualization.image.comparison.default.fuzz=3
```


By default, the differences are the red zones (highlight color) and the pixels
that are not considered different are colorless (lowlight color). 

The default colors are configurable with the following properties :


```cfg
# Setup the default image comparison highlight color. Highlight for the pixels difference
visualization.image.comparison.default.highlight.color=#FF0000

# Setup the default image comparison lowlight color. Lowlight for the common pixels
visualization.image.comparison.default.lowlight.color=none
```

## Download documents with comparison results

### With UI

Once the comparison is done, a download button is available to download the two documents side by side with their comparison results on it.


### With servlet

Example of URL allowing the servlet to be used to perform a comparison and then download the side-by-side documents with their comparison results on it.


```
http://<arender_host>/ARender/arendergwt/downloadServlet/mergedWithCompareResult?left=<document_id_left>&right=<document_id_right>
```


## Allow document switching with vertical scrolling

By default, it is not possible to switch documents with a vertical scroll during a document comparison.

It is possible to change this behavior and allow document switching with vertical scrolling with the following configuration :


```cfg
# Allow the vertical scrolling to change document while in multiview
visualization.multiView.allow.scroll.document.change=true
```

