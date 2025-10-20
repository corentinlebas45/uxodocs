+++
date = "2009-03-29T13:20:01+02:00"
title = "Labels"
+++

This section explains how to configure the FlowerDocs GUI labels. The application supports French and English natively.
These native labels can be defined using: 

* property files
* the JS API (see [documentation](broken-link.md))

# Defining labels

The graphical user interface supports French and English natively. Native labels can be overwritten or new languages added.

The property file containing the labels must be named such as `<locale>.properties` (for example `en.properties`).

<br/>
__Example:__ Overriding the Home tab label.

home=Tableau de bord
home=Dashboard

# Determining the locale

The user's locale is used to determine the language of the labels to be used. This locale is determined by the locale defined in the browser.
It can also be overridden by adding the `locale` parameter to the GUI URL (for example: https://www.demo.flowerdocs.cloud/flower-docs-gui?locale=EN).

When no label is defined for the user locale, English (`en`) is used by default.

<br/>
:::info
Labels can also be determined dynamically using the [JS API](broken-link.md).
:::
