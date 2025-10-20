---
title: Gestion des utilisateurs
description: Créez, modifiez, recherchez des utilisateurs
---

Le service `UserService` expose les opérations suivantes :

* `create` : pour créer un utilisateur 
* `get` : pour récupérer un utilisateur 
* `update` : pour modifier un utilisateur 
* `password` : pour modifier le mot de passe d'un utilisateur 
* `search` : pour rechercher des utilisateurs
* `delete` : pour supprimer unutilisateur

# Création et modification d'un utilisateur
## Modèle
Le modèle utilisé par les appels `create` et `update` se présente comme ceci: 
```json
{
  "id": "string",
  "firstname": "string",
  "lastname": "string",
  "displayName": "string",
  "mail": "string",
  "password": "string",
  "credentialsExpired": true,
  "attributes": [
    {
      "name": "string",
      "values": [
        "string"
      ]
    }
  ],
  "groups": [
    "string"
  ],
  "profiles": [
    "string"
  ]
}
```
Voici la description associée à l'ensemble des données de l'appel :

* `id` : identifiant unique de l'utlisateur
* `firstname`, `lastname`, `displayName` et `mail` : informations de l'utilisateur
* `password` : mot de passe
* `profiles` et `groups` : listes respectives des profils utilisateur et groupes auxquelles appartient cet utilisateur
* `attributes` : liste d'attributs supplémentaires 
* `credentialsExpired` : si les identifiants de l'utilisateur sont expirés.

## Exemple
Les exemples ci-dessous indiquent comment créer et modifier un utilisateur.
POST {{core}}/rest/users/ HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) -- 
{
  "id": "exemple",
  "firstname": "Prénom",
  "lastname": "Nom",
  "displayName": "Utilisateur exemple",
  "mail": "exemple@gmail.com",
  "password": "mdp",
  "credentialsExpired": false,
  "attributes": [
  ],
  "groups": [
  ],
  "profiles": [
    "AllUsers", "eEnvelope"
  ]
}
	@Autowired
    private UserService userService;

    @PostMapping
    public void create() throws TechnicalException, FunctionalException
    {
        User user = new User(new Id("exemple"), "exemple d'utilisateur", "exemple@gmail.com", new ArrayList<Id>(),
                new ArrayList<Id>(), new ArrayList<IdentityAttribute>(), "prenom", "nom", "mdp", false);
        userService.create(user);
    }
POST {{core}}/rest/users/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant de l'utilisateur

-- Headers --
token: {token}
Content-Type: application/json

{
  "id": "exemple",
  "firstname": "Nouveau prénom",
  "lastname": "Nouveau nom",
  "mail": "exemple@gmail.com",
  "password": "mdp"
}
	@Autowired
    private UserService userService;
    
    @PostMapping("/update")
    public void update() throws TechnicalException, FunctionalException
    {
        Id id = new Id("exemple");
        User user = new User();
        user.setId(id);
        user.setFirstname("Nouveau prenom");
        user.setLastname("Nouveau nom");
        userService.update(user);
    }
# Récupération d'un ou plusieurs utilisateur(s)
## Modèle
Les paramètres à renseigner sont :

|Nom|Description|
|------|-----------|
|`ids`|Les identifiants uniques des utilisateurs à remonter (séparés par une virgule)|
|`resolveAuthorities`|Détermine si les profils et les groupes doivent être remontés|

## Exemple
L'exemple ci-dessous indique comment récupérer des utilisateurs.
GET {{core}}/rest/users/{ids}?resolveAuthorities={resolveAuthorities} HTTP/1.1

-- Paramètres d'URL -- 
core: host de FlowerDocs core
ids: identifiant des utilisateurs à récupérer
resolveAuthorities : false

-- Headers --
token: {token}

	@Autowired
    private UserService userService;

	@GetMapping
    public List<User> get() throws TechnicalException, FunctionalException
    {
        List<String> ids = Lists.newArrayList("exemple");
        return userService.get(ids, true);
    }

# Recherche d'un ou plusieurs utilisateur(s)
## Modèle
Le paramètre à renseigner est `search`, il correspond à la valeur recherchée. La recherche peut s'effectuer sur le nom, le prénom, le nom à afficher (`displayName`) ou l'identifiant de l'utilisateur, renseigné entièrement ou partiellement. 

## Exemple
L'exemple ci-dessous indique comment rechercher un utilisateur.
GET {{core}}/rest/users/search?name={name} HTTP/1.1

-- Paramètres d'URL -- 
core: host de FlowerDocs core
name: le nom de l'utilisateur

-- Headers --
token: {token}
   	@Autowired
    private UserService userService;

    @GetMapping("/search")
    public List<User> search() throws TechnicalException, FunctionalException
    {
        return userService.search("le");
    }

# Modifier le mot de passe d'un utilisateur
## Modèle
Les paramètres à renseigner sont :

|Nom|Description|
|------|-----------|
|`id`|L'identifiant unique de l'utilisateur|
|`newPassword`|Le nouveau mot de passe de l'utilisateur|

## Exemple
L'exemple ci-dessous indique comment modifier le mot de passe d'un utilisateur.
PUT {{core}}/rest/users/{id}/password HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
id: identifiant de l'utilisateur

-- Body --
{
	"password": newpassword
}
    @Autowired
    private UserService userService;

    @PutMapping("/password")
    public void changePassword() throws TechnicalException, FunctionalException
    {
        String id = "exemple";
        String newPassword = "NouveauPass";
        userService.changePassword(id, newPassword);
    }

# Supprimer un utilisateur
## Modèle
Le paramètre à renseigner est `id`, l'identifiant unique de l'utilisateur à supprimer.

## Exemple
L'exemple ci-dessous indique comment supprimer un utilisateur.
DELETE {{core}}/rest/users/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant de l'utilisateur

-- Headers --
token: {token}
    @Autowired
    private UserService userService;

    @DeleteMapping()
    public void delete() throws FunctionalException, TechnicalException
    {
        String id = "exemple";
        userService.delete(id);
    }
