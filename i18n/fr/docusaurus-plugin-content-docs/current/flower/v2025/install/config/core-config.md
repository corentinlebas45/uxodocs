+++
date = "2000-03-31T13:20:01+02:00"
title = "Configuration Core"
+++

Cette partie décrit les différentes configurations côté FlowerDocs Core à définir au sein du fichier `core.properties` de l'application.


# Général

|Propriété			   |	  Description														|
|----------------------|------------------------------------------------------------------------|
|system.admin.username |Identifiant du compte système											|
|system.admin.password |Mot de passe du compte système, peut être encrypté via un secret		|
|token.key			   |Token partagé entre FlowerDocs Core, FlowerDocs GUI et  [shortcode]	|
|secret				   |Secret utilisé pour encoder le mot de passe *(optionnel)*				|
|core.context		   |Contexte de l'application												|


# Journalisation

|Propriété			|	  Description														|
|-------------------|-----------------------------------------------------------------------|
|logging.file.name  |Chemin et nom du fichier de log										|
|logging.level.root |Niveau de log : `WARN`, `ERROR`, `INFO`, `DEBUG`					|

# OpenSearch

|Propriété  |	  Description														|
|-----------|-----------------------------------------------------------------------|
|es.nodes   |Adresses des différents noeuds OpenSearch séparées par une ``,``      |
|es.cluster |Le nom du cluster OpenSearch											|
|es.username|Le nom de l'utilisateur *(optionnel)*									|
|es.password|Le mot de passe de l'utilisateur *(optionnel)*							|

# Redis

|Propriété		  |	  Description														|
|-----------------|---------------------------------------------------------------------|
|redis.enabled    |Permet d'activer Redis, pré-requis pour la haute disponibilité 	    |
|spring.redis.host|Host name Redis														|
|spring.redis.port|Port d'écoute Redis												|

# ARender

|Propriété					   |	  Description	   											   |
|------------------------------|-------------------------------------------------------------------|
|arender.rendition.nodes	   |Adresses des différentes renditions ARender séparées par une ``,`` |

:::warning
Il n'est pas préconisé de modifier des propriétés d'ARender via du paramétrage dans le fichier `core.properties`. Les propriétés non définies dans la documentation ne sont pas qualifiées par FlowerDocs : le bon fonctionnement de l'application n'est donc pas garanti avec ces modifications.
:::