+++
date = "2025-06-02T08:10:01+02:00"
title = "FlowerDocs 2025.1 Release notes"
tags = ["release-note"]
banner = "img/banner/edit.png"
 
+++


<br>

**Légende**


<br>

# Vue d’ensemble

La version 2025.1 introduit des avancées majeures en termes de fonctionnalité et d'expérience utilisateur. Elle apporte également des correctifs et améliorations de sécurité (CVE).
Parmi les points marquants, on note une refonte de la page de connexion pour un meilleur confort visuel, une simplification pour l'ajout de documents tant pour les utilisateurs que via API, et une recherche plein texte optimisée.


# Upgrade Notes

Vous pouvez retrouver les changements techniques importants de cette version en consultant l’upgrade notes [ici](broken-link.md)

# Pour les utilisateurs


La page de connexion a été modifiée pour offrir un meilleur confort visuel aux utilisateurs. Selon le paramétrage réalisé, la page de connexion propose une authentification via un identifiant et un mot de passe et / ou via Single Sign-On.
{{< img class="blog-post-img-auto" src="/img/release-notes/PageConnexion_FR.png">}}


De nouvelles manières d’ajouter un document manuellement au sein de FlowerDocs ont été ajoutées afin de diminuer le nombre d’actions réalisées par les utilisateurs pour un gain de temps important.

Pour ajouter un document au sein de FlowerDocs sans contexte précis, il est maintenant possible de **glisser / déposer un fichier** depuis son poste de travail vers le bouton “+” de la bannière.
{{< img src="/img/release-notes/AjoutDocD&D_FR.gif">}}

Selon le paramétrage réalisé, il est aussi possible d’ajouter un document **directement dans un dossier virtuel** par le bouton “Ajouter un document” ou par glisser / déposer directement dans la zone de plan de classement. L’indexation du nouveau document reprend celle du dossier automatiquement pour simplifier l’indexation et éviter les erreurs.
{{< img src="/img/release-notes/AjoutDocDossier_FR.gif">}}

*\* La présence du bouton “+” ou du bouton “Ajouter un document” dans un dossier virtuel dépendent du paramétrage réalisé.*


La recherche plein texte a été optimisée, en permettant l’usage “” pour effectuer des recherches strictes et extrayant le texte des documents zip.

Le ou les mots recherchés sont aussi **mis en évidence automatiquement dans la visionneuse**, afin de permettre aux utilisateurs de détecter rapidement pourquoi le document est remonté dans les résultats de recherche. 
{{< img src="/img/release-notes/RecherchePleinTexte_FR.gif">}}

*\* pour rappel, la recherche plein texte est activable par du paramétrage*


La restauration d’une version est possible directement depuis la version consultée afin de restaurer la version souhaitée plus simplement et rapidement.
{{< img class="blog-post-img-auto" src="/img/release-notes/Restore_FR.png">}}


Le traitement en série est disponible suite une ouverture dans la même fenêtre ou une assignation à soi-même depuis le menu contextuel afin de répondre à tous les usages.  
{{< img src="/img/release-notes/TraitementSerie_FR.gif">}}

Cette fonctionnalité n’est pas disponible lors d’une ouverture dans une nouvelle fenêtre afin d’éviter des erreurs ou des incompréhensions entre des sessions de traitement différentes.


Les informations concernant le produit comme la version installée sont déplacées du menu de l’avatar vers le menu.
{{< img src="/img/release-notes/MenuAPropos_FR.gif">}}


Cette nouvelle version de la visionneuse permet de bénéficier d’un renforcement de la sécurité ainsi que des nouveautés suivantes:

* La désactivation des notifications d’informations (de couleur bleu), pour faciliter la consultation des documents. Les notifications d’erreur sont toujours présentes pour prévenir d’un comportement anormal.  
    
* L’intégration avec Mixpanel qui fournit des données d'utilisation anonymes à l'équipe Uxopian, permettant des améliorations guidées par les données pour ARender. Aucune information personnelle ou sensible n'est collectée, garantissant une conformité totale avec le RGPD, le California Consumer Privacy Act (CCPA) et d'autres normes mondiales en matière de protection des données.  
En centralisant ces données anonymes, nous obtenons des informations précieuses sur l'utilisation des fonctionnalités, nous permettant de prioriser les mises à jour et de proposer des améliorations significatives pour tous les utilisateurs.  
Il est possible de modifier cette configuration par défaut en suivant la documentation présente [ici](broken-link.md)

