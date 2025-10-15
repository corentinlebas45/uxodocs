---
title: Hyperliens
icon: mdi-web
keyword: ["feature", "hyperliens"]
---

## Description

La création d'un hyperlien peut s'effectuer de plusieurs façons avec ARender mais a toujours besoin des mêmes éléments pour leur création. 
Tout d'abord le texte sélectionné qui sera le texte cliquable de l'hyperlien, puis il faudra une 
cible qui peut être un numéro de page du document courant ou bien un URL.

## Utilisations

### Menu contextuel

Tout d'abord, sélectionner le texte qui sera l'hyperlien. Puis faite clique-droit et cliquer sur l'option *Créer un lien*. 

![image]([shortcode])

Ensuite une fenêtre apparait où vous devez choisir le type de lien, soit une URL soit un numéro de page du document courant. 

![image]([shortcode])

Une fois le choix fait, appuyer sur *Valider*. L'hyperlien vient d'être créé.

![image]([shortcode])

### Depuis la version 4.8.0

#### Bouton de création

Un bouton est disponible dans le toppanel pour la création d'hyperlien. Ce bouton est désactivé par défaut. Il est également possible de faire la création d'hyperlien répété.

| Propriété                                | Description                                             | Valeur par défaut |
| ---------------------------------------- | ------------------------------------------------------- | ----------------- |
| topPanel.annotationMenu.hyperlink        | Active le bouton de création d'hyperlien                | false             |
| topPanel.annotationMenu.hyperlink.repeat | Active le bouton de création d'hyperlien en mode répété | false             |

[shortcode]

```cfg

topPanel.annotationMenu.hyperlink=true
topPanel.annotationMenu.hyperlink.repeat=true

```

[shortcode]

![image]([shortcode])

Au clique du bouton, il vous sera demandé de sélectionner le texte où l'hyperlien se trouvera.

![image]([shortcode])

Après la sélection, le curseur de la souris se transforme en cible pour vous indiquer qu'une cible est nécessaire à l'hyperlien.

![image]([shortcode])

Cliquer sur la page du document courant que vous choisissez comme cible. L'hyperlien vient d'être créé.

[shortcode]

Si vous êtes à la sélection de la cible et que vous avez fait une mauvaise sélection de texte, vous pouvez utiliser la touche *Echap* pour revenir à la sélection de texte.

[shortcode]

#### Javascript API

Il est possible de fournir une cible depuis l'extérieur d'ARender avec du javascript. Pour ce faire, 
vous devez enregistrer une fonction qui sera exécutée au moment où ARender entre ou sort du mode sélection de cible.

[shortcode]

```js

    var waitingTarget = false;

    function arenderjs_init(arenderjs_)
    {
        arenderjs_.registerNotifyHyperlinkToggleTargetModeEvent(function(activated){
            if(activated)
            {
                waitingTarget = true;
            }
            else
            {
                waitingTarget = false;
            }
        });
    }

```

[shortcode]

Ensuite, il faudra une fonction permettant d'envoyer la cible à ARender lorsque le mode sélection de cible est activé.

[shortcode]

```js

   function armt_notifyHyperlinkTarget(target)
    {
        if(waitingTarget)
        {
            getARenderJS().notifyHyperlinkTarget(target);
            waitingTarget = false;
        } 
    }

```

[shortcode]
