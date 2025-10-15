+++
date = "2020-02-07"
title = "Gestion des erreurs"
+++

# Error events
Error events sont des événements qui sont déclenchés par une erreur définie.
<br/>

[shortcode]

<br/>
# Error boundary event
La définition d'un `Error boundary event` (événement de limite d'erreur) est plus logique sur un sous-processus incorporé ou une activité d'appel, car un sous-processus crée une étendue pour toutes les activités à l'intérieur du sous-processus. Les erreurs sont générées par des événements de fin d'erreur. Une telle erreur propage ses étendues parentes vers le haut jusqu'à ce qu'une étendue soit trouvée sur laquelle un événement de limite d'erreur est défini qui correspond à la définition d'événement d'erreur.

Lorsqu'un événement d'erreur est détecté, l'activité sur laquelle l'événement limite est défini est détruite, détruisant également toutes les exécutions en cours (par exemple, activités simultanées, sous-processus imbriqués, etc.). L'exécution du processus se poursuit après le flux de séquence sortant de l'événement limite.
<br/>

[shortcode]

<br/>

<!--# Envoi d'exception FlowerDocs-->

