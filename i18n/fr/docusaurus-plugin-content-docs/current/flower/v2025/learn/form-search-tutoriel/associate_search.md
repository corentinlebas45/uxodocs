---
title: Association
root: false
---

{{%info%}}

Associer la recherche à une équipe d'utilisateurs pour la rendre utilisable.

{{%/info%}}

</br>

Pour ce faire : 

</br>

* Allez dans le menu **Administration > Identités > Equipe**,
* Choisissez l'équipe d'utilisateurs à laquelle associer le formulaire (ici `ALL_USERS`),
* Dans l'onglet **Propriétés**, cliquez sur le bouton **+** (en haut de la liste des propriétés) pour créer la nouvelle propriété en bas de la page,
* Choisissez **Template de recherche** dans la liste déroulante,
* Renseignez le champ `Valeur` avec **dossierClientSearch(fr=Dossiers Clients,en=Customer folders)**,
* Cliquez sur le bouton **Sauvegarder**.

</br>

*Note : Le champ `Valeur` respecte un format : `<identifiant>(<langue>=<libellé>,<langue2>=<libellé2>)`. L'identifiant étant l'id et le libellé son nom dans la langue renseignée.*

</br>

Maintenant la recherche avancée est accessible et désormais utilisable via le menu **Rechercher > Dossiers Clients**  :

</br> 

{{< img src="/img/documentation/learn/flowerDocs_search_advanced.png">}}