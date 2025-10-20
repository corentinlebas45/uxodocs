---
title: Properties
draft: false
icon: mdi mdi-format-list-checks
layout: faq
keywords: ["configuration", "profile", "property" ]
---

- **Type:** boolean
- **Description:** Disable/enable showing statistics in the about dialog box
- **Default:**

    ```python
    about.dialog.statistics.enable=true
    ```


- **Type:** boolean
- **Description:** Disable/enable showing table statistics in the about dialog box (removes as well the graph values)
- **Default:**

    ```python
    about.dialog.statistics.table.enable=true
    ```


- **Type:** boolean
- **Description:** Disable/enable the charts in the statistics section pulls the library from google API (gwt charts)
- **Default:**

    ```python
    about.dialog.statistics.charts.enable=false
    ```


- **Type:** boolean
- **Description:** Displays the current version in the about dialog box
- **Default:**

    ```python
    about.dialog.show.current.version=true
    ```


- **Type:** boolean
- **Description:** Displays the current user in the about dialog box
- **Default:**

    ```python
    about.dialog.show.current.user=true
    ```


- **Type:** boolean
- **Description:** If true, enables the advanced search explorer
- **Default:**

    ```python
    advanced.searchexplorer.enabled=true
    ```


- **Type:** integer
- **Description:** Sets up the minimum character length allowed
- **Default:**

    ```python
    advanced.searchexplorer.min.characterLength=0
    ```


- **Type:** integer
- **Description:** Sets up the maximum character length allowed
- **Default:**

    ```python
    advanced.searchexplorer.max.characterLength=255
    ```


- **Type:** boolean
- **Description:** If true, enables tooltip on hover
- **Default:**

    ```python
    advanced.searchexplorer.tooltipOnHover.enabled=true
    ```


- **Type:** boolean
- **Description:** If true, enables case sensitive tooltip
- **Default:**

    ```python
    advanced.searchexplorer.caseSensitive.tooltip.enabled=false
    ```


- **Type:** boolean
- **Description:** If true, enables accent sensitive tooltip
- **Default:**

    ```python
    advanced.searchexplorer.accentSensitive.tooltip.enabled=false
    ```


- **Type:** boolean
- **Description:** If true, enables regex tooltip
- **Default:**

    ```python
    advanced.searchexplorer.regex.tooltip.enabled=true
    ```


- **Type:** boolean
- **Description:** If true, search is updated on annotation refresh when the the advanced search explorer is active
- **Default:**

    ```python
    advanced.searchexplorer.updates.enabled=false
    ```


- **Type:** boolean
- **Description:** If true, all redaction annotations can be hidden using the regular hide annotations button
- **Default:**

    ```python
    annotation.canHideObfuscate=false
    ```


- **Type:** boolean
- **Description:** Allows annotations to be automatically save after edition
- **Default:**

    ```python
    annotation.autosave=false
    ```


- **Type:** boolean
- **Description:** Auto refreshes the annotations after save
- **Default:**

    ```python
    annotation.autorefresh=true
    ```


- **Type:** integer
- **Description:** Auto save annotation timer delay in milliseconds
- **Default:**

    ```python
    annotation.autosave.timerDelay=1000
    ```


- **Type:** boolean
- **Description:** When saving annotations, display the loading animation
- **Default:**

    ```python
    annotation.loadingGIF=true
    ```


- **Type:** boolean
- **Description:** Load the existing document annotations on display
- **Default:**

    ```python
    annotation.loadExisting=true
    ```


- **Type:** boolean
- **Description:** Display a warning to the end user when annotations are left unsaved
- **Default:**

    ```python
    annotation.displaySaveWarning=true
    ```


- **Type:** boolean
- **Description:** All saved annotations will be set to read only
- **Default:**

    ```python
    annotation.forceReadOnly=false
    ```


- **Type:** boolean
- **Description:** All saved annotations will be set to locked
- **Default:**

    ```python
    annotation.forceLocked=false
    ```


- **Type:** boolean
- **Description:** Display a pictogram near the commented annotation
- **Default:**

    ```python
    annotation.comment.pictogram.enabled=true
    ```


- **Type:** float
- **Description:** Opacity of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.opacity=1.0
    ```


- **Type:** integer
- **Description:** Minimum width in pixel of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.minimum.width=140
    ```


- **Type:** integer
- **Description:** Minimum height in pixel of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.minimum.height=70
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.color=#F3F001
    ```


- **Type:** boolean
- **Description:** Hide borders options of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.hide.border=true
    ```


- **Type:** boolean
- **Description:** Hide details of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.hide.details=false
    ```


- **Type:** String
- **Description:** Font of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.font=Helvetica
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Font color of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.fontColor=#000000
    ```


- **Type:** integer
- **Description:** Font size of the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.fontSize=2
    ```


- **Type:** boolean
- **Description:** Set the font bold by default for the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.bold=false
    ```


- **Type:** boolean
- **Description:** Set the font underlined by default for the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.underline=false
    ```


- **Type:** boolean
- **Description:** Set the font italic by default for the sticky note annotation
- **Default:**

    ```python
    annotation.stickyNote.default.italic=false
    ```


- **Type:** boolean
- **Description:** Enables a link between the pin and the note for sticky note
- **Default:**

    ```python
    annotation.stickyNote.dotLink.enabled=true
    ```


- **Type:** integer
- **Description:** Default pin size in pixel for the sticky note
- **Default:**

    ```python
    annotation.stickyNote.pin.default.size=20
    ```


- **Type:** boolean
- **Description:** Adapt sticky note font size according to the zoom ratio
- **Default:**

    ```python
    annotation.stickyNote.adapt.font.size.enabled=false
    ```


- **Type:** integer
- **Description:** Auto hide delay in milliseconds for the annotation popups
- **Default:**

    ```python
    annotation.popup.autohide.delay.ms=300
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Popup fallback background color when the annotation background color is empty
- **Default:**

    ```python
    annotation.popup.default.background.color=#F6F6F6
    ```


- **Type:** float
- **Description:** Opacity for the rectangle annotation
- **Default:**

    ```python
    annotation.rectangle.opacity=0.7
    ```


- **Type:** integer
- **Description:** Minimum width in pixel for the rectangle annotation
- **Default:**

    ```python
    annotation.rectangle.minimum.width=30
    ```


- **Type:** integer
- **Description:** Minimum height in pixel for the rectangle annotation
- **Default:**

    ```python
    annotation.rectangle.minimum.height=10
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color for the rectangle annotation
- **Default:**

    ```python
    annotation.rectangle.default.color=#EAF39C
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Border color for the rectangle annotation
- **Default:**

    ```python
    annotation.rectangle.default.border.color=#EAF39C
    ```


- **Type:** integer
- **Description:** Border width in pixel for the rectangle annotation
- **Default:**

    ```python
    annotation.rectangle.default.border.width=0
    ```


- **Type:** float
- **Description:** Opacity for the circle annotation
- **Default:**

    ```python
    annotation.circle.opacity=0.7
    ```


- **Type:** integer
- **Description:** Minimum width in pixel for the circle annotation
- **Default:**

    ```python
    annotation.circle.minimum.width=30
    ```


- **Type:** integer
- **Description:** Minimum height for the circle annotation
- **Default:**

    ```python
    annotation.circle.minimum.height=10
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color for the circle annotation
- **Default:**

    ```python
    annotation.circle.default.color=#EAF39C
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Border color for the circle annotation
- **Default:**

    ```python
    annotation.circle.default.border.color=#EAF39C
    ```


