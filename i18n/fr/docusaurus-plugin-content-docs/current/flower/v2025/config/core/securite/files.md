+++
date = "2023-06-01"
title = "Fichiers"
description = "Cette section s'applique au connecteur OpenSearch couplé au stockage sur système de fichiers."
+++

# Chiffrement

## Concept

Lorsque le chiffrement est activé, les fichiers manipulés par FlowerDocs sont protégés en cas d'accès au système de fichiers par un assaillant.
Les fichiers sont ainsi rendus illisibles, il est donc nécessaire de disposer de la clé secrète pour les déchiffrer.

FlowerDocs utilise un chiffrement symétrique (par défaut `AES 256` par bloc) pour chiffrer à la fois les contenus de documents et les fichiers temporaires.

Pour activer la protection des contenus par chiffrement, il est nécessaire d'ajouter la propriété `file.encrypt.enabled=true` dans le fichier de configuration `core.properties`.

:::warning
Lorsqu'Amazon S3 est utilisé pour le stockage des fichiers, le chiffrement FlowerDocs n'est pas activable.

En effet, S3 gère nativement le chiffrement des fichiers stockés.

Le chiffrement/déchiffrement effectué par S3 est transparent pour FlowerDocs.

Avec S3, la propriété `file.encrypt.enabled=true` ne doit pas être présente dans le fichier de configuration `core.properties`.
:::

## Gestion de clé

La sécurisation de la clé est un enjeu essentiel lors de l'utilisation du chiffrement.
Une même clé secrète est utilisée pour une plateforme FlowerDocs. Cette clé doit donc être configurée pour chaque instance de FlowerDocs Core. Différentes stratégies de gestion sont possibles : 

### Clé dérivée

La clé secrète utilisée pour le chiffrement peut être dérivée à partir d'une chaîne de caractères (`file.encrypt.passphrase`).
La dérivation de clé est réalisée à l'aide de l'algorithme `PBKDF2`, de la fonction `HMAC` utilisant la fonction de hachage `SHA-256` et de 65536 itérations.
Par défaut la taille de cette clé est de 256bits. Sa taille peut être augmentée ou réduite grâce à la propriété `file.encrypt.key-length` (taille en bits).

### Magasin de clés

La clé secrète utilisée pour le chiffrement peut être stockée dans un magasin de clé (ou _keystore_) au format [PKCS12](https://tools.ietf.org/html/rfc7292).
L'utilisation d'un magasin de clés requiert sa configuration à l'aide des propriétés : 

* `key-store.path` : chemin vers le fichier de magasin de clés (exemple : `file:/data/flowerdocs.pfx`)
* `key-store.password` : mot de passe du magasin de clés

Le magasin de clés peut contenir plusieurs clés. Afin d'identifier celle à utiliser, il est nécessaire de renseigner les propriétés `file.encrypt.key.alias` et 
`file.encrypt.key.password`. Ces propriétés définissent respectivement l'alias et le mot de passe de la clé renseignée lors de l'enregistrement dans le magasin de clés.


## Algorithme

Par défaut, l'algorithme utilisé est `AES/CBC/PKCS5Padding`. L'utilisation d'un autre algorithme est possible à l'aide de la propriété `file.encrypt.algorithm`.

:::warning
L'algorithme utilisé ne doit être changé qu'après une analyse approfondie pour conserver et garantir le niveau de sécurité apporté par le type de chiffrement choisi.

Par exemple, l'algorithme _DES_ est déconseillé.
:::

## Chiffrement d'un système de fichier

Le CLM, utilitaire en ligne de commande, permet de chiffrer les fichiers non-chiffrés stockés sur système de fichiers en utilisant les mêmes informations que pour  les instances de FlowerDocs Core utilisés : 

* la clé secrète
* la taille de clé
* l'algorithme de chiffrement

Pour plus de détails, une partie est dédiée à son utilisation ci-dessous. 

# Intégrité

Pour assurer l'intégrité des fichiers stockés à travers les web services exposés par FlowerDocs Core, un mécanisme d'empreinte est activé par défaut.

Lors de la copie sur le système de fichier, le _hash_ de chaque fichier est calculé à partir de l'algorithme configuré. Le résultat et l'algorithme utilisé sont stockés avec les informations du fichier dans OpenSearch.

Par défaut, l'algorithme utilisé est `SHA-256`. L'utilisation d'un autre algorithme est possible à l'aide de la propriété `file.hash.algorithm` et une des valeurs supportées par la JVM (voir MessageDigest).

# Utilitaire  

## Analyse de répertoire

L'analyse d'un répertoire avant le chiffrement de son contenu permet de connaître la volume du répertoire à chiffrer ainsi que son nombre de fichiers. Le calcul est effectué de façon récursive. 

L'analyse du répertoire est effectué à l'aide du job `dir analyze` du CLM prenant en paramètre le répertoire à analyser dans le paramètre `input`.

```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar dir analyze --input=<répertoire à analyser>
```

:::info
Le paramètre optionnel `--output=<chemin vers le rapport>` permet de créer un rapport à la fin de l'analyse. 
:::

## Chiffrement de répertoire

L'objectif étant de chiffrer le répertoire pour qu'il soit lisible par les différentes instances de FlowerDocs Core, une configuration identique à ceux-ci doit être utilisée. 

Le chiffrement du répertoire est effectué à l'aide du job `dir encrypt` du CLM.
Il nécessite les paramètres suivants, quelque soit le type de chiffrement utilisé : 

* `input`  : le répertoire à chiffrer
* `output` : le répertoire cible dans lequel sera créé la copie chiffrée du répertoire fourni dans le paramètre `input` 
* `conf` : le chemin vers le fichier de configuration contenant les information concernant le magasin de clés ou la passphrase


La commande à exécuter est la suivante : 

```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar dir encrypt --input=<répertoire à chiffrer> --output=<répertoire cible chiffré> --conf=<fichier de configuration>
```

### Clé dérivée

Afin de chiffrer un répertoire en utilisant un stratégie avec clé dérivée, le paramètre à fournir est `conf` avec pour valeur le chemin d'un fichier de configuration contenant les informations mentionnées dans la partie [Clé dérivée](broken-link.md) ainsi que l'activation du chiffrement : 

```properties
#Activation du chiffrement 
file.encrypt.enabled=true

#Gestion par clé dérivé
file.encrypt.passphrase=MaPassphrase
```

### Magasin de clés

Afin de chiffrer un répertoire en utilisant un stratégie de magasin de clé, le paramètre à fournir est `conf` avec pour valeur le chemin d'un fichier de configuration contenant les informations mentionnées dans la partie [Magasin de clés](broken-link.md) ainsi que l'activation du chiffrement : 

```properties
#Activation du chiffrement 
file.encrypt.enabled=true

#Gestion par magasin de clés
key-store.path=file:PATH
key-store.password=****
file.encrypt.key.alias=my-file-encryption-key-alias
file.encrypt.key.password=****
```