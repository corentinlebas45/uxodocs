---
title: Annotations
description:
icon: mdi-comment-text-outline
keywords: ["feature", "annotations"]
---

## General

### Access to the annotations

You can access the annotations directly in the top panel:


And the annotation toolbar appears:


You can also access the annotations with a right-click on the document:


### Save annotations

You can save your annotations by clicking on the "Save" button:


### Show/hide annotations

You can show or hide an annotation by clicking on the "Show/Hide
annotations" button:


## Sticky note

### Create a sticky note

To create a sticky note, you click on the following button:


or you can right-click on the document and choose "Add sticky note" in the menu:


Then, you drag and drop your cursor on the document:


### Customize a sticky note

To customize a sticky note, click on the pencil icon. You are in the edit mode, the
annotation toolbar contains buttons for the sticky note modification:


To modify your sticky note text, you can write directly in the sticky
note. To put your text in bold, italic or underlined, you click on these
buttons:


You can choose the font and size of your text with these two drop-down
lists:


You can change the text color and the background color by clicking on
these buttons:


To move your sticky note, position your cursor on the sticky note header
and drag and drop the sticky note:


When your changes are done, exit edit mode by clicking on this button:


*Warning: Internet Explorer 8 forces some conditions on the formatting
of rich text in webpages. In order for us to have the same visual
restitution in all browser an empty line under Internet Explorer 8 must
be done using shift+Enter.*

### See details about a sticky note

To see details about a sticky note, you click on it. Your are in the
edit mode. In the annotation toolbar, you click on the "Details" button:


Annotation details appear in a pop-in:


To exit the pop-in, click anywhere in the document.

### Remove a sticky note

To remove a sticky note, click on it to access the edit mode. In the
annotation toolbar you click on the "Remove annotation" button:


## Highlight rectangle

### Create an highlight rectangle

To create an highlight rectangle, click on the following button:


or you can right-click on the document en choose "Add sticky note" in
the menu:


then, you drag and drop your cursor on the area you wish to highlight:


### Customize an highlight rectangle

To customize an highlight rectangle, click on it. You are in the edit
mode, the annotation toolbar contains buttons for the rectangle modification:


With the toolbar, you can:

- change the rectangle opacity (more information about sliders [here]({{< relref "/content/features/sliders.en.md">}})).
- change the background color.
- see the details about the rectangle.
- remove the rectangle.
- stop the rectangle edition.

You can also move your rectangle: position your cursor on the rectangle
and drag and drop it.

### Remove an highlight rectangle

To remove an highlight rectangle, click on it to access the edit mode.
Then, in the annotation toolbar, click on the "Remove annotation" button:


## Arrow

### Create an arrow

To create an arrow, click on the "Add arrow" button:


or you can right-click on the document and choose "Add arrow" in the
menu:


### Customize an arrow

- **Change arrow background color**

You can change the arrow background color by clicking on the "Background
color" button:


- **Change arrow opacity**

You can change arrow opacity by clicking on the cursor button:


- **Change arrow size**

You can change the arrow size by clicking on these buttons:


- **Change arrow direction**

The arrow direction can be changed by clicking on one of its ends (A red
circle appears at the tip of the arrow and at its base). 
You can drag and drop the arrow on the page to move it.


### See details about the arrow

To see details about the arrow, click on it. In the annotation toolbar, click on
the "Details" button:


## Highlight text

### Create highlighted text

To create a highlighted text, select the text with the cursor. Then right-click and choose “Highlight Text” from
the menu:


### Edit highlighted text

You can remove some of the previously highlighted text.
Select the text you want to remove the highlighting with the cursor. 
Then right-click and choose "Delete highlight” in the menu:


The rest of the text is always highlighted.



### Delete highlighted text

To remove a highlighted text, select the text with the
cursor then right-click and choose “Delete Highlight” in the menu.

### Annotation creation by rules

The method of annotation creation by rules allows you to define rules that will be followed for the annotation creation. The annotations of type Strikethrough, Underline, Highlight, Redact or Redact Text are compatible with the creation by rules.

Rules can only be defined in configuration files.

It is possible with JavaScript to apply these rules. All the details on the configuration as well as examples of use can be found on [the dedicated page]({{< relref "/learn/how-to/annotation-creation-rule.en.md">}}).

## Audio annotation

### Configuration

#### Creation

To create an audio annotation, the following property must be set:


```cfg
# Activate the sound annotation button
topPanel.annotationMenu.sound=true
```


#### Visibility

To display the sound annotation with media controls at opening, use the following property:


```cfg
# If true, sound annotation will be displayed with media controls at creation
annotation.sound.show.controls.at.load=true
```


#### Audio duration

To change the maximum audio duration that can be recorded (in ms), use the following property:


```cfg
# Define the time limitation (in ms) for the record of sound annotation
annotation.sound.record.time.limit=60000
```



**If ARender is integrated into an HTML *iframe* tag then it must have the HTML attribute *allow="microphone"* in the 
iframe tag itself.**

**For browser security reasons, use of the microphone is only possible with the HTTPS protocol
or if ARender is deployed in localhost.
Any other unsecured host is not supported by default. However, in a test scope, it is possible with the
Chrome browser to add the *Insecure origins treated as secure* flag with the URL *chrome://flags/***


### Create an audio annotation

To create an audio annotation, click on the following button:


then, click on the record audio button to start recording audio input corresponding to the microphone.


After recording, the audio can be stopped and played. The progress bar can be used to jump to a specific time of 
the audio.

The audio pin can be used to hide and move the audio annotation.

