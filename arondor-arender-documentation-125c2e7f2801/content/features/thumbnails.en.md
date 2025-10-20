---
title: Thumbnails
icon: mdi-file-document-outline
keywords: ["feature", "thumbnails", "pictree"]
---

## Introduction

The Thumbnail View in ARender offers a condensed visual representation of the document, providing users with
a quick and efficient way to navigate through pages.

## Highlighted Thumbnails

One of the feature is the dynamic highlighting of thumbnails based on the current page being viewed.
This visual cue allows users to easily identify their current location within the document, enhancing navigation and orientation.


## Jump to Page Functionality

Navigating to a specific page becomes effortless with the Thumbnail View. Users can simply select the desired thumbnail,
and the application will seamlessly jump to the corresponding page.
This feature streamlines the navigation process, saving users time and effort.


## Adjusted thumbnail display structure (v2023.1.0 and later)

For those who desire control over their thumbnail view, ARender provides a dynamic slider that redefines how you interact with the document thumbnails. This feature allows you to seamlessly adjust the display structure of thumbnails.

To use this feature, you can enable it via a simple configuration setting.


```cfg
ui.legacy.enabled=false
```


{{< tab 1>}}

```cfg
ui.legacy.enabled=false
```



## Default number of columns configuration (v2023.4.0 and later)

After enabling the previously mentioned "Adjusted thumbnail display structure" feature,
thumbnails are displayed by default in 2 columns when ARender loads and when loading each
new document. This default value can be changed to any number between 1 and 4.

To use this feature, you can configure it via a simple configuration setting.


```cfg
thumbexplorer.columns=1
```


{{< tab 1>}}

```cfg
thumbexplorer.columns=1
```


## Disabling the Anchor Creation Option (v2023.4.0 and later)

By default, when a user right-clicks on a thumbnail, a dropdown menu appears with several
options including "Create anchor at this page". It is possible to disable this option.

To disable this feature, use the following configuration parameter:


```cfg
thumbexplorer.contextualMenu.createPageAnchor=false
```


{{< tab 1>}}

```cfg
thumbexplorer.contextualMenu.createPageAnchor=false
```


By default, the configuration parameter is set to `true`, the "Create anchor at this page" option is enabled.


With the configuration parameter set to `false`, the "Create anchor at this page" option is disabled.

