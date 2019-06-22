# IotData.InputApi

All URIs are relative to _https://api.s.orchestracities.com/iot/data_

| Method                               | HTTP request   | Description                       |
| ------------------------------------ | -------------- | --------------------------------- |
| [**jsonData**](InputApi.md#jsonData) | **POST** /json | Send data to a device using JSON  |
| [**ulData**](InputApi.md#ulData)     | **POST** /ul   | Send data to a device using UL2.0 |

## jsonData

> jsonData(i, k, body, opts)

Send data to a device using JSON

### Example

```javascript
import IotData from "iot_data";
let defaultClient = IotData.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new IotData.InputApi();
let i = "i_example"; // String | Device ID (unique for the API Key).
let k = "k_example"; // String | API Key for the service the device is registered on.
let body = { h: "string", t: 23, l: true }; // Object | The payload consists of a simple plain JSON object, where each attribute of the object will be mapped to an attribute in the NGSI entity. By \"plain JSON objects\" or \"single-level JSON objects\" we mean:    - valid JSON objects serialized as unescaped strings.   - JSON objects with a single level, i.e.: all the first level attributes of the JSON object are Strings or Numbers (not arrays or other objects).   Additional information are available at [https://fiware-iotagent-json.rtfd.io/](https://fiware-iotagent-json.rtfd.io/)
let opts = {
    t: "t_example" // String | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional).
};
apiInstance.jsonData(i, k, body, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully.");
    }
});
```

### Parameters

| Name     | Type       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Notes      |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **i**    | **String** | Device ID (unique for the API Key).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **k**    | **String** | API Key for the service the device is registered on.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **body** | **Object** | The payload consists of a simple plain JSON object, where each attribute of the object will be mapped to an attribute in the NGSI entity. By \&quot;plain JSON objects\&quot; or \&quot;single-level JSON objects\&quot; we mean: - valid JSON objects serialized as unescaped strings. - JSON objects with a single level, i.e.: all the first level attributes of the JSON object are Strings or Numbers (not arrays or other objects). Additional information are available at [https://fiware-iotagent-json.rtfd.io/](https://fiware-iotagent-json.rtfd.io/) |
| **t**    | **String** | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional).                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | [optional] |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: application/json
-   **Accept**: Not defined

## ulData

> ulData(i, k, body, opts)

Send data to a device using UL2.0

### Example

```javascript
import IotData from "iot_data";
let defaultClient = IotData.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';
// Configure Bearer (JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications["BearerAuth"];
BearerAuth.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new IotData.InputApi();
let i = "i_example"; // String | Device ID (unique for the API Key).
let k = "k_example"; // String | API Key for the service the device is registered on.
let body = t | 15 | k | abc | z | true; // String | The payload for information update requests is composed of a list of key-value pairs separated by the `|` character. E.g.: `t|15|k|abc|z|true` In this example, two attributes, one named \"t\" with value \"15\" and another named \"k\" with value \"abc\" are transmitted. NGSI v2 update uses 15 (number), abc (string), and true (boolean). This functionality relies on string measures casting feature implemented in the iotagent library. In addition, the device has to be provisioned using the right types for the attributes to be cast, which are:   * Type `Text` for sting   * Type `Number` for integer or float numbers   * Type `Boolean` for boolean   * Type `None` for null.  Commands syntax is as follows: `<device name>@<command name>|<command value>`.  Additional information are available at [https://fiware-iotagent-ul.rtfd.io/](https://fiware-iotagent-ul.rtfd.io/)
let opts = {
    t: "t_example" // String | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional).
};
apiInstance.ulData(i, k, body, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully.");
    }
});
```

### Parameters

| Name     | Type       | Description                                                                                                  | Notes                           |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| **i**    | **String** | Device ID (unique for the API Key).                                                                          |
| **k**    | **String** | API Key for the service the device is registered on.                                                         |
| **body** | **String** | The payload for information update requests is composed of a list of key-value pairs separated by the &#x60; | &#x60; character. E.g.: &#x60;t | 15 | k | abc | z | true&#x60; In this example, two attributes, one named \&quot;t\&quot; with value \&quot;15\&quot; and another named \&quot;k\&quot; with value \&quot;abc\&quot; are transmitted. NGSI v2 update uses 15 (number), abc (string), and true (boolean). This functionality relies on string measures casting feature implemented in the iotagent library. In addition, the device has to be provisioned using the right types for the attributes to be cast, which are: _ Type &#x60;Text&#x60; for sting _ Type &#x60;Number&#x60; for integer or float numbers _ Type &#x60;Boolean&#x60; for boolean _ Type &#x60;None&#x60; for null. Commands syntax is as follows: &#x60;&lt;device name&gt;@&lt;command name&gt; | &lt;command value&gt;&#x60;. Additional information are available at [https://fiware-iotagent-ul.rtfd.io/](https://fiware-iotagent-ul.rtfd.io/) |
| **t**    | **String** | Timestamp of the measure. Will override the automatic IoTAgent timestamp (optional).                         | [optional]                      |

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [BearerAuth](../README.md#BearerAuth)

### HTTP request headers

-   **Content-Type**: text/plain
-   **Accept**: Not defined
