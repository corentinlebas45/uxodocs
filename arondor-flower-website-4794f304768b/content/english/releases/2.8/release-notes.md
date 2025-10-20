+++
date = "2024-04-08T12:00:00+02:00"
title = "Release notes"
tags = ["release-note"]
banner = "img/banner/edit.png"
 
+++


# Significant changes in 2.8

## Security vulnerabilities

With the aim of improving security within FlowerDocs, several fixes have been made : 


## Search enhancements

Several changes have been made to the search function to make it easier and more fluid to use :




</br>

When criteria are displayed in columns :


## SSO


## Administration


## WS


# Facilitating integration


## Full-text search


## ScriptOperationHandler



## Tasks


## Default scope



# Bug fixes

## Tags


## Menus (Virtual Folders)


## Results table



## Folders (Virtual Folders)


## Task


## History


## Companion Plugin, interface with the Office suite



## RGAA




## Administration






## WS


# Known issues

## Search

* Full-text search - After restoring a document version, the content of the restored version is not re-indexed and therefore not searchable.
* The “Reset” action must not be present on the document search pop-up.
* The focus remains on the “Reset” action after clicking on it.


# Patch versions

## 2.8.1 _03/06/2024_

### :closed_lock_with_key: Security

**ARender version upgrade to 4.8.17 to benefit from the fix to resolve a vulnerability.**

This patch strengthens the application's security and protects our users from potential threats.

For more details, please contact us via our ticketing tool !

### ARender

**ARender version upgrade from 4.8.13 to 4.8.17 to benefit from all the improvements made in the viewer.**

For more information, see the ARender release notes[here](https://hub.arender.io/fr/technical-blog).


### RGAA


### Bug fixes


To avoid visual overload on document search pop-ups, the action to reset the search form has been removed.
<br/><br/>


It is now possible to search the contents of a document after restoring a version.

In previous versions of the product, following a restore, the associated content was not indexed and therefore not searchable.
<br/><br/>


Here's how it works to comply with RGAA rules :
Existing tasks are checked when the focus is on the “Check” button in the pop-up window.

The pop-up is closed if the user uses the “Esc” key or if the focus is on the “Close” button.

If the focus is in a pop-up field, then when the enter key is pressed, the action is performed in the field (input validation, list scrolling, etc.).
<br/><br/>


When a document is viewed in the viewer in external mode, i.e. without the FlowerDocs forms being displayed, the user rights set up in FlowerDocs are once again taken into account.

Ex: a user who has the right to download or print the document can do so again.


## 2.8.2 _27/06/2024_


## 2.8.3 _31/12/2024_


## 2.8.4 _04/03/2025_

