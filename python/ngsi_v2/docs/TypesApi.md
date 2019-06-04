# ngsi_v2.TypesApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                         | HTTP request                | Description |
| -------------------------------------------------------------- | --------------------------- | ----------- |
| [**retrieve_entity_type**](TypesApi.md#retrieve_entity_type)   | **GET** /types/{entityType} |
| [**retrieve_entity_types**](TypesApi.md#retrieve_entity_types) | **GET** /types/             |

# **retrieve_entity_type**

> EntityTypeBody retrieve_entity_type(entity_type,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path)

This operation returns a JSON object with information about the type: _ `attrs`
: the set of attribute names along with all the entities of such type,
represented in a JSON object whose keys are the attribute names and whose values
contain information of such attributes (in particular a list of the types used
by attributes with that name along with all the entities). _ `count` : the
number of entities belonging to that type. Response code: _ Successful operation
uses 200 OK _ Errors use a non-2xx and (optionally) an error payload. See
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
api_instance = ngsi_v2.TypesApi(ngsi_v2.ApiClient(configuration))
entity_type = 'entity_type_example' # str | Entity Type
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_response = api_instance.retrieve_entity_type(entity_type, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TypesApi->retrieve_entity_type: %s\n" % e)
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
api_instance = ngsi_v2.TypesApi(ngsi_v2.ApiClient(configuration))
entity_type = 'entity_type_example' # str | Entity Type
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)

try:
    api_response = api_instance.retrieve_entity_type(entity_type, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TypesApi->retrieve_entity_type: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **entity_type**         | **str** | Entity Type                                                                                                                                                                                                                                |
| **fiware_service**      | **str** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |

### Return type

[**EntityTypeBody**](EntityTypeBody.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | EntityType    | -                |
| **4XX**     | error payload | -                |
| **5XX**     | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **retrieve_entity_types**

> list[EntityType] retrieve_entity_types(fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, limit=limit, offset=offset,
> options=options)

If the `values` option is not in use, this operation returns a JSON array with
the entity types. Each element is a JSON object with information about the type:
_ `type` : the entity type name. _ `attrs` : the set of attribute names along
with all the entities of such type, represented in a JSON object whose keys are
the attribute names and whose values contain information of such attributes (in
particular a list of the types used by attributes with that name along with all
the entities). _ `count` : the number of entities belonging to that type. If the
`values` option is used, the operation returns a JSON array with a list of
entity type names as strings. Results are ordered by entity `type` in
alphabetical order. Response code: _ Successful operation uses 200 OK \* Errors
use a non-2xx and (optionally) an error payload. See subsection on
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
api_instance = ngsi_v2.TypesApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)
limit = 56 # int | Limit the number of types to be retrieved. (optional)
offset = 56 # int | Skip a number of records. (optional)
options = 'options_example' # str | Options dictionary. (optional)

try:
    api_response = api_instance.retrieve_entity_types(fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TypesApi->retrieve_entity_types: %s\n" % e)
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
api_instance = ngsi_v2.TypesApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str | When \"-multiservice\" is used, Orion uses the \"Fiware-Service\" HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used.. (optional)
fiware_service_path = 'fiware_service_path_example' # str | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don't include service path information in the database) belongs to a root scope \"/\" implicitely. (optional)
limit = 56 # int | Limit the number of types to be retrieved. (optional)
offset = 56 # int | Skip a number of records. (optional)
options = 'options_example' # str | Options dictionary. (optional)

try:
    api_response = api_instance.retrieve_entity_types(fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TypesApi->retrieve_entity_types: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **fiware_service**      | **str** | When \&quot;-multiservice\&quot; is used, Orion uses the \&quot;Fiware-Service\&quot; HTTP header in the request to identify the service/tenant. If the header is not present in the HTTP request, the default service/tenant is used..    | [optional] |
| **fiware_service_path** | **str** | Fiware-ServicePath is an optional header. It is assumed that all the entities created without Fiware-ServicePath (or that don&#39;t include service path information in the database) belongs to a root scope \&quot;/\&quot; implicitely. | [optional] |
| **limit**               | **int** | Limit the number of types to be retrieved.                                                                                                                                                                                                 | [optional] |
| **offset**              | **int** | Skip a number of records.                                                                                                                                                                                                                  | [optional] |
| **options**             | **str** | Options dictionary.                                                                                                                                                                                                                        | [optional] |

### Return type

[**list[EntityType]**](EntityType.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | List of EntityType | -                |
| **4XX**     | error payload      | -                |
| **5XX**     | error payload      | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
