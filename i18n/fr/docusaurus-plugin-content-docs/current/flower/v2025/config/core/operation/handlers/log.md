---
date: "2009-03-28T13:20:01+02:00"
title: "Journalisation"
description: "Journaliser l'exécution d'opérations."
related:
  - name : "Le concept d'opération"
    rel: '/documentation/concepts/operation'
---

Ce gestionnaire d'opérations permet de journaliser l'exécution d'une opération.
Un message est loggué dans le fichier de journalisation de FlowerDocs Core et indique le contexte dans lequel est exécutée l'opération.


:::info
Pour définir manuellement ce gestionnaire d'opérations, l'identifiant `com.flower.docs.core.tsp.operation.LogOperationHandler` peut être utilisé comme valeur du tag `OperationHandler`.
:::