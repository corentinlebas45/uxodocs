---
title: "XFDF des annotations"
weight: 
draft: false
icon: mdi-call-merge
keywords: ["tutoriel", "télécharger", "xfdf", "annotation", "charger"]
---

## Télécharger les XFDF ou FDF

Une servlet est déployée permettant de télécharger le fichier XFDF ou FDF des annotations d'un document. 

### Requête 

Cette fonctionnalité est accessible via la servlet : **servletXFDFAnnotations**

La requête est utilisable en GET


#### Exemple d'utilisation

``` bash
curl -X GET 'http://<arender_host>/ARender/arendergwt/servletXFDFAnnotations?uuid=docUUID&type=typeFile'
```

* uuid : l'id du document
* type : le type du fichier à télécharger. XFDF ou FDF (par défaut : XFDF)

### Réponse de la servlet

Le fichier XFDF ou FDF des annotations du document envoyé en paramètre est téléchargé.


## Charger les XFDF

Une servlet est déployée permettant de charger le fichier XFDF des annotations dans un document envoyé en paramètre. 

### Requête 

Cette fonctionnalité est accessible via la servlet : **servletXFDFAnnotations**

La requête est utilisable en POST


#### Exemple d'utilisation

``` bash
curl -X POST -H "Content-Type: multipart/form-data" -F "file=@yourXFDF.xfdf" "https://<arender_host>/ARender/arendergwt/servletXFDFAnnotations?uuid=docUUID"
```

* uuid : l'id du document
* yourXFDF : le titre de votre fichier XFDF

Si le fichier ou les annotations sont au format FDF, ils seront chargés au format XFDF.

**Exemple de fichier XFDF**

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<ns0:xfdf xmlns:ns0="http://ns.adobe.com/xfdf/"><ns0:annots>
<ns0:highlight color="#273746" flags="obfuscate" name="c553fe65-a3a0-4628-b396-1201bfea6285" page="1" rect="153.26161,334.42,264.57193,374.02002" title="admin" creationdate="D:20221214090312+00'00'" opacity="1.0" coords="153.26161,374.02002,264.57193,374.02002,153.26161,334.42,264.57193,334.42"/>
<ns0:highlight color="#273746" flags="obfuscate" name="d374f298-205f-420e-a7d6-acd55e337151" page="1" rect="43.2,334.42,114.40608,374.02002" title="admin" creationdate="D:20221214090312+00'00'" opacity="1.0" coords="43.2,374.02002,114.40608,374.02002,43.2,334.42,114.40608,334.42"/>
<ns0:circle color="#EAF39C" flags="" name="cfdbee9c-dce1-4e62-bc10-55ab1554476b" page="0" rect="82.02787,218.50267,183.40193,337.67523" title="Unknown" creationdate="D:20221228084701+00'00'" opacity="0.7" fringe="0.0,0.0,0.0,0.0" interior-color="#EAF39C" width="0.0" style="solid" intensity=""/>
</ns0:annots>
</ns0:xfdf>
```


### Réponse de la servlet

Le fichier XFDF des annotations du document envoyé en paramètre est chargé dans le document en paramètre.