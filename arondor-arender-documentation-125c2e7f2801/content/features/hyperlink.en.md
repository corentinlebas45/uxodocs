---
title: Hyperlink
icon: mdi-web
keyword: ["feature", "Hyperlink"]
---

## Description
Hyperlinks are visible on documents loaded into ARender. By clicking on it, you can access other content.
You will need a source text, which will be the selected and clickable text, and a target.

## Uses

To enable the creation of hyperlinks, highlight some text, the *Create link* button will then appears.
By clicking on it, a menu will ask to select a page or to provide a URL.


To select the page, simply change the page on the document navigator and press the *OK* button.

To provide a URL, enter the desired URL in the text box and press the *OK* button.

To create an hyperlink to a zone, click on the *Create a link to a zone* button.


Then, the above popup appears and select the target zone.


To edit the source text of an hyperlink, click on the edit button (pencil icon) in the source panel of the desired 
hyperlink in the hyperlink explorer.


The source can be changed by selecting a new text and by pressing the *OK* button.

To modify the target, click on the edit button (pencil icon) in the target panel. 


It then asks you to select the desired option: 
- *select the page*
- *select the zone*
- *enter your URL*


## Hyperlink Explorer

Hyperlinks are visible in the hyperlink explorer. By default, it is enabled.


```cfg
hyperlinkexplorer.enabled=true
```



The hyperlink explorer displays all the created hyperlinks. A hyperlink contains the following information :

* the name of the creator
* the date
* the source text
* the source document
* the target



Several display options are available:

| Property                                               | Description                                                               | Default value |
| ------------------------------------------------------ | ------------------------------------------------------------------------- | ------------- |
| annotation.date.display.creationDate                   | Displays the date of creation otherwise the date of the last modification | true          |
| annotation.comment.explorer.show.date                  | Enable date display                                                       | true          |
| annotation.comment.explorer.creator.name.initial.only  | Show creator’s initials                                                   | false         |
| toolbar.securityList.checkOwner                        | Enables the security list for current user annotations                    | true          |
| annotation.date.display.humanizedDate.enabled          | Display humanized date                                                    | false         |



### Filter hyperlinks

In the hyperlink explorer, several buttons are available to filter or sort the hyperlinks.


Several filter options are available:
* by document
* by creator
* by date
* by current user

You can also use the available filter buttons. 

The first one allows you to filter based on the username. By hovering the username, it will appear.



When this filter is activated, it will be blue. To deactivate it, simply click on it again.



The second filter allow you to filter according to the date. It will be appear by hovering the date (only if the date is displayed).



It also be blue when activated. To deactivate it, simply click on it again.


## Document Linking

The *docLink* feature enables the creation of hyperlinks between documents. 
It can be activated using a dedicated property in the configuration file.

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.docLink=true
```


Once activated, a dedicated button appears in the top panel.


It is also possible to automatically enable the feature when the document is loaded using the following property:

{{< tag type="code" title="configurations/arender-custom-client.properties">}}

```cfg
topPanel.docLink.activateOnStartup=true
```



### Activation

Two options are available via a dropdown menu:

- Blue Text Link: Classic hyperlink style with clickable blue text.
- Blue Frame Link: The clickable text is surrounded by a blue frame.

When activated, the docLink feature displays documents side-by-side in 
multi-view mode.

The document on the left serves as the hyperlink source and the right one 
serves as the hyperlink target.
Initially, text must be selected in the source document. The target document 
is then deactivated, and the cursor switches to text selection mode.

The generic case involves opening two documents in ARender, displayed 
side-by-side in multi-view. Specific cases are also handled:

- Single document: 
  The same document is opened twice in multi-view mode, displayed side-by-side.
- Three or more documents:
  Only the first two documents are displayed side-by-side, with a restriction 
  preventing any document changes.
- Multi-View or comparison mode activated:
  The documents remain in multi-view, and the docLink mode automatically adjusts
  the display by deactivating the target document and cleaning up comparison 
  results to enable the hyperlink creation.

### Creation

Once the docLink mode is activated, text must be selected in the source 
document.
After the selection, the source document is deactivated, and the target document
becomes active to define the hyperlink target.

Clicking on a position in the target document creates the hyperlink immediately,
and the documents return to their initial state.

If the *ui.legacy.enabled=false* property is set, it is possible to click 
directly on a thumbnail to create a hyperlink at the page level instead of a 
specific position.

### Deactivation

Clicking the docLink button or pressing ESC deactivates the docLink mode.
If a source has already been selected, an alert will notify the user of the 
cancellation of the hyperlink creation process.
