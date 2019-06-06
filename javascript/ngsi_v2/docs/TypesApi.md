# NgsiV2.TypesApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                     | HTTP request                | Description |
| ---------------------------------------------------------- | --------------------------- | ----------- |
| [**retrieveEntityType**](TypesApi.md#retrieveEntityType)   | **GET** /types/{entityType} |
| [**retrieveEntityTypes**](TypesApi.md#retrieveEntityTypes) | **GET** /types/             |

## retrieveEntityType

> EntityTypeBody retrieveEntityType(entityType, opts)

This operation returns a JSON object with information about the type: _
&#x60;attrs&#x60; : the set of attribute names along with all the entities of
such type, represented in a JSON object whose keys are the attribute names and
whose values contain information of such attributes (in particular a list of the
types used by attributes with that name along with all the entities). _
&#x60;count&#x60; : the number of entities belonging to that type. Response
code: _ Successful operation uses 200 OK _ Errors use a non-2xx and (optionally)
an error payload. See subsection on
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

let apiInstance = new NgsiV2.TypesApi();
let entityType = "entityType_example"; // String | Entity Type
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example" // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
};
apiInstance.retrieveEntityType(entityType, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **entityType**        | **String** | Entity Type                                                                                                                                                                                                                                |
| **fiwareService**     | **String** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiwareServicePath** | **String** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

[**EntityTypeBody**](EntityTypeBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## retrieveEntityTypes

> [EntityType] retrieveEntityTypes(opts)

If the &#x60;values&#x60; option is not in use, this operation returns a JSON
array with the entity types. Each element is a JSON object with information
about the type: _ &#x60;type&#x60; : the entity type name. _ &#x60;attrs&#x60; :
the set of attribute names along with all the entities of such type, represented
in a JSON object whose keys are the attribute names and whose values contain
information of such attributes (in particular a list of the types used by
attributes with that name along with all the entities). _ &#x60;count&#x60; :
the number of entities belonging to that type. If the &#x60;values&#x60; option
is used, the operation returns a JSON array with a list of entity type names as
strings. Results are ordered by entity &#x60;type&#x60; in alphabetical order.
Response code: _ Successful operation uses 200 OK \* Errors use a non-2xx and
(optionally) an error payload. See subsection on
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

let apiInstance = new NgsiV2.TypesApi();
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example", // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
    limit: 56, // Number | Limit the number of types to be retrieved.
    offset: 56, // Number | Skip a number of records.
    options: "options_example" // String | Options dictionary.
};
apiInstance.retrieveEntityTypes(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

| Name                  | Type       | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **fiwareService**     | **String** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiwareServicePath** | **String** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |
| **limit**             | **Number** | Limit the number of types to be retrieved.                                                                                                                                                                                                 | [optional] |
| **offset**            | **Number** | Skip a number of records.                                                                                                                                                                                                                  | [optional] |
| **options**           | **String** | Options dictionary.                                                                                                                                                                                                                        | [optional] |

### Return type

[**[EntityType]**](EntityType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json