- **Type:** integer
- **Description:** Border width in pixel for the circle annotation
- **Default:**

    ```python
    annotation.circle.default.border.width=0
    ```


- **Type:** float
- **Description:** Opacity for the highlight annotation
- **Default:**

    ```python
    annotation.highlighttext.opacity=0.7
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color for the highlight annotation
- **Default:**

    ```python
    annotation.highlighttext.default.color=#EAF39C
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color for the redaction annotation
- **Default:**

    ```python
    annotation.redaction.default.color=#273746
    ```


- **Type:** float
- **Description:** Strike width ratio for underline - strike through annotations
- **Default:**

    ```python
    annotation.highlighttext.strike.width.ratio=0.1
    ```


- **Type:** float
- **Description:** Opacity for the Freetext annotation
- **Default:**

    ```python
    annotation.freetext.opacity=0.7
    ```


- **Type:** integer
- **Description:** Minimum width in pixel for the Freetext annotation
- **Default:**

    ```python
    annotation.freetext.minimum.width=30
    ```


- **Type:** integer
- **Description:** Minimum height in pixel for the Freetext annotation
- **Default:**

    ```python
    annotation.freetext.minimum.height=10
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color for the Freetext annotation
- **Default:**

    ```python
    annotation.freetext.default.color=#EEEEEE
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Border color for the Freetext annotation
- **Default:**

    ```python
    annotation.freetext.default.border.color=#FF0000
    ```


- **Type:** integer
- **Description:** Border width in pixel for the Freetext annotation
- **Default:**

    ```python
    annotation.freetext.default.border.width=2
    ```


- **Type:** boolean
- **Description:** Adapt font size according to the zoom ratio
- **Default:**

    ```python
    annotation.freetext.adapt.font.size.enabled=false
    ```


- **Type:** Color, in format rgb(r,g,b)
- **Description:** Arrow annotation color
- **Default:**

    ```python
    annotation.arrow.backgroundColor=rgb(42, 72, 105)
    ```


- **Type:** boolean
- **Description:** Allow arrows to measure distances
- **Default:**

    ```python
    annotation.arrow.computeDistance=false
    ```


- **Type:** integer
- **Description:** Defines a minimal head size in pixel for arrows
- **Default:**

    ```python
    annotation.arrow.minimal.head.size=-1
    ```


- **Type:** integer
- **Description:** Defines a base distance for the head of arrow in X in pixel
- **Default:**

    ```python
    annotation.arrow.x.defaultDistance=12
    ```


- **Type:** integer
- **Description:** Defines a base distance for the head of arrow in Y in pixel
- **Default:**

    ```python
    annotation.arrow.y.defaultDistance=12
    ```


- **Type:** float
- **Description:** Opacity for the polygon annotation
- **Default:**

    ```python
    annotation.polygon.opacity=0.7
    ```


- **Type:** Color, in format rgb(r,g,b)
- **Description:** Color for the polygon annotation
- **Default:**

    ```python
    annotation.polygon.backgroundColor=rgb(42, 72, 105)
    ```


- **Type:** float
- **Description:** Border width for the polygon annotation
- **Default:**

    ```python
    annotation.polygon.width=2.0f
    ```


- **Type:** integer
- **Description:** Opacity for the polyline annotation
- **Default:**

    ```python
    annotation.polyline.opacity=1
    ```


- **Type:** Color, in format rgb(r,g,b)
- **Description:** Color for the polyline annotation
- **Default:**

    ```python
    annotation.polyline.backgroundColor=rgb(42, 72, 105)
    ```


- **Type:** float
- **Description:** Border width for the polyline annotation
- **Default:**

    ```python
    annotation.polyline.width=2.0f
    ```


- **Type:** integer
- **Description:** Opacity for the freehand annotation
- **Default:**

    ```python
    annotation.ink.opacity=1
    ```


- **Type:** Color, in format rgb(r,g,b)
- **Description:** Color for the freehand annotation
- **Default:**

    ```python
    annotation.ink.backgroundColor=rgb(42, 72, 105)
    ```


- **Type:** float
- **Description:** Border width for the freehand annotation
- **Default:**

    ```python
    annotation.ink.width=2.0f
    ```


- **Type:** float
- **Description:** Opacity for the Hyperlink annotation
- **Default:**

    ```python
    annotation.hyperlink.opacity=0.5f
    ```


- **Type:** Color, in format #RRGGBB
- **Description:** Color for the Hyperlink annotation
- **Default:**

    ```python
    annotation.hyperlink.default.color=#0000FF
    ```


- **Type:** boolean
- **Description:** Allow stamps to be create in the current browser orientation (including document rotations)
- **Default:**

    ```python
    annotation.stamp.create.in.browser.orientation=false
    ```


- **Type:** boolean
- **Description:** Allow custom stamp to be created
- **Default:**

    ```python
    annotation.stampCustom.enabled=true
    ```


- **Type:** integer
- **Description:** Maximum of custom stamp allowed to be added in favorite
- **Default:**

    ```python
    annotation.stampCustom.maxFavorite=15
    ```


- **Type:** boolean
- **Description:** Auto activate the draggable widgets for the Freetext when in edition mode.
- **Default:**

    ```python
    annotation.freetext.drag.widgets.on.edit=true
    ```


- **Type:** boolean
- **Description:** Stamp rotation effect in video mode (easter egg)
- **Default:**

    ```python
    annotation.rotation.windmillEffect.enabled=false
    ```


- **Type:** boolean
- **Description:** Annotations are loaded per page
- **Default:**

    ```python
    annotation.loadPerPage=false
    ```


- **Type:** boolean
- **Description:** When searching for text, also search within annotation content
- **Default:**

    ```python
    annotation.searchTextInAnnotations=true
    ```


- **Type:** String
- **Description:** Default dash array style when the border style is set to DASH
- **Default:**

    ```python
    annotation.default.stroke.dasharray=5.0,2.0
    ```


