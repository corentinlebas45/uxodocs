---
title: Gestion des dates
---

# Configuration globale

Au sein de l'IHM FlowerDocs plusieurs formats de date peuvent être définis : 

* Dans les formulaires grâce à la propriété ``gui.date.form``
* Dans les colonnes d'un tableau grâce à la propriété ``gui.date.table``
* Pour les popups d'informations techniques ``gui.date.technical``
* Pour les autres emplacements grâce à la propriété ``gui.date.display``

Pour plus d'informations concernant les différents formats supportés, il est possible de consulter [ceci](https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).


__Exemple :__ 

Dans un formulaire, pour obtenir des dates du type 01/12/2016, il faut définir la propriété ``gui.date.form=dd/MM/yyyy``. Ce type de date permet notamment de faciliter la saisie manuelle des dates sans utiliser l'objet DatePicker.


# Configuration du format de date par classe de tags ou référence de tag

Dans une classe de tags de type ``Date`` ou une référence de tag de type ``Date``, il est possible d'utiliser un format personnalisé de date parmi [les formats de date supportés](broken-link.md). L'internationalisation du format est gérée par l'application.