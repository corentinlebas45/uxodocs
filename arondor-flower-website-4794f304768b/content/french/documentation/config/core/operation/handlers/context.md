---
date: "2002-01-27T13:20:01+02:00"
title: "Contexte d'exécution"
description: "Utiliser le contexte d'exécution d'une opération"
---

# Principe

Lors de l'exécution d'une opération, le contexte d'exécution de l'opération est fourni en entrée, son type diffère selon l'action d'origine. La variable `context` contient un objet hérité de Java API.
<br/>

# Définition de contexte selon l'action 

Selon l'action à laquelle l'opération est abonnée, le contexte d'exécution change :
<br/>
-- ``CREATE`` : Java API. 
<br/>
-- ``UPDATE`` : Java API. 
<br/>
-- ``UPDATE_CONTENT`` : Java API. 
<br/>
-- ``ANSWER`` : Java API. 
<br/>
-- ``ASSIGN`` : Java API. 
