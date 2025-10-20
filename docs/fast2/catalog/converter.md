```xml
## ArchiveBuilder ** - Punnet zipper ** <!-- Commentaire nettoyé -->
```

Zip punnets into a zip file. A zip cannot contains a few punnets but documents carried by the punnet can be splitted into multiple zip files.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Zip all documents in a single zip file | `Boolean` |  | `false ` | 
 | Zip size limit | `Integer` | In megabytes | 
 | Maximum number of documents per zip | `Integer` |  | 
 | The compression level between 0 and 9 (included) | `Integer` | Use large number for stronger compression | 
 | Also include annotation contents | `Boolean` |  | `false ` | 



```xml
## ConvertCMToP8 ** - Convert CM annotations to FileNet P8 annotations. Input annotation format is INI from a JSON file. Only supports one document per punnet. Supported contents are PDF, TIFF and PNG files ** <!-- Commentaire nettoyé -->
```

```xml
Supported types : **<!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé -->**
```



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | ViewOne annotation parser | ViewOneAnnotationConverter |  | 
 | Force rectangle transparency | `Boolean` | Force rectangles to be transparent even if dedicated property equals 0 | 
 | Apply ratio | `Boolean` | Transform annotation positions using document DPI | `true ` | 
 | Transform rectangle into highlight | `Boolean` | Rectangles does not support transparency. Turn them into highlight to keep tranparency | `false ` | 
 | Watermarks on all pages | `Boolean` | Apply watermark annotations on each pages of the document | `false ` | 



```xml
## ConvertDoc ** - Document conversion ** <!-- Commentaire nettoyé -->
```

Convert your documents using the ConvertDoc library.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Maximum number of document per call | `Integer` |  | `200 ` | 
 | Temp folder to generate PDF to | `String` |  | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Excel hack | `Boolean` | Use Microsoft Excel hack | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Conversion exception is fatal | `Boolean` | Conversion exception triggers an exception. Othersie, it's a silent fail | `true ` | 
 |  | `Boolean` |  | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | ConvertDoc path | `String` | Path toward ConvertDoc executable | `ConvertDoc.exe ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Temp folder to copy source files to | `String` |  | 
 | Convert to PDFA | `Boolean` | Convert your document to PDFA format | `false ` | 



```xml
## ConvertINIToXFDF ** - Annotation converter from INI to XFDF ** <!-- Commentaire nettoyé -->
```

Convert ViewOne annotations to XML Form Data Format (XFDF). These operations are supported only for PDF and Tiff files. Content dimensions will be fetched to convert these annotations 
To improve the performances add these 3 parameters to the startup-worker.bat script before the -jar : '-Dorg.ini4j.spi.IniBuilder=org.ini4j.spi.IniBuilder''-Djavax.xml.transform.TransformerFactory=com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl''-Dorg.ini4j.spi.IniParser=org.ini4j.spi.IniParser'Supported types : - [TEXT]- [RECTANGLE]- [FREEHAND]



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Postit annotation position | PageRelativePosition | Default position when an exception is thrown | 
 | Overload text and postit page to the first one if related exception is thrown | `Boolean` |  | 
 | Skip conversion error | `Boolean` | Do not throw an exception for conversion errors | `false ` | 
 | All note font are black | `Boolean` |  | 
 | Keep converted annotations | `Boolean` | Do not interrupt punnets if at least one annotation has been converted. Punnets carrying annotations that haven't been converted will be flagged with a data named 'ToReplay' | `false ` | 
 | Text annotation position | PageRelativePosition | Default position when an exception is thrown | 



```xml
## ConvertISToFDF ** - Annotation converter from IS to FDF ** <!-- Commentaire nettoyé -->
```

Convert your old IS annoations to Form Data Format (FDF). FDF file are used to represents form data and annotations in a PDF file with key/value format. They usually contain more information than XFDFs



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Skip conversion error | `Boolean` | Do not throw an exception when a conversion is triggered | `true ` | 
 | FileNet XFDF annotation converter | FileNetXFDFAnnotationConverter |  | 
 | IsAnnotation parser | ParseISAnnotation |  | 
 | FDF annotation adder | FdfAnnotationAdder |  | 



```xml
## ConvertISToXFDF ** - Annotation converter from IS to XFDF ** <!-- Commentaire nettoyé -->
```

Convert your old IS annoations to XML Form Data Format (XFDF). XFDF file are used to represents form data and annotations in a PDF file through an XML. They usually contain more information than XFDFs



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Popup width | `Float` | Sticky note default popup width | `120 ` | 
 | Skip conversion error | `Boolean` | Do not throw an exception when a conversion is triggered | `true ` | 
 | FileNet XFDF annotation converter | FileNetXFDFAnnotationConverter |  | 
 | IsAnnotation parser | ParseISAnnotation |  | 
 | Popup height | `Float` | Sticky note default popup height | `30 ` | 



```xml
## ConvertLighterPdf ** - PDF converter ** <!-- Commentaire nettoyé -->
```

This class allows you to compress your PDF files in order to be lighter than original ones.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 |  | `Boolean` |  | 
 | Standard DPI | `Integer` | DPI of a standard PDF document | `72 ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Target image format | `String` |  | `jpg ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Skip invalid image conversion | `Boolean` | Skip image conversion if image is invalid / not supported. Keep the original file | `true ` | 
 | Maximum converted image ratio | `Float` | After conversion, compute the size ratio before and after. Do not replace source image when converted image size is larger to this ratio | `1.0 ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Larger threshold to convert | `Integer` | Only convert images which are larger than this minimum byte size | `2000 ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 |  | Map |  | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Maximum ratio to apply | `Float` | Images will not beconverted if the ratio computation is larger to this value | `1.0 ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Target compression quality | `Float` |  | `0.7 ` | 
 | Target DPI | `Integer` | Required target Image dpi | `300 ` | 



