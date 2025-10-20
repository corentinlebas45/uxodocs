---
title: "Bien commencer avec l'API javascript"
draft: false
weight: 1
icon: mdi-api
keywords: ["configuration", "js", "javascript"]
---

## Configurer un fichier JavaScript personnalisé

Le fichier JavaScript personnalisé doit contenir une fonction du type :

```js
function arenderjs_init(arenderjs_){ ... }
```

Cette fonction est appelée au démarrage d'ARender, l'argument
*arenderjs_* est l'objet JavaScript qui collect toutes les API,
fournies par ARender.

Votre fichier Javascript peut être configuré pour être utilisé dans
ARender de deux façons distinctes :

### Utiliser la propriété arenderjs.startupScript

La propriété arenderjs.startupScript, si elle est définie, sera utilisée
par ARender pour récupérer le fichier Javascript personnalisé et
l'exécuter lorsque l'interface sera prête.

Cette propriété peut être définie dans le fichier de profil, :

```cfg
arenderjs.startupScript=scripts/myarenderscript.js
```

Ou directement dans les paramètres URL :

```html
https://www.demo.arender.io/?url=https://arender.io/docs/demo/ARender-doc-demo.pdf&arenderjs.startupScript=scripts/arenderJSPAPITest.js
```

Ouvrez le fichier *jsapi-demo.properties* (dans le sous-dossier
*WEB-INF/classes* du dossier ARender war) pour voir un exemple de
profil. Noter que l'URL JavaScript peut-être fournie :

En tant qu'URL relative : l'URL est relative à "l'ARender Web-UI context
root", par exemple <https://www.demo.arender.io/>

En tant qu'URL absolue : dans ce cas, attention la plupart des
navigateurs web récents interdisent les requêtes depuis de multiples
sources, ce à cause des limitations des XSS.

### Le "[Hollywood Principle](https://en.wikipedia.org/wiki/Hollywood_principle) "

L'autre option est de définir la fonction init : *arenderjs_init()*
dans ARender dans un contexte parent. Considérer ARender inclus à une
IFrame. L'application appelle l'IFrame à l'aide d'une URL pointant sur
ARender. Dans ce cas, L'application doit définir :

```js
function arenderjs_init(arenderjs_){ ... }
```

ARender va lire cette fonction dans un contexte parent, et l'appelle si
elle existe.