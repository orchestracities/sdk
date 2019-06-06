# NgsiV2.RegistrationsApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                 | HTTP request                               | Description |
| ---------------------------------------------------------------------- | ------------------------------------------ | ----------- |
| [**createRegistrations**](RegistrationsApi.md#createRegistrations)     | **POST** /registrations                    |
| [**deleteRegistration**](RegistrationsApi.md#deleteRegistration)       | **DELETE** /registrations/{registrationId} |
| [**retrieveRegistration**](RegistrationsApi.md#retrieveRegistration)   | **GET** /registrations/{registrationId}    |
| [**retrieveRegistrations**](RegistrationsApi.md#retrieveRegistrations) | **GET** /registrations                     |
| [**updateRegistration**](RegistrationsApi.md#updateRegistration)       | **PATCH** /registrations/{registrationId}  |

## createRegistrations

> createRegistrations(registrationBody, opts)

Creates a new context provider registration. This is typically used for binding
context sources as providers of certain data. The registration is represented by
a JSON object as described at the beginning of this section. Response: _
Successful operation uses 201 Created _ Errors use a non-2xx and (optionally) an
error payload. See subsection on
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

let apiInstance = new NgsiV2.RegistrationsApi();
let registrationBody = new NgsiV2.RegistrationBody(); // RegistrationBody |
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example" // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
};
apiInstance.createRegistrations(
    registrationBody,
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

| Name                  | Type                                        | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **registrationBody**  | [**RegistrationBody**](RegistrationBody.md) |                                                                                                                                                                                                                                            |
| **fiwareService**     | **String**                                  | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiwareServicePath** | **String**                                  | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## deleteRegistration

> deleteRegistration(registrationId, opts)

Cancels a context provider registration. Response: _ Successful operation uses
204 No Content _ Errors use a non-2xx and (optionally) an error payload. See
subsection on
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

let apiInstance = new NgsiV2.RegistrationsApi();
let registrationId = "registrationId_example"; // String | registration Id.
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example" // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
};
apiInstance.deleteRegistration(
    registrationId,
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

| Name                  | Type       | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **registrationId**    | **String** | registration Id.                                                                                                                                                                                                                           |
| **fiwareService**     | **String** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiwareServicePath** | **String** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## retrieveRegistration

> Registration retrieveRegistration(registrationId, opts)

The response is the registration represented by a JSON object as described at
the beginning of this section. Response: _ Successful operation uses 200 OK _
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

let apiInstance = new NgsiV2.RegistrationsApi();
let registrationId = "registrationId_example"; // String | registration Id.
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example" // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
};
apiInstance.retrieveRegistration(
    registrationId,
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

| Name                  | Type       | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **registrationId**    | **String** | registration Id.                                                                                                                                                                                                                           |
| **fiwareService**     | **String** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiwareServicePath** | **String** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

[**Registration**](Registration.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## retrieveRegistrations

> [Registration] retrieveRegistrations(opts)

Lists all the context provider registrations present in the system.

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

let apiInstance = new NgsiV2.RegistrationsApi();
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example", // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
    limit: 56, // Number | Limit the number of types to be retrieved
    offset: 56, // Number | Skip a number of records
    options: "options_example" // String | Options dictionary
};
apiInstance.retrieveRegistrations(opts, (error, data, response) => {
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
| **limit**             | **Number** | Limit the number of types to be retrieved                                                                                                                                                                                                  | [optional] |
| **offset**            | **Number** | Skip a number of records                                                                                                                                                                                                                   | [optional] |
| **options**           | **String** | Options dictionary                                                                                                                                                                                                                         | [optional] |

### Return type

[**[Registration]**](Registration.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## updateRegistration

> updateRegistration(registrationId, registrationBody, opts)

Creates a new context provider registration. This is typically used for binding
context sources as providers of certain data. The registration is represented by
a JSON object as described at the beginning of this section. Response: _
Successful operation uses 201 Created _ Errors use a non-2xx and (optionally) an
error payload. See subsection on
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

let apiInstance = new NgsiV2.RegistrationsApi();
let registrationId = "registrationId_example"; // String | registration Id.
let registrationBody = new NgsiV2.RegistrationBody(); // RegistrationBody |
let opts = {
    fiwareService: "fiwareService_example", // String | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..
    fiwareServicePath: "fiwareServicePath_example" // String | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely.
};
apiInstance.updateRegistration(
    registrationId,
    registrationBody,
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

| Name                  | Type                                        | Description                                                                                                                                                                                                                                | Notes      |
| --------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **registrationId**    | **String**                                  | registration Id.                                                                                                                                                                                                                           |
| **registrationBody**  | [**RegistrationBody**](RegistrationBody.md) |                                                                                                                                                                                                                                            |
| **fiwareService**     | **String**                                  | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiwareServicePath** | **String**                                  | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json
