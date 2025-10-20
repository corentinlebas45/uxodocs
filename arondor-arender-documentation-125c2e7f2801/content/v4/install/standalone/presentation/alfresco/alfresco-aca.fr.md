---
title: "Installation dans ACA"
draft: false
weight: 3
keywords: [ "standalone", "hmi", "web ui", "configuration", "alfresco", "adf" ]
---

## Commencer avec Docker

1. Modifier le contexte d'ARender pour qu'il soit sur le chemin **/arender** de votre serveur.
Avec le conteneur ARender UI, modifier le contexte avec la variable d'environement `CONTEXT_PATH=/arender`.

2. Récupérer l'image ACA depuis notre artifactory avec :

    ```bash
    $> docker pull artifactory.arondor.cloud:5001/adf-content-app-arender:<arender-version>-aca<aca-version>
    ```

3. Puis, exécuter le conteneur avec la configuration suivante :

```yaml
  version: "3"

  services:
    aca:
      image: alfresco-content-app:AR-11007
      environment:
      # le nom d'hôte de ACA
      - ADF_PUBLIC_HOST=http://localhost
      # Le nom d'hôte de ARender avec /arender pour contexte
      - ARENDER_HOST=http://localhost:8080
      # Le nom d'hôte du Alfresco content repository
      - ALFRESCO_HOST=http://localhost:8080
      # Le nom d'hôte du service oauth d'Alfresco
      - ALFRESCO_OAUTH_HOST=http://localhost:8080
      # liste des extensions qui ouvre ARender pour la prévisualisation (avec ',' comme séparateur)
      - ARENDER_EXTENSIONS=pdf,docx,docm,dotx,dotm,doc,dot,rtf,odt,ott,xlsx,xlsm,xls,xlt,xml,csv,ods,ots,pptx,pptm,ppt,pps,odp,otp,vsdx,msg,eml,html,htm,txt,dwg,dxf,tif,tiff,dcm,mda,ica,mmr,mca,jpg,jpeg,jpe,jfif,jp2,jpf,jpx,j2k,j2c,jpc,png,gif,webp,bmp,mp4,zip
      ports:
      - 80:8080

```


## Ajouter ARender à votre Alfresco Content App

### Prérequis

- Alfresco 5.2.4, 6.x
- Tomcat  7.0
- NodeJS v10.16.0,
- npm 6.14.2

### Installation

Le module de prévisualisation n'est pas disponible publiquement, il faut donc l'ajouter manuellement.

1. Cloner le dépot ACA.

    ```bash
    $> git clone https://github.com/Alfresco/alfresco-content-app.git
    $> git checkout v1.10.1
    ```


3. Générer une nouvelle librairie nommée **"arondor-arender-viewer"**.

    ```bash
    $> ng g library arondor-arender-viewer
    ```

4. Remplacer le contenue du dossier généré par le contenue précédemment dézippé.

5. Ajouter les librairies ARender dans la configuration du compilateur.

```yaml
{
  "compilerOptions": {
    // [...]
    "paths": {
    // [...]
      "@arondor/arender-viewer": ["dist/@arondor/arender-viewer"],
      "@arondor/arender-viewer/*": ["dist/@arondor/arender-viewer/*"]
    }
  }
}
```

Pour les versions 2.0 et supérieures, se référer à l'installation version 2.0

6. Ajouter les assets à l'application et remplacer les informations du projet.

```yml
{
  "projects": {
    "app": {
      "architect": {
        //[...]
        "build": {
          //[...]
          "options": {
            //[...]
            "assets": [
              //[...]
              {
                "glob": "arender.plugin.json",
                "input": "node_modules/@arondor/arender-viewer/assets",
                "output": "./assets/plugins"
              },
              {
                "glob": "arender.plugin.json",
                "input": "projects/arondor-arender-viewer/assets",
                "output": "./assets/plugins"
              },
              {
                "glob": "**/*",
                "input": "node_modules/@arondor/arender-viewer/assets",
                "output": "./assets/arender-viewer"
              },
              {
                "glob": "**/*",
                "input": "projects/arondor-arender-viewer/assets",
                "output": "./assets/arender-viewer"
              }
            ]
          }
        }
      }
    },
    //[...]
    "arondor-arender-viewer": {
      "root": "projects/arondor-arender-viewer",
      "sourceRoot": "projects/arondor-arender-viewer/src",
      "projectType": "library",
      "prefix": "arender",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-ng-packagr:build",
          "options": {
            "tsConfig": "projects/arondor-arender-viewer/tsconfig.lib.json",
            "project": "projects/arondor-arender-viewer/ng-package.json"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/arondor-arender-viewer/src/test.ts",
            "tsConfig": "projects/arondor-arender-viewer/tsconfig.spec.json",
            "karmaConfig": "projects/arondor-arender-viewer/karma.conf.js"
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "projects/arondor-arender-viewer/tsconfig.lib.json",
              "projects/arondor-arender-viewer/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  }
}
```

