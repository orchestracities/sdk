# ngsi_v2.APIEntryPointApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                   | HTTP request | Description |
| ------------------------------------------------------------------------ | ------------ | ----------- |
| [**retrieve_api_resources**](APIEntryPointApi.md#retrieve_api_resources) | **GET** /    |

# **retrieve_api_resources**

> APIEntryPoint retrieve_api_resources()

This resource does not have any attributes. Instead it offers the initial API
affordances in the form of the links in the JSON body. It is recommended to
follow the \"url\" link values, [Link](https://tools.ietf.org/html/rfc5988) or
Location headers where applicable to retrieve resources. Instead of constructing
your own URLs, to keep your client decoupled from implementation details.

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import ngsi_v2
from ngsi_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_v2.APIEntryPointApi(ngsi_v2.ApiClient(configuration))

try:
    api_response = api_instance.retrieve_api_resources()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling APIEntryPointApi->retrieve_api_resources: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import ngsi_v2
from ngsi_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_v2.APIEntryPointApi(ngsi_v2.ApiClient(configuration))

try:
    api_response = api_instance.retrieve_api_resources()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling APIEntryPointApi->retrieve_api_resources: %s\n" % e)
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

### HTTP response details

| Status code | Description   | Response headers                        |
| ----------- | ------------- | --------------------------------------- |
| **200**     |               | \* Content-Type - application/json <br> |
| **4XX**     | error payload | -                                       |
| **5XX**     | error payload | -                                       |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
