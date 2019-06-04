# NgsiV2.AttributesApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                | HTTP request                                     | Description |
| --------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [**getAttributeData**](AttributesApi.md#getAttributeData)             | **GET** /entities/{entityId}/attrs/{attrName}    |
| [**removeASingleAttribute**](AttributesApi.md#removeASingleAttribute) | **DELETE** /entities/{entityId}/attrs/{attrName} |
| [**updateAttributeData**](AttributesApi.md#updateAttributeData)       | **PUT** /entities/{entityId}/attrs/{attrName}    |

## getAttributeData

> Attribute getAttributeData(entityId, attrName, opts)

Returns a JSON object with the attribute data of the attribute. The object
follows the JSON Representation for attributes (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response: _ Successful operation uses 200 OK. _ Errors use a non-2xx
and (optionally) an error payload. See subsection on
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

let apiInstance = new NgsiV2.AttributesApi();
let entityId = "entityId_example"; // String | Id of the entity
let attrName = "attrName_example"; // String | Name of the attribute to be retrieved.
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example", // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
    metadata: "metadata_example" // String | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail.
};
apiInstance.getAttributeData(
    entityId,
    attrName,
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

| Name                  | Type       | Description                                                                                                                                                                      | Notes      |
| --------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String** | Id of the entity                                                                                                                                                                 |
| **attrName**          | **String** | Name of the attribute to be retrieved.                                                                                                                                           |
| **fiwareService**     | **String** |                                                                                                                                                                                  | [optional] |
| **fiwareServicePath** | **String** |                                                                                                                                                                                  | [optional] |
| **type**              | **String** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.                                                                                  | [optional] |
| **metadata**          | **String** | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail. | [optional] |

### Return type

[**Attribute**](Attribute.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## removeASingleAttribute

> removeASingleAttribute(entityId, attrName, opts)

Removes an entity attribute. Response: _ Successful operation uses 204 No
Content _ Errors use a non-2xx and (optionally) an error payload. See subsection
on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
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

let apiInstance = new NgsiV2.AttributesApi();
let entityId = "entityId_example"; // String | Id of the entity.
let attrName = "attrName_example"; // String | Attribute name.
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example" // String | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.
};
apiInstance.removeASingleAttribute(
    entityId,
    attrName,
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
| **entityId**          | **String** | Id of the entity.                                                                               |
| **attrName**          | **String** | Attribute name.                                                                                 |
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

## updateAttributeData

> updateAttributeData(entityId, attrName, attribute, opts)

The request payload is an object representing the new attribute data. Previous
attribute data is replaced by the one in the request. The object follows the
JSON Representation for attributes (described in
[JSON Attribute Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response: _ Successful operation uses 204 No Content _ Errors use a
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

let apiInstance = new NgsiV2.AttributesApi();
let entityId = "entityId_example"; // String | Id of the entity to update
let attrName = "attrName_example"; // String | Attribute name
let attribute = new NgsiV2.Attribute(); // Attribute |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    type: "type_example" // String | Entity type, to avoid ambiguity in case there are several entities with the same entity id.
};
apiInstance.updateAttributeData(
    entityId,
    attrName,
    attribute,
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

| Name                  | Type                          | Description                                                                                 | Notes      |
| --------------------- | ----------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| **entityId**          | **String**                    | Id of the entity to update                                                                  |
| **attrName**          | **String**                    | Attribute name                                                                              |
| **attribute**         | [**Attribute**](Attribute.md) |                                                                                             |
| **fiwareService**     | **String**                    |                                                                                             | [optional] |
| **fiwareServicePath** | **String**                    |                                                                                             | [optional] |
| **type**              | **String**                    | Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json
