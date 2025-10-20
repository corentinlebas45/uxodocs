# README #

Le site est basé sur le générateur de site Web statique [Hugo](https://gohugo.io/).

### Lancement en local ###

Hugo fournit un mode développement qui permet de constater/tester les modifications apportées. Pour l'utilisateur, il est nécessaire de télécharger l'exécutable adapté au poste [ici](https://github.com/gohugoio/hugo/releases/tag/v0.59.0).

* Ouvrir une console
* Aller dans le répertoire du projet
* Exécuter la commande : hugo server
* Ouvrir dans votre navigateur la page [http://localhost:1313/documentation](http://localhost:1313)
* Modifier un article (.md) et visualiser la modification dans votre navigateur


### Ajouter un article ###

* Créer une branche dédiée
* Aller dans le répertoire ``content\blog``
* Dupliquer un article existant
* Modifier votre article 
* Pousser les modifications sur Bitbucket

Créer ensuite une pull request pour demander l'inclusion de l'article sur la branche principale (``develop-2.5.x``)


### Déploiements ###

* Toutes les 4 minutes, Jenkins scrute la branche master et déploie sur l'[environnement d'intégration](http://flowerdocsint.arondor.int) si des modifications ont eu lieu. Le job utilisé est [FlowerDocs_Site_AutoDeploy_Integration](http://redjenkins.arondor.int:8080/jenkins/view/FlowerDocs/job/FlowerDocs_Site_AutoDeploy_Integration)
* Une fois une pull request validée, lancer un build [FlowerDocs_Site_Deploy_Online](http://redjenkins.arondor.int:8080/jenkins/view/FlowerDocs/job/FlowerDocs_Site_Deploy_Online/) pour déployer les modifications [en ligne](http://flowerdocs.com)



## Solutions

Les éléments du site liés aux solutions sont situés dans la `solutions` dans le dossier `content`.
Chaque solution est une section Hugo à part entière et est consituée : 

* au premier niveau : le dossier correspondant à une solution (par exemple : `courrier`)
* au second niveau : les modules de la solution (par exemple : `gec`)
* au troisième niveau : les fonctionnalités par module (par exemple : `routage`)

### Solution

Pour modifier, les informations d'une solution, éditer le fichier `solutions/<solution>/_index.md`

### Module

Pour modifier, les informations d'un module d'une solution, éditer le fichier `solutions/<solution>/<module>/_index.md`

### Feature

Pour ajouter ou modifier, les fonctionalités d'un module, éditer le fichier `solutions/<solution>/<module>/features/*.md`

### Illustrations

Les illustrations dans les fonctionnalités, les blog posts, etc. proviennent du site : https://storyset.com/amico