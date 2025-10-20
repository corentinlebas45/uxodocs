---
title: Overview
description: Ouvrez vos propres popups.
---

Différents types de popup peuvent être instanciés ou modifiés : 

* Création de composants
* Affichage de métadonnées de composant existant
* Activité
* Recherche
* Contenu DOM
* Liaison d'un document à un dossier parent
* Confirmation d'un choix utilisateur

<br/>

Ces popups peuvent être instanciées à l'aide de l'API JS : 

```javascript
    JSAPI.get().getPopupAPI();
```

<br/>

Afin de modifier les différents attributs communs des popups, les fonctions suivantes sont à disposition : 


| Fonction                                              | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|setIcon(String iconStyle)                              | Définition de l'icone de la popup                                              |        
|setTitle(String title)                                 | Définition du titre de la popup                                                |
|setDescription(String description)                     | Définition de la description de la popup                                       |
|addStyle(String style)                                 | Ajout d'un style sur la popup                                                  |
|setContent(Element content)                            | Ecrase le contenu existant du corps de la popup                                |
|addContent(Element element)                            | Ajout d'un élément dans le corps la popup                                      |
|clearContent()                                         | Vide le contenu du corps de la popup                                           |
|setClosable()                                          | Active la possibilité de fermer la popup avec la croix de la popup             |
|addCloseHandler(CloseCallback callback)                | Ajout d'un callback sur la fermeture de la popup                               |
|show()                                                 | Ouverture de la popup                                                          |
|close()                                                | Fermeture de la popup                                                          |
|setAutoCloseOnEnter(boolean autoCloseOnEnter)                                                | Fermeture de la popup en appuyant sur Entrée                                                          |
<!---
 |setScrollable()                                        | Active le scroll sur le corps de la popup                                      | 
-->