# ngsi_v2.RegistrationsApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                   | HTTP request                               | Description |
| ------------------------------------------------------------------------ | ------------------------------------------ | ----------- |
| [**create_registrations**](RegistrationsApi.md#create_registrations)     | **POST** /registrations                    |
| [**delete_registration**](RegistrationsApi.md#delete_registration)       | **DELETE** /registrations/{registrationId} |
| [**retrieve_registration**](RegistrationsApi.md#retrieve_registration)   | **GET** /registrations/{registrationId}    |
| [**retrieve_registrations**](RegistrationsApi.md#retrieve_registrations) | **GET** /registrations                     |
| [**update_registration**](RegistrationsApi.md#update_registration)       | **PATCH** /registrations/{registrationId}  |

# **create_registrations**

> create_registrations(registration_body, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Creates a new context provider registration. This is typically used for binding
context sources as providers of certain data. The registration is represented by
a JSON object as described at the beginning of this section. Response: _
Successful operation uses 201 Created _ Errors use a non-2xx and (optionally) an
error payload. See subsection on
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_body = ngsi_v2.RegistrationBody() # RegistrationBody |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_instance.create_registrations(registration_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling RegistrationsApi->create_registrations: %s\n" % e)
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_body = ngsi_v2.RegistrationBody() # RegistrationBody |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_instance.create_registrations(registration_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling RegistrationsApi->create_registrations: %s\n" % e)
```

### Parameters

| Name                    | Type                                        | Description | Notes      |
| ----------------------- | ------------------------------------------- | ----------- | ---------- |
| **registration_body**   | [**RegistrationBody**](RegistrationBody.md) |             |
| **fiware_service**      | **str**                                     |             | [optional] |
| **fiware_service_path** | **str**                                     |             | [optional] |

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
| **201**     |               | \* Location - URL of the created registration. <br> |
| **0**       | error payload | -                                                   |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **delete_registration**

> delete_registration(registration_id, fiware_service=fiware_service,
> fiware_service_path=fiware_service_path)

Cancels a context provider registration. Response: _ Successful operation uses
204 No Content _ Errors use a non-2xx and (optionally) an error payload. See
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_id = 'registration_id_example' # str | registration Id.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_instance.delete_registration(registration_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling RegistrationsApi->delete_registration: %s\n" % e)
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_id = 'registration_id_example' # str | registration Id.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_instance.delete_registration(registration_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling RegistrationsApi->delete_registration: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description      | Notes      |
| ----------------------- | ------- | ---------------- | ---------- |
| **registration_id**     | **str** | registration Id. |
| **fiware_service**      | **str** |                  | [optional] |
| **fiware_service_path** | **str** |                  | [optional] |

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

# **retrieve_registration**

> Registration retrieve_registration(registration_id,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path)

The response is the registration represented by a JSON object as described at
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_id = 'registration_id_example' # str | registration Id.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_response = api_instance.retrieve_registration(registration_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RegistrationsApi->retrieve_registration: %s\n" % e)
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_id = 'registration_id_example' # str | registration Id.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_response = api_instance.retrieve_registration(registration_id, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RegistrationsApi->retrieve_registration: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description      | Notes      |
| ----------------------- | ------- | ---------------- | ---------- |
| **registration_id**     | **str** | registration Id. |
| **fiware_service**      | **str** |                  | [optional] |
| **fiware_service_path** | **str** |                  | [optional] |

### Return type

[**Registration**](Registration.md)

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

# **retrieve_registrations**

> list[Registration] retrieve_registrations(fiware_service=fiware_service,
> fiware_service_path=fiware_service_path, limit=limit, offset=offset,
> options=options)

Lists all the context provider registrations present in the system.

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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
limit = 56 # int | Limit the number of types to be retrieved (optional)
offset = 56 # int | Skip a number of records (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_registrations(fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RegistrationsApi->retrieve_registrations: %s\n" % e)
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
limit = 56 # int | Limit the number of types to be retrieved (optional)
offset = 56 # int | Skip a number of records (optional)
options = 'options_example' # str | Options dictionary (optional)

try:
    api_response = api_instance.retrieve_registrations(fiware_service=fiware_service, fiware_service_path=fiware_service_path, limit=limit, offset=offset, options=options)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling RegistrationsApi->retrieve_registrations: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                               | Notes      |
| ----------------------- | ------- | ----------------------------------------- | ---------- |
| **fiware_service**      | **str** |                                           | [optional] |
| **fiware_service_path** | **str** |                                           | [optional] |
| **limit**               | **int** | Limit the number of types to be retrieved | [optional] |
| **offset**              | **int** | Skip a number of records                  | [optional] |
| **options**             | **str** | Options dictionary                        | [optional] |

### Return type

[**list[Registration]**](Registration.md)

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

# **update_registration**

> update_registration(registration_id, registration_body,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path)

Creates a new context provider registration. This is typically used for binding
context sources as providers of certain data. The registration is represented by
a JSON object as described at the beginning of this section. Response: _
Successful operation uses 201 Created _ Errors use a non-2xx and (optionally) an
error payload. See subsection on
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_id = 'registration_id_example' # str | registration Id.
registration_body = ngsi_v2.RegistrationBody() # RegistrationBody |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_instance.update_registration(registration_id, registration_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling RegistrationsApi->update_registration: %s\n" % e)
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
api_instance = ngsi_v2.RegistrationsApi(ngsi_v2.ApiClient(configuration))
registration_id = 'registration_id_example' # str | registration Id.
registration_body = ngsi_v2.RegistrationBody() # RegistrationBody |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)

try:
    api_instance.update_registration(registration_id, registration_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path)
except ApiException as e:
    print("Exception when calling RegistrationsApi->update_registration: %s\n" % e)
```

### Parameters

| Name                    | Type                                        | Description      | Notes      |
| ----------------------- | ------------------------------------------- | ---------------- | ---------- |
| **registration_id**     | **str**                                     | registration Id. |
| **registration_body**   | [**RegistrationBody**](RegistrationBody.md) |                  |
| **fiware_service**      | **str**                                     |                  | [optional] |
| **fiware_service_path** | **str**                                     |                  | [optional] |

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
