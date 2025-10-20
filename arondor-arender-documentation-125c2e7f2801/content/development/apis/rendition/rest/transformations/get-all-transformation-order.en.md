---
title: "GET all transformation orders"
weight: 4
draft: false
keywords: ["tutorial", "transformation"]
---

This API allows you to retrieve all transformation orders.

## API technical description

Endpoint :
```bash
GET /transformations
```

Response :

| Attribute            | Type                      | Description                    |
| :------------------- | :------------------------ | :----------------------------- |
| transformationOrders | List<TransformationOrder> | The transformation orders list |

## Examples

### Get all transformation orders

The call below generates a request to retrieve transformation orders.

```bash
curl -X 'GET' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*'
```
