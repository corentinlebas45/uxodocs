---
title: "Intégrer ARender dans une application"
draft: false
weight: 2
type: docs
icon: mdi-file-code
keywords: [ "integrate", "integration", "arender", "iframe"]
---

Pour ajouter ARender à votre application, il suffit d'ajouter une balise iframe pointant sur le serveur ARender dans le code HTML de votre application.

## 1. Insertion de l'iframe

L'iframe d'ARender doit être inséré dans votre application au niveau le plus pertinent en fonction de votre utilisation d'ARender.

Voici un exemple minimal compatible avec tout type de framework :
[shortcode]

```javascript
    <iframe
        id="arender-iframe"
        src="Insérez l'URL d'ARender ici"
        title="Integrated ARender iframe"
        allow="microphone"
    />
```

[shortcode]
- L'**id** permet d'identifier l'iframe de manière unique et d'en récupérer l'instance en JavaScript :
    `const iframe = document.getElementById('arender-iframe');`

- Le paramètre **src** doit contenir l'url de la version d'ARender installée.
- Le **title** est une indication textuelle de ce que contient l'iframe à des fins d'accessibilité.
- Le paramètre **allow='microphone'** est indispensable pour permettre l'utilisation d'annotations vocales dans ARender.

A ce stade de l'intégration d'ARender, une iframe menant vers ARender apparaît dans le DOM l'application hôte. Attention, elle n'est pas forcément visible pour le moment suivant l'emplacement où elle est intégrée dans l'application hôte : il faudra lui spécifier une position et des dimensions, comme proposé ci-dessous.

## 2. Informations par framework

Les tests d'intégration d'ARender ont été effectués avec les versions suivantes :
- React : version 18.3.1
- Angular : version 19.0.0
- VueJs : version 3.5.13
- Svelte : version 5.19.0

[shortcode]
    [shortcode]
<p>- Créer un composant ARender.tsx ou ARender.jsx et y insérer l'iframe comme dans le code ci-dessous. Le composant peut alors être instancié où vous le souhaitez à l'aide de la balise <code>&lsaquo;ARender /&rsaquo;</code></p>

<p>- En React, on peut utiliser une <b>référence</b> pour interagir avec l'iframe à l'aide du paramètre <b>ref</b>, au lieu d'utiliser une requête par id.</p>
<p>- On peut également styliser le code de l'iframe en lui ajoutant le paramètre <b>classname</b>.</p>
<p>- Enfin, l'url associée à l'iframe via le paramètre <b>src</b> peut être variabilisée pour être modifiée dynamiquement</p>

[shortcode]
      import {useRef, useState} from 'react';

      function ARender() {
          const iframeRef = useRef(null);
          const [arenderUrl, setARenderUrl] = useState('')
          // Une url dynamique peut permettre de varier facilement les paramètres
          const [arenderIsDisplayed, setArenderIsDisplayed] = useState(true)

      return (
          <>
            {
              <iframe
                ref={iframeRef}
                className={`iframe ${arenderIsDisplayed ? '' : 'hidden'}`}
                title='integrated-arender'
                id='arender-iframe'
                src={arenderUrl}
                allow='microphone'
              />
            }
          </>
        );
      }

      export default ARender;
[shortcode]

    [shortcode]
    [shortcode]
        - Créer un composant Angular (vous pouvez le faire à l'aide de cette commande CLI :
        <code>ng generate component Arender</code>)
        - Renseigner les fichiers typescript et html comme présenté ci-dessous :

[shortcode]

```javascript
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arender',
  templateUrl: './arender.component.html',
  styleUrls: ['./arender.component.css']
})
export class ARenderComponent {
  @ViewChild('iframeRef', { static: false }) iframeRef!: ElementRef<HTMLIFrameElement>; // Référence à l'iframe
  arenderIsDisplayed: boolean = true; // Contrôle de la visibilité de l'iframe
}
```

[shortcode]

[shortcode]

