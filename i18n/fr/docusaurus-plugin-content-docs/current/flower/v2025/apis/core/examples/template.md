---
title: Utiliser des templates
description: Enrichir un template HTML ou MS Word avec des valeurs de tags
---

# Template HTML
Le service `HTML` expose l'opération suivante :

* `getProcessedTemplate` : pour télécharger un template enrichi avec des valeurs de tags

## Modèle
Le modèle utilisé par l'appel `getProcessedTemplate` se présente comme ceci: 
```json
{
    "string":"string"
}
```
Il s'agit d'un ensemble de couples clef / valeur, l'identifiant d'un tag et sa valeur.

## Réponse
La réponse est un texte composé du template HTML, dont les identifiants des tags ont été remplacés par leur valeur. 

## Exemple
Les exemples ci-dessous indiquent comment obtenir un template HTML en l'enrichissant avec des valeurs de tags.

POST {{core}}/rest/template/html/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id : identifiant du template

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
{
    "ObjetCourrier":"Résiliation d'un contrat",
    "RefClient":"123456",
    "NomClient":"Dupont",
    "PrenomClient":"Jean" 
}
	@Autowired
    private ITemplateEngine templateEngine;

    @Autowired
    private PageContextBuilder contextBuilder;

    public String getProcessedTemplate() throws FunctionalException, TechnicalException
    {
        String modelId = "html-response";
        Map<String, Object> tagMap = createTagMap();
        HttpServletRequest request = new FakeHttpRequest();

        Context context = contextBuilder.build(request, ContextHelper.getScope().getValue());
        for (Entry<String, Object> variable : tagMap.entrySet())
        {
            context.setVariable(variable.getKey(), variable.getValue());
        }
        return templateEngine.process(modelId, context);
    }

    private Map<String, Object> createTagMap()
    {
        Map<String, Object> tagMap = new HashMap<>();
        tagMap.put("ObjetCourrier", "Résiliation d'un contrat");
        tagMap.put("RefClient", "123456");
        tagMap.put("NomClient", "Dupont");
        tagMap.put("PrenomClient", "Jean");
        return tagMap;
    }


# Template MS Word
Le service `MSOffice` expose les opérations suivantes :

* `downloadFromTags` : pour télécharger un template enrichi avec des valeurs de tags
* `storeFromTags` : pour créer un fichier temporaire dans FLowerDocs à partir d'un template enrichi

## Modèle
Le modèle utilisé par les appels `downloadFromTags` et `storeFromTags` se présente comme ceci: 
```json
[
  {
    "name": "string",
    "readOnly": true,
    "value": [
      "string"
    ]
  }
]
```
Voici la description associée à l'ensemble des données de l'appel :

* `name` : id du tag
* `readOnly` : 
* `value` : liste des valeurs du tag

## Réponse
L'appel `downloadFromTags` retourne le fichier au format docx avec les valeurs de tags remplacées.
L'appel `storeFromTags` retourne l'identifiant du fichier temporaire créé dans FlowerDocs. Cet identifiant peut ensuite être utilisé pour créer un document. 

## Exemples - Téléchargement
Les exemples ci-dessous indiquent comment télécharger un template MSWord en l'enrichissant avec des valeurs de tags.

POST {{core}}/rest/template/msoffice/{id} HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant du template MSOffice

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "name": "ObjetCourrier",
    "readOnly": true,
    "value": [
      "Résiliation d'un contrat"
    ]
  },
  {
    "name": "RefClient",
    "readOnly": true,
    "value": [
      "123456"
    ]
  },
  {
    "name": "NomClient",
    "readOnly": true,
    "value": [
      "Dupont"
    ]
  }
]
	@Autowired
    private MSOfficeTemplateService service;

    public ResponseEntity<byte[]> downloadFromTags() throws TechnicalException, FunctionalException
    {
        String modelId = "accuse-reception";
        List<Tag> tags = createTags();

        InMemoryFile generated = service.generate(modelId, tags);
        String fileName = determineName(tags, generated);
        BodyBuilder builder = ResponseEntity.ok();
        builder.contentType(MediaType.APPLICATION_OCTET_STREAM);
        builder.contentLength(generated.getBytes().length);
        builder.header("Content-Disposition", "attachment; filename=\"" + fileName + "\"");

        return builder.body(generated.getBytes());
    }

    private List<Tag> createTags()
    {
        List<Tag> tags = new ArrayList<>();
        tags.add(TagBuilder.name("ObjectCourrier").value("Résiliation d'un contrat").readonly(true).build());
        tags.add(TagBuilder.name("RefClient").value("123456").readonly(true).build());
        tags.add(TagBuilder.name("NomClient").value("Dupont").readonly(true).build());
        return tags;
    }

    private String determineName(List<Tag> tags, InMemoryFile generated)
    {
        Tag nameTag = tags.stream().filter(tag -> "filename".equals(tag.getName())).findFirst().orElse(null);
        String fileName = (nameTag != null && !nameTag.getValue().isEmpty()) ? nameTag.getValue().get(0)
                : generated.getName();
        return fileName;
    }

## Exemples - Fichier temporaire
Les exemples ci-dessous indiquent comment créer un fichier temporaire d'un template MSWord en l'enrichissant avec des valeurs de tags.


POST {{core}}/rest/template/msoffice/{id}/id HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core
id: identifiant du template MSOffice

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "name": "ObjetCourrier",
    "readOnly": true,
    "value": [
      "Résiliation d'un contrat"
    ]
  },
  {
    "name": "RefClient",
    "readOnly": true,
    "value": [
      "123456"
    ]
  },
  {
    "name": "NomClient",
    "readOnly": true,
    "value": [
      "Dupont"
    ]
  }
]
	@Autowired
    private MSOfficeTemplateService service;
    
	@Autowired
    private TempFileService tempFileService;

    public String storeFromTags() throws TechnicalException, FunctionalException
    {
        String modelId = "accuse-reception";
        List<Tag> tags = createTags();

        InMemoryFile generated = service.generate(modelId, tags);
        String fileName = determineName(tags, generated);
        DocumentFile file = new DocumentFile();
        file.setName(fileName);
        file.setFormatCode(com.google.common.net.MediaType.OOXML_DOCUMENT.toString());
        InputStreamDataSource dataSource = new InputStreamDataSource(new ByteArrayInputStream(generated.getBytes()));
        file.setContent(new DataHandler(dataSource));

        return tempFileService.create(file).getId().getValue();
    }

    private List<Tag> createTags()
    {
        List<Tag> tags = new ArrayList<>();
        tags.add(TagBuilder.name("ObjectCourrier").value("Résiliation d'un contrat").readonly(true).build());
        tags.add(TagBuilder.name("RefClient").value("123456").readonly(true).build());
        tags.add(TagBuilder.name("NomClient").value("Dupont").readonly(true).build());
        return tags;
    }

    private String determineName(List<Tag> tags, InMemoryFile generated)
    {
        Tag nameTag = tags.stream().filter(tag -> "filename".equals(tag.getName())).findFirst().orElse(null);
        String fileName = (nameTag != null && !nameTag.getValue().isEmpty()) ? nameTag.getValue().get(0)
                : generated.getName();
        return fileName;
    }