- **Type:** boolean
- **Description:** Activate the info popup for annotations
- **Default:**

    ```python
    annotation.info.popup.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the popup info for annotations who aren't editable
- **Default:**

    ```python
    annotation.info.popup.evenIfEditable=false
    ```


- **Type:** boolean
- **Description:** Display the last updated time for the annotation
- **Default:**

    ```python
    annotation.info.popup.displayUpdate=false
    ```


- **Type:** boolean
- **Description:** Activates the comment explorer for displaying annotation details
- **Default:**

    ```python
    annotation.comment.explorer.enabled=true
    ```


- **Type:** boolean
- **Description:** Sets up the comment explorer on the east side of ARender
- **Default:**

    ```python
    annotation.comment.explorer.eastSide.enabled=false
    ```


- **Type:** boolean
- **Description:** Opens the comment explorer when an annotation is edited
- **Default:**

    ```python
    annotation.comment.explorer.openOnEdit=false
    ```


- **Type:** boolean
- **Description:** Shows a simplified list of all authors on the comment explorer tab
- **Default:**

    ```python
    annotation.comment.explorer.showAllAnnotators=true
    ```


- **Type:** boolean
- **Description:** Shows a total number of annotations on the comment explorer tab
- **Default:**

    ```python
    annotation.comment.explorer.showTotalAnnotationsNumber=false
    ```


- **Type:** boolean
- **Description:** Shows the comment explorer at startup of ARender as default pane
- **Default:**

    ```python
    annotation.comment.explorer.showAtStartup=false
    ```


- **Type:** boolean
- **Description:** Use local storage for annotation preferences
- **Default:**

    ```python
    annotation.use.local.storage=false
    ```


- **Type:** boolean
- **Description:** Legacy annotation explorer, show the sticky notes replies
- **Default:**

    ```python
    annotationExplorer.showStickyNoteReplies=false
    ```


- **Type:** boolean
- **Description:** Legacy annotation explorer, show the sticky notes labels
- **Default:**

    ```python
    annotationExplorer.showStickyNoteLabel=true
    ```


- **Type:** boolean
- **Description:** Legacy annotation explorer, adapts the width of the panel accordingly
- **Default:**

    ```python
    annotationExplorer.adaptativeWidth.enabled=true
    ```


- **Type:** boolean
- **Description:** If true, enables the legacy annotation explorer
- **Default:**

    ```python
    annotationexplorer.enabled=false
    ```


- **Type:** boolean
- **Description:** Enables web socket and try to initiate the web socket if the browser web socket is available
  By enabling web sockets, it will try to use it to retrieve the document layout if it is taking more than a second,
  for example when a conversion is needed, which can optimizes performances.
- **Default:**

    ```python
    arender.web.socket.enabled=true
    ```


- **Type:** boolean
- **Description:** Enables ARender version check
- **Default:**

    ```python
    arender.pollLastVersion=true
    ```


- **Type:** String
- **Description:** ARenderJS Configuration : customization startup script URL
- **Default:** 
    ```python
    (none, or empty by default)
    ```


- **Type:** boolean
- **Description:** If true, enables the bookmark explorer
- **Default:**

    ```python
    bookmarkexplorer.enabled=true
    ```


- **Type:** boolean
- **Description:** If true, show the bookmark explorer at the application startup
- **Default:**

    ```python
    bookmarkexplorer.showAtStartup=false
    ```


- **Type:** boolean
- **Description:** If true, make the bookmarks draggable
- **Default:**

    ```python
    bookmarkexplorer.draggable=false
    ```


- **Type:** boolean
- **Description:** If true, enables the bookmark creation
- **Default:**

    ```python
    bookmarkexplorer.add.bookmark.enabled=true
    ```


- **Type:** boolean
- **Description:** If true, enables the bookmark deletion
- **Default:**

    ```python
    bookmarkexplorer.delete.bookmark.enabled=true
    ```


- **Type:** boolean
- **Description:** Shows in the comment explorer an icon of the annotation
- **Default:**

    ```python
    comment.showAnnotationImage=true
    ```


- **Type:** integer
- **Description:** Comment text area max height corresponds to the maximum height when expanding the text with the button "Show more", in pixels
- **Default:**

    ```python
    comment.textArea.maxHeight=0
    ```


- **Type:** boolean
- **Description:** Enable contextual status menu will allow to right click on an comment annotation to add a status
- **Default:**

    ```python
    comment.contextStatusMenu.enabled=false
    ```


- **Type:** boolean
- **Description:** Enable multiple comment thread level display
- **Default:**

    ```python
    comment.multiple.thread.level.enabled=false
    ```


- **Type:** boolean
- **Description:** Enable richtext shortcut : [Enter] validates the annotation comment and [Shift]+[Enter] makes a new line
- **Default:**

    ```python
    comment.richtext.shortcut.enabled=false
    ```


- **Type:** boolean
- **Description:** Activates ARender contextual right click menu
- **Default:**

    ```python
    contextualMenu.enabled=true
    ```


- **Type:** boolean
- **Description:** Activates ARender contextual icons mode
- **Default:**

    ```python
    contextualMenu.icons.enabled=false
    ```


- **Type:** boolean
- **Description:** Enables the print option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasPrint=false
    ```


- **Type:** boolean
- **Description:** Enables the print all documents option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasPrintAll=false
    ```


- **Type:** boolean
- **Description:** Enables the create a sticky note option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasStickyNote=true
    ```


- **Type:** boolean
- **Description:** Enables the create a cropbox image from the contextual menu
- **Default:**

    ```python
    contextualMenu.hasCropBoxImage=false
    ```


- **Type:** boolean
- **Description:** Enables a textual highlight annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasHighlightText=true
    ```


- **Type:** boolean
- **Description:** Enables a strike through annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasStrikeoutText=true
    ```


- **Type:** boolean
- **Description:** Enables an underline annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasUnderlineText=true
    ```


- **Type:** boolean
- **Description:** Enables an highlight annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasHighlight=true
    ```


- **Type:** boolean
- **Description:** Enables a circle annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasCircle=true
    ```


- **Type:** boolean
- **Description:** Enables an arrow annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasArrow=true
    ```


- **Type:** boolean
- **Description:** Enables a polygon annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasPolygon=false
    ```


- **Type:** boolean
- **Description:** Enables a polyline annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasPolyline=false
    ```


- **Type:** boolean
- **Description:** Enables a freehand annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasFreehand=false
    ```


- **Type:** boolean
- **Description:** Enables the rotate option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasPageRotation=false
    ```


- **Type:** boolean
- **Description:** Enables the open multiview option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasMultiView=false
    ```


- **Type:** boolean
- **Description:** Enables the "show guide here" option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasShowGuideRuler=false
    ```


- **Type:** boolean
- **Description:** Enables the "hide guide ruler" option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasHideGuideRuler=false
    ```


- **Type:** boolean
- **Description:** Enables a hyperlink creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasHyperlink=true
    ```


- **Type:** boolean
- **Description:** Enables an anchor creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasAnchor=true
    ```


- **Type:** boolean
- **Description:** Enables a stamp annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasStamp=false
    ```


- **Type:** boolean
- **Description:** Enables a freetext annotation creation option for the contextual menu
- **Default:**

    ```python
    contextualMenu.hasFreetext=false
    ```


- **Type:** String
- **Description:** Specify the date format for the annotations
- **Default:**

    ```python
    date.format=dd-MM-yyyy HH:mm:ss
    ```


- **Type:** boolean
- **Description:** Enabling the scroll by step instead of jumping to page on the scrollUp and scrollDown button
- **Default:**

    ```python
    document.vertical.slider.changeToPage.enabled=false
    ```


- **Type:** boolean
- **Description:** No description yet provided
- **Default:**

    ```python
    document.vertical.slider.new.click.scrollbar.behavior=true
    ```


- **Type:** boolean
- **Description:** Activates the progressive loading of ARender front end side (the layout is asked by parts from the front end)
- **Default:**

    ```python
    document.progressiveLoading=false
    ```


- **Type:** boolean
- **Description:** Update and notify the end user to the progressive loading mechanisms
- **Default:**

    ```python
    document.loading.progress.update=true
    ```


- **Type:** boolean
- **Description:** Enables the document builder button (and feature)
- **Default:**

    ```python
    documentbuilder.enabled=false
    ```


- **Type:** boolean
- **Description:** Sets the document builder button visible
- **Default:**

    ```python
    documentbuilder.button.visible=true
    ```


- **Type:** boolean
- **Description:** Activate the document builder at startup as soon as the documents are ready
- **Default:**

    ```python
    documentbuilder.activateOnStartup=false
    ```


- **Type:** boolean
- **Description:** Hide the document navigator once the document builder is opened
- **Default:**

    ```python
    documentbuilder.hideDocumentNavigator=true
    ```


- **Type:** boolean
- **Description:** Display a save warning if a document with modifications is left when leaving ARender
- **Default:**

    ```python
    documentbuilder.displaySaveWarning=true
    ```


- **Type:** boolean
- **Description:** Make the document builder thumbnails draggable in order to organize the pages
- **Default:**

    ```python
    documentbuilder.thumbs.draggable=true
    ```


