---
title: Personnalisation de l'interface graphique
---

# Objectif

L’objectif de ce module est de donner les clés d'utilisation des variables CSS FlowerDocs prédéfinies. Ces variables permettent de faciliter la personnalisation de couleur de FlowerDocs. 

<br/>
Afin d’améliorer l’accessibilité de FlowerDocs et de répondre aux demandes [RGAA] (https://design.numerique.gouv.fr/accessibilite-numerique/rgaa/), les couleurs de l’interface FlowerDocs ont évolué. Dans la page [suivante](broken-link.md), vous apprendrez comment utiliser les variables FlowerDocs afin de revenir au thème avant ces modifications.

# Versions FlowerDocs concernées

À partir de la 2.6.0.

# Utilisation des variables

Les variables CSS sont définies de la façon suivante: 
```css
--<nom-de-la-variable>: <couleur>;
```
Il vous faudra ajouter cette ligne dans le sélecteur `body` de votre fichier CSS.

<br/>
De façon similaire, il est possible de redéfinir une variable prédéfinie, comme dans l'exemple suivant.  

La modification d'une variable prédéfinie engendrera une modification de couleur de tous les éléments utilisant cette variable.
```css
--btn-primary: #3f3cd6;
```
`btn-primary` est la variable prédéfinie pour la couleur des boutons principaux de FlowerDocs.

<br/>
Une fois une variable définie, elle peut être utilisée grâce à la fonction `var()` de la façon suivante : 
```css
color: var(--<nom-de-la-variable>)
```

# Un exemple complet
```css
body{
  /*Définition d'une nouvelle variable*/
  --new-variable: #cc3672;
  /*Surcharge d'une variable prédéfinie*/
  --navbar: #6558dd;
  /*Redéfinition d'une variable en utilisant une autre variable prédéfinie*/ 
  --text-sidebar-menu: var(--primary-400);
}

/*Utilisation de la variable définie précédement*/
button.btn-primary {
    color: #fff;
    background-color: var(--new-variable);
    border-color: var(--new-variable);
}
```