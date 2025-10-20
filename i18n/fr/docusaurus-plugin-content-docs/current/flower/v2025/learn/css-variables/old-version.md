---
title: Retour au thème FlowerDocs 2.5
---

# Changement de visuel

Afin de répondre aux exigences [RGAA] (https://design.numerique.gouv.fr/accessibilite-numerique/rgaa/), les couleurs de l’interface FlowerDocs ont évolué.

Il est tout à fait possible, en se basant sur l’utilisation des variables, de retrouver un visuel se rapprochant de la version 2.5.x de FlowerDocs. 
Vous trouverez ci-dessous comment y parvenir.

```css
body{
  --btn-success: #1abc9c;
  --btn-success-hover: #159a80;
  
  --checkbox: #84c7c1;
  --checkbox-after: #26a69a;
  
  --btn-secondary: #6c757d;
  --btn-secondary-hover: #5a6268;
  
  --btn-danger: #f1556c;
  --btn-danger-hover: #ee324d;
  
  --btn-pink: #f672a7;
  --btn-pink-hover: #f44e91;
  
  --text-sidebar-menu-hover: #00acc1;
  --element-focus: #26a69a;
  
  --badge-pink: #f672a7;
  --badge-success: #1abc9c;
}

button.btn-primary.disabled, 
button.btn-primary:disabled{
  color: #fff;  
  background-color: #6658dd;
  border-color: #6658dd;
  opacity: .65;
}

button.btn-success.disabled, 
button.btn-success:disabled{
  color: #fff;
  background-color: var(--btn-secondary);
  border-color: var(--btn-secondary);
  opacity: .65;
}

.contextual-menu .menu-item:hover {
  background-color: #5fbeaa;
}

.contextual-menu .menu-item:hover .icon:before, 
.contextual-menu .menu-item:hover .label {
    color: #FFF!important;
}

```

<!--:::info
Retrouvez le module de scope correspondant à cette formation [ici](broken-link.md) 
:::-->