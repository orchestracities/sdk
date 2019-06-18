# ngsi_timeseries_v2.MetaApi

All URIs are relative to _https://api.s.orchestracities.com/timeseries_

| Method                                                                  | HTTP request     | Description                                                                             |
| ----------------------------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| [**reporter_health_get_health**](MetaApi.md#reporter_health_get_health) | **GET** /health  | Returns the health-check status of QuantumLeap and the services it depends on.          |
| [**reporter_reporter_config**](MetaApi.md#reporter_reporter_config)     | **POST** /config | (To Be Implemented) Customize your persistance configuration to better suit your needs. |
| [**reporter_version_version**](MetaApi.md#reporter_version_version)     | **GET** /version | Returns the version of QuantumLeap.                                                     |

# **reporter_health_get_health**

> Status reporter_health_get_health()

Returns the health-check status of QuantumLeap and the services it depends on.

This endpoint is intended for administrators of QuantumLeap. Using the
information returned by this endpoint they can diagnose problems in the service
or its dependencies. This information is also useful for cloud tools such as
orchestrators and load balancers with rules based on health-checks. Due to the
lack of a standardized response format, we base the implementation on the draft
of https://inadarei.github.io/rfc-healthcheck/ QuantumlLeap's dependencies are
the following: - CrateDB: Critical - Redis: Critical only if geocoding is
enabled. - OSM: Non-critical

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
api_instance = ngsi_timeseries_v2.MetaApi(ngsi_timeseries_v2.ApiClient(configuration))

try:
    # Returns the health-check status of QuantumLeap and the services it depends on.
    api_response = api_instance.reporter_health_get_health()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetaApi->reporter_health_get_health: %s\n" % e)
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
api_instance = ngsi_timeseries_v2.MetaApi(ngsi_timeseries_v2.ApiClient(configuration))

try:
    # Returns the health-check status of QuantumLeap and the services it depends on.
    api_response = api_instance.reporter_health_get_health()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetaApi->reporter_health_get_health: %s\n" % e)
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

### HTTP response details

| Status code | Description                                                                                                                                                                    | Response headers |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| **200**     | QuantumLeap health is OK, the service works as expected.                                                                                                                       | -                |
| **207**     | QuantumLeap health may be OK, but some of its dependencies report a warning status, or some of its non-critical dependencies report a fail status, so you should double-check. | -                |
| **424**     | QuantumLeap health is NOT OK, as some of its dependencies report a failure status.                                                                                             | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **reporter_reporter_config**

> reporter_reporter_config(type=type, replicas=replicas)

(To Be Implemented) Customize your persistance configuration to better suit your
needs.

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
api_instance = ngsi_timeseries_v2.MetaApi(ngsi_timeseries_v2.ApiClient(configuration))
type = 'type_example' # str | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType. (optional)
replicas = 3.4 # float | The number of replicas to use for the selected types. (optional)

try:
    # (To Be Implemented) Customize your persistance configuration to better suit your needs.
    api_instance.reporter_reporter_config(type=type, replicas=replicas)
except ApiException as e:
    print("Exception when calling MetaApi->reporter_reporter_config: %s\n" % e)
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
api_instance = ngsi_timeseries_v2.MetaApi(ngsi_timeseries_v2.ApiClient(configuration))
type = 'type_example' # str | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType. (optional)
replicas = 3.4 # float | The number of replicas to use for the selected types. (optional)

try:
    # (To Be Implemented) Customize your persistance configuration to better suit your needs.
    api_instance.reporter_reporter_config(type=type, replicas=replicas)
except ApiException as e:
    print("Exception when calling MetaApi->reporter_reporter_config: %s\n" % e)
```

### Parameters

| Name         | Type      | Description                                                                                                                                                                                                                              | Notes      |
| ------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **type**     | **str**   | Comma-separated list of entity types whose data are to be included in the response. Use only one (no comma) when required. If used to resolve ambiguity for the given entityId, make sure the given entityId exists for this entityType. | [optional] |
| **replicas** | **float** | The number of replicas to use for the selected types.                                                                                                                                                                                    | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **501**     | Not implemented! | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **reporter_version_version**

> Version reporter_version_version()

Returns the version of QuantumLeap.

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
api_instance = ngsi_timeseries_v2.MetaApi(ngsi_timeseries_v2.ApiClient(configuration))

try:
    # Returns the version of QuantumLeap.
    api_response = api_instance.reporter_version_version()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetaApi->reporter_version_version: %s\n" % e)
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
api_instance = ngsi_timeseries_v2.MetaApi(ngsi_timeseries_v2.ApiClient(configuration))

try:
    # Returns the version of QuantumLeap.
    api_response = api_instance.reporter_version_version()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MetaApi->reporter_version_version: %s\n" % e)
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

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | Successful response. | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