- **Type:** integer
- **Description:** Sets the document builder panel width
- **Default:**

    ```python
    documentbuilder.width=280
    ```


- **Type:** String
- **Description:** Sets the document builder default save button action
- **Default:**

    ```python
    documentbuilder.save.action=save
    ```


- **Type:** String
- **Description:** Sets the document builder save behavior (legacy) : UPDATE_NO_DOCUMENT, CREATE_NEW_FIRST_DOCUMENT, UPDATE_FIRST_DOCUMENT, UPDATE_ALL_DOCUMENT
- **Default:**

    ```python
    documentbuilder.save.behavior=UPDATE_NO_DOCUMENT
    ```


- **Type:** boolean
- **Description:** Activates the local download builder button
- **Default:**

    ```python
    documentbuilder.save.download=true
    ```


- **Type:** boolean
- **Description:** Activates the delete current document from the builder button
- **Default:**

    ```python
    documentbuilder.save.delete=false
    ```


- **Type:** boolean
- **Description:** Once documents are built, a frozen title will remain and need to be manually removed to confirm the operation
- **Default:**

    ```python
    documentbuilder.save.freeze=true
    ```


- **Type:** boolean
- **Description:** Allow the document builder to create child documents (folders)
- **Default:**

    ```python
    documentbuilder.addChild.enabled=false
    ```


- **Type:** boolean
- **Description:** Allow the document builder to create new documents (not only compose)
- **Default:**

    ```python
    documentbuilder.createDocument.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the feature to delete on right click a list of selected thumbs
- **Default:**

    ```python
    documentbuilder.deleteSelectedThumbs.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the feature to create a new document from selected thumbs
- **Default:**

    ```python
    documentbuilder.createDocumentFromSelectedThumbs.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the contextual menu option to close the builder
- **Default:**

    ```python
    documentbuilder.close.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the legacy save document builder button
- **Default:**

    ```python
    documentbuilder.button.legacySave.enabled=false
    ```


- **Type:** boolean
- **Description:** Activate the button : download the builder document locally
- **Default:**

    ```python
    documentbuilder.button.download.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the button : run custom action on builder document
- **Default:**

    ```python
    documentbuilder.button.custom.enabled=false
    ```


- **Type:** boolean
- **Description:** Activate the button : download the builder document with annotation
- **Default:**

    ```python
    documentbuilder.button.download.annotations.enabled=false
    ```


- **Type:** boolean
- **Description:** Activate the button : update all documents
- **Default:**

    ```python
    documentbuilder.button.updateAll.enabled=false
    ```


- **Type:** boolean
- **Description:** Activate the button : Create new first document
- **Default:**

    ```python
    documentbuilder.button.createFirst.enabled=false
    ```


- **Type:** boolean
- **Description:** Activate the button : Update the document
- **Default:**

    ```python
    documentbuilder.button.updateFirst.enabled=false
    ```


- **Type:** boolean
- **Description:** If active, the saveAll button will visible
- **Default:**

    ```python
    documentbuilder.button.saveAll.enabled=false
    ```


- **Type:** boolean
- **Description:** If active, the saveAll button will be always visible if enabled, even if documents are empty
- **Default:**

    ```python
    documentbuilder.button.saveAll.active.when.empty=false
    ```


- **Type:** boolean
- **Description:** If active, the updateAll button will be always visible if enabled, even if documents are empty
- **Default:**

    ```python
    documentbuilder.button.updateAll.active.when.empty=false
    ```


- **Type:** String
- **Description:** Sets up the policy to populate the document builder : CopyCurrentDocument or EmptyDocument
- **Default:**

    ```python
    documentbuilder.populatorPolicy=CopyCurrentDocument
    ```


- **Type:** boolean
- **Description:** Sets up the policy CopyCurrentDocument from the builder, does it need to flatten the documents indentation or not
- **Default:**

    ```python
    documentbuilder.populatorPolicy.CopyCurrentDocument.flattenNodeHierarchy=true
    ```


- **Type:** boolean
- **Description:** Hides the document builder button until all documents have been loaded
- **Default:**

    ```python
    documentbuilder.button.hideUntilLoaded=true
    ```


- **Type:** String
- **Description:** Thumb navigator view behavior after processing a download in documentbuilder : hide, disable, nochange
- **Default:**

    ```python
    documentbuilder.afterDownload=hide
    ```


- **Type:** boolean
- **Description:** Activate the button : Refresh the document to its original state
- **Default:**

    ```python
    documentbuilder.button.refresh.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the red cross button to remove a page in the document builder.
- **Default:**

    ```python
    documentbuilder.button.page.removal.enabled=true
    ```


- **Type:** boolean
- **Description:** Activate the cross button to delete the document in the document builder
- **Default:**

    ```python
    documentbuilder.button.document.removal.enabled=true
    ```


- **Type:** integer
- **Description:** Sets up the width (in pixel) of the document navigator (left tabs of ARender)
- **Default:**

    ```python
    documentnavigator.width=255
    ```


- **Type:** integer
- **Description:** Sets up the time (in ms) to auto hide the arrow for maximizing or reducing the document navigator
- **Default:**

    ```python
    documentnavigator.ears.hideTimerDelay=500
    ```


- **Type:** String
- **Description:** Sets up the default position of the document navigator tabs: Default, Reduced or Expanded
- **Default:**

    ```python
    documentnavigator.initialWidth=Default
    ```


- **Type:** integer
- **Description:** Default value set up to 70. The document navigator will take 70 percent of the screen.
- **Default:**

    ```python
    documentnavigator.expand.reduce.ratio=70
    ```


- **Type:** integer
- **Description:** Delay (in s) before showing the warning menu that the document might take time to process
- **Default:**

    ```python
    error.warninDelay=10
    ```


- **Type:** boolean
- **Description:** Allow the error menu to display a download link for the document
- **Default:**

    ```python
    error.hasDownloadButton=true
    ```


- **Type:** boolean
- **Description:** Disable the error menu to display error stack traces (useful for debug/integration testing, not suitable for production)
- **Default:**

    ```python
    error.hideErrorStack=true
    ```


- **Type:** boolean
- **Description:** Allows to filter the annotation in the comment explorer
- **Default:**

    ```python
    filter.comment.showTabImage=true
    ```


- **Type:** boolean
- **Description:** Shows a label instead of icons for filtering
- **Default:**

    ```python
    filter.comment.showTabLabel=false
    ```


- **Type:** boolean
- **Description:** Shows the switch filter for solved/unresolved requests
- **Default:**

    ```python
    filter.comment.showSwitchFilter=true
    ```


- **Type:** boolean
- **Description:** Open hyperlinks into ARender instead of new window
- **Default:**

    ```python
    hyperlinks.loadInARender=false
    ```


- **Type:** boolean
- **Description:** Load hyperlinks coming from the PDF file
- **Default:**

    ```python
    hyperlinks.loadFromPDF=true
    ```


- **Type:** boolean
- **Description:** Display frame/blue box around hyperlinks if needed
- **Default:**

    ```python
    hyperlinks.displayFrame=true
    ```


- **Type:** boolean
- **Description:** Hyperlinks contained from the PDF document will be loaded
- **Default:**

    ```python
    hyperlinks.load.internal=true
    ```


- **Type:** boolean
- **Description:** Hyperlinks contained from the annotations will be loaded
- **Default:**

    ```python
    hyperlinks.load.external=true
    ```


