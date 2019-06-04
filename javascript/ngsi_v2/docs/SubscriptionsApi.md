# NgsiV2.SubscriptionsApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                   | HTTP request                               | Description |
| ------------------------------------------------------------------------ | ------------------------------------------ | ----------- |
| [**createANewSubscription**](SubscriptionsApi.md#createANewSubscription) | **POST** /subscriptions                    |
| [**deleteSubscription**](SubscriptionsApi.md#deleteSubscription)         | **DELETE** /subscriptions/{subscriptionId} |
| [**retrieveSubscription**](SubscriptionsApi.md#retrieveSubscription)     | **GET** /subscriptions/{subscriptionId}    |
| [**retrieveSubscriptions**](SubscriptionsApi.md#retrieveSubscriptions)   | **GET** /subscriptions                     |
| [**updateSubscription**](SubscriptionsApi.md#updateSubscription)         | **PATCH** /subscriptions/{subscriptionId}  |

## createANewSubscription

> createANewSubscription(subscriptionBody, opts)

Creates a new subscription. The subscription is represented by a JSON object as
described at the beginning of this section. Response: _ Successful operation
uses 201 Created _ Errors use a non-2xx and (optionally) an error payload. See
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

let apiInstance = new NgsiV2.SubscriptionsApi();
let subscriptionBody = new NgsiV2.SubscriptionBody(); // SubscriptionBody |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example" // String |
};
apiInstance.createANewSubscription(
    subscriptionBody,
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

| Name                  | Type                                        | Description | Notes      |
| --------------------- | ------------------------------------------- | ----------- | ---------- |
| **subscriptionBody**  | [**SubscriptionBody**](SubscriptionBody.md) |             |
| **fiwareService**     | **String**                                  |             | [optional] |
| **fiwareServicePath** | **String**                                  |             | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

## deleteSubscription

> deleteSubscription(subscriptionId, opts)

Cancels subscription. Response: _ Successful operation uses 204 No Content _
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

let apiInstance = new NgsiV2.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription Id.
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example" // String |
};
apiInstance.deleteSubscription(
    subscriptionId,
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

| Name                  | Type       | Description      | Notes      |
| --------------------- | ---------- | ---------------- | ---------- |
| **subscriptionId**    | **String** | subscription Id. |
| **fiwareService**     | **String** |                  | [optional] |
| **fiwareServicePath** | **String** |                  | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## retrieveSubscription

> Subscription retrieveSubscription(subscriptionId, opts)

The response is the subscription represented by a JSON object as described at
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

let apiInstance = new NgsiV2.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription Id.
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example" // String |
};
apiInstance.retrieveSubscription(
    subscriptionId,
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

| Name                  | Type       | Description      | Notes      |
| --------------------- | ---------- | ---------------- | ---------- |
| **subscriptionId**    | **String** | subscription Id. |
| **fiwareService**     | **String** |                  | [optional] |
| **fiwareServicePath** | **String** |                  | [optional] |

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## retrieveSubscriptions

> [Subscription] retrieveSubscriptions(opts)

Returns a list of all the subscriptions present in the system. Response: _
Successful operation uses 200 OK _ Errors use a non-2xx and (optionally) an
error payload.See subsection on
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

let apiInstance = new NgsiV2.SubscriptionsApi();
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example", // String |
    limit: 56, // Number | Limit the number of types to be retrieved
    offset: 56, // Number | Skip a number of records
    options: "options_example" // String | Options dictionary
};
apiInstance.retrieveSubscriptions(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + data);
    }
});
```

### Parameters

| Name                  | Type       | Description                               | Notes      |
| --------------------- | ---------- | ----------------------------------------- | ---------- |
| **fiwareService**     | **String** |                                           | [optional] |
| **fiwareServicePath** | **String** |                                           | [optional] |
| **limit**             | **Number** | Limit the number of types to be retrieved | [optional] |
| **offset**            | **Number** | Skip a number of records                  | [optional] |
| **options**           | **String** | Options dictionary                        | [optional] |

### Return type

[**[Subscription]**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

## updateSubscription

> updateSubscription(subscriptionId, subscriptionBody, opts)

Only the fields included in the request are updated in the subscription.
Response: _ Successful operation uses 204 No Content _ Errors use a non-2xx and
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

let apiInstance = new NgsiV2.SubscriptionsApi();
let subscriptionId = "subscriptionId_example"; // String | subscription Id.
let subscriptionBody = new NgsiV2.SubscriptionBody(); // SubscriptionBody |
let opts = {
    fiwareService: "fiwareService_example", // String |
    fiwareServicePath: "fiwareServicePath_example" // String |
};
apiInstance.updateSubscription(
    subscriptionId,
    subscriptionBody,
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

| Name                  | Type                                        | Description      | Notes      |
| --------------------- | ------------------------------------------- | ---------------- | ---------- |
| **subscriptionId**    | **String**                                  | subscription Id. |
| **subscriptionBody**  | [**SubscriptionBody**](SubscriptionBody.md) |                  |
| **fiwareService**     | **String**                                  |                  | [optional] |
| **fiwareServicePath** | **String**                                  |                  | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json
