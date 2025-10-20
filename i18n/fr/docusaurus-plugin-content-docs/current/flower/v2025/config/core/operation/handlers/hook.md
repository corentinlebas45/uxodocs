---
title: Hook
description: Adapter, enrichir, contrôler...
---

# Principe

Un `OperationHook` est un gestionnaire d'opérations exposé en tant que service REST. Grâce à un `OperationHook`, il pourra ainsi être possible de réagir aux opérations exécutées sur les composants depuis un service WEB distant.

En fonction de la catégorie de composant concerné par l'opération effectuée, une requête POST est envoyée sur les endpoints suivants : 

* `/{{scope}}/documents/`
* `/{{scope}}/folder/`
* `/{{scope}}/virtual_folders/`
* `/{{scope}}/tasks/`

Il peut être développé avec n'importe quel language permettant d'exposer des services WEB. 

Le corps des requêtes envoyées sur ces endpoints contient un objet décrivant le contexte d'exécution de l'opération et diffère donc en fonction des opérations.


# Configurer un OperationHook

Un `OperationHook` peut être configuré de la même façon qu'un `OperationHandler` classique. Son nom correspond à l'URL permettant d'accéder aux endpoints listés ci-dessus.
A partir de l'URL configurée, il doit être possible d'envoyer un POST sur `{{hook URL}}/{{scope}}/documents/`.

# Sécurité

Il est recommandé de sécuriser les `OperationHook` déployés. Pour cela, FlowerDocs permet de configurer une chaîne de caractère fournie lors des appels REST dans une en-tête HTTP `Authorization`.

Typiquement, une authentification BASIC peut être utilisée pour sécuriser un `OperationHook`. Pour que FlowerDocs fournisse l'authentification définie, il est nécessaire de mettre à jour l'abonnement avec la chaîne d'autorisation à fournir.

_Cette chaîne de caractère peut être générée en ligne grâce à [blitter](https://www.blitter.se/utils/basic-authentication-header-generator/)._


# Gestion des erreurs

Par défaut, lors de l'exécution d'un ``OperationHook``, FlowerDocs Core log les erreurs renvoyées, par le service REST, en parsant le corps de la réponse HTTP. 

Pour renvoyer des exceptions adaptées en fonction du contexte, il est nécessaire de fournir les en-têtes `code` et `message` sur la réponse HTTP.

Avec Spring, un `ExceptionHandler` peut être défini facilement pour gérer toutes les exceptions FlowerDocs et les renvoyer correctement à FlowerDocs Core :

```java
@ExceptionHandler(CodeBasedException.class)
public ResponseEntity<Object> handleCustomException(CodeBasedException ex, WebRequest request)
{
    HttpHeaders headers = new HttpHeaders();
    headers.add("code", ex.getCode());
    headers.add("message", ex.getMessage());
    return new ResponseEntity<Object>(headers, HttpStatus.INTERNAL_SERVER_ERROR);
}
```

<br/>

Dans le cas d'``OperationHook`` synchrones, il est possible de renvoyer des messages d'erreurs personnalisés à l'utilisateur final. 
Pour cela, il est nécessaire d'utiliser le code d'erreur ``F00039`` : 

```java
throw ExceptionBuilder.createFunctionalException(F00039, "Custom error message"); 
```