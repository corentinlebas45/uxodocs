+++
date = "2000-03-31T13:20:01+02:00"
title = "Montée de version"
+++

Cette partie décrit les actions à réaliser après une montée de version de l'application.


# Cache des labels

Les labels utilisés par l'application sont stockés au sein d'un cache côté Redis qui n'est pas purgé via la purge du cache à disposition des administrateurs au sein de l'application.

Après une montée de version de l'application, il est nécessaire d'aller purger le cache des labels pour prise en compte des modifications directement dans Redis en effectuant les actions suivantes :

* Connectez-vous sur le serveur d'installation de Redis
* Lancez le client Redis : `redis-cli`
* Lancez la commande si redis est sécurisé par mot de passe : AUTH [username] password
* Exécutez la commande suivante : `DEL "labels:*"`
