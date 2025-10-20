# API documentation

Welcome to the **Fast2 API documentation**.  
This section provides a complete reference for interacting programmatically with Fast2 using its RESTful web services.

The API allows you to:

- Trigger and monitor migrations
- Manage configurations, workers, and migration jobs
- Query results and punnets data
- And many more...

All endpoints are documented with:

- Path and query parameters
- Request and response schemas
- Example calls in **cURL**

Before using the API, make sure you have:

- A valid authentication token (see [Authentication](#authentication))
- Network access to the Fast2 server

**Base URL:** `http://localhost:1789`

**Note**: The interactive Swagger UI for Fast2 is available at:  
[http://localhost:1789/swagger-ui/index.html](http://localhost:1789/swagger-ui/index.html)

## Authentication

- **Bearer JWT** via `Authorization: Bearer <!-- Commentaire nettoyé --> All examples include cURL requests. Replace placeholders with real values.

## Tags

- **Catalog API** — Endpoint to retrieve catalog tasks
- **Job API** — Endpoint for managing jobs
- **Worker API** — API for managing workers
- **User API** — Endpoint for managing users
- **Shared Objects API** — Endpoint for managing shared objects
- **Email API** — Endpoint for managing emails
- **Map API** — Endpoint for managing maps
- **Queue API** — Endpoint for managing queues
- **Punnet API** — Endpoint to retrieve punnets
- **Broker API** — Endpoint for broker-worker communication
- **Campaign API** — Endpoint for managing campaigns
- **Authentication API** — Endpoint for managing authentications

---

## Authentication API

Endpoint for managing authentications

### changePassword

`POST /auth/change-password`

**Request Body**

Content-Type: `application/json`

| Field                     | Type   | Required | Description |
| ------------------------- | ------ | :------: | ----------- |
| `currentPassword`         | string |    no    |             |
| `newPassword`             | string |    no    |             |
| `newPasswordConfirmation` | string |    no    |             |

Body format:

```json
{
  "currentPassword": "string",
  "newPassword": "string",
  "newPasswordConfirmation": "string"
}
```

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | _/_          | object | OK          |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/auth/change-password' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### getLockTimeDuration

`GET /auth/lock-time-duration`

**Responses**

| Status | Content-Type | Schema         | Description |
| -----: | ------------ | -------------- | ----------- |
|    200 | _/_          | integer(int32) | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/auth/lock-time-duration' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "string",
  "password": "string"
}'
```

### getMaxFailedAttempts

`GET /auth/max-failed-attempts`

**Responses**

| Status | Content-Type | Schema         | Description |
| -----: | ------------ | -------------- | ----------- |
|    200 | _/_          | integer(int32) | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/auth/max-failed-attempts' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### refreshToken

`POST /auth/refresh-token`

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | _/_          | object | OK          |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/auth/refresh-token' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### getRemainingLockTime

`GET /auth/remaining-lock-time`

**Parameters**

| Name    | In    | Required | Type   | Description |
| ------- | ----- | :------: | ------ | ----------- |
| `email` | query |   yes    | string |             |

**Responses**

| Status | Content-Type | Schema         | Description |
| -----: | ------------ | -------------- | ----------- |
|    200 | _/_          | integer(int64) | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/auth/remaining-lock-time' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "targetUser": "string",
  "newPassword": "string",
  "newPasswordConfirmation": "string"
}'
```

---

## Broker API

Endpoint for broker-worker communication

### Delete any content set in broker files directory

`DELETE /broker/contents`

**Parameters**

| Name   | In    | Required | Type   | Description |
| ------ | ----- | :------: | ------ | ----------- |
| `path` | query |   yes    | string |             |

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | —            | —      | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/broker/contents' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Download logs produced by the broker

`GET /broker/download-broker-logs`

**Responses**

| Status | Content-Type     | Schema              | Description |
| -----: | ---------------- | ------------------- | ----------- |
|    200 | application/json | array[string(byte)] | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/broker/download-broker-logs' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Delete campaigns by pattern

`DELETE /campaigns/delete-by-pattern`

Deletes campaigns that match the specified name pattern and map version. If no name pattern is provided, all campaigns will be selected. Returns a multi-status response indicating the success or failure of deleting each campaign

**Parameters**

| Name                | In    | Required | Type   | Description                               |
| ------------------- | ----- | :------: | ------ | ----------------------------------------- |
| `namePattern`       | query |    no    | string | Pattern to filter campaign names          |
| `mapVersionSerieId` | query |    no    | string | Map version series id to filter campaigns |

**Responses**

| Status | Content-Type     | Schema | Description                       |
| -----: | ---------------- | ------ | --------------------------------- |
|    207 | application/json | object | Server failed to delete campaigns |
|    200 | application/json | object | Successfully deleted campaigns    |
|    400 | —                | —      | Invalid request parameters        |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/campaigns/delete-by-pattern' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get campaigns dto information by names

`GET /campaigns/dto/search-by-names`

Retrieves campaigns that match the list of specified campaign names, map version and map id

**Parameters**

| Name                | In    | Required | Type          | Description                               |
| ------------------- | ----- | :------: | ------------- | ----------------------------------------- |
| `campaigns`         | query |   yes    | array[object] | Campaign names to retrieve                |
| `mapVersionSerieId` | query |    no    | string        | Map version series id to filter campaigns |
| `mapId`             | query |    no    | string        | Map id to filter campaigns                |
| `paginateParams`    | query |   yes    | object        | Pagination parameters                     |

**Responses**

| Status | Content-Type     | Schema | Description                      |
| -----: | ---------------- | ------ | -------------------------------- |
|    500 | —                | —      | Failed to retrieve campaigns     |
|    200 | application/json | object | Successfully retrieved campaigns |
|    400 | —                | —      | Invalid request parameters       |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/campaigns/dto/search-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get campaign dto information

`GET /campaigns/dto/{campaign}`

Retrieves a campaign dto from its name

**Parameters**

| Name       | In   | Required | Type   | Description               |
| ---------- | ---- | :------: | ------ | ------------------------- |
| `campaign` | path |   yes    | object | Campaign name to retrieve |

**Responses**

| Status | Content-Type     | Schema | Description                        |
| -----: | ---------------- | ------ | ---------------------------------- |
|    200 | application/json | object | Successfully retrieved campaign    |
|    400 | —                | —      | Invalid request parameters         |
|    404 | —                | —      | Campaign not found                 |
|    500 | —                | —      | Server failed to retrieve campaign |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/campaigns/dto/<!-- Commentaire nettoyé -->' \
```

### Get campaigns information by name

`GET /campaigns/search-by-names`

Retrieves campaigns that match the list of specified campaign names, map version and map id

**Parameters**

| Name                | In    | Required | Type          | Description                               |
| ------------------- | ----- | :------: | ------------- | ----------------------------------------- |
| `campaigns`         | query |   yes    | array[object] | Campaign names to stop                    |
| `mapVersionSerieId` | query |    no    | string        | Map version series id to filter campaigns |
| `mapId`             | query |    no    | string        | Map id to filter campaigns                |
| `paginateParams`    | query |   yes    | object        | Pagination parameters                     |

**Responses**

| Status | Content-Type     | Schema | Description                         |
| -----: | ---------------- | ------ | ----------------------------------- |
|    200 | application/json | object | Successfully retrieved campaigns    |
|    500 | —                | —      | Server failed to retrieve campaigns |
|    400 | —                | —      | Invalid request parameters          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/campaigns/search-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Stop campaigns by names

`POST /campaigns/stop-by-names`

Stops campaigns that match the specified list of campaign names and map version. Returns a multi-status response indicating the success or failure of stopping each campaign

**Parameters**

| Name                | In    | Required | Type          | Description                               |
| ------------------- | ----- | :------: | ------------- | ----------------------------------------- |
| `campaigns`         | query |   yes    | array[object] | Campaign names to stop                    |
| `mapVersionSerieId` | query |    no    | string        | Map version series id to filter campaigns |

**Responses**

| Status | Content-Type     | Schema | Description                    |
| -----: | ---------------- | ------ | ------------------------------ |
|    207 | application/json | object | Server failed to stop campaign |
|    200 | application/json | object | Successfully stopped campaign  |
|    400 | —                | —      | Invalid request parameters     |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/campaigns/stop-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Delete a campaign

`DELETE /campaigns/{campaign}`

Deletes a campaign from its name

**Parameters**

| Name       | In   | Required | Type   | Description             |
| ---------- | ---- | :------: | ------ | ----------------------- |
| `campaign` | path |   yes    | object | Campaign name to delete |

**Responses**

| Status | Content-Type | Schema | Description                          |
| -----: | ------------ | ------ | ------------------------------------ |
|    200 | —            | —      | Successfully deleted campaign        |
|    400 | —            | —      | Invalid request parameters           |
|    404 | —            | —      | Campaign not found                   |
|    500 | —            | —      | Server failed to delete the campaign |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/campaigns/<!-- Commentaire nettoyé -->' \
```

### deleteCampaignParameter

`DELETE /campaigns/{campaign}/parameter/{campaignParameter}`

**Parameters**

| Name                | In   | Required | Type   | Description            |
| ------------------- | ---- | :------: | ------ | ---------------------- |
| `campaign`          | path |   yes    | object | Campaign name          |
| `campaignParameter` | path |   yes    | string | Campaign parameter key |

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | —            | —      | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/campaigns/<!-- Commentaire nettoyé -->' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/parameters' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/parameters' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/parameters' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/resume' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/retry-punnets' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/start' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/stats' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/status' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/step/<!-- Commentaire nettoyé -->' \
```

### Pause a step

`POST /campaigns/{campaign}/step/{stepId}/pause`

Pause a step by providing the campaign name, map ID, and step ID. These parameters define the exact context of the task to pause.

**Parameters**

| Name       | In    | Required | Type   | Description                                     |
| ---------- | ----- | :------: | ------ | ----------------------------------------------- |
| `campaign` | path  |   yes    | object | The campaign name to identify the task context  |
| `mapId`    | query |   yes    | object | The map Id related to the campaign              |
| `stepId`   | path  |   yes    | object | The step Id defining the specific task to pause |

**Responses**

| Status | Content-Type     | Schema | Description                |
| -----: | ---------------- | ------ | -------------------------- |
|    204 | application/json | object | Successfully paused step   |
|    400 | —                | —      | Invalid request parameters |
|    404 | —                | —      | Campaign not found         |
|    500 | —                | —      | Failed to pause step       |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/campaigns/<!-- Commentaire nettoyé -->/pause' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/step/<!-- Commentaire nettoyé -->' \
```

### Stop a campaign

`POST /campaigns/{campaign}/stop`

Stop a campaign from its name

**Parameters**

| Name       | In   | Required | Type   | Description   |
| ---------- | ---- | :------: | ------ | ------------- |
| `campaign` | path |   yes    | object | Campaign name |

**Responses**

| Status | Content-Type     | Schema | Description                   |
| -----: | ---------------- | ------ | ----------------------------- |
|    200 | application/json | object | Successfully stopped campaign |
|    400 | —                | —      | Campaign not started          |
|    500 | —                | —      | Failed to resume campaign     |
|    404 | —                | —      | Campaign not found            |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/campaigns/<!-- Commentaire nettoyé -->' \
```

---

## Catalog API

Endpoint to retrieve catalog tasks

### getCatalog

`GET /catalog`

**Parameters**

| Name         | In    | Required | Type          | Description |
| ------------ | ----- | :------: | ------------- | ----------- |
| `name`       | query |    no    | string        |             |
| `classNames` | query |    no    | array[string] |             |
| `allTask`    | query |    no    | boolean       |             |

**Responses**

| Status | Content-Type     | Schema        | Description |
| -----: | ---------------- | ------------- | ----------- |
|    200 | application/json | array[object] | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/catalog' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

---

## Email API

Endpoint for managing emails

### createEmail

`POST /emails`

**Request Body**

Content-Type: `application/json`

| Field     | Type    | Required | Description |
| --------- | ------- | :------: | ----------- |
| `email`   | string  |    no    |             |
| `active`  | boolean |    no    |             |
| `emailId` | object  |    no    |             |

Body format:

```json
{
  "email": "string",
  "active": true,
  "emailId": {}
}
```

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/emails' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "string",
  "active": true,
  "emailId": {}
}'
```

### deleteEmails_byNames

`DELETE /emails/delete-by-names`

**Parameters**

| Name     | In    | Required | Type          | Description |
| -------- | ----- | :------: | ------------- | ----------- |
| `emails` | query |   yes    | array[string] |             |

**Request Body**

Content-Type: `application/json`

| Field       | Type           | Required | Description |
| ----------- | -------------- | :------: | ----------- |
| `from`      | integer(int32) |    no    |             |
| `size`      | integer(int32) |    no    |             |
| `orderBy`   | string         |    no    |             |
| `ascending` | boolean        |    no    |             |

Body format:

```json
{
  "from": 0,
  "size": 0,
  "orderBy": "string",
  "ascending": true
}
```

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/emails/delete-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "from": 0,
  "size": 0,
  "orderBy": "string",
  "ascending": true
}'
```

### getEmailsByNames

`GET /emails/search-by-names`

**Parameters**

| Name             | In    | Required | Type          | Description |
| ---------------- | ----- | :------: | ------------- | ----------- |
| `emails`         | query |   yes    | array[string] |             |
| `paginateParams` | query |   yes    | object        |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/emails/search-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### deleteEmail

`DELETE /emails/{email}`

**Parameters**

| Name    | In   | Required | Type   | Description |
| ------- | ---- | :------: | ------ | ----------- |
| `email` | path |   yes    | string |             |

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | —            | —      | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/emails/**' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

---

## Job API

Endpoint for managing jobs

### Create a job

`POST /jobs`

Creates a new job for a map with its cron expression

**Request Body**

Content-Type: `application/json`

| Field                 | Type           | Required | Description |
| --------------------- | -------------- | :------: | ----------- |
| `jobId`               | object         |    no    |             |
| `jobName`             | string         |    no    |             |
| `campaign`            | object         |    no    |             |
| `taskFlowMapRef`      | object         |    no    |             |
| `maxNumberExecutions` | integer(int32) |    no    |             |
| `action`              | string         |    no    |             |
| `active`              | boolean        |    no    |             |
| `cronExpression`      | string         |    no    |             |

Body format:

```json
{
  "jobId": {},
  "jobName": "string",
  "campaign": {
    "name": "string",
    "index": "string",
    "prefix": "string",
    "suffix": 0
  },
  "taskFlowMapRef": {},
  "maxNumberExecutions": 0,
  "action": "STOP",
  "active": true,
  "cronExpression": "string"
}
```

**Responses**

| Status | Content-Type     | Schema | Description                 |
| -----: | ---------------- | ------ | --------------------------- |
|    200 | application/json | object | Successfully created job    |
|    400 | —                | —      | Invalid request parameters  |
|    409 | —                | —      | Job name already taken      |
|    500 | —                | —      | Server failed to create job |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/jobs' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "jobId": {},
  "jobName": "string",
  "campaign": {
    "name": "string",
    "index": "string",
    "prefix": "string",
    "suffix": 0
  },
  "taskFlowMapRef": {},
  "maxNumberExecutions": 0,
  "action": "STOP",
  "active": true,
  "cronExpression": "string"
}'
```

### Delete jobs by name

`DELETE /jobs/delete-by-name`

Deletes jobs that match the list of specified job names. Returns a multi-status response indicating the success or failure of deleting each job

**Parameters**

| Name       | In    | Required | Type          | Description         |
| ---------- | ----- | :------: | ------------- | ------------------- |
| `jobNames` | query |   yes    | array[string] | Job names to delete |

**Responses**

| Status | Content-Type     | Schema | Description                       |
| -----: | ---------------- | ------ | --------------------------------- |
|    200 | application/json | object | Successfully deleted jobs         |
|    400 | —                | —      | Invalid request parameters        |
|    207 | application/json | object | Server failed to delete campaigns |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/jobs/delete-by-name' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get jobs by name

`GET /jobs/search-by-names`

Retrieves jobs that match the list of specified job names

**Parameters**

| Name             | In    | Required | Type          | Description           |
| ---------------- | ----- | :------: | ------------- | --------------------- |
| `jobNames`       | query |   yes    | array[string] | Job names to retrieve |
| `paginateParams` | query |   yes    | object        | Pagination parameters |

**Responses**

| Status | Content-Type     | Schema | Description                    |
| -----: | ---------------- | ------ | ------------------------------ |
|    400 | —                | —      | Invalid request parameters     |
|    500 | —                | —      | Server failed to retrieve jobs |
|    200 | application/json | object | Successfully retrieved jobs    |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/jobs/search-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### isCronValidFromString

`GET /jobs/validateCron`

**Parameters**

| Name             | In    | Required | Type   | Description |
| ---------------- | ----- | :------: | ------ | ----------- |
| `cronExpression` | query |   yes    | string |             |

**Responses**

| Status | Content-Type     | Schema  | Description |
| -----: | ---------------- | ------- | ----------- |
|    200 | application/json | boolean | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/jobs/validateCron' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

### Save a map

`PUT /maps`

Saves a whole map including step configurations

**Request Body**

Content-Type: `application/json`

**Responses**

| Status | Content-Type     | Schema | Description                                                                                       |
| -----: | ---------------- | ------ | ------------------------------------------------------------------------------------------------- |
|    500 | —                | —      | Server failed to save map                                                                         |
|    200 | application/json | string | Successfully saved maps                                                                           |
|    409 | —                | —      | New map name already taken                                                                        |
|    400 | —                | —      | Invalid request parameters                                                                        |
|    404 | —                | —      | Map not found from provided mapId or map versions weren't matching between provided and found map |

**cURL example**

```bash
curl -X PUT 'http://localhost:1789/maps' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Delete maps by pattern

`DELETE /maps/delete-by-pattern`

Deletes maps that match the specified name pattern. If no name pattern is provided, all maps will be selected

**Parameters**

| Name          | In    | Required | Type   | Description                 |
| ------------- | ----- | :------: | ------ | --------------------------- |
| `namePattern` | query |    no    | string | Pattern to filter map names |

**Responses**

| Status | Content-Type     | Schema | Description                  |
| -----: | ---------------- | ------ | ---------------------------- |
|    200 | application/json | object | Successfully deleted maps    |
|    500 | —                | —      | Server failed to delete maps |
|    400 | —                | —      | Invalid request parameters   |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/maps/delete-by-pattern' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "from": 0,
  "size": 0,
  "orderBy": "string",
  "ascending": true
}'
```

### Download map

`GET /maps/download/{mapId}`

Downloads map file from provided map id

**Parameters**

| Name    | In   | Required | Type   | Description                       |
| ------- | ---- | :------: | ------ | --------------------------------- |
| `mapId` | path |   yes    | object | The map Id of the map to download |

**Responses**

| Status | Content-Type     | Schema | Description                    |
| -----: | ---------------- | ------ | ------------------------------ |
|    500 | —                | —      | Server failed to download maps |
|    200 | application/json | object | Successfully downloaded maps   |
|    400 | —                | —      | Invalid request parameters     |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/maps/download/<!-- Commentaire nettoyé -->' \
```

### Assert map name availability

`GET /maps/name-availability`

Checks that provided map name is available

**Parameters**

| Name      | In    | Required | Type   | Description                        |
| --------- | ----- | :------: | ------ | ---------------------------------- |
| `mapName` | query |   yes    | string | The map name to check availability |

**Responses**

| Status | Content-Type     | Schema  | Description                                |
| -----: | ---------------- | ------- | ------------------------------------------ |
|    200 | application/json | boolean | Successfully checked map name availability |
|    500 | —                | —       | Server failed to check map name            |
|    400 | —                | —       | Invalid request parameters                 |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/maps/name-availability' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get maps by pattern

`GET /maps/search-by-pattern`

Retrieves maps that match the specified name pattern. If no name pattern is provided, all maps will be selected

**Parameters**

| Name             | In    | Required | Type   | Description                 |
| ---------------- | ----- | :------: | ------ | --------------------------- |
| `namePattern`    | query |    no    | string | Pattern to filter map names |
| `paginateParams` | query |   yes    | object | Pagination parameters       |

**Responses**

| Status | Content-Type     | Schema | Description                    |
| -----: | ---------------- | ------ | ------------------------------ |
|    200 | application/json | string | Successfully retrieved maps    |
|    400 | —                | —      | Invalid request parameters     |
|    500 | —                | —      | Server failed to retrieve maps |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/maps/search-by-pattern' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get maps summaries by Id

`GET /maps/summary/search-by-ids`

Retrieves maps summaries that match the list of specified map Ids

**Parameters**

| Name             | In    | Required | Type          | Description                     |
| ---------------- | ----- | :------: | ------------- | ------------------------------- |
| `mapIds`         | query |   yes    | array[object] | Map ids of the maps to retrieve |
| `paginateParams` | query |   yes    | object        | Pagination parameters           |

**Responses**

| Status | Content-Type     | Schema | Description                    |
| -----: | ---------------- | ------ | ------------------------------ |
|    200 | application/json | object | Successfully retrieved maps    |
|    400 | —                | —      | Invalid request parameters     |
|    500 | —                | —      | Server failed to retrieve maps |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/maps/summary/search-by-ids' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Upload a map

`POST /maps/upload/{mapName}`

Created a new map from file and associates it with the given map name

**Parameters**

| Name      | In   | Required | Type   | Description                |
| --------- | ---- | :------: | ------ | -------------------------- |
| `mapName` | path |   yes    | string | The map name to associates |

**Request Body**

Content-Type: `multipart/form-data`

| Field  | Type           | Required | Description             |
| ------ | -------------- | :------: | ----------------------- |
| `file` | string(binary) |   yes    | The file to be uploaded |

Body format:

```json
{
  "file": "string"
}
```

**Responses**

| Status | Content-Type     | Schema | Description                  |
| -----: | ---------------- | ------ | ---------------------------- |
|    409 | —                | —      | Map name already taken       |
|    400 | —                | —      | Invalid request parameters   |
|    200 | application/json | string | Successfully uploaded map    |
|    500 | —                | —      | Server failed to upload maps |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/maps/upload/<!-- Commentaire nettoyé -->' \
  -H 'Content-Type: multipart/form-data' \
  -d '{
  "file": "string"
}'
```

### Delete a map from its Id

`DELETE /maps/{mapId}`

Deletes one map from provided map Id

**Parameters**

| Name    | In   | Required | Type   | Description                          |
| ------- | ---- | :------: | ------ | ------------------------------------ |
| `mapId` | path |   yes    | object | Map Id attached to the map to delete |

**Responses**

| Status | Content-Type | Schema | Description                  |
| -----: | ------------ | ------ | ---------------------------- |
|    500 | —            | —      | Server failed to delete maps |
|    400 | —            | —      | Invalid request parameters   |
|    404 | —            | —      | Map not found                |
|    200 | —            | —      | Successfully deleted maps    |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/maps/<!-- Commentaire nettoyé -->' \
```

### Get a map from its id

`GET /maps/{mapId}`

Retrieves one map from its map Id

**Parameters**

| Name    | In   | Required | Type   | Description                    |
| ------- | ---- | :------: | ------ | ------------------------------ |
| `mapId` | path |   yes    | object | The map Id attached to the map |

**Responses**

| Status | Content-Type     | Schema | Description                       |
| -----: | ---------------- | ------ | --------------------------------- |
|    404 | —                | —      | Map not found from provided mapId |
|    400 | —                | —      | Invalid request parameters        |
|    500 | —                | —      | Server failed to retrieve map     |
|    200 | application/json | string | Successfully retrieved map        |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/maps/<!-- Commentaire nettoyé -->' \
```

---

## Punnet API

Endpoint to retrieve punnets

### Get index mapping campaign

`GET /punnets/mapping`

Retrieves all field mappings (structure of documents) for the OpenSearch index related to the specified campaign

**Parameters**

| Name       | In    | Required | Type   | Description   |
| ---------- | ----- | :------: | ------ | ------------- |
| `campaign` | query |   yes    | object | Campaign name |

**Responses**

| Status | Content-Type     | Schema | Description                           |
| -----: | ---------------- | ------ | ------------------------------------- |
|    500 | —                | —      | Server failed to retrieve mapping     |
|    200 | application/json | object | Successfully retrieved fields mapping |
|    400 | —                | —      | Invalid request parameters            |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/punnets/mapping' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get values of a metadata

`GET /punnets/values`

Retrieves all values of a given metadata

**Parameters**

| Name       | In    | Required | Type   | Description                           |
| ---------- | ----- | :------: | ------ | ------------------------------------- |
| `campaign` | query |   yes    | object | Campaign name                         |
| `mapId`    | query |   yes    | object | Map Id reference                      |
| `stepId`   | query |   yes    | object | The step Id that processed the punnet |
| `field`    | query |   yes    | string | The metadata key to retrieve values   |

**Responses**

| Status | Content-Type     | Schema | Description                      |
| -----: | ---------------- | ------ | -------------------------------- |
|    500 | —                | —      | Server failed to retrieve values |
|    400 | —                | —      | Invalid request parameters       |
|    200 | application/json | object | Successfully retrieved values    |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/punnets/values' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/exception' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/history/next' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/history/previous' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/logs' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->/xml' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### createQueue

`POST /queues`

**Request Body**

Content-Type: `application/json`

| Field                   | Type           | Required | Description |
| ----------------------- | -------------- | :------: | ----------- |
| `queueId`               | object         |    no    |             |
| `numberOfSourceThreads` | integer(int32) |    no    |             |
| `numberOfTaskThreads`   | integer(int32) |    no    |             |

Body format:

```json
{
  "queueId": {},
  "numberOfSourceThreads": 0,
  "numberOfTaskThreads": 0
}
```

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/queues' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "queueId": {},
  "numberOfSourceThreads": 0,
  "numberOfTaskThreads": 0
}'
```

### deleteQueues_byIds

`DELETE /queues/delete-by-ids`

**Parameters**

| Name       | In    | Required | Type          | Description |
| ---------- | ----- | :------: | ------------- | ----------- |
| `queueIds` | query |   yes    | array[object] |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/queues/delete-by-ids' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### deleteQueue

`DELETE /queues/{queueId}`

**Parameters**

| Name      | In   | Required | Type   | Description |
| --------- | ---- | :------: | ------ | ----------- |
| `queueId` | path |   yes    | object |             |

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | —            | —      | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/queues/<!-- Commentaire nettoyé -->' \
```

### getQueue

`GET /queues/{queueId}`

**Parameters**

| Name      | In   | Required | Type   | Description |
| --------- | ---- | :------: | ------ | ----------- |
| `queueId` | path |   yes    | object |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/queues/<!-- Commentaire nettoyé -->' \
```

---

## Shared Objects API

Endpoint for managing shared objects

### Delete shared objects by names

`DELETE /shared-objects/delete-by-names`

Deletes shared objects that match the list of specified shared objects names. Returns a multi-status response indicating the success or failure of deleting each shared objects

**Parameters**

| Name                | In    | Required | Type          | Description                   |
| ------------------- | ----- | :------: | ------------- | ----------------------------- |
| `sharedObjectNames` | query |   yes    | array[string] | Shared object names to delete |

**Request Body**

Content-Type: `application/json`

| Field       | Type           | Required | Description |
| ----------- | -------------- | :------: | ----------- |
| `from`      | integer(int32) |    no    |             |
| `size`      | integer(int32) |    no    |             |
| `orderBy`   | string         |    no    |             |
| `ascending` | boolean        |    no    |             |

Body format:

```json
{
  "from": 0,
  "size": 0,
  "orderBy": "string",
  "ascending": true
}
```

**Responses**

| Status | Content-Type     | Schema | Description                            |
| -----: | ---------------- | ------ | -------------------------------------- |
|    400 | —                | —      | Invalid request parameters             |
|    207 | application/json | object | Server failed to delete shared objects |
|    200 | application/json | object | Successfully deleted shared objects    |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/shared-objects/delete-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "from": 0,
  "size": 0,
  "orderBy": "string",
  "ascending": true
}'
```

### Get shared objects by names

`GET /shared-objects/search-by-names`

Retrieves shared objects that match the list of specified shared object names

**Parameters**

| Name                | In    | Required | Type          | Description                                                 |
| ------------------- | ----- | :------: | ------------- | ----------------------------------------------------------- |
| `sharedObjectNames` | query |   yes    | array[string] | Shared object names to retrieve                             |
| `mapId`             | query |    no    | object        | Identifier of the map from which to retrieve shared objects |
| `paginateParams`    | query |   yes    | object        | Pagination parameters                                       |

**Responses**

| Status | Content-Type     | Schema | Description                             |
| -----: | ---------------- | ------ | --------------------------------------- |
|    500 | —                | —      | Server failed to retrieve shared object |
|    400 | —                | —      | Invalid request parameters              |
|    200 | application/json | object | Successfully retrieved shared object    |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/shared-objects/search-by-names' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Delete a shared object

`DELETE /shared-objects/{sharedObjectName}`

Deletes a shared object from its name

**Parameters**

| Name               | In   | Required | Type   | Description        |
| ------------------ | ---- | :------: | ------ | ------------------ |
| `sharedObjectName` | path |   yes    | string | Shared object name |

**Responses**

| Status | Content-Type | Schema | Description                               |
| -----: | ------------ | ------ | ----------------------------------------- |
|    400 | —            | —      | Invalid request parameters                |
|    500 | —            | —      | Server failed to delete the shared object |
|    200 | —            | —      | Successfully deleted the shared object    |
|    404 | —            | —      | Shared object not found                   |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/shared-objects/<!-- Commentaire nettoyé -->' \
```

### Get specific shared object

`GET /shared-objects/{sharedObjectName}`

Retrieve one shared object configuration from its name

**Parameters**

| Name               | In   | Required | Type   | Description        |
| ------------------ | ---- | :------: | ------ | ------------------ |
| `sharedObjectName` | path |   yes    | string | Shared object name |

**Responses**

| Status | Content-Type     | Schema | Description                             |
| -----: | ---------------- | ------ | --------------------------------------- |
|    200 | application/json | object | Successfully retrieved shared object    |
|    500 | —                | —      | Server failed to retrieve shared object |
|    400 | —                | —      | Invalid request parameters              |
|    404 | —                | —      | Shared object not found                 |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/shared-objects/<!-- Commentaire nettoyé -->' \
```

### Create a shared object

`POST /shared-objects/{sharedObjectName}`

Creates a shared object from its object configuration and a provided name

**Parameters**

| Name               | In   | Required | Type   | Description        |
| ------------------ | ---- | :------: | ------ | ------------------ |
| `sharedObjectName` | path |   yes    | string | Shared object name |

**Request Body**

Content-Type: `application/json`

| Field                    | Type          | Required | Description |
| ------------------------ | ------------- | :------: | ----------- |
| `fields`                 | object        |    no    |             |
| `className`              | string        |    no    |             |
| `scope`                  | string        |    no    |             |
| `fullyConfigured`        | boolean       |    no    |             |
| `singleton`              | boolean       |    no    |             |
| `objectName`             | string        |    no    |             |
| `objectConfigurationId`  | string        |    no    |             |
| `constructorArguments`   | array[object] |    no    |             |
| `fieldConfigurationType` | string        |    no    |             |

Body format:

```json
{
  "fields": {},
  "className": "string",
  "scope": "MAP",
  "fullyConfigured": true,
  "singleton": true,
  "objectName": "string",
  "objectConfigurationId": "string",
  "constructorArguments": [
    {
      "fieldConfigurationType": "Primitive"
    }
  ],
  "fieldConfigurationType": "Primitive"
}
```

**Responses**

| Status | Content-Type     | Schema | Description                           |
| -----: | ---------------- | ------ | ------------------------------------- |
|    500 | —                | —      | Server failed to create shared object |
|    400 | —                | —      | Invalid request parameters            |
|    201 | application/json | object | Successfully created shared object    |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/shared-objects/<!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "fields": {},
  "className": "string",
  "scope": "MAP",
  "fullyConfigured": true,
  "singleton": true,
  "objectName": "string",
  "objectConfigurationId": "string",
  "constructorArguments": [
    {
      "fieldConfigurationType": "Primitive"
    }
  ],
  "fieldConfigurationType": "Primitive"
}'
```

### Update a shared object

`PUT /shared-objects/{sharedObjectName}`

Updates the configuration or the name of a shared object

**Parameters**

| Name               | In   | Required | Type   | Description        |
| ------------------ | ---- | :------: | ------ | ------------------ |
| `sharedObjectName` | path |   yes    | string | Shared object name |

**Request Body**

Content-Type: `application/json`

| Field                    | Type          | Required | Description |
| ------------------------ | ------------- | :------: | ----------- |
| `fields`                 | object        |    no    |             |
| `className`              | string        |    no    |             |
| `scope`                  | string        |    no    |             |
| `fullyConfigured`        | boolean       |    no    |             |
| `singleton`              | boolean       |    no    |             |
| `objectName`             | string        |    no    |             |
| `objectConfigurationId`  | string        |    no    |             |
| `constructorArguments`   | array[object] |    no    |             |
| `fieldConfigurationType` | string        |    no    |             |

Body format:

```json
{
  "fields": {},
  "className": "string",
  "scope": "MAP",
  "fullyConfigured": true,
  "singleton": true,
  "objectName": "string",
  "objectConfigurationId": "string",
  "constructorArguments": [
    {
      "fieldConfigurationType": "Primitive"
    }
  ],
  "fieldConfigurationType": "Primitive"
}
```

**Responses**

| Status | Content-Type     | Schema | Description                           |
| -----: | ---------------- | ------ | ------------------------------------- |
|    200 | application/json | object | Successfully updated shared object    |
|    400 | —                | —      | Invalid request parameters            |
|    500 | —                | —      | Server failed to update shared object |

**cURL example**

```bash
curl -X PUT 'http://localhost:1789/shared-objects/<!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "fields": {},
  "className": "string",
  "scope": "MAP",
  "fullyConfigured": true,
  "singleton": true,
  "objectName": "string",
  "objectConfigurationId": "string",
  "constructorArguments": [
    {
      "fieldConfigurationType": "Primitive"
    }
  ],
  "fieldConfigurationType": "Primitive"
}'
```

---

## User API

Endpoint for managing users

### Delete all users

`DELETE /users`

Deletes all users

**Parameters**

| Name            | In     | Required | Type   | Description |
| --------------- | ------ | :------: | ------ | ----------- |
| `Authorization` | header |   yes    | string |             |

**Request Body**

Content-Type: `application/json`

**Responses**

| Status | Content-Type | Schema | Description               |
| -----: | ------------ | ------ | ------------------------- |
|    200 | —            | —      | Successfully created user |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/users' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Check if user exists

`GET /users/does-user-exist/{userEmail}`

Checks if a user with the given email exists

**Parameters**

| Name        | In   | Required | Type   | Description |
| ----------- | ---- | :------: | ------ | ----------- |
| `userEmail` | path |   yes    | string |             |

**Responses**

| Status | Content-Type | Schema  | Description |
| -----: | ------------ | ------- | ----------- |
|    200 | _/_          | boolean | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/users/does-user-exist/**' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "firstname": "string",
  "lastname": "string",
  "role": "USER"
}'
```

### Create a user or an admin

`POST /users/register`

Creates a user from its password, firstname, lastname and email. You cannot create super admin with this endpoint

**Request Body**

Content-Type: `application/json`

| Field       | Type   | Required | Description |
| ----------- | ------ | :------: | ----------- |
| `password`  | string |    no    |             |
| `firstname` | string |    no    |             |
| `lastname`  | string |    no    |             |
| `email`     | string |    no    |             |
| `role`      | string |    no    |             |

Body format:

```json
{
  "password": "string",
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "role": "USER"
}
```

**Responses**

| Status | Content-Type | Schema | Description                                                       |
| -----: | ------------ | ------ | ----------------------------------------------------------------- |
|    200 | —            | —      | Successfully created user                                         |
|    403 | —            | —      | User creation is restricted to a single user in the configuration |
|    500 | —            | —      | Server failed to create user                                      |
|    409 | —            | —      | An account with this email already exists                         |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/users/register' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "password": "string",
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "role": "USER"
}'
```

### Register a worker

`POST /users/register-worker`

Creates a worker as member to allow broker communication

**Parameters**

| Name               | In     | Required | Type   | Description |
| ------------------ | ------ | :------: | ------ | ----------- |
| `X-Register-Token` | header |   yes    | string |             |

**Request Body**

Content-Type: `application/json`

| Field       | Type   | Required | Description |
| ----------- | ------ | :------: | ----------- |
| `password`  | string |    no    |             |
| `firstname` | string |    no    |             |
| `lastname`  | string |    no    |             |
| `email`     | string |    no    |             |
| `role`      | string |    no    |             |

Body format:

```json
{
  "password": "string",
  "firstname": "string",
  "lastname": "string",
  "email": "string",
  "role": "USER"
}
```

**Responses**

| Status | Content-Type | Schema | Description                                                       |
| -----: | ------------ | ------ | ----------------------------------------------------------------- |
|    200 | —            | —      | Successfully created user                                         |
|    403 | —            | —      | User creation is restricted to a single user in the configuration |
|    500 | —            | —      | Server failed to create user                                      |
|    409 | —            | —      | An account with this email already exists                         |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/users/register-worker' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Check admin existence

`GET /users/super-admin-exists`

Checks if super admin is registered

**Responses**

| Status | Content-Type | Schema | Description              |
| -----: | ------------ | ------ | ------------------------ |
|    200 | —            | —      | Successfully found admin |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/users/super-admin-exists' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### Get a user

`GET /users/{userEmail}`

Retrieves user information from its email

**Parameters**

| Name        | In   | Required | Type   | Description |
| ----------- | ---- | :------: | ------ | ----------- |
| `userEmail` | path |   yes    | string |             |

**Responses**

| Status | Content-Type | Schema | Description                 |
| -----: | ------------ | ------ | --------------------------- |
|    200 | —            | —      | Successfully retrieved user |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/users/**' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: application/json' \
  -d '{
  "firstname": "string",
  "lastname": "string",
  "role": "USER"
}'
```

---

## Worker API

API for managing workers

### deleteWorkers

`DELETE /workers`

**Parameters**

| Name        | In    | Required | Type          | Description |
| ----------- | ----- | :------: | ------------- | ----------- |
| `workerIds` | query |    no    | array[object] |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/workers' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### spawnWorker

`POST /workers`

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | —            | —      | OK          |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/workers' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
```

### getLibraryVersions

`GET /workers/library-versions/{libraryName}`

**Parameters**

| Name          | In   | Required | Type   | Description |
| ------------- | ---- | :------: | ------ | ----------- |
| `libraryName` | path |   yes    | string |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/workers/library-versions/<!-- Commentaire nettoyé -->' \
```

### restartWorkers

`POST /workers/restart`

**Parameters**

| Name        | In    | Required | Type          | Description |
| ----------- | ----- | :------: | ------------- | ----------- |
| `workerIds` | query |    no    | array[object] |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X POST 'http://localhost:1789/workers/restart' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Authorization: Bearer <!-- Commentaire nettoyé -->' \
  -H 'Content-Type: multipart/form-data' \
  -d '{
  "file": "string"
}'
```

### deleteWorkerById

`DELETE /workers/{workerId}`

**Parameters**

| Name       | In   | Required | Type   | Description |
| ---------- | ---- | :------: | ------ | ----------- |
| `workerId` | path |   yes    | object |             |

**Responses**

| Status | Content-Type | Schema | Description |
| -----: | ------------ | ------ | ----------- |
|    200 | —            | —      | OK          |

**cURL example**

```bash
curl -X DELETE 'http://localhost:1789/workers/<!-- Commentaire nettoyé -->' \
```

### getWorkerById

`GET /workers/{workerId}`

**Parameters**

| Name       | In   | Required | Type   | Description |
| ---------- | ---- | :------: | ------ | ----------- |
| `workerId` | path |   yes    | object |             |

**Responses**

| Status | Content-Type     | Schema | Description |
| -----: | ---------------- | ------ | ----------- |
|    200 | application/json | object | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/workers/<!-- Commentaire nettoyé -->' \
```

### getWorkerLogs

`GET /workers/{workerId}/logs`

**Parameters**

| Name       | In    | Required | Type           | Description |
| ---------- | ----- | :------: | -------------- | ----------- |
| `workerId` | path  |   yes    | object         |             |
| `results`  | query |    no    | integer(int32) |             |

**Responses**

| Status | Content-Type     | Schema        | Description |
| -----: | ---------------- | ------------- | ----------- |
|    200 | application/json | array[object] | OK          |

**cURL example**

```bash
curl -X GET 'http://localhost:1789/workers/<!-- Commentaire nettoyé -->' \
```
