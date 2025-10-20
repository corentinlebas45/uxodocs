---
title: Image processing
description:
icon: mdi-image-edit-outline
keyword: ["feature", "images", "processing", "image processing", "contrast", "brightness", "inversion"]
---

To improve the visibility of elements on certain documents, it is possible to manipulate the contrast, the brightness and the inversion of color by using a slider ranging from -100 to 100 where 0 is the default value.



The buttons to display the sliders individually can be activated with the following properties :

```cfg
#Activate the brightness slider
topPanel.imageProcessMenu.brightness.enabled=true
#Activate the contrast slider
topPanel.imageProcessMenu.contrast.enabled=true
# Activate the invert colors slider
topPanel.imageProcessMenu.invert.enabled=true
```


 By default, the buttons for the contrast and brightness sliders are enabled.

Image processing can be applied in three different ways :
- Current page
- All pages of the current document
- All pages of all opened documents


```cfg
# Set how image processing is applied : CURRENT_PAGE, ALL_PAGES, ALL_DOCUMENTS
topPanel.imageProcessMenu.process.mode=ALL_DOCUMENTS
```


