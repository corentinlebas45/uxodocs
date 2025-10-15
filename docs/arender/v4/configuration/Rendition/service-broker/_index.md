---
title: "Service broker"
draft: false
weight: 2
type: docs
icon: mdi-file-cog-outline
---

## Environnement

- Key: *KubeProvider*

    | Description                              | Parameter Key | Type             |
    | ---------------------------------------- | ------------- | ---------------- |
    | Utilise localhost pour tous les services | useLocalhost  | Booléen          |
    | Map l'host et le port des services       | kubeHosts     | Map<String, int> |

[shortcode]

```yaml
kubeprovider:
  useLocalhost : true
  kubeHosts:
    conversion-service: 19999
    jni-service: 9091
    pdfbox-service: 8899
```

[shortcode]

- Key: *provider*

    | Description                      | Parameter Key | Type                    |
    | -------------------------------- | ------------- | ----------------------- |
    | Spécifie le type d'environnement | environment   | Enum(LOCAL, KUBERNETES) |

[shortcode]

```yaml
provider:
  environment: local
```

[shortcode]

[shortcode]

Le serveur de metrics doit être installé sur Kubernetes si `provider.environment` a pour valeur `KUBERNETES`

[shortcode]

## Stockage des fichiers temporaire

Au démarrage du serveur de rendition, les dossiers et fichiers se trouvant dans le chemin du dossier des fichiers temporaires seront supprimés.
 Cette suppression ne sera pas automatique dans le cas où le chemin par défaut *../../tmp* a été modifié. 
 Dans ce cas, la configuration suivante a besoin d'être effectué.

[shortcode]

```cfg
default.document.path.startup.clear=true
```

[shortcode]
