---
title: "DELETE all transformation orders"
weight: 5
draft: false
keywords: ["tutorial", "transformation"]
---

This API allows you to delete all transformation orders previously requested.
The call to this API must be authenticated. The credentials are available in the _application.yaml_ configuration file of the document-service-broker.

```yaml

run-mode :
  username : username
  password : password
```

## API technical description

Endpoint :
```bash
DELETE /transformations
```

## Examples

### Delete all transformation orders in an authenticated way

The call below generates a request to delete all transformation orders.
It is authenticated using the simple "Basic Authentication" method,
considering the username: _user_ and the password _password_.

```bash
curl -X 'DELETE' \
  'http://localhost:8761/transformations' \
  -H 'accept: */*' \
  -H 'Authorization: Basic dXNlcjpwYXNzd29yZA=='
```
