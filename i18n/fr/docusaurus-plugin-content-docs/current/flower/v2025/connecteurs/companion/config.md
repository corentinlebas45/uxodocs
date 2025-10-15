+++
date = "2003-03-28T13:20:01+02:00"
title = "Configuration"
intro ="Un fichier de configuration est généré lors de la configuration de FlowerDocs Companion dans le répertoire C:\\Program Files (x86)\\FlowerDocs\\Companion\\conf. Il contient l'ensemble des paramètres configurables."
+++

# Modification de la configuration
Suite à l'installation de FlowerDocs Companion, il est nécessaire de le configurer en ouvrant l'interface de configuration ou directement depuis le fichier de configuration.
L'interface de configuration est accessible depuis la barre des tâches ou depuis le bandeau du plugin dans les applications Microsoft, seulement si le paramètre displayConfiguration est à 1. Cette interface graphique permet de saisir la majorité des paramètres présents dans le fichier de configuration.

De plus, la fenêtre qui s'affichera sera différente en fonction des droits de l'utilisateur. Ces droits correspondent au paramètre admin. S'il est à 0, la popup permettra seulement de se connecter via un couple de login/mot de passe. S'il est à 1, il permettra de configurer une majorité des paramètres présents dans le fichier de configuration.

## Accès à l'IHM FlowerDocs
Les plugins pour Microsoft Office permettent l'indexation des documents au sein de l'interface graphique FlowerDocs. Pour cela, il est nécessaire de configurer une URL permettant d'y accéder. Celle-ci est associée au paramètre `GUI`.

__Exemple__ : https://www.demo.flowerdocs.cloud/flower-docs-gui/
## Compte d'accès & Scope
Concernant les comptes d'accès, seul l'identifiant de l'utilisateur est stocké dans le fichier de configuration (user). Le mot de passe n'est pas gardé pour des raisons de sécurité. Cependant une fois que le couple login/mot de passe (associé au reste de la configuration) a permis la connexion de l'utilisateur, un jeton JWT d'identification a été généré.

Ce jeton est gardé par le paramètre token et va permettre de maintenir la session ouverte même une fois les plugins fermés.

Le scope est lui associé au paramètre scope.

## Dimensions du navigateur
Lorsqu'un export de document est réalisé, un navigateur est ouvert pour pouvoir l'indexer avant de l'enregistrer. Les dimensions de ce navigateur sont paramétrables et correspondent à browserWidth pour sa largeur et browserHeight pour sa hauteur. Les valeurs par défaut sont respectivement 700 et 800.
# Sauvegarde de la configuration
Afin de mettre à jour l'ensemble de la configuration, il suffit de cliquer sur le bouton `Sauvegarder` présenté dans la popup décrite précédemment. Ceci n'est valable que pour un utilisateur ayant les droits administrateur.

# Test de la configuration
Pour valider les éléments de configuration, cliquer sur le bouton Connexion. Si le message `L'utilisateur <nom> est connecté.` est affiché, la configuration est opérationnelle. Autrement, l'erreur affichée explique à l'utilisateur le ou les paramètre(s) invalide(s).