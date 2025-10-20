---
title: Signatures
icon: mdi-file-certificate
keywords: ["feature", "signatures"]
---
### Signatures tab


To enable the Signatures tab, the following property must be enabled :

Before 4.6.0, the configuration is done in the document-service-broker (RenditionEngine)


```cfg
services-broker:
  signaturePDF: true
```


Since 4.6.0, the configuration is done in the document-text-handler service (PDFBoxEngine)


```cfg
pdf.signatures.enable=true
```



After opening a document, a new tab dedicated to signature appears. At the header of the latter two icons may appear:

Valid signature :
Invalid signature :

### Nominal case : a valid signature

The signature is designated as valid as long as the header of the tab in question contains the icon of the valid signature.

A click on it opens the tab like below :

On this tab, we can see the following signature information :

- The signer,
- The PDF integrity, whether or not it's preserved,
- The validation of the certificate chain,
- The signature date,
- The signature reason 
- The signature location.

### Error cases

It is possible that the PDF has been modified after affixing the signature, that the signature contained in the PDF or that its certificates are not valid.
Thus, the integrity is not preserved or the identity of the signatory cannot be verified.

At the interface level, the alert is given by the invalid signature icon.


Different types of errors are reported to the signature panel :

  Whether the document has been modified or damaged.

  If the signature of the document is invalid.

  It is possible to configure a list of valid certificates.
  To do this, place the desired certificates in a folder defined by the PUBLIC_CERT property for the document-text-handler service, whose default value is ../defaultPathPublicCert:


```cfg
PUBLIC_CERT=../defaultPathPublicCert
```

If the signature does not use one of the certificates placed in this folder, then the unknown certificate error will be reported.
To not check the certificates, leave the folder empty.