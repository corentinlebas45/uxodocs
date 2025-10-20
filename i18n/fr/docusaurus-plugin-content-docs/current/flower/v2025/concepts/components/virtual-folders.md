---
title: Les dossiers virtuels
description: Organisez dynamiquement vos composants.
---

La notion de dossier virtuel est une notion clé au sein de FlowerDocs. Ce type de composant permet de définir un dossier dont le contenu est résolu de manière dynamique. Son contenu est donc dit "virtuel".

<br/>

# Le contenu

Le contenu d'un dossier virtuel est déterminé à partir de recherches de composant. Le contenu d'un dossier est donc résolu dynamiquement en fonction du contexte utilisateur. Ces recherches peuvent également permettre d'organiser le contenu en sous-niveau : les `agrégations`. Celles-ci permettent d'agréger (ou regrouper) les composants trouvés en fonction de leurs tags.

<br/>
Ces recherches et agrégations peuvent être modifiées à tout moment afin de faire évoluer l'organisation de vos composants en fonction des besoins.

:::warning
Il est préconisé de ne pas faire d'agrégation à plus de 3 niveaux, d'utiliser des tags à valeurs définies (comme des tags de type liste de choix) et de ne pas dépasser les 100 valeurs possibles.

Lorsque l'arborescence d'un dossier virtuel est en mode `Visualiser`, nous préconisons de ne pas dépasser les 100 documents affichés dans ARender.
:::

# L'ajout de composant

Via l'interface, en fonction des recherches paramétrées (catégorie recherchée et critère `classid`), un bouton `Créer un {catégorie de composant}` permet de créer le composant souhaité.

Lors de l'indexation, il est possible de sélectionner la classe de composant. L'ensemble des tags en commun est repris sur le formulaire d'indexation en écriture.

__Note :__ S'il n'y a qu'une seule classe de composant, celle-ci est automatiquement sélectionnée.

# Les permissions

Afin de restreindre l'accès ou les modifications pouvant être apportées à un dossier virtuel, plusieurs permissions permettent de contrôler les opérations possibles : 

* Télécharger le contenu d'un dossier virtuel sous forme d'archive au format zip : `DOWNLOAD_CONTENT`

* Attacher le dossier virtuel à un dossier : `ATTACH`

Certaines actions ne sont disponibles que si l'utilisateur a accès au dossier virtuel en écriture. Pour ceci, il faut qu'il ait la permission `UPDATE` et qu'il ait reservé le dossier virtuel (cf  [Reservation](broken-link.md)). 


:::info
Pour aller plus loin, consultez la Javadoc : 

* [Dossier virtuel](/javadocs/domain/com/flower/docs/domain/virtualfolder/VirtualFolder.html)
* [Classe de dossiers virtuels](/javadocs/domain/com/flower/docs/domain/virtualfolderclass/VirtualFolderClass.html)
:::