- **Type:** integer
- **Description:** Configures the target DPI for the pictures generated from the cropbox (base dpi is 72, default target is 150)
- **Default:**

    ```python
    image.cropbox.target.dpi=150
    ```


- **Type:** integer
- **Description:** Setup the position in pixel of the Left of the popup window
- **Default:**

    ```python
    image.cropbox.window.position.left.px=0
    ```


- **Type:** integer
- **Description:** Setup the position in pixel of the Top of the popup window
- **Default:**

    ```python
    image.cropbox.window.position.top.px=0
    ```


- **Type:** integer
- **Description:** If superior to -1, will set the width of the popup window. If -1, will set to a "screen ratio" of the screen available space
- **Default:**

    ```python
    image.cropbox.window.position.width.px=-1
    ```


- **Type:** integer
- **Description:** If superior to -1, will set the height of the popup window. If -1, will set to a "screen ratio" of the screen available space
- **Default:**

    ```python
    image.cropbox.window.position.height.px=-1
    ```


- **Type:** integer
- **Description:** Sets the screen ratio to use of available space for the width and height when they are set to -1
- **Default:**

    ```python
    image.cropbox.window.screen.ratio=3
    ```


- **Type:** boolean
- **Description:** If true, resizing the window will allow the expand of images (over their natural sizes)
- **Default:**

    ```python
    image.cropbox.can.expand=true
    ```


- **Type:** boolean
- **Description:** If true, annotations will be on the cropbox
- **Default:**

    ```python
    image.cropbox.include.annotations=true
    ```


- **Type:** float
- **Description:** Mousewheel velocity ratio factor, the higher the faster
- **Default:**

    ```python
    mousewheel.speed.factor=1.0
    ```


- **Type:** integer
- **Description:** Sets up the time, in milliseconds of ARender legacy notifications
- **Default:**

    ```python
    notifications.duration=500
    ```


- **Type:** boolean
- **Description:** Enables Plume integration with ARender
- **Default:**

    ```python
    plume.enabled=false
    ```


- **Type:** integer
- **Description:** Width in pixels for the images used by the print as images feature
- **Default:**

    ```python
    print.renditionWidth=1200
    ```


- **Type:** String
- **Description:** Sets up the CSS print width size once rendered
- **Default:**

    ```python
    print.imageStyle=width:800px;
    ```


- **Type:** boolean
- **Description:** Always check by default the "print with annotations" option
- **Default:**

    ```python
    print.includeAnnotationsByDefault=false
    ```


- **Type:** boolean
- **Description:** Force the print of annotations (cannot be unchecked)
- **Default:**

    ```python
    print.forcePrintAnnotations=false
    ```


- **Type:** boolean
- **Description:** Activate the watermarking feature from the print menu
- **Default:**

    ```python
    print.waterMarkActive=false
    ```


- **Type:** boolean
- **Description:** Print using a PDF instead of a set of images, lowers total download size
- **Default:**

    ```python
    print.usePDFPrint=true
    ```


- **Type:** boolean
- **Description:** Print by default all documents
- **Default:**

    ```python
    print.allDocumentsByDefault=false
    ```


- **Type:** boolean
- **Description:** Rotation annotations shall ignore force read only
- **Default:**

    ```python
    rotation.ignoreForceReadOnly=false
    ```


- **Type:** boolean
- **Description:** Rotation annotations shall ignore force locked
- **Default:**

    ```python
    rotation.ignoreForceLocked=false
    ```


- **Type:** boolean
- **Description:** Enables copy shortcut with CRTL+C
- **Default:**

    ```python
    shortCut.copy.enabled=true
    ```


- **Type:** boolean
- **Description:** Enables copy shortcut with CRTL+X
- **Default:**

    ```python
    shortCut.cut.enabled=true
    ```


- **Type:** String
- **Description:** Configures a print key shortcut
- **Default:**

    ```python
    shortCut.print.key=p
    ```


- **Type:** boolean
- **Description:** Enables a print key shortcut
- **Default:**

    ```python
    shortCut.print.enabled=true
    ```


- **Type:** String
- **Description:** Change the default ARender CSS
- **Default:**

    ```python
    style.sheet=ARender-mat.min.css
    ```


- **Type:** boolean
- **Description:** Activates the thumbExplorer : the view to browse the document by thumbnails
- **Default:**

    ```python
    thumbexplorer.enabled=true
    ```


- **Type:** integer
- **Description:** Sets up the indentation of Thumbs, in pixels when they need to indent (child documents)
- **Default:**

    ```python
    thumbexplorer.indentation=20
    ```


- **Type:** integer
- **Description:** Sets up the maximum level of indentation
- **Default:**

    ```python
    thumbexplorer.maxLevelToLoad=10
    ```


- **Type:** integer
- **Description:** Sets up the thumbs margin in pixels
- **Default:**

    ```python
    thumbexplorer.thumb.margin=5
    ```


- **Type:** integer
- **Description:** Sets up the thumbs width in pixels
- **Default:**

    ```python
    thumbexplorer.thumb.width=100
    ```


- **Type:** integer
- **Description:** Sets up the minimum amount of pixels needed for the pictree to grow in size
- **Default:**

    ```python
    thumbexplorer.thumb.grow.min=300
    ```


- **Type:** integer
- **Description:** Sets up the growth increment once the thumbnail can grow
- **Default:**

    ```python
    thumbexplorer.thumb.grow.increment=10
    ```


- **Type:** integer
- **Description:** Sets up the growth ratio corresponding to the growth of the panel
- **Default:**

    ```python
    thumbexplorer.thumb.grow.ratio=1
    ```


- **Type:** boolean
- **Description:** If true, allows thumbnails titles to have HTML content
- **Default:**

    ```python
    thumbexplorer.title.allowHTML=false
    ```


- **Type:** boolean
- **Description:** If true, thumbnails will display a popup information with document metadata
- **Default:**

    ```python
    thumbexplorer.metadata=true
    ```


- **Type:** integer
- **Description:** Sets up the delay in milliseconds to load the layout for the thumbnails
- **Default:**

    ```python
    thumbexplorer.layout.loading.delay=5
    ```


- **Type:** boolean
- **Description:** Allows to create an URL anchor to a page from the thumbnails
- **Default:**

    ```python
    thumbexplorer.contextualMenu.createPageAnchor=true
    ```


- **Type:** boolean
- **Description:** Display the resize button for the annotation timeline panel for videos
- **Default:**

    ```python
    timeline.panel.annotationBar.showResizeCircleButton=true
    ```


- **Type:** boolean
- **Description:** On drag of the annotations, update the video timer accordingly
- **Default:**

    ```python
    timeline.panel.annotationBar.changeVideoCurrentTimeOnDrag.enabled=true
    ```


- **Type:** boolean
- **Description:** Opens the timeline panel if annotations are existing on the video
- **Default:**

    ```python
    timeline.panel.openIfAnnotated=true
    ```


- **Type:** boolean
- **Description:** Opens the timeline panel if an annotation is being edited on video
- **Default:**

    ```python
    timeline.panel.openOnEdit=true
    ```


- **Type:** boolean
- **Description:** Allows SEVERE toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.severe.autoHide=false
    ```


- **Type:** boolean
- **Description:** Allows WARNING toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.warning.autoHide=true
    ```


- **Type:** boolean
- **Description:** Allows INFO toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.info.autoHide=true
    ```


- **Type:** boolean
- **Description:** Allows CONFIG toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.config.autoHide=true
    ```


- **Type:** boolean
- **Description:** Allows FINE toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.fine.autoHide=true
    ```


- **Type:** boolean
- **Description:** Allows FINER toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.finer.autoHide=true
    ```


