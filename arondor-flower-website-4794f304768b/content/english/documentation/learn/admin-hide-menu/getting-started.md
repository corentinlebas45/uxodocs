+++
date = "2020-01-01T12:20:01+02:00"
title = "Getting Started"
Order = 1
Theme = "dev"
Icon = "fa fa-table-list"
Description = "Display only the tabs or sub-menus you want according to user profiles in Administration"
Duration = "20m" 
+++

# Goal

In this module, we will look at how to hide tabs or submenus depending on the current user's profile. 


# Before getting started

This tutorial is based on [retrieving the teams to which the current user belongs via the FlowerDocs JS API](broken-link.md).

In this training course we will only use the `ADMIN` or `MANAGER` profiles. It is therefore necessary to have a scope containing these user profiles. 

Users belonging to `ADMINs` will have access to all tabs, while `MANAGERs` will not have access to the following tabs: 

* Memory diagnostics	
* Proxies
* Users 
* Directories
* OAuth
* CSS
* XML
* Plugins 
* Operations subscriptions  
* Historical facts 		
* Email servers 	

