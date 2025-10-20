---
title: Réserver des composants
description: Réserver vos composants
---

Le service `Reservation` expose toutes les opérations disponibles autour de la réservation des différents composants.


# Réservation de composant

GET {{core}}/rest/reservation/reserve HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "DOCUMENT",
    "id": "componentId"
  }
]

# Déblocage de composant

GET {{core}}/rest/reservation/release HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "DOCUMENT",
    "id": "componentId"
  }
]

# Récupération des réservations

GET {{core}}/rest/reservation HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {token}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "DOCUMENT",
    "id": "componentId"
  }
]
