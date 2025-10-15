+++
date = "2000-01-01T13:20:01+02:00"
title = "Getting Started"
intro = "Personnaliser l'interface graphique FlowerDocs avec l'API JS."
+++

L'interface graphique FlowerDocs peut être personnalisée à l'aide de scripts écrits en JavaScript. 
Ces scripts permettent l'utilisation de la API JS afin d'enrichir et d'interagir avec l'interface.

Pour être exécutés, au sein du navigateur, ces scripts doivent être chargés à partir d'une URL accessible à partir du poste utilisateur.

<br/>
__Documents de classe Script__

Les documents stockés dans la GED avec la classe ``Script`` sont chargés côté client. Les utilisateurs devant charger ces documents doivent avoir la permission ``READ`` et ``READ_CONTENT`` pour pouvoir y accéder.

Ces fichiers JavaScript sont mis en cache côté client et sont renouvellés à chaque mise à jour.


<br/>
__Scripts externes__

Des scripts externes peuvent être chargés côté client en incluant des ressources WEB dont les URL sont concaténées dans la propriété  ``js.api.scripts`` (séparées par des ``,``). Les URL définies doivent être accessibles depuis les postes clients.

Si ces scripts sont amenés à changer, les URL doivent être suffixées (par exemple avec ``?version``) afin de forcer le navigateur à les renouveler.


