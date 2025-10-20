---
title: Mise en place du modèle
---

Gardons l'exemple du dossier client évoqué précédemment pour tester la mise en place d'un cas concret.

<br/>

# La référence client

La référence client est, dans cet exemple, le tag pivot permettant de faire le lien entre un dossier client et son contenu.
Pour commencer, créez une classe de tag `ReferenceClient` de type chaîne de caractères.

Pour cela, suivez les étapes ci-dessous :

* Allez dans la console d'administration,
* Ouvrez la section `Composants > Classes de tags`,
* Cliquez sur le bouton `+` pour démarrer la création,
* Sélectionnez le type de valeur `Chaîne de caractères` puis passez à l'étape suivante,
* Dans le formulaire affiché, saisissez la valeur `ReferenceClient` comme identifiant de cette classe de tag,
* Cliquez sur `Créer`.

Bravo ! Vous avez créé la classe de tag `ReferenceClient` qui permettra de classer les documents d'un client au sein d'un même dossier.

# Le dossier client

Pour pouvoir créer les instances de dossiers clients, il est nécessaire de créer la classe de dossier virtuel `DossierClient` référençant la classe de tag `ReferenceClient`.

Pour cela, suivez les étapes ci-dessous :

* Allez dans la console d'administration,
* Ouvrez la section `Composants > Classes de dossiers virtuels`,
* Cliquez sur le bouton `+` pour démarrer la création,
* Dans le formulaire affiché, saisissez la valeur `DossierClient` comme identifiant de la classe, et sélectionnez `Sécurité Contrôle total` en valeur de Sécurité,
* Dans l'onglet `Tags`, cliquez le bouton `Ajouter` et sélectionnez la classe de tag `ReferenceClient`,
* Dans l'onglet `Recherche`, cliquez sur `Filtres` puis `Ajouter` pour initier une nouvelle recherche permettant de lier les document,
* Vérifiez la présence d'un identifiant au niveau de la recherche
* Indiquez 10 résultats à afficher dans `Affichage > Nombre de résultats`
* Ajoutez un critère de recherche avec pour nom l'identifiant `ReferenceClient`, l'opérateur `EQUALS_TO` et pour valeur la variable `${tags.ReferenceClient}`,
* Et pour finir, cliquez sur `Créer`.


# Les documents clients

Afin de créer des instances de documents clients, il est nécessaire de créer la classe de document `DocumentClient`.

Pour cela, suivez les étapes ci-dessous :

* Allez dans la console d'administration,
* Ouvrez la section `Composants > Classes de documents`,
* Cliquez sur le bouton `+` pour démarrer la création,
* Dans le formulaire affiché, saisissez la valeur `DocumentClient` comme identifiant de cette classe et `Sécurité Contrôle total` en valeur de Sécurité,
* Dans l'onglet `Tags`, cliquez le bouton `Ajouter` et sélectionnez la classe de tag `ReferenceClient`,
* Et pour finir, cliquez sur `Créer`.