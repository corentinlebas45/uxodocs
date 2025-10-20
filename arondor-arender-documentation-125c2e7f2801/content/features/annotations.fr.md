---
title: Annotations
icon: mdi-comment-text-outline
keywords: ["feature", "annotations"]
---
## Généralités

### Accéder aux annotations

Vous pouvez accéder aux annotations par le bandeau de navigation :


Le bandeau des annotations apparaît :


Vous pouvez aussi accéder aux annotations avec le clic droit sur le document :


### Sauvegarder mes annotations

Cliquer sur l’icône « Sauvegarder » :


### Afficher/masquer les annotations

Cliquer sur l’icône en forme d’œil pour afficher ou masquer les
différents types d’annotations (note textuelle, flèche, texte surligné) :


## Note textuelle

### Créer un note textuelle

Cliquer sur l’icône dans le bandeau de navigation :


Ou faire un clic-droit sur le document et choisir « Ajouter une note
textuelle » dans le menu :


Ensuite, avec le curseur vous pouvez définir la taille de la note
textuelle :


### Modifier une note textuelle

Pour modifier une note textuelle, cliquer sur l'icône crayon. Vous passez en mode
Edition. Le bandeau d'annotation contient la barre d’outils.


Pour modifier le texte de l’annotation, écrire directement dedans.

Pour mettre votre texte en gras, italique ou souligné, cliquer sur les
boutons dédiés :


Vous pouvez choisir la police et la taille de votre texte grâce aux deux
listes déroulantes :


Vous pouvez changer la couleur du texte et du fond de votre note
textuelle :


Pour déplacer votre note textuelle, positionnez votre curseur sur la
bordure haute et faites glisser votre note textuelle :


Lorsque vos modifications sont terminées, quitter le mode Edition en
cliquant sur le bouton :


*Attention : Internet Explorer 8 force certaines conditions sur le
formatage des champs rich text dans les pages web. Afin que nous
puissions avoir le même rendu visuel sur tous les navigateurs une
nouvelle ligne vide ne peut se faire qu'avec shift+Entrée sous Internet
Explorer 8.*

### Voir les détails d’une note textuelle

Pour voir le détail du note textuelle, passer en mode Edition. Dans le
bandeau d'édition , cliquer sur le bouton « Détails » :


Le détail de l’annotation apparaît :


Pour sortir du pop-up, cliquer n’importe où dans le document.

### Supprimer une note textuelle

Pour supprimer une note textuelle, passer en mode Edition. Dans le bandeau des annotations,
 cliquer sur le bouton « Supprimer la note » :


## Surlignage de zone

### Créer un surlignage de zone

Pour créer un surlignage de zone, cliquer sur le bouton dédié :


Ou faire un clic droit sur le document et choisir « Surligner une zone » :


Puis, faire glisser votre curseur sur la zone que vous souhaitez mettre
en surligné :


### Modifier un surlignage de zone


Grâce au bandeau d'édition vous pouvez :

- Changer l’opacité du surlignage de zone (plus d'informations sur les sliders [ici]({{< relref "/content/features/sliders.fr.md">}})).
- Changer la couleur du fond.
- Voir le détail de l’annotation.
- Supprimer la zone surlignée.
- Sortir du mode Edition.
- Pour déplacer votre zone surlignée, cliquer dessus et faites glisser
  votre rectangle.

### Supprimer un surlignage de zone

Pour supprimer une zone de surlignage, passer en mode Edition. 
Dans le bandeau des annotations, cliquer sur le bouton « Supprimer la zone » :


## Flèche

### Créer une flèche

Pour créer une flèche, cliquer sur le bouton dédié :


Ou faire un clic droit sur le document et choisir « Ajouter une flèche » dans le menu :


### Modifier une flèche

Pour modifier une flèche, cliquer dessus. Vous passez en mode Edition.
Le bandeau des annotations contient la barre d’outils :


Pour modifier la taille de la flèche, cliquer sur les boutons dédiés :


Vous pouvez modifier l’opacité de la flèche en cliquant sur le bouton curseur :


Vous pouvez changer la couleur de la flèche en cliquant sur le bouton «
Couleur du fond » :


La direction de la flèche peut être modifiée en cliquant sur les cercles rouges. 
Vous pouvez glisser-déposer la flèche sur la page pour la déplacer.


### Voir les détails d’une flèche

Pour voir le détail de la flèche, passer en mode Edition. 
Dans la barre des annotations, cliquer sur le bouton « Détails » :


## Surligner du texte

### Créer du texte surligné

Pour créer un surlignage de texte, sélectionner avec le curseur du texte. 
Puis faire un clic droit et choisir « Surligner le texte » dans le menu :


### Modifier du texte surligné

Vous pouvez supprimer une partie du texte surligné précédemment.
Sélectionner avec le curseur le texte que vous souhaitez sortir du surlignage. 
Puis faire un clic-droit et choisir « Supprimer le surlignage » dans le menu :


Le reste du texte est toujours surligné :


L’annotation disparaîtra que lorsque le surlignage aura été totalement enlevé du texte.

### Supprimer du texte surligné

Pour supprimer un surlignage de texte, sélectionner le texte avec le
curseur puis faire un clic droit et choisir « Supprimer le surlignage »
dans le menu :


### Création d'annotation par règles

La méthode de création d'annotation par règle permet de définir des règles qui seront suivies pour la création d'annotation. 
Les annotations de type Barré, Souligné, Surligné, Biffure et Biffure de texte sont compatibles avec la création par règles. 


Il est ensuite possible avec du Javascript d'appliquer ces règles. 
Tous les détails sur la configuration ainsi que les exemples d'utilisation sont trouvables sur [la page dédiée]({{< relref "/learn/how-to/annotation-creation-rule.fr.md">}}).

## Annotation audio 

### Configuration

#### Création

Pour créer une annotation audio, la propriété suivante doit être définie :


```cfg
# Activate the sound annotation button
topPanel.annotationMenu.sound=true
```


#### Visibilité

Pour afficher l'annotation audio avec les contrôles multimédias à l'ouverture d'un document, utilisez la propriété 
suivante :


```cfg
# If true, sound annotation will be displayed with media controls at creation
annotation.sound.show.controls.at.load=true
```


#### Durée audio

Pour modifier la durée audio maximale pouvant être enregistrée (en ms), utilisez la propriété suivante :


```cfg
# Define the time limitation (in ms) for the record of sound annotation
annotation.sound.record.time.limit=60000
```


**Si ARender est intégré dans un tag HTML *iframe* alors il devra posséder l'attribut HTML *allow="microphone"* dans le 
tag iframe en question.**

**Pour des raisons de sécurité navigateur, l’utilisation du microphone est possible seulement avec le protocole HTTPS 
ou si ARender est déployé depuis l'hôte local.
Tout autre hôte non sécurisé n'est pas supporté par défaut. À titre de test, il est cependant possible avec le 
navigateur Chrome d'ajouter le flag *Insecure origins treated as secure* via l'URL *chrome://flags/***


### Créer une annotation audio

Pour créer une annotation audio, cliquez sur le bouton suivant :


puis cliquez sur le bouton d'enregistrement audio pour démarrer l'enregistrement de l'entrée audio correspondant au
microphone.


Après enregistrement, l'audio peut être arrêté et lu. La barre de progression peut être utilisée pour aller à un temps 
spécifique.

L'épingle audio peut être utilisée pour masquer et déplacer l'annotation audio.