- **Type:** boolean
- **Description:** Allows FINEST toaster notifications to autohide
- **Default:**

    ```python
    toaster.log.finest.autoHide=true
    ```


- **Type:** boolean
- **Description:** Allows SEVERE toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.severe.enabled=true
    ```


- **Type:** boolean
- **Description:** Allows WARNING toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.warning.enabled=true
    ```


- **Type:** boolean
- **Description:** Allows INFO toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.info.enabled=true
    ```


- **Type:** boolean
- **Description:** Allows CONFIG toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.config.enabled=false
    ```


- **Type:** boolean
- **Description:** Allows FINE toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.fine.enabled=false
    ```


- **Type:** boolean
- **Description:** Allows FINER toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.finer.enabled=false
    ```


- **Type:** boolean
- **Description:** Allows FINEST toaster notifications to be displayed
- **Default:**

    ```python
    toaster.log.finest.enabled=false
    ```


- **Type:** integer
- **Description:** Sets up the timeout for toaster notifications to be hidden
- **Default:**

    ```python
    toaster.toast.timeout=2000
    ```


- **Type:** boolean
- **Description:** If true, displays the newest toaster logs on top, if false, on the bottom
- **Default:**

    ```python
    toaster.toast.newestOnTop=true
    ```


- **Type:** boolean
- **Description:** Allows from the toolbar to alter the borders of annotations
- **Default:**

    ```python
    toolbar.activateBorders=true
    ```


- **Type:** boolean
- **Description:** If true, all redaction annotations will become locked once saved, and can no longer be edited
- **Default:**

    ```python
    toolbar.lockedObfuscate=false
    ```


- **Type:** boolean
- **Description:** Enables opacity slider for annotations that support it
- **Default:**

    ```python
    toolbar.opacity.slider.enabled=true
    ```


- **Type:** boolean
- **Description:** Enables subscript support in rich text
- **Default:**

    ```python
    toolbar.richtext.hasSubscript=false
    ```


- **Type:** boolean
- **Description:** Enables superscript support in rich text
- **Default:**

    ```python
    toolbar.richtext.hasSuperscript=false
    ```


- **Type:** boolean
- **Description:** Enables strike through support in rich text
- **Default:**

    ```python
    toolbar.richtext.hasStrikeThrough=false
    ```


- **Type:** boolean
- **Description:** Enables the format removal of the selected in rich text
- **Default:**

    ```python
    toolbar.richtext.hasRemoveFormat=false
    ```


- **Type:** boolean
- **Description:** Show the top panel logo
- **Default:**

    ```python
    topPanel.logo=true
    ```


- **Type:** String
- **Description:** Define the top panel logo URL
- **Default:**

    ```python
    topPanel.logo.url=arender-icones-svg/arender-logo-white.svg
    ```


- **Type:** integer
- **Description:** The top panel logo width (in pixel)
- **Default:**

    ```python
    topPanel.logo.width=26
    ```


- **Type:** integer
- **Description:** The top panel logo height (in pixel)
- **Default:**

    ```python
    topPanel.logo.height=26
    ```


- **Type:** integer
- **Description:** The top panel logo margin left (in pixel)
- **Default:**

    ```python
    topPanel.logo.margin.left=10
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the top panel
- **Default:**

    ```python
    topPanel.widgets.beanNames=logo,documentMenu,printButton,annotationMenu,cropBoxButton,saveDirtyAnnotations,refreshAnnotation,addObfuscateAnnotationButton,addObfuscateZoneAnnotationButton,ImageProcessingVerticalSubMenu,navigationButtons,zoomButtons,rotationButtons,multiViewTools,annotationToolbar,searchBox,fullscreenButton,documentBuilderButton,plumeMenu
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the navigation section
- **Default:**

    ```python
    topPanel.navigation.buttons.beanNames=firstPageButton,previousPageButton,pageNavigation,nextPageButton,lastPageButton
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the zoom section
- **Default:**

    ```python
    topPanel.zoom.buttons.beanNames=zoomOut,zoomBox,zoomIn,zoomInZone,zoomInZoneGlass,zoomFullWidth,zoomFullHeight,zoomFullPage
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the rotation section
- **Default:**

    ```python
    topPanel.rotation.buttons.beanNames=rotateAllLeft,rotateLeft,rotateRight,rotateAllRight,rotateReset
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the annotation sub-menu
- **Default:**

    ```python
    topPanel.annotation.buttons.beanNames=addStickyNoteAnnotationButton,addFreeTextAnnotationButton,addHighlightRectangleAnnotationButton,addHighlightCircleAnnotationButton,addHighlightRectangleAnnotationRepeatButton,addHighlightCircleAnnotationRepeatButton,addPolygonAnnotationButton,addPolylineAnnotationButton,addFreehandAnnotationButton,addHighlightTextAnnotationButton,addUnderlineTextAnnotationButton,addStrikethroughTextAnnotationButton,addArrowAnnotationButton,addArrowAnnotationRepeatButton,addStampAnnotationButton,addPolygonAnnotationRepeatButton,addPolylineAnnotationRepeatButton,addFreehandAnnotationRepeatButton,addHighlightTextAnnotationRepeatButton,addUnderlineTextAnnotationRepeatButton,addStrikethroughTextAnnotationRepeatButton,showAllAnnotationsButton,showAllAnnotationsAndRotationsButton
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the download/upload file sub-menu
- **Default:**

    ```python
    topPanel.download.buttons.beanNames=downloadButton,downloadRootButton,downloadPdfButton,downloadAllButton,downloadAnnotationsButton,downloadAnnotationsCSVButton,downloadXFDFAnnotationsButton,downloadFDFAnnotationsButton,downloadWithFDFAnnotationsButton,uploadButton,uploadURLButton,uploadXFDFButton
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the image processing file sub-menu
- **Default:**

    ```python
    topPanel.imageProcessing.buttons.beanNames=ImageProcessingVerticalSubMenu
    ```


- **Type:** String
- **Description:** The list of widgets to define (XML bean names) for the image processing file sub-menu in vertical
- **Default:**

    ```python
    topPanel.imageProcessing.buttons.vertical.beanNames=contrastSlider,brightnessSlider
    ```


- **Type:** boolean
- **Description:** Activate the document sub-menu
- **Default:**

    ```python
    topPanel.documentMenu=true
    ```


- **Type:** boolean
- **Description:** Activate the button for cropbox in the toppanel
- **Default:**

    ```python
    topPanel.cropbox.enabled=false
    ```


- **Type:** boolean
- **Description:** Change to false to remove line head options menu.
- **Default:**

    ```python
    topPanel.lineHeadTailMenu=true
    ```


- **Type:** boolean
- **Description:** Activate the upload file button
- **Default:**

    ```python
    topPanel.documentMenu.upload=true
    ```


- **Type:** boolean
- **Description:** Activate the open url button
- **Default:**

    ```python
    topPanel.documentMenu.url=true
    ```


- **Type:** boolean
- **Description:** Allow to use enter to validate the input URL from the URL button
- **Default:**

    ```python
    topPanel.documentMenu.url.open.using.enter=true
    ```


- **Type:** boolean
- **Description:** Activate the top panel XFDF upload button
- **Default:**

    ```python
    topPanel.documentMenu.xfdfUpload=false
    ```


- **Type:** boolean
- **Description:** Activate the top panel download document button
- **Default:**

    ```python
    topPanel.documentMenu.download=true
    ```


- **Type:** boolean
- **Description:** Activate the top panel download composite document button
- **Default:**

    ```python
    topPanel.documentMenu.download.root=true
    ```


- **Type:** String
- **Description:** The default behavior for download. Valid values : DOWNLOAD_SOURCE or DOWNLOAD_NON_PDF
- **Default:**

    ```python
    topPanel.documentMenu.download.behavior=DOWNLOAD_NON_PDF
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download document as PDF
- **Default:**

    ```python
    topPanel.documentMenu.downloadPDF=true
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download all current documents as a single PDF
- **Default:**

    ```python
    topPanel.documentMenu.downloadAll=true
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download the current document with annotations as PDF
- **Default:**

    ```python
    topPanel.documentMenu.downloadAnnotation=true
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download the current document annotations as CSV
- **Default:**

    ```python
    topPanel.documentMenu.downloadCSVAnnotations=false
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download the current document with annotations as FDF
- **Default:**

    ```python
    topPanel.documentMenu.downloadWithFDFAnnotation=false
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download the current document annotations as XFDF
- **Default:**

    ```python
    topPanel.documentMenu.downloadXFDFAnnotations=false
    ```


- **Type:** boolean
- **Description:** Activate the top panel button : download the current document annotations as FDF
- **Default:**

    ```python
    topPanel.documentMenu.downloadFDFAnnotations=false
    ```


- **Type:** String
- **Description:** Sets up slider to handle brightness
- **Default:**

    ```python
    topPanel.imageProcessMenu.processBrightness=brightness
    ```


- **Type:** String
- **Description:** Sets up slider to handle contrast
- **Default:**

    ```python
    topPanel.imageProcessMenu.processContrast=contrast
    ```


- **Type:** boolean
- **Description:** Enable the image process on all pages
- **Default:**

    ```python
    topPanel.imageProcessMenu.doOnAllPage=true
    ```


- **Type:** integer
- **Description:** Sets up the max value of the brightness slider
- **Default:**

    ```python
    topPanel.imageProcessMenu.maxBrightness=201
    ```


- **Type:** integer
- **Description:** Sets up the max value of the contrast slider
- **Default:**

    ```python
    topPanel.imageProcessMenu.maxContrast=201
    ```


- **Type:** integer
- **Description:** Sets up the default value of the brightness slider
- **Default:**

    ```python
    topPanel.imageProcessMenu.defaultBrightness=100
    ```


- **Type:** integer
- **Description:** Sets up the default value of the contrast slider
- **Default:**

    ```python
    topPanel.imageProcessMenu.defaultContrast=100
    ```


- **Type:** boolean
- **Description:** Activate the top panel imageProcessing button
- **Default:**

    ```python
    topPanel.imageProcessMenu=true
    ```


- **Type:** integer
- **Description:** Sets up the time in Milliseconds before the sub-menu buttons disappear
- **Default:**

    ```python
    topPanel.subMenu.button.timeOut=100
    ```


- **Type:** integer
- **Description:** Sets up the time in Milliseconds before the sub-menu panel disappears
- **Default:**

    ```python
    topPanel.subMenu.subPanel.timeOut=500
    ```


- **Type:** boolean
- **Description:** Activate the print button in the topPanel
- **Default:**

    ```python
    topPanel.print=true
    ```


- **Type:** boolean
- **Description:** Activate the annotation sub-menu
- **Default:**

    ```python
    topPanel.annotationMenu=true
    ```


- **Type:** boolean
- **Description:** Activate the sticky note annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.stickyNote=true
    ```