```xml
## ConvertP8ToXFDF ** - Annotation converter from IS to XFDF ** <!-- Commentaire nettoyé -->
```

Convert your old IS annotations to XML Form Data Format (XFDF). XFDF file are used to represents form data and annotations in a PDF file through an XML. They usually contain more information than XFDFs



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Skip conversion error | `Boolean` | Do not throw an exception for conversion errors | `false ` | 
 | Default page height | `Float` | Default page height used for text and mail document | 
 | Remove annotations border | `Boolean` | Most of the time, annotations have by default a border set to 1. Set to true will remove the border | 
 | Keep background transparency | `Boolean` | Make background transparent when it is white | `false ` | 
 | Default page width | `Float` | Default page width used for text and mail document | 
 | Font size ratio | `Integer` | Multiply the font size value by this ratio | 
 | FileNet XFDF annotation converter | FileNetAnnotationConverter |  | 
 | Default post it location | PageRelativePosition | Overwrite coordinates for each post it annotation | 
 | Create one annotation container per annotation | `Boolean` |  | 
 | Overwrite border width | `Integer` | Value of border width for proprietary and arrow annotations | 
```xml
 | Date format | `String` | Date format of your properties stored by annotations  <!-- Commentaire nettoyé --> | `yyyy-MM-dd'T'HHss.SSSSSSSZ ` | 
 | Highlight opacity | `Integer` | Overwrite the opacity in percent of highlights annotations  <!-- Commentaire nettoyé --> | 
```



```xml
## ConvertRipole ** - Convert ripole files ** <!-- Commentaire nettoyé -->
```

> ⚠️ **Deleted**: The `ConvertRipole` task is deleted and no longer available in Fast2 from v2025.0.0.

Convert ripoles files to PDF format.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Temp executable path | `String` |  | `/tmp/temp_ ` | 
 | Ripole executable path | `String` |  | 



```xml
## ConvertTalk ** - Talk converter ** <!-- Commentaire nettoyé -->
```

Convert your talk files to PDF using iText Library.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Maximum input text size | `Long` | Limit in bytes | `1024 * 1024 ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Skip PDF creation | `Boolean` | Only perform text parsing | `false ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Auto-detect encoding | `Boolean` | Automatically detect the source text encoding used | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Keep talk header | `Boolean` | Do not parse the talk header and keep the original one | `false ` | 
```xml
 | Source text encoding | `String` | Encoding used for the source files  <!-- Commentaire nettoyé --> | 
```
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Font description | `String` | Format as \\{font family\\} \\{size\\} \\{style\\} where font family is one of \\{COURIER, HELVETICA, TIMES_ROMAN, SYMBOL, ZAPFDINGBATS\\} and style is 0:normal 1:bold 2:italic 4:underline 8:strikethru | 



