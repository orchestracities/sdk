# ngsi_v2.BatchOperationsApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                     | HTTP request        | Description |
| ------------------------------------------ | ------------------- | ----------- |
| [**notify**](BatchOperationsApi.md#notify) | **POST** /op/notify |
| [**query**](BatchOperationsApi.md#query)   | **POST** /op/query  |
| [**update**](BatchOperationsApi.md#update) | **POST** /op/update |

# **notify**

> notify(batch_notify, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, options=options)

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
api_instance = ngsi_v2.BatchOperationsApi(ngsi_v2.ApiClient(configuration))
batch_notify = ngsi_v2.BatchNotify() # BatchNotify |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_instance.notify(batch_notify, fiware_service=fiware_service, fiware_service_path=fiware_service_path, options=options)
except ApiException as e:
    print("Exception when calling BatchOperationsApi->notify: %s\n" % e)
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
api_instance = ngsi_v2.BatchOperationsApi(ngsi_v2.ApiClient(configuration))
batch_notify = ngsi_v2.BatchNotify() # BatchNotify |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_instance.notify(batch_notify, fiware_service=fiware_service, fiware_service_path=fiware_service_path, options=options)
except ApiException as e:
    print("Exception when calling BatchOperationsApi->notify: %s\n" % e)
```

### Parameters

| Name                    | Type                              | Description        | Notes      |
| ----------------------- | --------------------------------- | ------------------ | ---------- |
| **batch_notify**        | [**BatchNotify**](BatchNotify.md) |                    |
| **fiware_service**      | **str**                           |                    | [optional] |
| **fiware_service_path** | **str**                           |                    | [optional] |
| **options**             | **str**                           | Options dictionary | [optional] |

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
| **200**     |               | -                |
| **4xx**     | error payload | -                |
| **5xx**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **query**

> list[Entity] query(batch_query, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, limit=limit, offset=offset,
> order_by=order_by, options=options)

The response payload is an Array containing one object per matching entity, or
an empty array `[]` if no entities are found. The entities follow the JSON
entity Representation format (described in the section
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).
The payload may contain the following elements (all of them optional): +
`entities`: a list of entites to search for. Each element is represented by a
JSON object with the following elements: + `id` or `idPattern`: Id or pattern of
the affected entities. Both cannot be used at the same time, but at least one of
them must be present. + `type` or `typePattern`: Type or type pattern of the
entities to search for. Both cannot be used at the same time. If omitted, it
means \"any entity type\". + `attributes`: a list of attribute names to search
for. If omitted, it means \"all attributes\". Response code: _ Successful
operation uses 200 OK _ Errors use a non-2xx and (optionally) an error payload.
See subsection on
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
api_instance = ngsi_v2.BatchOperationsApi(ngsi_v2.ApiClient(configuration))
batch_query = ngsi_v2.BatchQuery() # BatchQuery |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
limit = 56 # int | Limit the number of entities to be retrieved. (optional)
offset = 56 # int | Skip a number of records. (optional)
order_by = 'order_by_example' # str | Criteria for ordering results. See \"Ordering Results\" section for details. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.query(batch_query, fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, order_by=order_by, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BatchOperationsApi->query: %s\n" % e)
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
api_instance = ngsi_v2.BatchOperationsApi(ngsi_v2.ApiClient(configuration))
batch_query = ngsi_v2.BatchQuery() # BatchQuery |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
limit = 56 # int | Limit the number of entities to be retrieved. (optional)
offset = 56 # int | Skip a number of records. (optional)
order_by = 'order_by_example' # str | Criteria for ordering results. See \"Ordering Results\" section for details. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.query(batch_query, fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, order_by=order_by, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling BatchOperationsApi->query: %s\n" % e)
```

### Parameters

| Name                    | Type                            | Description                                                                            | Notes      |
| ----------------------- | ------------------------------- | -------------------------------------------------------------------------------------- | ---------- |
| **batch_query**         | [**BatchQuery**](BatchQuery.md) |                                                                                        |
| **fiware_service**      | **str**                         |                                                                                        | [optional] |
| **fiware_service_path** | **str**                         |                                                                                        | [optional] |
| **limit**               | **int**                         | Limit the number of entities to be retrieved.                                          | [optional] |
| **offset**              | **int**                         | Skip a number of records.                                                              | [optional] |
| **order_by**            | **str**                         | Criteria for ordering results. See \&quot;Ordering Results\&quot; section for details. | [optional] |
| **options**             | **str**                         | Options dictionary                                                                     | [optional] |

### Return type

[**list[Entity]**](Entity.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     |               | -                |
| **4xx**     | error payload | -                |
| **5xx**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **update**

> update(batch_update, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, options=options)

This operation allows to create, update and/or delete several entities in a
single batch operation. The payload is an object with two properties: +
`actionType`, to specify the kind of update action to do: either `append`,
`appendStrict`, `update`, `delete`. + `entities`, an array of entities, each one
specified using the JSON entity Representation format (described in the section
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)).
Response: _ Successful operation uses 204 No Content. _ Errors use a non-2xx and
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
api_instance = ngsi_v2.BatchOperationsApi(ngsi_v2.ApiClient(configuration))
batch_update = ngsi_v2.BatchUpdate() # BatchUpdate |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_instance.update(batch_update, fiware_service=fiware_service, fiware_service_path=fiware_service_path, options=options)
except ApiException as e:
    print("Exception when calling BatchOperationsApi->update: %s\n" % e)
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
api_instance = ngsi_v2.BatchOperationsApi(ngsi_v2.ApiClient(configuration))
batch_update = ngsi_v2.BatchUpdate() # BatchUpdate |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_instance.update(batch_update, fiware_service=fiware_service, fiware_service_path=fiware_service_path, options=options)
except ApiException as e:
    print("Exception when calling BatchOperationsApi->update: %s\n" % e)
```

### Parameters

| Name                    | Type                              | Description        | Notes      |
| ----------------------- | --------------------------------- | ------------------ | ---------- |
| **batch_update**        | [**BatchUpdate**](BatchUpdate.md) |                    |
| **fiware_service**      | **str**                           |                    | [optional] |
| **fiware_service_path** | **str**                           |                    | [optional] |
| **options**             | **str**                           | Options dictionary | [optional] |

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
| **4xx**     | error payload | -                |
| **5xx**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