- **Type:** boolean
- **Description:** Activate the freetext annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.freetext=true
    ```


- **Type:** boolean
- **Description:** Allow the sticky note to be edited
- **Default:**

    ```python
    topPanel.annotationMenu.stickyNote.editable=true
    ```


- **Type:** boolean
- **Description:** Activate the highlight annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.highlight=true
    ```


- **Type:** boolean
- **Description:** Activate the highlight annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.highlight.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the arrow annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.arrow=true
    ```


- **Type:** boolean
- **Description:** Activate the arrow annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.arrow.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the polygon annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.polygon=true
    ```


- **Type:** boolean
- **Description:** Activate the polygon annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.polygon.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the polyline annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.polyline=true
    ```


- **Type:** boolean
- **Description:** Activate the polyline annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.polyline.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the freehand annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.freehand=true
    ```


- **Type:** boolean
- **Description:** Activate the freehand annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.freehand.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the text highlight annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.highlightText=false
    ```


- **Type:** boolean
- **Description:** Activate the text highlight annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.highlightText.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the text underline annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.underlineText=false
    ```


- **Type:** boolean
- **Description:** Activate the text underline annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.underlineText.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the strikethrough text annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.strikethroughText=false
    ```


- **Type:** boolean
- **Description:** Activate the strikethrough text annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.strikethroughText.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the circle annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.circle=true
    ```


- **Type:** boolean
- **Description:** Activate the circle annotation button, in repeat mode (does not cancel unless pressed again)
- **Default:**

    ```python
    topPanel.annotationMenu.circle.repeat=false
    ```


- **Type:** boolean
- **Description:** Activate the stamp annotation button
- **Default:**

    ```python
    topPanel.annotationMenu.stamp=true
    ```


- **Type:** boolean
- **Description:** Activate the hide annotations button
- **Default:**

    ```python
    topPanel.annotationMenu.hide=true
    ```


- **Type:** boolean
- **Description:** Activate the hide all annotations button (includes redaction)
- **Default:**

    ```python
    topPanel.annotationMenu.hideAll=false
    ```


- **Type:** boolean
- **Description:** Activate the redaction annotation button
- **Default:**

    ```python
    topPanel.obfuscate=false
    ```


- **Type:** boolean
- **Description:** Activate the refresh annotations button
- **Default:**

    ```python
    topPanel.refresh=true
    ```


- **Type:** boolean
- **Description:** Activate the boxed zoom button
- **Default:**

    ```python
    topPanel.zoomBox=true
    ```


- **Type:** boolean
- **Description:** Activates the go to first page navigation button
- **Default:**

    ```python
    topPanel.pageNavigation.first=true
    ```


- **Type:** boolean
- **Description:** Activates the go to previous page navigation button
- **Default:**

    ```python
    topPanel.pageNavigation.previous=true
    ```


- **Type:** boolean
- **Description:** Activates the go to next page navigation button
- **Default:**

    ```python
    topPanel.pageNavigation.next=true
    ```


- **Type:** boolean
- **Description:** Activates the go to last page navigation button
- **Default:**

    ```python
    topPanel.pageNavigation.last=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom (full width of document) button
- **Default:**

    ```python
    topPanel.zoom.fullWidth=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom (full height of document) button
- **Default:**

    ```python
    topPanel.zoom.fullHeight=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom (full page  of document) button
- **Default:**

    ```python
    topPanel.zoom.fullPage=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom in button
- **Default:**

    ```python
    topPanel.zoom.in=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom out button
- **Default:**

    ```python
    topPanel.zoom.out=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom by zone button
- **Default:**

    ```python
    topPanel.zoom.zone=true
    ```


- **Type:** boolean
- **Description:** Activates the zoom (magnifying glass) button
- **Default:**

    ```python
    topPanel.zoom.zoneGlass=false
    ```


- **Type:** integer
- **Description:** Sets the default zoom ratio for the magnifying glass
- **Default:**

    ```python
    topPanel.zoom.zoneGlass.value=2
    ```


- **Type:** boolean
- **Description:** Activates the rotate left button
- **Default:**

    ```python
    topPanel.rotation.left=true
    ```


