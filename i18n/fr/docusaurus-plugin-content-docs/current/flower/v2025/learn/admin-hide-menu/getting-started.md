+++
date = "2020-01-01T12:20:01+02:00"
title = "Getting Started"
Order = 1
Theme = "dev"
Icon = "fa fa-table-list"
Description = "Affichez uniquement les onglets ou sous menus souhaités en fonction des profils utilisateur dans l'Administration"
Duration = "20m" 
+++

# Objectif

Dans ce module, nous verrons comment masquer des onglets ou sous menus en fonction des profils de l'utilisateur courant. 


# Avant de commencer

Ce tutoriel est basé sur [la récupération des équipes auxquelles appartient l'utilisateur courant via l'API JS FlowerDocs](broken-link.md).

Dans cette formation nous utiliserons uniquement les profils `ADMIN` ou `MANAGER`. Il est donc nécessaire d'avoir un scope contenant ces profils d'utilisateurs. 

Les utilisateurs faisant partie des `ADMINs` auront accès à tous les onglets tandis que les `MANAGERs` n'auront pas accès aux onglets suivants : 

* Diagnostique mémoire	
* Proxys
* Utilisateurs 
* Annuaires
* OAuth
* CSS
* XML
* Plugins 
* Abonnements aux opérations  
* Faits d'historiques 		
* Serveurs email 	

