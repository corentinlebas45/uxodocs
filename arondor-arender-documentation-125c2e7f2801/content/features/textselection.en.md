---
title: Text Selection
description:
icon: mdi-cursor-text
keyword: ["feature", "selection", "text", "text selection"]
related:
    - name : "Quick menu"
      rel: '/features/quickmenu.en.md'
---

## Document Text Selection

ARender is composed of different layers, which are :

- Content Layer (Lower layer) : Each pages are shown as images
- Text Layer (Middle layer) : User can select, copy, search or annotate text through document text
- Annotation Layer (Upper layer) : The user can view, create, modify annotations as separate objects

## How to select text

When the user hovers the mouse over the text, the cursor becomes an I-beam pointer.
The user can click and drag the mouse over part or the whole word to select and copy or annotate the text. The selected text is then highlighted.
To copy the selected text, the user can press and hold the CTRL button then press the key C (CTRL+C).
Once copied, he can paste the text into another software application.
The user can, as well, double click on a word to select it.



When the text selection is finished, the quick menu is displayed below the text to allow various actions regarding the selected text.


## Text Selection - Character by Character

By default, text selection highlights character by character :


## Text Selection - Word by Word

ARender version 4.1.x introduces a new text selection feature that improves word processing.

Every time a word (or a part of it) is selected, the selection is automatically expanded to include the entire word.


The user has the option to override this behavior by changing the direction in which the mouse pointer is being dragged as the selection is made.
This action undoes the automatic selection of the entire word, and allows the user to precisely select part or the entire word.


To enable the new feature, please refer to the dedicated configuration [here]({{< relref "/guides/configurations/web-ui/properties/textselection.en.md">}})

## Text Selection - Line

Since ARender version 4.7.3, you have the possibility to select an entire line with three clicks.


## Text Selection - Page

Since ARender version 4.7.3, you have the possibility to select an entire page with four clicks.


## Text Selection - Entire document

ARender version 4.8.0 introduces the selection of all the text of the current document. This feature is available through a button in the
 toppanel which is disabled by default.

To activate the button, add the following property to the *configurations/arender-custom-client.properties* configuration file :


```cfg
# Activate the copy all text of the document button
topPanel.copy.document.text=true
```



When clicked, the button will launch the retrieval of the text of each page of the current document. The progress of the copy will be indicated
 by a notification at the bottom right. Once the copying of the text is finished, a notification will again be visible to inform the user.


## Text Selection - By zone

Since ARender version 4.5.x, you have the possibility to select text in a zone.

The user can do `CTRL + left-click` or `ALT + left-click` to start the text selection by zone.

