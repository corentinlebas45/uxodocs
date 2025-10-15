---
title: "Installation"
summary: "Méthode à suivre pour installer le serveur de rendition"
draft: false
weight: 2
icon: mdi-cog-outline
keywords: [ "Install", "rendition"]
---


## Installation avec l'installeur

ARender peut être installé avec un installeur contenant tous les logiciels additionnels nécessaires au bon fonctionnement du produit et dans les versions validées par nos équipes.

Seul prérequis nécessaire : un JDK ou JRE dans les versions validées par l'équipe ARender (Cf. [Prérequis](broken-link.md)).

### Téléchargement de l'installeur

Pour récupérer l'installeur il faut : 
* Se munir du couple login/mot de passe d'accès à notre répertoire de binaires (si vous n'avez pas d'accès merci de prendre contact avec nous : arender-sales@arondor.com)
* Télécharger l'installeur [ici](https://artifactory.arondor.cloud/artifactory/arondor-all/com/arondor/arender/micro/services/rendition-engine-installer/[shortcode]/rendition-engine-installer-[shortcode]-rendition.jar).

### Installation

Pour installer ARender Rendition il faut exécuter la commande ci-dessous :

```bash
$> java -jar rendition-engine-installer-[shortcode]-rendition.jar
```

Voici un exemple des étapes d'installation sous Windows :

* Choisissez où installer le serveur de rendition et ses prérequis :

![image]([shortcode])

* Vous pouvez choisir quels prérequis installer. Si vous choisissez de ne pas en installer un via l'installeur, vous devrez l'installer manuellement.

![image]([shortcode])

* C'est fini! 
![image]([shortcode])

* À part pour Libreoffice, qui ne le supporte pas, vous trouverez tous les logiciels prérequis dans le dossier nommé third_party de votre rendition.

![image]([shortcode])

**Installation terminée !**

## Autres types d'installation de ARender Rendition

## Installation en mode silencieux

#### Télécharger le fichier de configuration

[shortcode][shortcode][shortcode]

#### Configuration de l'installation

Diverses propriétés peuvent être ajoutées : 

| Propriétés                                       | Mandatory/Optional | Fonction                                                     | Valeurs possibles |
| ------------------------------------------------ | ------------------ | ------------------------------------------------------------ | ----------------- |
| INSTALL_PATH                                     |    Obligatoire        | Destination de l'installation                                | Chemin absolue    |
| arender.silent.install                           | Optionnel          | Mettre à true lors d'une installation silencieuse (-options) | True/false        |
| arender.install.as.service                       | Optionnel          | Installer en tant que service                                | True/false        |
| arender.install.libreoffice                      | Optionnel          | Installer Libreoffice                                        | True/false        |
| arender.install.wkhtmltopdf.portable             | Optionnel          | Installer Wkhtmltopdf                                        | True/false        |
| arender.install.imagemagick.portable             | Optionnel          | Installer ImageMagick                                        | True/false        |
| arender.install.ffmpeg.portables                 | Optionnel          | Installer FFmpeg en mode portable                            | True/false        |
| arender.install.msoffice.prerequisites (Windows) | Optionnel          | Installer les prérequis Microsoft Office pour ARender        | True/false        |

Exemple, pour une installation en mode silencieux, la propriété **arender.silent.install=true** doit être présente dans le fichier **install-rendition.properties**.

#### Installation

Pour une installation en mode silencieux, une option doit être passée en paramètre au moment de lancer l'installation avec le jar.
```bash
$> java -jar ARender-rendition-installer.jar -options install-rendition.properties
```

### Installation avec le package zip

#### Prérequis

Pour l'installation avec le package zip, les logiciels additionnels doivent être installés manuellement.

{{< tabs id="1" tabs="Windows, Linux">}}
[shortcode]
Nous vous recommandons d’utiliser Chocolatey pour gérer cela facilement : <https://chocolatey.org/>
[shortcode]
[shortcode]
Nous vous recommandons d'installer ces logiciels à partir des packages de distribution officiels de l'OS. 
[shortcode]
[shortcode]

| Type de Documents       | Logiciel                        | Prérequis                                                                                                                                          |
| ----------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documents Office        | LibreOffice ou Microsoft Office | LibreOffice 5 ou ses versions supérieures. Attention : LibreOffice 5 sur RHEL/CentOS (6) nécessite libGL.so.1. Microsoft Office 2013 ou supérieur. |
| Images                  | ImageMagick                     | ImageMagick 7 ou ses versions supérieures                                                                                                          |
| Mails et HTML           | WKHtmlToPdf                     | wkhtmltopdf 0.12.5 ou ses versions supérieures                                                                                                     |
| Vidéos, Audios et GIFs  | FFmpeg                          | FFmpeg 2.8.15 ou ses versions supérieures                                                                                                          |

Note : les binaires de ces logiciels additionnels utilisés par ARender seront recherchés dans la **variable PATH** du serveur.

| Logiciel    | Variable qui doit être présente dans la variable PATH du serveur                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| LibreOffice | *soffice*                                                                                                                                         |
| ImageMagick | *magick* (Sous Windows, valider que la librairie nommée convert.exe existe, si ce n'est pas le cas merci de la créer via un lien vers magick.exe) |
| WKHtmlToPdf | *wkhtmltopdf*                                                                                                                                     |
| FFmpeg      | *ffmpeg* and *ffprobe*                                                                                                                            |

#### Configuration de l'OS

Si le serveur n'a pas de serveur X (Linux), veuillez installer xfvb et exécuter les commandes ci-dessous :

```bash
$> echo -e '#!/bin/bash\nxvfb-run -a --server-args="-screen 0, 1024x768x24" /usr/bin/wkhtmltopdf -q $*' > /usr/bin/wkhtmltopdf.sh
$> chmod a+x /usr/bin/wkhtmltopdf.sh
$> ln -s /usr/bin/wkhtmltopdf.sh /usr/local/bin/wkhtmltopdf
```

#### Installation

Dézipper le fichier zip de la rendition dans le dossier de votre choix.

Nous recommandons un dossier proche de la racine sous les systèmes
Windows pour mieux absorber la limite de caractères des systèmes de
fichier Windows.