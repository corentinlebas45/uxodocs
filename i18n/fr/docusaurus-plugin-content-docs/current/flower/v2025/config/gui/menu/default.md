---
title: Page par défaut
---

La page par défaut est celle affichée par défaut à la connexion.


Pour configurer la page par défaut, il suffit de rajouter une propriété sur le profil correspondant, par exemple : ``place.default=home``

Les différentes valeurs supportées sont : 


| Valeurs                          | Description                                                                                 |
|----------------------------------|---------------------------------------------------------------------------------------------|
|home                              | Page d'accueil                                                                              |
|search(templateName)              | Ecran de recherche avec nom de template de recherche facultatif                             |
|store        	                   | Ecran d'insertion de fichier                                                                |
|storeTask(id)        	           | Ecran de création de tâche                                                                  |
|admin       	                   | Console d'administration                                                                    |
|browse(id)                        | Onglet de consultation de dossier virtuel                                                   |
|componentResolve(templateName)    | Onglet de composant basé sur une recherche                                                  |

Deux cas particuliers : 

* La recherche : le mot clé `search` peut prendre un argument : ``search(search_template_id)``
* Les dossiers virtuels : il est nécessaire de préciser l'identifiant du dossier virtuel en paramètre