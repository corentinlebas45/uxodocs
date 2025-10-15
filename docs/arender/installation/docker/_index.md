---
title: "Docker"
draft: false
weight: 3
type: docs
icon: mdi-wrench-outline
---


## Registre

### Emplacement

Toutes les images docker d'ARender sur notre artifactory, [artifactory.arondor.cloud](https://artifactory.arondor.cloud).

### Connexion

Pour s'authentifier, utiliser la commande docker avec vos identifiants pour l'artifactory

```bash
$> docker login [shortcode]
```

Si vous n'avez pas accès à l'artifactory, veuillez prendre contact avec notre service Support

## Liste des conteneurs

Un environnement ARender est composé de 6 types de conteneur.

| Composant             | Repository                      | Dernière version              | Suffixe  |
| :-------------------- | :------------------------------ | ---------------------------:  | -------: |
| web UI                | arender-ui-springboot           | [shortcode] |          |
| ou Alfresco web UI    | arender-ui-springboot           | [shortcode] | alfresco |
| ou IBM FileNet web UI | arender-ui-springboot           | [shortcode] | filenet  |
|                       |                                 |                               |          |
| rendition             | arender-document-service-broker | [shortcode] |          |
| rendition             | arender-document-renderer       | [shortcode] |          |
| rendition             | arender-document-text-handler   | [shortcode] |          |
| rendition             | arender-document-converter      | [shortcode] |          |

### Récupérer les images

Pour récupérer les images, utiliser la commande "docker pull" avec le nom d'hôte de notre artifactory en préfixe.

[shortcode]
[shortcode]

```bash
$> docker pull [shortcode]/<Repository>:<Version>
```

[shortcode]
[shortcode]

```bash
$> docker pull [shortcode]/<Repository>:<Version>-<Suffix>
```

[shortcode]
[shortcode]

## Docker compose

Pour démarrer ARender rapidement avec docker-compose, exécutez les commandes suivantes :

```bash
$> wget -O docker-compose.yml [shortcode]
$> echo "VERSION=[shortcode]" > .env
$> docker-compose up -d
```

Ces commandes déploieront ARender avec la configuration ci-dessous :

```yaml
[shortcode]
```
