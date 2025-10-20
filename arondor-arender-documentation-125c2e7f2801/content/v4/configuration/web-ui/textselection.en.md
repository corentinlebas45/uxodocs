---
title: "Text Selection"
draft: false
icon: mdi-cursor-text
keywords: ["configuration", "text selection", "selection", "text"]
---

## General

- Key: text.selection

    | Description                                                                            | Parameter Key         | Type    |
    | -------------------------------------------------------------------------------------- | --------------------- | ------- |
    | Enable/disable default text selection character by character                           | use.legacy            | Boolean |


```cfg
# Enable the use of the legacy text selection, character by character :
# When disabled, the text selection will select word by word when a word is partially or completely selected

text.selection.use.legacy=true
```

