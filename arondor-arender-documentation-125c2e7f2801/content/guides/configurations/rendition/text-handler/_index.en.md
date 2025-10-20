---
title: "Text handler"
draft: false
weight: 3
type: docs
icon: mdi-file-cog-outline
---

## Digital signature management

ARender supports the display and verification of digital signatures in PDF files.
This feature is disabled by default, but can be enabled in the settings.
Once enabled, signature information becomes visible, and trusted certificates can be configured to verify the authenticity of signatures in documents.

{{< tag type="code" title="application.properties situé dans ARender-Rendition-2023.X.Y\modules\PDFBoxEngine">}}

| Description                                                                                                  | Parameter Key                  | Default value            | Type    |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------ | ------- |
| Enable verification and extraction of digital signatures                                                     | pdf.signatures.enable          | false                    | Boolean |
| Path to the folder containing certificates, at least one of which must match a certificate found in the PDF  | PUBLIC_CERT                    | ../defaultPathPublicCert | String  |
| Path to the folder containing Adobe-trusted certificates (AATL) (Since version 2023.14.0)                    | trusted.root.certificates.path | ../defaultPathRootCert   | String  |

