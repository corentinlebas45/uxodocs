---
date: "2002-03-28T13:20:01+02:00"
title: "Graal"
description: "Moteur JavaScript inclus dans FlowerDocs Core."
related:
  - name : "ScriptOperationHandler"
    rel: '/documentation/config/core/operation/handlers/script'
---

# Principe

Le moteur [Graal](https://www.graalvm.org/latest/reference-manual/js/) est utilisé pour exécuter les scripts au sein de la JVM. La syntaxe JavaScript et des classes Java chargées dans la JVM peuvent ainsi être utilisées pour ajouter de la logique spécifique au sein d'un processus. 

Aucun utilitaire JavaScript n'est intégré.

# Instancier un objet

Afin d'instancier un objet ou appeler une méthode statique d'une classe Java, le nom complet de classe doit être indiqué ou une référence à la classe doit être obtenue. 

var document = new com.flower.docs.domain.document.Document();
var Document = com.flower.docs.domain.document.Document;
var document = new Document();

Pour faciliter le développement de scripts utilisant les objets fournis par FlowerDocs, certaines classes peuvent être directement via leur nom sans utiliser leur nom complet ni une référence.

# Restrictions

Pour des questions de sécurité, un chargeur de classes spécifique est utilisé pour exécuter les scripts dans la JVM. L'accès à certaines classes est donc restreint. Ce mécanisme peut être désactivé à l'aide de la propriété `secured.classloader.enabled=false`. Au besoin certaines classes ou packages peuvent être définis comme sécurisés à l'aide de la propriété `secured.classloader.whitelist.additional`.

