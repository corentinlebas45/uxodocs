---
title: Test du Hook
---

# Abonnement

Afin que l'`OperationHook` implémenté soit notifié à chaque création de document, il est nécessaire de définir un abonnement : 

* Allez dans la section **Administration > Configuration > Abonnements aux opérations**
* Cliquez sur le bouton **+** pour créer un nouvel abonnement

<br/>
Dans le formulaire de création de l'abonnement, remplissez les champs suivants : 

* `OperationHandler` : renseignez l'URL HTTP du hook (par exemple : *http://localhost:7777/modify*).
* `Phase d'execution` :  sélectionnez la phase `Avant` pour que la modification du nom soit appliquée avant que le document soit persisté
* `Action` : pour réagir à une création, sélectionnez l'action `Créer`
* `Type d'objet` : choisissez le type `Document`
* `Activé` : cochez la checkbox pour activer votre abonnement
* `Autorisation` : renseignez la chaîne d'autorisation BASIC à l'aide de [Blitter](https://www.blitter.se/utils/basic-authentication-header-generator/) à partir de l'utilisateur défini dans le fichier *application.properties* (exemple : _Basic dG90bzoxMjM0_)

<br/>

Pour finir, validez la création de l'abonnement.


# Validation

Afin de tester que l'`OperationHook` implémenté est bien opérationnel : 

* créez un document par le moyen de votre choix (par exemple via la console d'administration)
* ouvrez le document créé

Si l'`OperationHook` a bien été configuré, le timestamp de la création a été ajouté au nom du doucment créé.

:::info
Si le nom n'a pas été modifié, vérifiez que l'`OperationHook` est bien démarré et accessible depuis FlowerDocs Core.
Si c'est bien le cas, consultez les logs pour plus de détails.
:::