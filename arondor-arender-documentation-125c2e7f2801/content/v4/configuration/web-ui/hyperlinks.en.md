---
title: "Hyperlinks"
draft: false
icon: mdi-link-box-variant-outline
keywords: ["configuration", "Hyperlinks"]
---

## General

- Key: hyperlinks

    | Description                                        | Parameter Key            | Type    |
    | -------------------------------------------------- | ------------------------ | ------- |
    | Load URLs into the ARender frame                   | hyperlinks.loadInARender | Boolean |
    | Load hyperlinks from the source document           | hyperlinks.loadFromPDF   | Boolean |
    | Allow internal hyperlinks from the source document | hyperlinks.load.internal | Boolean |
    | Allow external hyperlinks from the source document | hyperlinks.load.external | Boolean |

These parameters allow to influence of the behavior associated with
internal hyperlinks stored into source documents. If you do not wish to
have the internal links of a PDF to be displayed or clicked, use the
parameter *hyperlinks.loadFromPDF=false*.

## Annotation

The default color when creating the hyperlink is defined by the following property:

| Property                                 | Description                                             | Default value     |
| ---------------------------------------- | ------------------------------------------------------- | ----------------- |
| annotation.hyperlink.default.color       | Hyperlink color at creation                             | #EAF39C           |


```cfg

annotation.hyperlink.default.color=#EAF39C

```