**Transparence avant tout :**  
Notre approche en matière de collecte et d'utilisation des données est entièrement documentée, garantissant clarté et confiance :
[En savoir plus sur l'analyse produit](https://docs.arender.io/fr/learn/product-analytics/)


# Pour les intégrateurs


Ajout de la colonne Asynchrone dans le tableau des Operations Handlers pour faciliter les analyses.
{{< img src="/img/release-notes/OHTableau_FR.png">}}


Pour limiter les classes de documents créées depuis un dossier virtuel directement, un nouveau paramètre a été ajouté : children
{{< img src="/img/release-notes/DossierClientEnfant_FR.png">}}{{< img class="blog-post-img-auto" src="/img/release-notes/DossierClientEnfant_XML.png">}}
Pour en savoir plus, consulter l’upgrade note [ici](broken-link.md)


Le Command Line Manager (CLM) a été modifié pour faciliter son usage lors d’une mise à jour du modèle de données avec un import. Le fichier scope.xml n’est plus obligatoire ce qui permet de garder le paramétrage réalisé pour les équipes.  
La documentation est [ici](broken-link.md).


Deux nouvelles APIs REST sont disponibles pour : 

* Créer un document avec le fichier associé en un seul appel à la place des appels successifs : création d’un fichier temporaire, création d’un document puis lier le fichier temporaire au document : `/core/rest/documents/unique`
    
* Mettre à jour un document pour ajouter un fichier en un seul appel à la place des appels successifs : création d’un fichier temporaire puis lier le fichier temporaire au document : `/core/rest/documents/{id}/unique`

Ces deux nouvelles APIs permettent de simplifier la création ou la mise à jour d’un document et de faciliter la gestion des erreurs pour les applications consommant les services FlowerDocs.


La configuration de la page de connexion permet d’activer seulement la connexion en SSO (Single Sign On) pour accentuer la sécurité de la plateforme.
Pour en savoir plus, consulter l’upgrade note [ici](broken-link.md).

# Pour les exploitants


Revue du fonctionnement des tags de type User afin de faire moins d’appel à l’annuaire pour récupérer les utilisateurs lors du peuplement des listes proposant les utilisateurs.


Un utilisateur peut ajouter des documents, des tâches ou des dossiers en favoris, sauvegarder des recherches et personnaliser FlowerDocs pour qu’il réponde au mieux à ses attentes. Ses informations lui sont propres et sont donc supprimées lorsque l’utilisateur est supprimé de FlowerDocs, afin de ne pas stocker des informations orphelines.

Les recherches sauvegardées d’un utilisateur qui ont été partagées à d’autres utilisateurs sont gardées afin de ne pas perturber leur usage.


Les indexes OpenSearch sont désormais requêtés via leurs alias au lieu de leur nom afin de faciliter les opérations d'exploitation. Il est toujours possible de requêter l’index directement, mais ce fonctionnement est déprécié. Pour en savoir plus, consulter l’upgrade note [ici](broken-link.md).


* Une nouvelle API a été créée pour permettre de purger le cache de la GUI plus facilement : `/{gui}/rest/caches/{cacheNames}`.
Plus de détail [ici](broken-link.md)

* L’API permettant d’avoir le statut des machines Core ne nécessite plus d’authentification afin de faciliter les mécanismes de monitoring de la plateforme : `{core}/actuator/status`

# Bug fixes

| Bug | Ticket support |
| :---- | :---- |
| **Utilisateurs** |  |
| Recherche plein texte \- L’extraction de texte des e-mails est fonctionnelle |  |
| Recherche \- Le caractère & est interprété comme un caractère standard et non comme un séparateur de valeurs. | TMAFLW-761 |
| Dossier physique \- Quelque soit la configuration du poste utilisateur (taille de la fenêtre), les dossiers ou les documents enfants s’affichent correctement | TMAFLW-540 |
| Dossier virtuel \- Quelque soit la configuration du poste utilisateur, la liste des documents s’affichent. | TMAFLW-594 TMAFLW-866 |
| Dossier virtuel \- Le ratio entre le panel du formulaire d’indexation et le panel de la visionneuse ou de la liste des documents, paramétré dans le fichier de configuration est respecté quelque soit la configuration du poste de travail | TMAFLW-650 |
| Dossier virtuel \- Les données pouvant être ajoutées en colonne dans les tableaux, sont toujours disponibles quel que soit l’affichage souhaité par l’utilisateur | TMAFLW-1019 |
| Tag de type Currency \- La virgule ou le point sont acceptés comme séparateur entre la partie entière et la partie décimal | TMAFLW-876 |
| Connexion SSO \- La connexion SSO est toujours disponible même après un redémarrage de la plateforme | TMAFLW-971 |
| Tâche \- Les utilisateurs peuvent annoter un document en pièce jointe d’une tâche même si celle-ci est en lecture seule. Cela dépend des droits accordés sur le document en pièce jointe | TMAFLW-1006 |
| Tâche \- L’icône des tâches est toujours affiché dans les colonnes d’un tableau de résultat même si celui-ci n’a pas la colonne class id |  |
| Traitement en série \- Lorsque le traitement en série est activé, si l’utilisateur ouvre un composant puis une pop-up d’ajout ou d’indexation de document par exemple et annule ces actions alors il revient sur le composant |  |
| **Intégrateur** |  |
| CLM \- Le CLM (Command Line Manager) est fonctionnel en https, l’erreur SSL présente auparavant, pouvant laisser penser qu’il y avait un problème n’existe plus |  |
| Gestion des erreurs des fichiers GUIConfiguration \- Les erreurs des fichiers GUIConfiguration sont mieux gérées. Les fichiers sans erreur sont chargés même si un fichier présente une erreur et le message d’erreur explicite clairement le fichier posant problème | TMAFLW-840 |
| Pièce jointe de tâche \- Les tâches sont sauvegardées avec en pièce jointe des classes de document contenant les caractères spéciaux autorisés | TMAFLW-1001 |

# Anomalies connues

* Les nouveaux endpoint pour créer ou mettre un document en lui associant directement un fichier ne sont pas fonctionnels depuis Swagger.
* La mise en évidence du ou des mots recherchés dans la visionneuse après une recherche plein texte ne fonctionne pas lors de toute première consultation (première ouverture de document ou ouvrir dans une nouvelle fenêtre). Une seconde ouverture ou un rafraîchissement de la page permet de la mise en évidence des mots sans avoir à faire une recherche au sein de la visionneuse.

# FlowerDocs eProcess

## Pour les utilisateurs


Les rapports de forme donut ou histogramme disponibles pour l’ensemble des utilisateurs, sont cliquables afin d’accéder de manière plus intuitive et plus rapide aux enveloppes depuis la page d’accueil.  
{{< img src="/img/release-notes/WidgeteProcess_FR.gif">}}


L’ajout de document dans un dossier a été modifié afin de bénéficier de toutes les évolutions ergonomiques de FlowerDocs au sein de eProcess. Pour plus d’informations c’est [ici](broken-link.md).

## Pour les exploitants


Revue du fonctionnement pour l’assignation des enveloppes à un utilisateur donné afin de faire moins d’appel à l’annuaire pour récupérer les utilisateurs habilités à eProcess.

## Bug fixes

| Bug | Ticket support |
| :---- | :---- |
| **Exploitants** |  |
| Les API eProcess pour créer ou modifier une enveloppe ont été modifiées pour mettre en cache les classes de tags et leurs valeurs afin d’éviter une dégradation de la performance lors de l’usage. |  |

# FlowerDocs GEC

## Pour les utilisateurs


Les rapports de forme donut ou histogramme disponibles pour l’ensemble des utilisateurs, sont cliquables afin d’accéder de manière plus intuitive et plus rapide aux courriers depuis la page d’accueil.
{{< img src="/img/release-notes/WidgetGEC_FR.gif">}}


L’ajout de document dans un dossier a été modifié afin de bénéficier de toutes les évolutions ergonomiques de FlowerDocs au sein de GEC. Pour plus d’informations c’est [ici](broken-link.md).