# NgsiV2.EntitiesApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                              | HTTP request                         | Description |
| ----------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| [**createEntity**](EntitiesApi.md#createEntity)                                     | **POST** /entities                   |
| [**listEntities**](EntitiesApi.md#listEntities)                                     | **GET** /entities                    |
| [**removeEntity**](EntitiesApi.md#removeEntity)                                     | **DELETE** /entities/{entityId}      |
| [**replaceAllEntityAttributes**](EntitiesApi.md#replaceAllEntityAttributes)         | **PUT** /entities/{entityId}/attrs   |
| [**retrieveEntity**](EntitiesApi.md#retrieveEntity)                                 | **GET** /entities/{entityId}         |
| [**retrieveEntityAttributes**](EntitiesApi.md#retrieveEntityAttributes)             | **GET** /entities/{entityId}/attrs   |
| [**updateExistingEntityAttributes**](EntitiesApi.md#updateExistingEntityAttributes) | **PATCH** /entities/{entityId}/attrs |
| [**updateOrAppendEntityAttributes**](EntitiesApi.md#updateOrAppendEntityAttributes) | **POST** /entities/{entityId}/attrs  |

## createEntity

> createEntity(requestBody, opts)

The payload is an object representing the entity to be created. The object
follows the JSON entity Representation format (described in a
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response: _ Successful operation uses 201 Created or 204 No Content
(if upsert option is used). Response includes a &#x60;Location&#x60; header with
the URL of the created entity. _ Errors use a non-2xx and (optionally) an error
payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let requestBody = { key: null }; // {String: Object} |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    options: "options_example" // String | Options dictionary
};
apiInstance.createEntity(requestBody, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully.");
    }
});
```

### Parameters

| Name                  | Type                              | Description        | Notes      |
| --------------------- | --------------------------------- | ------------------ | ---------- |
| **requestBody**       | [**{String: Object}**](Object.md) |                    |
| **fiwareService**     | **String**                        |                    | [optional] |
| **fiwareServicePath** | **String**                        |                    | [optional] |
| **options**           | **String**                        | Options dictionary | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## listEntities

> [Entity] listEntities(opts)

Retrieves a list of entities that match different criteria by id, type, pattern
matching (either id or type) and/or those which match a query or geographical
query (see
[Simple Query Language](https://fiware.github.io/specifications/ngsiv2/stable)
and
[Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable)).
A given entity has to match all the criteria to be retrieved (i.e., the criteria
is combined in a logical AND way). Note that pattern matching query parameters
are incompatible (i.e. mutually exclusive) with their corresponding exact
matching parameters, i.e. &#x60;idPattern&#x60; with &#x60;id&#x60; and
&#x60;typePattern&#x60; with &#x60;type&#x60;. The response payload is an array
containing one object per matching entity. Each entity follows the JSON entity
Representation format (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response code: _ Successful operation uses 200 OK _ Errors use a
non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    id: "id_example", // String | A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with `idPattern`.
    type: "type_example", // String | comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with `typePattern`.
    idPattern: "idPattern_example", // String | A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with `id`.
    typePattern: "typePattern_example", // String | A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with `type`.
    q: "q_example", // String | A query expression, composed of a list of statements separated by `;`, i.e., q=statement;statements;statement. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable).
    mq: "mq_example", // String | A query expression for attribute metadata, composed of a list of statements separated by `;`, i.e., mq=statement1;statement2;statement3. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable).
    georel: "georel_example", // String | Spatial relationship between matching entities and a reference shape. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).
    geometry: "geometry_example", // String | Geografical area to which the query is restricted. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).
    coords: "coords_example", // String | List of latitude-longitude pairs of coordinates separated by `;`. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).
    limit: 56, // Number | Limits the number of entities to be retrieved
    offset: 56, // Number | Establishes the offset from where entities are retrieved
    attrs: "attrs_example", // String | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order.
    metadata: "metadata_example", // String | A list of metadata names to include in the response.
    orderBy: "orderBy_example", // String | Criteria for ordering results. See [Ordering Results](https://fiware.github.io/specifications/ngsiv2/stable) section for details.
    options: "options_example" // String | Options dictionary
};
apiInstance.listEntities(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                               | Notes      |
| --------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **fiwareService**     | **String** |                                                                                                                                                                                                                                                           | [optional] |
| **fiwareServicePath** | **String** |                                                                                                                                                                                                                                                           | [optional] |
| **id**                | **String** | A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with &#x60;idPattern&#x60;.                                                                                                          | [optional] |
| **type**              | **String** | comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with &#x60;typePattern&#x60;.                                                                                                        | [optional] |
| **idPattern**         | **String** | A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with &#x60;id&#x60;.                                                                                                                     | [optional] |
| **typePattern**       | **String** | A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with &#x60;type&#x60;.                                                                                                                 | [optional] |
| **q**                 | **String** | A query expression, composed of a list of statements separated by &#x60;;&#x60;, i.e., q&#x3D;statement;statements;statement. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable).                           | [optional] |
| **mq**                | **String** | A query expression for attribute metadata, composed of a list of statements separated by &#x60;;&#x60;, i.e., mq&#x3D;statement1;statement2;statement3. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable). | [optional] |
| **georel**            | **String** | Spatial relationship between matching entities and a reference shape. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).                                                                                                  | [optional] |
| **geometry**          | **String** | Geografical area to which the query is restricted. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).                                                                                                                     | [optional] |
| **coords**            | **String** | List of latitude-longitude pairs of coordinates separated by &#x60;;&#x60;. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).                                                                                            | [optional] |
| **limit**             | **Number** | Limits the number of entities to be retrieved                                                                                                                                                                                                             | [optional] |
| **offset**            | **Number** | Establishes the offset from where entities are retrieved                                                                                                                                                                                                  | [optional] |
| **attrs**             | **String** | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order.         | [optional] |
| **metadata**          | **String** | A list of metadata names to include in the response.                                                                                                                                                                                                      | [optional] |
| **orderBy**           | **String** | Criteria for ordering results. See [Ordering Results](https://fiware.github.io/specifications/ngsiv2/stable) section for details.                                                                                                                         | [optional] |
| **options**           | **String** | Options dictionary                                                                                                                                                                                                                                        | [optional] |

### Return type

[**[Entity]**](Entity.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## removeEntity

> removeEntity(entityId, opts)

Delete the entity. Response: _ Successful operation uses 204 No Content _ Errors
use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let entityId = "entityId_example"; // String | Id of the entity to be deleted
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example" // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
};
apiInstance.removeEntity(entityId, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully.");
    }
});
```

### Parameters

| Name                  | Type       | Description                                                                                     | Notes      |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Id of the entity to be deleted                                                                  |
| **fiwareService**     | **String** |                                                                                                 | [optional] |
| **fiwareServicePath** | **String** |                                                                                                 | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## replaceAllEntityAttributes

> replaceAllEntityAttributes(entityId, body, opts)

The request payload is an object representing the new entity attributes. The
object follows the JSON entity Representation format (described in a
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
above), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The
attributes previously existing in the entity are removed and replaced by the
ones in the request. Response: _ Successful operation uses 204 No Content _
Errors use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let entityId = "entityId_example"; // String | Id of the entity in question.
let body = null; // Object |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example", // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
    options: "options_example" // String | Operations options
};
apiInstance.replaceAllEntityAttributes(
    entityId,
    body,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully.");
        }
    }
);
```

### Parameters

| Name                  | Type       | Description                                                                                     | Notes      |
| --------------------- | ---------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Id of the entity in question.                                                                   |
| **body**              | **Object** |                                                                                                 |
| **fiwareService**     | **String** |                                                                                                 | [optional] |
| **fiwareServicePath** | **String** |                                                                                                 | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |
| **options**           | **String** | Operations options                                                                              | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## retrieveEntity

> Entity retrieveEntity(entityId, opts)

The response is an object representing the entity identified by the ID. The
object follows the JSON entity Representation format (described in a
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). This operation must return one entity element only, but there may be
more than one entity with the same ID (e.g. entities with same ID but different
types). In such case, an error message is returned, with the HTTP status code
set to 409 Conflict. Response: _ Successful operation uses 200 OK _ Errors use a
non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let entityId = "entityId_example"; // String | Id of the entity to be retrieved
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example", // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
    attrs: "attrs_example", // String | Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
    metadata: "metadata_example", // String | A list of metadata names to include in the response. See \"Filtering out attributes and metadata\" section for more detail.
    options: "options_example" // String | Options dictionary
};
apiInstance.retrieveEntity(entityId, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                                                                                        | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **entityId**          | **String** | Id of the entity to be retrieved                                                                                                                                                                                                                                                                                   |
| **fiwareService**     | **String** |                                                                                                                                                                                                                                                                                                                    | [optional] |
| **fiwareServicePath** | **String** |                                                                                                                                                                                                                                                                                                                    | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in case there are several entities with the same entity id.                                                                                                                                                                                                                        | [optional] |
| **attrs**             | **String** | Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. | [optional] |
| **metadata**          | **String** | A list of metadata names to include in the response. See \&quot;Filtering out attributes and metadata\&quot; section for more detail.                                                                                                                                                                              | [optional] |
| **options**           | **String** | Options dictionary                                                                                                                                                                                                                                                                                                 | [optional] |

### Return type

[**Entity**](Entity.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## retrieveEntityAttributes

> Object retrieveEntityAttributes(entityId, opts)

This request is similar to retreiving the whole entity, however this one omits
the &#x60;id&#x60; and &#x60;type&#x60; fields. Just like the general request of
getting an entire entity, this operation must return only one entity element. If
more than one entity with the same ID is found (e.g. entities with same ID but
different type), an error message is returned, with the HTTP status code set to
409 Conflict. Response: _ Successful operation uses 200 OK _ Errors use a
non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let entityId = "entityId_example"; // String | Id of the entity to be retrieved
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example", // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
    attrs: "attrs_example", // String | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response.
    metadata: "metadata_example", // String | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail.
    options: "options_example" // String | Options dictionary
};
apiInstance.retrieveEntityAttributes(
    entityId,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + data);
        }
    }
);
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                                                                                          | Notes      |
| --------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Id of the entity to be retrieved                                                                                                                                                                                                                                                                                     |
| **fiwareService**     | **String** |                                                                                                                                                                                                                                                                                                                      | [optional] |
| **fiwareServicePath** | **String** |                                                                                                                                                                                                                                                                                                                      | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.                                                                                                                                                                                                                      | [optional] |
| **attrs**             | **String** | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. | [optional] |
| **metadata**          | **String** | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail.                                                                                                                                     | [optional] |
| **options**           | **String** | Options dictionary                                                                                                                                                                                                                                                                                                   | [optional] |

### Return type

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## updateExistingEntityAttributes

> updateExistingEntityAttributes(entityId, body, opts)

The request payload is an object representing the attributes to update. The
object follows the JSON entity Representation format (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The
entity attributes are updated with the ones in the payload. In addition to that,
if one or more attributes in the payload doesn&#39;t exist in the entity, an
error is returned. Response: _ Successful operation uses 204 No Content _ Errors
use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let entityId = "entityId_example"; // String | Id of the entity to be updated
let body = null; // Object |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example", // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
    options: "options_example" // String | Operations options
};
apiInstance.updateExistingEntityAttributes(
    entityId,
    body,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully.");
        }
    }
);
```

### Parameters

| Name                  | Type       | Description                                                                                 | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Id of the entity to be updated                                                              |
| **body**              | **Object** |                                                                                             |
| **fiwareService**     | **String** |                                                                                             | [optional] |
| **fiwareServicePath** | **String** |                                                                                             | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] |
| **options**           | **String** | Operations options                                                                          | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## updateOrAppendEntityAttributes

> updateOrAppendEntityAttributes(entityId, body, opts)

The request payload is an object representing the attributes to append or
update. The object follows the JSON entity Representation format (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section), except that &#x60;id&#x60; and &#x60;type&#x60; are not allowed. The
entity attributes are updated with the ones in the payload, depending on whether
the &#x60;append&#x60; operation option is used or not. _ If &#x60;append&#x60;
is not used: the entity attributes are updated (if they previously exist) or
appended (if they don&#39;t previously exist) with the ones in the payload. _ If
&#x60;append&#x60; is used (i.e. strict append semantics): all the attributes in
the payload not previously existing in the entity are appended. In addition to
that, in case some of the attributes in the payload already exist in the entity,
an error is returned. Response: _ Successful operation uses 204 No Content _
Errors use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

### Example

```javascript
import NgsiV2 from "ngsi_v2";
let defaultClient = NgsiV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiV2.EntitiesApi();
let entityId = "entityId_example"; // String | Entity id to be updated
let body = null; // Object |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example", // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
    options: "options_example" // String | Operations options
};
apiInstance.updateOrAppendEntityAttributes(
    entityId,
    body,
    opts,
    (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully.");
        }
    }
);
```

### Parameters

| Name                  | Type       | Description                                                                                 | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Entity id to be updated                                                                     |
| **body**              | **Object** |                                                                                             |
| **fiwareService**     | **String** |                                                                                             | [optional] |
| **fiwareServicePath** | **String** |                                                                                             | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] |
| **options**           | **String** | Operations options                                                                          | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json
