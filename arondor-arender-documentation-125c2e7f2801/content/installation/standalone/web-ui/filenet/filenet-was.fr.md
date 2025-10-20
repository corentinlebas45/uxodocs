---
title: "Installation dans IBM WebSphere (recommandé)"
description: Guide de déploiement de ARender HMI pour FileNet dans le serveur d'application IBM WebSphere
draft: false
type: docs
weight: 1
keywords: ["standalone", "hmi", "configuration", "filenet", "ibm", "websphere"]
---

Ci-dessous un exemple de déploiement d'ARender pour FileNet dans le serveur d'application **IBM WebSphere**.

Environnement pour l'exemple de déploiement :

- Système d'exploitation : Windows Server 2016
- Filenet 5.5
- Serveur d'application Websphere 9.0.5.0

## Récupérer l'EAR du serveur de présentation pour FileNet

En utilisant l'identifiant et mot de passe préalablement fournis,
vous pouvez récupérer l'application web en format EAR

## Déploiement de l'EAR dans IBM Websphere


La version de websphere utilisée ici doit avoir java 8 installé et activé.
Veuillez suivre les instructions [ici](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=waso-java-se-8-in-websphere-application-server-v85)


- Ouvrir une console WebSphere

```html
https://serveur_websphere:9043/ibm/console
```

- Aller dans l’onglet « **Applications** », puis cliquer sur « Applications d’entreprise »

- Pour lancer l’installation, cliquer sur « **Installer** »

- Choisir le chemin de l’EAR à déployer et cliquer sur « **Suivant** »

- Pour accepter les paramètres par défaut, cliquer sur « **Suivant** »

- Sélectionner le(s) webserver(s) et/ou serveur(s), puis cliquer sur « **Suivant** »

- Pour accepter les paramètres par défaut (hôte virtuel : default_host), cliquer sur « **Suivant** »

- Dans la fenêtre récapitulative de l’installation, cliquer sur « **Terminer** » pour procéder à l’installation avec ces paramètres après les avoir vérifié

## Configuration post installation

### Ordre de chargement des librairies

Il faut s’assurer que l’ordre de chargement des librairies soit configuré de telle sorte de Websphere charge ses librairies en dernier.

- Dans la liste des applications d’entreprise cliquer l’application **ARender 2023.0.X for FileNet 5.x**

- Cliquer sur **Gestion des modules**

- Cliquer sur le module ARender

- Sélectionner, dans la liste déroulante « Ordre du chargeur de classes » : « Classes chargées en premier avec un chargeur de classe local (dernier parent)

- Cliquer sur OK puis sauvegarder les modifications.

- Démarrer l'application ARender

## Installation dans CPE terminé

Vous pouvez accéder à un document FileNet via une URL formée comme ceci :

```html
http://{server_arender}:{port_arender}/ARender/?id={id}&objectStoreName=OS1
```


## 🧭 Répartition de charge et gestion de session pour ARender sur IBM WebSphere

Cette section s'applique à partir de la version 2023.12.0 d'ARender.

Cette section vous guide pour mettre en place une architecture de **répartition de charge** robuste pour l'**HMI ARender** déployée sur IBM WebSphere Application Server. Cette configuration garantit des performances optimales, la stabilité des sessions et une haute disponibilité en s'appuyant sur **IBM HTTP Server (IHS)** comme répartiteur de charge.

### 🎯 Objectifs de la mise en œuvre

- Répartir efficacement les requêtes HTTP entrantes entre plusieurs nœuds WebSphere (HMI ARender)
- Garantir la persistance des sessions (affinité de session) entre les requêtes.
- Permettre la configuration de suffixes de cookie de session pour supporter le routage par affinité.

---

### 🧩 Vue d'ensemble de l'architecture

#### Rôle d'IHS (IBM HTTP Server)

IHS agit comme **reverse proxy et répartiteur de charge (load balancer)**, distribuant les requêtes entrantes vers deux nœuds WebSphere hébergeant l'**HMI ARender** (appelés `node1` et `node2`). Le comportement du routage dépend de la présence d'un cookie de session.

##### Cas 1 : La requête HTTP ne contient pas de cookie SESSION

👉 IHS transmet la requête à l'un des nœuds de façon aléatoire ou selon un poids défini.

##### Cas 2 : La requête HTTP contient un cookie SESSION

👉 IHS extrait le **suffixe** du cookie de session (après le séparateur `:`), et le compare aux valeurs `CloneID` définies dans le fichier `plugin-cfg.xml`.