```javascript
<iframe
  #iframeRef
  class="iframe" 
  [class.hidden]="!arenderIsDisplayed" 
  title="integrated-arender"
  id="arender-iframe"
  src="" // mettre ici l'url d'ARender
  allow="microphone"
></iframe>
```

[shortcode]

      <p>- Ajouter ARenderComponent dans le module principal (fichier app.module.ts) si nécessaire en ajoutant le composant arender à la liste des déclarations.</p>

      <p>- Insérer le composant dans l'application, en insérant cette balise dans le code html du fichier adéquat : <code>&lt;app-arender&gt;&lt;/app-arender&gt;</code></p>    
      
      <p>- L'attribut <code>@ViewChild</code> permettra d'interagir aisément avec l'iframe sans passer par getElementById.<p>




    [shortcode]
    [shortcode]

<h4> Installation </h4>

- Créez un nouveau fichier nommé ArenderItem.vue et insérez le code suivant :
    [shortcode]

```html
<script setup>
  import { ref } from 'vue'

  const { arenderIsDisplayed = true } = defineProps()
  const iframeRef = ref(null)
</script>

<template>
  <iframe
    ref="iframeRef"
    :class="{ hidden: !arenderIsDisplayed }"
    class="iframe"
    title="integrated-arender"
    id="arender-iframe"
    :src="arenderUrl"
    allow="microphone"
  ></iframe>
</template>


<style scoped>
  iframe {
    ...
  }
</style>
```
  [shortcode]

<h4>Utilisation</h4>

Vous pouvez utiliser le composant ARender dans votre application Vue comme suit :

  [shortcode]
```html
<script setup>
	import Arender from './components/ArenderItem.vue'
  import { ref } from 'vue'
</script>

<template>
  <Arender ref="arenderRef" />
</template>
```
  [shortcode]

<h4>Fonctionnalités</h4>

<ol> 
  <li> 
    <strong>- Visibilité dynamique de l'iframe : </strong> 
    La propriété arenderIsDisplayed contrôle l'affichage ou la dissimulation de l'iframe. 
  </li> 
  <li> 
    <strong>- Référence directe à l'iframe : </strong> 
    La propriété iframeRef lie l'élément iframe, permettant une interaction directe. 
  </li> 
  <li> 
    <strong>- Style personnalisé : </strong> 
    L'iframe peut être stylisée à l'aide de classes CSS. 
  </li>
  <li> 
    <strong>- URL dynamique : </strong> 
    Vous pouvez modifier dynamiquement la source de l'iframe en mettant à jour l'attribut src. 
  </li> 
</ol>

    [shortcode]
    [shortcode]

<h4> Installation </h4>

- Créez un nouveau fichier nommé ARender.svelte et insérez le code suivant :
    [shortcode]

```html
<script>
  let { arenderIsDisplayed = $bindable(true), iframeRef = $bindable() } = $props();
</script>

<iframe
  bind:this={iframeRef}
  class="iframe"
  class:hidden={!arenderIsDisplayed}
  title="integrated-arender"
  id="arender-iframe"
  src="" <!-- Add Arender url here -->
  allow="microphone"
></iframe>

<style>
  ...
</style>
```
  [shortcode]

<h4>Utilisation</h4>

Vous pouvez utiliser le composant ARender dans votre application Svelte comme suit :

  [shortcode]
```html
<script>
	import Arender from '$components/Arender.svelte'
</script>

<Arender bind:iframeRef />
```
  [shortcode]

<h4>Fonctionnalités</h4>

<ol> 
  <li> 
    <strong>- Visibilité dynamique de l'iframe : </strong> 
    La propriété arenderIsDisplayed contrôle l'affichage ou la dissimulation de l'iframe. 
  </li> 
  <li> 
    <strong>- Référence directe à l'iframe : </strong> 
    La propriété iframeRef lie l'élément iframe, permettant une interaction directe. 
  </li> 
  <li> 
    <strong>- Style personnalisé : </strong> 
    L'iframe peut être stylisée à l'aide de classes CSS. 
  </li>
  <li> 
    <strong>- URL dynamique : </strong> 
    Vous pouvez modifier dynamiquement la source de l'iframe en mettant à jour l'attribut src. 
  </li> 
