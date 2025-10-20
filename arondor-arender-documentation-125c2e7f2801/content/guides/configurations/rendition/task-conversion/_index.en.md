---
title: "Task conversion"
draft: false
weight: 2
type: docs
icon: mdi-file-cog-outline
---

## Rendition without internet Access and mails with external images

If the Rendition is installed on a server that **does not have access to Internet** and if **mails with external images** needs to be viewed, please apply the below configuration:

- Add a proxy for WKHTMLTOPDF configuration. Create a file named **application.properties** in the TaskConversion module containing the below property (adapt the proxy host if needed) (compatible with version 4.3.8 and higher):

{{< tag type="code" title="application.properties located in ARender-Rendition-2023.X.Y\modules\TaskConversion">}}

```cfg
tools.wkhtmltopdf.options=--disable-javascript,--quiet,--encoding,UTF-8,--load-error-handling,ignore,--disable-external-links,--disable-internal-links,--disable-local-file-access,--proxy,localhost
```


Internal and external links, local file access and iframe URL are disabled by default for HTML to PDF conversion.
The purpose of that is to prevent security issue.

Note this can impact the render of the HTML in ARender: 
- Clickable links will be disabled
- Image display from internal/external link or local file will not be rendered
- Iframe URL will not be rendered

The default properties in the TaskConversion service looks like this: 

{{< tag type="code" title="application.properties located in ARender-Rendition-2023.X.Y\modules\TaskConversion">}}

```cfg
tools.wkhtmltopdf.options=--disable-javascript,--quiet,--encoding,UTF-8,--load-error-handling,ignore,--disable-external-links,--disable-internal-links,--disable-local-file-access
# Disable iframe URL as a safety measure
tools.wkhtmltopdf.iframe.disabled=true
```


## Visit card labels language

VCF format is supported since the version 2023.6.0. Some information, such as address, phone or email are preceded by the type,
called "label", such as "Home" to indicate that the information that follows is personal.
It is possible to change the language of these labels. For now, two languages ​​are available: English and French.

The default property in the TaskConversion service looks like this: 

{{< tag type="code" title="application.properties located in ARender-Rendition-2023.X.Y\modules\TaskConversion">}}

```cfg
# Configure the information fields language. Possible values are : "FR", "EN".
vcard.label.language=EN
```


## TIFF images rendering

Properties are available to configure the rendering of images generated from TIFFs.

{{< tag type="code" title="application.properties located in ARender-Rendition-2023.X.Y\modules\TaskConversion">}}

| Description                                                                                                             | Parameter Key                     | Default value | Type    |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------- | ------- |
| For PDF creation from images, the maximum asked width (in pixel)                                                        | image.conversion.maximum.width.px | 2000          | Integer |
| The mime type of the generated images (Since version 2023.14.0)<br>Possible values are **image/png** and **image/jpeg** | image.conversion.target.mime.type | image/png     | String  |

