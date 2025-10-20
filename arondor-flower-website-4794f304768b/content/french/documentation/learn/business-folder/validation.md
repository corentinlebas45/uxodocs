+++
title = "Validation"
date = "2000-02-04T13:20:01+02:00"
+++


Afin de valider le bon fonctionnement de ce qui a été mis en place, commencez par créer un document client.
Pour cela, rendez-vous sur l'onglet `Insérer`, insérez un fichier puis cliquez sur `Suivant` afin de passer à l'étape d'indexation.

Dans le formulaire d'indexation, sélectionnez la classe `DocumentClient` et saisissez une valeur pour le tag `ReferenceClient` (par exemple : _1234_).

<br/>
Ensuite, allez dans la console d'administration et créez un dossier virtuel de classe `DossierClient` :

* Ouvrez la section `Composants > Classes de dossiers virtuels`,
* Sélectionnez la classe de dossier virtuel `DossierClient`,
* Cliquez sur le bouton `Créer une instance`.

Dans le formulaire d'indexation, saisissez les informations suivantes :

* un nom pour le dossier client,
* la valeur précédemment saisie pour tag `ReferenceClient` du document créé.

Puis cliquez sur `Créer`.

<br/>
Votre premier dossier métier a été créé !
Pour valider le modèle de données réalisé, ouvrez le dossier client créé et vérifiez qu'il contient le document ajouté.

:::info
__Ressources__ :

Pour faciliter la gestion de client entre le dossier virtuel et les documents, utilisez le [plugin permettant de lier un composant à un autre](broken-link.md).

:::

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->

