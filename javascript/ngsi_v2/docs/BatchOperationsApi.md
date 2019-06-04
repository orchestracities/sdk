# NgsiV2.BatchOperationsApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                     | HTTP request        | Description |
| ------------------------------------------ | ------------------- | ----------- |
| [**notify**](BatchOperationsApi.md#notify) | **POST** /op/notify |
| [**query**](BatchOperationsApi.md#query)   | **POST** /op/query  |
| [**update**](BatchOperationsApi.md#update) | **POST** /op/update |

## notify

> notify(batchNotify, opts)

This operation is intended to consume a notification payload so that all the
entity data included by such notification is persisted, overwriting if
necessary. This operation is useful when one NGSIv2 endpoint is subscribed to
another NGSIv2 endpoint (federation scenarios). The request payload must be an
NGSIv2 notification payload. The behaviour must be exactly the same as POST
/v2/op/update with actionType equal to append. Response code: _ Successful
operation uses 200 OK _ Errors use a non-2xx and (optionally) an error payload.
See subsection on
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

let apiInstance = new NgsiV2.BatchOperationsApi();
let batchNotify = new NgsiV2.BatchNotify(); // BatchNotify |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    options: "options_example" // String | Options dictionary
};
apiInstance.notify(batchNotify, opts, (error, data, response) => {
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
| **batchNotify**       | [**BatchNotify**](BatchNotify.md) |                    |
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

## query

> [Entity] query(batchQuery, opts)

The response payload is an Array containing one object per matching entity, or
an empty array &#x60;[]&#x60; if no entities are found. The entities follow the
JSON entity Representation format (described in the section
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).
The payload may contain the following elements (all of them optional): +
&#x60;entities&#x60;: a list of entites to search for. Each element is
represented by a JSON object with the following elements: + &#x60;id&#x60; or
&#x60;idPattern&#x60;: Id or pattern of the affected entities. Both cannot be
used at the same time, but at least one of them must be present. +
&#x60;type&#x60; or &#x60;typePattern&#x60;: Type or type pattern of the
entities to search for. Both cannot be used at the same time. If omitted, it
means \&quot;any entity type\&quot;. + &#x60;attributes&#x60;: a list of
attribute names to search for. If omitted, it means \&quot;all
attributes\&quot;. Response code: _ Successful operation uses 200 OK _ Errors
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

let apiInstance = new NgsiV2.BatchOperationsApi();
let batchQuery = new NgsiV2.BatchQuery(); // BatchQuery |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    limit: 56, // Number | Limit the number of entities to be retrieved.
    offset: 56, // Number | Skip a number of records.
    orderBy: "orderBy_example", // String | Criteria for ordering results. See \"Ordering Results\" section for details.
    options: "options_example" // String | Options dictionary
};
apiInstance.query(batchQuery, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

| Name                  | Type                            | Description                                                                            | Notes      |
| --------------------- | ------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| **batchQuery**        | [**BatchQuery**](BatchQuery.md) |                                                                                        |
| **fiwareService**     | **String**                      |                                                                                        | [optional] |
| **fiwareServicePath** | **String**                      |                                                                                        | [optional] |
| **limit**             | **Number**                      | Limit the number of entities to be retrieved.                                          | [optional] |
| **offset**            | **Number**                      | Skip a number of records.                                                              | [optional] |
| **orderBy**           | **String**                      | Criteria for ordering results. See \&quot;Ordering Results\&quot; section for details. | [optional] |
| **options**           | **String**                      | Options dictionary                                                                     | [optional] |

### Return type

[**[Entity]**](Entity.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## update

> update(batchUpdate, opts)

This operation allows to create, update and/or delete several entities in a
single batch operation. The payload is an object with two properties: +
&#x60;actionType&#x60;, to specify the kind of update action to do: either
&#x60;append&#x60;, &#x60;appendStrict&#x60;, &#x60;update&#x60;,
&#x60;delete&#x60;. + &#x60;entities&#x60;, an array of entities, each one
specified using the JSON entity Representation format (described in the section
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).
Response: _ Successful operation uses 204 No Content. _ Errors use a non-2xx and
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

let apiInstance = new NgsiV2.BatchOperationsApi();
let batchUpdate = new NgsiV2.BatchUpdate(); // BatchUpdate |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    options: "options_example" // String | Options dictionary
};
apiInstance.update(batchUpdate, opts, (error, data, response) => {
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
| **batchUpdate**       | [**BatchUpdate**](BatchUpdate.md) |                    |
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