- Si une correspondance est trouvée, la requête est routée vers le nœud correspondant (affinité de session).
- Si aucune correspondance n'est trouvée, la requête retombe sur le comportement du cas 1.

---

### ⚙️ Configuration sur WebSphere

#### Objectif : Générer des cookies de session spécifiques à chaque nœud

Chaque nœud WebSphere doit ajouter un suffixe personnalisé au cookie SESSION pour s'identifier de façon unique : `<sessionId>:<cloneId>`

Exemples :

- Pour `node1` : **`{cookieValue}:cloneId1`**
- Pour `node2` : **`{cookieValue}:cloneId2`**

#### Paramètres de configuration JVM

Dans la console d'administration WebSphere :

**Chemin :**  
_Serveurs > Types de serveurs > Serveurs d'applications WebSphere > {Nom du serveur} > Infrastructure du serveur > Gestion des processus et Java > Définition des processus > Propriétés supplémentaires > Machine virtuelle Java_


Ajoutez les options JVM suivantes dans **Arguments JVM génériques** :

##### Pour `node1` :

- `-Dcom.uxopian.arender.session.jvm.route=node1`
- `-Dcom.uxopian.arender.session.jvm.route.separator=:`
- `-Dcom.uxopian.arender.session.jvm.base64=false`

##### Pour `node2` :

- `-Dcom.uxopian.arender.session.jvm.route=node2`
- `-Dcom.uxopian.arender.session.jvm.route.separator=:`
- `-Dcom.uxopian.arender.session.jvm.base64=false`

#### Explication des paramètres :

| Paramètre                                         | Description                                                                                                                                                                       |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `com.uxopian.arender.session.jvm.route`           | Spécifie le suffixe (`node1`, `node2`, etc.) à ajouter à l'identifiant de session aléatoire (UUID). Ce suffixe doit correspondre à l'attribut CloneId dans plugin-cfg.xml         |
| `com.uxopian.arender.session.jvm.route.separator` | Caractère utilisé pour séparer l'ID de session et le suffixe (doit être `:` pour IHS par défaut). Si CloneSeparatorChange (plugin-cfg.xml) est à true, le caractère doit être ‘+’ |
| `com.uxopian.arender.session.jvm.base64`          | À `false`, l'ID de session n'est pas encodé en base64 (requis par IHS pour l'extraction du suffixe)                                                                               |

---

Le cookie SESSION doit ressembler à ceci

Dans l'exemple ci-dessus, le cloneId pour node1 est node1

### 🛠️ Configuration IHS (`plugin-cfg.xml`)

La configuration IHS implique quatre éléments principaux :

1. **VirtualHostGroup** – définit les adresses d'écoute.
2. **ServerCluster** – liste les nœuds WebSphere en backend.
3. **UriGroup** – définit les patterns d'URL gérés.
4. **Route** – relie les composants ci-dessus.

   #### Exemple de configuration :

```xml
<ServerCluster CloneSeparatorChange="false" GetDWLMTable="true" IgnoreAffinityRequests="false" LoadBalance="Round-Robin" Name="ARender_ServerCluster" PostBufferSize="0" PostSizeLimit="-1" RemoveSpecialHeaders="true" RetryInterval="60" ServerIOTimeoutRetry="-1">
   <Server CloneId="node1" Name="node1" ServerIOTimeout="900">
      <Transport Hostname="localhost" Port="9080" Protocol="http"/>
   </Server>
   <Server CloneId="node2" Name="node2" ServerIOTimeout="900">
      <Transport Hostname="localhost" Port="9081" Protocol="http"/>
   </Server>
</ServerCluster>
<UriGroup Name="ARender_UriGroup">
   <Uri AffinityCookie="SESSION" AffinityURLIdentifier="jsessionid" Name="/ARender/*"/>
</UriGroup>
<Route ServerCluster="ARender_ServerCluster" UriGroup="ARender_UriGroup" VirtualHostGroup="ARender_VirtualHostGroup"/>
```

#### Explications :

- Toutes les URL correspondant à `/ARender/*` sont routées vers `node1` ou `node2`.
- Le cookie `SESSION` est utilisé pour l'affinité de session.
- Les communications internes se font via les ports `9080` et `9081` sur `localhost`.

---

### ✅ Résultat attendu

Avec cette configuration :

- Chaque session utilisateur est systématiquement routée vers le bon nœud HMI, selon le suffixe du cookie.
- Les sessions restent stables et ininterrompues dans un environnement clusterisé.
- Le système est extensible et supporte la montée en charge future.
