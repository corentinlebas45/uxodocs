---
title: Prérequis
---

:::info
:::


# Prérequis

:::warning
Attention à harmoniser la configuration date/heure sur les différents serveurs composant l'architecture cible en utilisant le même timezone (serveurs FlowerDocs mais aussi tous les composants tiers). Les écarts peuvent poser des problèmes lorsque FlowerDocs vérifie la validité d’un jeton (SSO,  Web Services ...).
:::

:::warning
FlowerDocs doit être utilisé uniquement en HTTPS.
:::

## Système d'exploitation

### Linux

L'installation d'une plateforme FlowerDocs nécessite des serveurs Linux. FlowerDocs est supporté et qualifié sur le système Amazon Linux 2023. 

*Tout autre système Linux est réputé fonctionnel s'il permet d'installer la version de Java requise.*/

## Composants applicatifs

L'installation de Java Runtime 11 est nécessaire au démarrage de l'installation de la plateforme.

:::warning
:::

### OpenSearch et Redis

Il est nécessaire d'installer OpenSearch et Redis qui sont des pré-requis au bon fonctionnement de FlowerDocs.
Les versions d'OpenSearch et Redis correspondant aux versions FlowerDocs sont indiquées au début des releases notes.

## Dimensionnement

L’architecture est dépendante de la charge estimée mais il est recommandé d’avoir au minimum :

| Composant|	vCPU	|  RAM	| Note|
|-------------|----------------------|-----------------------------|--------------------------------------------|
|**ARender Rendition Server**  |	4| 8 Go|Le dimensionnement d'un serveur de rendition est fortement liée à la typologie et aux nombres de documents visualisés.|


Le dimensionnement d'une plateforme FlowerDocs doit faire l'objet d'une étude précise pour atteindre au mieux les performances escomptées.
Les éléments dimensionnants sont notamment le nombre d'utilisateurs concurrents ainsi que le nombre de documents visualisés.

Il est préconisé d'isoler chaque composant sur des machines différentes :

* FlowerDocs Core
* FlowerDocs GUI
* ARender Rendition
* Redis
* OpenSearch

## Encodage

Il est nécessaire d'utiliser un encodage UTF-8 sur les serveurs d'installation des composants, afin d'assurer une bonne gestion des lettres accentuées et autres caractères dans l'application.

# Les applications

La plateforme FlowerDocs nécessite l'installation des JARs exécutables : 

* `flower-docs-gui-webapp-2025.2.0.jar`
* `flower-docs-core-webapp-2025.2.0.jar`


Ces applications peuvent être configurées par des fichiers de propriétés situés dans le même répertoire que l'application.

<br/>

Les applications peuvent être configurés via les fichiers suivants :

|Application				|Nom du fichier de configuration											|
|---------------------------|---------------------------------------------------------------------------|
|FlowerDocs Core 				|`core.properties`															|
|FlowerDocs GUI 				|`gui.properties`																|



:::info
La configuration nécessaire est décrite dans la page dediée [ici](broken-link.md).
:::

# Vérification de l'intégrité des livrables

Après le téléchargement de l'application, assurez vous de l'intégrité de l'executable avant son installation. Il est en effet important de vérifier quu'il n'a pas été alteré (fichier `.jar` corrompu ou frauduleusement modifié).
<br/><br/>

Pour cela, il vous faut calculer l'empreinte du fichier à l'aide de la fonction de hachage `SHA-256` pour pouvoir la vérifier. 

* Utilisez la commande : `sha256sum {fileName}`. 
* Récupérez ensuite le résultat de la commande, qui correspond à l'empreinte du fichier.
* Vérifiez que l'empreinte de chaque fichier téléchargé est égale au contenu du fichier `.sha256` correspondant.


# Téléchargement






<br/>
:::info
Vous souhaitez télécharger une autre version ? Accédez aux [anciennes releases](../../../releases).
:::