+++
date = "2001-03-30T13:10:02+02:00"
title = "Réserver des composants"
description = "Réserver vos composants"
+++

Le service `Reservation` expose toutes les opérations disponibles autour de la réservation des différents composants.


# Réservation de composant

[shortcode]
[shortcode]
GET {{core}}/rest/reservation/reserve HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "DOCUMENT",
    "id": "componentId"
  }
]
[shortcode]
[shortcode]

# Déblocage de composant

[shortcode]
[shortcode]
GET {{core}}/rest/reservation/release HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "DOCUMENT",
    "id": "componentId"
  }
]
[shortcode]
[shortcode]

# Récupération des réservations

[shortcode]
[shortcode]
GET {{core}}/rest/reservation HTTP/1.1

-- Paramètres d'URL --
core: host de FlowerDocs core

-- Headers --
token: {{token}}
Content-Type: application/json

-- Body (json) --
[
  {
    "category": "DOCUMENT",
    "id": "componentId"
  }
]
[shortcode]
[shortcode]
