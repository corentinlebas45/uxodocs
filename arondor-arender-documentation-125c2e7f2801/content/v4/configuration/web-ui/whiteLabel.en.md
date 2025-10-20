---
title: "White label"
draft: false
icon: mdi-tag-outline
keywords: ["configuration", "WhiteLabel", "label", White label]
---


## Introduction

Since ARender 4.4.1, you can remove any references of the ARender brand through the configuration.

## Configuration

### The References to ARender in "About" section

A property allows to remove references to 'ARender'. Removed references are in the "About" panel.

Apply following property to remove those references :

```cfg
# Remove any references of ARender in the application
arender.white.labeling=true
```



Result after activation of the white label property :




### The references at loading and saving


At document loading or saving, an 'ARender' text is visible at the center of the page.


This text is configurable with the following property :


```cfg
# Display the label when document starts to open
startup.loading.label=Just-Loading
```




### ARender logo


To modify ARender logo from the top panel, apply following configuration.

To use the white icon :

```cfg
# Define the top panel logo URL
topPanel.logo.url=arender-icones-svg-white/submenu/toolbar/icone-details.svg
```



To use the gray icon :

```cfg
# Define the top panel logo URL
topPanel.logo.url=arender-icones-svg/submenu/toolbar/icone-details.svg
```



### Modification of window title

Last 'ARender' reference is in the window title of the browser. This can be modified by editing the file ARender.html that can be found at the root folder of your ARender deployment. Then you can modify the following line to remove 'ARender' :


After edit :

