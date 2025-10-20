---
date: "2000-05-03"
title: "Les dossiers"
description: "Classez vos composants selon vos envies."
Related:
  - name: 'FolderService'
    class: 'com.flower.docs.service.api.folder.FolderService'
---
:::infoOrganisez vos documents en les regroupant par dossier pour les retrouver plus facilement.:::


# Le contenu d'un dossier

Un dossier est un composant disposant d'enfants. Ces enfants peuvent être des [documents](broken-link.md) ou d'autres dossiers.

<br/>
Des contraintes peuvent être définies au niveau d'une classe de dossiers afin de restreindre les enfants pouvant être ajoutés à un dossier. Pour cela, il est possible de référencer les classes de composants autorisées.


# Les permissions applicables à un dossier

Afin de restreindre l'accès ou les modifications pouvant être apportées à un dossier, plusieurs permissions permettre de contrôler les opérations possibles : 

* Ajouter ou supprimer un enfant d'un dossier : `UPDATE_CONTENT`
* Détacher un document d'un dossier : `DETACH` (action possible depuis l'indexation de document)
* Télécharger le contenu d'un dossier sous forme d'archive : `DOWNLOAD_CONTENT`. Le contenu téléchargé ne contient que le contenu documentaire du dossier et n'inclus pas les sous-dossiers.

 Certaines actions ne sont disponibles que si l'utilisateur a accès au document en écriture. Pour ceci, il faut qu'il ait la permission `UPDATE` et qu'il ait reservé le dossier (cf  [Reservation](broken-link.md)). 

* Attacher le dossier à un autre dossier : `ATTACH`
 
<br/>
:::info
Pour aller plus loin, consultez la Javadoc : 

* [Dossier](/javadocs/domain/com/flower/docs/domain/folder/Folder.html)
* [Classes de dossiers](/javadocs/domain/com/flower/docs/domain/folderclass/FolderClass.html)
:::