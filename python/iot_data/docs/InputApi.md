# iot_data.InputApi

All URIs are relative to _https://api.s.orchestracities.com/iot/data_

| Method                                 | HTTP request   | Description                       |
| -------------------------------------- | -------------- | --------------------------------- |
| [**json_data**](InputApi.md#json_data) | **POST** /json | Send data to a device using JSON  |
| [**ul_data**](InputApi.md#ul_data)     | **POST** /ul   | Send data to a device using UL2.0 |

# **json_data**

> json_data(i, k, body, t=t)

Send data to a device using JSON

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import iot_data
from iot_data.rest import ApiException
from pprint import pprint
configuration = iot_data.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = iot_data.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = iot_data.InputApi(iot_data.ApiClient(configuration))
i = 'i_example' # str | Device ID (unique for the API Key).
k = 'k_example' # str | API Key for the service the device is registered on.
body = {"h":"string","t":23,"l":true} # object | The payload consists of a simple plain JSON object, where each attribute of the object will be mapped to an attribute in the NGSI entity. By \"plain JSON objects\" or \"single-level JSON objects\" we mean:    - valid JSON objects serialized as unescaped strings.   - JSON objects with a single level, i.e.: all the first level attributes of the JSON object are Strings or Numbers (not arrays or other objects).   Additional information are available at [https://fiware-iotagent-json.rtfd.io/](https://fiware-iotagent-json.rtfd.io/)
t = 't_example' # str | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional). (optional)

try:
    # Send data to a device using JSON
    api_instance.json_data(i, k, body, t=t)
except ApiException as e:
    print("Exception when calling InputApi->json_data: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import iot_data
from iot_data.rest import ApiException
from pprint import pprint
configuration = iot_data.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = iot_data.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = iot_data.InputApi(iot_data.ApiClient(configuration))
i = 'i_example' # str | Device ID (unique for the API Key).
k = 'k_example' # str | API Key for the service the device is registered on.
body = {"h":"string","t":23,"l":true} # object | The payload consists of a simple plain JSON object, where each attribute of the object will be mapped to an attribute in the NGSI entity. By \"plain JSON objects\" or \"single-level JSON objects\" we mean:    - valid JSON objects serialized as unescaped strings.   - JSON objects with a single level, i.e.: all the first level attributes of the JSON object are Strings or Numbers (not arrays or other objects).   Additional information are available at [https://fiware-iotagent-json.rtfd.io/](https://fiware-iotagent-json.rtfd.io/)
t = 't_example' # str | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional). (optional)

try:
    # Send data to a device using JSON
    api_instance.json_data(i, k, body, t=t)
except ApiException as e:
    print("Exception when calling InputApi->json_data: %s\n" % e)
```

### Parameters

| Name     | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Notes      |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **i**    | **str**    | Device ID (unique for the API Key).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **k**    | **str**    | API Key for the service the device is registered on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **body** | **object** | The payload consists of a simple plain JSON object, where each attribute of the object will be mapped to an attribute in the NGSI entity. By \&quot;plain JSON objects\&quot; or \&quot;single-level JSON objects\&quot; we mean: - valid JSON objects serialized as unescaped strings. - JSON objects with a single level, i.e.: all the first level attributes of the JSON object are Strings or Numbers (not arrays or other objects). Additional information are available at [https://fiware-iotagent-json.rtfd.io/](https://fiware-iotagent-json.rtfd.io/) |
| **t**    | **str**    | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | [optional] |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **2XX**     |             | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

# **ul_data**

> ul_data(i, k, body, t=t)

Send data to a device using UL2.0

### Example

-   Api Key Authentication (ApiKeyAuth):

```python
from __future__ import print_function
import time
import iot_data
from iot_data.rest import ApiException
from pprint import pprint
configuration = iot_data.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = iot_data.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = iot_data.InputApi(iot_data.ApiClient(configuration))
i = 'i_example' # str | Device ID (unique for the API Key).
k = 'k_example' # str | API Key for the service the device is registered on.
body = t|15|k|abc|z|true # str | The payload for information update requests is composed of a list of key-value pairs separated by the `|` character. E.g.: `t|15|k|abc|z|true` In this example, two attributes, one named \"t\" with value \"15\" and another named \"k\" with value \"abc\" are transmitted. NGSI v2 update uses 15 (number), abc (string), and true (boolean). This functionality relies on string measures casting feature implemented in the iotagent library. In addition, the device has to be provisioned using the right types for the attributes to be cast, which are:   * Type `Text` for sting   * Type `Number` for integer or float numbers   * Type `Boolean` for boolean   * Type `None` for null.  Commands syntax is as follows: `<device name>@<command name>|<command value>`.  Additional information are available at [https://fiware-iotagent-ul.rtfd.io/](https://fiware-iotagent-ul.rtfd.io/)
t = 't_example' # str | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional). (optional)

try:
    # Send data to a device using UL2.0
    api_instance.ul_data(i, k, body, t=t)
except ApiException as e:
    print("Exception when calling InputApi->ul_data: %s\n" % e)
```

-   Bearer (JWT) Authentication (BearerAuth):

```python
from __future__ import print_function
import time
import iot_data
from iot_data.rest import ApiException
from pprint import pprint
configuration = iot_data.Configuration()
# Configure API key authorization: ApiKeyAuth
configuration.api_key['X-Gravitee-Api-Key'] = 'YOUR_API_KEY'
# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['X-Gravitee-Api-Key'] = 'Bearer'
configuration = iot_data.Configuration()
# Configure Bearer authorization (JWT): BearerAuth
configuration.access_token = 'YOUR_BEARER_TOKEN'

# create an instance of the API class
api_instance = iot_data.InputApi(iot_data.ApiClient(configuration))
i = 'i_example' # str | Device ID (unique for the API Key).
k = 'k_example' # str | API Key for the service the device is registered on.
body = t|15|k|abc|z|true # str | The payload for information update requests is composed of a list of key-value pairs separated by the `|` character. E.g.: `t|15|k|abc|z|true` In this example, two attributes, one named \"t\" with value \"15\" and another named \"k\" with value \"abc\" are transmitted. NGSI v2 update uses 15 (number), abc (string), and true (boolean). This functionality relies on string measures casting feature implemented in the iotagent library. In addition, the device has to be provisioned using the right types for the attributes to be cast, which are:   * Type `Text` for sting   * Type `Number` for integer or float numbers   * Type `Boolean` for boolean   * Type `None` for null.  Commands syntax is as follows: `<device name>@<command name>|<command value>`.  Additional information are available at [https://fiware-iotagent-ul.rtfd.io/](https://fiware-iotagent-ul.rtfd.io/)
t = 't_example' # str | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional). (optional)

try:
    # Send data to a device using UL2.0
    api_instance.ul_data(i, k, body, t=t)
except ApiException as e:
    print("Exception when calling InputApi->ul_data: %s\n" % e)
```

### Parameters

| Name     | Type    | Description                                                                                                  | Notes                           |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| **i**    | **str** | Device ID (unique for the API Key).                                                                          |
| **k**    | **str** | API Key for the service the device is registered on.                                                         |
| **body** | **str** | The payload for information update requests is composed of a list of key-value pairs separated by the &#x60; | &#x60; character. E.g.: &#x60;t | 15 | k | abc | z | true&#x60; In this example, two attributes, one named \&quot;t\&quot; with value \&quot;15\&quot; and another named \&quot;k\&quot; with value \&quot;abc\&quot; are transmitted. NGSI v2 update uses 15 (number), abc (string), and true (boolean). This functionality relies on string measures casting feature implemented in the iotagent library. In addition, the device has to be provisioned using the right types for the attributes to be cast, which are: _ Type &#x60;Text&#x60; for sting _ Type &#x60;Number&#x60; for integer or float numbers _ Type &#x60;Boolean&#x60; for boolean _ Type &#x60;None&#x60; for null. Commands syntax is as follows: &#x60;&lt;device name&gt;@&lt;command name&gt; | &lt;command value&gt;&#x60;. Additional information are available at [https://fiware-iotagent-ul.rtfd.io/](https://fiware-iotagent-ul.rtfd.io/) |
| **t**    | **str** | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional).                         | [optional]                      |

### Return type

void (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: text/plain
-   **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **2XX**     |             | -                |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)
