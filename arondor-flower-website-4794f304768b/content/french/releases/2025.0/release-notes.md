+++
date = "2025-01-20T10:00:00+02:00"
title = "FlowerDocs 2025.0 Release notes"
tags = ["release-note"]
banner = "img/banner/edit.png"
 
+++


<br>

**Légende**


<br>

# Vue d’ensemble

La version 2025.0 apporte des améliorations significatives en termes de performance et d’utilisabilité. Parmi les points forts, on trouve la nouvelle version de la visionneuse ARender, un usage plus intuitif des versions, l’amélioration du traitement en série afin qu’il soit utilisable avec des tâches en auto assignation ou non et la possibilité directement depuis FlowerDocs de proposer vos idées pour faire évoluer le produit avec nos utilisateurs.


# Upgrade Notes

Vous pouvez retrouver les changements techniques importants de cette version en consultant l’upgrade notes [ici](broken-link.md)

# Pour les utilisateurs


Les performances de FlowerDocs ont été optimisées afin de garantir un usage fluide et ce quelque soit la volumétrie de documents, tâches et dossiers ou la complexité du modèle de données. Pour un test avec 100 utilisateurs en simultané et 1 000 000 de documents et tâches, le temps de parcours du scénario pour un utilisateur a été divisé par deux.   
Pour en savoir plus, vous pouvez consulter l’upgrade notes [ici](broken-link.md)


Cette nouvelle version de la visionneuse apporte des améliorations d’ergonomies significatives et permet de bénéficier d’un renforcement de la sécurité.

* **Menu rapide à la sélection de Texte**: Lors de la sélection d’un texte, un menu rapide apparaît sous le texte sélectionné permettant à l’utilisateur de copier, surligner, souligner rendant les interactions avec les documents plus rapides et efficaces.
{{< img src="/img/release-notes/ARender_MenuRapide.gif">}}

* **La barre d’outils est simplifiée et regroupée** pour une expérience plus conviviale. Les annotations et les boutons sont soigneusement organisés dans des sous-menus améliorant la productivité.
{{< img src="/img/release-notes/ARender_BarreOutilsSimplifiéeRegroupée.png">}}


* **Optimisation de la navigation au sein des documents affichés dans la visionneuse.**

Il est maintenant possible d’afficher toutes les pages, seulement la première page ou uniquement le titre pour les documents ouverts.
{{< img src="/img/release-notes/ARender_OptimisationNavigation.png">}}
ou encore de naviguer au sein des documents à l’aide d’une liste
{{< img src="/img/release-notes/ARender_NavigationListeDocument.png">}}

* Le menu des biffures (fonctionnalité bêta) est déplacé à gauche pour faciliter la création et la consultation des biffures.  
{{< img src="/img/release-notes/ARender_Biffure.png">}}

