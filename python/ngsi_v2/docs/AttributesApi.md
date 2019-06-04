# ngsi_v2.AttributesApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                      | HTTP request                                     | Description |
| --------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| [**get_attribute_data**](AttributesApi.md#get_attribute_data)               | **GET** /entities/{entityId}/attrs/{attrName}    |
| [**remove_a_single_attribute**](AttributesApi.md#remove_a_single_attribute) | **DELETE** /entities/{entityId}/attrs/{attrName} |
| [**update_attribute_data**](AttributesApi.md#update_attribute_data)         | **PUT** /entities/{entityId}/attrs/{attrName}    |

# **get_attribute_data**

> Attribute get_attribute_data(entity_id, attr_name,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path,
> type=type, metadata=metadata)

Returns a JSON object with the attribute data of the attribute. The object
follows the JSON Representation for attributes (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response: _ Successful operation uses 200 OK. _ Errors use a non-2xx
and (optionally) an error payload. See subsection on
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
api_instance = ngsi_v2.AttributesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity
attr_name = 'attr_name_example' # str | Name of the attribute to be retrieved.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail. (optional)

try:
    api_response = api_instance.get_attribute_data(entity_id, attr_name, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, metadata=metadata)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttributesApi->get_attribute_data: %s\n" % e)
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
api_instance = ngsi_v2.AttributesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity
attr_name = 'attr_name_example' # str | Name of the attribute to be retrieved.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail. (optional)

try:
    api_response = api_instance.get_attribute_data(entity_id, attr_name, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, metadata=metadata)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttributesApi->get_attribute_data: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                      | Notes      |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str** | Id of the entity                                                                                                                                                                 |
| **attr_name**           | **str** | Name of the attribute to be retrieved.                                                                                                                                           |
| **fiware_service**      | **str** |                                                                                                                                                                                  | [optional] |
| **fiware_service_path** | **str** |                                                                                                                                                                                  | [optional] |
| **type**                | **str** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.                                                                                  | [optional] |
| **metadata**            | **str** | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail. | [optional] |

### Return type

[**Attribute**](Attribute.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers                        |
| ----------- | ---------------------- | --------------------------------------- |
| **200**     | Attribute of an Entity | \* Content-Type - application/json <br> |
| **0**       | error payload          | -                                       |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **remove_a_single_attribute**

> remove_a_single_attribute(entity_id, attr_name, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, type=type)

Removes an entity attribute. Response: _ Successful operation uses 204 No
Content _ Errors use a non-2xx and (optionally) an error payload. See subsection
on [Error Responses](https://fiware.github.io/specifications/ngsiv2/stable) for
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
api_instance = ngsi_v2.AttributesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity.
attr_name = 'attr_name_example' # str | Attribute name.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_instance.remove_a_single_attribute(entity_id, attr_name, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling AttributesApi->remove_a_single_attribute: %s\n" % e)
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
api_instance = ngsi_v2.AttributesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity.
attr_name = 'attr_name_example' # str | Attribute name.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_instance.remove_a_single_attribute(entity_id, attr_name, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling AttributesApi->remove_a_single_attribute: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                     | Notes      |
| ----------------------- | ------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str** | Id of the entity.                                                                               |
| **attr_name**           | **str** | Attribute name.                                                                                 |
| **fiware_service**      | **str** |                                                                                                 | [optional] |
| **fiware_service_path** | **str** |                                                                                                 | [optional] |
| **type**                | **str** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |

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
| **0**       | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **update_attribute_data**

> update_attribute_data(entity_id, attr_name, attribute,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path,
> type=type)

The request payload is an object representing the new attribute data. Previous
attribute data is replaced by the one in the request. The object follows the
JSON Representation for attributes (described in
[JSON Attribute Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response: _ Successful operation uses 204 No Content _ Errors use a
non-2xx and (optionally) an error payload. See subsection on
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
api_instance = ngsi_v2.AttributesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to update
attr_name = 'attr_name_example' # str | Attribute name
attribute = ngsi_v2.Attribute() # Attribute |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)

try:
    api_instance.update_attribute_data(entity_id, attr_name, attribute, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling AttributesApi->update_attribute_data: %s\n" % e)
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
api_instance = ngsi_v2.AttributesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to update
attr_name = 'attr_name_example' # str | Attribute name
attribute = ngsi_v2.Attribute() # Attribute |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)

try:
    api_instance.update_attribute_data(entity_id, attr_name, attribute, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling AttributesApi->update_attribute_data: %s\n" % e)
```

### Parameters

| Name                    | Type                          | Description                                                                                 | Notes      |
| ----------------------- | ----------------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str**                       | Id of the entity to update                                                                  |
| **attr_name**           | **str**                       | Attribute name                                                                              |
| **attribute**           | [**Attribute**](Attribute.md) |                                                                                             |
| **fiware_service**      | **str**                       |                                                                                             | [optional] |
| **fiware_service_path** | **str**                       |                                                                                             | [optional] |
| **type**                | **str**                       | Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] |

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
| **0**       | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
