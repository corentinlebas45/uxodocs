+++
date = "2018-03-07T13:24:01+02:00"
title = "Date"
description = "Utilisez les tags de type date."
+++

Le modèle de données FlowerDocs offre la possibilité de définir des tags de type `DATE`. 

# Valeur stockée

La valeur stockée d'un tag de type `DATE` est le timestamp associé à la date.
Ce timestamp correspond au nombre de millisecondes écoulées depuis le 1er janvier 1970 UTC. Dans le cas d'une date antérieure à cette date de référence, le nombre de millisecondes est négatif.


# Format d'affichage

Bien que la valeur d'un tag de type `DATE` soit stockée sous la forme d'un timestamp, celle-ci peut être affichée de différentes manières.

<br/>
La configuration du format d'affichage d'une date permet de définir la manière dont celle-ci sera présentée aux utilisateurs. 

Cette configuration peut être réalisée à l'aide du champ `pattern` au niveau d'une classe de tag ou d'une référence de tag et accepte les formats suivants : 


|Nom|Description|Exemple|
|---|-----------|-------|
|DATE_FULL|Date complète|vendredi 23 octobre 2020|
|DATE_LONG|Date longue|23 octobre 2020|
|DATE_MEDIUM|Date moyenne|23 oct. 2020|
|DATE_SHORT|Date courte|23/10/2020|
|DATE_TIME_FULL|Date + heure complètes|vendredi 23 octobre 2020 00:00:00 UTC+2|
|DATE_TIME_LONG|Date + heure longues|23 octobre 2020 00:00:00 UTC+2|
|DATE_TIME_MEDIUM|Date + heure moyennes|23 oct. 2020 00:00:00|
|DATE_TIME_SHORT|Date + heure courtes|23/10/2020 00:00|
|ISO_8601|ISO 8601|2020-10-23T00:00:00.000+02:00|
|RFC_2822|RFC 2822|Fri, 23 Oct 2020 00:00:00 +0200|