</ol>

    [shortcode]
    [shortcode]
        Pour une intégration avec du CSS pur, sans utilisation d'un framework particulier, créer le fichier script suivant :

{{<tag type="code" title="index.js" >}}
```javascript
  document.addEventListener('DOMContentLoaded', function () {
    // Création de l'iframe
    const iframe = document.createElement('iframe');
    iframe.title = 'integrated-arender';
    iframe.id = 'arender-iframe';
    iframe.allow = 'microphone';
  
    // Variables pour l'URL et les états de l'iframe
    let arenderUrl = '';
    let arenderIsDisplayed = true;
  
    // Ajout des attributs de l'iframe
    function updateIframe() {
      iframe.src = arenderUrl;
      iframe.className = arenderIsDisplayed ? 'iframe' : 'hidden';
    }
  
    // Ajout de l'iframe au body du HTML
    document.body.appendChild(iframe);
  
    // Fonction pour mettre à jour le HTML suite à un changement d'URL de l'iframe
    function setARenderUrl(newUrl) {
      arenderUrl = newUrl;
      updateIframe();
    }
  
    // Affichage / masquage de l'iframe
    function toggleArenderVisibility() {
      arenderIsDisplayed = !arenderIsDisplayed;
      updateIframe();
    }
  
    // Mise à jour initiale pour gérer l'affichage de l'iframe et l'URL
    updateIframe();
  
    // Ajout de l'URL d'ARender
    setARenderUrl(''); // Indiquer ici l'URL d'ARender
  
    // Ecoute du button
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function() {
      toggleArenderVisibility();
    });
  });
  ```
{{</tag>}}
Ce script attend le chargement du DOM du document HTML auquel il sera associé, crée un élément iframe avec les paramètres nécessaires, et ajoute l'élément au DOM.

  Puis ajouter le script au fichier HTML souhaité :

  {{<tag type="code" title="index.html" >}}
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="toggleButton">Afficher / Masquer l'iframe</button>

    <script src="./index.js"></script>
</body>
</html>
```
  
Dans cet example, un bouton a été ajouté pour afficher / masquer l'iframe dynamiquement. (Ne fonctionnera qu'une fois le CSS ajouté, dans la partie suivante)
{{</tag>}}
    [shortcode]
[shortcode]

Dans cet exemple, une classe 'hidden' a été ajoutée à l'iframe quand on souhaite la masquer (en passant sa largeur à 0px par exemple).

Il est également possible de retirer complètement l'iframe quand elle n'est pas affichée, mais cela entraînera un rechargement d'ARender à chaque nouvel affichage.

Vous pourrez <b>reproduire cette façon d'associer un bouton à du code</b> pour tester les fonctionnalités d'ARender décrites dans les pages suivantes.

## 3. Styliser l'iframe avec du CSS

Les classes CSS associées à l'iframe vont nous permettre de la styliser.
Souvent, on souhaite afficher ARender sur une portion fixe de l'écran, occupant par exemple 60% de la largeur de l'écran, et ne disparaissant pas lors du scroll.
Voici un exemple de CSS commenté :
```css
iframe {
  position: fixed; /* ARender restera affiché même si vous scrollez sur votre application */
  top: 0;
  right: 0;
  width: 60%; /* 60% de la largeur de l'écran */
  transition: width 0.2s ease-in-out; /* Transition facultative lors de l'affichage d'ARender */
  height: 100%; /* Occupe toute la hauteur de l'écran */
  border: none; /* Supprime les bordures de l'iframe */
  border-left: 1px solid var(--ar-color-gray-700); /* Ajout d'une bordure customisée à gauche de l'iframe pour le séparer du reste de l'application */
  
  &.hidden {
    width: 0px; /* Cache ARender visuellement. Reste ouvert pour ne pas recharger l'application entièrement à chaque ouverture */
    transition: width 0.2s ease-in-out; /* Transition facultative lors du masquage d'ARender */
  }
}
```