Pour en savoir plus, vous pouvez consulter les releases notes ARender : [ici](https://hub.arender.io/technical-blog)


Afin de bénéficier de toute la connaissance en matière d’ergonomie sur les annotations, FlowerDocs utilise la configuration standard de la visionneuse pour les annotations, notamment sur les couleurs utilisées par défaut.  
Il est possible de modifier certaines configurations standards en suivant la documentation présente [ici](broken-link.md)


La gestion des rotations de page a été optimisée pour permettre un traitement plus efficace. Dans cette nouvelle version, un utilisateur n’a pas besoin d’avoir le droit d’annoter pour sauvegarder la rotation d’une page. Par défaut, dès lors qu’un utilisateur a le droit de consulter un document, il a le droit de tourner les pages mal orientées et les modifications apportées sont automatiquement sauvegardées.  
🛠️ Détails techniques :   
Création d’une nouvelle ACL: acl-rotation qui est appliquée à toutes les annotations de type rotation. Pour en savoir plus, vous pouvez consulter l’upgrade notes [ici](broken-link.md)


L’affichage des versions a été modifié dans l’historique d’un document et pour la consultation d’une version afin de proposer une expérience utilisateur plus efficace.  
Les versions antérieures ont un nouvel icône de couleur bleu pour les identifier plus rapidement dans l’historique.  
{{< img src="/img/release-notes/Version_PopUpHistoriqueVersions.png">}}
La consultation d’une version antérieure se fait dans un nouvel onglet, dans lequel les actions proposées ont été repensées pour proposer les fonctionnalités applicables sur une version dont la comparaison avec la version de travail.
{{< img src="/img/release-notes/Version_Consultation.png">}}


La recherche a été améliorée en homogénéisant les libellés des menus de recherche et en modifiant le moteur d’extraction de texte pour la recherche plein texte.   
FlowerDocs utilise le moteur d’extraction fourni par ARender à la place de la librairie Tika pour garantir des meilleures performances notamment pour le nombre maximum de caractères extraits, nos tests sont allés jusqu’à 5 millions de caractères.  
La fonctionnalité d’export zip de l’ensemble des documents retournés en résultat de recherche a été supprimée pour des soucis de performances et d’utilisabilité. Il est toujours possible d’exporter le contenu des documents retournés en résultat en sélectionnant ceux souhaités.


Les utilisateurs peuvent indexer des documents ou traiter des tâches à partir d’un tableau de résultats pour gagner en efficacité grâce au traitement en série. Les actions s’enchaînent sans revenir sur le résultat de recherche ou la banette de traitement.  
{{< img src="/img/release-notes/Traitement en série.gif">}}
Pour en savoir plus, vous pouvez consulter la documentation [ici](broken-link.md)


Grâce à l’intégration d’un portail d’idées au sein de FlowerDocs, chaque utilisateur peut soumettre les évolutions qu’il aimerait voir dans le produit à l’équipe Uxopian Software. Cela permet de récolter des informations précieuses pour prioriser et proposer des nouvelles fonctionnalités et des améliorations significatives pour tous les utilisateurs.  
{{< img src="/img/release-notes/PortailIdées.png">}}


La dernière version FlowerDocs poursuit son chemin vers une compatibilité avec les normes d’accessibilité WCAG 1 niveau A et RGAA. L’accent a été mis sur l’administration, la recherche et le menu de navigation pour cette version.  
Pour faciliter l’accès à la déclaration d’accessibilité, celle-ci a été déplacée dans le menu “Informations du produit”

## Fonctionnalités supprimées

Les fonctionnalités suivantes ont été supprimées:

  Cette fonctionnalité était en doublon avec le raccourci de création présent dans la bannière de FlowerDocs.
{{< img src="/img/release-notes/BoutonRaccourciSupprimé.png">}}

# Pour les intégrateurs

<span style="color: #FF0000"> **Les APIs SOAP sont dépréciées à partir de cette version, il faut utiliser les APIs REST proposées par FlowerDocs.**</span>


Le Swagger est accessible via une nouvelle URL: `/core/swagger-ui/index.html,` l’ancienne URL: `/core/swagger-ui.html` n’est plus disponible.


Génération d’un flowerdocs-starter client regroupant l’ensemble des librairies Java pour réaliser des développements. Pour en profiter il faut mettre à jour les pom des applications.


La gestion des permissions a été simplifiée pour les éléments suivants:

* La permission READ\_OBFUSCATION (Voir les obfuscations) est dépréciée, seule la permission OBFUSCATE (Créer et voir les obfuscations) est utilisée.  
* Pour mettre à jour le contenu d’un document, il faut explicitement avoir le droit UPDATE\_CONTENT, la combinaison ADD\_CONTENT et DELETE\_CONTENT est dépréciée, elle ne donnera plus le droit de modifier le contenu.


Le moteur JavaScript Nashorn est remplacé par GraalJS. Pour en savoir plus, consulter l’upgrade note [ici](broken-link.md)


Deux nouvelles APIs sont disponibles:

* Pour renommer le nom du fichier associé à un document: `/core/rest/documents/{id}/files/{fileId}/name`  
* Pour envoyer, récupérer ou supprimer le contenu textuel d’un document dans FlowerDocs: `/core/rest/documents/{id}/files/{file}/content/index`


* API WS: Les services de modification ou suppression d’un document renvoient une exception si l’identifiant indiqué ne correspond pas à l’identifiant de la version courante du document.  
* API WS: Un nouveau WS REST est disponible pour récupérer une version précise d’un document: `/core/rest/documents/{documentId}/versions/{versionId}`  
* API JS: La méthode registerForComponentChange n’est plus appelée à l’ouverture d’une version, afin de pouvoir faire des actions seulement à l’ouverture du document.

## Fonctionnalités supprimées


# Pour les exploitants


L'interface graphique ARender est désormais une application à part entière et n'est plus embarquée dans FlowerDocs GUI. Pour en savoir plus, vous pouvez consulter l’upgrade notes [ici](broken-link.md)


Suppression des indexes OpenSearch inutilisés: 

* \*-flower-docs-content  
* \*-flower-docs-version

Pour en savoir plus, vous pouvez consulter l’upgrade notes [ici](broken-link.md)


FlowerDocs supporte la norme RFC 2183 pour le header Content-Disposition permettant une meilleure gestion des caractères accentuées.

## Fonctionnalités supprimées


# Bug fixes

| Bug | Ticket support |
| :---- | :---- |
| **Utilisateurs** |  |
| ARender \- Les documents respectent l’ordre d’affichage des pièces jointes même si un eml est présent en pièce jointe | TMAFLW-343 |
| Recherche \- Lors d’une recherche sur le contenu, aucune colonne vide ne s’ajoute au tableau de résultat | TMAFLW-563 / TMAFLW-569 |
| Recherche \- Les recherches sont performantes même quand il y a un grand nombre d'ACLs | TMAFLW-615 |
| Recherche \- Lors d'une première exécution de recherche si la valeur d'une suggestion est validée par la touche Entrée, elle est prise en compte | TMAFLW-700 |
| Recherche \- Après une réinitialisation les opérateurs ont leur valeur initiale | TMAFLW-829 |
| Recherche plein texte \- La recherche de contenu est fonctionnelle pour les documents au format paysage | TMAFLW-489 |
| Recherche plein texte est fonctionnelle avec le chiffrement FlowerDocs | TMAFLW-791 |
| Document \- La fonction "Ajouter une nouvelle version" est pas opérationnelle même si le document n'a pas de contenu | TMAFLW-613 |
| Pour les tags de type Date, la valeur affichée dans le tooltip correspond à la valeur saisie | TMAFLW-680 |
| Rapport sur la page d’accueil (Dashlet) \- Après la modification d’un rapport celui-ci est cliquable pour accéder à la recherche | TMAFLW-804 |
| Un tag de type Boolean n’est pas modifiable s’il est configuré en lecture seule | TMAFLW-805 |
| Un document peut être créé ou mis à jour avec une date comprise entre 07/09/1969 07:13:21 et 28/12/1969 15:48:44 | TMAFLW-853 |
| **Intégrateurs** |  |
| Administration \- Un utilisateur peut être ajouté dans un groupe vide | TMAFLW-802 |
| API JS \- setReadOnly est fonctionnel sur les formulaires de recherche | TMAFLW-721 |
| API WS \- La mise à jour d’un document via les WS sans définir d’identifiant de fichier préserve le contenu et met seulement à jour les tags | TMAFLW-733 |
| API \- WS revue des codes d’erreurs | TMAFLW-862 |
| OH \- En cas de mise à jour multiple de composant, le traitement n’est plus stoppé à la première exception | TMAFLW-600 |
| CLM \- Le job de chiffrement de mot de passe est fonctionnel | TMAFLW-712 |
| Permission \- Possibilité de mettre à jour les tags d’un document avec seulement la permission UPDATE | TMAFLW-734 |
| Permission \- Accès au document ou au contenu de celui-ci avec respectivement les permissions READ et READ\_CONTENT | TMAFLW-788 |
| **Exploitants** |  |
| Le core démarre avec un connecteur FileSystem et le chiffrement activé | TMAFLW-776 |
| API WS \- Le endpoint remontant les historiques de connexion renvoie l’historique de connexion avec ou sans date spécifiée | TMAFLW-644 |

# Anomalies connues

* Recherche plein texte \- L’extraction de texte des documents e-mail n’est plus fonctionnelle  
* Recherche \- Lors de l’utilisation d’un critère de type date dans un format: date complète, les heures, minutes et secondes ne sont plus prises en compte.  
* Traitement en série \- Lorsque le traitement en série est activé dans un menu, quand l’utilisateur ouvre un composant (document, tâche ou dossier) puis une pop-up (ajout d’un document par exemple) puis annule alors il revient sur le menu au lieu de revenir sur le composant ouvert.  
* Tableau de résultat \- État instable des icônes affichés pour les tâches si le class id n’est pas présent dans les colonnes et que ces dernières sont modifiées.  
  