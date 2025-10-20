+++
 date = "2020-02-01T11:20:01+02:00"
title = "Drools"
+++

:::info
Ce tutoriel vous montre un exemple de migration d'un abonnement aux opérations basé sur un Drools au profit d'un script : qui est à la fois plus simple à maintenir et préconisé par le produit FlowerDocs car offrant de meilleures performances.
:::

Prenons comme exemple, la table de décision suivante : 

Son but est simple : en fonction de la classe de tâche du composant et de la réponse appliquée, on effectue certains traitements comme : changer la classe de tâche, gérer l'assignation, la sécurité et changer la valeur d'un tag.
Nous devons donc appliquer les mêmes conditions et les mêmes traitements à la tâche passée en entrée, dans un script.