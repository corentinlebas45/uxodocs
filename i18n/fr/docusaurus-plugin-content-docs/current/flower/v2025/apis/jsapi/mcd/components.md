+++
date = "2001-02-01"
title = "Les composants"
Description = "Manipuler des composants en JavaScript"
+++

:::info
Les [composants](broken-link.md) sont les objets principaux utilisés par FlowerDocs. 
Grâce à l'API JS, ils peuvent être manipulés par des scripts pour satisfaire des besoins spécifiques dans le développement de solutions verticales.
:::

# Instancier un composant

Chaque catégorie de composant peut être manipulée à l'aide de l'API JS à travers un objet spécifique. Pour instancier un composant, les constructeurs suivants peuvent être utilisés : 

```javascript
var newDocument = new Document();
var newTask = new Task();
var newFolder = new Folder();
var newVFolder = new VirtualFolder();
```	

Chacun de ces objets disposent de fonctions : 

* communes à tous les composants
* spécifiques / propres à une catégorie de composant

# Accès aux informations internes 
 
Plusieurs informations sont maintenues par la plateforme FlowerDocs pour des besoins internes au fonctionnement de la plateforme.
En fonction des informations, les fonctions suivantes sont exposées pour y accéder ou les modifier (_quand la modification est autorisée_) : 

| Fonctions                                             | Description                                                                    |
|-------------------------------------------------------|--------------------------------------------------------------------------------|
|getId()                                                | Récupération de l'identifiant du composant                                     |        
|setId(String id)                                       | Définition de l'identifiant du composant                                       |        
|getName()                                              | Récupération du nom du composant                                               |        
|setName(String name)                                   | Définition du nom du composant                                                 |        
|setClassId(String name)                                | Définition de la classe du composant                                           |        
|getClassId()                                           | Récupération de l'identifiant de la classe de composant                        |
|String getCategory()                                   | Récupération de la catégorie                                                   |
|getACL()                                               | Récupération de l'ACL référencée par le composant                              |
|setACL(String aclId)                                   | Définition de l'ACL à appliquer                                                |
|getStatus()                                            | Récupération du statut du composant                                            |
|setStatus(String status)                               | Définition du statut du composant (cf. Javadoc)                                |
|getVersion()                                           | Récupération de la version du composant                                        |
|setVersion(long version)                               | Définition de la version du composant                                          |
|getCreationDate()                                      | Récupération de la date de création du composant                               |
|getLastUpdateDate()                                    | Récupération de la date de mise à jour du composant                            |
|getOwner()                                             | Récupération du propriétaire du composant                                      |



# Gestion des tags

Les [tags](broken-link.md) d'un composant peuvent être manipulés grâce à l'API JS à l'aide de plusieurs fonctions.
La fonction `getTags()` permet de déterminer les tags déjà présents sur un composant en retournant un tableau contenant les noms de chacun des tags d'un composant.

## Ajout ou modification d'un tag

Pour ajouter un tag sur un composant, la fonction `addTag(name, value, readonly)` peut être utilisée. Le deuxième paramètre `value` peut être une chaîne de caractères ou un tableau de chaînes de caractères pour définir plusieurs valeurs.

L'utilisation de cette fonction pour un tag déjà présent sur le composant écrase les valeurs existantes. Elle permet ainsi de modifier les valeurs d'un tag.

Le troisième paramètre `readonly` est un booléen permettant d'indiquer si le tag doit être affiché en lecture seule ou non.

## Récupération d'un tag

Afin d'accéder aux valeurs d'un tag présent sur un composant, les fonctions `getTagValue(String name)` et `getTagValues(String name)` sont exposées sur l'objet composant. 
La première retourne la première valeur d'un tag (_chaîne de caractères_), la seconde retourne un tableau contenant l'ensemble des valeurs d'un tag.


[shortcode]
```javascript
var task = new Task();
task.addTag("Montant", "1234", false);
if(task.getTags().includes("Montant")){
    console.info('Le montant est de ' + task.getTagValue("Montant"));
}
```
[shortcode]



