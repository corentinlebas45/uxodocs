---
title: Command Line Manager (CLM)
---

Cet outil permet d'interagir avec FlowerDocs en ligne de commande. Il offre des fonctionnalités :

* d'import
* d'export
* de merge de plusieurs modules
* d'administration

<br/>
__Téléchargement :__

__Note :__ Dans cette partie, le dossier d'extraction est appelé ``${CLM_HOME}``


# Exécution



Le CLM est un JAR exécutable, il peut être exécuté avec une commande du type : 

```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar
```

Pour interagir avec FlowerDocs, il est nécessaire de définir l'URL d'accès aux web services ainsi que des identifiants de connexion : 

```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar --ws.url=http://<serveur>:<port>/<contexte>/services	--password=<password>
```

*Par défaut le nom d'utilisateur est `system`, il peut être modifié en ajoutant le paramètre `--USER=<user>`.*

<br/>

Le paramètre `clm.batch.size=1` permet de définir la taille des lots lors du traitement des jobs par le CLM. Il est particulièrement utile pour résoudre des problèmes de conflits pendant les mises à jour, car il garantit que chaque opération soit traitée de manière unitaire, évitant ainsi les erreurs de concurrence.

<br/>
**Exemple d'utilisation :**
```properties
java -jar flower-docs-clm-2025.2.0-bundle.jar update --ws.url=http://<serveur>:<port>/<contexte>/services --clm.batch.size=1 […]
```
 

:::info
__Note :__ Dans les parties suivantes ``<clm>`` désigne la commande permettant d'exécuter le CLM en ligne de commande.
:::

# Jobs

Une liste de jobs est à fournir au CLM afin de lui indiquer les instructions à exécuter. Ces jobs sont à fournir après la commande d'exécution du CLM :


```properties
<clm> job1 job2
```

Les différents jobs possibles sont listés dans les parties suivantes.