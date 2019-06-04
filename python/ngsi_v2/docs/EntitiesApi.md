# ngsi_v2.EntitiesApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                                      | HTTP request                         | Description |
| ------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| [**create_entity**](EntitiesApi.md#create_entity)                                           | **POST** /entities                   |
| [**list_entities**](EntitiesApi.md#list_entities)                                           | **GET** /entities                    |
| [**remove_entity**](EntitiesApi.md#remove_entity)                                           | **DELETE** /entities/{entityId}      |
| [**replace_all_entity_attributes**](EntitiesApi.md#replace_all_entity_attributes)           | **PUT** /entities/{entityId}/attrs   |
| [**retrieve_entity**](EntitiesApi.md#retrieve_entity)                                       | **GET** /entities/{entityId}         |
| [**retrieve_entity_attributes**](EntitiesApi.md#retrieve_entity_attributes)                 | **GET** /entities/{entityId}/attrs   |
| [**update_existing_entity_attributes**](EntitiesApi.md#update_existing_entity_attributes)   | **PATCH** /entities/{entityId}/attrs |
| [**update_or_append_entity_attributes**](EntitiesApi.md#update_or_append_entity_attributes) | **POST** /entities/{entityId}/attrs  |

# **create_entity**

> create_entity(request_body, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, options=options)

The payload is an object representing the entity to be created. The object
follows the JSON entity Representation format (described in a
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response: _ Successful operation uses 201 Created or 204 No Content
(if upsert option is used). Response includes a `Location` header with the URL
of the created entity. _ Errors use a non-2xx and (optionally) an error payload.
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
request_body = None # dict(str, object) |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_instance.create_entity(request_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->create_entity: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
request_body = None # dict(str, object) |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_instance.create_entity(request_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->create_entity: %s\n" % e)
```

### Parameters

| Name                    | Type                               | Description        | Notes      |
| ----------------------- | ---------------------------------- | ------------------ | ---------- |
| **request_body**        | [**dict(str, object)**](object.md) |                    |
| **fiware_service**      | **str**                            |                    | [optional] |
| **fiware_service_path** | **str**                            |                    | [optional] |
| **options**             | **str**                            | Options dictionary | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers                              |
| ----------- | ------------------------------ | --------------------------------------------- |
| **201**     | When upsert option is not used | \* Location - URL of the created entity. <br> |
| **204**     | If upsert option is used       | \* Location - URL of the created entity. <br> |
| **0**       | error payload                  | -                                             |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **list_entities**

> list[Entity] list_entities(fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, id=id, type=type,
> id_pattern=id_pattern, type_pattern=type_pattern, q=q, mq=mq, georel=georel,
> geometry=geometry, coords=coords, limit=limit, offset=offset, attrs=attrs,
> metadata=metadata, order_by=order_by, options=options)

Retrieves a list of entities that match different criteria by id, type, pattern
matching (either id or type) and/or those which match a query or geographical
query (see
[Simple Query Language](https://fiware.github.io/specifications/ngsiv2/stable)
and
[Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable)).
A given entity has to match all the criteria to be retrieved (i.e., the criteria
is combined in a logical AND way). Note that pattern matching query parameters
are incompatible (i.e. mutually exclusive) with their corresponding exact
matching parameters, i.e. `idPattern` with `id` and `typePattern` with `type`.
The response payload is an array containing one object per matching entity. Each
entity follows the JSON entity Representation format (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). Response code: _ Successful operation uses 200 OK _ Errors use a
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
id = 'id_example' # str | A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with `idPattern`. (optional)
type = 'type_example' # str | comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with `typePattern`. (optional)
id_pattern = 'id_pattern_example' # str | A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with `id`. (optional)
type_pattern = 'type_pattern_example' # str | A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with `type`. (optional)
q = 'q_example' # str | A query expression, composed of a list of statements separated by `;`, i.e., q=statement;statements;statement. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
mq = 'mq_example' # str | A query expression for attribute metadata, composed of a list of statements separated by `;`, i.e., mq=statement1;statement2;statement3. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
georel = 'georel_example' # str | Spatial relationship between matching entities and a reference shape. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
geometry = 'geometry_example' # str | Geografical area to which the query is restricted. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
coords = 'coords_example' # str | List of latitude-longitude pairs of coordinates separated by `;`. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
limit = 56 # int | Limits the number of entities to be retrieved (optional)
offset = 56 # int | Establishes the offset from where entities are retrieved (optional)
attrs = 'attrs_example' # str | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. (optional)
order_by = 'order_by_example' # str | Criteria for ordering results. See [Ordering Results](https://fiware.github.io/specifications/ngsiv2/stable) section for details. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.list_entities(fiware_service=fiware_service, fiware_service_path=fiware_service_path, id=id, type=type, id_pattern=id_pattern, type_pattern=type_pattern, q=q, mq=mq, georel=georel, geometry=geometry, coords=coords, limit=limit, offset=offset, attrs=attrs, metadata=metadata, order_by=order_by, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EntitiesApi->list_entities: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
id = 'id_example' # str | A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with `idPattern`. (optional)
type = 'type_example' # str | comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with `typePattern`. (optional)
id_pattern = 'id_pattern_example' # str | A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with `id`. (optional)
type_pattern = 'type_pattern_example' # str | A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with `type`. (optional)
q = 'q_example' # str | A query expression, composed of a list of statements separated by `;`, i.e., q=statement;statements;statement. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
mq = 'mq_example' # str | A query expression for attribute metadata, composed of a list of statements separated by `;`, i.e., mq=statement1;statement2;statement3. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
georel = 'georel_example' # str | Spatial relationship between matching entities and a reference shape. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
geometry = 'geometry_example' # str | Geografical area to which the query is restricted. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
coords = 'coords_example' # str | List of latitude-longitude pairs of coordinates separated by `;`. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable). (optional)
limit = 56 # int | Limits the number of entities to be retrieved (optional)
offset = 56 # int | Establishes the offset from where entities are retrieved (optional)
attrs = 'attrs_example' # str | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. (optional)
order_by = 'order_by_example' # str | Criteria for ordering results. See [Ordering Results](https://fiware.github.io/specifications/ngsiv2/stable) section for details. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.list_entities(fiware_service=fiware_service, fiware_service_path=fiware_service_path, id=id, type=type, id_pattern=id_pattern, type_pattern=type_pattern, q=q, mq=mq, georel=georel, geometry=geometry, coords=coords, limit=limit, offset=offset, attrs=attrs, metadata=metadata, order_by=order_by, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EntitiesApi->list_entities: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                               | Notes      |
| ----------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **fiware_service**      | **str** |                                                                                                                                                                                                                                                           | [optional] |
| **fiware_service_path** | **str** |                                                                                                                                                                                                                                                           | [optional] |
| **id**                  | **str** | A comma-separated list of elements. Retrieve entities whose ID matches one of the elements in the list. Incompatible with &#x60;idPattern&#x60;.                                                                                                          | [optional] |
| **type**                | **str** | comma-separated list of elements. Retrieve entities whose type matches one of the elements in the list. Incompatible with &#x60;typePattern&#x60;.                                                                                                        | [optional] |
| **id_pattern**          | **str** | A correctly formated regular expression. Retrieve entities whose ID matches the regular expression. Incompatible with &#x60;id&#x60;.                                                                                                                     | [optional] |
| **type_pattern**        | **str** | A correctly formated regular expression. Retrieve entities whose type matches the regular expression. Incompatible with &#x60;type&#x60;.                                                                                                                 | [optional] |
| **q**                   | **str** | A query expression, composed of a list of statements separated by &#x60;;&#x60;, i.e., q&#x3D;statement;statements;statement. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable).                           | [optional] |
| **mq**                  | **str** | A query expression for attribute metadata, composed of a list of statements separated by &#x60;;&#x60;, i.e., mq&#x3D;statement1;statement2;statement3. See [Simple Query Language specification](https://fiware.github.io/specifications/ngsiv2/stable). | [optional] |
| **georel**              | **str** | Spatial relationship between matching entities and a reference shape. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).                                                                                                  | [optional] |
| **geometry**            | **str** | Geografical area to which the query is restricted. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).                                                                                                                     | [optional] |
| **coords**              | **str** | List of latitude-longitude pairs of coordinates separated by &#x60;;&#x60;. See [Geographical Queries](https://fiware.github.io/specifications/ngsiv2/stable).                                                                                            | [optional] |
| **limit**               | **int** | Limits the number of entities to be retrieved                                                                                                                                                                                                             | [optional] |
| **offset**              | **int** | Establishes the offset from where entities are retrieved                                                                                                                                                                                                  | [optional] |
| **attrs**               | **str** | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order.         | [optional] |
| **metadata**            | **str** | A list of metadata names to include in the response.                                                                                                                                                                                                      | [optional] |
| **order_by**            | **str** | Criteria for ordering results. See [Ordering Results](https://fiware.github.io/specifications/ngsiv2/stable) section for details.                                                                                                                         | [optional] |
| **options**             | **str** | Options dictionary                                                                                                                                                                                                                                        | [optional] |

### Return type

[**list[Entity]**](Entity.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | List of entities | -                |
| **0**       | error payload    | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **remove_entity**

> remove_entity(entity_id, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, type=type)

Delete the entity. Response: _ Successful operation uses 204 No Content _ Errors
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be deleted
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_instance.remove_entity(entity_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling EntitiesApi->remove_entity: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be deleted
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_instance.remove_entity(entity_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling EntitiesApi->remove_entity: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                     | Notes      |
| ----------------------- | ------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str** | Id of the entity to be deleted                                                                  |
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
| **200**     |               | -                |
| **0**       | error payload | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **replace_all_entity_attributes**

> replace_all_entity_attributes(entity_id, body, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, type=type, options=options)

The request payload is an object representing the new entity attributes. The
object follows the JSON entity Representation format (described in a
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
above), except that `id` and `type` are not allowed. The attributes previously
existing in the entity are removed and replaced by the ones in the request.
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity in question.
body = None # object |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)
options = 'options_example' # str | Operations options (optional)

try:
    api_instance.replace_all_entity_attributes(entity_id, body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->replace_all_entity_attributes: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity in question.
body = None # object |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)
options = 'options_example' # str | Operations options (optional)

try:
    api_instance.replace_all_entity_attributes(entity_id, body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->replace_all_entity_attributes: %s\n" % e)
```

### Parameters

| Name                    | Type       | Description                                                                                     | Notes      |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str**    | Id of the entity in question.                                                                   |
| **body**                | **object** |                                                                                                 |
| **fiware_service**      | **str**    |                                                                                                 | [optional] |
| **fiware_service_path** | **str**    |                                                                                                 | [optional] |
| **type**                | **str**    | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |
| **options**             | **str**    | Operations options                                                                              | [optional] |

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

# **retrieve_entity**

> Entity retrieve_entity(entity_id, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, type=type, attrs=attrs,
> metadata=metadata, options=options)

The response is an object representing the entity identified by the ID. The
object follows the JSON entity Representation format (described in a
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section). This operation must return one entity element only, but there may be
more than one entity with the same ID (e.g. entities with same ID but different
types). In such case, an error message is returned, with the HTTP status code
set to 409 Conflict. Response: _ Successful operation uses 200 OK _ Errors use a
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be retrieved
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)
attrs = 'attrs_example' # str | Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. See \"Filtering out attributes and metadata\" section for more detail. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_entity(entity_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, attrs=attrs, metadata=metadata, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EntitiesApi->retrieve_entity: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be retrieved
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)
attrs = 'attrs_example' # str | Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. See \"Filtering out attributes and metadata\" section for more detail. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_entity(entity_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, attrs=attrs, metadata=metadata, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EntitiesApi->retrieve_entity: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                                                                                        | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **entity_id**           | **str** | Id of the entity to be retrieved                                                                                                                                                                                                                                                                                   |
| **fiware_service**      | **str** |                                                                                                                                                                                                                                                                                                                    | [optional] |
| **fiware_service_path** | **str** |                                                                                                                                                                                                                                                                                                                    | [optional] |
| **type**                | **str** | Entity type, to avoid ambiguity in case there are several entities with the same entity id.                                                                                                                                                                                                                        | [optional] |
| **attrs**               | **str** | Comma-separated list of attribute names whose data must be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. | [optional] |
| **metadata**            | **str** | A list of metadata names to include in the response. See \&quot;Filtering out attributes and metadata\&quot; section for more detail.                                                                                                                                                                              | [optional] |
| **options**             | **str** | Options dictionary                                                                                                                                                                                                                                                                                                 | [optional] |

### Return type

[**Entity**](Entity.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers                        |
| ----------- | ------------- | --------------------------------------- |
| **200**     | Single Entity | \* Content-Type - application/json <br> |
| **0**       | error payload | -                                       |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **retrieve_entity_attributes**

> object retrieve_entity_attributes(entity_id, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, type=type, attrs=attrs,
> metadata=metadata, options=options)

This request is similar to retreiving the whole entity, however this one omits
the `id` and `type` fields. Just like the general request of getting an entire
entity, this operation must return only one entity element. If more than one
entity with the same ID is found (e.g. entities with same ID but different
type), an error message is returned, with the HTTP status code set to 409
Conflict. Response: _ Successful operation uses 200 OK _ Errors use a non-2xx
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be retrieved
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)
attrs = 'attrs_example' # str | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_entity_attributes(entity_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, attrs=attrs, metadata=metadata, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EntitiesApi->retrieve_entity_attributes: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be retrieved
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)
attrs = 'attrs_example' # str | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. (optional)
metadata = 'metadata_example' # str | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail. (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_entity_attributes(entity_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, attrs=attrs, metadata=metadata, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling EntitiesApi->retrieve_entity_attributes: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                                                                                          | Notes      |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str** | Id of the entity to be retrieved                                                                                                                                                                                                                                                                                     |
| **fiware_service**      | **str** |                                                                                                                                                                                                                                                                                                                      | [optional] |
| **fiware_service_path** | **str** |                                                                                                                                                                                                                                                                                                                      | [optional] |
| **type**                | **str** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id.                                                                                                                                                                                                                      | [optional] |
| **attrs**               | **str** | Comma-separated list of attribute names whose data are to be included in the response. The attributes are retrieved in the order specified by this parameter. If this parameter is not included, the attributes are retrieved in arbitrary order, and all the attributes of the entity are included in the response. | [optional] |
| **metadata**            | **str** | A list of metadata names to include in the response. See [Filtering out attributes and metadata](https://fiware.github.io/specifications/ngsiv2/stable) section for more detail.                                                                                                                                     | [optional] |
| **options**             | **str** | Options dictionary                                                                                                                                                                                                                                                                                                   | [optional] |

### Return type

**object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers                        |
| ----------- | ----------------------- | --------------------------------------- |
| **200**     | Attributes of an Entity | \* Content-Type - application/json <br> |
| **0**       | error payload           | -                                       |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **update_existing_entity_attributes**

> update_existing_entity_attributes(entity_id, body,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path,
> type=type, options=options)

The request payload is an object representing the attributes to update. The
object follows the JSON entity Representation format (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section), except that `id` and `type` are not allowed. The entity attributes are
updated with the ones in the payload. In addition to that, if one or more
attributes in the payload doesn't exist in the entity, an error is returned.
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be updated
body = None # object |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)
options = 'options_example' # str | Operations options (optional)

try:
    api_instance.update_existing_entity_attributes(entity_id, body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->update_existing_entity_attributes: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be updated
body = None # object |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)
options = 'options_example' # str | Operations options (optional)

try:
    api_instance.update_existing_entity_attributes(entity_id, body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->update_existing_entity_attributes: %s\n" % e)
```

### Parameters

| Name                    | Type       | Description                                                                                 | Notes      |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str**    | Id of the entity to be updated                                                              |
| **body**                | **object** |                                                                                             |
| **fiware_service**      | **str**    |                                                                                             | [optional] |
| **fiware_service_path** | **str**    |                                                                                             | [optional] |
| **type**                | **str**    | Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] |
| **options**             | **str**    | Operations options                                                                          | [optional] |

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

# **update_or_append_entity_attributes**

> update_or_append_entity_attributes(entity_id, body,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path,
> type=type, options=options)

The request payload is an object representing the attributes to append or
update. The object follows the JSON entity Representation format (described in
[JSON Entity Representation](https://fiware.github.io/specifications/ngsiv2/stable)
section), except that `id` and `type` are not allowed. The entity attributes are
updated with the ones in the payload, depending on whether the `append`
operation option is used or not. _ If `append` is not used: the entity
attributes are updated (if they previously exist) or appended (if they don't
previously exist) with the ones in the payload. _ If `append` is used (i.e.
strict append semantics): all the attributes in the payload not previously
existing in the entity are appended. In addition to that, in case some of the
attributes in the payload already exist in the entity, an error is returned.
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Entity id to be updated
body = None # object |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)
options = 'options_example' # str | Operations options (optional)

try:
    api_instance.update_or_append_entity_attributes(entity_id, body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->update_or_append_entity_attributes: %s\n" % e)
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
api_instance = ngsi_v2.EntitiesApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Entity id to be updated
body = None # object |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in case there are several entities with the same entity id. (optional)
options = 'options_example' # str | Operations options (optional)

try:
    api_instance.update_or_append_entity_attributes(entity_id, body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type, options=options)
except ApiException as e:
    print("Exception when calling EntitiesApi->update_or_append_entity_attributes: %s\n" % e)
```

### Parameters

| Name                    | Type       | Description                                                                                 | Notes      |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str**    | Entity id to be updated                                                                     |
| **body**                | **object** |                                                                                             |
| **fiware_service**      | **str**    |                                                                                             | [optional] |
| **fiware_service_path** | **str**    |                                                                                             | [optional] |
| **type**                | **str**    | Entity type, to avoid ambiguity in case there are several entities with the same entity id. | [optional] |
| **options**             | **str**    | Operations options                                                                          | [optional] |

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
