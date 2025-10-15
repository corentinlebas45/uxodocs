+++
date = "2020-02-01T15:20:01+02:00"
title = "Intégration"
description = "Configurer le plugin depuis la console d'administration."
+++

# Configuration du plugin

A l'aide de votre navigateur préféré, ouvrez la console d'administration FlowerDocs puis : 

* aller dans la section `Configuration`
* ouvrir le menu `Plugins`
* cliquer sur le bouton `+` pour démarrer la création d'un nouveau plugin
* remplissez les informations demandées : 
    * Chemin : `/my-plugin/**`
    * URL : `http://localhost:2802/secured`


# Accès au plugin

Maintenant que votre plugin de la GUI a été configuré, vous pouvez accéder au endpoint `/count` à travers la GUI grâce à une l'URL : `<gui>/plugins/<scope>/my-plugin/count`.

Vous pouvez également tester le retour du service implémenté avec différents utilisateurs pour observer que le nombre de documents trouvés dépend de l'utilisateur connecté.

:::info
Etant donné que le plugin exige un token, l'accès direct via l'URL `http://localhost:2802/secured/count` est interdit.
:::