7. Ajouter ARender à la liste d'extension.

```yml
{
  "$references": [
    "arender.plugin.json",
    ...
  ],
}
```

8. Importer l'extension ARender.

```ts
import { ArenderExtensionModule } from '@arondor/arender-viewer';

@NgModule({
  imports: [ArenderExtensionModule, ... ]
})
```

9. Ajouter les informations de construction.

```yml
{
  "scripts": {
    //[...]
    "build:arender-extension": "npx rimraf dist/@arondor/arender-viewer && ng build arondor-arender-viewer && cpr projects/arondor-arender-viewer/ngi.json dist/@arondor/arender-viewer/ngi.json && cpr projects/arondor-arender-viewer/assets dist/@arondor/arender-viewer/assets",
    "build.arender": "npm run build:arender-extension",
    "build.extensions": "npm run build.shared && npm run build.aos && npm run build.arender",
    //[...]
  }
}
```


Pour les versions 2.0 et supérieures, se référer à l'installation version 2.0

### Configuration

#### Configuration du serveur ARender


```yml
{
  "arender": {
    "host": "{protocol}//{hostname}:{port}/arender/",
    "onPromise": true,
    "documentbuilder": true
  },
  //[...]
}
```


Description:

- **arender.host**: le nom d'hôte  d'ARender avec son contexte ,ici, *"/arender"*. Utiliser le nom d'hôte par défaut pour éviter les erreurs de Cross Origin.
- **arender.onPromise**: permet l'ouverture de plusieurs documents ou dossiers.
- **arender.documentbuilder**: active la fonction de composition de document par défaut.

#### Ouverture des documents par extension

Modifier la variable features.viewer.content.fileExtension.

```yml
{
  //[...]
  "features": {
    "viewer": {
      "content": [{
        "id": "app.arender.viewer",
        "fileExtension": [
          "docx", "docm", "dotx", "dotm", "doc", "dot",
          "rtf", "odt", "ott",
          "xlsx", "xlsm", "xls", "xlt", "xml", "csv",
          "ods", "ots",
          "pptx", "pptm", "ppt", "pps",
          "odp", "otp", "vsdx",
          "msg", "eml",
          "html", "htm",
          "txt",
          "dwg", "dxf", "tif", "tiff", "dcm",
          "mda", "ica", "mmr", "mca",
          "jpg", "jpeg", "jpe", "jfif", "jp2", "jpf", "jpx", "j2k", "j2c", "jpc",
          "png", "gif", "webp", "bmp"
          // <- Ajouter vos extensions ici et/ou retirer les éléments de la liste ci-dessus ^
        ],
      }]
    },
    // [...]
  }
}
```


### Contruction et exécution

1. Installer angular-devkit.

    ```bash
    $> npm install --save-dev @angular-devkit/build-angular
    ```

2. Exécuter le script bash pour construire l'application.

    ```bash
    $> ./build-tomcat-e2e.sh
    ```

3. Copier le dossier généré (alfresco-content-app-1.10.1\dist\app pour ACA v1.10.1) dans votre serveur tomcat dans le dossier "webapps" et renommer le comme bon vous semble.

4. Démarer Tomcat.

### Installation pour la version 2.0

Pour les versions 2.0 et supérieures, les modifications supplémentaires suivantes sont à prendre en compte :

1. Les librairies ARender dans la configuration du compilateur sont placées dans tsconfig.base.json et non tsconfig.json


```yaml
{
  "compilerOptions": {
    // [...]
    "paths": {
    // [...]
      "@arondor/arender-viewer": ["dist/@arondor/arender-viewer"],
      "@arondor/arender-viewer/*": ["dist/@arondor/arender-viewer/*"]
    }
  }
}
```


2. Ajouter les informations de construction.


```yml
{
  "scripts": {
    //[...]
    "build:arender-extension": "npx rimraf dist/@arondor/arender-viewer && ng build arondor-arender-viewer && cpr projects/arondor-arender-viewer/ngi.json dist/@arondor/arender-viewer/ngi.json && cpr projects/arondor-arender-viewer/assets dist/@arondor/arender-viewer/assets",
    "build.arender": "npm run build:arender-extension",
    "build.extensions": "npm run build.shared && npm run build.aos && npm run build.arender",
    "build": "npm run validate-config && npm run build.extensions && npm run build.app -- --prod",
    //[...]
  }
}
```


3. Exécuter la commande pour construire l'application et avoir le dossier généré (/dist/app) à placer dans le dossier "webapps" de votre serveur tomcat.

    ```bash
    $> ng build
    ```
