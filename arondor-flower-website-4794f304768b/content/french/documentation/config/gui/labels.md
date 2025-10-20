+++
date = "2009-03-29T13:20:01+02:00"
title = "Libellés"
+++

Cette section détaille la configuration des libellés de FlowerDocs GUI. Nativement, l'application supporte le français et l'anglais.
Ces libellés natifs peuvent être définis à l'aide de : 

* fichiers de propriétés
* l'API JS (cf. [documentation](broken-link.md))

# Définition des libellés

Nativement, l'interface graphique supporte le français et l'anglais. Il est possible de surcharger les libellés natifs ou d'ajouter de nouvelles langues.

Le fichier de propriété contenant les libellés doit être nommé tel que `<locale>.properties` (par exemple `fr.properties`).

<br/>
__Exemple :__ Surcharger le libellé de l'onglet Accueil.

home=Tableau de bord
home=Dashboard

# Détermination de la locale

La locale de l'utilisateur est utilisée pour déterminer la langue des libellés à utiliser. Cette locale est déterminée par celle définie au niveau du navigateur.
Elle peut également être surchargée en ajoutant le paramètre `locale` dans l'URL de la GUI (par exemple : https://www.demo.flowerdocs.cloud/flower-docs-gui?locale=EN).

Lorsque aucun libellé n'est défini pour la locale de l'utilisateur, l'anglais (`en`) est utilisé par défaut.

<br/>
:::info
Les libellés peuvent également être déterminés dynamiquement à l'aide de [l'API JS](broken-link.md).
:::
