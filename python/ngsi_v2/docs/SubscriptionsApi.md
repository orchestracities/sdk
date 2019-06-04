# ngsi_v2.SubscriptionsApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                         | HTTP request                               | Description |
| ------------------------------------------------------------------------------ | ------------------------------------------ | ----------- |
| [**create_a_new_subscription**](SubscriptionsApi.md#create_a_new_subscription) | **POST** /subscriptions                    |
| [**delete_subscription**](SubscriptionsApi.md#delete_subscription)             | **DELETE** /subscriptions/{subscriptionId} |
| [**retrieve_subscription**](SubscriptionsApi.md#retrieve_subscription)         | **GET** /subscriptions/{subscriptionId}    |
| [**retrieve_subscriptions**](SubscriptionsApi.md#retrieve_subscriptions)       | **GET** /subscriptions                     |
| [**update_subscription**](SubscriptionsApi.md#update_subscription)             | **PATCH** /subscriptions/{subscriptionId}  |

# **create_a_new_subscription**

> create_a_new_subscription(subscription_body, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Creates a new subscription. The subscription is represented by a JSON object as
described at the beginning of this section. Response: _ Successful operation
uses 201 Created _ Errors use a non-2xx and (optionally) an error payload. See
subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_body = ngsi_v2.SubscriptionBody() # SubscriptionBody |
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_instance.create_a_new_subscription(subscription_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->create_a_new_subscription: %s\n" % e)
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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_body = ngsi_v2.SubscriptionBody() # SubscriptionBody |
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_instance.create_a_new_subscription(subscription_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->create_a_new_subscription: %s\n" % e)
```

### Parameters

| Name                    | Type                                        | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **subscription_body**   | [**SubscriptionBody**](SubscriptionBody.md) |                                                                                                                                                                                                                                            |
| **fiware_service**      | **str**                                     | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str**                                     | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers                                    |
| ----------- | ------------- | --------------------------------------------------- |
| **201**     |               | \* Location - URL of the created subscription. <br> |
| **4XX**     | error payload | -                                                   |
| **5XX**     | error payload | -                                                   |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **delete_subscription**

> delete_subscription(subscription_id, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Cancels subscription. Response: _ Successful operation uses 204 No Content _
Errors use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_id = 'subscription_id_example' # str | subscription Id.
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_instance.delete_subscription(subscription_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->delete_subscription: %s\n" % e)
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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_id = 'subscription_id_example' # str | subscription Id.
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_instance.delete_subscription(subscription_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->delete_subscription: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **subscription_id**     | **str** | subscription Id.                                                                                                                                                                                                                           |
| **fiware_service**      | **str** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **204**     |               | -                |
| **4XX**     | error payload | -                |
| **5XX**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **retrieve_subscription**

> Subscription retrieve_subscription(subscription_id,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path)

The response is the subscription represented by a JSON object as described at
the beginning of this section. Response: _ Successful operation uses 200 OK _
Errors use a non-2xx and (optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_id = 'subscription_id_example' # str | subscription Id.
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_response = api_instance.retrieve_subscription(subscription_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->retrieve_subscription: %s\n" % e)
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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_id = 'subscription_id_example' # str | subscription Id.
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_response = api_instance.retrieve_subscription(subscription_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->retrieve_subscription: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **subscription_id**     | **str** | subscription Id.                                                                                                                                                                                                                           |
| **fiware_service**      | **str** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

[**Subscription**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     |               | -                |
| **4XX**     | error payload | -                |
| **5XX**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **retrieve_subscriptions**

> list[Subscription] retrieve_subscriptions(fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, limit=limit, offset=offset,
> options=options)

Returns a list of all the subscriptions present in the system. Response: _
Successful operation uses 200 OK _ Errors use a non-2xx and (optionally) an
error payload.See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)
limit = 56 # int | Limit the number of types to be retrieved (optional)
offset = 56 # int | Skip a number of records (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_subscriptions(fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->retrieve_subscriptions: %s\n" % e)
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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)
limit = 56 # int | Limit the number of types to be retrieved (optional)
offset = 56 # int | Skip a number of records (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_subscriptions(fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->retrieve_subscriptions: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **fiware_service**      | **str** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |
| **limit**               | **int** | Limit the number of types to be retrieved                                                                                                                                                                                                  | [optional] |
| **offset**              | **int** | Skip a number of records                                                                                                                                                                                                                   | [optional] |
| **options**             | **str** | Options dictionary                                                                                                                                                                                                                         | [optional] |

### Return type

[**list[Subscription]**](Subscription.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     |               | -                |
| **4XX**     | error payload | -                |
| **5XX**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **update_subscription**

> update_subscription(subscription_id, subscription_body,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path)

Only the fields included in the request are updated in the subscription.
Response: _ Successful operation uses 204 No Content _ Errors use a non-2xx and
(optionally) an error payload. See subsection on
[Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
more details.

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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_id = 'subscription_id_example' # str | subscription Id.
subscription_body = ngsi_v2.SubscriptionBody() # SubscriptionBody |
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_instance.update_subscription(subscription_id, subscription_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->update_subscription: %s\n" % e)
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
api_instance = ngsi_v2.SubscriptionsApi(ngsi_v2.ApiClient(configuration))
subscription_id = 'subscription_id_example' # str | subscription Id.
subscription_body = ngsi_v2.SubscriptionBody() # SubscriptionBody |
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_instance.update_subscription(subscription_id, subscription_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling SubscriptionsApi->update_subscription: %s\n" % e)
```

### Parameters

| Name                    | Type                                        | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **subscription_id**     | **str**                                     | subscription Id.                                                                                                                                                                                                                           |
| **subscription_body**   | [**SubscriptionBody**](SubscriptionBody.md) |                                                                                                                                                                                                                                            |
| **fiware_service**      | **str**                                     | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str**                                     | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **204**     |               | -                |
| **4XX**     | error payload | -                |
| **5XX**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
