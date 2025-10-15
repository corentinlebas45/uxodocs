+++
date = "2018-04-02T12:20:31+01:58"
title = "Récupérer les profils utilisateurs"
description = "Rechercher des profils utilisateur"
+++
Le service `ProfileUserRestController` expose les opérations suivantes :
* `search` : pour rechercher des profils utilisateur
# Recherche de profil utilisateur
L’exemple ci-dessous indique comment effectuer une recherche de profil utilisateur.
<br/>
SEARCH:
[shortcode]
[shortcode]
GET {{core}}/rest/profiles/{profiles}/users/{username}?max={max} HTTP/1.1
-- Paramètres d'URL --
core: host de FlowerDocs core
profiles : profile (équipe)
username : identifiant à rechercher
max : 1, nombre maximal de résultat retourné (optionnel) 
-- Headers --
token: {{token}}
Content-Type: application/json
[shortcode]
[shortcode]
@Autowired
private ProfileUserRestController profileUser;
@GetMapping
public List<User> search() throws TechnicalException, FunctionalException
{
	String[] profiles = {"ALL_USERS"};
	String id = "exemple";
	int max = 1;
	return profileUser.search(profiles, id, max);
}
[shortcode]