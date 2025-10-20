---
title: "GET all conversion orders"
weight: 4
draft: false
keywords: ["tutorial", "conversion"]
---

This API allows you to retrieve all conversion orders.
The call to this API must be authenticated. The credentials are available in the _application.yaml_ configuration file of the document-service-broker.

```yaml

run-mode :
  username : username
  password : password
```

## API technical description

Endpoint:
```bash
GET /conversions
```

Response:

| Attribute            | Type                      | Description                 |
| :------------------- | :------------------------ |:----------------------------|
| conversionOrders     | List<ConversionOrder>     | The conversion orders list. |

## Examples

### Get all conversion orders

The call below generates a request to retrieve all conversion orders.
It is authenticated using the simple "Basic Authentication" method,
considering the username: _user_ and the password _password_.

```bash
curl -X 'GET' \
  'http://localhost:8761/conversions' \
  -H 'accept: */*' \
  -H 'Authorization: Basic dXNlcjpwYXNzd29yZA=='
```
Response sample:
```bash
[
  {
    "conversionOrderId": {
      "id": "string"
    },
    "currentState": "QUEUED",
    "documentId": "string",
    "errorMessage": "string",
    "format": "string",
    "processedDate": "2023-06-19T16:12:24.476Z",
    "processingTime": 0,
    "queuedDate": "2023-06-19T16:12:24.476Z",
    "queuedTime": 0
  }
]
```
