---
title: Template
---

# Import d'un scope

L'import d'un scope se fait sur la base d'un template servant de modèle à la création d'un nouveau scope. Cette notion de template permet d'initialiser différents scopes basés sur un même template.

L'emplacement des templates peut être défini en fournissant le paramètre `--data.dir=<chemin vers les templates>`.


<br/>
Un template est un ensemble de fichiers XML dans un répertoire dont le nom est l'identifiant du template. Sa structure s'appuie sur les dossiers suivants : 

* acls
* classes
    * tag
    * document
    * folder
    * task
    * virtualFolder
*  documents
*  conf
*  folders
*  tasks
*  tagCategories
*  virtualFolders
*  workflows
*  facts
*  scope.xml


<br/>

*__Note :__ Le dossier ``conf`` permet d'isoler les documents techniques (type configuration du LDAP, CSS...)*


:::warning
Dans les fichiers de configuration des ``OperationHandlerRegistration``, des ``Script`` ainsi que des ``Template``, si vous devez référencer un fichier il est préconisé d'utiliser la structure suivante : 
```xml
<ns3:files size="0">
      <id>Unassign_history.js</id>
      <ns4:Name>Unassign_history.js</ns4:Name>
      <ns4:FormatCode>application/javascript</ns4:FormatCode>
  </ns3:files>
  ```
Ainsi, ces fichiers référencés seront correctement interprétés et affichés dans l'interface. 
:::

# Créer son premier scope avec le template par défaut

Le template par défaut de FlowerDocs peut être téléchargé sur la page des [téléchargements](broken-link.md). Il peut ensuite servir de base pour créer un scope personnalisé.

La création du scope à partir d'un ou plusieurs templates se fait à l'aide du CLM, couvert dans les pages suivantes.


<br/>
Le template par défaut contient un fichier de configuration pour le formulaire d'entreprise : LDAP.xml

Celui-ci contient des variables de configuration qui peuvent être définies directement à la création du scope via le CLM. Pour cela, il suffit d'ajouter les paramètres suivants à la ligne de commande envoyée au CLM :

* \--ldap.type=OPENLDAP 
* \--ldap.baseDN="dc=flowerdocs,dc=com"
* \--ldap.user="cn=admin,dc=flowerdocs,dc=com"
* \--ldap.url=ldap://openldap-flowerdocs:389
* \--ldap.password=yourLDAPPassword
* \--ldap.attributes.id=CN
* \--ldap.attributes.search=displayName
* \--ldap.attributes.displayName=displayName
* \--ldap.attributes.members=uniqueMember