```xml
## ConvertText ** - Text converter ** <!-- Commentaire nettoyé -->
```





**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Maximum input text size | `Long` | Limit in bytes | `1024 * 1024 ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Skip PDF creation | `Boolean` | Only perform text parsing | `false ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Auto-detect encoding | `Boolean` | Automatically detect the source text encoding used | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
```xml
 | Source text encoding | `String` | Encoding used for the source files  <!-- Commentaire nettoyé --> | 
```
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Font description | `String` | Format as \\{font family\\} \\{size\\} \\{style\\} where font family is one of \\{COURIER, HELVETICA, TIMES_ROMAN, SYMBOL, ZAPFDINGBATS\\} and style is 0:normal 1:bold 2:italic 4:underline 8:strikethru | 



```xml
## ConvertWangToXFDF ** - Convert Wang annotations to XFDF ** <!-- Commentaire nettoyé -->
```





**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Charset used for text | `String` |  | `windows-1252 ` | 
 | Tiff embed annotations | `Boolean` |  | 
 | Page number property name | `String` | Property of the content used to put the annotation on the correct page content. If null, the annotation will be on first page. | 
 | Fail if no annotation was parsed | `Boolean` |  | 
 | Skip annotation parse exceptions | `Boolean` |  | 
 |  | `Integer` |  | 



```xml
## ConvertXFDFToP8 ** - Annotation converter from XFDF to IS ** <!-- Commentaire nettoyé -->
```

Convert your XFDF annotations P8 format. This is mostly used to rollback from P8 to XFDF during complex migration.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Skip conversion error | `Boolean` | Do not throw an exception when a conversion is triggered | `true ` | 



```xml
## ConverterCMToXFDF ** - Convert CM annotations to XFDF annotations ** <!-- Commentaire nettoyé -->
```

```xml
Supported types : **<!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé --><!-- Commentaire nettoyé -->**
```



**Optional settings**

