---
title: Signatures
icon: mdi-file-certificate
keywords: ["feature", "signatures"]
---
### L'onglet des signatures


Pour activer l'onglet des signatures, la propriété suivante doit être activée : 

Avant la 4.6.0, la configuration est faite dans le document-service-broker (RenditionEngine)


```cfg
services-broker:
  signaturePDF: true
```


Depuis la 4.6.0, la configuration est faite dans le document-text-handler (PDFBoxEngine)


```cfg
pdf.signatures.enable=true
```



Après l'ouverture d'un document, un nouvel onglet dédié à la signature apparaît. En entête de ce dernier deux icônes peuvent apparaître :

Signature valide :
Signature non-valide :

### Le cas nominal : une signature valide

La signature est désignée comme valide à partir du moment où l’entête de l’onglet en question contient l’icone de la signature valide.

Un clic sur ce dernier provoque l’ouverture de l’onglet comme ci-dessous :


On peut y voir les informations suivantes :

- Le signataire,
- La conservation ou non de l’intégrité du document,
- La validation ou non de la chaîne de certificat,
- La date et l’heure de la signature,
- La raison de la signature 
- Le lieu de cette dernière.

### Les cas d'erreurs

Il est possible que le PDF ait été modifié après l’apposition de la signature, que la signature contenue dans le PDF ou que ses certificats ne soient pas valides. 
Ainsi, l’intégrité n’est pas conservée ou l’identité du signataire ne peut être vérifiée.

Au niveau de l’interface, l’alerte est donnée par l’icône de signature non-valide.


Les différents types d'erreurs sont remontés au niveau du panneau des signatures :

Si le document a été modifié ou endommagé.

Si la signature du document est non valide.

Il est possible de paramétrer une liste de certificats valides.
  Pour cela, placer les certificats voulus dans un dossier défini par la propriété PUBLIC_CERT pour le service document-text-handler, dont la valeur par défaut est ../defaultPathPublicCert  :


```cfg
PUBLIC_CERT=../defaultPathPublicCert
```

Si la signature n'utilise pas un des certificats placés dans ce dossier, alors l'erreur de certificat inconnu sera remontée.
Pour ne pas controler les certificats, laisser le dossier vide.