- **Type:** boolean
- **Description:** Activates the rotate right button
- **Default:**

    ```python
    topPanel.rotation.right=true
    ```


- **Type:** boolean
- **Description:** Activates the rotate all pages buttons
- **Default:**

    ```python
    topPanel.rotation.all=false
    ```


- **Type:** boolean
- **Description:** Activates the rotate left button
- **Default:**

    ```python
    topPanel.rotation.reset=false
    ```


- **Type:** integer
- **Description:** Sets up the amount of rotation applied when pressing the rotation buttons
- **Default:**

    ```python
    topPanel.rotation.degree=90
    ```


- **Type:** boolean
- **Description:** Activates rotations sub-menu
- **Default:**

    ```python
    topPanel.rotation.add=true
    ```


- **Type:** boolean
- **Description:** Activates the search in the top panel
- **Default:**

    ```python
    topPanel.search=true
    ```


- **Type:** boolean
- **Description:** If true, default search behavior. Otherwise, open in the advanced search panel
- **Default:**

    ```python
    topPanel.search.default=false
    ```


- **Type:** boolean
- **Description:** If true and topPanel.search.default is true, display search text results in the AdvancedSearchExplorer.
- **Default:**

    ```python
    topPanel.search.displayResultsInExplorer=false
    ```


- **Type:** boolean
- **Description:** If true, the "next result" search button will jump to the next result on the current visible page instead of resuming where you left the search
- **Default:**

    ```python
    topPanel.search.searchByVisiblePage=true
    ```


- **Type:** boolean
- **Description:** Activates the full screen button in the top panel
- **Default:**

    ```python
    topPanel.fullscreen=true
    ```


- **Type:** boolean
- **Description:** If true, full screen will hide the top panel totally
- **Default:**

    ```python
    topPanel.fullscreen.hideTopPanel=false
    ```


- **Type:** boolean
- **Description:** If true, the toppanel will always be visible in fullscreen and won't hide
- **Default:**

    ```python
    topPanel.fullscreen.alwaysShowTopPanel=false
    ```


- **Type:** boolean
- **Description:** Uploaded files should open in a new window of ARender
- **Default:**

    ```python
    upload.file.openInNewWindow=false
    ```


- **Type:** String
- **Description:** Visualization mode : Single, BookMode
- **Default:**

    ```python
    visualization.mode=Single
    ```


- **Type:** boolean
- **Description:** Reload lower quality images once the higher quality has been fetched (always load the perfect size, or save bandwidth)
- **Default:**

    ```python
    visualization.reload.lower.quality=false
    ```


- **Type:** boolean
- **Description:** Autoplay videos
- **Default:**

    ```python
    visualization.video.autoplay=true
    ```


- **Type:** boolean
- **Description:** Mousewheel can change a document page
- **Default:**

    ```python
    visualization.pagechange.mouse=false
    ```


- **Type:** boolean
- **Description:** Do animation on page changes (with navigation buttons)
- **Default:**

    ```python
    visualization.pagechange.animation=false
    ```


- **Type:** boolean
- **Description:** Display a corner on the pages border, allowing to change pages
- **Default:**

    ```python
    visualization.pagecorner.enabled=false
    ```


- **Type:** boolean
- **Description:** Animates the page corner
- **Default:**

    ```python
    visualization.pagecorner.animation=false
    ```


- **Type:** boolean
- **Description:** Activates the full screen visualisation in ARender
- **Default:**

    ```python
    visualization.fullscreen=false
    ```


- **Type:** String
- **Description:** Sets up the default zoom type : Default, FullWidth, FullHeight, In, Out, Custom, FullPage
- **Default:**

    ```python
    visualization.zoom.type=FullWidth
    ```


- **Type:** integer
- **Description:** Default Zoom value, in percent in case of custom zoom
- **Default:**

    ```python
    visualization.zoom.value=100
    ```


- **Type:** boolean
- **Description:** Animate on zoom
- **Default:**

    ```python
    visualization.zoom.animation=false
    ```


- **Type:** boolean
- **Description:** Zoom according to the biggest page (width or height). Otherwise to the first page
- **Default:**

    ```python
    visualization.zoom.by.biggest.page=true
    ```


- **Type:** boolean
- **Description:** Allows rotations to be saved as annotation
- **Default:**

    ```python
    visualization.rotation.save.enabled=false
    ```


- **Type:** boolean
- **Description:** Activate the ruler guide for ARender
- **Default:**

    ```python
    visualization.guideruler.enabled=false
    ```


- **Type:** integer
- **Description:** Defines the height in pixel of the ruler guide
- **Default:**

    ```python
    visualization.guideruler.height=10
    ```


- **Type:** integer
- **Description:** Defines the movement in height in pixel for the ruler guide
- **Default:**

    ```python
    visualization.guideruler.increment=10
    ```


- **Type:** boolean
- **Description:** Allows documents to be viewed in multi documents
- **Default:**

    ```python
    visualization.multiView.enabled=true
    ```


- **Type:** String
- **Description:** Defines the direction in which the multi view will open documents : horizontal or vertical
- **Default:**

    ```python
    visualization.multiView.direction=vertical
    ```


- **Type:** boolean
- **Description:** Allows to compare documents on start of ARender, when two documents or more are opened
- **Default:**

    ```python
    visualization.multiView.doComparison=false
    ```


- **Type:** boolean
- **Description:** Show the multivew mode on start
- **Default:**

    ```python
    visualization.multiView.showOnStart=false
    ```


- **Type:** boolean
- **Description:** Synchronize the scrolling of the views when in multiview
- **Default:**

    ```python
    visualization.multiView.synchronized=true
    ```


- **Type:** boolean
- **Description:** Force the user to click on the documents instead of mouse hovering to change on which document can be annotated
- **Default:**

    ```python
    visualization.multiView.focusOnClick=false
    ```


- **Type:** integer
- **Description:** Timeout in milliseconds to auto hide the timer
- **Default:**

    ```python
    visualization.multiView.header.timeoutMs=5000
    ```


- **Type:** boolean
- **Description:** Place a css on document images to undo some of the "optimisations" browser do to display images
- **Default:**

    ```python
    visualization.images.sharpen=false
    ```


- **Type:** integer
- **Description:** Adapts the images width tolerance in pixel (received versus drawn on screen).
- **Default:**

    ```python
    visualization.images.tolerance=10
    ```


- **Type:** boolean
- **Description:** Enables or disables the SVG previews images
- **Default:**

    ```python
    visualization.images.svg.preview=true
    ```


- **Type:** integer
- **Description:** Amount of pages to preload before they become visible
- **Default:**

    ```python
    visualization.pages.prefetch=2
    ```


- **Type:** integer
- **Description:** Maximum number of document images to fetch simultaneously
- **Default:**

    ```python
    visualization.maximumConcurrentImageFetching=8
    ```


- **Type:** integer
- **Description:** Cleanup images which where non-visible for a long time (ms)
- **Default:**

    ```python
    visualization.nonVisiblePageTimeout=120000
    ```


- **Type:** integer
- **Description:** Period at which images are cleaned (ms)
- **Default:**

    ```python
    visualization.imageCleanupPeriod=1500
    ```


- **Type:** integer
- **Description:** Maximum number of images to store in the cleanup cache before LRU eviction occurs
- **Default:**

    ```python
    visualization.maxImageCacheSize=20
    ```


- **Type:** boolean
- **Description:** Maximizes the ARender window
- **Default:**

    ```python
    window.maximize=false
    ```

