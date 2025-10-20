# Généralités

Le site est basé sur le générateur de site web statique [Hugo](https://gohugo.io/), sous la version V0.69.0

## Lancement en local 

Hugo fournit un mode de développement qui permet de visualiser les modifications apportées de manière instantanée.
Afin de pouvoir modifier le contenu du site web, il faut dans un premier temps télécharger l'exécutable correspondant à sont poste à [ce lien](https://github.com/gohugoio/hugo/releases/tag/v0.69.0). Attention à bien choisir le package **"hugo_extended_"** correspondant à votre configuration.  

Pour lancer le serveur Hugo, il suffit ensuite de :
 - Ouvrir une console
 - Aller dans le répertoire du projet (se placer à la racine)
 - Exécuter la commande **hugo server**
 - Ouvrir l'url http://localhost:1313 dans votre navigateur

Les modifications apportées au projet vous serons donc désormais visibles en temps réel.
# Rédaction de la documentation ARender
## Insertion de code

Après ``` : écrire le langage dont la coloration est voulue.

Exemples :

```markdown
    ```javascript
    var newDocument =  new  Document();
    var newTask =  new  Task();
    var newFolder =  new  Folder();
    var newVFolder =  new  VirtualFolder();
    ```
```

donne

```javascript
var newDocument =  new  Document();
var newTask =  new  Task();
var newFolder =  new  Folder();
var newVFolder =  new  VirtualFolder();
```

## Balises

Les balises disponibles sont : `note`, `example`, `warning`, `custom`

### Les balises prédéfinies : note, example et warning

```markdown
    Le texte à afficher dans la balise
```

Variable à définir :

- **type_balise** : permettant le choix de la balise voulu.

Valeurs possibles : `example`, `note`, `warning`

Exemple :

```hugo
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
```

### Balise personnalisée

```hugo
{{< tag type="**type_balise**" title="**custom_title**" icon="custom_icon">}}
    Le texte à afficher dans la balise
```

Variables à définir :

- **type_balise** : défini le style de la balise (couleur, icone par défaut)
- **custom_title** : permettant de définir le titre de la balise.
- **custom_icon** : permet d'afficher une icone présent dans la liste suivante : <https://themify.me/themify-icons>

Exemple :

```markdown
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
```

### Tips

Pour aller à la ligne dans une balise : mettre 2 espaces et `entrer`.

## Tabs

```hugo
        **Tab_content**
            **Tab_content**
        **Tab_content**
```

Les variables à définir sont :

- **id="X"** : ID unique assigné à un groupe de tab pour pouvoir définir plusieurs groupes d'onglets avec le même **tabNameX**.
- **tabs="Titre, [...]"** : permet de générer les titres pour chaque onglet.
- **X"** : permet de lier le contenu au bon titre défini dans le shortcode **tabs**. Commence à 0
- **tab_type** : le type de contenu de **Tab_content** (md: markdown, HTML: html - utile pour les shortcodes imbriqués)
- **Tab_content** : correspond au contenu à afficher dans l'onglet

Example :

```hugo
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.

    ```js
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    ```

    <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </div>
        test

```

# Rédaction du blog technique ARender
- Se placer sur la branche `technical-blog`  
(`git checkout technical-blog` depuis la console.) et faire un pull (`git pull`)
- Depuis la console : saisir `hugo new technical-blog/my_new_blog.en.md`
    - **Attention !** Votre nom de fichier doit être écrit en anglais, et construit comme ceci :
        - Préfixe : "newsletter-" ou "release-note-" ou "roadmap-" ou "user-group-" ou "article" en fonction de l'article rédigé.
        - Nom de l'article
        - Suffixe : ".fr" ou ".en" en fonction de la langue de rédaction de l'article, suivi d'un ".md".  
        **Attention !** Un même article rédigé en anglais et français doit avoir le même nom de fichier, à l'exception près du suffixe.  
    
    Vous pouvez vous référrer aux fichiers existants pour vous aider à nommer correctement votre articles.
-  Depuis l'arborescence du projet sur votre éditeur de code, aller dans `content/technical-blog/` et choisir le fichier qui est celui que vous venez de créer.
    - Le document .md est divisé en 2 partie : le front matter, et le contenu. Le front matter correspond à tout ce qui est entre la ligne 1 et 14 (délimité par : --- )
    - Veillez à remplir les champs suivants :
        - `author`: saisir le nom de l'auteur entre guillemets.
        - `draft` : laisser `true` tant que l'article est en cours de rédaction. Passer à `false` une fois qu'il est prêt à être publié. Si un article est publié avec un statut `draft : false` il ne sera pas visible en ligne sur le site.
        - `description` : Remplir ce champ entre guillemets avec une phrase descriptive de l'article. Ce champs servira pour le SEO dans le référencement web.
        - `categories` : Les catégories existantes pour le moment sont : Newsletter, Release note, Roadmap, et Tech articles. Ecrire la/les catégories correspondant à votre article comme suit par exemple : ["category1","category2"].  
        **Attention** à rédiger vos tag dans la langue de rédaction de votre article.
        - `tags`: Si votre articles parlent d'une version précise d'ARender, indiquer la version majeure uniquement (ex : ["2.0.0 +"]). Vous pouvez indiquez le nombre de tag que vous souhaitez. N'hésitez pas à vous référer directement au [site](https://arender.io/technical-blog/) pour voir ceux qui sont actuellement disponible.  
        **Attention** à rédiger vos tag dans la langue de rédaction de votre article.
    - Les champs `title` `date` et `type` sont pré-remplis. (le champs titre peut être ajusté au besoin, les autres ne doivent pas être changés.)
    - Vous pouvez ensuite rédiger votre article en markdown à partir de la ligne 16, en dessous des "---". Vos titres peuvent commencer par un titre de niveau 1 (#).
- Penser à déplacer votre article dans le bon dossier si concerné (pour les newsletter, release note, roadmap, etc.)
- Pousser les informations sur bitbucket
- Faire une PR sur Bitbucket pour publication
