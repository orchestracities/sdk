# NgsiV2.APIEntryPointApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                               | HTTP request | Description |
| -------------------------------------------------------------------- | ------------ | ----------- |
| [**retrieveAPIResources**](APIEntryPointApi.md#retrieveAPIResources) | **GET** /    |

## retrieveAPIResources

> APIEntryPoint retrieveAPIResources()

This resource does not have any attributes. Instead it offers the initial API
affordances in the form of the links in the JSON body. It is recommended to
follow the \&quot;url\&quot; link values,
[Link](https://tools.ietf.org/html/rfc5988) or Location headers where applicable
to retrieve resources. Instead of constructing your own URLs, to keep your
client decoupled from implementation details.

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

let apiInstance = new NgsiV2.APIEntryPointApi();
apiInstance.retrieveAPIResources((error, data, response) => {
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

[**APIEntryPoint**](APIEntryPoint.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json
