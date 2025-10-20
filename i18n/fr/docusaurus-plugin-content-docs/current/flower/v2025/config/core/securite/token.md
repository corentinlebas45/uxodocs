---
title: Jeton
description: Sécurisation des requêtes effectuées auprès de FlowerDocs Core.
---

# Jeton utilisateur

Un client FlowerDocs, comme FlowerDocs GUI, nécessite d'être authentifié pour pouvoir communiquer avec FlowerDocs Core.
Cette authentification est soumise sous la forme d'un jeton _JWT_ . 

<br/>
Un jeton est généré par FlowerDocs Core et est signé grâce à un HMAC calculé à partir de l'algorithme de hashage SHA-256 et d'une clé secrète.

A chaque requête reçue, FlowerDocs Core valide le jeton fourni à l'aide de la clé secrète.


<br/>

Par défaut, cette clé secrète est générée au démarrage de FlowerDocs Core de manière aléatoire (sur 32 caractères). Il est conseillé de la définir dans le fichier `core.properties` grâce au paramètre `token.key`.

<br/>

Un jeton est valide pendant 3600s (soit 60 minutes) à partir du moment où il a été généré. Pour changer cette durée de validité, le paramètre 
`token.expiration.time` (*durée en secondes*) peut être défini au niveau de FlowerDocs Core.



<br/>
Dans certains cas, il peut être nécessaire d'inclure le mot de passe du compte utilisé dans le jeton généré. Cette configuration peut être activée à l'aide des paramètres : 

* Inclusion  : `token.password.include` (valeur par défaut `false`)
* Passphrase : `token.password.passphrase`
* Iv         : `token.password.iv` 



:::info
La durée de vie du token doit être supérieure à celle de la session utilisateur pouvant être définie grâce à ``gui.session.timeout`` (secondes - valeur par défaut ``1800``)
:::