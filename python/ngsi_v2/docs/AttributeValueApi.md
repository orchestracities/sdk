# ngsi_v2.AttributeValueApi

All URIs are relative to _https://api.s.orchestracities.com/context/v2_

| Method                                                                    | HTTP request                                        | Description |
| ------------------------------------------------------------------------- | --------------------------------------------------- | ----------- |
| [**get_attribute_value**](AttributeValueApi.md#get_attribute_value)       | **GET** /entities/{entityId}/attrs/{attrName}/value |
| [**update_attribute_value**](AttributeValueApi.md#update_attribute_value) | **PUT** /entities/{entityId}/attrs/{attrName}/value |

# **get_attribute_value**

> AttributeValueObject get_attribute_value(entity_id, attr_name,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path,
> type=type)

This operation returns the `value` property with the value of the attribute. _
If attribute value is JSON Array or Object: _ If `Accept` header can be expanded
to `application/json` or `text/plain` return the value as a JSON with a response
type of application/json or text/plain (whichever is the first in `Accept`
header or `application/json` in the case of `Accept: */*`). _ Else return a HTTP
error \"406 Not Acceptable: accepted MIME types: application/json, text/plain\"
_ If attribute value is a string, number, null or boolean: _ If `Accept` header
can be expanded to text/plain return the value as text. In case of a string,
citation marks are used at the begining and end. _ Else return a HTTP error
\"406 Not Acceptable: accepted MIME types: text/plain\" Response: _ Successful
operation uses 200 OK. _ Errors use a non-2xx and (optionally) an error payload.
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
api_instance = ngsi_v2.AttributeValueApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity in question
attr_name = 'attr_name_example' # str | Name of the attribute to be retrieved.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_response = api_instance.get_attribute_value(entity_id, attr_name, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttributeValueApi->get_attribute_value: %s\n" % e)
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
api_instance = ngsi_v2.AttributeValueApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity in question
attr_name = 'attr_name_example' # str | Name of the attribute to be retrieved.
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_response = api_instance.get_attribute_value(entity_id, attr_name, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AttributeValueApi->get_attribute_value: %s\n" % e)
```

### Parameters

| Name                    | Type    | Description                                                                                     | Notes      |
| ----------------------- | ------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str** | Id of the entity in question                                                                    |
| **attr_name**           | **str** | Name of the attribute to be retrieved.                                                          |
| **fiware_service**      | **str** |                                                                                                 | [optional] |
| **fiware_service_path** | **str** |                                                                                                 | [optional] |
| **type**                | **str** | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |

### Return type

[**AttributeValueObject**](AttributeValueObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: Not defined
-   **Accept**: application/json, plain/text

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | Attribute Value of an Entity | -                |
| **4xx**     | error payload                | -                |
| **5xx**     | error payload                | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **update_attribute_value**

> update_attribute_value(entity_id, attr_name, request_body,
> fiware_service=fiware_service, fiware_service_path=fiware_service_path,
> type=type)

The request payload is the new attribute value. _ If the request payload MIME
type is `application/json`, then the value of the attribute is set to the JSON
object or array coded in the payload (if the payload is not a valid JSON
document, then an error is returned). _ If the request payload MIME type is
`text/plain`, then the following algorithm is applied to the payload: _ If the
payload starts and ends with citation-marks (`\"`), the value is taken as a
string (the citation marks themselves are not considered part of the string) _
If `true` or `false`, the value is taken as a boolean. _ If `null`, the value is
taken as null. _ If these first three tests 'fail', the text is interpreted as a
number. _ If not a valid number, then an error is returned and the attribute's
value is unchanged. The payload MIME type in the request is specified in the
`Content-Type` HTTP header. Response: _ Successful operation uses 204 No
Content \* Errors use a non-2xx and (optionally) an error payload. See
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
api_instance = ngsi_v2.AttributeValueApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be updated.
attr_name = 'attr_name_example' # str | Attribute name.
request_body = None # dict(str, object) |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_instance.update_attribute_value(entity_id, attr_name, request_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling AttributeValueApi->update_attribute_value: %s\n" % e)
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
api_instance = ngsi_v2.AttributeValueApi(ngsi_v2.ApiClient(configuration))
entity_id = 'entity_id_example' # str | Id of the entity to be updated.
attr_name = 'attr_name_example' # str | Attribute name.
request_body = None # dict(str, object) |
fiware_service = 'fiware_service_example' # str |  (optional)
fiware_service_path = 'fiware_service_path_example' # str |  (optional)
type = 'type_example' # str | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. (optional)

try:
    api_instance.update_attribute_value(entity_id, attr_name, request_body, fiware_service=fiware_service, fiware_service_path=fiware_service_path, type=type)
except ApiException as e:
    print("Exception when calling AttributeValueApi->update_attribute_value: %s\n" % e)
```

### Parameters

| Name                    | Type                               | Description                                                                                     | Notes      |
| ----------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------- | ---------- |
| **entity_id**           | **str**                            | Id of the entity to be updated.                                                                 |
| **attr_name**           | **str**                            | Attribute name.                                                                                 |
| **request_body**        | [**dict(str, object)**](object.md) |                                                                                                 |
| **fiware_service**      | **str**                            |                                                                                                 | [optional] |
| **fiware_service_path** | **str**                            |                                                                                                 | [optional] |
| **type**                | **str**                            | Entity type, to avoid ambiguity in the case there are several entities with the same entity id. | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json, plain/text
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
