+++
date = "2001-03-29T13:20:01+02:00"
title = "Les services"
description = "Consommer les services FlowerDocs depuis l'API JS"
+++

:::info
Cette section décrit comment consommer les services exposés par FlowerDocs directement depuis l'API JS.
:::

# Accès à un service de composants 

Tout comme la couche de service, un service par catégorie de composant est mis à disposition : 

* Document : ``JSAPI.get().document()``
* Dossier : ``JSAPI.get().folder()``
* Dossier virtuel : ``JSAPI.get().virtualFolder()``
* Tâche : ``JSAPI.get().task()``

Ces services consomment les web services SOAP exposés par FlowerDocs Core, leurs utilisations impliquent donc l'application des mêmes contrôles de cohérence et de sécurité.

<br/>
Chaque fonction exposée par ces services accepte deux paramètres de type fonction : 
   
* `successCallback` : un callback exécuté en cas de succès
* `errorCallback` : un callback, optionnel, exécuté en cas d'erreur
   

 
# Créer des composants

Après l'instanciation d'un objet [composant](broken-link.md) et l'avoir initialisé, il est possible de le créer dans FlowerDocs à l'aide du service approprié.
Les services de composants exposent la fonction `create(components, successCallback, errorCallback)`.
Le premier paramètre de cette fonction correspond à un tableau des composants à créer. 
Le paramètre `successCallback` est une fonction appelée de manière asynchrone en cas de succès de la création avec en paramètre le tableau des composants créés.
Le troisième paramètre `errorCallback` est une fonction facultative exécutée si une erreur survient.

var folder = new Folder();
folder.setName('Mon dossier');
folder.setClassId('Folder');
JSAPI.get().folder().create([folder], function (created) {
  console.info('Le dossier ' + created[0].getName() + ' a été créé');
}, function(error){
  console.error(error);
});

# Récupérer des composants

Un service de composant permet de récupérer, à partir des services exposés par FlowerDocs Core, des composants stockés.
Le premier paramètre `ids` à fournir est un tableau des identifiants des composants à récupérer. 
Les deux autres paramètres de type fonction peuvent être fournis pour réagir respectivement au succès et à une erreur de l'opération.

JSAPI.get().document().get([id], function (documents) {
  console.info('Le document ' + documents[0].getName() + ' a été récupéré');
}, function(error){
  console.error(error);
});

Un composant peut également être récupéré de manière dynamique en fonction de sa catégorie : 

```javascript
var reference = new ComponentReference(id, 'DOCUMENT');
JSAPI.get().getComponentGetAPI().getComponent(reference.getCategory(), reference.getId(), function (doc) {
  console.info('Le document ' + doc.getName() + ' a été récupéré');
}, function(error){
  console.error(error);
});
```

# Rechercher des composants

Des composants peuvent être recherchés à l'aide des services de composants et d'un objet [SearchRequest](broken-link.md) fourni en paramètre de la fonction `search(request, successCallback, errorCallback)`.

Le paramètre `successCallback` est une fonction appelée une fois que la recherche a abouti avec le tableau des résultats trouvés en accord avec la requête fournie.
De manière optionnelle, la fonction `errorCallback` peut être passée en paramètre pour réagir à une éventuelle erreur.

var request = new SearchRequest();
JSAPI.get().task().search(request, function(results) {
    console.info(results.length + ' résultats ont été récupérés');
    results.forEach(result => console.log(result.getId()));
});

# Mettre à jour des composants

Tout comme les services de composants permettent la création de composants, il est possible de les utiliser pour mettre à jour des composants.
Pour cela, la fonction `update(components, successCallback, errorCallback)` est exposée. Elle s'utilise de la même façon que la fonction de création. 

JSAPI.get().document().get([id], function (documents) {
    documents[0].setName("updated");
    JSAPI.get().document().update([documents[0]], function (updated) {
        console.info('Le document ' + updated[0].getName() + ' a été mis à jour');
    });
});


# Supprimer des composants

Afin de supprimer de manière physique (ou définitive) des composants, la fonction `doDelete(ids, successCallback, errorCallback)` est mise à disposition. 
Le premier paramètre `ids` à fournir est un tableau des identifiants des composants à supprimer. 
Les deux autres paramètres de type fonction peuvent être fournis pour réagir respectivement au succès et à une erreur de l'opération.

_**Attention** cette opération est irréversible_, elle doit donc être utilisée avec précaution.

JSAPI.get().document().doDelete([id], function () {
    console.info('Le document ' + id + ' a été supprimé définitivement');
});
