+++
date = "2018-03-02T13:20:01+02:00"
title = "Les documents"
description = "Gérez vos documents électroniques."
+++

Un document est un composant à part entière avec la particularité de posséder un ou plusieurs contenus. On parle également de fichiers.


<br/>
Afin de restreindre l'accès ou les modifications pouvant être apportées au(x) contenu(s) d'un document, plusieurs permissions permettent de contrôler les opérations possibles : 

* Visualiser le contenu : `READ_CONTENT`
* Ajouter et supprimer le contenu d'un document : `UPDATE_CONTENT`
* Télécharger le contenu du document : `DOWNLOAD_CONTENT`
* Activation de l'impression dans la visionneuse : `PRINT`
* Visualiser les annotations du contenu d'un document : `READ_ANNOTATION`
* Annoter le contenu d'un document : `CREATE_ANNOTATION`
* Composition de document : `BUILD_NEW_DOCUMENT`

<br/>

Certaines actions ne sont disponibles que si l'utilisateur a accès au document en écriture. Pour ceci, il faut qu'il ait la permission `UPDATE` et qu'il ait réservé le document (cf  [Reservation](broken-link.md)). 

* Attacher le document à un dossier : `ATTACH`
* Concernant la suppression du lien document/dossier, l'évaluation de la permission `DETACH` a lieu sur le dossier et non sur le document

 

:::info
Pour aller plus loin, consultez la Javadoc : 

* [Document](/javadocs/domain/com/flower/docs/domain/document/Document.html)
* [Classe de documents](/javadocs/domain/com/flower/docs/domain/documentclass/DocumentClass.html)
:::