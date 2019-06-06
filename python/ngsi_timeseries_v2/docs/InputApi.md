# ngsi_timeseries_v2.InputApi

All URIs are relative to _https://api.s.orchestracities.com/timeseries_

| Method                                                                             | HTTP request                    | Description                                                  |
| ---------------------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------ |
| [**reporter_delete_delete_entities**](InputApi.md#reporter_delete_delete_entities) | **DELETE** /types/{entityType}  | Delete historical data of all entities of a certain type.    |
| [**reporter_delete_delete_entity**](InputApi.md#reporter_delete_delete_entity)     | **DELETE** /entities/{entityId} | Delete historical data of a certain entity.                  |
| [**reporter_reporter_notify**](InputApi.md#reporter_reporter_notify)               | **POST** /notify                | Notify QuantumLeap the arrival of a new NGSI notification.   |
| [**reporter_reporter_subscribe**](InputApi.md#reporter_reporter_subscribe)         | **POST** /subscribe             | Subscribe QL to process Orion notifications of certain type. |

# **reporter_delete_delete_entities**

> reporter_delete_delete_entities(entity_type, from_date=from_date,
> to_date=to_date, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Delete historical data of all entities of a certain type.

Given an entity type, delete all the historical records of all entities of such
type.

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
entity_type = 'entity_type_example' # str | The entity type in which the query is restricted on. Used to constraint the search to entities of this type, specially useful when the entity id is not enough to uniquely identify an entity.
from_date = 'from_date_example' # str | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
to_date = 'to_date_example' # str | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Delete historical data of all entities of a certain type.
    api_instance.reporter_delete_delete_entities(entity_type, from_date=from_date, to_date=to_date, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_delete_delete_entities: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
entity_type = 'entity_type_example' # str | The entity type in which the query is restricted on. Used to constraint the search to entities of this type, specially useful when the entity id is not enough to uniquely identify an entity.
from_date = 'from_date_example' # str | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
to_date = 'to_date_example' # str | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Delete historical data of all entities of a certain type.
    api_instance.reporter_delete_delete_entities(entity_type, from_date=from_date, to_date=to_date, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_delete_delete_entities: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                    | Notes      |
| ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **entity_type**         | **str** | The entity type in which the query is restricted on. Used to constraint the search to entities of this type, specially useful when the entity id is not enough to uniquely identify an entity. |
| **from_date**           | **str** | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                          | [optional] |
| **to_date**             | **str** | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                             | [optional] |
| **fiware_service**      | **str** | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                 | [optional] |
| **fiware_service_path** | **str** | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                             | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: Not defined

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **204**     | Records successfully deleted. | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **reporter_delete_delete_entity**

> str reporter_delete_delete_entity(entity_id, type=type, from_date=from_date,
> to_date=to_date, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Delete historical data of a certain entity.

Given an entity (with type and id), delete all its historical records.

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | The entity id in which the query is restricted on. If the id is unique among all entity types, this could be used to uniquely identify the entity instance. Otherwise, you will have to use the entityType attribute to resolve ambiguity.
type = 'type_example' # str | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType. (optional)
from_date = 'from_date_example' # str | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
to_date = 'to_date_example' # str | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Delete historical data of a certain entity.
    api_response = api_instance.reporter_delete_delete_entity(entity_id, type=type, from_date=from_date, to_date=to_date, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InputApi->reporter_delete_delete_entity: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | The entity id in which the query is restricted on. If the id is unique among all entity types, this could be used to uniquely identify the entity instance. Otherwise, you will have to use the entityType attribute to resolve ambiguity.
type = 'type_example' # str | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType. (optional)
from_date = 'from_date_example' # str | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
to_date = 'to_date_example' # str | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34) (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Delete historical data of a certain entity.
    api_response = api_instance.reporter_delete_delete_entity(entity_id, type=type, from_date=from_date, to_date=to_date, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling InputApi->reporter_delete_delete_entity: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                                                                                                                                                                | Notes      |
| ----------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **entity_id**           | **str** | The entity id in which the query is restricted on. If the id is unique among all entity types, this could be used to uniquely identify the entity instance. Otherwise, you will have to use the entityType attribute to resolve ambiguity. |
| **type**                | **str** | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType.   | [optional] |
| **from_date**           | **str** | Optional. The starting date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                                                                      | [optional] |
| **to_date**             | **str** | Optional. The final date and time (inclusive) from which the context information is queried. Must be in ISO8601 format (e.g., 2018-01-05T15:44:34)                                                                                         | [optional] |
| **fiware_service**      | **str** | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                             | [optional] |
| **fiware_service_path** | **str** | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                         | [optional] |

### Return type

**str**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: text/plain, application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **204**     | Records successfully deleted. | -                |
| **404**     | Not Found                     | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **reporter_reporter_notify**

> reporter_reporter_notify(notification, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Notify QuantumLeap the arrival of a new NGSI notification.

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
notification = ngsi_timeseries_v2.Notification() # Notification |
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Notify QuantumLeap the arrival of a new NGSI notification.
    api_instance.reporter_reporter_notify(notification, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_reporter_notify: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
notification = ngsi_timeseries_v2.Notification() # Notification |
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Notify QuantumLeap the arrival of a new NGSI notification.
    api_instance.reporter_reporter_notify(notification, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_reporter_notify: %s\n" % e)
```

### Parameters

| Name                    | Type                                | Description                                                                                                                                        | Notes      |
| ----------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **notification**        | [**Notification**](Notification.md) |                                                                                                                                                    |
| **fiware_service**      | **str**                             | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy     | [optional] |
| **fiware_service_path** | **str**                             | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: Not defined

### HTTP response details

| Status code | Description                         | Response headers |
| ----------- | ----------------------------------- | ---------------- |
| **201**     | Successfully created record.        | -                |
| **400**     | Received notification is not valid. | -                |
| **500**     | Internal server error.              | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **reporter_reporter_subscribe**

> reporter_reporter_subscribe(orion_url, quantumleap_url,
> entity_type=entity_type, entity_id=entity_id, id_pattern=id_pattern,
> attributes=attributes, observed_attributes=observed_attributes,
> notified_attributes=notified_attributes, throttling=throttling,
> time_index_attribute=time_index_attribute, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Subscribe QL to process Orion notifications of certain type.

This endpoint simplifies the creation of the subscription in orion that will
generate the notifications to be consumed by QuantumLeap in order to save
historical records. If you want an advanced specification of the notifications,
you can always create the subscription in orion at your will. This endpoint just
aims to simplify the common use case.

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
orion_url = 'orion_url_example' # str | The url where QuantumLeap can reach Orion. Do not include specific paths, just the base one including the api version. E.g http://my-orion.com:1026/v2
quantumleap_url = 'quantumleap_url_example' # str | The url where Orion can reach QuantumLeap. Do not include specific paths, just the base one including the api version. E.g http://my-quantumleap.com:8668/v2
entity_type = 'entity_type_example' # str | The type of entities for which to create a subscription, so as to persist historical data of entities of this type. ATTENTION: If not specified, all entity types will be tracked. (optional)
entity_id = 'entity_id_example' # str | Id of the entity to track. If specified, it takes precedence over the idPattern parameter. If absent but an idPattern is given, then QL will use the idPattern to determine which entities to track. If no idPattern is given either, then QL will use the entityType if present. If not even an entityType is given, then QL will fall back to tracking all entities. (optional)
id_pattern = 'id_pattern_example' # str | The pattern covering the entity ids for which to subscribe. If not specified, QL will track all entities of the specified type. This attribute is documented in orion, see https://fiware-orion.readthedocs.io/en/master/user/walkthrough_apiv2/index.html#subscriptions (optional)
attributes = 'attributes_example' # str | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject's condition of the Orion subscription QL creates. They will also be used to fill the attrs field of the notification object in the subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in attributes. When the value of any of the attributes in A changes, Orion will send QL the current values of those attributes. Note that when using this attributes parameter the set of attributes that Orion will track for changes (observed attributes) is the same as the set of attributes that determine which data Orion will put in notifications (notified attributes). If the two sets need to be different, use the observedAttributes and notifiedAttributes parameters below. (If you supply an attributes parameter, observedAttributes and notifiedAttributes will be ignored.) (optional)
observed_attributes = 'observed_attributes_example' # str | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject's condition of the Orion subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in observedAttributes. When the value of any of the attributes in A changes, Orion will send QL the current values of the attributes specified by the notifiedAttributes parameter. If observedAttributes is absent, QL will be notified of any changes to the entities in E. (optional)
notified_attributes = 'notified_attributes_example' # str | Comma-separated list of attribute names to be used to restrict the data of which QL will keep a history. This list will be used to set the notification's attrs field of the subscription that QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) If not specified, QL will keep a history of all data changes in any of the entities identified by the given combination of entityType, entityId and idPattern. (optional)
throttling = 56 # int | Minimal period of time in seconds which must elapse between two consecutive notifications. This is the value QL will use for the throttling field when creating the subscription. If not specified, it defaults to 1. (optional)
time_index_attribute = 'time_index_attribute_example' # str | The name of a custom attribute to be used as a time index. On receiving notifications containing this attribute, QL will use its value as a time series index for the entity being notified. If specified, it should refer to an entity attribute whose value is an ISO 8601 timestamp. (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Subscribe QL to process Orion notifications of certain type.
    api_instance.reporter_reporter_subscribe(orion_url, quantumleap_url, entity_type=entity_type, entity_id=entity_id, id_pattern=id_pattern, attributes=attributes, observed_attributes=observed_attributes, notified_attributes=notified_attributes, throttling=throttling, time_index_attribute=time_index_attribute, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_reporter_subscribe: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import ngsi_timeseries_v2
from ngsi_timeseries_v2.rest import ApiException
from pprint import pprint
configuration = ngsi_timeseries_v2.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = ngsi_timeseries_v2.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = ngsi_timeseries_v2.InputApi(ngsi_timeseries_v2.ApiClient(configuration))
orion_url = 'orion_url_example' # str | The url where QuantumLeap can reach Orion. Do not include specific paths, just the base one including the api version. E.g http://my-orion.com:1026/v2
quantumleap_url = 'quantumleap_url_example' # str | The url where Orion can reach QuantumLeap. Do not include specific paths, just the base one including the api version. E.g http://my-quantumleap.com:8668/v2
entity_type = 'entity_type_example' # str | The type of entities for which to create a subscription, so as to persist historical data of entities of this type. ATTENTION: If not specified, all entity types will be tracked. (optional)
entity_id = 'entity_id_example' # str | Id of the entity to track. If specified, it takes precedence over the idPattern parameter. If absent but an idPattern is given, then QL will use the idPattern to determine which entities to track. If no idPattern is given either, then QL will use the entityType if present. If not even an entityType is given, then QL will fall back to tracking all entities. (optional)
id_pattern = 'id_pattern_example' # str | The pattern covering the entity ids for which to subscribe. If not specified, QL will track all entities of the specified type. This attribute is documented in orion, see https://fiware-orion.readthedocs.io/en/master/user/walkthrough_apiv2/index.html#subscriptions (optional)
attributes = 'attributes_example' # str | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject's condition of the Orion subscription QL creates. They will also be used to fill the attrs field of the notification object in the subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in attributes. When the value of any of the attributes in A changes, Orion will send QL the current values of those attributes. Note that when using this attributes parameter the set of attributes that Orion will track for changes (observed attributes) is the same as the set of attributes that determine which data Orion will put in notifications (notified attributes). If the two sets need to be different, use the observedAttributes and notifiedAttributes parameters below. (If you supply an attributes parameter, observedAttributes and notifiedAttributes will be ignored.) (optional)
observed_attributes = 'observed_attributes_example' # str | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject's condition of the Orion subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in observedAttributes. When the value of any of the attributes in A changes, Orion will send QL the current values of the attributes specified by the notifiedAttributes parameter. If observedAttributes is absent, QL will be notified of any changes to the entities in E. (optional)
notified_attributes = 'notified_attributes_example' # str | Comma-separated list of attribute names to be used to restrict the data of which QL will keep a history. This list will be used to set the notification's attrs field of the subscription that QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) If not specified, QL will keep a history of all data changes in any of the entities identified by the given combination of entityType, entityId and idPattern. (optional)
throttling = 56 # int | Minimal period of time in seconds which must elapse between two consecutive notifications. This is the value QL will use for the throttling field when creating the subscription. If not specified, it defaults to 1. (optional)
time_index_attribute = 'time_index_attribute_example' # str | The name of a custom attribute to be used as a time index. On receiving notifications containing this attribute, QL will use its value as a time series index for the entity being notified. If specified, it should refer to an entity attribute whose value is an ISO 8601 timestamp. (optional)
fiware_service = 'fiware_service_example' # str | The corresponding 'fiware-service' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)
fiware_service_path = 'fiware_service_path_example' # str | The corresponding 'fiware-servicepath' header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy (optional)

try:
    # Subscribe QL to process Orion notifications of certain type.
    api_instance.reporter_reporter_subscribe(orion_url, quantumleap_url, entity_type=entity_type, entity_id=entity_id, id_pattern=id_pattern, attributes=attributes, observed_attributes=observed_attributes, notified_attributes=notified_attributes, throttling=throttling, time_index_attribute=time_index_attribute, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling InputApi->reporter_reporter_subscribe: %s\n" % e)
```

### Parameters

| Name                     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Notes      |
| ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **orion_url**            | **str** | The url where QuantumLeap can reach Orion. Do not include specific paths, just the base one including the api version. E.g http://my-orion.com:1026/v2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **quantumleap_url**      | **str** | The url where Orion can reach QuantumLeap. Do not include specific paths, just the base one including the api version. E.g http://my-quantumleap.com:8668/v2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **entity_type**          | **str** | The type of entities for which to create a subscription, so as to persist historical data of entities of this type. ATTENTION: If not specified, all entity types will be tracked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [optional] |
| **entity_id**            | **str** | Id of the entity to track. If specified, it takes precedence over the idPattern parameter. If absent but an idPattern is given, then QL will use the idPattern to determine which entities to track. If no idPattern is given either, then QL will use the entityType if present. If not even an entityType is given, then QL will fall back to tracking all entities.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | [optional] |
| **id_pattern**           | **str** | The pattern covering the entity ids for which to subscribe. If not specified, QL will track all entities of the specified type. This attribute is documented in orion, see https://fiware-orion.readthedocs.io/en/master/user/walkthrough_apiv2/index.html#subscriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [optional] |
| **attributes**           | **str** | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject&#39;s condition of the Orion subscription QL creates. They will also be used to fill the attrs field of the notification object in the subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in attributes. When the value of any of the attributes in A changes, Orion will send QL the current values of those attributes. Note that when using this attributes parameter the set of attributes that Orion will track for changes (observed attributes) is the same as the set of attributes that determine which data Orion will put in notifications (notified attributes). If the two sets need to be different, use the observedAttributes and notifiedAttributes parameters below. (If you supply an attributes parameter, observedAttributes and notifiedAttributes will be ignored.) | [optional] |
| **observed_attributes**  | **str** | Comma-separated list of attribute names to track. These attributes are used to narrow the condition that triggers data change notifications---i.e. they will be used to fill the attrs field of the subject&#39;s condition of the Orion subscription QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) More specifically, call E the set of entities determined by the given combination of entityType, entityId and idPattern. Then we have a set A of all attributes of entities in E whose name is in observedAttributes. When the value of any of the attributes in A changes, Orion will send QL the current values of the attributes specified by the notifiedAttributes parameter. If observedAttributes is absent, QL will be notified of any changes to the entities in E.                                                                                                                                                                                                                                                                                                                                                                                                                              | [optional] |
| **notified_attributes**  | **str** | Comma-separated list of attribute names to be used to restrict the data of which QL will keep a history. This list will be used to set the notification&#39;s attrs field of the subscription that QL creates. (Full details at: http://telefonicaid.github.io/fiware-orion/api/v2/stable/) If not specified, QL will keep a history of all data changes in any of the entities identified by the given combination of entityType, entityId and idPattern.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [optional] |
| **throttling**           | **int** | Minimal period of time in seconds which must elapse between two consecutive notifications. This is the value QL will use for the throttling field when creating the subscription. If not specified, it defaults to 1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [optional] |
| **time_index_attribute** | **str** | The name of a custom attribute to be used as a time index. On receiving notifications containing this attribute, QL will use its value as a time series index for the entity being notified. If specified, it should refer to an entity attribute whose value is an ISO 8601 timestamp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [optional] |
| **fiware_service**       | **str** | The corresponding &#39;fiware-service&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [optional] |
| **fiware_service_path**  | **str** | The corresponding &#39;fiware-servicepath&#39; header. See http://fiware-orion.readthedocs.io/en/latest/user/multitenancy/index.html#multi-tenancy                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **201**     | Successfully created subscription.                      | -                |
| **400**     | Bad Request                                             | -                |
| **412**     | You specified an unreachable Orion url for QuantumLeap. | -                |
| **500**     | Internal server error.                                  | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
