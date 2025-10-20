---
title: Implementation
---

# Masquage des onglets

La propriété CSS suivante permet de masquer l'élément auquel elle est appliquée :
 
```css 
	display:none;
```
<br/> 
Nous allons donc appliquer le style `display: none` à tous [les éléments que nous souhaitons cacher](broken-link.md) :

```css
	.AdminPlace//tools//memory,
	.proxiesTab,
	.usersTab,
	.ldapsTab,
	.oauthTab,
	.stylesheetsTab,
	.xmlsTab,
	.pluginsTab,
	.core,
	.serversTab{display: none!important;}
```

<br/>
L'idée est d'ajouter le style à l'ouverture de FlowerDocs. Pour cela nous allons ajouter l'élément `style` à la page :

``` javascript
	function hideAdminMenus(styleContent){
		const hideAdminMenusStyle = document.createElement('style');
		hideAdminMenusStyle.textContent = styleContent;
		document.head.append(hideAdminMenusStyle);
	}
``` 

# En fonction des profils 

Nous devons pouvoir connaître le ou les profils de l'utilisateur courant pour connaître quels onglets lui seront visibles. Pour cela nous allons utiliser l'API JS FlowerDocs : 

``` javascript 
	var userAPI = JSAPI.get().getUserAPI();
	var profiles = userAPI.getProfiles(); 
```

<br/>
Enfin, nous pouvons cacher les menus pour les utilisateurs au profil `MANAGER` : 

```javascript 
function hideAdminMenus(styleContent){
  const hideAdminMenusStyle = document.createElement('style');
  hideAdminMenusStyle.textContent = styleContent;
  document.head.append(hideAdminMenusStyle);
}
var hiddenMenus = '.AdminPlace\\/tools\\/memory,'
					+'.proxiesTab,'
					+'.usersTab,'
					+'.ldapsTab,'
					+'.oauthTab,'
					+'.stylesheetsTab,'
					+'.xmlsTab,'
					+'.pluginsTab,'
					+'.core,'
					+'.serversTab{display: none!important;}';
var userAPI = JSAPI.get().getUserAPI();
var profiles = userAPI.getProfiles();
if(profiles.includes('MANAGER')){
  hideAdminMenus(hiddenMenus);
}
``` 

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->