|Key      | Type    | Description | 
| - | - | - |
 | fontConversionList | `String` |  | 
 |  | PageRelativePosition |  | 
 |  | double |  | 
 |  | `Float` |  | 
 |  | `Integer` |  | 
 |  | PageRelativePosition |  | 
 |  | `String` |  | 
 |  | `String` |  | 
 |  | [I |  | 
 |  | PageRelativePosition |  | 
 |  | `Float` |  | 
 |  | `Float` |  | 
 |  | `String` |  | 
 |  | `Integer` |  | 
 |  | `Boolean` |  | 
 |  | `Float` |  | 
 |  | `String` |  | 
 |  | `Float` |  | 



```xml
## DispatchingArchive ** - Unzip files ** <!-- Commentaire nettoyé -->
```

This class allow you to unzip the content of archive files. Multiple mime types are supported : application/zip, application/x-zip, application/x-zip-compressed, application/x-rar-compressed, application/x-rar and application/java-archive. Tar or gz folders are not supported yet.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Charset | `String` | Charset used for file names in zip archives | `CP437 ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Only extract files that do not match this pattern | `String` |  | 
 | Delete source archive file | `Boolean` |  | `false ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Recursive | `Boolean` |  | `false ` | 
 | Only extract files that match this pattern | `String` |  | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 



```xml
## Eml2Pdf ** - Convert email to PDF ** <!-- Commentaire nettoyé -->
```

This class allow you to convert emails to a PDF format. Formats supported are application/msword, rfc822 and outlook.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | rtf tags list | `String list` | For mapimessageparser, if provided, can allow to override the list of rtf tags to filter out | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Custom mail header | `String` | Mail header to prefix the subject of the mail as pdf title in ARender | `Mail ` | 
 | includeInlineBodyWithHeaders | `Boolean` |  | 
 | Convert Configuration | Eml2PdfConfiguration | Mail to pdf convert options. Can be null | 
 | Mail subject in title | `Boolean` | Display mail subject in title | `true ` | 
 | Attachment in separate folder | `Boolean` | All attachments are included in a separated folder | `false ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Separator | `String` | Separator between prefix and mail subject | `: ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Attachment in included folder | `Boolean` | Each attachment is included in a separated folder | `false ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Custom body header | `String` | Body header to swap the default -Content- header set to the body | `Email body ` | 
 | Supported inline body mime-types | `String list` |  | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 



```xml
## ExcelConvert ** - Convert Excel to PDF ** <!-- Commentaire nettoyé -->
```

> ⚠️ **Deleted**: The `ExcelConvert` module is deleted and no longer available in Fast2 from v2025.0.0.

This class allow you to convert an Excel file to a PDF format.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## GenericConvertDoc ** - Convert from URL to PDF from its URL ** <!-- Commentaire nettoyé -->
```

This task will convert the content of any document into PDF format. All Fast2 needs is you to specify the URL/path of the initial document. The input file will be automatically resolved by the documents carried by the punnet. The ouput file path got his own field that can be used with a patternThe location of options are managed through an int value specifying the index within the cmd line starting to 0.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Destination folder | `String` | Target file path for the locally-created files | 
 | Converter path | `String` | Set here the path of the converter | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Ingore output file | `Boolean` | Converter does not takes output file instructions | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Ignore command return value | `Boolean` | Do not perform anything after conversion, whatever the command feedback | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Destination folder for original files | `String` | Dump input file in a specific folder path. Set to null to disable dumps | 
 | Options location | `Integer` | Set here the index of options in the cmd line : O means at the beginning. | `1 ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Protect path with double quotes | `Boolean` | Surround file paths with quotes when building command-line | `false ` | 
 | Timeout before stopping | `Integer` | Time to wait before killing the process. Value is in seconds | `3600 ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Conversion option | `String` | See application help for more details | 
 | List of error exit codes to skip | `String list` |  | 
 | Extension to append | `String` | The extension to add to the original file name before any conversion. This value should not start with a dot (ex : html) | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 



```xml
## HtmlCleanup ** - HTML cleaner ** <!-- Commentaire nettoyé -->
```

Utility Class to cleanup inconsistent HTML



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## IdentifyImageFormat ** - Detect image format using ImageMagick ** <!-- Commentaire nettoyé -->
```

Find automatically the image format with ImageMagick in command line. Several properties can be added and the assiociated command line filled int the property pattern field

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
```xml
 | Property map | `String/Pattern map` | List of the porperties to use during the process  <!-- Commentaire nettoyé --> | 
```


**Optional settings**

|Key      | Type    | Description | 
| - | - | - |
 | identify.exe path | `String` | ImageMagick identify.exe path to use | 



```xml
## JaTiffMerger ** - Merge tiff files ** <!-- Commentaire nettoyé -->
```

From a tiff content punnet, merges all its subcontent merge together. All content must be in tiff format. If the subcontents are already lower than 2 images, the merge is cancelled.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## JaTiffSplitter ** - Tiff document splitter ** <!-- Commentaire nettoyé -->
```





**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Dump tiff information | `Boolean` |  | `false ` | 
 | Minimum pages for dispatching | `Integer` |  | `1 ` | 
 | Corrupted JPEGs handled by ImageMagick | `Boolean` |  | `true ` | 
 | Handle corrupted JPEGs | `Boolean` |  | `true ` | 
 | Sanitize source JPEGs | SanitizeJpeg | > ⚠️ **Deleted**: The `SanitizeJpeg` module is deleted and no longer available in Fast2 from v2025.0.0. | 
 | Maximum number of source pages | `Integer` |  | `Integer.MAX_VALUE ` | 
 | Force JPEG Sanitation | `Boolean` |  | `false ` | 
 | Dispatch multi-pages tiff to a bunch of single-page tiff | `Boolean` | Only the first one will be processed when source contains multiple multi-page tiffs | `false ` | 
 | Minimum number of pages before dispatch errors | `Integer` |  | `1 ` | 



```xml
## JaTiffWang ** - Extract wang annotations from Tiff document ** <!-- Commentaire nettoyé -->
```

Creates one annotation file perf tiff page where annotations are found. A property is set to the annotation content to get back the page



**Optional settings**

|Key      | Type    | Description | 
| - | - | - |
 | Generate wang hexa in logs | `Boolean` |  | 
 | Fail if no annotation was found | `Boolean` |  | 
 | Skip exceptions | `Boolean` |  | 



```xml
## MDOWriter ** - Write punnet description to a MDO-format ** <!-- Commentaire nettoyé -->
```

This task serializes document metadata in an MDO file format with a fixed length.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Target file path for (local) files, can be pattern based | `String` |  | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw exception on missing mandatory data | `Boolean` | Throw exceptions if mandatories data are missing. Otherwise, silent fail | `false ` | 
 | MDO format specification file path | `String` | CSV configuration file path containing MDO format specification | 
 | End tag of document content | `String` |  | 
 | Data name to add dataline into document data | `String` | If null data isn't added in document | 
 | Skip from specific index | `Integer` | Skip writing documents from this index | `0 ` | 
 | Fallback on missing data | `Boolean` | When data is missing in the document being written, try to search it in the first document | `true ` | 
 | MDO-format with internal content | `Boolean` | Generate MDO-format document with internal content | `false ` | 
 | Data name containing original text content | `String` | If null text content isn't added to MDO file, internal content only | 



```xml
## MergeAllContents ** - Merge multiple content ** <!-- Commentaire nettoyé -->
```

Merge all contents of document from the first depth level. Can be used after Eml2Pdf task to merge header and body.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## MergeAllMails ** - Merge multiple mails ** <!-- Commentaire nettoyé -->
```

Merge mail header and body after a mail conversion



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## MergePdfBox ** - PDF merger ** <!-- Commentaire nettoyé -->
```

Merge your tiff files into PDF format using the PDFBox library (v1.2.1).



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Remove document direct content | `Boolean` | Not referenced from folders (deprecated) | `false ` | 
 | Convert resursive folders | `Boolean` | Folders referencesd by the document are converted recursively (deprecated) | `false ` | 
 | Ignore conversion exceptions | `Boolean` | Each exception during the conversion becomes a silent fail indexed in logs | `false ` | 
 | Supported source mime types | `String list` | List of all accepted mime types | 



```xml
## OOConvert ** - Convert office file to PDF ** <!-- Commentaire nettoyé -->
```

> ⚠️ **Deleted**: The `OOConvert` module is deleted and no longer available in Fast2 from v2025.0.0.

Complete converter from office file to PDF format using OpenOffice / LibreOffice.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Target path of generated file | `String` | Path to use for generated files during the conversion | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Temp folder path | `String` | Path to the temp folder | 
 | Output mime type | `String` | Mime type to set at the end of the conversion | `application/pdf ` | 
 | Delay to despair after an Office operation | `Long` | Delay in milliseconds | `15 * 1000 ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 |  | DefaultOfficeManagerConfiguration |  | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Shutdown Office Manager at finishTask) | `Boolean` | At the end of the task force Office Manager to shutdown | `false ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Localhost port number | `Integer` |  | `8100 ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Delay to startup Office Manager | `Integer` | Delay in seconds | `0 ` | 
 | Shutdown Office Manager when exiting | `Boolean` | Force Office Manager to shutdown at the end of the workflow | `false ` | 
 | Office Manager as singleton | `Boolean` | Use static singleton OfficeManager to reuse process between two campaigns | `false ` | 
 | officeHome | `String` |  | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Stop cmd for LibreOffice / OpenOffice | `String` | Command to use to force LibreOffice or OpenOffice process to stop | 



```xml
## PdfAConverter ** - Convert from PDF to PDF/A ** <!-- Commentaire nettoyé -->
```

A PDF/A is a PDF file with some constraints to ensure its long time conservation. These constraints are described in ISO 19005. This task takes PDF files as input, and generated a PDF/A-`\{1A, 1B, 2A, 2B, 3A, 3B\}`.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Expected pdf conformity level | `String` | If empty default level is PDF/A-1B | `1B ` | 



```xml
## PdfAnnotationRenderer ** - Renders annotations into a new PDF document ** <!-- Commentaire nettoyé -->
```

Requires itext-5.5.13, xmlworker-5.5.13 and jsoup-1.12.2 libs



**Optional settings**

|Key      | Type    | Description | 
| - | - | - |
 |  | `Boolean` |  | 
 |  | `Float` |  | 
 |  | `Float` |  | 
 |  | `Float` |  | 
 |  | `String` |  | 
 |  | `Boolean` |  | 
 |  | `Boolean` |  | 
 |  | `Float` |  | 
 |  | `Boolean` |  | 
 |  | `Float` |  | 
 |  | `String` |  | 
 | extraFont | `String/String map` |  | 



```xml
## PunnetXSLSerializer ** - Export punnet metadata using XSL script ** <!-- Commentaire nettoyé -->
```

Serialize a punnet to any file (CSV, JSON, XML, custom format) using an XSL stylesheet.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | XSL stylesheet path | `String` | Or you can enter your xsl:stylesheet in the content section | 
 | XSL Stylesheet content | `String` | Enter here your xsl:stylesheet content | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
```xml
 | New document properties | `String/String map` | Specify here at least the `documentId` data. You can use punnet properties to resolve pattern  <!-- Commentaire nettoyé --> | 
```
 | Append | `Boolean` | Attach output stream of you XSL script as a new document in the punnet. | `false ` | 
 | Replace | `Boolean` | Replace punnet documents by the new produced document (requires Append to be set) | `false ` | 
 | Encoding | `String` | Enter here your script file encoding. | `UTF-8 ` | 



```xml
## SanitizeTiff ** - Tiff cleaner ** <!-- Commentaire nettoyé -->
```

Converts your tiff files to jpeg format.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Out mime type | `String` | The target mime type for your documents | `image/tiff ` | 
 | Out extension | `String` | The extensions to set to your documents | `tiff ` | 
 | Convert path | `String` |  | `convert -quiet ` | 
 | Supported source mime types | `String list` |  | 



```xml
## SplitPdfItext ** - PDF splitter  ** <!-- Commentaire nettoyé -->
```



**Mandatory settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Split definition data name | `String` | Name of the document data for split definition | `splitDefinitions ` | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## TesseractInvoker ** - Transform your PDFs and images with text to make them searchable using OCR engine ** <!-- Commentaire nettoyé -->
```

Based on Tesseract solution, this task will parse each page of your images (TIFF, JPG and PNG) or PDF to extract text and create a new searchable PDF
CCITT T.6 image compression is supported but not LZW compression\nBe careful if you are doing multi-document or multi-content : if names are identicals it will overwrite contents 
(ex\ sample.tiff & sample.gif will both creates sample.pdf. The first doc will overwrote the 2nd one

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Destination folder | `String` | Target file path for the locally-created files | 
```xml
 | Tesseract path | `String` | Complete path of your local Tesseract instance  <!-- Commentaire nettoyé --> | 
```


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw rotations exceptions | `Boolean` | If Fast2 performs document orientation detection, it can either fail silently or pop an error when the action has not been properly completed. Throw conversion exceptions should be set to true for this option to work | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Allow rotation if needed | `Boolean` | If document is converted but not readable, rotation is will correct the page orientation from landscape to portrait if needed | `true ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Add file sizes | `Boolean` | If true, add input and output file sizes in the data set | 
 | Allow enhanced orientation detection | `Boolean` | Only used if allow rotation is set to true. Enable the use of an enhanced rotation detection, thus giving more accurate results but with the downside of being slower. Activate it for low-quality images for example. | `false ` | 



```xml
## Text2PDFConverter ** - Convert Text file to PDF ** <!-- Commentaire nettoyé -->
```

Convert your text files into PDF format.



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Image path | `String` |  | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Formatted page text provider | FormattedPageTextProvider |  | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Formatted page text converter | FormattedPageTextConverter |  | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 



```xml
## Tiff2PDFIText ** - Converter from Tiff to PDF ** <!-- Commentaire nettoyé -->
```

This task uses the IText library to convert content of TIFF documents into PDF format



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Keep image aspect | `Boolean` | Zoom image to fit in an A4 paper, but conserve aspect ratio | `true ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Adapt PDF size to source image | `Boolean` | Generate a PDF document with a size related to the original image size | `false ` | 
 | Ignore conversion exceptions | `Boolean` | Fast2 will either throw an error if the image has not properly been converted, or fail silently | `false ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Verbose logs | `Boolean` | Check this item to have more logs for fine-tuning stage | `false ` | 
 | imageSourceHeightProperty | `String` |  | 
 | Temp file cleaner | TempFileCleaner | Select here the module you want to clean the temporary files | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | DPI correction | `Boolean` | Check this to correct the DPI related to the image dimensions | `false ` | 
 | Rotate landscapes | `Boolean` | If imge aspect is > 1.4, it will be rotated to fit in a A4 format | `false ` | 
 | Clean temporary files | `Boolean` | Remove the temporary input files. To use this option, a temp file cleaner must be set | `false ` | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | imageSourceWidthProperty | `String` |  | 



```xml
## Tiff2PdfBox ** - Convert TIFF to PDF ** <!-- Commentaire nettoyé -->
```

This task converts TIFF images into PDF documents using the Apache PDFBox lib



**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Add pdf dimensions to dataSet | `Boolean` | Store dimensions in document dataSet named contentHeight and contentWidth only for the first page | 
 | Ignore conversion exceptions | `Boolean` | Fast2 will either throw an error if the image has not properly been converted, or fail silently | `false ` | 
 | Force to re-encode tiffs | `Boolean` | Force to decompress and recompress tiffs before encapsulating in PDF, slower but could handle some exceptions | `false ` | 
 | Unsupported producers | `String list` | List of unsupported tiff software producers | 
 | Default DPI used for PDF transformation | `Integer` |  | `200 ` | 



```xml
## WkHtmlToPdfConverter ** - Converter from Html To PDF ** <!-- Commentaire nettoyé -->
```

This task will be used to convert HTML content into a PDF document. Fast2 embeds the wkhtmltopdf command-line utility in order to carry out this conversion.

**Mandatory settings**

|Key      | Type    | Description | 
| - | - | - |
 | Destination folder | `String` | Target file path for the locally-created files | 
 | Converter path | `String` | Set here the path of the converter | 


**Optional settings**

|Key      | Type    | Description |  Default value |
| - | - | - | - |
 | Ingore output file | `Boolean` | Converter does not takes output file instructions | `false ` | 
 | Process annotation contents | `Boolean` | If annotations are asked to be migrated, you can filter here to process their content(s) or only their metadata | `false ` | 
 | Ignore command return value | `Boolean` | Do not perform anything after conversion, whatever the command feedback | `false ` | 
 | Scan recursive content | `Boolean` | Only convert terminal contents and not container ones | `false ` | 
 | Destination folder for original files | `String` | Dump input file in a specific folder path. Set to null to disable dumps | 
 | Options location | `Integer` | Set here the index of options in the cmd line : O means at the beginning. | `1 ` | 
 | Supported mime-types | `String list` | Specify the list of all mime-types of documents which Fast2 will convert | 
 | Protect path with double quotes | `Boolean` | Surround file paths with quotes when building command-line | `false ` | 
 | Timeout before stopping | `Integer` | Time to wait before killing the process. Value is in seconds | `3600 ` | 
 | Throw conversion exceptions | `Boolean` | If Fast2 performs document conversion, it can either fail silently or pop an error when the action has not been properly completed | `true ` | 
 | Mime-type : Check document before content | `Boolean` | You can assume the file extension is accurate, or ask Fast2 to check the content encoding to identify more precisely the document mime-type. By default, Fast2 will check at content level | `false ` | 
 | Conversion option | `String` | See application help for more details | 
 | List of error exit codes to skip | `String list` |  | 
 | Extension to append | `String` | The extension to add to the original file name before any conversion. This value should not start with a dot (ex : html) | 
 | Process all contents | `Boolean` | Fast2 will either only focus on the first encountered content, or process them all | `true ` | 
 | Cleanup HTML first | `Boolean` | Ask Fast2 to clean the HTML content regarding syntax and encoding | `true ` | 



