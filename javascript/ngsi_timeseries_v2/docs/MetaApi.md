# NgsiTimeseriesV2.MetaApi

All URIs are relative to _https://api.s.orchestracities.com/timeseries_

| Method                                                            | HTTP request     | Description                                                                             |
| ----------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| [**reporterHealthGetHealth**](MetaApi.md#reporterHealthGetHealth) | **GET** /health  | Returns the health-check status of QuantumLeap and the services it depends on.          |
| [**reporterReporterConfig**](MetaApi.md#reporterReporterConfig)   | **POST** /config | (To Be Implemented) Customize your persistance configuration to better suit your needs. |
| [**reporterVersionVersion**](MetaApi.md#reporterVersionVersion)   | **GET** /version | Returns the version of QuantumLeap.                                                     |

## reporterHealthGetHealth

> Status reporterHealthGetHealth()

Returns the health-check status of QuantumLeap and the services it depends on.

This endpoint is intended for administrators of QuantumLeap. Using the
information returned by this endpoint they can diagnose problems in the service
or its dependencies. This information is also useful for cloud tools such as
orchestrators and load balancers with rules based on health-checks. Due to the
lack of a standardized response format, we base the implementation on the draft
of https://inadarei.github.io/rfc-healthcheck/ QuantumlLeap&#39;s dependencies
are the following: - CrateDB: Critical - Redis: Critical only if geocoding is
enabled. - OSM: Non-critical

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.MetaApi();
apiInstance.reporterHealthGetHealth((error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## reporterReporterConfig

> reporterReporterConfig(opts)

(To Be Implemented) Customize your persistance configuration to better suit your
needs.

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.MetaApi();
let opts = {
    type: "type_example", // String | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType.
    replicas: 3.4 // Number | The number of replicas to use for the selected types.
};
apiInstance.reporterReporterConfig(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully.");
    }
});
```

### Parameters

| Name         | Type       | Description                                                                                                                                                                                                                              | Notes      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **type**     | **String** | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType. | [optional] |
| **replicas** | **Number** | The number of replicas to use for the selected types.                                                                                                                                                                                    | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## reporterVersionVersion

> Version reporterVersionVersion()

Returns the version of QuantumLeap.

### Example

```javascript
import NgsiTimeseriesV2 from "ngsi_timeseries_v2";
let defaultClient = NgsiTimeseriesV2.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NgsiTimeseriesV2.MetaApi();
apiInstance.reporterVersionVersion((error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Version**](Version.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json
