+++
date = "2001-03-30T13:10:02+02:00"
title = "Reserve components"
description = "Reserve your components"
+++

The `Reservation` service exhibits all the operations available around various components reservation.


# Component reservation

GET {{core}}/rest/reservation/reserve HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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

# Component release

GET {{core}}/rest/reservation/release HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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

# Reservation recovery

GET {{core}}/rest/reservation HTTP/1.1

-- URL parameters --
core: FlowerDocs Core host

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
