+++
date = "2018-05-02T12:20:01+02:00"
title = "User management"
description = "Create, modify, search for users"
+++
The `UserService` service exposes the following operations:

* `create`: to create a user 
* `get`: to retrieve a user 
* `update`: to modify a user 
* `password`: to change a user's password 
* `search`: to search for users
* `delete`: to delete a user

# Creation et modification d'un user
## Model
The model used by `create` and `update` calls looks like this: 
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
Here is the description associated with the call data set:

* `id`: unique user identifier
* `firstname`, `lastname`, `displayName` and `mail`: user information
* `password`: password
* `profiles` and `groups`: respective lists of user profiles and groups to which this user belongs
* `attributes`: list of additional attributes 
* `credentialsExpired`: if the user's credentials have expired.

## Example
The examples below show how to create and modify a user.
POST {{core}}/rest/users/ HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) -- 
{
  "id": "example",
  "firstname": "Firstname",
  "lastname": "Name",
  "displayName": "Firstname name",
  "mail": "example@gmail.com",
  "password": "password",
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
        User user = new User(new Id("example"), "example user", "example@gmail.com", new ArrayList<Id>(),
                new ArrayList<Id>(), new ArrayList<IdentityAttribute>(), "firstname", "lastname", "mdp", false);
        userService.create(user);
    }
POST {{core}}/rest/users/{id} HTTP/1.1

-- URL parameters --
core: hostFlowerDocs Core host: user identifier

-- Headers --
token: {token}
Content-Type: application/json

{
  "id": "example",
  "firstname": "New first name",
  "lastname": "New name",
  "mail": "example@gmail.com",
  "password": "password"
}
	@Autowired
    private UserService userService;
    
    @PostMapping("/update")
    public void update() throws TechnicalException, FunctionalException
    {
        Id id = new Id(“example");
        User user = new User();
        user.setId(id);
        user.setFirstname("New first name");
        user.setLastname("New name");
        userService.update(user);
    }
# Recovery of one or more users
## Model
The parameters to be entered are :

|Name|Description|
|------|-----------|
|`ids`|Unique identifiers of users to be tracked (separated by commas)|
|`resolveAuthorities`|Determines whether profiles and groups are to be remounted|

## Example
The example below shows how to retrieve users.
GET {{core}}/rest/users/{ids}?resolveAuthorities={resolveAuthorities} HTTP/1.1

-- URL parameters -- 
core: hostFlowerDocs Core hosts: user IDs to be retrieved
resolveAuthorities : false

-- Headers --
token: {token}

	@Autowired
    private UserService userService;

	@GetMapping
    public List<User> get() throws TechnicalException, FunctionalException
    {
        List<String> ids = Lists.newArrayList("example");
        return userService.get(ids, true);
    }

# Search for one or more user(s)
## Model
The parameter to be entered is `search`, and corresponds to the searched value. The search can be based on the user's surname, first name, the name to be displayed (`displayName`) or the user's ID, either fully or partially filled in. 

## Example
The examples below show how to create and modify a user.
GET {{core}}/rest/users/search?name={name} HTTP/1.1

-- URL parameters -- 
core: hostFlowerDocs Core hostme: user name

-- Headers --
token: {token}
   	@Autowired
    private UserService userService;

    @GetMapping("/search")
    public List<User> search() throws TechnicalException, FunctionalException
    {
        return userService.search("le");
    }

# Changing a user's password
## Model
The parameters to be entered are :

|Name|Description|
|------|-----------|
|`id`|The user's unique identifier|
|`newPassword`|The user's new password|

## Example
The example below shows how to change a user's password.
PUT {{core}}/rest/users/{id}/password HTTP/1.1

-- URL parameters --
core: hostFlowerDocs Core host-- Headers --
token: {token}
id: user identifier

-- Body --
{
	"password": newpassword
}
    @Autowired
    private UserService userService;

    @PutMapping("/password")
    public void changePassword() throws TechnicalException, FunctionalException
    {
        String id = "example";
        String newPassword = "NewPass";
        userService.changePassword(id, newPassword);
    }

# Delete a user
## Model
The parameter to be entered is `id`, the unique identifier of the user to be deleted.

## Example
The example below shows how to delete a user.
DELETE {{core}}/rest/users/{id} HTTP/1.1

-- URL parameters --
core: hostFlowerDocs Core host: user identifier

-- Headers --
token: {token}
    @Autowired
    private UserService userService;

    @DeleteMapping()
    public void delete() throws FunctionalException, TechnicalException
    {
        String id = "example";
        userService.delete(id);
    }
